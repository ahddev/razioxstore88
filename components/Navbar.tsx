"use client";

import { Laptop2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-tolgge";
import { navigationConfig } from "@/config/navigation";
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Laptop2 className="h-6 w-6" />
            <span className="font-bold text-lg">رازيو</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            
            <Button variant="default" asChild>
              <Link href="/login">تسجيل الدخول</Link>
            </Button>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <Menu
                className="h-6 w-6 absolute transition-opacity duration-200"
                style={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <X
                className="h-6 w-6 absolute transition-opacity duration-200"
                style={{ opacity: isMenuOpen ? 1 : 0 }}
              />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden",
            "transition-all duration-200 ease-in-out",
            "overflow-hidden",
            isMenuOpen ? "max-h-64" : "max-h-0"
          )}
        >
          <div className="py-4 space-y-2">
            {navigationConfig.map((item) => (
              <Button
                key={item.href}
                variant={item.variant}
                asChild
                className={cn(
                  "w-full justify-start gap-2",
                  pathname === item.href && "bg-accent"
                )}
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
