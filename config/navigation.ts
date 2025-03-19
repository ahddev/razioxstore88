import type { LucideIcon } from "lucide-react";
import { Home, Users, Briefcase, Phone, LogIn } from "lucide-react";

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
    href: "/catalog",
    icon: Briefcase,
    variant: "ghost",
  },
  {
    title: "من نحن",
    href: "/about",
    icon: Users,
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
