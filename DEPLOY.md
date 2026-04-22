# Деплой сайта priboy1.ru

Источник кода: [github.com/usmanoffcom/Priboy-hotel3](https://github.com/usmanoffcom/Priboy-hotel3). Отдельная ветка и свой деплой; другие домены этим скриптом не трогаются.

## Доступ к серверу

- **IP:** `80.249.150.154`
- **Пользователь:** `root`
- **SSH:** только ключ, например `~/.ssh/myunion_vds`

```bash
ssh -i ~/.ssh/myunion_vds root@80.249.150.154 'hostname && uptime'
```

Пример `~/.ssh/config`:

```ssh-config
Host priboy-vds
    HostName 80.249.150.154
    User root
    IdentityFile ~/.ssh/myunion_vds
    IdentitiesOnly yes
```

## Конфигурация

Скопируйте [`.env.deploy.example`](./.env.deploy.example) в `.env.deploy` и заполните. Файл `.env.deploy` не коммитится.

Если проект лежит внутри обёртки (например `Priboy3/Priboy-hotel3/`), `deploy.sh` также прочитает `../.env.deploy`.

Минимум:

```env
DEPLOY_USER=root
DEPLOY_HOST=80.249.150.154
DEPLOY_SSH_KEY=/Users/<вы>/.ssh/myunion_vds
```

## Продакшен

| Параметр | Значение |
|----------|----------|
| Домен | `priboy1.ru` |
| Порт | `3003` |
| systemd | `priboy1-ru-nextjs.service` |
| Каталог на сервере | `/var/www/priboy1.ru-nextjs` |

SMTP и Telegram для формы бронирования — в `.env` на сервере. При деплое можно передать переменные (**не коммитить**):

```bash
export SMTP_PASS="..."
export TELEGRAM_BOT_TOKEN="..."
export TELEGRAM_CHAT_ID="..."
bash deploy.sh
```

Без `SMTP_PASS` и `TELEGRAM_BOT_TOKEN` существующий `.env` на сервере **не перезаписывается**.

## Шаги `deploy.sh`

1. Загрузка `.env.deploy`
2. Проверка хоста и ключа
3. `rsync` на сервер (без `node_modules`, `.next`, `.git`, `.env`, логов)
4. На сервере: `pnpm install --frozen-lockfile`, `pnpm build`
5. systemd unit, права `www-data`, рестарт `priboy1-ru-nextjs.service`
6. nginx для домена и `reload` при успешном `nginx -t`

## Проверка

```bash
ssh -i ~/.ssh/myunion_vds root@80.249.150.154 'systemctl status priboy1-ru-nextjs.service --no-pager'
curl -I https://priboy1.ru/
```

Логи: `journalctl -u priboy1-ru-nextjs.service -n 100 --no-pager`

## Безопасность

Секреты только локально или в менеджере паролей; в git — только `*.example`.
