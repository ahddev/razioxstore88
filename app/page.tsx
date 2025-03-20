import "@fontsource/ibm-plex-sans-arabic/400.css"; // Regular weight
import "@fontsource/ibm-plex-sans-arabic/700.css"; // Bold weight
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BioCard from "@/components/ui/bio-cards";
import { LaptopMinimal, Search, Star } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Home() {
  return (
    <div className="container text-center text-primary px-2 mx-auto">
      <div>
        <div className="text-center py-16">
          <BlurFade delay={0.25} inView>
            <div className="lg:text-7xl md:text-6xl text-4xl font-bold md:leading-18 leading-14 md:my-6 my-4">
              رازيو لأجهزة الكمبيوتر المحمولة
            </div>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <div className="lg:text-2xl opacity-75 md:mt-8 mt-4">
              اكتشف أفضل أجهزة الكمبيوتر المحمولة في دمشق
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 5} inView>
          <div className="md:m-10">
            <Link href={"/catalog"}>
              <Button className="text-xl p-0 w-50 h-16 cursor-pointer border-border">
                تصفح اللابتوبات
              </Button>
            </Link>
          </div>{" "}
        </BlurFade>

        <div className="md:mt-10 md:flex gap-10 text-center">
          <BlurFade delay={0.25 * 8} inView>
            <BioCard
              icon={LaptopMinimal}
              heading={"تشكيلة واسعة"}
              description={"مجموعة متنوعة من أفضل العلامات التجارية العالمية"}
            />
          </BlurFade>
          <BlurFade delay={0.25 * 9} inView>
            <BioCard
              icon={Search}
              heading={"بحث متقدم"}
              description={"ابحث حسب المواصفات والسعر والعلامة التجارية"}
            />
          </BlurFade>
          <BlurFade delay={0.25 * 10} inView>
            <BioCard
              icon={Star}
              heading={"خدمة متميزة"}
              description={"دعم فني متخصص ومساعدة في اختيار الجهاز المناسب"}
            />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
