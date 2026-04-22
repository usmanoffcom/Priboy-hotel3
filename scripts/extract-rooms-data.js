const fs = require('fs');
const path = require('path');

const roomsDir = path.join(__dirname, '../../Priboy3/easy-evolution-619155.framer.appx/rooms');
const files = ['standart.html', 'standart-plus.html', 'studia.html', 'poluluks.html', 'luks.html'];

function extractRoomData(htmlContent, filename) {
  // Извлекаем title
  const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Извлекаем description
  const descMatch = htmlContent.match(/<meta name="description" content="([^"]+)"/);
  const description = descMatch ? descMatch[1] : '';
  
  // Извлекаем цену
  const priceMatch = htmlContent.match(/От \(руб\/ночь\)[^>]*>(\d+)/);
  const price = priceMatch ? priceMatch[1] : '';
  
  // Извлекаем изображения
  const imageMatches = htmlContent.matchAll(/https:\/\/framerusercontent\.com\/images\/[^"'\s]+/g);
  const images = Array.from(new Set(Array.from(imageMatches).map(m => m[0]))).slice(0, 6);
  
  // Извлекаем OG image
  const ogImageMatch = htmlContent.match(/<meta property="og:image" content="([^"]+)"/);
  if (ogImageMatch && !images.includes(ogImageMatch[1])) {
    images.unshift(ogImageMatch[1]);
  }
  
  return {
    title,
    description,
    price,
    images: images.slice(0, 6)
  };
}

const roomsData = [];

files.forEach(file => {
  const filePath = path.join(roomsDir, file);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const data = extractRoomData(html, file);
    roomsData.push({
      file,
      ...data
    });
  }
});

console.log(JSON.stringify(roomsData, null, 2));

