import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WorkHere — ATS-платформа для управления наймом',
  description:
    'WorkHere — единая система для рекрутинга. Кандидаты, вакансии, воронки, коммуникации, аналитика — всё в одном месте. Автоматизируйте рутину.',
  keywords: [
    'ATS',
    'рекрутинг',
    'подбор персонала',
    'HR',
    'система управления кандидатами',
    'воронка подбора',
    'автоматизация найма',
  ],
  authors: [{ name: 'WorkHere' }],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://workhere.ru',
    title: 'WorkHere — ATS-платформа для управления наймом',
    description:
      'Единая система для рекрутинга. Кандидаты, вакансии, воронки, аналитика — всё в одном месте.',
    siteName: 'WorkHere',
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
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
