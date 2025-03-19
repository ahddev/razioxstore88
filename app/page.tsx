import "@fontsource/ibm-plex-sans-arabic/400.css"; // Regular weight
import "@fontsource/ibm-plex-sans-arabic/700.css"; // Bold weight
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BioCard from "@/components/ui/bio-cards";
import { LaptopMinimal, Search, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="container text-center text-primary px-2 mx-auto">
      <div>
        <div className="text-center py-16">
          <div className="lg:text-7xl md:text-6xl text-4xl md:leading-18 leading-14 md:my-6 my-4">
            رازيو لأجهزة الكمبيوتر المحمولة
          </div>
          <div className="lg:text-2xl opacity-75 md:mt-8 mt-4">
            اكتشف أفضل أجهزة الكمبيوتر المحمولة في دمشق
          </div>
        </div>

        <div className="md:m-10">
          <Link href={"/catalog"}>
            <Button className="text-xl p-0 w-50 h-16 cursor-pointer border-border">
              تصفح اللابتوبات
            </Button>
          </Link>
        </div>

        <div className="md:mt-10 md:flex gap-10 text-center">
          <BioCard
            icon={LaptopMinimal}
            heading={"تشكيلة واسعة"}
            description={"مجموعة متنوعة من أفضل العلامات التجارية العالمية"}
          />
          <BioCard
            icon={Search}
            heading={"بحث متقدم"}
            description={"ابحث حسب المواصفات والسعر والعلامة التجارية"}
          />
          <BioCard
            icon={Star}
            heading={"خدمة متميزة"}
            description={"دعم فني متخصص ومساعدة في اختيار الجهاز المناسب"}
          />
        </div>
      </div>
    </div>
  );
}
