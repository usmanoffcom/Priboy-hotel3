# Инструкция по созданию favicon и apple-touch-icon

Для создания favicon и apple-touch-icon из логотипа "Прибой" с волнами и тремя звездами:

1. Сохраните изображение логотипа в папку public/ как:
   - apple-touch-icon.png (180x180 пикселей)
   - favicon-source.png (512x512 пикселей для создания других размеров)

2. Создайте favicon.ico из favicon-source.png:
   - Можно использовать онлайн-конвертер: https://favicon.io/favicon-converter/
   - Или ImageMagick: convert favicon-source.png -resize 32x32 favicon.ico

3. Создайте размеры для favicon:
   - favicon-16x16.png (16x16)
   - favicon-32x32.png (32x32)
   - favicon-192x192.png (192x192)
   - favicon-512x512.png (512x512)

Все файлы должны быть в формате PNG с прозрачным фоном (если нужно).
