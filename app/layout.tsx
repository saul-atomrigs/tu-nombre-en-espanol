import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tu Nombre en Coreano',
  description: 'Descubre tu nombre en coreano y aprende el significado',
  keywords:
    'nombre coreano, significado de nombres, traducción de nombres, nombres en coreano, cómo se dice mi nombre en coreano, nombre en hangul, significado de nombres coreanos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <head>
        <meta name='keywords' content={metadata.keywords} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
