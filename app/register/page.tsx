import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
export default function LogIn() {
  return (
    <div className="container mt-50 md:w-100 w-[80vw] mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-bold text-center">
            إنشاء حساب
          </CardTitle>
        </CardHeader>
        <CardContent>
          <label>الاسم الكامل</label>
          <CardFooter className="flex-col">
            <div className="relative md:w-86 w-[66vw] ">
              <Input className="my-4 mx-0" />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />
            </div>
          </CardFooter>
        </CardContent>
        <CardContent>
          <label>البريد الإلكتروني</label>
          <CardFooter className="flex-col">
            <div className="relative md:w-86 w-[66vw] ">
              <Input className="my-4 mx-0" />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />
            </div>
          </CardFooter>
        </CardContent>
        <CardFooter className="flex-col">
        <label className="text-right">كلمة السر</label>
          <div className="relative md:w-86 w-[66vw] ">
          <Input className="my-4 mx-0" />
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />
          </div>
        </CardFooter>
        <CardDescription className="mr-6 flex">
          <div>لديك حساب؟</div>
          <Link
            className="mr-2 text-white/75 underline hover:font-bold hover:text-white/100"
            href={"/login"}
          >
تسجيل الدخول          </Link>
        </CardDescription>
      </Card>
    </div>
  );
}
