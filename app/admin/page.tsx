import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Admin() {
  return (
    <div className="container mx-auto mt-10 px-4">
        
      <div className="text-3xl font-bold text-center">
      <div className="my-10 text-center text-red-500 text-sm">
        Sorry, this page is currently only for admins
      </div>
        بسم الله الرحمن الرحيم{" "}
      </div>

      <div dir="ltr" className="text-2xl font-bold text-center">
        Hello Admin 🔥
      </div>
      <div>
        <div className="text-xl text-center"> أضف لابتوب </div>
        <div className="mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <Input type="text" placeholder="الماركة BRAND" />
          <Input type="text" placeholder="الاسم NAME" />
          <Input type="text" placeholder="المعالج CPU" />
          <Input type="text" placeholder="الذاكرة RAM" />
          <Input type="text" placeholder="التخزين STORAGE" />
          <Input type="text" placeholder="الشاشة DISPLAY" />
          <Input type="text" placeholder="كرت الشاشة GPU" />
          <Input type="number" placeholder="السعر PRICE" />
          <Input type="file" placeholder="الصورة IMAGE" />
        </div>
        <Button className="w-20 mt-4">أضف</Button>
      </div>
      <div className="mt-10">
        <div className="text-xl text-center"> أضف منتجاً جديداً </div>
        <div className="mt-6 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <Select dir="rtl" >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="النوع TYPE" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monitor">شاشة</SelectItem>
              <SelectItem value="other">غير ذلك (قريبا)</SelectItem>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="الاسم NAME" />
          <Input type="text" placeholder="مواصفات DETAILS" />
          <Input type="number" placeholder="السعر PRICE" />
          <div>
            <Input type="file" placeholder="الصورة IMAGE" />
          </div>
        </div>
        <Button className="w-20 mt-4">أضف</Button>
      </div>
    </div>
  );
}
