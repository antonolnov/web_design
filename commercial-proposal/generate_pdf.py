#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
INSANE DESIGN EDITION
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
            
            /* ============================================= */
            /* СТРАНИЦА 1: БЕЗУМНЫЙ ТИТУЛ */
            /* ============================================= */
            .cover {
                height: 297mm;
                background: #0a0a1a;
                position: relative;
                overflow: hidden;
                page-break-after: always;
            }
            
            /* Гигантские диагональные полосы */
            .cover-stripe {
                position: absolute;
                width: 400%;
                height: 120px;
                transform: rotate(-35deg);
                transform-origin: center;
            }
            
            .cover-stripe-1 {
                top: -50px;
                left: -100%;
                background: linear-gradient(90deg, #2196F3 0%, #00bcd4 50%, #2196F3 100%);
                opacity: 0.9;
            }
            
            .cover-stripe-2 {
                top: 100px;
                left: -120%;
                background: linear-gradient(90deg, #1976D2 0%, #0d47a1 50%, #1976D2 100%);
                opacity: 0.6;
            }
            
            .cover-stripe-3 {
                bottom: 150px;
                left: -80%;
                background: linear-gradient(90deg, #00bcd4 0%, #2196F3 50%, #00bcd4 100%);
                opacity: 0.4;
            }
            
            .cover-stripe-4 {
                bottom: -20px;
                left: -150%;
                background: linear-gradient(90deg, #2196F3 0%, #1976D2 100%);
                opacity: 0.7;
            }
            
            /* Декоративные круги */
            .cover-circle {
                position: absolute;
                border-radius: 50%;
                border: 3px solid rgba(33, 150, 243, 0.3);
            }
            
            .cover-circle-1 {
                width: 600px;
                height: 600px;
                top: -200px;
                right: -200px;
            }
            
            .cover-circle-2 {
                width: 400px;
                height: 400px;
                bottom: -100px;
                left: -100px;
                border-color: rgba(0, 188, 212, 0.3);
            }
            
            .cover-circle-3 {
                width: 200px;
                height: 200px;
                top: 40%;
                left: 15%;
                border-width: 2px;
                border-color: rgba(255, 255, 255, 0.1);
            }
            
            /* Точечная сетка */
            .cover-dots {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
                background-size: 30px 30px;
            }
            
            /* Главный контент обложки */
            .cover-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 10;
                text-align: center;
            }
            
            /* Огромный логотип */
            .mega-logo {
                display: inline-flex;
                margin-bottom: 60px;
                position: relative;
            }
            
            .mega-logo::before {
                content: '';
                position: absolute;
                inset: -20px -40px;
                background: rgba(33, 150, 243, 0.15);
                border-radius: 20px;
                transform: rotate(-2deg);
            }
            
            .mega-logo::after {
                content: '';
                position: absolute;
                inset: -10px -30px;
                background: rgba(0, 188, 212, 0.1);
                border-radius: 20px;
                transform: rotate(1deg);
            }
            
            .mega-logo-work {
                position: relative;
                z-index: 1;
                background: linear-gradient(135deg, #2196F3 0%, #00bcd4 100%);
                color: white;
                font-size: 72pt;
                font-weight: 800;
                padding: 20px 35px;
                border-radius: 16px;
                letter-spacing: -2px;
                box-shadow: 0 20px 60px rgba(33, 150, 243, 0.5);
            }
            
            .mega-logo-here {
                position: relative;
                z-index: 1;
                color: white;
                font-size: 72pt;
                font-weight: 800;
                padding: 20px 35px;
                letter-spacing: -2px;
            }
            
            .cover-title {
                color: white;
                font-size: 18pt;
                font-weight: 300;
                letter-spacing: 12px;
                text-transform: uppercase;
                margin-bottom: 30px;
                opacity: 0.9;
            }
            
            .cover-subtitle {
                color: rgba(255,255,255,0.7);
                font-size: 13pt;
                max-width: 400px;
                margin: 0 auto;
                line-height: 1.6;
            }
            
            /* Нижняя панель */
            .cover-bottom {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 30px 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
            }
            
            .cover-tag {
                background: rgba(255,255,255,0.1);
                border: 1px solid rgba(255,255,255,0.2);
                padding: 10px 24px;
                border-radius: 50px;
                color: white;
                font-size: 10pt;
                font-weight: 500;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 2: КОНТЕНТ С БЕЗУМНОЙ ВЕРСТКОЙ */
            /* ============================================= */
            .page {
                height: 297mm;
                background: #f0f4f8;
                position: relative;
                overflow: hidden;
            }
            
            /* Декоративный элемент сверху */
            .page-deco-top {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 180px;
                background: linear-gradient(135deg, #1a1a2e 0%, #2d3748 100%);
                clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
            }
            
            .page-deco-accent {
                position: absolute;
                top: 0;
                right: 0;
                width: 300px;
                height: 180px;
                background: linear-gradient(135deg, #2196F3 0%, #00bcd4 100%);
                clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 60%);
            }
            
            /* Мини-лого в углу */
            .floating-logo {
                position: absolute;
                top: 25px;
                left: 40px;
                z-index: 10;
                display: flex;
                align-items: center;
            }
            
            .floating-logo-work {
                background: linear-gradient(135deg, #2196F3, #00bcd4);
                color: white;
                font-size: 14pt;
                font-weight: 700;
                padding: 6px 12px;
                border-radius: 6px;
            }
            
            .floating-logo-here {
                color: white;
                font-size: 14pt;
                font-weight: 700;
                padding: 6px 10px;
            }
            
            /* Главный заголовок страницы */
            .page-headline {
                position: absolute;
                top: 55px;
                right: 50px;
                text-align: right;
                z-index: 10;
            }
            
            .page-headline h2 {
                color: white;
                font-size: 24pt;
                font-weight: 800;
                letter-spacing: -1px;
            }
            
            .page-headline p {
                color: rgba(255,255,255,0.8);
                font-size: 10pt;
                margin-top: 5px;
            }
            
            /* Основной контент */
            .content-area {
                position: absolute;
                top: 140px;
                left: 30px;
                right: 30px;
                bottom: 30px;
            }
            
            /* Карточки со скосами */
            .skew-card {
                background: white;
                border-radius: 16px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 10px 40px rgba(0,0,0,0.08);
                margin-bottom: 14px;
            }
            
            .skew-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 8px;
                height: 100%;
                background: linear-gradient(180deg, #2196F3, #00bcd4);
            }
            
            .skew-card-header {
                background: linear-gradient(90deg, rgba(33,150,243,0.08), transparent);
                padding: 14px 20px 14px 24px;
                border-bottom: 1px solid #e2e8f0;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .skew-card-icon {
                width: 36px;
                height: 36px;
                background: linear-gradient(135deg, #2196F3, #00bcd4);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16pt;
                flex-shrink: 0;
            }
            
            .skew-card-title {
                font-size: 13pt;
                font-weight: 700;
                color: #1a1a2e;
            }
            
            .skew-card-body {
                padding: 16px 20px 16px 24px;
            }
            
            /* Intro block - особый дизайн */
            .intro-block {
                background: linear-gradient(135deg, #1a1a2e 0%, #2d3748 100%);
                border-radius: 16px;
                padding: 20px 28px;
                margin-bottom: 14px;
                position: relative;
                overflow: hidden;
            }
            
            .intro-block::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -20%;
                width: 200px;
                height: 200px;
                background: linear-gradient(135deg, #2196F3, #00bcd4);
                border-radius: 50%;
                opacity: 0.3;
            }
            
            .intro-block p {
                color: white;
                font-size: 11pt;
                line-height: 1.6;
                position: relative;
                z-index: 1;
            }
            
            .intro-block strong {
                color: #4dd0e1;
            }
            
            /* Аудитория - горизонтальные карточки */
            .audience-row {
                display: flex;
                gap: 12px;
                margin-bottom: 14px;
            }
            
            .audience-item {
                flex: 1;
                background: white;
                border-radius: 14px;
                padding: 16px;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            }
            
            .audience-item::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #2196F3, #00bcd4);
            }
            
            .audience-item:nth-child(2)::before {
                background: linear-gradient(90deg, #00bcd4, #26c6da);
            }
            
            .audience-item:nth-child(3)::before {
                background: linear-gradient(90deg, #26c6da, #4dd0e1);
            }
            
            .audience-item h4 {
                font-size: 10pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 4px;
            }
            
            .audience-item p {
                font-size: 8pt;
                color: #64748b;
                line-height: 1.4;
            }
            
            /* Проблемы - креативный формат */
            .problems-flow {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
            
            .problem-item {
                background: #fef2f2;
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 8pt;
                color: #991b1b;
                position: relative;
            }
            
            .problem-item::after {
                content: '→';
                margin-left: 8px;
                color: #2196F3;
                font-weight: bold;
            }
            
            .solution-item {
                background: linear-gradient(135deg, #ecfdf5, #d1fae5);
                border-radius: 8px;
                padding: 8px 14px;
                font-size: 8pt;
                color: #065f46;
                font-weight: 600;
            }
            
            /* Функционал - геометрическая сетка */
            .features-hex {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .hex-item {
                width: calc(25% - 8px);
                background: white;
                border-radius: 12px;
                padding: 14px;
                position: relative;
                box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            }
            
            .hex-item::before {
                content: '';
                position: absolute;
                top: 12px;
                left: 12px;
                width: 24px;
                height: 24px;
                background: linear-gradient(135deg, #2196F3, #00bcd4);
                border-radius: 6px;
                opacity: 0.15;
            }
            
            .hex-item h5 {
                font-size: 9pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 6px;
                padding-left: 0;
            }
            
            .hex-item ul {
                list-style: none;
                padding: 0;
            }
            
            .hex-item li {
                font-size: 7.5pt;
                color: #4a5568;
                padding: 2px 0;
                padding-left: 12px;
                position: relative;
            }
            
            .hex-item li::before {
                content: '◆';
                position: absolute;
                left: 0;
                color: #00bcd4;
                font-size: 5pt;
                top: 3px;
            }
            
            /* ИИ блок - футуристичный */
            .ai-futuristic {
                background: linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 100%);
                border-radius: 16px;
                padding: 20px 24px;
                margin-bottom: 14px;
                position: relative;
                overflow: hidden;
            }
            
            .ai-futuristic::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    radial-gradient(circle at 20% 50%, rgba(33, 150, 243, 0.2), transparent 40%),
                    radial-gradient(circle at 80% 50%, rgba(0, 188, 212, 0.2), transparent 40%);
            }
            
            .ai-futuristic::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent, #2196F3, #00bcd4, transparent);
            }
            
            .ai-content {
                position: relative;
                z-index: 1;
                display: flex;
                align-items: center;
                gap: 20px;
            }
            
            .ai-icon-box {
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, #2196F3, #00bcd4);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24pt;
                flex-shrink: 0;
            }
            
            .ai-text h3 {
                color: white;
                font-size: 12pt;
                font-weight: 700;
                margin-bottom: 6px;
            }
            
            .ai-text p {
                color: rgba(255,255,255,0.8);
                font-size: 8.5pt;
                line-height: 1.5;
            }
            
            .ai-features {
                display: flex;
                gap: 16px;
                margin-left: auto;
            }
            
            .ai-feature {
                text-align: center;
            }
            
            .ai-feature-value {
                color: #4dd0e1;
                font-size: 14pt;
                font-weight: 800;
            }
            
            .ai-feature-label {
                color: rgba(255,255,255,0.6);
                font-size: 7pt;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            /* Интеграции - пилюли */
            .integrations-bar {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;
                margin-bottom: 14px;
            }
            
            .int-pill {
                background: white;
                border-radius: 50px;
                padding: 8px 18px;
                font-size: 8.5pt;
                font-weight: 600;
                color: #1a1a2e;
                box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                border: 1px solid #e2e8f0;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .int-pill::before {
                content: '';
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: linear-gradient(135deg, #2196F3, #00bcd4);
            }
            
            .int-pill span {
                color: #64748b;
                font-weight: 400;
            }
            
            /* Нижняя секция - цена + CTA */
            .bottom-duo {
                display: flex;
                gap: 16px;
            }
            
            .price-block {
                flex: 1;
                background: white;
                border-radius: 16px;
                padding: 24px;
                text-align: center;
                position: relative;
                overflow: hidden;
                box-shadow: 0 10px 40px rgba(33, 150, 243, 0.15);
            }
            
            .price-block::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #2196F3, #00bcd4);
            }
            
            .price-label {
                font-size: 9pt;
                color: #64748b;
                margin-bottom: 8px;
            }
            
            .price-value {
                font-size: 36pt;
                font-weight: 800;
                background: linear-gradient(135deg, #2196F3, #00bcd4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .price-currency {
                font-size: 16pt;
                color: #1a1a2e;
            }
            
            .price-period {
                font-size: 9pt;
                color: #64748b;
                margin-top: 4px;
            }
            
            .cta-block {
                flex: 1;
                background: linear-gradient(135deg, #2196F3, #00bcd4);
                border-radius: 16px;
                padding: 24px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .cta-block::before {
                content: '';
                position: absolute;
                top: -50%;
                right: -30%;
                width: 150px;
                height: 150px;
                background: rgba(255,255,255,0.1);
                border-radius: 50%;
            }
            
            .cta-block h3 {
                color: white;
                font-size: 14pt;
                font-weight: 700;
                margin-bottom: 6px;
                position: relative;
            }
            
            .cta-block p {
                color: rgba(255,255,255,0.9);
                font-size: 9pt;
                position: relative;
            }
            
            /* Декоративные элементы на странице */
            .page-circle-1 {
                position: absolute;
                bottom: 100px;
                right: -50px;
                width: 200px;
                height: 200px;
                border: 2px solid rgba(33, 150, 243, 0.1);
                border-radius: 50%;
            }
            
            .page-circle-2 {
                position: absolute;
                bottom: 60px;
                right: -30px;
                width: 120px;
                height: 120px;
                border: 2px solid rgba(0, 188, 212, 0.1);
                border-radius: 50%;
            }
        </style>
    </head>
    <body>
        <!-- ===== СТРАНИЦА 1: ТИТУЛ ===== -->
        <div class="cover">
            <!-- Декоративные полосы -->
            <div class="cover-stripe cover-stripe-1"></div>
            <div class="cover-stripe cover-stripe-2"></div>
            <div class="cover-stripe cover-stripe-3"></div>
            <div class="cover-stripe cover-stripe-4"></div>
            
            <!-- Круги -->
            <div class="cover-circle cover-circle-1"></div>
            <div class="cover-circle cover-circle-2"></div>
            <div class="cover-circle cover-circle-3"></div>
            
            <!-- Точки -->
            <div class="cover-dots"></div>
            
            <!-- Контент -->
            <div class="cover-content">
                <div class="mega-logo">
                    <div class="mega-logo-work">Work</div>
                    <div class="mega-logo-here">Here</div>
                </div>
                <div class="cover-title">Коммерческое предложение</div>
                <p class="cover-subtitle">ATS/CRM-система нового поколения для управления подбором персонала</p>
            </div>
            
            <!-- Нижняя панель -->
            <div class="cover-bottom">
                <div class="cover-tag">⚡ Автоматизация</div>
                <div class="cover-tag">📊 Аналитика</div>
                <div class="cover-tag">🔗 Интеграции</div>
                <div class="cover-tag">🧠 ИИ-поиск</div>
            </div>
        </div>
        
        <!-- ===== СТРАНИЦА 2: КОНТЕНТ ===== -->
        <div class="page">
            <!-- Декор -->
            <div class="page-deco-top"></div>
            <div class="page-deco-accent"></div>
            <div class="page-circle-1"></div>
            <div class="page-circle-2"></div>
            
            <!-- Лого -->
            <div class="floating-logo">
                <div class="floating-logo-work">Work</div>
                <div class="floating-logo-here">Here</div>
            </div>
            
            <!-- Заголовок -->
            <div class="page-headline">
                <h2>Всё для подбора</h2>
                <p>в одной системе</p>
            </div>
            
            <!-- Контент -->
            <div class="content-area">
                <!-- Intro -->
                <div class="intro-block">
                    <p><strong>WorkHere</strong> — единое пространство для вакансий, кандидатов и коммуникаций. Ускоряет закрытие позиций за счёт автоматизации рутины, единой базы и прозрачной аналитики воронки.</p>
                </div>
                
                <!-- Аудитория -->
                <div class="audience-row">
                    <div class="audience-item">
                        <h4>👔 HR-директора</h4>
                        <p>Прозрачность воронки, контроль качества, аналитика</p>
                    </div>
                    <div class="audience-item">
                        <h4>🎯 Рекрутеры</h4>
                        <p>Быстрый поиск, единая база, автоматизация рутины</p>
                    </div>
                    <div class="audience-item">
                        <h4>🔄 HR-универсалы</h4>
                        <p>Интеграция с 1С, передача данных о сотрудниках</p>
                    </div>
                </div>
                
                <!-- Проблемы и решения -->
                <div class="skew-card">
                    <div class="skew-card-header">
                        <div class="skew-card-icon">🎯</div>
                        <div class="skew-card-title">Проблемы → Решения</div>
                    </div>
                    <div class="skew-card-body">
                        <div class="problems-flow">
                            <div class="problem-item">Данные в почте/таблицах</div>
                            <div class="solution-item">Единая база</div>
                            <div class="problem-item">Нет контроля этапов</div>
                            <div class="solution-item">Воронка + аналитика</div>
                            <div class="problem-item">Рутина</div>
                            <div class="solution-item">Автоматизация</div>
                            <div class="problem-item">Дубли</div>
                            <div class="solution-item">Дедупликация</div>
                            <div class="problem-item">Долгий поиск</div>
                            <div class="solution-item">ИИ-поиск</div>
                        </div>
                    </div>
                </div>
                
                <!-- Функционал -->
                <div class="skew-card">
                    <div class="skew-card-header">
                        <div class="skew-card-icon">⚡</div>
                        <div class="skew-card-title">Ключевой функционал</div>
                    </div>
                    <div class="skew-card-body">
                        <div class="features-hex">
                            <div class="hex-item">
                                <h5>Подбор</h5>
                                <ul><li>Воронка/канбан</li><li>Карточки</li><li>Задачи</li></ul>
                            </div>
                            <div class="hex-item">
                                <h5>Прозрачность</h5>
                                <ul><li>История</li><li>Согласования</li><li>Команда</li></ul>
                            </div>
                            <div class="hex-item">
                                <h5>Аналитика</h5>
                                <ul><li>Конверсия</li><li>Скорость</li><li>Источники</li></ul>
                            </div>
                            <div class="hex-item">
                                <h5>Качество</h5>
                                <ul><li>Дедупликация</li><li>Объединение</li><li>Чистая база</li></ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- ИИ -->
                <div class="ai-futuristic">
                    <div class="ai-content">
                        <div class="ai-icon-box">🧠</div>
                        <div class="ai-text">
                            <h3>ИИ-поиск кандидатов</h3>
                            <p>Интеллектуальный поиск по базе и работным сайтам. Находит по смыслу, не только по ключевым словам.</p>
                        </div>
                        <div class="ai-features">
                            <div class="ai-feature">
                                <div class="ai-feature-value">5×</div>
                                <div class="ai-feature-label">быстрее</div>
                            </div>
                            <div class="ai-feature">
                                <div class="ai-feature-value">∞</div>
                                <div class="ai-feature-label">база</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Интеграции -->
                <div class="integrations-bar">
                    <div class="int-pill">Джоб-сайты <span>автоимпорт</span></div>
                    <div class="int-pill">Мессенджеры <span>история</span></div>
                    <div class="int-pill">1С <span>обмен данными</span></div>
                    <div class="int-pill">API <span>любые системы</span></div>
                </div>
                
                <!-- Цена + CTA -->
                <div class="bottom-duo">
                    <div class="price-block">
                        <div class="price-label">Базовая лицензия</div>
                        <div class="price-value">20 000</div>
                        <span class="price-currency">₽</span>
                        <div class="price-period">в год</div>
                    </div>
                    <div class="cta-block">
                        <h3>Готовы ускорить подбор?</h3>
                        <p>Свяжитесь для демонстрации системы</p>
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
