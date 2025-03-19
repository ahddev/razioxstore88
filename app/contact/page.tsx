"use client"; // Mark this component as a Client Component

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "+963937005789"; // Replace with your actual WhatsApp number
  const whatsappMessage =
    "مرحباً، أود الاستفسار عن أجهزة الكمبيوتر المحمولة لديكم";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="bg-card text-card-foreground flex flex-col md:px-30 gap-6 rounded-xl border py-6 m-12 shadow-sm">
      <h1 className="text-4xl mb-8 text-center">اتصل بنا</h1>

      <div className="grid leading-12 md:grid-cols-2 gap-8">
        <div className="bg-dark-400 p-8 rounded-xl">
          <h2 className="text-2xl  mb-6">معلومات التواصل</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl">العنوان</h3>
                <p className="text-dark-200">دمشق، سوريا</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl">الهاتف</h3>
                <p className="text-dark-200" dir="ltr">
                  +963 937 005 789
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl">البريد الإلكتروني</h3>
                <p className="text-dark-200">razioxstore@gmail.com</p>
              </div>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="mt-8 w-full flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            تواصل معنا عبر واتساب
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
