import type { LucideIcon } from "lucide-react";
import { Home, Laptop, Info, Phone, LogIn, Monitor } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  variant?: "default" | "ghost";
}

export const navigationConfig: NavItem[] = [
  {
    title: "الصفحة الرئيسية",
    href: "/",
    icon: Home,
    variant: "ghost",
  },
  {
    title: "اللابتوبات",
    href: "/laptops",
    icon: Laptop,
    variant: "ghost",
  },
  {
    title: "الشاشات",
    href: "/more/monitors",
    icon: Monitor,
    variant: "ghost",
  },
  {
    title: "من نحن",
    href: "/about",
    icon: Info,
    variant: "ghost",
  },
  {
    title: "اتصل بنا",
    href: "/contact",
    icon: Phone,
    variant: "ghost",
  },
  {
    title: "تسجيل الدخول",
    href: "/login",
    icon: LogIn,
    variant: "ghost",
  },
];
