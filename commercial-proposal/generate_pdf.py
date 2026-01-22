#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
2 страницы: титул + контент
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
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                color: #1a1a2e;
                font-size: 9pt;
                line-height: 1.4;
            }
            
            /* ===== СТРАНИЦА 1: ТИТУЛ ===== */
            .cover {
                height: 297mm;
                background: linear-gradient(145deg, #2196F3 0%, #1976D2 40%, #0d47a1 100%);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                position: relative;
                overflow: hidden;
                page-break-after: always;
            }
            
            .cover::before {
                content: '';
                position: absolute;
                top: -30%;
                right: -20%;
                width: 600px;
                height: 600px;
                background: rgba(255,255,255,0.08);
                border-radius: 50%;
            }
            
            .cover::after {
                content: '';
                position: absolute;
                bottom: -20%;
                left: -10%;
                width: 400px;
                height: 400px;
                background: rgba(255,255,255,0.05);
                border-radius: 50%;
            }
            
            .cover-content {
                position: relative;
                z-index: 1;
            }
            
            .logo-box {
                display: inline-flex;
                align-items: center;
                background: white;
                border-radius: 16px;
                padding: 20px 32px;
                box-shadow: 0 25px 80px rgba(0,0,0,0.25);
                margin-bottom: 50px;
            }
            
            .logo-work {
                background: #2196F3;
                color: white;
                font-size: 38pt;
                font-weight: 700;
                padding: 12px 18px;
                border-radius: 8px;
            }
            
            .logo-here {
                color: #1a1a2e;
                font-size: 38pt;
                font-weight: 700;
                padding: 12px 18px;
            }
            
            .cover h1 {
                color: white;
                font-size: 26pt;
                font-weight: 300;
                letter-spacing: 3px;
                margin-bottom: 16px;
                text-transform: uppercase;
            }
            
            .cover .subtitle {
                color: rgba(255,255,255,0.9);
                font-size: 14pt;
                font-weight: 400;
                max-width: 480px;
                line-height: 1.6;
            }
            
            .cover-badge {
                position: absolute;
                bottom: 60px;
                background: rgba(255,255,255,0.2);
                padding: 14px 28px;
                border-radius: 50px;
                color: white;
                font-size: 11pt;
                font-weight: 500;
                letter-spacing: 1px;
            }
            
            /* ===== СТРАНИЦА 2: ВЕСЬ КОНТЕНТ ===== */
            .page {
                padding: 32px 40px;
                height: 297mm;
                background: #f8fafc;
                position: relative;
            }
            
            .page::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: #2196F3;
            }
            
            /* Header */
            .page-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
                padding-bottom: 12px;
                border-bottom: 1px solid #e2e8f0;
            }
            
            .mini-logo {
                display: flex;
                align-items: center;
                font-weight: 700;
                font-size: 12pt;
            }
            
            .mini-logo .work {
                background: #2196F3;
                color: white;
                padding: 3px 6px;
                border-radius: 4px;
            }
            
            .mini-logo .here {
                color: #1a1a2e;
                padding: 3px 6px;
            }
            
            /* Intro */
            .intro-text {
                font-size: 10pt;
                color: #4a5568;
                line-height: 1.5;
                margin-bottom: 16px;
                padding: 12px 16px;
                background: white;
                border-radius: 10px;
                border-left: 3px solid #2196F3;
                box-shadow: 0 2px 8px rgba(0,0,0,0.04);
            }
            
            /* Section titles */
            .section-title {
                font-size: 11pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .section-title .icon {
                width: 24px;
                height: 24px;
                background: #2196F3;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 11pt;
            }
            
            /* Two column layout */
            .two-columns {
                display: flex;
                gap: 16px;
                margin-bottom: 14px;
            }
            
            .column {
                flex: 1;
            }
            
            /* Audience cards */
            .audience-grid {
                display: flex;
                gap: 10px;
                margin-bottom: 14px;
            }
            
            .audience-card {
                flex: 1;
                background: white;
                border-radius: 10px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                border-top: 3px solid #2196F3;
            }
            
            .audience-card:nth-child(2) { border-color: #1976D2; }
            .audience-card:nth-child(3) { border-color: #0d47a1; }
            
            .audience-card h3 {
                font-size: 9pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 4px;
            }
            
            .audience-card p {
                font-size: 8pt;
                color: #64748b;
                line-height: 1.4;
            }
            
            /* Problems table */
            .problems-table {
                width: 100%;
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                margin-bottom: 14px;
            }
            
            .problems-table th {
                background: #1a1a2e;
                color: white;
                font-weight: 600;
                padding: 8px 12px;
                text-align: left;
                font-size: 8pt;
            }
            
            .problems-table td {
                padding: 6px 12px;
                border-bottom: 1px solid #f1f5f9;
                font-size: 8pt;
            }
            
            .problems-table tr:last-child td { border-bottom: none; }
            
            .problem-cell { color: #64748b; }
            
            .solution-cell {
                color: #1a1a2e;
                font-weight: 500;
            }
            
            .solution-cell::before {
                content: '✓';
                color: #2196F3;
                font-weight: bold;
                margin-right: 6px;
            }
            
            /* Features grid */
            .features-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 14px;
            }
            
            .feature-card {
                width: calc(25% - 8px);
                background: white;
                border-radius: 10px;
                padding: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.04);
            }
            
            .feature-card h4 {
                font-size: 8.5pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 6px;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .feature-card h4 .dot {
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: #2196F3;
            }
            
            .feature-card ul {
                list-style: none;
                padding: 0;
            }
            
            .feature-card li {
                font-size: 7.5pt;
                color: #4a5568;
                padding: 2px 0;
                padding-left: 10px;
                position: relative;
            }
            
            .feature-card li::before {
                content: '→';
                position: absolute;
                left: 0;
                color: #2196F3;
                font-size: 7pt;
            }
            
            /* Integrations */
            .integrations {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 14px;
            }
            
            .integration-tag {
                background: white;
                border-radius: 50px;
                padding: 6px 14px;
                font-size: 8pt;
                font-weight: 600;
                color: #1a1a2e;
                box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                border: 1px solid #e2e8f0;
            }
            
            .integration-tag span {
                color: #64748b;
                font-weight: 400;
            }
            
            /* AI block */
            .ai-block {
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 12px;
                padding: 16px 20px;
                color: white;
                margin-bottom: 14px;
                display: flex;
                gap: 20px;
            }
            
            .ai-block-content {
                flex: 1;
            }
            
            .ai-block h3 {
                font-size: 11pt;
                font-weight: 700;
                margin-bottom: 6px;
            }
            
            .ai-block ul {
                list-style: none;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                gap: 4px 16px;
            }
            
            .ai-block li {
                font-size: 8pt;
                padding-left: 14px;
                position: relative;
                opacity: 0.95;
            }
            
            .ai-block li::before {
                content: '✓';
                position: absolute;
                left: 0;
                font-weight: bold;
            }
            
            /* Bottom section: price + CTA */
            .bottom-section {
                display: flex;
                gap: 16px;
            }
            
            .pricing {
                flex: 1;
                background: white;
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 16px rgba(33, 150, 243, 0.12);
                border: 2px solid #2196F3;
            }
            
            .pricing h3 {
                font-size: 9pt;
                color: #64748b;
                font-weight: 500;
                margin-bottom: 4px;
            }
            
            .pricing .price {
                font-size: 28pt;
                font-weight: 800;
                color: #1a1a2e;
            }
            
            .pricing .price span {
                font-size: 12pt;
                font-weight: 400;
                color: #64748b;
            }
            
            .pricing .period {
                font-size: 9pt;
                color: #64748b;
            }
            
            .cta {
                flex: 1;
                background: #2196F3;
                border-radius: 12px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                color: white;
            }
            
            .cta h3 {
                font-size: 13pt;
                font-weight: 700;
                margin-bottom: 4px;
            }
            
            .cta p {
                font-size: 9pt;
                opacity: 0.9;
            }
        </style>
    </head>
    <body>
        <!-- СТРАНИЦА 1: ТИТУЛ -->
        <div class="cover">
            <div class="cover-content">
                <div class="logo-box">
                    <div class="logo-work">Work</div>
                    <div class="logo-here">Here</div>
                </div>
                <h1>Коммерческое предложение</h1>
                <p class="subtitle">ATS/CRM-система нового поколения для эффективного подбора персонала</p>
            </div>
            <div class="cover-badge">Автоматизация • Аналитика • Интеграции</div>
        </div>
        
        <!-- СТРАНИЦА 2: ВЕСЬ КОНТЕНТ -->
        <div class="page">
            <div class="page-header">
                <div class="mini-logo"><span class="work">Work</span><span class="here">Here</span></div>
            </div>
            
            <p class="intro-text">
                <strong>WorkHere</strong> — единое пространство для ведения вакансий, кандидатов и коммуникаций. 
                Ускоряет закрытие вакансий за счёт автоматизации, единой базы и аналитики воронки.
            </p>
            
            <div class="section-title">
                <div class="icon">👥</div>
                Для кого
            </div>
            
            <div class="audience-grid">
                <div class="audience-card">
                    <h3>HR-директора</h3>
                    <p>Прозрачность воронки, контроль качества, аналитика</p>
                </div>
                <div class="audience-card">
                    <h3>Рекрутеры</h3>
                    <p>Быстрый поиск, единая база, автоматизация рутины</p>
                </div>
                <div class="audience-card">
                    <h3>HR-универсалы</h3>
                    <p>Интеграции с 1С, передача данных о сотрудниках</p>
                </div>
            </div>
            
            <div class="section-title">
                <div class="icon">🎯</div>
                Проблемы → Решения
            </div>
            
            <table class="problems-table">
                <tr>
                    <th style="width: 50%">Проблема</th>
                    <th>Решение</th>
                </tr>
                <tr>
                    <td class="problem-cell">Кандидаты в почте, таблицах, мессенджерах</td>
                    <td class="solution-cell">Единая база с полной историей</td>
                </tr>
                <tr>
                    <td class="problem-cell">Нет контроля этапов и конверсии</td>
                    <td class="solution-cell">Воронка с аналитикой</td>
                </tr>
                <tr>
                    <td class="problem-cell">Много ручной рутины</td>
                    <td class="solution-cell">Автоматизация и напоминания</td>
                </tr>
                <tr>
                    <td class="problem-cell">Дубли кандидатов</td>
                    <td class="solution-cell">Автодедупликация</td>
                </tr>
                <tr>
                    <td class="problem-cell">Долгий поиск кандидатов</td>
                    <td class="solution-cell">ИИ-поиск по базе и job-сайтам</td>
                </tr>
            </table>
            
            <div class="section-title">
                <div class="icon">⚡</div>
                Функционал
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <h4><span class="dot"></span>Подбор</h4>
                    <ul>
                        <li>Воронка/канбан</li>
                        <li>Карточка кандидата</li>
                        <li>Напоминания</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4><span class="dot"></span>Прозрачность</h4>
                    <ul>
                        <li>История действий</li>
                        <li>Согласования</li>
                        <li>Командная работа</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4><span class="dot"></span>Аналитика</h4>
                    <ul>
                        <li>Конверсия этапов</li>
                        <li>Скорость закрытия</li>
                        <li>Источники</li>
                    </ul>
                </div>
                <div class="feature-card">
                    <h4><span class="dot"></span>Дедупликация</h4>
                    <ul>
                        <li>Поиск дублей</li>
                        <li>Объединение</li>
                        <li>Чистая база</li>
                    </ul>
                </div>
            </div>
            
            <div class="section-title">
                <div class="icon">🔗</div>
                Интеграции
            </div>
            
            <div class="integrations">
                <div class="integration-tag">Джоб-сайты <span>— автоимпорт</span></div>
                <div class="integration-tag">Мессенджеры <span>— история</span></div>
                <div class="integration-tag">1С <span>— обмен</span></div>
                <div class="integration-tag">API <span>— любые системы</span></div>
            </div>
            
            <div class="ai-block">
                <div class="ai-block-content">
                    <h3>🧠 ИИ-поиск кандидатов</h3>
                    <ul>
                        <li>Поиск по базе по смыслу, не по словам</li>
                        <li>Поиск на работных сайтах</li>
                        <li>Умное ранжирование</li>
                    </ul>
                </div>
            </div>
            
            <div class="bottom-section">
                <div class="pricing">
                    <h3>Базовая лицензия</h3>
                    <div class="price">20 000 <span>₽</span></div>
                    <div class="period">в год</div>
                </div>
                
                <div class="cta">
                    <h3>Готовы ускорить подбор?</h3>
                    <p>Свяжитесь для демонстрации</p>
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
