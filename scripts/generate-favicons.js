import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const svgBuffer = readFileSync(resolve('public', 'ab-logo.svg'));

async function generateFavicons() {
  // Generate standard favicons
  const sizes = [16, 32, 192, 512];
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(resolve('public', `favicon-${size}x${size}.png`));
  }

  // Generate specific favicon for search results
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(resolve('public', 'apple-touch-icon.png'));

  // Generate larger OG image with padding
  await sharp(svgBuffer)
    .resize(1200, 630, {
      fit: 'contain',
      background: '#8B4CF6'
    })
    .png()
    .toFile(resolve('public', 'og-image.png'));
}

generateFavicons().catch(console.error);