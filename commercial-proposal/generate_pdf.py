#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
Профессиональный дизайн, компактная вёрстка
"""

import markdown
from weasyprint import HTML, CSS
from pathlib import Path


# Логотип WorkHere как inline SVG
LOGO_SVG = '''
<svg width="180" height="50" viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="50" fill="#2196F3"/>
  <rect x="100" y="0" width="80" height="50" fill="#1a1a1a"/>
  <text x="10" y="36" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white">Work</text>
  <text x="108" y="36" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="white">Here</text>
</svg>
'''


def generate_pdf():
    script_dir = Path(__file__).parent
    md_file = script_dir / "workhere-proposal.md"
    pdf_file = script_dir / "WorkHere_Commercial_Proposal.pdf"
    
    md_content = md_file.read_text(encoding="utf-8")
    
    # Убираем первый заголовок, будем использовать логотип вместо него
    lines = md_content.split('\n')
    if lines[0].startswith('# WorkHere'):
        lines = lines[1:]
    md_content = '\n'.join(lines)
    
    html_content = markdown.markdown(
        md_content,
        extensions=['tables', 'fenced_code']
    )
    
    css = CSS(string='''
        @page {
            size: A4;
            margin: 1.5cm 2cm;
            @bottom-right {
                content: counter(page) " / " counter(pages);
                font-size: 9pt;
                color: #888;
            }
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            font-size: 10pt;
            line-height: 1.4;
            color: #222;
        }
        
        .logo-container {
            text-align: center;
            margin-bottom: 8px;
        }
        
        .tagline {
            text-align: center;
            font-size: 14pt;
            color: #444;
            margin: 0 0 12px 0;
            font-weight: 500;
        }
        
        h1 { display: none; }
        
        h2 {
            color: #1a1a1a;
            font-size: 13pt;
            font-weight: 600;
            margin: 16px 0 8px 0;
            padding-bottom: 4px;
            border-bottom: 2px solid #2196F3;
        }
        
        h3 {
            color: #333;
            font-size: 10pt;
            font-weight: 600;
            margin: 10px 0 4px 0;
        }
        
        p {
            margin: 0 0 8px 0;
        }
        
        ul, ol {
            margin: 4px 0 8px 0;
            padding-left: 18px;
        }
        
        li {
            margin-bottom: 2px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 8px 0;
            font-size: 9.5pt;
        }
        
        th {
            background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
            color: white;
            font-weight: 600;
            text-align: left;
            padding: 8px 10px;
        }
        
        td {
            padding: 7px 10px;
            border-bottom: 1px solid #e0e0e0;
            vertical-align: top;
        }
        
        tr:nth-child(even) td {
            background-color: #f8f9fa;
        }
        
        tr:last-child td {
            border-bottom: 2px solid #2196F3;
        }
        
        hr {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 12px 0;
        }
        
        strong {
            color: #1a1a1a;
        }
        
        /* Компактные блоки функционала */
        p + ul {
            margin-top: -4px;
        }
        
        /* Финальный блок */
        p:last-of-type {
            text-align: center;
            background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
            color: white;
            padding: 12px 16px;
            border-radius: 6px;
            margin-top: 16px;
            font-weight: 500;
        }
        
        p:last-of-type strong {
            color: white;
        }
    ''')
    
    full_html = f'''
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>WorkHere — Коммерческое предложение</title>
    </head>
    <body>
        <div class="logo-container">
            {LOGO_SVG}
        </div>
        <p class="tagline">ATS/CRM для подбора персонала</p>
        {html_content}
    </body>
    </html>
    '''
    
    HTML(string=full_html).write_pdf(pdf_file, stylesheets=[css])
    print(f"PDF создан: {pdf_file}")
    return pdf_file


if __name__ == "__main__":
    generate_pdf()
