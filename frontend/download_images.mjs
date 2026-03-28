import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesPath = path.join(__dirname, 'src/data/articles.js');
const publicArticlesDir = path.join(__dirname, 'public/articles');

if (!fs.existsSync(publicArticlesDir)) {
    fs.mkdirSync(publicArticlesDir, { recursive: true });
}

let content = fs.readFileSync(articlesPath, 'utf8');
const urlRegex = /https:\/\/images\.unsplash\.com\/[^"]+/g;
const urls = [...new Set(content.match(urlRegex) || [])];

console.log(`Found ${urls.length} unique images to download.`);

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // follow redirect
                return https.get(response.headers.location, (res2) => {
                    res2.pipe(file);
                    file.on('finish', () => { file.close(resolve); });
                }).on('error', err => reject(err));
            } else if (response.statusCode >= 200 && response.statusCode < 300) {
                response.pipe(file);
                file.on('finish', () => { file.close(resolve); });
            } else {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

async function run() {
    let index = 1;
    for (const url of urls) {
        const isAvatar = url.includes('w=150');
        const filename = `${isAvatar ? 'avatar' : 'img'}_${index}.jpg`;
        const dest = path.join(publicArticlesDir, filename);

        console.log(`[${index}/${urls.length}] Downloading to ${filename}...`);
        try {
            await downloadImage(url, dest);
            console.log(`Success: ${filename}`);
            const regex = new RegExp(escapeRegExp(url), 'g');
            content = content.replace(regex, `/articles/${filename}`);
        } catch (err) {
            console.error(`Failed: ${url}`, err);
        }
        index++;
    }

    fs.writeFileSync(articlesPath, content, 'utf8');
    console.log('Update articles.js complete!');
}

run();
