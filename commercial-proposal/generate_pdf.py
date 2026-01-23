#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
ADVANCED ORGANIC - сложные SVG формы, профессиональная графика
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
                font-size: 9pt;
                line-height: 1.45;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 1: COVER */
            /* ============================================= */
            .cover {
                height: 297mm;
                background: linear-gradient(165deg, #f8fbff 0%, #e8f4fc 40%, #dceefb 100%);
                position: relative;
                overflow: hidden;
                page-break-after: always;
            }
            
            /* SVG сложные формы */
            .cover-svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            
            /* Тонкая геометрическая сетка */
            .cover-grid {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: 
                    linear-gradient(rgba(33, 150, 243, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(33, 150, 243, 0.03) 1px, transparent 1px);
                background-size: 40px 40px;
            }
            
            /* Логотип */
            .cover-logo {
                position: absolute;
                top: 50px;
                left: 55px;
                z-index: 20;
            }
            
            .cover-logo-box {
                display: inline-flex;
                background: white;
                border-radius: 16px;
                padding: 12px 20px;
                box-shadow: 
                    0 4px 6px rgba(33, 150, 243, 0.07),
                    0 20px 40px rgba(33, 150, 243, 0.12);
            }
            
            .cover-logo-work {
                background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
                color: white;
                font-size: 26pt;
                font-weight: 700;
                padding: 8px 14px;
                border-radius: 10px;
            }
            
            .cover-logo-here {
                color: #1a1a2e;
                font-size: 26pt;
                font-weight: 700;
                padding: 8px 14px;
            }
            
            /* Главный контент */
            .cover-content {
                position: absolute;
                top: 200px;
                left: 55px;
                max-width: 400px;
                z-index: 20;
            }
            
            .cover-eyebrow {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background: white;
                padding: 8px 18px;
                border-radius: 30px;
                margin-bottom: 25px;
                box-shadow: 0 4px 15px rgba(33, 150, 243, 0.1);
            }
            
            .cover-eyebrow-dot {
                width: 8px;
                height: 8px;
                background: linear-gradient(135deg, #2196F3, #64b5f6);
                border-radius: 50%;
            }
            
            .cover-eyebrow span {
                font-size: 9pt;
                font-weight: 600;
                color: #2196F3;
                letter-spacing: 1px;
            }
            
            .cover-title {
                font-size: 42pt;
                font-weight: 700;
                color: #0d1b2a;
                line-height: 1.05;
                margin-bottom: 25px;
                letter-spacing: -1px;
            }
            
            .cover-title-accent {
                background: linear-gradient(135deg, #2196F3, #1976D2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .cover-desc {
                font-size: 12pt;
                color: #4a5568;
                line-height: 1.7;
            }
            
            /* Feature pills */
            .cover-pills {
                position: absolute;
                bottom: 180px;
                left: 55px;
                display: flex;
                gap: 12px;
                z-index: 20;
            }
            
            .cover-pill {
                background: white;
                border-radius: 14px;
                padding: 18px 22px;
                box-shadow: 
                    0 4px 6px rgba(33, 150, 243, 0.05),
                    0 15px 35px rgba(33, 150, 243, 0.1);
                text-align: center;
                min-width: 100px;
            }
            
            .cover-pill-value {
                font-size: 22pt;
                font-weight: 700;
                color: #2196F3;
                line-height: 1;
                margin-bottom: 6px;
            }
            
            .cover-pill-label {
                font-size: 8pt;
                color: #64748b;
                font-weight: 500;
            }
            
            /* Bottom info */
            .cover-bottom {
                position: absolute;
                bottom: 50px;
                left: 55px;
                right: 55px;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                z-index: 20;
            }
            
            .cover-bottom-left {
                font-size: 10pt;
                color: #64748b;
            }
            
            .cover-bottom-right {
                text-align: right;
            }
            
            .cover-price {
                font-size: 11pt;
                color: #1a1a2e;
                font-weight: 600;
            }
            
            .cover-price-note {
                font-size: 9pt;
                color: #94a3b8;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 2: CONTENT */
            /* ============================================= */
            .page {
                height: 297mm;
                background: #fafcff;
                position: relative;
                overflow: hidden;
            }
            
            /* SVG декор */
            .page-svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
            }
            
            /* Header */
            .page-header {
                background: linear-gradient(135deg, #2196F3 0%, #1976D2 60%, #1565C0 100%);
                padding: 20px 40px 45px;
                position: relative;
            }
            
            .page-header::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 30px;
                background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 30'%3E%3Cpath d='M0,30 L0,15 Q200,0 400,15 T800,15 T1200,15 L1200,30 Z' fill='%23fafcff'/%3E%3C/svg%3E");
                background-size: 100% 100%;
            }
            
            .page-header-inner {
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
                font-size: 12pt;
                font-weight: 700;
                padding: 5px 10px;
                border-radius: 6px;
            }
            
            .page-logo-here {
                color: white;
                font-size: 12pt;
                font-weight: 700;
                padding: 5px 8px;
            }
            
            .page-header-title {
                color: rgba(255,255,255,0.9);
                font-size: 10pt;
                font-weight: 500;
            }
            
            /* Content area */
            .content {
                padding: 15px 40px 25px;
                position: relative;
                z-index: 10;
            }
            
            /* Intro */
            .intro {
                background: white;
                border-radius: 18px;
                padding: 18px 22px;
                margin-bottom: 14px;
                box-shadow: 0 4px 20px rgba(33, 150, 243, 0.06);
                border-left: 4px solid;
                border-image: linear-gradient(180deg, #2196F3, #64b5f6) 1;
            }
            
            .intro p {
                font-size: 10pt;
                color: #333;
                line-height: 1.6;
            }
            
            .intro strong {
                color: #2196F3;
            }
            
            /* Section header */
            .section-header {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 10px;
            }
            
            .section-icon {
                width: 32px;
                height: 32px;
                background: linear-gradient(135deg, #2196F3, #42a5f5);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14pt;
            }
            
            .section-title {
                font-size: 12pt;
                font-weight: 700;
                color: #0d1b2a;
            }
            
            /* Audience - compact */
            .audience-row {
                display: flex;
                gap: 10px;
                margin-bottom: 14px;
            }
            
            .audience-card {
                flex: 1;
                background: white;
                border-radius: 14px;
                padding: 14px;
                box-shadow: 0 3px 15px rgba(33, 150, 243, 0.05);
                position: relative;
                overflow: hidden;
            }
            
            .audience-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #2196F3, #64b5f6);
            }
            
            .audience-card h4 {
                font-size: 10pt;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 4px;
            }
            
            .audience-card p {
                font-size: 8pt;
                color: #64748b;
                line-height: 1.4;
            }
            
            /* Two columns */
            .two-cols {
                display: flex;
                gap: 15px;
                margin-bottom: 14px;
            }
            
            .col {
                flex: 1;
            }
            
            /* Problems - minimal table */
            .problems-box {
                background: white;
                border-radius: 14px;
                overflow: hidden;
                box-shadow: 0 3px 15px rgba(33, 150, 243, 0.05);
            }
            
            .problems-header {
                background: linear-gradient(90deg, #2196F3, #42a5f5);
                padding: 10px 14px;
                color: white;
                font-size: 9pt;
                font-weight: 600;
            }
            
            .problem-row {
                display: flex;
                align-items: center;
                padding: 8px 14px;
                border-bottom: 1px solid #f0f4f8;
                font-size: 8pt;
            }
            
            .problem-row:last-child {
                border-bottom: none;
            }
            
            .problem-from {
                flex: 1;
                color: #64748b;
            }
            
            .problem-arrow {
                color: #2196F3;
                font-weight: bold;
                padding: 0 10px;
            }
            
            .problem-to {
                flex: 1;
                color: #1a1a2e;
                font-weight: 600;
            }
            
            /* Features grid */
            .features-box {
                background: white;
                border-radius: 14px;
                padding: 14px;
                box-shadow: 0 3px 15px rgba(33, 150, 243, 0.05);
            }
            
            .features-grid {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
            }
            
            .feature-item {
                width: calc(50% - 6px);
            }
            
            .feature-item h5 {
                font-size: 9pt;
                font-weight: 700;
                color: #2196F3;
                margin-bottom: 4px;
            }
            
            .feature-item p {
                font-size: 8pt;
                color: #64748b;
                line-height: 1.4;
            }
            
            /* AI Block */
            .ai-block {
                background: linear-gradient(135deg, #1565C0 0%, #1976D2 40%, #2196F3 100%);
                border-radius: 18px;
                padding: 18px 22px;
                margin-bottom: 14px;
                display: flex;
                align-items: center;
                gap: 18px;
                position: relative;
                overflow: hidden;
            }
            
            .ai-block-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.15;
            }
            
            .ai-icon {
                width: 48px;
                height: 48px;
                background: rgba(255,255,255,0.2);
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 22pt;
                position: relative;
                z-index: 1;
            }
            
            .ai-content {
                position: relative;
                z-index: 1;
                flex: 1;
            }
            
            .ai-content h3 {
                color: white;
                font-size: 12pt;
                font-weight: 700;
                margin-bottom: 4px;
            }
            
            .ai-content p {
                color: rgba(255,255,255,0.9);
                font-size: 9pt;
                line-height: 1.5;
            }
            
            .ai-stats {
                display: flex;
                gap: 15px;
                position: relative;
                z-index: 1;
            }
            
            .ai-stat {
                text-align: center;
            }
            
            .ai-stat-value {
                color: white;
                font-size: 18pt;
                font-weight: 700;
            }
            
            .ai-stat-label {
                color: rgba(255,255,255,0.7);
                font-size: 7pt;
            }
            
            /* Integrations */
            .integrations-row {
                display: flex;
                gap: 8px;
                margin-bottom: 14px;
            }
            
            .int-chip {
                flex: 1;
                background: white;
                border-radius: 10px;
                padding: 10px 12px;
                text-align: center;
                box-shadow: 0 2px 10px rgba(33, 150, 243, 0.05);
            }
            
            .int-chip strong {
                display: block;
                font-size: 9pt;
                color: #1a1a2e;
                margin-bottom: 2px;
            }
            
            .int-chip span {
                font-size: 7pt;
                color: #94a3b8;
            }
            
            /* Price section */
            .price-section {
                display: flex;
                gap: 12px;
            }
            
            .price-card {
                flex: 1;
                background: white;
                border-radius: 18px;
                padding: 22px;
                text-align: center;
                box-shadow: 0 6px 25px rgba(33, 150, 243, 0.1);
                position: relative;
                overflow: hidden;
            }
            
            .price-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #2196F3, #64b5f6, #2196F3);
            }
            
            .price-label {
                font-size: 9pt;
                color: #94a3b8;
                margin-bottom: 6px;
            }
            
            .price-value {
                font-size: 32pt;
                font-weight: 700;
                color: #2196F3;
                line-height: 1;
            }
            
            .price-currency {
                font-size: 14pt;
                color: #1a1a2e;
            }
            
            .price-period {
                font-size: 9pt;
                color: #94a3b8;
                margin-top: 4px;
            }
            
            .cta-card {
                flex: 1;
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 18px;
                padding: 22px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .cta-card::before {
                content: '';
                position: absolute;
                top: -30px;
                right: -30px;
                width: 100px;
                height: 100px;
                background: rgba(255,255,255,0.1);
                border-radius: 50%;
            }
            
            .cta-card h3 {
                color: white;
                font-size: 14pt;
                font-weight: 700;
                margin-bottom: 4px;
                position: relative;
            }
            
            .cta-card p {
                color: rgba(255,255,255,0.9);
                font-size: 9pt;
                position: relative;
            }
        </style>
    </head>
    <body>
        <!-- ===== СТРАНИЦА 1: COVER ===== -->
        <div class="cover">
            <!-- Complex SVG Background -->
            <svg class="cover-svg" viewBox="0 0 595 842" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#2196F3;stop-opacity:0.9"/>
                        <stop offset="100%" style="stop-color:#1565C0;stop-opacity:1"/>
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#64b5f6;stop-opacity:0.7"/>
                        <stop offset="100%" style="stop-color:#2196F3;stop-opacity:0.8"/>
                    </linearGradient>
                    <linearGradient id="grad3" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#1976D2;stop-opacity:0.6"/>
                        <stop offset="100%" style="stop-color:#0d47a1;stop-opacity:0.8"/>
                    </linearGradient>
                    <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
                    </filter>
                </defs>
                
                <!-- Main complex blob - top right -->
                <path d="M450,0 Q595,50 595,180 Q595,320 520,380 Q440,450 380,400 Q300,340 350,250 Q380,180 420,120 Q460,60 450,0 Z" fill="url(#grad1)"/>
                
                <!-- Secondary blob -->
                <path d="M520,80 Q580,100 570,180 Q560,260 500,280 Q430,300 420,240 Q410,180 450,130 Q490,80 520,80 Z" fill="url(#grad2)" opacity="0.6"/>
                
                <!-- Bottom left blob -->
                <path d="M-50,650 Q30,580 120,620 Q220,670 200,760 Q180,850 80,870 Q-30,890 -80,820 Q-130,750 -50,650 Z" fill="url(#grad3)"/>
                
                <!-- Flowing lines -->
                <path d="M0,500 Q150,480 300,520 Q450,560 595,500" stroke="rgba(33,150,243,0.15)" stroke-width="2" fill="none"/>
                <path d="M0,530 Q150,510 300,550 Q450,590 595,530" stroke="rgba(33,150,243,0.1)" stroke-width="1.5" fill="none"/>
                
                <!-- Geometric accents -->
                <circle cx="100" cy="200" r="40" stroke="rgba(33,150,243,0.2)" stroke-width="1" fill="none"/>
                <circle cx="100" cy="200" r="55" stroke="rgba(33,150,243,0.1)" stroke-width="1" fill="none"/>
                <circle cx="480" cy="550" r="30" stroke="rgba(255,255,255,0.3)" stroke-width="1" fill="none"/>
                <circle cx="480" cy="550" r="45" stroke="rgba(255,255,255,0.15)" stroke-width="1" fill="none"/>
                
                <!-- Small decorative shapes -->
                <circle cx="180" cy="350" r="8" fill="rgba(33,150,243,0.2)"/>
                <circle cx="520" cy="650" r="12" fill="rgba(33,150,243,0.15)"/>
                <circle cx="450" cy="750" r="6" fill="rgba(33,150,243,0.25)"/>
                
                <!-- Connecting lines -->
                <line x1="100" y1="240" x2="180" y2="350" stroke="rgba(33,150,243,0.1)" stroke-width="1"/>
                <line x1="480" y1="580" x2="520" y2="650" stroke="rgba(33,150,243,0.08)" stroke-width="1"/>
            </svg>
            
            <!-- Grid overlay -->
            <div class="cover-grid"></div>
            
            <!-- Logo -->
            <div class="cover-logo">
                <div class="cover-logo-box">
                    <span class="cover-logo-work">Work</span>
                    <span class="cover-logo-here">Here</span>
                </div>
            </div>
            
            <!-- Content -->
            <div class="cover-content">
                <div class="cover-eyebrow">
                    <div class="cover-eyebrow-dot"></div>
                    <span>КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</span>
                </div>
                <h1 class="cover-title">ATS/CRM<br><span class="cover-title-accent">нового поколения</span></h1>
                <p class="cover-desc">Единое пространство для вакансий, кандидатов и коммуникаций. Автоматизация рутины, аналитика воронки и ИИ-поиск.</p>
            </div>
            
            <!-- Feature pills -->
            <div class="cover-pills">
                <div class="cover-pill">
                    <div class="cover-pill-value">5×</div>
                    <div class="cover-pill-label">Быстрее поиск</div>
                </div>
                <div class="cover-pill">
                    <div class="cover-pill-value">0</div>
                    <div class="cover-pill-label">Дублей</div>
                </div>
                <div class="cover-pill">
                    <div class="cover-pill-value">∞</div>
                    <div class="cover-pill-label">Интеграций</div>
                </div>
            </div>
            
            <!-- Bottom -->
            <div class="cover-bottom">
                <div class="cover-bottom-left">© WorkHere 2025</div>
                <div class="cover-bottom-right">
                    <div class="cover-price">от 20 000 ₽ / год</div>
                    <div class="cover-price-note">базовая лицензия</div>
                </div>
            </div>
        </div>
        
        <!-- ===== СТРАНИЦА 2: CONTENT ===== -->
        <div class="page">
            <!-- SVG Background -->
            <svg class="page-svg" viewBox="0 0 595 842" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#2196F3;stop-opacity:0.05"/>
                        <stop offset="100%" style="stop-color:#1976D2;stop-opacity:0.08"/>
                    </linearGradient>
                </defs>
                <path d="M595,700 Q550,650 500,680 Q420,720 400,800 Q380,880 450,900 L595,900 Z" fill="url(#pg1)"/>
                <path d="M0,750 Q50,700 30,650 Q10,600 -20,620 L-20,850 L50,850 Q30,800 0,750 Z" fill="url(#pg1)"/>
                <circle cx="550" cy="150" r="60" stroke="rgba(33,150,243,0.05)" stroke-width="1" fill="none"/>
                <circle cx="550" cy="150" r="80" stroke="rgba(33,150,243,0.03)" stroke-width="1" fill="none"/>
            </svg>
            
            <!-- Header -->
            <div class="page-header">
                <div class="page-header-inner">
                    <div class="page-logo">
                        <span class="page-logo-work">Work</span>
                        <span class="page-logo-here">Here</span>
                    </div>
                    <span class="page-header-title">Возможности системы</span>
                </div>
            </div>
            
            <div class="content">
                <!-- Intro -->
                <div class="intro">
                    <p><strong>WorkHere</strong> — единое пространство для вакансий, кандидатов и коммуникаций. Ускоряет закрытие позиций за счёт автоматизации рутины, единой базы и прозрачной аналитики.</p>
                </div>
                
                <!-- Audience -->
                <div class="section-header">
                    <div class="section-icon">👥</div>
                    <div class="section-title">Для кого</div>
                </div>
                <div class="audience-row">
                    <div class="audience-card">
                        <h4>HR-директора</h4>
                        <p>Прозрачность воронки, контроль, аналитика</p>
                    </div>
                    <div class="audience-card">
                        <h4>Рекрутеры</h4>
                        <p>Единая база, быстрый поиск, автоматизация</p>
                    </div>
                    <div class="audience-card">
                        <h4>HR-универсалы</h4>
                        <p>Интеграция с 1С, передача данных</p>
                    </div>
                </div>
                
                <!-- Two columns: Problems + Features -->
                <div class="two-cols">
                    <div class="col">
                        <div class="section-header">
                            <div class="section-icon">🎯</div>
                            <div class="section-title">Решаем</div>
                        </div>
                        <div class="problems-box">
                            <div class="problems-header">Было → Стало</div>
                            <div class="problem-row">
                                <span class="problem-from">Хаос в данных</span>
                                <span class="problem-arrow">→</span>
                                <span class="problem-to">Единая база</span>
                            </div>
                            <div class="problem-row">
                                <span class="problem-from">Нет контроля</span>
                                <span class="problem-arrow">→</span>
                                <span class="problem-to">Воронка</span>
                            </div>
                            <div class="problem-row">
                                <span class="problem-from">Дубли</span>
                                <span class="problem-arrow">→</span>
                                <span class="problem-to">Дедупликация</span>
                            </div>
                            <div class="problem-row">
                                <span class="problem-from">Рутина</span>
                                <span class="problem-arrow">→</span>
                                <span class="problem-to">Автоматизация</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="section-header">
                            <div class="section-icon">⚡</div>
                            <div class="section-title">Функционал</div>
                        </div>
                        <div class="features-box">
                            <div class="features-grid">
                                <div class="feature-item">
                                    <h5>Подбор</h5>
                                    <p>Воронка, карточки, задачи</p>
                                </div>
                                <div class="feature-item">
                                    <h5>Прозрачность</h5>
                                    <p>История, согласования</p>
                                </div>
                                <div class="feature-item">
                                    <h5>Аналитика</h5>
                                    <p>Конверсия, скорость</p>
                                </div>
                                <div class="feature-item">
                                    <h5>Качество</h5>
                                    <p>Дедупликация, чистота</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- AI -->
                <div class="ai-block">
                    <svg class="ai-block-bg" viewBox="0 0 500 100" preserveAspectRatio="xMidYMid slice">
                        <circle cx="50" cy="50" r="80" fill="white"/>
                        <circle cx="450" cy="30" r="60" fill="white"/>
                        <circle cx="250" cy="80" r="40" fill="white"/>
                    </svg>
                    <div class="ai-icon">🧠</div>
                    <div class="ai-content">
                        <h3>ИИ-поиск кандидатов</h3>
                        <p>Интеллектуальный поиск по базе и работным сайтам. Находит по смыслу, не по ключевым словам.</p>
                    </div>
                    <div class="ai-stats">
                        <div class="ai-stat">
                            <div class="ai-stat-value">5×</div>
                            <div class="ai-stat-label">быстрее</div>
                        </div>
                    </div>
                </div>
                
                <!-- Integrations -->
                <div class="integrations-row">
                    <div class="int-chip"><strong>Джоб-сайты</strong><span>автоимпорт</span></div>
                    <div class="int-chip"><strong>Мессенджеры</strong><span>история</span></div>
                    <div class="int-chip"><strong>1С</strong><span>обмен</span></div>
                    <div class="int-chip"><strong>API</strong><span>любые системы</span></div>
                </div>
                
                <!-- Price -->
                <div class="price-section">
                    <div class="price-card">
                        <div class="price-label">Базовая лицензия</div>
                        <div class="price-value">20 000 <span class="price-currency">₽</span></div>
                        <div class="price-period">в год</div>
                    </div>
                    <div class="cta-card">
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
