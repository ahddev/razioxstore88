"use client";
import { createClient } from "@/utils/supabase/client";
// import { Button } from "@/components/ui/button";
import SearchFilter from "./search-filter";
import { useEffect, useState } from "react";
import { Tables } from "@/database.types";
import { BorderBeam } from "@/components/magicui/border-beam";
import { div, image } from "motion/react-client";
// import { MessageCircle } from "lucide-react";

export default function Catalog() {
  const [supabase] = useState(createClient());
  const [laptops, setLaptops] = useState<Tables<"laptops">[]>();

  useEffect(() => {
    const fetchData = async () => {
      const query = await supabase
        .from("laptops")
        .select("*")
        .order("order", { ascending: false });
      const data = query.data;

      if (!data) {
        return;
      }

      setLaptops(data);
    };

    fetchData();
  }, [supabase]);

  return (
    <div className="container mx-auto p-2">
      <SearchFilter />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {laptops?.map((x) => (
            <div className="bg-card border-card rounded-xl shadow-lg overflow-hidden hover:shadow-md hover:scale-105 hover:rotate-1 cursor-pointer transform transition-transform ">
              <img
                className="w-full object-cover "
                src={x.images ?? ""}
                alt={x.model ?? ""}
              />
              <div className="py-6 px-4" >
                <div dir="ltr" className="text-2xl">
                  {x.brand} {x.model}
                </div>
                <div dir="ltr" className="pt-2 text-primary/70">
                  <div>{x.processor}</div>
                  <div>{x.ram}</div>
                  <div>{x.storage}</div>
                  <div>{x.gpu}</div>
                  <div>{x.display}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
