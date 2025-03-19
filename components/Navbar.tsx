import {
  Heart,
  Laptop,
  Laptop2,
  LogIn,
  LogOut,
  Menu,
  User,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="border flex w-[100vw] bg-accent py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Laptop2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold Alexandria text-primary">
              رازيو
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:flex items-center gap-2 hover:text-primary transition-colors"
          >
            <LogIn className="h-5 w-5" />
            <span>تسجيل دخول</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
