# Техническое задание (актуально): сайт гостиницы «Прибой» — priboy1.ru

**Репозиторий:** [github.com/usmanoffcom/Priboy-hotel3](https://github.com/usmanoffcom/Priboy-hotel3)  
**Продакшен:** https://priboy1.ru  
**Позиционирование:** отель 3★, Лазаревское.

---

## 1. Стек

- Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui  
- Формы: React Hook Form + Zod  
- Изображения: Next.js `Image`, при необходимости CDN (`assetPrefix` / `NEXT_PUBLIC_CDN_URL`)  
- SEO: Metadata API, sitemap, человекочитаемые URL  

## 2. Ключевой функционал

- Публичные страницы отеля: главная, номера, цены, ресторан, развлечения, о комплексе, контакты, события, Lazarevskoe-гайды, блог, юридические страницы.  
- **Бронирование:** собственная форма → API → SMTP + Telegram; секреты только на сервере.  
- TravelLine в этом репозитории не обязателен (если не добавлен отдельной задачей).

## 3. Маршруты (ориентир)

См. каталог `app/`: `/`, `/rooms`, `/booking`, `/restaurant`, `/entertainment`, `/blog`, `/contacts`, `/prices`, `/events`, `/lazarevskoe/...`, `/o-komplekse`, `/about`, `/privacy`, `/rekvizity`, `/otmena-bronirovaniya`, `/pravila-prozhivaniya` и др.

## 4. Инфраструктура

- Деплой: `deploy.sh`, VDS, systemd `priboy1-ru-nextjs.service`, nginx, порт по умолчанию `3003`. Подробно: [`DEPLOY.md`](./DEPLOY.md).  
- Домен и `NEXT_PUBLIC_SITE_URL` — **priboy1.ru**.

## 5. Качество

- Адаптивная вёрстка, доступность (семантика, контраст, фокус).  
- Core Web Vitals — по рекомендациям Google; замеры — [`PERFORMANCE_AND_CDN.md`](./PERFORMANCE_AND_CDN.md).  
- Контент и соцсети — только для этого отеля; актуальные ссылки — из контента / `contacts`.

## 6. Безопасность

- HTTPS в продакшене.  
- Валидация форм на клиенте и в API.  
- Секреты не в git; только `.example`-файлы.
