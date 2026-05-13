import sharp from 'sharp';
import fs from 'fs';

const inputPath = 'public/assets/images/LuisTapia.png';
const outputPath = 'public/assets/images/LuisTapia.webp';

async function optimizeImage() {
  if (fs.existsSync(inputPath)) {
    console.log(`Optimizing ${inputPath}...`);
    await sharp(inputPath)
      .resize(400) // Resize to a reasonable width if it's a profile pic
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Saved optimized image to ${outputPath}`);
    
    // Also optimize the PNG itself if preferred, but WebP is better
    const optimizedPngPath = 'public/assets/images/LuisTapia_opt.png';
    await sharp(inputPath)
      .resize(400)
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(optimizedPngPath);
    console.log(`Saved optimized PNG to ${optimizedPngPath}`);
  } else {
    console.error(`File not found: ${inputPath}`);
  }
}

optimizeImage();
