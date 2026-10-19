// Regenerates public/og-image.png, favicon.png and apple-touch-icon.png.
// Run with: npm run og   (re-run after changing the portrait or your title)
import sharp from 'sharp';

const portrait = 'src/assets/photo/portrait.jpg';
const W = 1200;
const H = 630;

const textSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#faf8f4"/>
  <rect x="0" y="0" width="12" height="${H}" fill="#1b7268"/>
  <text x="80" y="200" font-family="Menlo, monospace" font-size="24" letter-spacing="4" fill="#1b7268">JUNIOR SOFTWARE DEVELOPER</text>
  <text x="76" y="290" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="700" fill="#15171a">Josip Arambašić</text>
  <text x="80" y="360" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#565b63">Backend · Full-stack · AI integration</text>
  <text x="80" y="404" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#565b63">Symfony · Spring Boot · FastAPI</text>
  <text x="80" y="530" font-family="Menlo, monospace" font-size="22" fill="#15171a">MSc Computing · FESB, Split · Croatia</text>
</svg>`;

const photo = await sharp(portrait).resize(380, 475, { fit: 'cover' }).toBuffer();
const mask = Buffer.from(
  `<svg width="380" height="475"><rect width="380" height="475" rx="28" fill="#fff"/></svg>`,
);
const rounded = await sharp(photo)
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp(Buffer.from(textSvg))
  .composite([{ input: rounded, left: W - 380 - 70, top: Math.round((H - 475) / 2) }])
  .png()
  .toFile('public/og-image.png');

await sharp('public/favicon.svg').resize(32, 32).png().toFile('public/favicon.png');
await sharp('public/favicon.svg').resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Generated og-image.png, favicon.png, apple-touch-icon.png');
