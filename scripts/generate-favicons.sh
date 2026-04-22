#!/bin/bash

# Скрипт для генерации favicon и apple-touch-icon из исходного изображения
# Использование: ./scripts/generate-favicons.sh path/to/source-logo.png

SOURCE_IMAGE="$1"

if [ -z "$SOURCE_IMAGE" ]; then
    echo "Использование: $0 <путь_к_исходному_изображению>"
    echo "Пример: $0 ../logo-priboy.png"
    exit 1
fi

if [ ! -f "$SOURCE_IMAGE" ]; then
    echo "Ошибка: файл $SOURCE_IMAGE не найден"
    exit 1
fi

PUBLIC_DIR="public"

# Проверяем наличие ImageMagick
if ! command -v convert &> /dev/null; then
    echo "Ошибка: ImageMagick не установлен"
    echo "Установите: brew install imagemagick (macOS) или apt-get install imagemagick (Linux)"
    exit 1
fi

echo "Генерация favicon и apple-touch-icon из $SOURCE_IMAGE..."

# Apple Touch Icon (180x180)
convert "$SOURCE_IMAGE" -resize 180x180 -background none -gravity center -extent 180x180 "$PUBLIC_DIR/apple-touch-icon.png"
echo "✓ Создан apple-touch-icon.png (180x180)"

# Favicon размеры
convert "$SOURCE_IMAGE" -resize 16x16 -background none -gravity center -extent 16x16 "$PUBLIC_DIR/favicon-16x16.png"
echo "✓ Создан favicon-16x16.png"

convert "$SOURCE_IMAGE" -resize 32x32 -background none -gravity center -extent 32x32 "$PUBLIC_DIR/favicon-32x32.png"
echo "✓ Создан favicon-32x32.png"

convert "$SOURCE_IMAGE" -resize 192x192 -background none -gravity center -extent 192x192 "$PUBLIC_DIR/favicon-192x192.png"
echo "✓ Создан favicon-192x192.png"

convert "$SOURCE_IMAGE" -resize 512x512 -background none -gravity center -extent 512x512 "$PUBLIC_DIR/favicon-512x512.png"
echo "✓ Создан favicon-512x512.png"

# Сохраняем исходник
cp "$SOURCE_IMAGE" "$PUBLIC_DIR/favicon-source.png"
echo "✓ Сохранен исходник как favicon-source.png"

# Создаем favicon.ico (32x32)
convert "$SOURCE_IMAGE" -resize 32x32 -background none -gravity center -extent 32x32 "$PUBLIC_DIR/favicon.ico"
echo "✓ Создан favicon.ico"

echo ""
echo "✅ Все favicon файлы успешно созданы в папке $PUBLIC_DIR/"

