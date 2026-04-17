const sharp = require('sharp');
const path = require('path');

const inputPath = '/Users/Test/Downloads/Gemini_Generated_Image_gfmrjngfmrjngfmr.png';
const outputPath = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/kaushik_flat_hex.png');

async function processImage() {
  try {
    const inputBuffer = await sharp(inputPath).toBuffer();
    const metadata = await sharp(inputBuffer).metadata();
    
    const width = metadata.width;
    const height = metadata.height;

    // The user's image is a flat-top hexagon with the <> icon at the bottom.
    // The checkerboard fills the corners.
    // Let's create an SVG polygon that exactly traces the flat-top hexagon shape to use as a crop mask.
    // In a flat-top hexagon inscribed in (width x height), the points are roughly:
    // (w*0.25, 0), (w*0.75, 0), (w, h/2), (w*0.75, h), (w*0.25, h), (0, h/2)
    // However, the <> icon protrudes at the bottom edge, so we need to include it in the mask.
    // Also, the user's image has margins. Let's just create a generous polygon that includes the hexagon 
    // and the icon, but chops off the checkerboard corners!

    // Wait, the edges of the flat-top hexagon in their specific image can be traced.
    // Left edge point: x=~10% of width, y=50% of height
    // Top-left: x=~30% of width, y=~5% of height
    const maskSvg = Buffer.from(`
      <svg width="${width}" height="${height}">
        <polygon points="
          ${width * 0.28},${height * 0.08}
          ${width * 0.72},${height * 0.08}
          ${width * 0.95},${height * 0.5}
          ${width * 0.72},${height * 0.92}
          ${width * 0.5 + 40},${height * 0.92}
          ${width * 0.5 + 40},${height}
          ${width * 0.5 - 40},${height}
          ${width * 0.5 - 40},${height * 0.92}
          ${width * 0.28},${height * 0.92}
          ${width * 0.05},${height * 0.5}
        " fill="white" />
      </svg>
    `);

    // Apply the dest-in composite to keep only the intersection of the image and the mask
    await sharp(inputBuffer)
      .composite([{
        input: maskSvg,
        blend: 'dest-in'
      }])
      .png()
      .toFile(outputPath);

    console.log('Cleaned the corners of the flat-top hexagon!');
  } catch (err) {
    console.error(err);
  }
}

processImage();
