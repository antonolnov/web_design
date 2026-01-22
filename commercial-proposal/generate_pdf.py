#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
Профессиональный визуальный дизайн
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
                font-size: 10pt;
                line-height: 1.5;
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
            
            /* ===== СТРАНИЦЫ КОНТЕНТА ===== */
            .page {
                padding: 45px 50px;
                min-height: 297mm;
                background: #f8fafc;
                position: relative;
            }
            
            .page::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 5px;
                background: #2196F3;
            }
            
            .section-title {
                font-size: 16pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 18px;
                display: flex;
                align-items: center;
                gap: 12px;
                page-break-after: avoid;
            }
            
            .section-title .icon {
                width: 34px;
                height: 34px;
                background: #2196F3;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 15pt;
            }
            
            .intro-text {
                font-size: 11pt;
                color: #4a5568;
                line-height: 1.7;
                margin-bottom: 28px;
                padding: 18px 22px;
                background: white;
                border-radius: 12px;
                border-left: 4px solid #2196F3;
                box-shadow: 0 2px 12px rgba(0,0,0,0.04);
                page-break-inside: avoid;
            }
            
            /* Карточки аудитории */
            .audience-grid {
                display: flex;
                gap: 14px;
                margin-bottom: 28px;
                page-break-inside: avoid;
            }
            
            .audience-card {
                flex: 1;
                background: white;
                border-radius: 14px;
                padding: 20px;
                box-shadow: 0 2px 12px rgba(0,0,0,0.04);
                border-top: 4px solid #2196F3;
                page-break-inside: avoid;
            }
            
            .audience-card:nth-child(2) { border-color: #1976D2; }
            .audience-card:nth-child(3) { border-color: #0d47a1; }
            
            .audience-card h3 {
                font-size: 11pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 8px;
            }
            
            .audience-card p {
                font-size: 9pt;
                color: #64748b;
                line-height: 1.5;
            }
            
            /* Таблица проблем */
            .problems-section {
                page-break-inside: avoid;
                margin-bottom: 28px;
            }
            
            .problems-table {
                width: 100%;
                background: white;
                border-radius: 14px;
                overflow: hidden;
                box-shadow: 0 2px 12px rgba(0,0,0,0.04);
            }
            
            .problems-table th {
                background: #1a1a2e;
                color: white;
                font-weight: 600;
                padding: 14px 18px;
                text-align: left;
                font-size: 10pt;
            }
            
            .problems-table td {
                padding: 12px 18px;
                border-bottom: 1px solid #f1f5f9;
                font-size: 9.5pt;
            }
            
            .problems-table tr:last-child td {
                border-bottom: none;
            }
            
            .problem-cell {
                color: #64748b;
            }
            
            .solution-cell {
                color: #1a1a2e;
                font-weight: 500;
            }
            
            .solution-cell::before {
                content: '✓';
                color: #2196F3;
                font-weight: bold;
                margin-right: 8px;
            }
            
            /* Функционал - карточки */
            .features-section {
                page-break-inside: avoid;
                margin-bottom: 28px;
            }
            
            .features-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 14px;
            }
            
            .feature-card {
                width: calc(50% - 7px);
                background: white;
                border-radius: 14px;
                padding: 20px;
                box-shadow: 0 2px 12px rgba(0,0,0,0.04);
                page-break-inside: avoid;
            }
            
            .feature-card h4 {
                font-size: 10pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .feature-card h4 .dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #2196F3;
            }
            
            .feature-card ul {
                list-style: none;
                padding: 0;
            }
            
            .feature-card li {
                font-size: 9pt;
                color: #4a5568;
                padding: 3px 0;
                padding-left: 14px;
                position: relative;
            }
            
            .feature-card li::before {
                content: '→';
                position: absolute;
                left: 0;
                color: #2196F3;
            }
            
            /* Интеграции */
            .integrations-section {
                page-break-inside: avoid;
                margin-bottom: 28px;
            }
            
            .integrations {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
            }
            
            .integration-tag {
                background: white;
                border-radius: 50px;
                padding: 10px 18px;
                font-size: 9pt;
                font-weight: 600;
                color: #1a1a2e;
                box-shadow: 0 2px 12px rgba(0,0,0,0.04);
                border: 2px solid #e2e8f0;
            }
            
            .integration-tag span {
                color: #64748b;
                font-weight: 400;
            }
            
            /* AI блок */
            .ai-block {
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 16px;
                padding: 26px;
                color: white;
                margin-bottom: 28px;
                position: relative;
                overflow: hidden;
                page-break-inside: avoid;
            }
            
            .ai-block::before {
                content: '🔍';
                position: absolute;
                right: 24px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 50pt;
                opacity: 0.2;
            }
            
            .ai-block h3 {
                font-size: 13pt;
                font-weight: 700;
                margin-bottom: 10px;
            }
            
            .ai-block p {
                font-size: 10pt;
                opacity: 0.95;
                max-width: 85%;
                line-height: 1.6;
            }
            
            .ai-block ul {
                list-style: none;
                padding: 0;
                margin-top: 12px;
            }
            
            .ai-block li {
                font-size: 9.5pt;
                padding: 4px 0;
                padding-left: 20px;
                position: relative;
                opacity: 0.95;
            }
            
            .ai-block li::before {
                content: '✓';
                position: absolute;
                left: 0;
                font-weight: bold;
            }
            
            /* Цена */
            .pricing-section {
                page-break-inside: avoid;
            }
            
            .pricing {
                background: white;
                border-radius: 16px;
                padding: 28px;
                text-align: center;
                box-shadow: 0 4px 24px rgba(33, 150, 243, 0.15);
                border: 2px solid #2196F3;
                margin-bottom: 24px;
            }
            
            .pricing h3 {
                font-size: 11pt;
                color: #64748b;
                font-weight: 500;
                margin-bottom: 6px;
            }
            
            .pricing .price {
                font-size: 34pt;
                font-weight: 800;
                color: #1a1a2e;
            }
            
            .pricing .price span {
                font-size: 14pt;
                font-weight: 400;
                color: #64748b;
            }
            
            .pricing .period {
                font-size: 11pt;
                color: #64748b;
            }
            
            /* CTA */
            .cta {
                background: #2196F3;
                border-radius: 14px;
                padding: 26px;
                text-align: center;
                color: white;
            }
            
            .cta h3 {
                font-size: 15pt;
                font-weight: 700;
                margin-bottom: 6px;
            }
            
            .cta p {
                font-size: 11pt;
                opacity: 0.9;
            }
            
            /* Мини-лого в контенте */
            .page-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 28px;
                padding-bottom: 18px;
                border-bottom: 1px solid #e2e8f0;
            }
            
            .mini-logo {
                display: flex;
                align-items: center;
                font-weight: 700;
                font-size: 14pt;
            }
            
            .mini-logo .work {
                background: #2196F3;
                color: white;
                padding: 4px 8px;
                border-radius: 4px;
            }
            
            .mini-logo .here {
                color: #1a1a2e;
                padding: 4px 8px;
            }
            
            .page-number {
                font-size: 9pt;
                color: #94a3b8;
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
        
        <!-- СТРАНИЦА 2: ПРОБЛЕМЫ И АУДИТОРИЯ -->
        <div class="page">
            <div class="page-header">
                <div class="mini-logo"><span class="work">Work</span><span class="here">Here</span></div>
                <div class="page-number">02</div>
            </div>
            
            <p class="intro-text">
                <strong>WorkHere</strong> — единое пространство для ведения вакансий, кандидатов и коммуникаций. 
                Система ускоряет закрытие вакансий за счёт автоматизации рутины, единой базы кандидатов и прозрачной аналитики воронки найма.
            </p>
            
            <div class="section-title">
                <div class="icon">👥</div>
                Для кого создан WorkHere
            </div>
            
            <div class="audience-grid">
                <div class="audience-card">
                    <h3>HR-директора</h3>
                    <p>Полная прозрачность воронки, контроль качества работы команды, детальная аналитика и отчётность</p>
                </div>
                <div class="audience-card">
                    <h3>Рекрутеры</h3>
                    <p>Быстрый поиск по базе, единое хранилище кандидатов, автоматизация рутинных задач</p>
                </div>
                <div class="audience-card">
                    <h3>HR-универсалы</h3>
                    <p>Интеграции с 1С и внешними системами, передача данных о новых сотрудниках</p>
                </div>
            </div>
            
            <div class="problems-section">
                <div class="section-title">
                    <div class="icon">🎯</div>
                    Какие проблемы решаем
                </div>
                
                <table class="problems-table">
                    <tr>
                        <th style="width: 45%">Проблема</th>
                        <th>Решение WorkHere</th>
                    </tr>
                    <tr>
                        <td class="problem-cell">Кандидаты в почте, таблицах, мессенджерах — теряются</td>
                        <td class="solution-cell">Единая база с полной историей</td>
                    </tr>
                    <tr>
                        <td class="problem-cell">Нет контроля этапов и конверсии</td>
                        <td class="solution-cell">Воронка с аналитикой каждого шага</td>
                    </tr>
                    <tr>
                        <td class="problem-cell">Много ручной рутины</td>
                        <td class="solution-cell">Автоматизация и напоминания</td>
                    </tr>
                    <tr>
                        <td class="problem-cell">Дубли кандидатов в разных источниках</td>
                        <td class="solution-cell">Автодедупликация и объединение</td>
                    </tr>
                    <tr>
                        <td class="problem-cell">Долгий поиск подходящих кандидатов</td>
                        <td class="solution-cell">ИИ-поиск по базе и работным сайтам</td>
                    </tr>
                    <tr>
                        <td class="problem-cell">Сложно интегрировать с 1С</td>
                        <td class="solution-cell">Готовые интеграции и открытый API</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <!-- СТРАНИЦА 3: ФУНКЦИОНАЛ И ЦЕНА -->
        <div class="page">
            <div class="page-header">
                <div class="mini-logo"><span class="work">Work</span><span class="here">Here</span></div>
                <div class="page-number">03</div>
            </div>
            
            <div class="features-section">
                <div class="section-title">
                    <div class="icon">⚡</div>
                    Ключевой функционал
                </div>
                
                <div class="features-grid">
                    <div class="feature-card">
                        <h4><span class="dot"></span>Управление подбором</h4>
                        <ul>
                            <li>Воронка/канбан с гибкими стадиями</li>
                            <li>Карточка кандидата с историей</li>
                            <li>Задачи и напоминания</li>
                        </ul>
                    </div>
                    <div class="feature-card">
                        <h4><span class="dot"></span>Прозрачность</h4>
                        <ul>
                            <li>История всех действий</li>
                            <li>Согласования с менеджерами</li>
                            <li>Командная работа</li>
                        </ul>
                    </div>
                    <div class="feature-card">
                        <h4><span class="dot"></span>Аналитика</h4>
                        <ul>
                            <li>Конверсия этапов</li>
                            <li>Скорость закрытия</li>
                            <li>Эффективность источников</li>
                        </ul>
                    </div>
                    <div class="feature-card">
                        <h4><span class="dot"></span>Дедупликация</h4>
                        <ul>
                            <li>Поиск дублей по телефону/email</li>
                            <li>Объединение карточек</li>
                            <li>Чистая база данных</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="integrations-section">
                <div class="section-title">
                    <div class="icon">🔗</div>
                    Интеграции
                </div>
                
                <div class="integrations">
                    <div class="integration-tag">Джоб-сайты <span>— автоимпорт</span></div>
                    <div class="integration-tag">Мессенджеры <span>— история чатов</span></div>
                    <div class="integration-tag">1С <span>— обмен данными</span></div>
                    <div class="integration-tag">API <span>— любые системы</span></div>
                </div>
            </div>
            
            <div class="ai-block">
                <h3>🧠 ИИ-поиск кандидатов</h3>
                <p>Интеллектуальный модуль поиска, который экономит часы работы рекрутера:</p>
                <ul>
                    <li>Поиск по собственной базе кандидатов по смыслу, а не только по ключевым словам</li>
                    <li>Поиск на работных сайтах — находит релевантных кандидатов по открытым резюме</li>
                    <li>Умное ранжирование результатов — лучшие кандидаты в топе выдачи</li>
                </ul>
            </div>
            
            <div class="pricing-section">
                <div class="pricing">
                    <h3>Базовая лицензия</h3>
                    <div class="price">20 000 <span>₽</span></div>
                    <div class="period">в год</div>
                </div>
                
                <div class="cta">
                    <h3>Готовы ускорить подбор?</h3>
                    <p>Свяжитесь с нами для демонстрации системы</p>
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
