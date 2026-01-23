#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
ORGANIC FLUID STYLE - сложные формы, blobs, волны
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
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                color: #1a1a2e;
                font-size: 10pt;
                line-height: 1.5;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 1: ORGANIC COVER */
            /* ============================================= */
            .cover {
                height: 297mm;
                background: linear-gradient(180deg, #e3f2fd 0%, #bbdefb 50%, #e3f2fd 100%);
                position: relative;
                overflow: hidden;
                page-break-after: always;
            }
            
            /* Большой blob сверху справа */
            .blob-1 {
                position: absolute;
                top: -150px;
                right: -100px;
                width: 500px;
                height: 500px;
                background: linear-gradient(135deg, #2196F3 0%, #1976D2 50%, #0d47a1 100%);
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            
            /* Blob поменьше */
            .blob-2 {
                position: absolute;
                top: 100px;
                right: 50px;
                width: 200px;
                height: 200px;
                background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
                opacity: 0.7;
            }
            
            /* Blob снизу слева */
            .blob-3 {
                position: absolute;
                bottom: -100px;
                left: -150px;
                width: 450px;
                height: 450px;
                background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
                border-radius: 70% 30% 50% 50% / 50% 50% 30% 70%;
            }
            
            /* Маленькие декоративные круги */
            .circle-1 {
                position: absolute;
                top: 200px;
                left: 80px;
                width: 60px;
                height: 60px;
                background: rgba(33, 150, 243, 0.3);
                border-radius: 50%;
            }
            
            .circle-2 {
                position: absolute;
                top: 350px;
                left: 150px;
                width: 30px;
                height: 30px;
                background: rgba(33, 150, 243, 0.5);
                border-radius: 50%;
            }
            
            .circle-3 {
                position: absolute;
                bottom: 200px;
                right: 200px;
                width: 80px;
                height: 80px;
                border: 3px solid rgba(255, 255, 255, 0.5);
                border-radius: 50%;
            }
            
            .circle-4 {
                position: absolute;
                top: 450px;
                right: 350px;
                width: 120px;
                height: 120px;
                border: 2px solid rgba(33, 150, 243, 0.3);
                border-radius: 50%;
            }
            
            /* Волнистая линия */
            .wave-line {
                position: absolute;
                bottom: 300px;
                left: 0;
                right: 0;
                height: 100px;
                background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 100'%3E%3Cpath d='M0,50 Q150,0 300,50 T600,50 T900,50 T1200,50' fill='none' stroke='rgba(33,150,243,0.2)' stroke-width='2'/%3E%3C/svg%3E");
                background-size: 100% 100%;
            }
            
            /* Логотип */
            .cover-logo {
                position: absolute;
                top: 80px;
                left: 60px;
                z-index: 10;
            }
            
            .cover-logo-container {
                display: inline-flex;
                background: white;
                border-radius: 20px;
                padding: 15px 25px;
                box-shadow: 0 20px 60px rgba(33, 150, 243, 0.3);
            }
            
            .cover-logo-work {
                background: linear-gradient(135deg, #2196F3, #1976D2);
                color: white;
                font-size: 32pt;
                font-weight: 700;
                padding: 10px 18px;
                border-radius: 12px;
            }
            
            .cover-logo-here {
                color: #1a1a2e;
                font-size: 32pt;
                font-weight: 700;
                padding: 10px 18px;
            }
            
            /* Главный контент */
            .cover-content {
                position: absolute;
                top: 280px;
                left: 60px;
                max-width: 420px;
                z-index: 10;
            }
            
            .cover-badge {
                display: inline-block;
                background: white;
                color: #2196F3;
                font-size: 9pt;
                font-weight: 600;
                padding: 8px 20px;
                border-radius: 50px;
                margin-bottom: 25px;
                box-shadow: 0 5px 20px rgba(33, 150, 243, 0.2);
            }
            
            .cover-title {
                font-size: 38pt;
                font-weight: 700;
                color: #1a1a2e;
                line-height: 1.1;
                margin-bottom: 25px;
            }
            
            .cover-title span {
                color: #2196F3;
            }
            
            .cover-desc {
                font-size: 13pt;
                color: #4a5568;
                line-height: 1.7;
                margin-bottom: 40px;
            }
            
            /* Карточки-фичи */
            .cover-features {
                display: flex;
                gap: 15px;
            }
            
            .cover-feature {
                background: white;
                border-radius: 16px;
                padding: 20px;
                width: 120px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(33, 150, 243, 0.15);
            }
            
            .cover-feature-icon {
                font-size: 28pt;
                margin-bottom: 10px;
            }
            
            .cover-feature-text {
                font-size: 9pt;
                font-weight: 600;
                color: #1a1a2e;
            }
            
            /* Нижний текст на blob */
            .cover-bottom-text {
                position: absolute;
                bottom: 80px;
                left: 100px;
                color: white;
                z-index: 10;
            }
            
            .cover-bottom-text h3 {
                font-size: 14pt;
                font-weight: 300;
                opacity: 0.9;
                margin-bottom: 5px;
            }
            
            .cover-bottom-text p {
                font-size: 10pt;
                opacity: 0.7;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 2: ORGANIC CONTENT */
            /* ============================================= */
            .page {
                height: 297mm;
                background: #fafcff;
                position: relative;
                overflow: hidden;
            }
            
            /* Декоративные blobs на странице */
            .page-blob-1 {
                position: absolute;
                top: -80px;
                right: -80px;
                width: 250px;
                height: 250px;
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(25, 118, 210, 0.05));
                border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            }
            
            .page-blob-2 {
                position: absolute;
                bottom: -100px;
                left: -100px;
                width: 300px;
                height: 300px;
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.08), rgba(25, 118, 210, 0.03));
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            }
            
            /* Волнистый header */
            .page-header {
                background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
                padding: 25px 40px 60px;
                position: relative;
            }
            
            .page-header::after {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 0;
                right: 0;
                height: 50px;
                background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 50'%3E%3Cpath d='M0,0 L0,30 Q300,50 600,30 T1200,30 L1200,0 Z' fill='%23fafcff'/%3E%3C/svg%3E");
                background-size: 100% 100%;
            }
            
            .page-header-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .page-logo {
                display: flex;
                align-items: center;
            }
            
            .page-logo-work {
                background: white;
                color: #2196F3;
                font-size: 14pt;
                font-weight: 700;
                padding: 6px 12px;
                border-radius: 8px;
            }
            
            .page-logo-here {
                color: white;
                font-size: 14pt;
                font-weight: 700;
                padding: 6px 10px;
            }
            
            .page-title {
                color: white;
                font-size: 11pt;
                font-weight: 500;
            }
            
            /* Контент */
            .content {
                padding: 20px 40px 30px;
                position: relative;
                z-index: 10;
            }
            
            /* Intro с волнистой рамкой */
            .intro-wave {
                background: white;
                border-radius: 24px;
                padding: 25px 30px;
                margin-bottom: 20px;
                box-shadow: 0 10px 40px rgba(33, 150, 243, 0.1);
                position: relative;
                border: 2px solid rgba(33, 150, 243, 0.1);
            }
            
            .intro-wave::before {
                content: '';
                position: absolute;
                top: -3px;
                left: 30px;
                right: 30px;
                height: 6px;
                background: linear-gradient(90deg, #2196F3, #64b5f6, #2196F3);
                border-radius: 3px;
            }
            
            .intro-wave p {
                font-size: 11pt;
                color: #333;
                line-height: 1.7;
            }
            
            .intro-wave strong {
                color: #2196F3;
            }
            
            /* Секции с blob-иконками */
            .section-blob {
                margin-bottom: 18px;
            }
            
            .section-blob-header {
                display: flex;
                align-items: center;
                gap: 15px;
                margin-bottom: 12px;
            }
            
            .section-blob-icon {
                width: 45px;
                height: 45px;
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 18pt;
                flex-shrink: 0;
            }
            
            .section-blob-title {
                font-size: 14pt;
                font-weight: 700;
                color: #1a1a2e;
            }
            
            /* Карточки аудитории - organic */
            .audience-organic {
                display: flex;
                gap: 12px;
                margin-bottom: 18px;
            }
            
            .audience-card-organic {
                flex: 1;
                background: white;
                border-radius: 20px;
                padding: 18px;
                box-shadow: 0 5px 25px rgba(33, 150, 243, 0.08);
                position: relative;
                overflow: hidden;
            }
            
            .audience-card-organic::before {
                content: '';
                position: absolute;
                top: -20px;
                right: -20px;
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), transparent);
                border-radius: 50%;
            }
            
            .audience-card-organic h4 {
                font-size: 11pt;
                font-weight: 700;
                color: #2196F3;
                margin-bottom: 6px;
            }
            
            .audience-card-organic p {
                font-size: 9pt;
                color: #64748b;
                line-height: 1.5;
            }
            
            /* Проблемы → Решения с волнами */
            .problems-organic {
                background: white;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 5px 25px rgba(33, 150, 243, 0.08);
                margin-bottom: 18px;
            }
            
            .problems-organic-header {
                background: linear-gradient(90deg, #2196F3, #42a5f5);
                padding: 12px 20px;
                display: flex;
                gap: 20px;
            }
            
            .problems-organic-header span {
                color: white;
                font-size: 9pt;
                font-weight: 600;
                flex: 1;
            }
            
            .problems-organic-row {
                display: flex;
                border-bottom: 1px solid #f0f4f8;
            }
            
            .problems-organic-row:last-child {
                border-bottom: none;
            }
            
            .problems-organic-cell {
                flex: 1;
                padding: 10px 20px;
                font-size: 9pt;
            }
            
            .problems-organic-cell.problem {
                color: #64748b;
            }
            
            .problems-organic-cell.solution {
                color: #2196F3;
                font-weight: 600;
                position: relative;
                padding-left: 35px;
            }
            
            .problems-organic-cell.solution::before {
                content: '✓';
                position: absolute;
                left: 20px;
                color: #2196F3;
            }
            
            /* Функционал - blob-карточки */
            .features-organic {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 18px;
            }
            
            .feature-organic {
                width: calc(25% - 8px);
                background: white;
                border-radius: 16px;
                padding: 15px;
                box-shadow: 0 5px 20px rgba(33, 150, 243, 0.06);
                position: relative;
            }
            
            .feature-organic::before {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 10px;
                right: 10px;
                height: 10px;
                background: linear-gradient(90deg, rgba(33, 150, 243, 0.1), rgba(33, 150, 243, 0.05));
                border-radius: 0 0 16px 16px;
                filter: blur(5px);
            }
            
            .feature-organic h5 {
                font-size: 9pt;
                font-weight: 700;
                color: #2196F3;
                margin-bottom: 8px;
            }
            
            .feature-organic ul {
                list-style: none;
            }
            
            .feature-organic li {
                font-size: 8pt;
                color: #64748b;
                padding: 2px 0;
            }
            
            .feature-organic li::before {
                content: '◦ ';
                color: #2196F3;
            }
            
            /* ИИ блок - градиентный blob */
            .ai-organic {
                background: linear-gradient(135deg, #2196F3 0%, #1976D2 50%, #1565C0 100%);
                border-radius: 24px;
                padding: 22px 28px;
                margin-bottom: 18px;
                display: flex;
                align-items: center;
                gap: 20px;
                position: relative;
                overflow: hidden;
            }
            
            .ai-organic::before {
                content: '';
                position: absolute;
                top: -50px;
                right: -50px;
                width: 200px;
                height: 200px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
            }
            
            .ai-organic::after {
                content: '';
                position: absolute;
                bottom: -30px;
                left: 100px;
                width: 100px;
                height: 100px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 50%;
            }
            
            .ai-organic-icon {
                width: 55px;
                height: 55px;
                background: white;
                border-radius: 50% 50% 50% 30%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24pt;
                flex-shrink: 0;
                position: relative;
                z-index: 1;
            }
            
            .ai-organic-content {
                position: relative;
                z-index: 1;
            }
            
            .ai-organic-content h3 {
                color: white;
                font-size: 13pt;
                font-weight: 700;
                margin-bottom: 5px;
            }
            
            .ai-organic-content p {
                color: rgba(255, 255, 255, 0.9);
                font-size: 9pt;
                line-height: 1.5;
            }
            
            /* Интеграции - пилюли */
            .integrations-organic {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                margin-bottom: 18px;
            }
            
            .int-organic {
                background: white;
                border-radius: 50px;
                padding: 10px 20px;
                box-shadow: 0 3px 15px rgba(33, 150, 243, 0.08);
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .int-organic-dot {
                width: 10px;
                height: 10px;
                background: linear-gradient(135deg, #2196F3, #64b5f6);
                border-radius: 50%;
            }
            
            .int-organic strong {
                font-size: 9pt;
                color: #1a1a2e;
            }
            
            .int-organic span {
                font-size: 8pt;
                color: #94a3b8;
            }
            
            /* Цена - organic card */
            .price-organic {
                display: flex;
                gap: 15px;
            }
            
            .price-card-organic {
                flex: 1;
                background: white;
                border-radius: 24px;
                padding: 25px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(33, 150, 243, 0.12);
                position: relative;
                overflow: hidden;
            }
            
            .price-card-organic::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 5px;
                background: linear-gradient(90deg, #2196F3, #64b5f6, #2196F3);
            }
            
            .price-label-organic {
                font-size: 9pt;
                color: #94a3b8;
                margin-bottom: 8px;
            }
            
            .price-value-organic {
                font-size: 36pt;
                font-weight: 800;
                color: #2196F3;
                line-height: 1;
            }
            
            .price-currency-organic {
                font-size: 16pt;
                color: #1a1a2e;
            }
            
            .price-period-organic {
                font-size: 10pt;
                color: #94a3b8;
                margin-top: 5px;
            }
            
            .cta-card-organic {
                flex: 1;
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 24px;
                padding: 25px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .cta-card-organic::before {
                content: '';
                position: absolute;
                top: -30px;
                right: -30px;
                width: 100px;
                height: 100px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
            }
            
            .cta-card-organic h3 {
                color: white;
                font-size: 15pt;
                font-weight: 700;
                margin-bottom: 5px;
                position: relative;
            }
            
            .cta-card-organic p {
                color: rgba(255, 255, 255, 0.9);
                font-size: 10pt;
                position: relative;
            }
        </style>
    </head>
    <body>
        <!-- ===== СТРАНИЦА 1: ORGANIC COVER ===== -->
        <div class="cover">
            <!-- Blobs -->
            <div class="blob-1"></div>
            <div class="blob-2"></div>
            <div class="blob-3"></div>
            
            <!-- Circles -->
            <div class="circle-1"></div>
            <div class="circle-2"></div>
            <div class="circle-3"></div>
            <div class="circle-4"></div>
            
            <!-- Wave -->
            <div class="wave-line"></div>
            
            <!-- Logo -->
            <div class="cover-logo">
                <div class="cover-logo-container">
                    <span class="cover-logo-work">Work</span>
                    <span class="cover-logo-here">Here</span>
                </div>
            </div>
            
            <!-- Content -->
            <div class="cover-content">
                <div class="cover-badge">Коммерческое предложение</div>
                <h1 class="cover-title">ATS/CRM <span>нового поколения</span></h1>
                <p class="cover-desc">
                    Единое пространство для вакансий, кандидатов и коммуникаций. 
                    Автоматизация, аналитика и ИИ-поиск в одной системе.
                </p>
                <div class="cover-features">
                    <div class="cover-feature">
                        <div class="cover-feature-icon">⚡</div>
                        <div class="cover-feature-text">Быстрее в 5×</div>
                    </div>
                    <div class="cover-feature">
                        <div class="cover-feature-icon">🔗</div>
                        <div class="cover-feature-text">Интеграции</div>
                    </div>
                    <div class="cover-feature">
                        <div class="cover-feature-icon">🧠</div>
                        <div class="cover-feature-text">ИИ-поиск</div>
                    </div>
                </div>
            </div>
            
            <!-- Bottom text -->
            <div class="cover-bottom-text">
                <h3>Ускорьте подбор персонала</h3>
                <p>От 20 000 ₽ в год</p>
            </div>
        </div>
        
        <!-- ===== СТРАНИЦА 2: ORGANIC CONTENT ===== -->
        <div class="page">
            <!-- Decorative blobs -->
            <div class="page-blob-1"></div>
            <div class="page-blob-2"></div>
            
            <!-- Header with wave -->
            <div class="page-header">
                <div class="page-header-content">
                    <div class="page-logo">
                        <span class="page-logo-work">Work</span>
                        <span class="page-logo-here">Here</span>
                    </div>
                    <span class="page-title">Возможности системы</span>
                </div>
            </div>
            
            <div class="content">
                <!-- Intro -->
                <div class="intro-wave">
                    <p><strong>WorkHere</strong> — единое пространство для вакансий, кандидатов и коммуникаций. Ускоряет закрытие позиций за счёт автоматизации рутины, единой базы и аналитики воронки.</p>
                </div>
                
                <!-- Аудитория -->
                <div class="section-blob">
                    <div class="section-blob-header">
                        <div class="section-blob-icon">👥</div>
                        <div class="section-blob-title">Для кого</div>
                    </div>
                </div>
                
                <div class="audience-organic">
                    <div class="audience-card-organic">
                        <h4>HR-директора</h4>
                        <p>Прозрачность воронки, контроль качества, аналитика</p>
                    </div>
                    <div class="audience-card-organic">
                        <h4>Рекрутеры</h4>
                        <p>Быстрый поиск, единая база, автоматизация</p>
                    </div>
                    <div class="audience-card-organic">
                        <h4>HR-универсалы</h4>
                        <p>Интеграция с 1С, передача данных</p>
                    </div>
                </div>
                
                <!-- Проблемы -->
                <div class="problems-organic">
                    <div class="problems-organic-header">
                        <span>Проблема</span>
                        <span>Решение WorkHere</span>
                    </div>
                    <div class="problems-organic-row">
                        <div class="problems-organic-cell problem">Данные в почте и таблицах</div>
                        <div class="problems-organic-cell solution">Единая база кандидатов</div>
                    </div>
                    <div class="problems-organic-row">
                        <div class="problems-organic-cell problem">Нет контроля этапов</div>
                        <div class="problems-organic-cell solution">Воронка с аналитикой</div>
                    </div>
                    <div class="problems-organic-row">
                        <div class="problems-organic-cell problem">Дубли кандидатов</div>
                        <div class="problems-organic-cell solution">Автодедупликация</div>
                    </div>
                </div>
                
                <!-- Функционал -->
                <div class="section-blob">
                    <div class="section-blob-header">
                        <div class="section-blob-icon">⚡</div>
                        <div class="section-blob-title">Функционал</div>
                    </div>
                </div>
                
                <div class="features-organic">
                    <div class="feature-organic">
                        <h5>Подбор</h5>
                        <ul><li>Воронка/канбан</li><li>Карточки</li><li>Напоминания</li></ul>
                    </div>
                    <div class="feature-organic">
                        <h5>Прозрачность</h5>
                        <ul><li>История</li><li>Согласования</li><li>Команда</li></ul>
                    </div>
                    <div class="feature-organic">
                        <h5>Аналитика</h5>
                        <ul><li>Конверсия</li><li>Скорость</li><li>Источники</li></ul>
                    </div>
                    <div class="feature-organic">
                        <h5>Качество</h5>
                        <ul><li>Дедупликация</li><li>Объединение</li><li>Чистота</li></ul>
                    </div>
                </div>
                
                <!-- ИИ -->
                <div class="ai-organic">
                    <div class="ai-organic-icon">🧠</div>
                    <div class="ai-organic-content">
                        <h3>ИИ-поиск кандидатов</h3>
                        <p>Интеллектуальный поиск по базе и работным сайтам. Находит по смыслу, а не только по ключевым словам.</p>
                    </div>
                </div>
                
                <!-- Интеграции -->
                <div class="integrations-organic">
                    <div class="int-organic"><div class="int-organic-dot"></div><strong>Джоб-сайты</strong><span>автоимпорт</span></div>
                    <div class="int-organic"><div class="int-organic-dot"></div><strong>Мессенджеры</strong><span>история</span></div>
                    <div class="int-organic"><div class="int-organic-dot"></div><strong>1С</strong><span>обмен</span></div>
                    <div class="int-organic"><div class="int-organic-dot"></div><strong>API</strong><span>любые системы</span></div>
                </div>
                
                <!-- Цена -->
                <div class="price-organic">
                    <div class="price-card-organic">
                        <div class="price-label-organic">Базовая лицензия</div>
                        <div class="price-value-organic">20 000 <span class="price-currency-organic">₽</span></div>
                        <div class="price-period-organic">в год</div>
                    </div>
                    <div class="cta-card-organic">
                        <h3>Начните сегодня</h3>
                        <p>Свяжитесь для демонстрации</p>
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
