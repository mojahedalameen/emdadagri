import { Plus, EllipsisVertical, Search, Filter } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SupplierProducts() {
  const products = [
    {
      id: 1,
      name: "بذور طماطم هجينة F1",
      price: "150 ر.س",
      stock: "450 عبوة",
      image: "https://images.unsplash.com/photo-1695690045524-534a4df1c525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBzZWVkcyUyMHBhY2tldHxlbnwxfHx8fDE3NzM3MzgwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "نشط"
    },
    {
      id: 2,
      name: "سماد يوريا سائل 20 لتر",
      price: "45 ر.س",
      stock: "120 لتر",
      image: "https://images.unsplash.com/photo-1759411364609-aeb30eb034e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYmFnJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzczNzM4MDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "نشط"
    },
    {
      id: 3,
      name: "مقص تقليم أشجار احترافي",
      price: "120 ر.س",
      stock: "85 حبة",
      image: "https://images.unsplash.com/photo-1661712663315-d851d40bcf07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwdG9vbHN8ZW58MXx8fHwxNzczNzM4MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: "منخفض"
    }
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">منتجاتي</h1>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-lg px-3 py-2 text-sm text-gray-600 shadow-sm">
            <Filter className="w-4 h-4 text-gray-400" />
            <span>تصفية</span>
          </div>
          
          <button className="bg-[#D4AF37] hover:bg-[#C29F31] transition-colors text-white font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 shadow-sm">
            إضافة منتج جديد <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
            {/* Image Area */}
            <div className="relative h-48 bg-gray-50 border-b border-[#E5E7EB] w-full">
              <ImageWithFallback 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-sm transition-colors border border-gray-100">
                  <EllipsisVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                  product.status === "نشط" 
                    ? "bg-[#DCFCE7] text-[#15803D]" 
                    : "bg-[#FEF9C3] text-[#B45309]"
                }`}>
                  {product.status === "نشط" ? "متاح" : "مخزون منخفض"}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col gap-3 flex-1">
              <h3 className="font-bold text-gray-900 text-base line-clamp-2">{product.name}</h3>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-[#D4AF37]">{product.price}</span>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500 font-medium mb-0.5">المخزون المتوفر</span>
                  <span className="text-sm font-bold text-gray-800">{product.stock}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Add New Placeholder Card */}
        <div className="bg-gray-50 rounded-[12px] border-2 border-dashed border-[#E5E7EB] flex flex-col items-center justify-center min-h-[300px] cursor-pointer hover:bg-gray-100 hover:border-[#D4AF37] transition-all group">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm mb-4 group-hover:scale-110 transition-transform">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-base font-bold text-gray-600">إضافة منتج جديد</span>
          <span className="text-sm text-gray-400 mt-1 text-center px-4">أضف منتج جديد لمحفظة منتجاتك</span>
        </div>
      </div>
    </div>
  );
}