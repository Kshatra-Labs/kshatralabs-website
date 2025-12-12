const https = require('https');
const fs = require('fs');
const path = require('path');

// Image URLs from Figma
const images = {
  // Hero section
  'hero/drone-hero.jpg': 'https://www.figma.com/api/mcp/asset/7e95acb1-32a0-4683-8c8b-d8963978599e',
  'hero/grid-pattern.png': 'https://www.figma.com/api/mcp/asset/71ad966b-ce6d-46f9-816f-ff185f249ea8',

  // Logos
  'logos/logo.svg': 'https://www.figma.com/api/mcp/asset/54d2c30d-6eb3-49f6-98e0-bfc0c6ba6895',
  'logos/logo-footer.svg': 'https://www.figma.com/api/mcp/asset/d0cf326f-47bd-4ed9-a82d-ce084632568b',

  // Sections
  'sections/video-placeholder.jpg': 'https://www.figma.com/api/mcp/asset/5a5191f9-f113-4dbd-a42a-96ea484d5326',
  'sections/arrow-left.svg': 'https://www.figma.com/api/mcp/asset/400d47aa-cb94-42a6-9dea-846170fe5aaf',
  'sections/arrow-right.svg': 'https://www.figma.com/api/mcp/asset/b03d21bf-ec0a-44dc-9141-3ec83ad222f5',
  'sections/line-top.svg': 'https://www.figma.com/api/mcp/asset/e0adc93d-b5d7-40b5-bd65-67c6a4b8cd0b',
  'sections/line-bottom.svg': 'https://www.figma.com/api/mcp/asset/b3cd49a5-124d-4611-bcb9-8d1e24d88355',
  'sections/footer-bg.svg': 'https://www.figma.com/api/mcp/asset/1021a134-2493-4f92-babe-e867b7371eba',
  'sections/badge-frame.svg': 'https://www.figma.com/api/mcp/asset/e162712d-5650-467b-81a8-dc9b6ed917e4',

  // Icons
  'icons/cta-arrow.svg': 'https://www.figma.com/api/mcp/asset/ce38a11f-a992-42f7-86b1-046ba0e2d6d2',
  'icons/cta-top.jpg': 'https://www.figma.com/api/mcp/asset/751549f0-13d6-45e4-8e5a-d742e91bf398',

  // Grid plus icons (decorative)
  'icons/plus-1.svg': 'https://www.figma.com/api/mcp/asset/e20314f3-0eee-403f-9c8e-e38c4bb233b5',
  'icons/plus-2.svg': 'https://www.figma.com/api/mcp/asset/49c336fb-9d1a-4b44-81e0-1dc028a82d84',
  'icons/plus-3.svg': 'https://www.figma.com/api/mcp/asset/96e4940b-4ec9-4ccd-8946-ca182c5ac905',
  'icons/plus-4.svg': 'https://www.figma.com/api/mcp/asset/9d724240-1f1f-4efd-8d85-9c882cb958fa',
  'icons/plus-5.svg': 'https://www.figma.com/api/mcp/asset/34cb6e6a-849c-4a6e-addd-6a1740bedc7e',
};

async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${url}, status: ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting image download from Figma...\n');

  const publicDir = path.join(__dirname, '..', 'public', 'images');
  let successCount = 0;
  let errorCount = 0;

  for (const [filename, url] of Object.entries(images)) {
    const filepath = path.join(publicDir, filename);

    try {
      await downloadFile(url, filepath);
      successCount++;
    } catch (error) {
      console.error(`✗ Error downloading ${filename}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✓ Successfully downloaded: ${successCount} images`);
  if (errorCount > 0) {
    console.log(`✗ Failed downloads: ${errorCount} images`);
  }
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  console.log('Images saved to: /public/images/');
  console.log('\nNext steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Open: http://localhost:3000');
}

downloadAll().catch(console.error);
