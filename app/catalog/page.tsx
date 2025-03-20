import { Button } from "@/components/ui/button";
import SearchFilter from "./search-filter";
import { MessageCircle } from "lucide-react";

export default function Catalog() {
  interface Brand {
    id: string;
    name: string;
  }
  interface Laptop {
    id: string;
    brand_id: string;
    model: string;
    price: number;
    processor: string;
    ram: string;
    storage: string;
    display: string;
    gpu: string;
    images: string[];
    brand: Brand;
  }
  
  return (
    <div className="container mx-auto p-2">
      <SearchFilter />
      {/* <div className="p-4 rounded-xl mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
<div key={laptop.id} className="bg-card rounded-2xl overflow-hidden">
    <img src={laptop.images} alt={laptop.model} className="w-full h-32 sm:h-48 object-cover" />
<div className="p-4 sm:p-6">
    <div className="text-primary text-lg font-bold">{{laptop.brand.name} {laptop.name}}</div>
    <div className="flex-col space-y-1 md:space-y-2 mb-4 text-secondary text-sm md:text-base">
    <div>{laptop?.processor}</div>
    <div>{laptop?.ram}</div>
    <div>{laptop?.storage}</div>
    <div>{laptop?.gpu}</div>
    <div>{laptop?.display}</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                  <span className="text-lg md:text-xl font-bold text-primary">
                    ${laptop.price}
                  </span>
                  <Button>
                    <MessageCircle/>
                  </Button>
                  </div>
                  </div>
</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
