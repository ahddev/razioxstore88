import BioCard from "@/components/ui/bio-cards";
import { Award, Clock, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="container text-center text-primary mx-auto">
      <div className="text-center py-8">
        <div className="lg:text-5xl md:text-4xl text-4xl md:leading-18 leading-14 md:my-6 my-4">
          من نحن
        </div>
        <div className="lg:text-xl md:w-[40vw] w-[80vw] mx-auto opacity-75 md:mt-8 mt-4">
          رازيو هو وجهتك الأولى لأجهزة الكمبيوتر المحمولة في دمشق. نقدم مجموعة
          واسعة من الأجهزة المحمولة من أفضل العلامات التجارية العالمية.{" "}
        </div>
      </div>

      <div className="lg:w-[62vw] md:w-[80vw] w-[90vw] mx-auto">
        <div className="my-0 md:flex md:gap-10 gap-6 text-center">
          <BioCard
            icon={Shield}
            heading={"ضمان الجودة"}
            description={
              "نقدم أجهزة عالية الجودة مع ضمان شامل وخدمة ما بعد البيع"
            }
          />
          <BioCard
            icon={Award}
            heading={"خبرة واسعة"}
            description={
              "فريق متخصص يساعدك في اختيار الجهاز المناسب لاحتياجاتك"
            }
          />
          <BioCard
            icon={Clock}
            heading={"دعم متواصل"}
            description={"نقدم الدعم الفني على مدار الساعة لجميع عملائنا"}
          />
        </div>

        <div className="border bg-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">قصتنا</h2>
          <p className="text-primary opacity-70 mb-4">
            تأسست رازيو بهدف تقديم أفضل تجربة شراء لأجهزة الكمبيوتر المحمولة في
            دمشق. نحن نؤمن بأن كل شخص يستحق الحصول على جهاز يناسب احتياجاته
            وميزانيته.
          </p>
          <p className="text-primary opacity-70">
            نحن نفخر بتقديم مجموعة واسعة من الخيارات مع خدمة عملاء استثنائية
            ودعم فني متخصص. هدفنا هو أن نكون الخيار الأول لكل من يبحث عن جهاز
            كمبيوتر محمول في سوريا.
          </p>
        </div>
      </div>
    </div>
  );
}
