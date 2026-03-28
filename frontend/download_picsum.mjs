import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesPath = path.join(__dirname, 'src/data/articles.js');
const publicArticlesDir = path.join(__dirname, 'public/articles');

let content = fs.readFileSync(articlesPath, 'utf8');

const urlRegex = /https:\/\/picsum\.photos\/seed\/[^\/]+\/\d+\/\d+/g;
const urls = [...new Set(content.match(urlRegex) || [])];

console.log(`Found ${urls.length} unique picsum images to download.`);

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        };
        const handleResponse = (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // follow redirect
                let redirectUrl = response.headers.location;
                if (!redirectUrl.startsWith('http')) {
                    redirectUrl = 'https://picsum.photos' + redirectUrl;
                }
                return https.get(redirectUrl, options, handleResponse).on('error', err => reject(err));
            } else if (response.statusCode >= 200 && response.statusCode < 300) {
                response.pipe(file);
                file.on('finish', () => { file.close(resolve); });
            } else {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }
        };
        https.get(url, options, handleResponse).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function run() {
    let index = 1;
    for (const url of urls) {
        const match = url.match(/seed\/([^\/]+)/);
        const seed = match ? match[1] : `picsum_${index}`;
        const filename = `${seed}.jpg`;
        const dest = path.join(publicArticlesDir, filename);

        console.log(`[${index}/${urls.length}] Downloading to ${filename}...`);
        try {
            await downloadImage(url, dest);
            console.log(`Success: ${filename}`);
        } catch (err) {
            console.error(`Failed: ${url}`, err);
            console.log(`Using fallback for ${filename}`);
            try {
                fs.copyFileSync(path.join(publicArticlesDir, 'img_1.jpg'), dest);
            } catch(e) {}
        }
        
        // Always replace it, even if copied from fallback
        const regex = new RegExp(escapeRegExp(url), 'g');
        content = content.replace(regex, `/articles/${filename}`);
        
        index++;
    }

    fs.writeFileSync(articlesPath, content, 'utf8');
    console.log('Update articles.js complete!');
}

run();
