"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Tables } from "@/database.types";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Monitors() {
  const [supabase] = useState(createClient());
  const [monitors, setMonitors] = useState<Tables<"monitors">[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query] = useState<string>();

  const HandleWhatsAppInquiry = (monitor: Tables<"monitors">) => {
    const message = `مرحباً، أود الاستفسار عن جهاز ${monitor.name} 
المواصفات: ${monitor.specs}`;

    const whatsappNumber = "+963937005789";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const _query = query
          ? await supabase
              .from("monitors")
              .select("*")
              .order("order", { ascending: false })
          : await supabase
              .from("monitors")
              .select("*")
              .order("order", { ascending: false });

        const { data, error } = _query;

        if (error) {
          console.error("Error fetching monitors:", error);
          return;
        }

        setMonitors(data);
      } catch (error) {
        console.error("Error in fetchData:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [supabase, query]);

  return (
    <div className="container mx-auto p-2">
      {isLoading ? (
        <div className="text-center text-2xl">Loading...</div>
      ) : (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {monitors?.map((x) => (
              <div
                key={x.id}
                className="pb-26 bg-card border-card rounded-xl shadow-lg overflow-hidden hover:shadow-md hover:scale-105 hover:rotate-1 transform transition-transform "
              >
                <Image
                  className="w-full object-cover "
                  src={x.images ?? ""}
                  alt={x.name ?? ""}
                  width={512}
                  height={512}
                />
                <div className="py-6 px-4">
                  <div dir="ltr" className="text-2xl">
                    {x.name}
                  </div>
                  <div dir="ltr" className="pt-2 text-primary/70">
                    <div>{x.specs}</div>
                  </div>
                </div>
                <div className="fixed bottom-6 right-4">
                  <div className="text-xl m-5">{x.price ?? " "}$</div>
                  <Button
                    onClick={() => HandleWhatsAppInquiry(x)}
                    className="cursor-pointer"
                  >
                    استفسار
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
