import type { Metadata } from "next";
import "./globals.css";
import { Alexandria } from 'next/font/google';

const alexandria = Alexandria({ 
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-alexandria',
  preload: true,
});

export const metadata: Metadata = {
  title: "Razio لابتوب",
  description: "Find the best laptops online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={alexandria.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-alexandria antialiased">{children}</body>
    </html>
  );
}