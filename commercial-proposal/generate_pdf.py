#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
EDITORIAL / MAGAZINE STYLE
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
                font-family: 'Georgia', 'Times New Roman', serif;
                color: #0a0a0a;
                font-size: 10pt;
                line-height: 1.5;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 1: EDITORIAL COVER */
            /* ============================================= */
            .cover {
                height: 297mm;
                background: #fafafa;
                position: relative;
                overflow: hidden;
                page-break-after: always;
            }
            
            /* Вертикальная линия слева */
            .cover-line-left {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 60px;
                width: 1px;
                background: #0a0a0a;
            }
            
            /* Горизонтальная линия */
            .cover-line-top {
                position: absolute;
                top: 80px;
                left: 0;
                right: 0;
                height: 1px;
                background: #0a0a0a;
            }
            
            /* Акцентный блок */
            .cover-accent {
                position: absolute;
                top: 0;
                right: 0;
                width: 35%;
                height: 100%;
                background: #2196F3;
            }
            
            /* Текст на акценте */
            .cover-accent-text {
                position: absolute;
                top: 100px;
                right: 40px;
                writing-mode: vertical-rl;
                text-orientation: mixed;
                color: rgba(255,255,255,0.3);
                font-size: 120pt;
                font-weight: 100;
                letter-spacing: -5px;
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
            }
            
            /* Номер издания */
            .cover-issue {
                position: absolute;
                top: 30px;
                left: 80px;
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 9pt;
                letter-spacing: 3px;
                text-transform: uppercase;
            }
            
            /* Главный заголовок */
            .cover-main {
                position: absolute;
                top: 180px;
                left: 80px;
                max-width: 55%;
            }
            
            .cover-logo {
                display: flex;
                align-items: baseline;
                margin-bottom: 60px;
            }
            
            .cover-logo-work {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 72pt;
                font-weight: 800;
                letter-spacing: -4px;
                color: #0a0a0a;
            }
            
            .cover-logo-here {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 72pt;
                font-weight: 200;
                letter-spacing: -4px;
                color: #0a0a0a;
            }
            
            .cover-tagline {
                font-size: 14pt;
                font-style: italic;
                color: #555;
                margin-bottom: 40px;
                max-width: 350px;
                line-height: 1.6;
            }
            
            .cover-description {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 11pt;
                color: #333;
                line-height: 1.8;
                max-width: 380px;
            }
            
            /* Нижняя часть */
            .cover-bottom {
                position: absolute;
                bottom: 60px;
                left: 80px;
                right: 40%;
            }
            
            .cover-stats {
                display: flex;
                gap: 50px;
            }
            
            .cover-stat {
                text-align: left;
            }
            
            .cover-stat-value {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 42pt;
                font-weight: 800;
                color: #0a0a0a;
                line-height: 1;
            }
            
            .cover-stat-label {
                font-size: 9pt;
                color: #777;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-top: 8px;
            }
            
            /* Год */
            .cover-year {
                position: absolute;
                bottom: 60px;
                right: 50px;
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 14pt;
                color: white;
                font-weight: 600;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 2: EDITORIAL CONTENT */
            /* ============================================= */
            .page {
                height: 297mm;
                background: white;
                position: relative;
                padding: 50px 50px 50px 80px;
            }
            
            /* Боковая линия */
            .page-sidebar {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 60px;
                width: 1px;
                background: #e0e0e0;
            }
            
            /* Номер страницы */
            .page-number {
                position: absolute;
                bottom: 40px;
                left: 30px;
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 10pt;
                color: #999;
            }
            
            /* Заголовок страницы */
            .page-header {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                margin-bottom: 30px;
                padding-bottom: 15px;
                border-bottom: 2px solid #0a0a0a;
            }
            
            .page-title {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 9pt;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: #555;
            }
            
            .page-logo {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 11pt;
                font-weight: 700;
            }
            
            /* Двухколоночная сетка */
            .grid-2 {
                display: flex;
                gap: 40px;
                margin-bottom: 25px;
            }
            
            .col-left {
                width: 38%;
            }
            
            .col-right {
                width: 62%;
            }
            
            /* Секция */
            .section {
                margin-bottom: 25px;
            }
            
            .section-number {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 48pt;
                font-weight: 800;
                color: #2196F3;
                line-height: 0.9;
                margin-bottom: 5px;
            }
            
            .section-title {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 11pt;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 2px;
                margin-bottom: 12px;
                color: #0a0a0a;
            }
            
            .section-text {
                font-size: 10pt;
                line-height: 1.7;
                color: #333;
            }
            
            /* Цитата */
            .quote-block {
                background: #f5f5f5;
                padding: 25px 30px;
                margin-bottom: 25px;
                border-left: 4px solid #2196F3;
            }
            
            .quote-text {
                font-size: 13pt;
                font-style: italic;
                line-height: 1.6;
                color: #0a0a0a;
            }
            
            /* Список с номерами */
            .numbered-list {
                list-style: none;
            }
            
            .numbered-list li {
                display: flex;
                gap: 15px;
                margin-bottom: 12px;
                padding-bottom: 12px;
                border-bottom: 1px solid #eee;
            }
            
            .numbered-list li:last-child {
                border-bottom: none;
            }
            
            .list-num {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 18pt;
                font-weight: 800;
                color: #2196F3;
                min-width: 35px;
            }
            
            .list-content h4 {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 10pt;
                font-weight: 700;
                margin-bottom: 3px;
            }
            
            .list-content p {
                font-size: 9pt;
                color: #666;
                line-height: 1.5;
            }
            
            /* Функции в колонках */
            .features-columns {
                display: flex;
                gap: 25px;
            }
            
            .feature-col {
                flex: 1;
            }
            
            .feature-col h4 {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 9pt;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 10px;
                padding-bottom: 8px;
                border-bottom: 2px solid #0a0a0a;
            }
            
            .feature-col ul {
                list-style: none;
            }
            
            .feature-col li {
                font-size: 9pt;
                color: #444;
                padding: 5px 0;
                padding-left: 15px;
                position: relative;
            }
            
            .feature-col li::before {
                content: '—';
                position: absolute;
                left: 0;
                color: #2196F3;
            }
            
            /* ИИ блок - журнальный */
            .ai-editorial {
                background: #0a0a0a;
                padding: 25px 30px;
                margin-bottom: 20px;
                display: flex;
                gap: 30px;
                align-items: center;
            }
            
            .ai-editorial-icon {
                font-size: 36pt;
                flex-shrink: 0;
            }
            
            .ai-editorial-content h3 {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                color: white;
                font-size: 14pt;
                font-weight: 700;
                margin-bottom: 8px;
            }
            
            .ai-editorial-content p {
                color: rgba(255,255,255,0.7);
                font-size: 9pt;
                line-height: 1.6;
            }
            
            /* Интеграции минималистично */
            .integrations-minimal {
                display: flex;
                gap: 20px;
                margin-bottom: 20px;
            }
            
            .int-item {
                flex: 1;
                text-align: center;
                padding: 15px;
                border: 1px solid #ddd;
            }
            
            .int-item strong {
                display: block;
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 9pt;
                margin-bottom: 4px;
            }
            
            .int-item span {
                font-size: 8pt;
                color: #888;
            }
            
            /* Цена - журнальный стиль */
            .price-editorial {
                display: flex;
                border: 2px solid #0a0a0a;
            }
            
            .price-left {
                flex: 1;
                padding: 25px 30px;
                background: white;
            }
            
            .price-label {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 9pt;
                text-transform: uppercase;
                letter-spacing: 2px;
                color: #555;
                margin-bottom: 10px;
            }
            
            .price-amount {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                font-size: 42pt;
                font-weight: 800;
                color: #0a0a0a;
                line-height: 1;
            }
            
            .price-currency {
                font-size: 18pt;
                font-weight: 400;
            }
            
            .price-period {
                font-size: 10pt;
                color: #777;
                margin-top: 5px;
            }
            
            .price-right {
                flex: 1;
                padding: 25px 30px;
                background: #2196F3;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            
            .price-right h3 {
                font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
                color: white;
                font-size: 14pt;
                font-weight: 700;
                margin-bottom: 5px;
            }
            
            .price-right p {
                color: rgba(255,255,255,0.9);
                font-size: 10pt;
            }
        </style>
    </head>
    <body>
        <!-- ===== СТРАНИЦА 1: EDITORIAL COVER ===== -->
        <div class="cover">
            <div class="cover-line-left"></div>
            <div class="cover-line-top"></div>
            <div class="cover-accent"></div>
            <div class="cover-accent-text">ATS</div>
            
            <div class="cover-issue">Коммерческое предложение</div>
            
            <div class="cover-main">
                <div class="cover-logo">
                    <span class="cover-logo-work">Work</span>
                    <span class="cover-logo-here">Here</span>
                </div>
                
                <p class="cover-tagline">
                    «Единое пространство для вакансий, кандидатов и коммуникаций»
                </p>
                
                <p class="cover-description">
                    ATS/CRM-система нового поколения, которая ускоряет закрытие вакансий 
                    за счёт автоматизации рутины, единой базы кандидатов и прозрачной 
                    аналитики воронки подбора.
                </p>
            </div>
            
            <div class="cover-bottom">
                <div class="cover-stats">
                    <div class="cover-stat">
                        <div class="cover-stat-value">5×</div>
                        <div class="cover-stat-label">Быстрее поиск</div>
                    </div>
                    <div class="cover-stat">
                        <div class="cover-stat-value">0</div>
                        <div class="cover-stat-label">Дублей</div>
                    </div>
                    <div class="cover-stat">
                        <div class="cover-stat-value">∞</div>
                        <div class="cover-stat-label">Интеграций</div>
                    </div>
                </div>
            </div>
            
            <div class="cover-year">2025</div>
        </div>
        
        <!-- ===== СТРАНИЦА 2: EDITORIAL CONTENT ===== -->
        <div class="page">
            <div class="page-sidebar"></div>
            <div class="page-number">02</div>
            
            <div class="page-header">
                <span class="page-title">Возможности системы</span>
                <span class="page-logo">WorkHere</span>
            </div>
            
            <div class="grid-2">
                <div class="col-left">
                    <div class="section">
                        <div class="section-number">01</div>
                        <div class="section-title">Для кого</div>
                        <ul class="numbered-list">
                            <li>
                                <span class="list-num">A</span>
                                <div class="list-content">
                                    <h4>HR-директора</h4>
                                    <p>Прозрачность воронки и аналитика</p>
                                </div>
                            </li>
                            <li>
                                <span class="list-num">B</span>
                                <div class="list-content">
                                    <h4>Рекрутеры</h4>
                                    <p>Единая база и автоматизация</p>
                                </div>
                            </li>
                            <li>
                                <span class="list-num">C</span>
                                <div class="list-content">
                                    <h4>HR-универсалы</h4>
                                    <p>Интеграция с 1С и передача данных</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-right">
                    <div class="quote-block">
                        <p class="quote-text">
                            WorkHere решает главную боль рекрутинга — хаос данных. 
                            Кандидаты больше не теряются в почте и таблицах, 
                            а конверсия воронки видна в реальном времени.
                        </p>
                    </div>
                    
                    <div class="section">
                        <div class="section-number">02</div>
                        <div class="section-title">Функционал</div>
                        <div class="features-columns">
                            <div class="feature-col">
                                <h4>Подбор</h4>
                                <ul>
                                    <li>Воронка / канбан</li>
                                    <li>Карточка кандидата</li>
                                    <li>Задачи и напоминания</li>
                                </ul>
                            </div>
                            <div class="feature-col">
                                <h4>Прозрачность</h4>
                                <ul>
                                    <li>История действий</li>
                                    <li>Согласования</li>
                                    <li>Командная работа</li>
                                </ul>
                            </div>
                            <div class="feature-col">
                                <h4>Аналитика</h4>
                                <ul>
                                    <li>Конверсия этапов</li>
                                    <li>Скорость закрытия</li>
                                    <li>Источники</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="ai-editorial">
                <div class="ai-editorial-icon">🧠</div>
                <div class="ai-editorial-content">
                    <h3>ИИ-поиск кандидатов</h3>
                    <p>Интеллектуальный поиск по вашей базе и работным сайтам. Находит кандидатов по смыслу, а не только по ключевым словам. Умное ранжирование экономит часы работы рекрутера.</p>
                </div>
            </div>
            
            <div class="integrations-minimal">
                <div class="int-item">
                    <strong>Джоб-сайты</strong>
                    <span>автоимпорт откликов</span>
                </div>
                <div class="int-item">
                    <strong>Мессенджеры</strong>
                    <span>история переписки</span>
                </div>
                <div class="int-item">
                    <strong>1С</strong>
                    <span>обмен данными</span>
                </div>
                <div class="int-item">
                    <strong>API</strong>
                    <span>любые системы</span>
                </div>
            </div>
            
            <div class="price-editorial">
                <div class="price-left">
                    <div class="price-label">Базовая лицензия</div>
                    <div class="price-amount">20 000 <span class="price-currency">₽</span></div>
                    <div class="price-period">в год</div>
                </div>
                <div class="price-right">
                    <h3>Начните сегодня</h3>
                    <p>Свяжитесь для демонстрации системы</p>
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
