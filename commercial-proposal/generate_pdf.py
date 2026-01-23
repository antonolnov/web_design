#!/usr/bin/env python3
"""
Генератор PDF коммерческого предложения WorkHere
DARK PREMIUM - чёрный фон, голубые акценты, дорого
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
                color: #ffffff;
                font-size: 9pt;
                line-height: 1.45;
            }
            
            /* ============================================= */
            /* СТРАНИЦА 1: DARK PREMIUM COVER */
            /* ============================================= */
            .cover {
                height: 297mm;
                background: linear-gradient(160deg, #0a0a0f 0%, #0d1117 40%, #0a0a0f 100%);
                position: relative;
                overflow: hidden;
                page-break-after: always;
            }
            
            /* SVG формы */
            .cover-svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            
            /* Subtle grid */
            .cover-grid {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: 
                    linear-gradient(rgba(33, 150, 243, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(33, 150, 243, 0.03) 1px, transparent 1px);
                background-size: 50px 50px;
            }
            
            /* Gradient glow */
            .cover-glow-1 {
                position: absolute;
                top: -200px;
                right: -150px;
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, rgba(33, 150, 243, 0.15) 0%, transparent 70%);
            }
            
            .cover-glow-2 {
                position: absolute;
                bottom: -200px;
                left: -150px;
                width: 500px;
                height: 500px;
                background: radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, transparent 70%);
            }
            
            /* Logo */
            .cover-logo {
                position: absolute;
                top: 50px;
                left: 55px;
                z-index: 20;
            }
            
            .cover-logo-box {
                display: inline-flex;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 12px 20px;
                backdrop-filter: blur(10px);
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
                color: #ffffff;
                font-size: 26pt;
                font-weight: 700;
                padding: 8px 14px;
            }
            
            /* Content */
            .cover-content {
                position: absolute;
                top: 200px;
                left: 55px;
                max-width: 420px;
                z-index: 20;
            }
            
            .cover-eyebrow {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background: rgba(33, 150, 243, 0.1);
                border: 1px solid rgba(33, 150, 243, 0.3);
                padding: 8px 18px;
                border-radius: 30px;
                margin-bottom: 25px;
            }
            
            .cover-eyebrow-dot {
                width: 8px;
                height: 8px;
                background: #2196F3;
                border-radius: 50%;
                box-shadow: 0 0 10px #2196F3;
            }
            
            .cover-eyebrow span {
                font-size: 9pt;
                font-weight: 600;
                color: #64b5f6;
                letter-spacing: 1px;
            }
            
            .cover-title {
                font-size: 44pt;
                font-weight: 700;
                color: #ffffff;
                line-height: 1.05;
                margin-bottom: 25px;
                letter-spacing: -1px;
            }
            
            .cover-title-accent {
                background: linear-gradient(135deg, #2196F3, #64b5f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .cover-desc {
                font-size: 12pt;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.7;
            }
            
            /* Pills */
            .cover-pills {
                position: absolute;
                bottom: 180px;
                left: 55px;
                display: flex;
                gap: 15px;
                z-index: 20;
            }
            
            .cover-pill {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 20px 25px;
                text-align: center;
                min-width: 110px;
            }
            
            .cover-pill-value {
                font-size: 26pt;
                font-weight: 700;
                background: linear-gradient(135deg, #2196F3, #64b5f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                line-height: 1;
                margin-bottom: 6px;
            }
            
            .cover-pill-label {
                font-size: 8pt;
                color: rgba(255, 255, 255, 0.5);
                font-weight: 500;
            }
            
            /* Bottom */
            .cover-bottom {
                position: absolute;
                bottom: 50px;
                left: 55px;
                right: 55px;
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                z-index: 20;
                padding-top: 20px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .cover-bottom-left {
                font-size: 10pt;
                color: rgba(255, 255, 255, 0.4);
            }
            
            .cover-bottom-right {
                text-align: right;
            }
            
            .cover-price {
                font-size: 12pt;
                color: #ffffff;
                font-weight: 600;
            }
            
            .cover-price-note {
                font-size: 9pt;
                color: rgba(255, 255, 255, 0.4);
            }
            
            /* ============================================= */
            /* СТРАНИЦА 2: DARK CONTENT */
            /* ============================================= */
            .page {
                height: 297mm;
                background: linear-gradient(180deg, #0d1117 0%, #0a0a0f 100%);
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
            
            /* Glows */
            .page-glow {
                position: absolute;
                bottom: -100px;
                right: -100px;
                width: 400px;
                height: 400px;
                background: radial-gradient(circle, rgba(33, 150, 243, 0.08) 0%, transparent 70%);
            }
            
            /* Header */
            .page-header {
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(25, 118, 210, 0.1) 100%);
                border-bottom: 1px solid rgba(33, 150, 243, 0.2);
                padding: 18px 40px;
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
                background: linear-gradient(135deg, #2196F3, #1976D2);
                color: white;
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
                color: rgba(255, 255, 255, 0.7);
                font-size: 10pt;
                font-weight: 500;
            }
            
            /* Content */
            .content {
                padding: 20px 40px 25px;
                position: relative;
                z-index: 10;
            }
            
            /* Intro */
            .intro {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-left: 3px solid #2196F3;
                border-radius: 12px;
                padding: 16px 20px;
                margin-bottom: 16px;
            }
            
            .intro p {
                font-size: 10pt;
                color: rgba(255, 255, 255, 0.8);
                line-height: 1.6;
            }
            
            .intro strong {
                color: #64b5f6;
            }
            
            /* Section header */
            .section-header {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 10px;
            }
            
            .section-icon {
                width: 30px;
                height: 30px;
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 13pt;
            }
            
            .section-title {
                font-size: 11pt;
                font-weight: 700;
                color: #ffffff;
            }
            
            /* Audience */
            .audience-row {
                display: flex;
                gap: 10px;
                margin-bottom: 16px;
            }
            
            .audience-card {
                flex: 1;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 12px;
                padding: 14px;
                position: relative;
            }
            
            .audience-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, #2196F3, #64b5f6);
                border-radius: 12px 12px 0 0;
            }
            
            .audience-card h4 {
                font-size: 10pt;
                font-weight: 700;
                color: #ffffff;
                margin-bottom: 4px;
            }
            
            .audience-card p {
                font-size: 8pt;
                color: rgba(255, 255, 255, 0.6);
                line-height: 1.4;
            }
            
            /* Two columns */
            .two-cols {
                display: flex;
                gap: 15px;
                margin-bottom: 16px;
            }
            
            .col {
                flex: 1;
            }
            
            /* Problems */
            .problems-box {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 12px;
                overflow: hidden;
            }
            
            .problems-header {
                background: linear-gradient(90deg, rgba(33, 150, 243, 0.2), rgba(33, 150, 243, 0.1));
                padding: 10px 14px;
                color: #64b5f6;
                font-size: 9pt;
                font-weight: 600;
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
            
            .problem-row {
                display: flex;
                align-items: center;
                padding: 8px 14px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                font-size: 8pt;
            }
            
            .problem-row:last-child {
                border-bottom: none;
            }
            
            .problem-from {
                flex: 1;
                color: rgba(255, 255, 255, 0.5);
            }
            
            .problem-arrow {
                color: #2196F3;
                font-weight: bold;
                padding: 0 10px;
            }
            
            .problem-to {
                flex: 1;
                color: #64b5f6;
                font-weight: 600;
            }
            
            /* Features */
            .features-box {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 12px;
                padding: 14px;
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
                margin-bottom: 3px;
            }
            
            .feature-item p {
                font-size: 8pt;
                color: rgba(255, 255, 255, 0.6);
                line-height: 1.4;
            }
            
            /* AI Block */
            .ai-block {
                background: linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(25, 118, 210, 0.1) 100%);
                border: 1px solid rgba(33, 150, 243, 0.3);
                border-radius: 16px;
                padding: 18px 22px;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                gap: 18px;
                position: relative;
                overflow: hidden;
            }
            
            .ai-block::before {
                content: '';
                position: absolute;
                top: -50px;
                right: -50px;
                width: 150px;
                height: 150px;
                background: radial-gradient(circle, rgba(33, 150, 243, 0.2) 0%, transparent 70%);
            }
            
            .ai-icon {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 22pt;
                position: relative;
                z-index: 1;
                box-shadow: 0 4px 20px rgba(33, 150, 243, 0.4);
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
                color: rgba(255, 255, 255, 0.8);
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
                background: rgba(255, 255, 255, 0.05);
                border-radius: 10px;
                padding: 10px 15px;
            }
            
            .ai-stat-value {
                color: #64b5f6;
                font-size: 18pt;
                font-weight: 700;
            }
            
            .ai-stat-label {
                color: rgba(255, 255, 255, 0.5);
                font-size: 7pt;
            }
            
            /* Integrations */
            .integrations-row {
                display: flex;
                gap: 8px;
                margin-bottom: 16px;
            }
            
            .int-chip {
                flex: 1;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 10px;
                padding: 10px 12px;
                text-align: center;
            }
            
            .int-chip strong {
                display: block;
                font-size: 9pt;
                color: #ffffff;
                margin-bottom: 2px;
            }
            
            .int-chip span {
                font-size: 7pt;
                color: rgba(255, 255, 255, 0.4);
            }
            
            /* Price */
            .price-section {
                display: flex;
                gap: 12px;
            }
            
            .price-card {
                flex: 1;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 22px;
                text-align: center;
                position: relative;
            }
            
            .price-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #2196F3, #64b5f6);
                border-radius: 16px 16px 0 0;
            }
            
            .price-label {
                font-size: 9pt;
                color: rgba(255, 255, 255, 0.5);
                margin-bottom: 6px;
            }
            
            .price-value {
                font-size: 34pt;
                font-weight: 700;
                background: linear-gradient(135deg, #2196F3, #64b5f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                line-height: 1;
            }
            
            .price-currency {
                font-size: 16pt;
                color: #ffffff;
            }
            
            .price-period {
                font-size: 9pt;
                color: rgba(255, 255, 255, 0.5);
                margin-top: 4px;
            }
            
            .cta-card {
                flex: 1;
                background: linear-gradient(135deg, #2196F3, #1976D2);
                border-radius: 16px;
                padding: 22px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                position: relative;
                overflow: hidden;
                box-shadow: 0 8px 30px rgba(33, 150, 243, 0.3);
            }
            
            .cta-card::before {
                content: '';
                position: absolute;
                top: -30px;
                right: -30px;
                width: 100px;
                height: 100px;
                background: rgba(255, 255, 255, 0.1);
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
                color: rgba(255, 255, 255, 0.9);
                font-size: 9pt;
                position: relative;
            }
        </style>
    </head>
    <body>
        <!-- ===== СТРАНИЦА 1: COVER ===== -->
        <div class="cover">
            <!-- SVG -->
            <svg class="cover-svg" viewBox="0 0 595 842" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#2196F3;stop-opacity:0.3"/>
                        <stop offset="100%" style="stop-color:#1565C0;stop-opacity:0.1"/>
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#64b5f6;stop-opacity:0.2"/>
                        <stop offset="100%" style="stop-color:#2196F3;stop-opacity:0.05"/>
                    </linearGradient>
                </defs>
                
                <!-- Complex blob top right -->
                <path d="M450,0 Q550,30 580,120 Q610,220 550,300 Q490,380 420,350 Q340,320 360,240 Q380,160 410,100 Q440,40 450,0 Z" fill="url(#grad1)"/>
                
                <!-- Secondary shape -->
                <path d="M500,50 Q560,80 550,160 Q540,240 480,260 Q410,280 400,210 Q390,140 430,100 Q470,60 500,50 Z" fill="url(#grad2)"/>
                
                <!-- Bottom blob -->
                <path d="M-80,680 Q20,620 120,670 Q230,730 180,820 Q130,920 20,880 Q-100,840 -80,680 Z" fill="url(#grad1)"/>
                
                <!-- Flowing lines -->
                <path d="M0,520 Q200,480 400,530 Q550,570 595,510" stroke="rgba(33,150,243,0.1)" stroke-width="1" fill="none"/>
                <path d="M0,550 Q200,510 400,560 Q550,600 595,540" stroke="rgba(33,150,243,0.07)" stroke-width="1" fill="none"/>
                <path d="M0,580 Q200,540 400,590 Q550,630 595,570" stroke="rgba(33,150,243,0.04)" stroke-width="1" fill="none"/>
                
                <!-- Circles -->
                <circle cx="120" cy="220" r="50" stroke="rgba(33,150,243,0.1)" stroke-width="1" fill="none"/>
                <circle cx="120" cy="220" r="70" stroke="rgba(33,150,243,0.05)" stroke-width="1" fill="none"/>
                <circle cx="500" cy="600" r="40" stroke="rgba(100,181,246,0.1)" stroke-width="1" fill="none"/>
                <circle cx="500" cy="600" r="60" stroke="rgba(100,181,246,0.05)" stroke-width="1" fill="none"/>
                
                <!-- Dots -->
                <circle cx="200" cy="380" r="4" fill="rgba(33,150,243,0.3)"/>
                <circle cx="480" cy="450" r="3" fill="rgba(33,150,243,0.2)"/>
                <circle cx="150" cy="600" r="5" fill="rgba(33,150,243,0.15)"/>
                
                <!-- Lines connecting -->
                <line x1="120" y1="270" x2="200" y2="380" stroke="rgba(33,150,243,0.08)" stroke-width="1"/>
            </svg>
            
            <div class="cover-grid"></div>
            <div class="cover-glow-1"></div>
            <div class="cover-glow-2"></div>
            
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
            
            <!-- Pills -->
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
            <!-- SVG -->
            <svg class="page-svg" viewBox="0 0 595 842" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#2196F3;stop-opacity:0.08"/>
                        <stop offset="100%" style="stop-color:#1976D2;stop-opacity:0.03"/>
                    </linearGradient>
                </defs>
                <path d="M595,750 Q530,700 480,750 Q400,820 420,900 L595,900 Z" fill="url(#pg1)"/>
                <circle cx="560" cy="200" r="80" stroke="rgba(33,150,243,0.05)" stroke-width="1" fill="none"/>
                <circle cx="560" cy="200" r="100" stroke="rgba(33,150,243,0.03)" stroke-width="1" fill="none"/>
            </svg>
            
            <div class="page-glow"></div>
            
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
                
                <!-- Two cols -->
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
