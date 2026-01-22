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
                background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
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
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
            }
            
            .cover-content {
                position: relative;
                z-index: 1;
            }
            
            .logo-box {
                display: inline-flex;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 25px 80px rgba(0,0,0,0.3);
                margin-bottom: 40px;
            }
            
            .logo-work {
                background: #2196F3;
                color: white;
                font-size: 42pt;
                font-weight: 700;
                padding: 20px 24px;
            }
            
            .logo-here {
                background: #1a1a2e;
                color: white;
                font-size: 42pt;
                font-weight: 700;
                padding: 20px 24px;
            }
            
            .cover h1 {
                color: white;
                font-size: 28pt;
                font-weight: 300;
                letter-spacing: 2px;
                margin-bottom: 16px;
                text-shadow: 0 4px 20px rgba(0,0,0,0.2);
            }
            
            .cover .subtitle {
                color: rgba(255,255,255,0.9);
                font-size: 14pt;
                font-weight: 400;
                max-width: 500px;
            }
            
            .cover-badge {
                position: absolute;
                bottom: 60px;
                background: rgba(255,255,255,0.15);
                backdrop-filter: blur(10px);
                padding: 16px 32px;
                border-radius: 50px;
                color: white;
                font-size: 11pt;
            }
            
            /* ===== СТРАНИЦА 2-3: КОНТЕНТ ===== */
            .page {
                padding: 50px 55px;
                min-height: 297mm;
                background: #fafbfc;
                position: relative;
            }
            
            .page::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 6px;
                background: linear-gradient(90deg, #2196F3, #667eea, #764ba2);
            }
            
            .section-title {
                font-size: 18pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .section-title .icon {
                width: 36px;
                height: 36px;
                background: linear-gradient(135deg, #2196F3, #667eea);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16pt;
            }
            
            .intro-text {
                font-size: 12pt;
                color: #4a5568;
                line-height: 1.7;
                margin-bottom: 30px;
                padding: 20px 24px;
                background: white;
                border-radius: 12px;
                border-left: 4px solid #2196F3;
                box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            }
            
            /* Карточки аудитории */
            .audience-grid {
                display: flex;
                gap: 16px;
                margin-bottom: 30px;
            }
            
            .audience-card {
                flex: 1;
                background: white;
                border-radius: 16px;
                padding: 24px;
                box-shadow: 0 4px 24px rgba(0,0,0,0.06);
                border-top: 4px solid;
            }
            
            .audience-card:nth-child(1) { border-color: #2196F3; }
            .audience-card:nth-child(2) { border-color: #667eea; }
            .audience-card:nth-child(3) { border-color: #764ba2; }
            
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
            .problems-table {
                width: 100%;
                background: white;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 4px 24px rgba(0,0,0,0.06);
                margin-bottom: 30px;
            }
            
            .problems-table th {
                background: linear-gradient(135deg, #1a1a2e, #2d3748);
                color: white;
                font-weight: 600;
                padding: 16px 20px;
                text-align: left;
                font-size: 10pt;
            }
            
            .problems-table td {
                padding: 14px 20px;
                border-bottom: 1px solid #f1f5f9;
                font-size: 9.5pt;
            }
            
            .problems-table tr:last-child td {
                border-bottom: none;
            }
            
            .problems-table tr:hover td {
                background: #f8fafc;
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
                color: #10b981;
                font-weight: bold;
                margin-right: 8px;
            }
            
            /* Функционал - карточки */
            .features-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                margin-bottom: 30px;
            }
            
            .feature-card {
                width: calc(50% - 8px);
                background: white;
                border-radius: 16px;
                padding: 24px;
                box-shadow: 0 4px 24px rgba(0,0,0,0.06);
            }
            
            .feature-card h4 {
                font-size: 11pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .feature-card h4 .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: linear-gradient(135deg, #2196F3, #667eea);
            }
            
            .feature-card ul {
                list-style: none;
                padding: 0;
            }
            
            .feature-card li {
                font-size: 9pt;
                color: #4a5568;
                padding: 4px 0;
                padding-left: 16px;
                position: relative;
            }
            
            .feature-card li::before {
                content: '→';
                position: absolute;
                left: 0;
                color: #2196F3;
            }
            
            /* Интеграции */
            .integrations {
                display: flex;
                gap: 12px;
                margin-bottom: 30px;
            }
            
            .integration-tag {
                background: white;
                border-radius: 50px;
                padding: 12px 20px;
                font-size: 9pt;
                font-weight: 600;
                color: #1a1a2e;
                box-shadow: 0 4px 16px rgba(0,0,0,0.06);
                border: 2px solid #e2e8f0;
            }
            
            .integration-tag span {
                color: #64748b;
                font-weight: 400;
            }
            
            /* AI блок */
            .ai-block {
                background: linear-gradient(135deg, #1a1a2e, #2d3748);
                border-radius: 20px;
                padding: 30px;
                color: white;
                margin-bottom: 30px;
                position: relative;
                overflow: hidden;
            }
            
            .ai-block::before {
                content: '🤖';
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 60pt;
                opacity: 0.1;
            }
            
            .ai-block h3 {
                font-size: 14pt;
                font-weight: 700;
                margin-bottom: 10px;
            }
            
            .ai-block p {
                font-size: 10pt;
                opacity: 0.9;
                max-width: 80%;
                line-height: 1.6;
            }
            
            /* Цена */
            .pricing {
                background: white;
                border-radius: 20px;
                padding: 30px;
                text-align: center;
                box-shadow: 0 8px 40px rgba(0,0,0,0.08);
                border: 2px solid #2196F3;
                margin-bottom: 30px;
            }
            
            .pricing h3 {
                font-size: 12pt;
                color: #64748b;
                font-weight: 500;
                margin-bottom: 8px;
            }
            
            .pricing .price {
                font-size: 36pt;
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
                background: linear-gradient(135deg, #2196F3, #667eea);
                border-radius: 16px;
                padding: 30px;
                text-align: center;
                color: white;
            }
            
            .cta h3 {
                font-size: 16pt;
                font-weight: 700;
                margin-bottom: 8px;
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
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e2e8f0;
            }
            
            .mini-logo {
                display: flex;
                font-weight: 700;
                font-size: 14pt;
            }
            
            .mini-logo .work { color: #2196F3; }
            .mini-logo .here { color: #1a1a2e; }
            
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
                <h1>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</h1>
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
                    <td class="solution-cell">ИИ-поиск по смыслу, не только по словам</td>
                </tr>
                <tr>
                    <td class="problem-cell">Сложно интегрировать с 1С</td>
                    <td class="solution-cell">Готовые интеграции и открытый API</td>
                </tr>
            </table>
        </div>
        
        <!-- СТРАНИЦА 3: ФУНКЦИОНАЛ И ЦЕНА -->
        <div class="page">
            <div class="page-header">
                <div class="mini-logo"><span class="work">Work</span><span class="here">Here</span></div>
                <div class="page-number">03</div>
            </div>
            
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
            
            <div class="ai-block">
                <h3>🧠 ИИ-поиск кандидатов</h3>
                <p>Интеллектуальный поиск по базе: находит релевантных кандидатов по смыслу, ранжирует результаты и экономит время при повторном закрытии вакансий.</p>
            </div>
            
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
    </body>
    </html>
    '''
    
    HTML(string=html_content).write_pdf(pdf_file)
    print(f"✓ PDF создан: {pdf_file}")
    return pdf_file


if __name__ == "__main__":
    generate_pdf()
