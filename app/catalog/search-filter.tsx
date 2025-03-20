import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export interface  SearchProps {
  onChangeQueryParams: (query: string) => void
}
export default function SearchFilter(props: SearchProps) {

  return (
    <>
      <div className="container md:flex mx-auto px-4 py-8">
        <div className="bg-dark-400 rounded-xl mb-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative">
              <Input
                type="text"
                className="pl-10"
                placeholder="ابحث عن جهاز..."
                onChange={(e) => props.onChangeQueryParams(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />
            </div>  
          </div>
        </div>
        {/* <div className="flex">
          <label className=" sm:my-2 mx-3 mt-1 mb-2">العلامة التجارية</label>
          <Select>
            <SelectTrigger className="sm:w-[180px] w-[50vw]">
              <SelectValue placeholder="الكل" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">الكل</SelectItem>
              <SelectItem value="B">LENOVO</SelectItem>
              <SelectItem value="C">DELL</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </div>
    </>
  );
}
