import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicArticlesDir = path.join(__dirname, 'public/articles');

const downloads = [
  { file: 'dubaimarina.jpg', url: 'https://picsum.photos/seed/dubaimarina/1920/1080' },
  { file: 'dubaimarina2.jpg', url: 'https://picsum.photos/seed/dubaimarina2/1920/1080' },
  { file: 'dubaimarina3.jpg', url: 'https://picsum.photos/seed/dubaimarina3/1920/1080' },
  { file: 'deirasouk.jpg', url: 'https://picsum.photos/seed/deirasouk/1200/800' },
  { file: 'dubai1.jpg', url: 'https://picsum.photos/seed/dubai1/800/600' },
  { file: 'dubai2.jpg', url: 'https://picsum.photos/seed/dubai2/800/600' },
  { file: 'dubai3.jpg', url: 'https://picsum.photos/seed/dubai3/800/600' },
  { file: 'arabian.jpg', url: 'https://picsum.photos/seed/arabian/1920/1080' },
  { file: 'arabian2.jpg', url: 'https://picsum.photos/seed/arabian2/1920/1080' },
  { file: 'shibuya1.jpg', url: 'https://picsum.photos/seed/shibuya1/1920/1080' },
  { file: 'shibuya2.jpg', url: 'https://picsum.photos/seed/shibuya2/1920/1080' },
  { file: 'tokyo6.jpg', url: 'https://picsum.photos/seed/tokyo6/800/600' },
  { file: 'cabs2.jpg', url: 'https://picsum.photos/seed/cabs2/1920/1080' },
  { file: 'cabs3.jpg', url: 'https://picsum.photos/seed/cabs3/1920/1080' },
  { file: 'bangkok1.jpg', url: 'https://picsum.photos/seed/bangkok1/800/600' },
  { file: 'bangkok2.jpg', url: 'https://picsum.photos/seed/bangkok2/800/600' },
  { file: 'river2.jpg', url: 'https://picsum.photos/seed/river2/1920/1080' },
  { file: 'river3.jpg', url: 'https://picsum.photos/seed/river3/1920/1080' },
  { file: 'sagrada.jpg', url: 'https://picsum.photos/seed/sagrada/1920/1080' },
  { file: 'sagrada2.jpg', url: 'https://picsum.photos/seed/sagrada2/1920/1080' },
  { file: 'barri.jpg', url: 'https://picsum.photos/seed/barri/800/600' },
  { file: 'rome1.jpg', url: 'https://picsum.photos/seed/rome1/1920/1080' },
  { file: 'rome2.jpg', url: 'https://picsum.photos/seed/rome2/800/600' },
  { file: 'colosseum2.jpg', url: 'https://picsum.photos/seed/colosseum2/1920/1080' },
  { file: 'colosseum3.jpg', url: 'https://picsum.photos/seed/colosseum3/1920/1080' }
];

async function downloadImage(url, dest) {
    const res = await fetch(url, { 
        redirect: 'follow',
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(dest, buffer);
}

async function run() {
    let count = 1;
    for (const item of downloads) {
        const dest = path.join(publicArticlesDir, item.file);
        console.log(`[${count}/${downloads.length}] Downloading ${item.file}...`);
        try {
            await downloadImage(item.url, dest);
            console.log(`  Success: Overwrote ${item.file}`);
        } catch (err) {
            console.error(`  Failed: ${item.file}`, err.message);
        }
        // Wait 1.5 seconds to avoid CDN rate limiting!
        await new Promise(r => setTimeout(r, 1500));
        count++;
    }
    console.log('All images updated locally! The posts now have unique pictures.');
}

run();
