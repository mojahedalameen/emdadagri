import React from 'react';
import { Link, useNavigate } from 'react-router';
import { 
  Search, ShoppingCart, MessageSquarePlus, 
  Truck, RotateCcw, Sprout, Wheat, Droplets, 
  Tractor, ChevronLeft, Package
} from 'lucide-react';
import { toast } from 'sonner';

export const FarmerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 p-5 pb-8 font-sans">
      {/* Welcome Card - Solid Colors */}
      <div className="bg-[#2D5A27] text-white rounded-[16px] p-6 shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 translate-x-1/2 blur-xl"></div>
        <h1 className="text-2xl font-bold mb-1 relative z-10">مرحباً فهد،</h1>
        <p className="text-sm text-white/90 relative z-10">ماذا تحتاج لمزرعتك اليوم؟</p>
      </div>

      {/* Search Bar */}
      <div className="relative shadow-sm hover:shadow-md transition-shadow rounded-[16px]">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="ابحث عن بذور، أسمدة، معدات..." 
          className="w-full bg-white border border-[#E0E0E0] rounded-[16px] py-3.5 pr-11 pl-4 text-sm font-bold text-[#212529] placeholder:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:border-[#2D5A27] transition-all cursor-pointer hover:border-gray-300"
          onClick={() => navigate('/farmer/market')}
          readOnly
        />
      </div>

      {/* 4 Quick Action Buttons */}
      <div className="grid grid-cols-4 gap-3">
        <button onClick={() => navigate('/farmer/market')} className="flex flex-col items-center gap-2 group">
          <div className="w-[60px] h-[60px] bg-white border border-[#E0E0E0] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#C5A028]/30 group-active:scale-95 shadow-sm">
            <ShoppingCart className="w-6 h-6 text-[#2D5A27] group-hover:text-[#C5A028] transition-colors" />
          </div>
          <span className="text-[11px] font-bold text-[#212529] text-center">اطلب الآن</span>
        </button>
        <button onClick={() => navigate('/farmer/consultations?tab=instant')} className="flex flex-col items-center gap-2 group">
          <div className="w-[60px] h-[60px] bg-white border border-[#E0E0E0] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#C5A028]/30 group-active:scale-95 shadow-sm">
            <MessageSquarePlus className="w-6 h-6 text-[#2D5A27] group-hover:text-[#C5A028] transition-colors" />
          </div>
          <span className="text-[11px] font-bold text-[#212529] text-center">استشارة</span>
        </button>
        <button onClick={() => navigate('/farmer/orders')} className="flex flex-col items-center gap-2 group">
          <div className="w-[60px] h-[60px] bg-white border border-[#E0E0E0] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#C5A028]/30 group-active:scale-95 shadow-sm">
            <Truck className="w-6 h-6 text-[#2D5A27] group-hover:text-[#C5A028] transition-colors" />
          </div>
          <span className="text-[11px] font-bold text-[#212529] text-center">تتبع طلب</span>
        </button>
        <button onClick={() => {
          toast.success('تم إضافة طلبك السابق إلى السلة');
          navigate('/farmer/cart');
        }} className="flex flex-col items-center gap-2 group">
          <div className="w-[60px] h-[60px] bg-white border border-[#E0E0E0] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#C5A028]/30 group-active:scale-95 shadow-sm">
            <RotateCcw className="w-6 h-6 text-[#2D5A27] group-hover:text-[#C5A028] transition-colors" />
          </div>
          <span className="text-[11px] font-bold text-[#212529] text-center">إعادة طلب</span>
        </button>
      </div>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#212529]">التصنيفات</h2>
          <Link to="/farmer/market" className="text-xs font-bold text-[#C5A028] hover:text-[#2D5A27] transition-colors flex items-center p-1">
            الكل <ChevronLeft className="w-3 h-3 ml-1" />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-5 px-5 snap-x no-scrollbar">
          <button className="flex flex-col items-center justify-center min-w-[85px] h-[95px] bg-white rounded-[16px] shadow-sm border border-[#E0E0E0] snap-center hover:-translate-y-1 hover:shadow-md hover:border-[#2D5A27]/30 transition-all group">
            <Sprout className="w-7 h-7 text-[#2D5A27] mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-[#212529]">بذور</span>
          </button>
          <button className="flex flex-col items-center justify-center min-w-[85px] h-[95px] bg-white rounded-[16px] shadow-sm border border-[#E0E0E0] snap-center hover:-translate-y-1 hover:shadow-md hover:border-[#C5A028]/30 transition-all group">
            <Wheat className="w-7 h-7 text-[#C5A028] mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-[#212529]">أسمدة</span>
          </button>
          <button className="flex flex-col items-center justify-center min-w-[85px] h-[95px] bg-white rounded-[16px] shadow-sm border border-[#E0E0E0] snap-center hover:-translate-y-1 hover:shadow-md hover:border-blue-500/30 transition-all group">
            <Droplets className="w-7 h-7 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-[#212529]">مبيدات</span>
          </button>
          <button className="flex flex-col items-center justify-center min-w-[85px] h-[95px] bg-white rounded-[16px] shadow-sm border border-[#E0E0E0] snap-center hover:-translate-y-1 hover:shadow-md hover:border-gray-500/30 transition-all group">
            <Tractor className="w-7 h-7 text-gray-600 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold text-[#212529]">معدات</span>
          </button>
        </div>
      </section>

      {/* Suggested Products */}
      <section>
        <h2 className="text-lg font-bold text-[#212529] mb-4">مقترح لك</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Card 1 */}
          <Link to="/farmer/market/1" className="bg-white rounded-[16px] border border-[#E0E0E0] overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-md hover:border-[#C5A028]/30 transition-all duration-300">
            <div className="h-[140px] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1658992004251-78399f66f6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MzgyNzA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-sm font-bold text-[#212529] line-clamp-1 mb-1">بذور طماطم هجين</h3>
              <p className="text-[11px] text-gray-500 mb-3 font-medium">مؤسسة نماء الزراعية</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-[#2D5A27] text-[15px]">45 <span className="text-[10px] text-gray-500">ر.س</span></span>
                <button 
                  onClick={(e) => { e.preventDefault(); toast.success('تمت الإضافة إلى السلة'); }}
                  className="w-8 h-8 bg-[#F8F9FA] border border-[#E0E0E0] rounded-full flex items-center justify-center text-[#2D5A27] shadow-sm hover:bg-[#2D5A27] hover:text-white transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link to="/farmer/market/2" className="bg-white rounded-[16px] border border-[#E0E0E0] overflow-hidden flex flex-col group hover:-translate-y-1 hover:shadow-md hover:border-[#C5A028]/30 transition-all duration-300">
            <div className="h-[140px] w-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1696371269544-e2601fd835f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzczODI3MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-sm font-bold text-[#212529] line-clamp-1 mb-1">سماد يوريا 46%</h3>
              <p className="text-[11px] text-gray-500 mb-3 font-medium">الشركة السعودية للأسمدة</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-bold text-[#2D5A27] text-[15px]">120 <span className="text-[10px] text-gray-500">ر.س</span></span>
                <button 
                  onClick={(e) => { e.preventDefault(); toast.success('تمت الإضافة إلى السلة'); }}
                  className="w-8 h-8 bg-[#F8F9FA] border border-[#E0E0E0] rounded-full flex items-center justify-center text-[#2D5A27] shadow-sm hover:bg-[#2D5A27] hover:text-white transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Last Order */}
      <section>
        <h2 className="text-lg font-bold text-[#212529] mb-4">آخر طلب</h2>
        <Link to="/farmer/orders" className="bg-white p-4 rounded-[16px] border border-[#E0E0E0] flex items-center justify-between hover:-translate-y-0.5 hover:shadow-md hover:border-blue-500/30 transition-all duration-300 group shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] bg-[#F8F9FA] border border-[#E0E0E0] rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#212529] font-mono tracking-tight group-hover:text-blue-600 transition-colors">#ORD-4921</p>
              <p className="text-xs text-gray-500 mt-1 font-medium">3 منتجات • 450 ر.س</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2.5">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-bold rounded-full border border-blue-100">
              جاري التجهيز
            </span>
            <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </div>
        </Link>
      </section>
    </div>
  );
};