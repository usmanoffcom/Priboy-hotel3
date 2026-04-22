const fs = require('fs');
const path = require('path');

const roomsDir = path.join(__dirname, '../../Priboy3/easy-evolution-619155.framer.appx/rooms');
const files = ['standart.html', 'standart-plus.html', 'studia.html', 'poluluks.html', 'luks.html'];

function extractTextContent(html, startMarker, endMarker) {
  const startIdx = html.indexOf(startMarker);
  if (startIdx === -1) return '';
  const endIdx = html.indexOf(endMarker, startIdx);
  if (endIdx === -1) return '';
  return html.substring(startIdx + startMarker.length, endIdx).trim();
}

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
  
  // Извлекаем полное описание (ищем текст между определенными маркерами)
  const fullDescMatch = htmlContent.match(/Детали Номера[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/);
  let fullDescription = description;
  if (fullDescMatch) {
    fullDescription = fullDescMatch[1]
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }
  
  // Извлекаем информацию о включенных услугах
  const includedServices = [];
  
  // Завтраки
  if (htmlContent.includes('Завтраки включены в стоимость')) {
    includedServices.push('Завтраки включены в стоимость с 02.05.2025 по 01.10.2025');
  }
  
  // Бассейн
  if (htmlContent.includes('бассейн') && htmlContent.includes('неограничен')) {
    includedServices.push('Доступ к бассейну неограничен');
    includedServices.push('Лежаки и полотенца у бассейна бесплатно');
  }
  
  // Ежедневная уборка
  if (htmlContent.includes('ежедневная уборка')) {
    includedServices.push('Ежедневная уборка');
  }
  
  // Полотенца, тапочки, косметический набор
  if (htmlContent.includes('полотенца') || htmlContent.includes('тапочки') || htmlContent.includes('косметический набор')) {
    includedServices.push('Полотенца, тапочки, косметический набор');
  }
  
  // Извлекаем изображения
  const imageMatches = htmlContent.matchAll(/https:\/\/framerusercontent\.com\/images\/[^"'\s]+\.(jpg|jpeg|png|webp)/gi);
  const images = Array.from(new Set(Array.from(imageMatches).map(m => {
    const url = m[0];
    // Убираем параметры масштабирования, оставляем только базовый URL
    return url.split('?')[0];
  }))).filter(url => !url.includes('7b3L5oOorp3BeeD9BwAx2tQzQE.png') && !url.includes('LQsipCtvFxqHU7ds3xDkNs7EgYY.svg')).slice(0, 6);
  
  // Извлекаем OG image
  const ogImageMatch = htmlContent.match(/<meta property="og:image" content="([^"]+)"/);
  if (ogImageMatch) {
    const ogImage = ogImageMatch[1].split('?')[0];
    if (!images.includes(ogImage) && !ogImage.includes('7b3L5oOorp3BeeD9BwAx2tQzQE.png')) {
      images.unshift(ogImage);
    }
  }
  
  // Извлекаем информацию о кроватях и вместимости
  let beds = '';
  let capacity = '';
  
  const bedsMatch = htmlContent.match(/Кровати[\s\S]*?<p[^>]*>([^<]+)</);
  if (bedsMatch) {
    beds = bedsMatch[1].trim();
  }
  
  const capacityMatch = htmlContent.match(/Вместимость[\s\S]*?<p[^>]*>([^<]+)</);
  if (capacityMatch) {
    capacity = capacityMatch[1].trim();
  }
  
  return {
    title,
    description,
    fullDescription: fullDescription.substring(0, 500),
    price,
    beds,
    capacity,
    images: images.slice(0, 6),
    includedServices
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

