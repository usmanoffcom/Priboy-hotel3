# Сайт гостиницы «Прибой» — priboy1.ru

Этот каталог — Next.js-приложение для [priboy1.ru](https://priboy1.ru). Публичный репозиторий: [github.com/usmanoffcom/Priboy-hotel3](https://github.com/usmanoffcom/Priboy-hotel3).

## Кратко

| Параметр | Значение |
|----------|----------|
| Продакшен | [priboy1.ru](https://priboy1.ru) |
| Позиционирование | 3★ отель «Прибой» |
| Порт на сервере | `3003` |
| systemd | `priboy1-ru-nextjs.service` |
| Каталог на VDS | `/var/www/priboy1.ru-nextjs` |
| Бронирование | своя форма, SMTP + Telegram |
| Деплой | `bash deploy.sh` из **корня этого репозитория** (где `package.json`) |

## Сервер

- **IP:** `80.249.150.154`
- **SSH:** `ssh -i ~/.ssh/myunion_vds root@80.249.150.154`
- Деплой: `.env.deploy` рядом с проектом или в родительской папке (см. [`DEPLOY.md`](./DEPLOY.md)).

## Рабочая копия внутри обёртки

Если репозиторий лежит как `Priboy3/Priboy-hotel3/`, `deploy.sh` подхватывает `../.env.deploy`.

## Документация

- [Деплой](./DEPLOY.md)
- [README](./README.md)
- [Разработка](./DEVELOPMENT.md)
- [Инструкции для ИИ](./AI_INSTRUCTIONS.md)
- [Производительность и CDN](./PERFORMANCE_AND_CDN.md)
- [Техническое задание](./TECHNICAL_SPECIFICATION.md)
