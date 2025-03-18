import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin", "arabic"], // Supports both Latin and Arabic scripts
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Choose weights you need
  variable: "--font-alexandria", // Custom CSS variable
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Razio لابتوب",
  description: "رازيو لأجهزة الكمبيوتر المحمولة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alexandria.variable} ${geistMono.variable} dark antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
