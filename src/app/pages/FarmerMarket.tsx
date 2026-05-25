import React, { useState } from 'react';
import { Search, Star, ShoppingCart, Sprout, Leaf, FlaskConical, Wrench, Droplet, Boxes, SearchX } from 'lucide-react';
import { Link } from 'react-router';
import { toast } from 'sonner';

const products = [
  { id: 1, name: "بذور القمح الصلب - نجران", price: 240, supplier: "شركة نماء الزراعية", category: "بذور", rating: 4.8, available: true },
  { id: 2, name: "سماد عضوي فائق الجودة 50KG", price: 185, supplier: "مصنع الحصاد الذهبي", category: "أسمدة", rating: 4.9, available: true },
  { id: 3, name: "مبيد آفات زراعي واسع النطاق", price: 95, supplier: "شركة الياسين الزراعية", category: "مبيدات", rating: 4.5, available: true },
  { id: 4, name: "منظومة ري ذكية متكاملة", price: 1250, supplier: "شركة سنابل الريف", category: "ري", rating: 4.7, available: true },
  { id: 5, name: "بذور الذرة الصفراء الهجين", price: 120, supplier: "شركة نماء الزراعية", category: "بذور", rating: 4.6, available: true },
  { id: 6, name: "جهاز قياس رطوبة التربة الرقمي", price: 350, supplier: "معدات الجزيرة", category: "معدات", rating: 4.4, available: true },
  { id: 7, name: "مبيد فطري نحاسي مركز", price: 145, supplier: "شركة الياسين الزراعية", category: "مبيدات", rating: 4.3, available: true },
  { id: 8, name: "أنابيب ري 16mm لفة 400m", price: 680, supplier: "شركة سنابل الريف", category: "ري", rating: 4.8, available: true },
  { id: 9, name: "بذور طماطم هجين مقاومة للحرارة", price: 310, supplier: "شركة نماء الزراعية", category: "بذور", rating: 4.9, available: true },
  { id: 10, name: "سماد يوريا نيتروجيني 46%", price: 215, supplier: "مصنع الحصاد الذهبي", category: "أسمدة", rating: 4.7, available: true },
  { id: 11, name: "مبيد حشري بيولوجي آمن", price: 180, supplier: "شركة الياسين الزراعية", category: "مبيدات", rating: 4.6, available: true },
  { id: 12, name: "مضخة مياه زراعية 3 حصان", price: 2450, supplier: "معدات الجزيرة", category: "معدات", rating: 4.5, available: true }
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "بذور":
      return {
        bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/50",
        icon: <Sprout className="w-8 h-8 text-emerald-600" />
      };
    case "أسمدة":
      return {
        bg: "bg-gradient-to-br from-amber-50 to-amber-100/50",
        icon: <Leaf className="w-8 h-8 text-amber-600" />
      };
    case "مبيدات":
      return {
        bg: "bg-gradient-to-br from-rose-50 to-rose-100/50",
        icon: <FlaskConical className="w-8 h-8 text-rose-600" />
      };
    case "معدات":
      return {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
        icon: <Wrench className="w-8 h-8 text-blue-600" />
      };
    case "ري":
      return {
        bg: "bg-gradient-to-br from-sky-50 to-sky-100/50",
        icon: <Droplet className="w-8 h-8 text-sky-600" />
      };
    default:
      return {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100/50",
        icon: <Boxes className="w-8 h-8 text-purple-600" />
      };
  }
};

const categories = ['الكل', 'بذور', 'أسمدة', 'مبيدات', 'معدات', 'ري'];

export const FarmerMarket = () => {
  const [activeTab, setActiveTab] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeTab === "الكل" || product.category === activeTab;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.supplier.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] font-sans" dir="rtl">
      {/* Header Sticky */}
      <div className="pt-4 pb-3 bg-white shrink-0 flex flex-col gap-4 sticky top-0 z-10 shadow-sm border-b border-[#E0E0E0]">
        <div className="flex items-center gap-3 px-5">
          <div className="relative flex-1 group">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#2D5A27] transition-colors" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في السوق..." 
              className="w-full bg-[#F8F9FA] border border-[#E0E0E0] rounded-full py-2.5 pr-11 pl-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:border-[#2D5A27] transition-all hover:border-gray-300 shadow-sm"
            />
          </div>
        </div>
        
        {/* Pills Scroll */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5 snap-x no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 snap-center shadow-sm hover:-translate-y-0.5 ${
                activeTab === cat 
                  ? 'bg-[#2D5A27] text-white border border-[#2D5A27]' 
                  : 'bg-white border border-[#E0E0E0] text-gray-600 hover:text-[#2D5A27] hover:border-[#2D5A27]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="p-5 flex-1 overflow-y-auto no-scrollbar">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E0E0E0] shadow-sm">
            <SearchX className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#212529] mb-1">لا توجد نتائج مطابقة</h3>
            <p className="text-sm text-gray-500">جرب تغيير كلمة البحث أو تحديد فئة أخرى.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 pb-8">
            {filteredProducts.map((product) => {
              const styles = getCategoryStyles(product.category);
              return (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`} 
                  className="bg-white rounded-[16px] border border-[#E0E0E0] overflow-hidden flex flex-col hover:shadow-md hover:-translate-y-1 hover:border-[#C5A028]/30 transition-all duration-300 group shadow-sm"
                >
                  <div className={`relative h-[120px] w-full ${styles.bg} flex items-center justify-center overflow-hidden`}>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E0E0E0]/60 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {styles.icon}
                    </div>
                    {/* Rating Badge Overlay */}
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 shadow-sm border border-white/20">
                      <Star className="w-3 h-3 text-[#C5A028] fill-[#C5A028]" />
                      <span className="text-[10px] font-bold text-[#212529] pt-0.5">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 flex flex-col flex-1">
                    <h3 className="text-[13px] font-bold text-[#212529] line-clamp-2 mb-1 group-hover:text-[#2D5A27] transition-colors leading-tight h-8">{product.name}</h3>
                    <p className="text-[11px] text-gray-500 mb-3 font-medium line-clamp-1">{product.supplier}</p>
                    
                    <div className="mt-auto mb-3">
                      <span className="font-bold text-[#2D5A27] text-[16px]">{product.price} <span className="text-[10px] text-gray-500 font-bold">ر.س</span></span>
                    </div>

                    <button 
                      onClick={(e) => { 
                        e.preventDefault(); 
                        e.stopPropagation();
                        toast.success('تمت الإضافة إلى السلة'); 
                      }}
                      className="w-full py-2.5 rounded-[12px] text-[12px] font-bold flex items-center justify-center transition-all duration-300 shadow-sm bg-[#C5A028] text-white hover:bg-[#b08e23] hover:shadow-md hover:-translate-y-0.5"
                    >
                      أضف للسلة
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};