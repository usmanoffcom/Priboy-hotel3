#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import json
import os
from pathlib import Path
from html import unescape

def clean_text(text):
    """Очистка текста от лишних пробелов"""
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    return text

def extract_content_from_html(html_file):
    """Извлечение контента статьи из HTML файла"""
    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Удаляем script и style
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL | re.IGNORECASE)
    
    result = []
    
    # Извлекаем заголовки h1-h6
    for match in re.finditer(r'<h([1-6])[^>]*>(.*?)</h[1-6]>', html, re.DOTALL | re.IGNORECASE):
        level = match.group(1)
        text = re.sub(r'<[^>]+>', '', match.group(2))
        text = clean_text(text)
        if text and len(text) > 3:
            result.append(f'<h{level}>{text}</h{level}>')
    
    # Извлекаем параграфы
    for match in re.finditer(r'<p[^>]*>(.*?)</p>', html, re.DOTALL | re.IGNORECASE):
        p_content = match.group(1)
        # Сохраняем strong, em, a теги
        p_content = re.sub(r'<(?!\/?(strong|em|a|br|span)\b)[^>]+>', '', p_content)
        p_content = clean_text(p_content)
        if p_content and len(p_content) > 10:
            # Восстанавливаем теги
            p_content = p_content.replace('&lt;strong&gt;', '<strong>').replace('&lt;/strong&gt;', '</strong>')
            p_content = p_content.replace('&lt;em&gt;', '<em>').replace('&lt;/em&gt;', '</em>')
            p_content = p_content.replace('&lt;a', '<a').replace('&lt;/a&gt;', '</a>')
            result.append(f'<p>{p_content}</p>')
    
    # Извлекаем списки
    for match in re.finditer(r'<ul[^>]*>(.*?)</ul>', html, re.DOTALL | re.IGNORECASE):
        ul_content = match.group(1)
        items = re.findall(r'<li[^>]*>(.*?)</li>', ul_content, re.DOTALL | re.IGNORECASE)
        if items:
            result.append('<ul>')
            for item in items:
                item_text = re.sub(r'<(?!\/?(strong|em|a|br)\b)[^>]+>', '', item)
                item_text = clean_text(item_text)
                if item_text:
                    result.append(f'<li>{item_text}</li>')
            result.append('</ul>')
    
    return '\n\n'.join(result)

# Маппинг файлов к slug
file_mapping = {
    'kuda-shodit-peshkom-sezdit-na-avto-ili-avtobuse-v-bolshom-sochi.html': 'kuda-shodit-peshkom-sezdit-na-avto-ili-avtobuse-v-bolshom-sochi',
    'lazarevskoe-bez-mazuta-chistye-plyazhi-i-more-posle-razliva-v-2024.html': 'lazarevskoe-bez-mazuta-chistye-plyazhi-i-more-posle-razliva-v-2024',
    'pochemu-nash-otel-priboj-zasluzhenno-schitaetsya-odnim-iz-luchshih-mest-dlya-otdyha-v-lazarevskom.html': 'pochemu-nash-otel-priboj-zasluzhenno-schitaetsya-odnim-iz-luchshih-mest-dlya-otdyha-v-lazarevskom',
    'kakie-preimushchestva-otdykha-v-lazarevskom-pered-krymom-mozhno-podcherknut.html': 'kakie-preimushchestva-otdykha-v-lazarevskom-pered-krymom-mozhno-podcherknut',
    'zhizn-v-ritme-otdykha-chto-daet-dlitelnoe-prozhivanie-v-grand-otele-i-spa-priboy.html': 'zhizn-v-ritme-otdykha-chto-daet-dlitelnoe-prozhivanie-v-grand-otele-i-spa-priboy',
    'krabovoe-ushchele-prirodnoe-chudo-bolshogo-sochi-marshrut-sredi-prirody-i-presnovodnyh-krabov.html': 'krabovoe-ushchele-prirodnoe-chudo-bolshogo-sochi-marshrut-sredi-prirody-i-presnovodnyh-krabov',
    'otdyh-v-lazarevskom-idealnyj-sezon-dlya-kazhdogo-puteshestvennika.html': 'otdyh-v-lazarevskom-idealnyj-sezon-dlya-kazhdogo-puteshestvennika',
    'otel-so-spa-4-zvezdy-v-lazarevskom-grand-otel-spa-priboj-russkaya-banya-finskaya-sauna-ili-tureckij-hammam.html': 'otel-so-spa-4-zvezdy-v-lazarevskom-grand-otel-spa-priboj-russkaya-banya-finskaya-sauna-ili-tureckij-hammam',
    'oteli-v-lazarevskom-luchshe-chem-v-turcii.html': 'oteli-v-lazarevskom-luchshe-chem-v-turcii',
    'semejnyj-otdyh-v-lazarevskom-luchshie-razvlecheniya.html': 'semejnyj-otdyh-v-lazarevskom-luchshie-razvlecheniya',
    'neizvestnye-zhemchuzhiny-ryadom-s-lazarevskim.html': 'neizvestnye-zhemchuzhiny-ryadom-s-lazarevskim',
    'luchshij-otel-so-spa-4-zvezdy-v-lazarevskom-dlya-otdyha-s-detmi-priboj.html': 'luchshij-otel-so-spa-4-zvezdy-v-lazarevskom-dlya-otdyha-s-detmi-priboj',
}

blog_dir = Path(__dirname__).parent.parent / 'static-site' / 'blog'
output_file = Path(__dirname__).parent / 'lib' / 'blog-content-extracted.json'

extracted = {}

for filename, slug in file_mapping.items():
    filepath = blog_dir / filename
    if filepath.exists():
        print(f'Обрабатываю {filename}...')
        try:
            content = extract_content_from_html(filepath)
            if content:
                extracted[slug] = content
                print(f'  ✓ Извлечено {len(content)} символов')
            else:
                print(f'  ✗ Контент не найден')
        except Exception as e:
            print(f'  ✗ Ошибка: {e}')
    else:
        print(f'  ✗ Файл не найден: {filename}')

# Сохраняем результаты
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(extracted, f, ensure_ascii=False, indent=2)

print(f'\n✓ Извлечено {len(extracted)} статей')
print(f'✓ Результаты сохранены в {output_file}')

