# Инструкции для ИИ — Priboy-hotel3 (priboy1.ru)

## Назначение

Репозиторий [Priboy-hotel3](https://github.com/usmanoffcom/Priboy-hotel3) — **один** сайт: гостиница «Прибой», домен **priboy1.ru** (3★).

## Перед работой

- Прочитай [`PROJECTS_OVERVIEW.md`](./PROJECTS_OVERVIEW.md) и при необходимости [`DEVELOPMENT.md`](./DEVELOPMENT.md).
- Код — в корне клона (`app/`, `components/`, …).
- Продакшен: **https://priboy1.ru** — в метаданных, canonical, `NEXT_PUBLIC_SITE_URL` не подставляй другие домены.

## Деплой

- Скрипт: **`deploy.sh`** из корня репозитория (где `package.json`).
- SSH: `.env.deploy` здесь или в `../` при вложенной папке; см. [`DEPLOY.md`](./DEPLOY.md).
- Сервис: **`priboy1-ru-nextjs.service`**, порт по умолчанию **3003**.

## Контент

- Отель **3★**, Лазаревское, **priboy1.ru**.
- Бронирование: **кастомная форма** + SMTP + Telegram.
- Не смешивать брендинг и юртексты с другими площадками без задачи.

## Документация

1. [`DEPLOY.md`](./DEPLOY.md)
2. [`PROJECTS_OVERVIEW.md`](./PROJECTS_OVERVIEW.md)
3. [`README.md`](./README.md)
4. [`DEVELOPMENT.md`](./DEVELOPMENT.md)

Если в запросе явно другой домен — уточни у пользователя контекст.
