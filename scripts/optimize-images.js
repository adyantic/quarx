import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../src/assets/optimized');

// Images to optimize with their target sizes
const images = [
  { name: 'sunflower.png', sizes: [400, 300, 250] },
  { name: 'pinecone.png', sizes: [400, 300, 250] },
  { name: 'sunflower-behaviour.png', sizes: [400, 300, 267] },
  { name: 'pinecone-behaviour.png', sizes: [400, 300, 267] },
  { name: 'sunflower-insight-new.png', sizes: [400, 300, 275] },
  { name: 'pinecone-insight-new.png', sizes: [400, 300, 275] },
  { name: 'basis-what-img1.png', sizes: [800, 600, 400] },
  { name: 'basis-what-img2.png', sizes: [800, 600, 400] },
];

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(imageName, sizes) {
  const inputPath = path.join(inputDir, imageName);
  const baseName = path.basename(imageName, path.extname(imageName));

  console.log(`\nOptimizing ${imageName}...`);

  // Check if file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`  ⚠️  File not found: ${inputPath}`);
    return;
  }

  // Get original file size
  const originalStats = fs.statSync(inputPath);
  const originalSizeKB = (originalStats.size / 1024).toFixed(2);
  console.log(`  Original size: ${originalSizeKB} KB`);

  let totalSavedKB = 0;

  // Generate WebP versions at different sizes
  for (const size of sizes) {
    const outputPath = path.join(outputDir, `${baseName}-${size}.webp`);

    await sharp(inputPath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 85 })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = (outputStats.size / 1024).toFixed(2);
    totalSavedKB += parseFloat(originalSizeKB) - parseFloat(outputSizeKB);

    console.log(`  ✓ Created ${baseName}-${size}.webp (${outputSizeKB} KB)`);
  }

  console.log(`  💾 Total saved: ${totalSavedKB.toFixed(2)} KB`);
}

async function optimizeAll() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`Input directory: ${inputDir}`);
  console.log(`Output directory: ${outputDir}`);

  let totalOriginalKB = 0;
  let totalOptimizedKB = 0;

  for (const image of images) {
    await optimizeImage(image.name, image.sizes);
  }

  console.log('\n✨ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${outputDir}`);
}

optimizeAll().catch(err => {
  console.error('Error during optimization:', err);
  process.exit(1);
});
