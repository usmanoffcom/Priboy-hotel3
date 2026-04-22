#!/bin/bash

# Скрипт для сжатия изображений меню
# Требует установки imagemagick: brew install imagemagick

SOURCE_DIR="public/Menu_2025"
OUTPUT_DIR="public/menu/dishes-compressed"
QUALITY=85
MAX_WIDTH=1200
MAX_HEIGHT=1200

# Создаем выходную директорию
mkdir -p "$OUTPUT_DIR"

echo "Начинаем сжатие изображений из $SOURCE_DIR..."

# Проверяем наличие imagemagick
if ! command -v convert &> /dev/null; then
    echo "Ошибка: ImageMagick не установлен. Установите его: brew install imagemagick"
    exit 1
fi

# Счетчики
total=0
processed=0

# Обрабатываем все JPG файлы
for file in "$SOURCE_DIR"/*.jpg "$SOURCE_DIR"/*.JPG; do
    if [ -f "$file" ]; then
        total=$((total + 1))
        filename=$(basename "$file")
        # Нормализуем имя файла (убираем пробелы, делаем lowercase)
        normalized_name=$(echo "$filename" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g' | sed 's/ё/e/g' | sed 's/Ё/E/g')
        output_file="$OUTPUT_DIR/$normalized_name"
        
        echo "Обработка: $filename -> $normalized_name"
        
        # Сжимаем изображение
        convert "$file" \
            -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" \
            -quality $QUALITY \
            -strip \
            -interlace Plane \
            "$output_file"
        
        if [ $? -eq 0 ]; then
            processed=$((processed + 1))
            original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
            new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
            reduction=$(echo "scale=1; (1 - $new_size / $original_size) * 100" | bc)
            echo "  ✓ Сжато: $(echo "scale=1; $original_size/1024/1024" | bc)MB -> $(echo "scale=1; $new_size/1024/1024" | bc)MB (уменьшение на ${reduction}%)"
        else
            echo "  ✗ Ошибка при обработке $filename"
        fi
    fi
done

echo ""
echo "Готово! Обработано $processed из $total файлов"
echo "Сжатые изображения сохранены в: $OUTPUT_DIR"

