import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/alexandria"; // Import font globally


export const metadata: Metadata = {
  title: "Razio لابتوب",
  description: "Find the best laptops online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className="dark antialiased bg-background"
      >
        {children}
      </body>
    </html>
  );
}
