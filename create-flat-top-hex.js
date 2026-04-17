const sharp = require('sharp');
const path = require('path');

const kaushikImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/kaushik_profile.png');
const iconImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/icon.svg');
const outputImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/kaushik_flat_hex.png');

async function processImage() {
  try {
    const kaushikBuffer = await sharp(kaushikImg).toBuffer();
    
    // We want a square bounding box.
    const width = 512;
    const height = 512;

    const resizedKaushik = await sharp(kaushikBuffer)
      .resize(width, height, { fit: 'cover', position: 'top' })
      .toBuffer();

    // Generate a flat-top hexagon mask
    // Points: (w/4, 0), (w*3/4, 0), (w, h/2), (w*3/4, h), (w/4, h), (0, h/2)
    // To make it slightly rounded like a squircle, we could use SVG rx/ry but polygon is sharp.
    // However, they said "flat that the top" so we just want the shape rotated 90 degrees.
    const maskSvg = Buffer.from(`
      <svg width="${width}" height="${height}">
        <polygon points="
          ${width * 0.25 + 24},26
          ${width * 0.75 - 24},26
          ${width - 24},${height / 2}
          ${width * 0.75 - 24},${height - 60}
          ${width * 0.25 + 24},${height - 60}
          24,${height / 2}
        " fill="white" stroke="white" stroke-width="48" stroke-linejoin="round" />
      </svg>
    `);

    // Apply the mask
    const maskedKaushik = await sharp(resizedKaushik)
      .composite([{
        input: maskSvg,
        blend: 'dest-in'
      }])
      .toBuffer();

    // Load & size the green token icon 
    const iconSize = 80;
    const greenIcon = await sharp(iconImg)
      .resize(iconSize, iconSize)
      .toBuffer();

    // Composite the green icon at the bottom edge (centered horizontally on the flat bottom line)
    const finalBuffer = await sharp(maskedKaushik)
      .composite([{
        input: greenIcon,
        left: Math.round((width / 2) - (iconSize / 2)),
        top: Math.round(height - 40 - (iconSize / 2)),
        blend: 'over'
      }])
      .png()
      .toFile(outputImg);

    console.log('Successfully generated the flat-top hexagon!');
  } catch (err) {
    console.error('Error generating image:', err);
  }
}

processImage();
