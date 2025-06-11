// scripts/postbuild.js
import { copyFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const indexPath = resolve(__dirname, '../dist/index.html');
const notFoundPath = resolve(__dirname, '../dist/404.html');

try {
  await copyFile(indexPath, notFoundPath);
  console.log('✅ Copied index.html to 404.html successfully.');
} catch (err) {
  console.error('❌ Failed to copy index.html to 404.html:', err);
  process.exit(1);
}
