#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
BRUTALIST / CONSTRUCTIVIST STYLE
"""

from weasyprint import HTML, CSS
from pathlib import Path


def generate_pdf():
    script_dir = Path(__file__).parent
    pdf_file = script_dir / "WorkHere_Commercial_Proposal.pdf"
    
    html_content = '''
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>WorkHere — Коммерческое предложение</title>
        <style>
            @page {
                size: A4;
                margin: 0;
            }
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial Black', 'Helvetica Neue', sans-serif;
                color: #000;
                font-size: 10pt;
                line-height: 1.4;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 1: BRUTALIST COVER */
            /* ============================================= */
            .cover {
                height: 297mm;
                background: #000;
                position: relative;
                overflow: hidden;
                page-break-after: always;
            }
            
            /* Диагональный блок */
            .cover-diagonal {
                position: absolute;
                top: -100px;
                right: -100px;
                width: 500px;
                height: 800px;
                background: #2196F3;
                transform: rotate(15deg);
            }
            
            /* Горизонтальные полосы */
            .cover-stripe {
                position: absolute;
                left: 0;
                right: 0;
                height: 8px;
                background: #fff;
            }
            
            .cover-stripe-1 { top: 25%; }
            .cover-stripe-2 { top: 50%; }
            .cover-stripe-3 { top: 75%; }
            
            /* Огромный текст */
            .cover-huge {
                position: absolute;
                bottom: -40px;
                left: 40px;
                font-size: 180pt;
                font-weight: 900;
                color: rgba(255,255,255,0.08);
                letter-spacing: -15px;
                line-height: 0.8;
            }
            
            /* Логотип */
            .cover-logo {
                position: absolute;
                top: 60px;
                left: 50px;
                display: flex;
            }
            
            .cover-logo-work {
                background: #2196F3;
                color: #000;
                font-size: 28pt;
                font-weight: 900;
                padding: 15px 20px;
            }
            
            .cover-logo-here {
                background: #fff;
                color: #000;
                font-size: 28pt;
                font-weight: 900;
                padding: 15px 20px;
            }
            
            /* Главный текст */
            .cover-main {
                position: absolute;
                top: 200px;
                left: 50px;
                max-width: 450px;
            }
            
            .cover-title {
                font-size: 11pt;
                font-weight: 900;
                color: #2196F3;
                text-transform: uppercase;
                letter-spacing: 5px;
                margin-bottom: 30px;
            }
            
            .cover-headline {
                font-size: 48pt;
                font-weight: 900;
                color: #fff;
                line-height: 0.95;
                margin-bottom: 30px;
                text-transform: uppercase;
            }
            
            .cover-desc {
                font-family: Arial, sans-serif;
                font-size: 12pt;
                font-weight: 400;
                color: rgba(255,255,255,0.7);
                line-height: 1.6;
                max-width: 380px;
            }
            
            /* Блоки внизу */
            .cover-blocks {
                position: absolute;
                bottom: 50px;
                left: 50px;
                display: flex;
                gap: 3px;
            }
            
            .cover-block {
                width: 100px;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            
            .cover-block:nth-child(1) { background: #2196F3; }
            .cover-block:nth-child(2) { background: #fff; }
            .cover-block:nth-child(3) { background: #2196F3; }
            .cover-block:nth-child(4) { background: #fff; }
            
            .cover-block-value {
                font-size: 24pt;
                font-weight: 900;
                color: #000;
            }
            
            .cover-block-label {
                font-size: 7pt;
                font-weight: 700;
                color: #000;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 2: BRUTALIST CONTENT */
            /* ============================================= */
            .page {
                height: 297mm;
                background: #fff;
                position: relative;
                overflow: hidden;
            }
            
            /* Чёрная полоса сверху */
            .page-top-bar {
                background: #000;
                padding: 15px 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .page-logo {
                display: flex;
            }
            
            .page-logo-work {
                background: #2196F3;
                color: #000;
                font-size: 12pt;
                font-weight: 900;
                padding: 5px 10px;
            }
            
            .page-logo-here {
                color: #fff;
                font-size: 12pt;
                font-weight: 900;
                padding: 5px 10px;
            }
            
            .page-title {
                color: #fff;
                font-size: 9pt;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 3px;
            }
            
            /* Контент */
            .content {
                padding: 30px 40px;
            }
            
            /* Секция с жирным заголовком */
            .brutal-section {
                margin-bottom: 20px;
            }
            
            .brutal-header {
                display: flex;
                align-items: stretch;
                margin-bottom: 15px;
            }
            
            .brutal-number {
                background: #000;
                color: #fff;
                font-size: 24pt;
                font-weight: 900;
                padding: 10px 20px;
                display: flex;
                align-items: center;
            }
            
            .brutal-title {
                background: #2196F3;
                color: #000;
                font-size: 14pt;
                font-weight: 900;
                padding: 10px 20px;
                text-transform: uppercase;
                letter-spacing: 2px;
                display: flex;
                align-items: center;
                flex: 1;
            }
            
            /* Сетка аудитории */
            .audience-brutal {
                display: flex;
                gap: 3px;
                margin-bottom: 20px;
            }
            
            .audience-brutal-item {
                flex: 1;
                background: #f0f0f0;
                padding: 20px;
                border-left: 5px solid #000;
            }
            
            .audience-brutal-item h4 {
                font-size: 11pt;
                font-weight: 900;
                text-transform: uppercase;
                margin-bottom: 8px;
            }
            
            .audience-brutal-item p {
                font-family: Arial, sans-serif;
                font-size: 9pt;
                font-weight: 400;
                color: #444;
                line-height: 1.5;
            }
            
            /* Проблемы - жёсткая таблица */
            .problems-brutal {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 20px;
            }
            
            .problems-brutal th {
                background: #000;
                color: #fff;
                font-size: 9pt;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 1px;
                padding: 12px 15px;
                text-align: left;
            }
            
            .problems-brutal td {
                padding: 10px 15px;
                font-family: Arial, sans-serif;
                font-size: 9pt;
                border-bottom: 2px solid #000;
            }
            
            .problems-brutal .problem {
                background: #ffebee;
                color: #b71c1c;
                font-weight: 700;
            }
            
            .problems-brutal .solution {
                background: #e8f5e9;
                color: #1b5e20;
                font-weight: 700;
            }
            
            /* Функционал - блоки */
            .features-brutal {
                display: flex;
                flex-wrap: wrap;
                gap: 3px;
                margin-bottom: 20px;
            }
            
            .feature-brutal {
                width: calc(25% - 3px);
                background: #000;
                color: #fff;
                padding: 15px;
            }
            
            .feature-brutal h5 {
                font-size: 10pt;
                font-weight: 900;
                text-transform: uppercase;
                margin-bottom: 10px;
                color: #2196F3;
            }
            
            .feature-brutal ul {
                list-style: none;
            }
            
            .feature-brutal li {
                font-family: Arial, sans-serif;
                font-size: 8pt;
                font-weight: 400;
                padding: 3px 0;
                color: rgba(255,255,255,0.8);
            }
            
            .feature-brutal li::before {
                content: '► ';
                color: #2196F3;
            }
            
            /* ИИ блок */
            .ai-brutal {
                background: #2196F3;
                padding: 20px 25px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 20px;
            }
            
            .ai-brutal-badge {
                background: #000;
                color: #fff;
                font-size: 10pt;
                font-weight: 900;
                padding: 15px 20px;
                text-transform: uppercase;
            }
            
            .ai-brutal-content h3 {
                font-size: 14pt;
                font-weight: 900;
                color: #000;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
            
            .ai-brutal-content p {
                font-family: Arial, sans-serif;
                font-size: 9pt;
                color: rgba(0,0,0,0.8);
                line-height: 1.5;
            }
            
            /* Интеграции */
            .integrations-brutal {
                display: flex;
                gap: 3px;
                margin-bottom: 20px;
            }
            
            .int-brutal {
                flex: 1;
                background: #f5f5f5;
                padding: 15px;
                text-align: center;
                border-top: 4px solid #000;
            }
            
            .int-brutal strong {
                display: block;
                font-size: 10pt;
                font-weight: 900;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
            
            .int-brutal span {
                font-family: Arial, sans-serif;
                font-size: 8pt;
                color: #666;
            }
            
            /* Цена */
            .price-brutal {
                display: flex;
            }
            
            .price-brutal-left {
                flex: 1;
                background: #000;
                padding: 25px 30px;
                color: #fff;
            }
            
            .price-brutal-label {
                font-size: 9pt;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #2196F3;
                margin-bottom: 10px;
            }
            
            .price-brutal-amount {
                font-size: 48pt;
                font-weight: 900;
                line-height: 1;
            }
            
            .price-brutal-currency {
                font-size: 24pt;
            }
            
            .price-brutal-period {
                font-family: Arial, sans-serif;
                font-size: 10pt;
                font-weight: 400;
                color: rgba(255,255,255,0.6);
                margin-top: 5px;
            }
            
            .price-brutal-right {
                flex: 1;
                background: #2196F3;
                padding: 25px 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .price-brutal-right h3 {
                font-size: 18pt;
                font-weight: 900;
                color: #000;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
            
            .price-brutal-right p {
                font-family: Arial, sans-serif;
                font-size: 10pt;
                color: rgba(0,0,0,0.8);
            }
        </style>
    </head>
    <body>
        <!-- ===== СТРАНИЦА 1: BRUTALIST COVER ===== -->
        <div class="cover">
            <div class="cover-diagonal"></div>
            <div class="cover-stripe cover-stripe-1"></div>
            <div class="cover-stripe cover-stripe-2"></div>
            <div class="cover-stripe cover-stripe-3"></div>
            <div class="cover-huge">WH</div>
            
            <div class="cover-logo">
                <span class="cover-logo-work">WORK</span>
                <span class="cover-logo-here">HERE</span>
            </div>
            
            <div class="cover-main">
                <div class="cover-title">Коммерческое предложение</div>
                <h1 class="cover-headline">ATS/CRM для подбора персонала</h1>
                <p class="cover-desc">
                    Единое пространство для вакансий, кандидатов и коммуникаций. 
                    Автоматизация рутины. Прозрачная аналитика. ИИ-поиск.
                </p>
            </div>
            
            <div class="cover-blocks">
                <div class="cover-block">
                    <div class="cover-block-value">5×</div>
                    <div class="cover-block-label">Быстрее</div>
                </div>
                <div class="cover-block">
                    <div class="cover-block-value">0</div>
                    <div class="cover-block-label">Дублей</div>
                </div>
                <div class="cover-block">
                    <div class="cover-block-value">∞</div>
                    <div class="cover-block-label">Связей</div>
                </div>
                <div class="cover-block">
                    <div class="cover-block-value">AI</div>
                    <div class="cover-block-label">Поиск</div>
                </div>
            </div>
        </div>
        
        <!-- ===== СТРАНИЦА 2: BRUTALIST CONTENT ===== -->
        <div class="page">
            <div class="page-top-bar">
                <div class="page-logo">
                    <span class="page-logo-work">WORK</span>
                    <span class="page-logo-here">HERE</span>
                </div>
                <span class="page-title">Возможности системы</span>
            </div>
            
            <div class="content">
                <!-- Аудитория -->
                <div class="brutal-section">
                    <div class="brutal-header">
                        <div class="brutal-number">01</div>
                        <div class="brutal-title">Для кого</div>
                    </div>
                    <div class="audience-brutal">
                        <div class="audience-brutal-item">
                            <h4>HR-директора</h4>
                            <p>Прозрачность воронки, контроль качества, аналитика подбора</p>
                        </div>
                        <div class="audience-brutal-item">
                            <h4>Рекрутеры</h4>
                            <p>Быстрый поиск, единая база, автоматизация рутины</p>
                        </div>
                        <div class="audience-brutal-item">
                            <h4>HR-универсалы</h4>
                            <p>Интеграция с 1С, передача данных о сотрудниках</p>
                        </div>
                    </div>
                </div>
                
                <!-- Проблемы -->
                <div class="brutal-section">
                    <div class="brutal-header">
                        <div class="brutal-number">02</div>
                        <div class="brutal-title">Проблемы → Решения</div>
                    </div>
                    <table class="problems-brutal">
                        <tr>
                            <th width="50%">Было</th>
                            <th>Стало</th>
                        </tr>
                        <tr>
                            <td class="problem">Данные в почте и таблицах</td>
                            <td class="solution">Единая база кандидатов</td>
                        </tr>
                        <tr>
                            <td class="problem">Нет контроля этапов</td>
                            <td class="solution">Воронка с аналитикой</td>
                        </tr>
                        <tr>
                            <td class="problem">Много рутины</td>
                            <td class="solution">Автоматизация</td>
                        </tr>
                        <tr>
                            <td class="problem">Дубли кандидатов</td>
                            <td class="solution">Дедупликация</td>
                        </tr>
                    </table>
                </div>
                
                <!-- Функционал -->
                <div class="brutal-section">
                    <div class="brutal-header">
                        <div class="brutal-number">03</div>
                        <div class="brutal-title">Функционал</div>
                    </div>
                    <div class="features-brutal">
                        <div class="feature-brutal">
                            <h5>Подбор</h5>
                            <ul><li>Воронка</li><li>Карточки</li><li>Задачи</li></ul>
                        </div>
                        <div class="feature-brutal">
                            <h5>Контроль</h5>
                            <ul><li>История</li><li>Согласования</li><li>Команда</li></ul>
                        </div>
                        <div class="feature-brutal">
                            <h5>Аналитика</h5>
                            <ul><li>Конверсия</li><li>Скорость</li><li>Источники</li></ul>
                        </div>
                        <div class="feature-brutal">
                            <h5>Качество</h5>
                            <ul><li>Дедупликация</li><li>Объединение</li><li>Чистота</li></ul>
                        </div>
                    </div>
                </div>
                
                <!-- ИИ -->
                <div class="ai-brutal">
                    <div class="ai-brutal-badge">🧠 AI</div>
                    <div class="ai-brutal-content">
                        <h3>ИИ-поиск кандидатов</h3>
                        <p>Интеллектуальный поиск по базе и работным сайтам. Находит по смыслу, не по ключевым словам.</p>
                    </div>
                </div>
                
                <!-- Интеграции -->
                <div class="integrations-brutal">
                    <div class="int-brutal"><strong>Job-сайты</strong><span>автоимпорт</span></div>
                    <div class="int-brutal"><strong>Мессенджеры</strong><span>история</span></div>
                    <div class="int-brutal"><strong>1С</strong><span>обмен</span></div>
                    <div class="int-brutal"><strong>API</strong><span>любые</span></div>
                </div>
                
                <!-- Цена -->
                <div class="price-brutal">
                    <div class="price-brutal-left">
                        <div class="price-brutal-label">Лицензия</div>
                        <div class="price-brutal-amount">20 000 <span class="price-brutal-currency">₽</span></div>
                        <div class="price-brutal-period">в год</div>
                    </div>
                    <div class="price-brutal-right">
                        <h3>Начать</h3>
                        <p>Свяжитесь для демо</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    '''
    
    HTML(string=html_content).write_pdf(pdf_file)
    print(f"✓ PDF создан: {pdf_file}")
    return pdf_file


if __name__ == "__main__":
    generate_pdf()
