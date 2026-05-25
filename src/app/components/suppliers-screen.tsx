import { Search, ShoppingBasket, Filter, MapPin } from "lucide-react";

export function SuppliersScreen() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <header className="mt-2">
        <h2 className="text-2xl font-bold">الموردين الزراعيين</h2>
        <p className="text-[#6B7280] text-sm mt-1">ابحث عن أفضل الموردين في منطقتك.</p>
      </header>

      <div className="relative">
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Search size={18} className="text-[#6B7280]" />
        </div>
        <input
          type="text"
          placeholder="ابحث عن شركة، مصنع، أو وكيل..."
          className="input-field pr-10"
        />
      </div>

      <div className="flex flex-col gap-4">
        <SupplierCard name="الشركة الوطنية الزراعية" category="بذور وأسمدة" location="الرياض" rating={4.9} />
        <SupplierCard name="سافكو للكيماويات" category="كيماويات زراعية" location="الجبيل" rating={4.8} />
        <SupplierCard name="مصنع البلاستيك الوطني" category="أنابيب ري" location="جدة" rating={4.7} />
        <SupplierCard name="الشركة الحديثة للزراعة" category="معدات ثقيلة" location="الدمام" rating={4.6} />
      </div>
    </div>
  );
}

function SupplierCard({ name, category, location, rating }: { name: string; category: string; location: string; rating: number }) {
  return (
    <div className="card flex items-center justify-between hover:border-[#D4AF37] border border-transparent transition-all">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
           <ShoppingBasket size={24} className="text-[#D4AF37]" />
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-[10px] text-[#6B7280]">{category}</p>
          <div className="flex items-center gap-1 mt-1">
             <MapPin size={10} className="text-gray-400" />
             <span className="text-[10px] text-gray-500">{location}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
         <span className="text-[#D4AF37] font-bold text-sm">{rating} ★</span>
         <span className="text-xs text-gray-500">متوفر في السوق</span>
      </div>
    </div>
  );
}
