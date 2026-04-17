const sharp = require('sharp');
const path = require('path');

const kaushikImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/kaushik_profile.png');
const maskImg = path.join('/tmp/user_repo_test/public/assets/imgs/home-page-2/hero-1/people.png');
const outputImg = path.join(__dirname, 'public/assets/imgs/home-page-2/hero-1/kaushik_masked.png');

async function processImage() {
  try {
    // 1. Get the mask image (bearded man with transparent background)
    const maskBuffer = await sharp(maskImg).toBuffer();
    
    // 2. Extract just the alpha channel from the mask to use as a cutout
    const alphaChannel = await sharp(maskBuffer)
      .extractChannel('alpha')
      .toBuffer();

    // Get dimensions of the mask to resize Kaushik's image exactly to fit
    const maskMetadata = await sharp(maskBuffer).metadata();

    // 3. Resize Kaushik's image to match the mask
    const resizedKaushik = await sharp(kaushikImg)
      .resize(maskMetadata.width, maskMetadata.height, {
        fit: 'cover',
        position: 'center'
      })
      .toBuffer();

    // 4. Composite them: Apply the alpha channel to Kaushik's image
    await sharp(resizedKaushik)
      .joinChannel(alphaChannel)
      .png()
      .toFile(outputImg);

    console.log('Successfully generated the masked image natively!');
  } catch (err) {
    console.error('Error generating image:', err);
  }
}

processImage();
