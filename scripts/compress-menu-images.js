const fs = require('fs');
const path = require('path');

// Простой скрипт для копирования и переименования файлов
// Сжатие можно сделать позже через Next.js Image Optimization

const SOURCE_DIR = path.join(__dirname, '../public/Menu_2025');
const OUTPUT_DIR = path.join(__dirname, '../public/menu/dishes');

// Создаем выходную директорию
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Функция для нормализации имени файла
function normalizeFileName(filename) {
  // Убираем расширение
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg)$/i, '');
  
  // Транслитерация кириллицы
  const translitMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'E',
    'Ж': 'Zh', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
    'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
    'Ф': 'F', 'Х': 'H', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Sch',
    'Ъ': '', 'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
  };
  
  let normalized = nameWithoutExt
    .split('')
    .map(char => translitMap[char] || char)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_.-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  
  // Если имя пустое, используем оригинальное
  if (!normalized) {
    normalized = nameWithoutExt.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_.-]/g, '_');
  }
  
  return normalized + '.jpg';
}

// Категории меню на основе ключевых слов
const categories = {
  soups: ['суп', 'борщ', 'харчо', 'уха', 'том-ям', 'лапша'],
  salads: ['салат', 'брускетта', 'ассорти оливок'],
  appetizers: ['ассорти', 'тарелка', 'сыры', 'оливки', 'маслины'],
  mains: ['стейк', 'шашлык', 'котлеты', 'антрекот', 'окорочок', 'индейка', 'курица', 'говядина', 'баранина', 'свинина'],
  fish: ['рыба', 'барабуля', 'форель', 'дорадо', 'треска', 'тунец', 'сельдь', 'креветки', 'морепродукты'],
  georgian: ['хачапури', 'хинкали', 'долма', 'лобио', 'гедлибже', 'оджахури', 'чкмерули', 'пури', 'кутаб', 'пхали', 'аджапсандал'],
  pasta: ['паста', 'карбонара', 'болоньезе', 'феттучини', 'ризотто'],
  pizza: ['пицца'],
  breakfast: ['завтрак', 'яичница', 'омлет', 'каша', 'сырники', 'творожная', 'панкейки', 'наггетсы'],
  sides: ['картофель', 'пюре', 'овощи', 'гриль', 'гречка', 'чипсы'],
  desserts: ['десерт', 'тирамису', 'брауни', 'чизкейк', 'мороженое', 'штрудель', 'крем-брюле'],
  drinks: ['напиток', 'сок', 'чай', 'кофе'],
};

function getCategory(filename) {
  const lower = filename.toLowerCase();
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lower.includes(keyword))) {
      return category;
    }
  }
  return 'other';
}

console.log('Начинаем обработку изображений меню...\n');

const files = fs.readdirSync(SOURCE_DIR).filter(f => 
  f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg')
);

let processed = 0;
const menuItems = [];

files.forEach((file, index) => {
  const sourcePath = path.join(SOURCE_DIR, file);
  const normalizedName = normalizeFileName(file);
  const outputPath = path.join(OUTPUT_DIR, normalizedName);
  
  // Копируем файл
  fs.copyFileSync(sourcePath, outputPath);
  
  // Извлекаем название блюда из имени файла
  const dishName = file.replace(/\.(jpg|jpeg)$/i, '').trim();
  const category = getCategory(file);
  
  menuItems.push({
    id: `dish-${index + 1}`,
    name: dishName,
    image: `/menu/dishes/${normalizedName}`,
    category: category,
  });
  
  processed++;
  if (processed % 10 === 0) {
    console.log(`Обработано ${processed} из ${files.length} файлов...`);
  }
});

// Сохраняем структуру данных
const menuDataPath = path.join(__dirname, '../lib/menu-items-data.json');
fs.writeFileSync(menuDataPath, JSON.stringify(menuItems, null, 2), 'utf8');

console.log(`\n✓ Готово! Обработано ${processed} файлов`);
console.log(`✓ Изображения скопированы в: ${OUTPUT_DIR}`);
console.log(`✓ Структура данных сохранена в: ${menuDataPath}`);

