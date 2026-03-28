import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicArticlesDir = path.join(__dirname, 'public/articles');

// Map local file names to specific Wikipedia article titles
const downloads = [
  // Dubai
  { file: 'dubaimarina.jpg', title: 'Dubai_Marina' },
  { file: 'dubaimarina2.jpg', title: 'Dubai' },
  { file: 'dubaimarina3.jpg', title: 'Burj_Khalifa' },
  { file: 'deirasouk.jpg', title: 'Deira,_Dubai' },
  { file: 'dubai1.jpg', title: 'Palm_Jumeirah' },
  { file: 'dubai2.jpg', title: 'Burj_Al_Arab' },
  { file: 'dubai3.jpg', title: 'Dubai_Mall' },
  { file: 'arabian.jpg', title: 'Dubai_Spice_Souk' },
  { file: 'arabian2.jpg', title: 'Jumeirah_Beach' },

  // Tokyo
  { file: 'shibuya1.jpg', title: 'Shibuya_Crossing' },
  { file: 'shibuya2.jpg', title: 'Tokyo' },
  { file: 'tokyo6.jpg', title: 'Shinjuku' },

  // New York
  { file: 'cabs2.jpg', title: 'New_York_City' },
  { file: 'cabs3.jpg', title: 'Times_Square' },

  // Bangkok
  { file: 'bangkok1.jpg', title: 'Bangkok' },
  { file: 'bangkok2.jpg', title: 'Wat_Arun' },
  { file: 'river2.jpg', title: 'Chao_Phraya_River' },
  { file: 'river3.jpg', title: 'Grand_Palace' },

  // Barcelona
  { file: 'sagrada.jpg', title: 'Sagrada_Família' },
  { file: 'sagrada2.jpg', title: 'Park_Güell' },
  { file: 'barri.jpg', title: 'Gothic_Quarter,_Barcelona' },

  // Rome
  { file: 'rome1.jpg', title: 'Rome' },
  { file: 'rome2.jpg', title: 'Trevi_Fountain' },
  { file: 'colosseum2.jpg', title: 'Colosseum' },
  { file: 'colosseum3.jpg', title: 'Roman_Forum' }
];

async function getWikiImageUrl(title) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1920`;
    const res = await fetch(url, { headers: { 'User-Agent': 'SkyscannerCloneBot/1.0' } });
    if (!res.ok) throw new Error(`Wiki API HTTP ${res.status}`);
    const data = await res.json();
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    if (pageId === '-1' || !pages[pageId].thumbnail) {
        throw new Error('No image found for ' + title);
    }
    return pages[pageId].thumbnail.source;
}

async function downloadImage(url, dest) {
    const res = await fetch(url, { 
        redirect: 'follow',
        headers: { 'User-Agent': 'SkyscannerCloneBot/1.0' }
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
        console.log(`[${count}/${downloads.length}] Fetching ${item.title}...`);
        try {
            const imageUrl = await getWikiImageUrl(item.title);
            await downloadImage(imageUrl, dest);
            console.log(`  Success: Overwrote ${item.file}`);
        } catch (err) {
            console.error(`  Failed: ${item.file} -`, err.message);
        }
        await new Promise(r => setTimeout(r, 200)); // Be polite to Wikipedia
        count++;
    }
    console.log('All images updated locally from Wikipedia! The posts now have real, unique pictures.');
}

run();
