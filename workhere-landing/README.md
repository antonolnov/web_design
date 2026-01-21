# WorkHere — Современная ATS-платформа

Премиальный B2B SaaS лендинг для ATS-продукта (Applicant Tracking System) уровня enterprise.

![WorkHere Landing](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)

## Технологии

- **Next.js 16+** (App Router) — React-фреймворк для продакшена
- **TypeScript** — статическая типизация
- **Tailwind CSS 4** — utility-first CSS фреймворк
- **Framer Motion** — библиотека анимаций
- **Lucide Icons** — современные иконки

## Возможности

### Секции лендинга

1. **Hero** — главный экран с анимированным фоном и превью дашборда
2. **Clients** — логотипы клиентов
3. **Features** — 8 карточек с возможностями + метрики экономии
4. **Funnel** — визуализация воронки найма с аналитикой
5. **AI Features** — демо AI-скоринга кандидатов
6. **Integrations** — интеграции с job-бордами, API документация
7. **Analytics** — интерактивный дашборд с графиками
8. **Security** — безопасность и сертификации
9. **Testimonials** — отзывы клиентов
10. **Pricing** — тарифные планы и FAQ
11. **CTA** — форма запроса демо

### Дизайн

- **Акцентный цвет**: `#1890ff` (единственный primary)
- **Фон**: белый / светло-серый (`#f5f5f5`)
- **Скругления**: 16px для карточек, 12px для кнопок
- **Тени**: мягкие, "дорогие" с оттенком primary

### Анимации

- Reveal секций при скролле (fade + translateY)
- Hover-эффекты на карточках (lift + shadow)
- Микро-анимации кнопок
- Плавающие SVG-элементы на Hero
- Прогресс-бары с анимированным заполнением

## Быстрый старт

### Установка

```bash
# Клонирование репозитория
git clone <repository-url>
cd workhere-landing

# Установка зависимостей
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
npm run start
```

### Линтинг

```bash
npm run lint
```

## Структура проекта

```
src/
├── app/
│   ├── globals.css      # Глобальные стили
│   ├── layout.tsx       # Корневой layout с мета-данными
│   └── page.tsx         # Главная страница
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Хедер с навигацией
│   │   └── Footer.tsx   # Футер
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Clients.tsx
│   │   ├── Features.tsx
│   │   ├── Funnel.tsx
│   │   ├── AIFeatures.tsx
│   │   ├── Integrations.tsx
│   │   ├── Analytics.tsx
│   │   ├── Security.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx   # Кнопка с анимацией
│       ├── Card.tsx     # Карточка с hover-эффектом
│       ├── Container.tsx
│       └── SectionTitle.tsx
```

## Брендинг

### Цветовая палитра (оттенки #1890ff)

| Название | HEX | Использование |
|----------|-----|---------------|
| Primary | `#1890ff` | Основной акцент |
| Primary Dark | `#0d6edb` | Hover состояния |
| Primary Light | `#40a9ff` | Вторичные элементы |
| Primary Lighter | `#69c0ff` | Графики, иконки |
| Primary Pale | `#91d5ff` | Фоны графиков |
| Primary Bg | `#e6f4ff` | Фоны карточек, бейджи |

### Типографика

- **Шрифт**: Inter (system fallback)
- **Заголовки**: font-bold, tracking-tight
- **Текст**: text-gray-600/700

## SEO

- Мета-теги для OpenGraph и Twitter
- Semantic HTML (header, main, section, footer)
- Быстрая загрузка (SSG, минимум ассетов)
- Доступность (ARIA-атрибуты, keyboard navigation)

## Лицензия

MIT
