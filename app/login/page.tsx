"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
export default function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="container md:mt-48 mt-40 md:w-100 w-[80vw] mx-auto">
      <div className="text-center text-red-500 text-sm">
        Sorry, this page is currently only for admins
      </div>
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl text-bold text-center">
            تسجيل الدخول
          </CardTitle>
        </CardHeader>
        <CardContent>
          <label>البريد الإلكتروني</label>
          <CardFooter className="flex-col">
            <div className="relative md:w-86 w-[66vw] ">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="my-4 mx-0"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />{" "}
            </div>
          </CardFooter>
        </CardContent>
        <CardFooter className="flex-col">
          <label className="text-right flex-1 self-start">كلمة السر</label>
          <div className="relative md:w-86 w-[66vw] ">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="my-4 "
            />
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />
          </div>
          <Button className="px-4 mt-6 cursor-pointer">تسجيل الدخول</Button>
        </CardFooter>
        <CardDescription className="mr-6 flex">
          {/* <div>اليس لديك حساب؟</div>
          <Link
            className="mr-2 text-white/75 underline hover:font-bold hover:text-white/100"
            href={"/register"}
          >
            أنشئ حساباً
          </Link> */}
        </CardDescription>
        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-accent-foreground to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          className="from-transparent via-secondary-foreground to-transparent"
        />
      </Card>
    </div>
  );
}
