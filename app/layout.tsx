import "./globals.css";
import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/sidebar";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-alexandria",
  adjustFontFallback: true,
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
    <html lang="ar" dir="rtl" className={cn(alexandria.variable, "scroll-smooth")} suppressHydrationWarning>
      <body className="font-alexandria antialiased flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="">
            <Navbar />
          </div>
          <div className="flex mt-16">
            <Sidebar />
          </div>
          <main className="flex-1 lg:mr-[16vw] md:mr-[23vw]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
