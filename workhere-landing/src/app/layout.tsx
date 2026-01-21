import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WorkHere — Современная ATS для эффективного найма',
  description:
    'WorkHere — единая платформа для управления подбором персонала. Автоматизируйте рутину, управляйте воронкой, анализируйте эффективность. 14 дней бесплатно.',
  keywords: [
    'ATS',
    'рекрутинг',
    'подбор персонала',
    'HR',
    'автоматизация найма',
    'воронка подбора',
    'управление кандидатами',
  ],
  authors: [{ name: 'WorkHere' }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://workhere.ru',
    title: 'WorkHere — Современная ATS для эффективного найма',
    description:
      'Единая платформа для управления подбором персонала. Автоматизируйте рутину, управляйте воронкой, анализируйте эффективность.',
    siteName: 'WorkHere',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorkHere — Современная ATS для эффективного найма',
    description:
      'Единая платформа для управления подбором персонала. Автоматизируйте рутину, управляйте воронкой, анализируйте эффективность.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
