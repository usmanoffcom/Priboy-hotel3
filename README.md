# Priboy-hotel3

Сайт гостиницы «Прибой»: **[priboy1.ru](https://priboy1.ru)**

- **Стек:** Next.js · TypeScript · Tailwind CSS · shadcn/ui  
- **Репозиторий:** [github.com/usmanoffcom/Priboy-hotel3](https://github.com/usmanoffcom/Priboy-hotel3)  
- **Ветки / деплой:** отдельная ветка и свой выклад на сервер (см. ниже).

### История Git

Ветка `main` на GitHub переписана с **единственным актуальным корневым коммитом**; старая линейка коммитов удалена.

Если у вас остался клон со старой историей: `git fetch origin && git reset --hard origin/main`.

Если код лежит внутри монорепозитория `Priboy3/Priboy-hotel3/`, после переписывания **`git subtree push` на `priboy-hotel3` обычно не проходит** (несовместимые родители). Выкладывайте изменения из **отдельного клона** [Priboy-hotel3](https://github.com/usmanoffcom/Priboy-hotel3) или копируйте дерево проекта в такой клон и пушьте оттуда.

## Быстрый старт

```bash
git clone https://github.com/usmanoffcom/Priboy-hotel3.git
cd Priboy-hotel3
pnpm install
pnpm dev
```

Открыть: `http://localhost:3000`

## Документация

| Файл | Содержание |
|------|------------|
| [PROJECTS_OVERVIEW.md](./PROJECTS_OVERVIEW.md) | Обзор, сервер, ссылки |
| [DEVELOPMENT.md](./DEVELOPMENT.md) | Разработка, env, структура |
| [DEPLOY.md](./DEPLOY.md) | SSH, `deploy.sh`, systemd, nginx |
| [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md) | Правила для ИИ-ассистентов |
| [PERFORMANCE_AND_CDN.md](./PERFORMANCE_AND_CDN.md) | Скорость и CDN |
| [TECHNICAL_SPECIFICATION.md](./TECHNICAL_SPECIFICATION.md) | ТЗ под priboy1.ru |
| [.env.deploy.example](./.env.deploy.example) | Пример для продакшен-деплоя |

## Деплой на продакшен

Из каталога проекта (где `package.json`):

```bash
cp .env.deploy.example .env.deploy   # один раз, заполнить ключ и хост
export SMTP_PASS="..."               # опционально, чтобы обновить .env на сервере
export TELEGRAM_BOT_TOKEN="..."
export TELEGRAM_CHAT_ID="..."
bash deploy.sh
```

Целевой домен по умолчанию: **priboy1.ru**, сервис: **priboy1-ru-nextjs.service**. Подробности в [`DEPLOY.md`](./DEPLOY.md).
