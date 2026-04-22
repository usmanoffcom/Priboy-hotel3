const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, '../../Priboy3/easy-evolution-619155.framer.appx/restaurants.html');
const html = fs.readFileSync(htmlFile, 'utf-8');

// Разделяем HTML на секции по названиям ресторанов
const restaurants = [
  { name: 'Ресторан Летний', id: 'summer' },
  { name: 'Ресторан Зимний', id: 'winter' },
  { name: 'Столовая', id: 'canteen' },
  { name: 'MESTO', id: 'mesto' },
  { name: 'Ротонда', id: 'rotonda' },
  { name: 'Пуфы на море', id: 'poufs' },
];

const results = [];

restaurants.forEach((restaurant, index) => {
  // Находим позицию названия ресторана
  const nameIndex = html.indexOf(restaurant.name);
  if (nameIndex === -1) {
    console.log(`Не найдено: ${restaurant.name}`);
    return;
  }
  
  // Берем следующий фрагмент HTML после названия
  const nextRestaurantIndex = index < restaurants.length - 1 
    ? html.indexOf(restaurants[index + 1].name, nameIndex)
    : html.length;
  
  const section = html.substring(nameIndex, nextRestaurantIndex);
  
  // Ищем изображения в этой секции
  const imageMatches = section.matchAll(/https:\/\/framerusercontent\.com\/(images|assets)\/[^"'\s]+\.(jpg|jpeg|png|webp)/gi);
  const images = Array.from(new Set(Array.from(imageMatches).map(m => {
    const url = m[0];
    return url.split('?')[0];
  }))).filter(url => !url.includes('7b3L5oOorp3BeeD9BwAx2tQzQE.png'));
  
  // Берем первое уникальное изображение
  const mainImage = images[0] || null;
  
  results.push({
    id: restaurant.id,
    name: restaurant.name,
    image: mainImage,
    allImages: images.slice(0, 5)
  });
});

console.log(JSON.stringify(results, null, 2));

