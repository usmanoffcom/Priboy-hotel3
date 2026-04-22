const fs = require('fs');
const path = require('path');

const recreationDir = path.join(__dirname, '../../Priboy3/easy-evolution-619155.framer.appx/recreation');
const files = ['bassein.html', 'plyazh.html', 'pirs.html', 'massaj.html', 'kosmetolog.html', 'trenajorni-zal.html'];

function extractTextContent(html, startMarker, endMarker) {
  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) return '';
  const endIdx = html.indexOf(endMarker, startIdx);
  if (endIdx === -1) return '';
  return html.substring(startIdx + startMarker.length, endIdx).trim();
}

function extractRecreationData(htmlContent, filename) {
  // Извлекаем title
  const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Извлекаем description
  const descMatch = htmlContent.match(/<meta name="description" content="([^"]+)"/);
  const description = descMatch ? descMatch[1].replace(/\n/g, ' ').trim() : '';
  
  // Извлекаем полное описание (ищем текст между определенными маркерами)
  let fullDescription = description;
  
  // Пытаемся найти более полное описание в body
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (bodyMatch) {
    const body = bodyMatch[1];
    // Ищем текст после заголовка
    const textMatch = body.match(/(?:<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>[\s\S]*?)(<p[^>]*>[\s\S]*?<\/p>)/);
    if (textMatch) {
      const text = textMatch[1]
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      if (text.length > description.length) {
        fullDescription = text;
      }
    }
  }
  
  // Извлекаем изображения
  const imageMatches = htmlContent.matchAll(/https:\/\/framerusercontent\.com\/images\/[^"'\s]+\.(jpg|jpeg|png|webp)/gi);
  const images = Array.from(new Set(Array.from(imageMatches).map(m => {
    const url = m[0];
    // Убираем параметры масштабирования, оставляем только базовый URL
    return url.split('?')[0];
  }))).filter(url => !url.includes('7b3L5oOorp3BeeD9BwAx2tQzQE.png')).slice(0, 6);
  
  // Извлекаем OG image
  const ogImageMatch = htmlContent.match(/<meta property="og:image" content="([^"]+)"/);
  if (ogImageMatch) {
    const ogImage = ogImageMatch[1].split('?')[0];
    if (!images.includes(ogImage) && !ogImage.includes('7b3L5oOorp3BeeD9BwAx2tQzQE.png')) {
      images.unshift(ogImage);
    }
  }
  
  return {
    title,
    description,
    fullDescription: fullDescription.substring(0, 1000),
    images: images.slice(0, 6)
  };
}

const recreationsData = [];

files.forEach(file => {
  const filePath = path.join(recreationDir, file);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const data = extractRecreationData(html, file);
    recreationsData.push({
      file,
      ...data
    });
  }
});

console.log(JSON.stringify(recreationsData, null, 2));

