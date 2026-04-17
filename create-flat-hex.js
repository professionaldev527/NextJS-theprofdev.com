const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const kaushikImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/kaushik_profile.png');
const iconImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/icon.svg');
const outputImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/kaushik_flat_hex.png');

async function processImage() {
  try {
    // 1. Load the original Kaushik portrait
    const kaushikBuffer = await sharp(kaushikImg).toBuffer();
    const kaushikMetadata = await sharp(kaushikBuffer).metadata();
    
    // We want a nice square-ish bounding box for the portrait. Let's make it 512x512.
    const width = 512;
    const height = 512;

    const resizedKaushik = await sharp(kaushikBuffer)
      .resize(width, height, { fit: 'cover', position: 'top' })
      .toBuffer();

    // 2. Generate an SVG string that defines a flat-edged hexagon to use as a mask
    // We'll leave a little padding at the bottom so the icon has space.
    // The points of a hexagon: (w/2, 0), (w, h/4), (w, 3h/4), (w/2, h), (0, 3h/4), (0, h/4)
    // To make it look like their screenshot, it's slightly taller.
    const maskSvg = Buffer.from(`
      <svg width="${width}" height="${height}">
        <polygon points="
          ${width / 2},10
          ${width - 10},${height * 0.25}
          ${width - 10},${height * 0.75}
          ${width / 2},${height - 40}
          10,${height * 0.75}
          10,${height * 0.25}
        " fill="white" />
      </svg>
    `);

    // 3. Apply the mask
    const maskedKaushik = await sharp(resizedKaushik)
      .composite([{
        input: maskSvg,
        blend: 'dest-in'
      }])
      .toBuffer();

    // 4. Load & size the green token icon 
    // They want it perfectly at the bottom tip 
    const iconSize = 80; // Scale it up a bit
    const greenIcon = await sharp(iconImg)
      .resize(iconSize, iconSize)
      .toBuffer();

    // 5. Composite the green icon at the bottom tip of the hexagon
    // Tip is at (width/2, height - 40). We center the icon there.
    const finalBuffer = await sharp(maskedKaushik)
      .composite([{
        input: greenIcon,
        left: Math.round((width / 2) - (iconSize / 2)),
        top: Math.round((height - 40) - (iconSize / 2)),
        blend: 'over'
      }])
      .png()
      .toFile(outputImg);

    console.log('Successfully generated the flat edge hexagon with native overlay!');
  } catch (err) {
    console.error('Error generating image:', err);
  }
}

processImage();
