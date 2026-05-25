import React, { useState } from 'react';
import { ChevronRight, Star, ShoppingCart, MessageCircle, Info, Package, ShieldCheck, Sprout } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';

export const FarmerProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product
  const product = {
    id: id,
    name: 'بذور طماطم هجين فائقة الجودة',
    supplier: 'مؤسسة نماء الزراعية',
    price: 45,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1658992004251-78399f66f6f4?w=800&q=80',
    available: true,
    stock: 50,
    description: 'بذور طماطم هجين مقاومة للأمراض تتحمل درجات الحرارة العالية، تعطي إنتاجية وفيرة وحبات متجانسة الحجم. مثالية للزراعة في البيوت المحمية والحقول المكشوفة.'
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    } else {
      toast('تم الوصول للحد الأدنى');
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] font-sans relative">
      {/* Header - Over Image */}
      <div className="absolute top-5 left-5 right-5 z-20 flex justify-between">
        <button onClick={() => navigate(-1)} className="w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300">
          <ChevronRight className="w-6 h-6 text-[#212529] mr-0.5" />
        </button>
        <button onClick={() => navigate('/farmer/cart')} className="w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/50 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 relative group">
          <ShoppingCart className="w-5 h-5 text-[#212529] group-hover:text-[#2D5A27] transition-colors" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-28 no-scrollbar">
        {/* Image */}
        <div className="h-[350px] w-full bg-gradient-to-br from-emerald-50 to-emerald-100/50 relative flex items-center justify-center border-b border-[#E0E0E0]">
          <div className="w-32 h-32 rounded-[2rem] bg-white border border-[#E0E0E0]/60 shadow-md flex items-center justify-center">
            <Sprout className="w-16 h-16 text-emerald-600" />
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-[#F8F9FA] -mt-6 rounded-t-[24px] relative px-5 pt-6 z-10 border-t border-[#E0E0E0] shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-start mb-3">
            <h1 className="text-[22px] font-bold text-[#212529] leading-snug flex-1 pl-4">{product.name}</h1>
            <div className="text-left shrink-0">
              <p className="text-2xl font-bold text-[#2D5A27]">{product.price}</p>
              <p className="text-[11px] font-bold text-gray-500">ر.س / عبوة</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border border-[#E0E0E0]">
              <Star className="w-4 h-4 text-[#C5A028] fill-[#C5A028]" />
              <span className="text-[13px] font-bold text-[#212529] pt-0.5">{product.rating}</span>
              <span className="text-[11px] font-medium text-gray-400">({product.reviews})</span>
            </div>
            <div className="flex items-center gap-1.5 text-[12px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-100 shadow-sm">
              <ShieldCheck className="w-4 h-4" /> متوفر
            </div>
          </div>

          <div className="bg-white rounded-[16px] p-4 border border-[#E0E0E0] mb-6 shadow-sm flex items-center gap-4 hover:border-[#C5A028]/30 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-[#F8F9FA] rounded-full flex items-center justify-center border border-[#E0E0E0] group-hover:bg-[#C5A028]/10 transition-colors">
              <Package className="w-6 h-6 text-[#212529] group-hover:text-[#C5A028] transition-colors" />
            </div>
            <div>
              <p className="text-[11px] text-gray-500 font-medium mb-0.5">المورد</p>
              <p className="text-[14px] font-bold text-[#212529] group-hover:text-[#C5A028] transition-colors">{product.supplier}</p>
            </div>
          </div>

          <div className="mb-8 bg-white p-5 rounded-[16px] border border-[#E0E0E0] shadow-sm">
            <h3 className="text-[15px] font-bold text-[#212529] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#C5A028]" /> تفاصيل المنتج
            </h3>
            <p className="text-[14px] text-gray-600 leading-relaxed font-medium">
              {product.description}
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-[15px] font-bold text-[#212529] mb-3">الكمية المطلوبة</h3>
            <div className="flex items-center justify-between bg-white p-1.5 rounded-full border border-[#E0E0E0] w-[140px] shadow-sm">
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-xl font-bold text-[#212529] hover:bg-[#2D5A27] hover:text-white transition-colors border border-transparent hover:border-[#2D5A27]"
              >
                +
              </button>
              <span className="w-8 text-center font-bold text-lg text-[#212529]">{quantity}</span>
              <button 
                onClick={handleDecrease}
                className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-xl font-bold text-[#212529] hover:bg-[#2D5A27] hover:text-white transition-colors border border-transparent hover:border-[#2D5A27]"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-[#E0E0E0] flex gap-3 shadow-[0_-8px_20px_-10px_rgba(0,0,0,0.05)] z-30 pb-safe">
        <button 
          onClick={() => {
            navigate(`/farmer/consultations?tab=instant&msg=استفسار بخصوص: ${product.name}`);
          }}
          className="flex items-center justify-center w-[54px] h-[54px] bg-[#F8F9FA] text-[#212529] border border-[#E0E0E0] rounded-[16px] hover:bg-white hover:text-[#C5A028] hover:border-[#C5A028] hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md shrink-0 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        <button 
          onClick={() => {
            toast.success('تمت الإضافة إلى السلة');
            navigate('/farmer/cart');
          }}
          className="flex-1 bg-[#2D5A27] text-white font-bold h-[54px] rounded-[16px] shadow-md hover:bg-[#234a1f] hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2 text-[15px]"
        >
          <ShoppingCart className="w-5 h-5" />
          أضف للسلة • {product.price * quantity} ر.س
        </button>
      </div>
    </div>
  );
};