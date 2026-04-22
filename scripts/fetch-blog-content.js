// Скрипт для получения контента статей блога
// Используется для обновления blog-data.ts

const blogArticles = [
  {
    slug: "5-veshchey-kotorye-ya-ponyal-o-sebe-posle-otpuska-v-lazarevskom",
    url: "https://common-costs-035166.framer.app/blog/5-veshchey-kotorye-ya-ponyal-o-sebe-posle-otpuska-v-lazarevskom"
  },
  {
    slug: "semejnyj-otdyh-v-lazarevskom-luchshie-razvlecheniya",
    url: "https://common-costs-035166.framer.app/blog/semejnyj-otdyh-v-lazarevskom-luchshie-razvlecheniya"
  },
  {
    slug: "otel-so-spa-4-zvezdy-v-lazarevskom-grand-otel-spa-priboj-russkaya-banya-finskaya-sauna-ili-tureckij-hammam",
    url: "https://common-costs-035166.framer.app/blog/otel-so-spa-4-zvezdy-v-lazarevskom-grand-otel-spa-priboj-russkaya-banya-finskaya-sauna-ili-tureckij-hammam"
  },
  {
    slug: "zhizn-v-ritme-otdykha-chto-daet-dlitelnoe-prozhivanie-v-grand-otele-i-spa-priboy",
    url: "https://common-costs-035166.framer.app/blog/zhizn-v-ritme-otdykha-chto-daet-dlitelnoe-prozhivanie-v-grand-otele-i-spa-priboy"
  },
  {
    slug: "kakie-preimushchestva-otdykha-v-lazarevskom-pered-krymom-mozhno-podcherknut",
    url: "https://common-costs-035166.framer.app/blog/kakie-preimushchestva-otdykha-v-lazarevskom-pered-krymom-mozhno-podcherknut"
  },
  {
    slug: "krabovoe-ushchele-prirodnoe-chudo-bolshogo-sochi-marshrut-sredi-prirody-i-presnovodnyh-krabov",
    url: "https://common-costs-035166.framer.app/blog/krabovoe-ushchele-prirodnoe-chudo-bolshogo-sochi-marshrut-sredi-prirody-i-presnovodnyh-krabov"
  },
  {
    slug: "kuda-shodit-peshkom-sezdit-na-avto-ili-avtobuse-v-bolshom-sochi",
    url: "https://common-costs-035166.framer.app/blog/kuda-shodit-peshkom-sezdit-na-avto-ili-avtobuse-v-bolshom-sochi"
  },
  {
    slug: "lazarevskoe-bez-mazuta-chistye-plyazhi-i-more-posle-razliva-v-2024",
    url: "https://common-costs-035166.framer.app/blog/lazarevskoe-bez-mazuta-chistye-plyazhi-i-more-posle-razliva-v-2024"
  },
  {
    slug: "luchshij-otel-so-spa-4-zvezdy-v-lazarevskom-dlya-otdyha-s-detmi-priboj",
    url: "https://common-costs-035166.framer.app/blog/luchshij-otel-so-spa-4-zvezdy-v-lazarevskom-dlya-otdyha-s-detmi-priboj"
  },
  {
    slug: "neizvestnye-zhemchuzhiny-ryadom-s-lazarevskim",
    url: "https://common-costs-035166.framer.app/blog/neizvestnye-zhemchuzhiny-ryadom-s-lazarevskim"
  },
  {
    slug: "otdyh-v-lazarevskom-idealnyj-sezon-dlya-kazhdogo-puteshestvennika",
    url: "https://common-costs-035166.framer.app/blog/otdyh-v-lazarevskom-idealnyj-sezon-dlya-kazhdogo-puteshestvennika"
  },
  {
    slug: "oteli-v-lazarevskom-luchshe-chem-v-turcii",
    url: "https://common-costs-035166.framer.app/blog/oteli-v-lazarevskom-luchshe-chem-v-turcii"
  },
  {
    slug: "pochemu-nash-otel-priboj-zasluzhenno-schitaetsya-odnim-iz-luchshih-mest-dlya-otdyha-v-lazarevskom",
    url: "https://common-costs-035166.framer.app/blog/pochemu-nash-otel-priboj-zasluzhenno-schitaetsya-odnim-iz-luchshih-mest-dlya-otdyha-v-lazarevskom"
  },
  {
    slug: "pochemu-solyannaya-komnata-polezna-dazhe-zdorovym-lyudyam",
    url: "https://common-costs-035166.framer.app/blog/pochemu-solyannaya-komnata-polezna-dazhe-zdorovym-lyudyam"
  },
  {
    slug: "pochemu-stoit-vybrat-otdyh-v-lazarevskom-a-ne-krym",
    url: "https://common-costs-035166.framer.app/blog/pochemu-stoit-vybrat-otdyh-v-lazarevskom-a-ne-krym"
  },
  {
    slug: "privychka-iz-lazarevskogo-kotoruyu-stoit-sokhranit",
    url: "https://common-costs-035166.framer.app/blog/privychka-iz-lazarevskogo-kotoruyu-stoit-sokhranit"
  },
  {
    slug: "chernoe-more-istoriya-polza-dlya-zdorovya-i-interesnye-fakty",
    url: "https://common-costs-035166.framer.app/blog/chernoe-more-istoriya-polza-dlya-zdorovya-i-interesnye-fakty"
  }
];

console.log(`Найдено ${blogArticles.length} статей для обновления`);
console.log("Список статей:");
blogArticles.forEach((article, index) => {
  console.log(`${index + 1}. ${article.slug}`);
});

