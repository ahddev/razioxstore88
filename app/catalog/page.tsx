"use client";
import { createClient } from "@/utils/supabase/client";
// import { Button } from "@/components/ui/button";
// import SearchFilter from "./search-filter";
import { useEffect, useState } from "react";
import { Tables } from "@/database.types";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Catalog() {
  const [supabase] = useState(createClient());
  const [laptops, setLaptops] = useState<Tables<"laptops">[]>();
  const [query] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const _query = query
        ? await supabase
            .from("laptops")
            .select("*")
            .textSearch("brand", query, {type: 'websearch'})
            .order("order", { ascending: false })
        : await supabase
            .from("laptops")
            .select("*")
            .order("order", { ascending: false });
            
      const data = _query.data;

      if (!data) {
        return;
      }

      setLaptops(data);
    };

    fetchData();
  }, [supabase, query]);

  return (
    <div className="container mx-auto p-2">
      {/* <SearchFilter onChangeQueryParams={setQuery} /> */}

      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {laptops?.map((x) => (
            <div
              key={x.id}
              className="bg-card border-card rounded-xl shadow-lg overflow-hidden hover:shadow-md hover:scale-105 hover:rotate-1 cursor-pointer transform transition-transform "
            >
              <Image
                className="w-full object-cover "
                src={x.images ?? ""}
                alt={x.model ?? ""}
                width={512}
                height={512}
              />
              <div className="py-6 px-4">
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
                <div className="text-xl m-5">{x.price ?? " "}</div>
              </div>
              <div>
                <Button>
                  استفسار
                  <MessageCircle />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
