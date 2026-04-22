const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const blogDir = path.join(__dirname, '../../static-site/blog');
const outputFile = path.join(__dirname, '../lib/blog-content-extracted.json');

// Маппинг slug к именам файлов
const fileMapping = {
  'chernoe-more-istoriya-polza-dlya-zdorovya-i-interesnye-fakty': 'chernoe-more-istoriya-polza-dlya-zdorovya-i-interesnye-fakty.html',
  'pochemu-stoit-vybrat-otdyh-v-lazarevskom-a-ne-krym': 'pochemu-stoit-vybrat-otdyh-v-lazarevskom-a-ne-krym.html',
  'privychka-iz-lazarevskogo-kotoruyu-stoit-sokhranit': 'privychka-iz-lazarevskogo-kotoruyu-stoit-sokhranit.html',
  'kakie-preimushchestva-otdykha-v-lazarevskom-pered-krymom-mozhno-podcherknut': 'kakie-preimushchestva-otdykha-v-lazarevskom-pered-krymom-mozhno-podcherknut.html',
  'zhizn-v-ritme-otdykha-chto-daet-dlitelnoe-prozhivanie-v-grand-otele-i-spa-priboy': 'zhizn-v-ritme-otdykha-chto-daet-dlitelnoe-prozhivanie-v-grand-otele-i-spa-priboy.html',
  'pochemu-solyannaya-komnata-polezna-dazhe-zdorovym-lyudyam': 'pochemu-solyannaya-komnata-polezna-dazhe-zdorovym-lyudyam.html',
  'krabovoe-ushchele-prirodnoe-chudo-bolshogo-sochi-marshrut-sredi-prirody-i-presnovodnyh-krabov': 'krabovoe-ushchele-prirodnoe-chudo-bolshogo-sochi-marshrut-sredi-prirody-i-presnovodnyh-krabov.html',
  'kuda-shodit-peshkom-sezdit-na-avto-ili-avtobuse-v-bolshom-sochi': 'kuda-shodit-peshkom-sezdit-na-avto-ili-avtobuse-v-bolshom-sochi.html',
  'lazarevskoe-bez-mazuta-chistye-plyazhi-i-more-posle-razliva-v-2024': 'lazarevskoe-bez-mazuta-chistye-plyazhi-i-more-posle-razliva-v-2024.html',
  'luchshij-otel-so-spa-4-zvezdy-v-lazarevskom-dlya-otdyha-s-detmi-priboj': 'luchshij-otel-so-spa-4-zvezdy-v-lazarevskom-dlya-otdyha-s-detmi-priboj.html',
  'neizvestnye-zhemchuzhiny-ryadom-s-lazarevskim': 'neizvestnye-zhemchuzhiny-ryadom-s-lazarevskim.html',
  'otdyh-v-lazarevskom-idealnyj-sezon-dlya-kazhdogo-puteshestvennika': 'otdyh-v-lazarevskom-idealnyj-sezon-dlya-kazhdogo-puteshestvennika.html',
  'otel-so-spa-4-zvezdy-v-lazarevskom-grand-otel-spa-priboj-russkaya-banya-finskaya-sauna-ili-tureckij-hammam': 'otel-so-spa-4-zvezdy-v-lazarevskom-grand-otel-spa-priboj-russkaya-banya-finskaya-sauna-ili-tureckij-hammam.html',
  'oteli-v-lazarevskom-luchshe-chem-v-turcii': 'oteli-v-lazarevskom-luchshe-chem-v-turcii.html',
  'semejnyj-otdyh-v-lazarevskom-luchshie-razvlecheniya': 'semejnyj-otdyh-v-lazarevskom-luchshie-razvlecheniya.html',
  'pochemu-nash-otel-priboj-zasluzhenno-schitaetsya-odnim-iz-luchshih-mest-dlya-otdyha-v-lazarevskom': 'pochemu-nash-otel-priboj-zasluzhenno-schitaetsya-odnim-iz-luchshih-mest-dlya-otdyha-v-lazarevskom.html',
};

function extractContent(html) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  
  // Пытаемся найти основной контент
  let content = '';
  
  // Ищем article, main, или div с контентом
  const article = document.querySelector('article') || 
                  document.querySelector('main') ||
                  document.querySelector('[class*="content"]') ||
                  document.querySelector('[class*="post"]') ||
                  document.querySelector('[class*="article"]');
  
  if (article) {
    // Извлекаем все параграфы и заголовки
    const elements = article.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, ol, li, strong, em, a, blockquote');
    
    elements.forEach(el => {
      const tagName = el.tagName.toLowerCase();
      const text = el.textContent.trim();
      
      if (text) {
        if (tagName.startsWith('h')) {
          const level = tagName[1];
          content += `<h${level}>${text}</h${level}>\n`;
        } else if (tagName === 'p') {
          // Сохраняем внутренний HTML для форматирования
          content += `<p>${el.innerHTML}</p>\n`;
        } else if (tagName === 'ul' || tagName === 'ol') {
          content += `<${tagName}>${el.innerHTML}</${tagName}>\n`;
        } else if (tagName === 'li') {
          content += `<li>${el.innerHTML}</li>\n`;
        } else if (tagName === 'strong' || tagName === 'em') {
          content += `<${tagName}>${text}</${tagName}>`;
        } else if (tagName === 'a') {
          const href = el.getAttribute('href') || '';
          content += `<a href="${href}">${text}</a>`;
        }
      }
    });
  }
  
  return content.trim();
}

const extracted = {};

Object.entries(fileMapping).forEach(([slug, filename]) => {
  const filePath = path.join(blogDir, filename);
  if (fs.existsSync(filePath)) {
    console.log(`Обрабатываю ${filename}...`);
    const html = fs.readFileSync(filePath, 'utf-8');
    const content = extractContent(html);
    extracted[slug] = content;
  } else {
    console.log(`Файл не найден: ${filename}`);
  }
});

fs.writeFileSync(outputFile, JSON.stringify(extracted, null, 2), 'utf-8');
console.log(`\n✓ Извлечено ${Object.keys(extracted).length} статей`);
console.log(`✓ Результаты сохранены в ${outputFile}`);

