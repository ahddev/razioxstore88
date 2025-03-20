import "@fontsource/ibm-plex-sans-arabic/400.css"; // Regular weight
import "@fontsource/ibm-plex-sans-arabic/700.css"; // Bold weight
import BioCard from "@/components/ui/bio-cards";
import { LaptopMinimal, Search, Star } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="container text-center text-primary px-2 mx-auto">
      <Hero />

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
    </div>
  );
}
