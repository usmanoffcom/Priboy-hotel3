const fs = require('fs');
const path = require('path');

const recreationDir = path.join(__dirname, '../../Priboy3/easy-evolution-619155.framer.appx/recreation');
const files = ['bassein.html', 'plyazh.html', 'pirs.html', 'massaj.html', 'kosmetolog.html', 'trenajorni-zal.html'];

function extractRecreationData(htmlContent, filename) {
  // Извлекаем title
  const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Извлекаем description
  const descMatch = htmlContent.match(/<meta name="description" content="([^"]+)"/);
  const description = descMatch ? descMatch[1] : '';
  
  // Извлекаем изображения
  const imageMatches = htmlContent.matchAll(/https:\/\/framerusercontent\.com\/images\/[^"'\s]+/g);
  const images = Array.from(new Set(Array.from(imageMatches).map(m => m[0].split('?')[0]))).slice(0, 6);
  
  // Извлекаем OG image
  const ogImageMatch = htmlContent.match(/<meta property="og:image" content="([^"]+)"/);
  if (ogImageMatch) {
    const ogImage = ogImageMatch[1].split('?')[0];
    if (!images.includes(ogImage)) {
      images.unshift(ogImage);
    }
  }
  
  return {
    title,
    description,
    images: images.slice(0, 6)
  };
}

const recreationData = [];

files.forEach(file => {
  const filePath = path.join(recreationDir, file);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const data = extractRecreationData(html, file);
    recreationData.push({
      file,
      slug: file.replace('.html', ''),
      ...data
    });
  }
});

console.log(JSON.stringify(recreationData, null, 2));

