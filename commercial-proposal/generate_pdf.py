#!/usr/bin/env python3
"""
Скрипт для генерации PDF коммерческого предложения WorkHere
Использует markdown + weasyprint для создания стильного PDF
"""

import markdown
from weasyprint import HTML, CSS
from pathlib import Path


def generate_pdf():
    # Пути к файлам
    script_dir = Path(__file__).parent
    md_file = script_dir / "workhere-proposal.md"
    pdf_file = script_dir / "WorkHere_Commercial_Proposal.pdf"
    
    # Читаем markdown
    md_content = md_file.read_text(encoding="utf-8")
    
    # Конвертируем в HTML
    html_content = markdown.markdown(
        md_content,
        extensions=['tables', 'fenced_code']
    )
    
    # CSS стили для красивого PDF
    css = CSS(string='''
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        @page {
            size: A4;
            margin: 2cm;
            @bottom-center {
                content: counter(page);
                font-size: 10pt;
                color: #666;
            }
        }
        
        body {
            font-family: 'Inter', 'DejaVu Sans', 'Liberation Sans', Arial, sans-serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #333;
        }
        
        h1 {
            color: #1a365d;
            font-size: 28pt;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 0.5em;
            text-align: center;
            border-bottom: 3px solid #3182ce;
            padding-bottom: 0.3em;
        }
        
        h2 {
            color: #2c5282;
            font-size: 16pt;
            font-weight: 600;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
            border-left: 4px solid #3182ce;
            padding-left: 0.5em;
        }
        
        h3 {
            color: #2d3748;
            font-size: 12pt;
            font-weight: 600;
            margin-top: 1em;
            margin-bottom: 0.3em;
        }
        
        p {
            margin-bottom: 0.8em;
        }
        
        ul, ol {
            margin-bottom: 1em;
            padding-left: 1.5em;
        }
        
        li {
            margin-bottom: 0.3em;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1em 0;
            font-size: 10pt;
        }
        
        th {
            background-color: #3182ce;
            color: white;
            font-weight: 600;
            text-align: left;
            padding: 10px 12px;
        }
        
        td {
            padding: 10px 12px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        tr:nth-child(even) {
            background-color: #f7fafc;
        }
        
        hr {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 2em 0;
        }
        
        strong {
            color: #1a365d;
        }
        
        /* Стиль для блоков с преимуществами */
        p:has(✓) {
            background-color: #f0fff4;
            padding: 0.5em;
            border-radius: 4px;
        }
        
        /* Центрирование для последнего блока */
        em {
            display: block;
            text-align: center;
            font-style: italic;
            color: #4a5568;
            margin-top: 2em;
        }
    ''')
    
    # Полный HTML документ
    full_html = f'''
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>WorkHere - Коммерческое предложение</title>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    '''
    
    # Генерируем PDF
    HTML(string=full_html).write_pdf(pdf_file, stylesheets=[css])
    
    print(f"PDF успешно создан: {pdf_file}")
    return pdf_file


if __name__ == "__main__":
    generate_pdf()
