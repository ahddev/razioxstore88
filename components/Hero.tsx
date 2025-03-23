"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";
import { BorderBeam } from "./magicui/border-beam";
import BioCard from "./ui/bio-cards";
import { LaptopMinimal, Search, Star } from "lucide-react";
import { Particles } from "./magicui/particles";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="z-10 whitespace-pre-wrap text-center leading-none">
        <div className="text-center py-16">
          <BlurFade delay={0.25} inView>
            <div className="lg:text-7xl md:text-6xl text-4xl z-20 font-bold md:leading-18 leading-14 md:my-6 my-4">
              رازيو لأجهزة الكمبيوتر المحمولة
            </div>
            <div className="z-0"></div>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <div className="lg:text-2xl opacity-75 md:mt-8 mt-4">
              اكتشف أفضل أجهزة الكمبيوتر المحمولة في دمشق
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 3} inView>
          <div className="md:m-10">
            <Link href={"/catalog"}>
              <Button
                className="text-xl p-0 w-50 h-16 cursor-pointer  relative overflow-hidden"
                size="lg"
                variant="outline"
              >
                تصفح اللابتوبات
                <BorderBeam
                  size={250}
                  initialOffset={20}
                  className=" from-transparent via-yellow-500 to-transparent"
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                  }}
                />
              </Button>
            </Link>
          </div>{" "}
        </BlurFade>
        <div className="md:mt-10 md:flex gap-10 text-center">
          <BlurFade delay={0.25 * 5} inView>
            <BioCard
              icon={LaptopMinimal}
              heading={"تشكيلة واسعة"}
              description={"مجموعة متنوعة من أفضل العلامات التجارية العالمية"}
            />
          </BlurFade>
          <BlurFade delay={0.25 * 6} inView>
            <BioCard
              icon={Search}
              heading={"بحث متقدم"}
              description={"ابحث حسب المواصفات والسعر والعلامة التجارية"}
            />
          </BlurFade>
          <BlurFade delay={0.25 * 7} inView>
            <BioCard
              icon={Star}
              heading={"خدمة متميزة"}
              description={"دعم فني متخصص ومساعدة في اختيار الجهاز المناسب"}
            />
          </BlurFade>
        </div>
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
