import { Printer, MapPin, Package, CircleCheck, CircleDashed, Check } from "lucide-react";
import { useNavigate } from "react-router";

export function SupplierOrderDetails() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-[#D4AF37] transition-colors"
          >
            العودة
          </button>
          <div className="h-6 w-px bg-gray-300"></div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            طلب رقم #10452
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              جديد
            </span>
          </h1>
        </div>
        
        <button className="bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-colors text-gray-700 font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 shadow-sm">
          <Printer className="w-5 h-5" />
          طباعة الفاتورة
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Right Column (2/3 width on large screens) */}
        <div className="xl:col-span-2 flex flex-col gap-8">
          
          {/* Status Stepper */}
          <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-bold text-gray-900 mb-6">حالة الطلب</h2>
            
            <div className="relative flex items-center justify-between">
              {/* Line behind steps */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 rounded-full z-0">
                <div className="w-[10%] h-full bg-[#D4AF37] rounded-full"></div>
              </div>
              
              {/* Step 1: New */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 border-4 border-white">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold text-gray-900">طلب جديد</span>
              </div>
              
              {/* Step 2: Processing */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center shadow-sm border-4 border-gray-100">
                  <CircleDashed className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-500">جاري التجهيز</span>
              </div>
              
              {/* Step 3: Shipped */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center shadow-sm border-4 border-gray-100">
                  <Package className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-500">تم الشحن</span>
              </div>
              
              {/* Step 4: Completed */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-gray-400 flex items-center justify-center shadow-sm border-4 border-gray-100">
                  <CircleCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-500">مكتمل</span>
              </div>
            </div>
          </div>

          {/* Purchased Products Table */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E5E7EB]">
              <h2 className="text-lg font-bold text-gray-900">تفاصيل المنتجات</h2>
            </div>
            
            <div className="w-full overflow-x-auto">
              <table className="w-full text-right border-collapse">
                <thead className="bg-[#F3F4F6] text-gray-700 text-sm font-medium">
                  <tr>
                    <th className="px-6 py-3 border-b border-[#E5E7EB]">المنتج</th>
                    <th className="px-6 py-3 border-b border-[#E5E7EB]">الكمية</th>
                    <th className="px-6 py-3 border-b border-[#E5E7EB]">السعر الفردي</th>
                    <th className="px-6 py-3 border-b border-[#E5E7EB]">الإجمالي</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-800 bg-white divide-y divide-[#E5E7EB]">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        📦
                      </div>
                      <span className="font-bold text-gray-900">بذور طماطم هجينة F1</span>
                    </td>
                    <td className="px-6 py-4 font-medium">2 عبوة</td>
                    <td className="px-6 py-4 text-gray-500">150 ر.س</td>
                    <td className="px-6 py-4 font-bold text-gray-900">300 ر.س</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        💧
                      </div>
                      <span className="font-bold text-gray-900">سماد يوريا سائل 20 لتر</span>
                    </td>
                    <td className="px-6 py-4 font-medium">5 عبوات</td>
                    <td className="px-6 py-4 text-gray-500">190 ر.س</td>
                    <td className="px-6 py-4 font-bold text-gray-900">950 ر.س</td>
                  </tr>

                </tbody>
                
                {/* Table Footer / Summary */}
                <tfoot className="bg-[#F9FAFB]">
                  <tr>
                    <td colSpan={3} className="px-6 py-4 text-left font-medium text-gray-600">المجموع الفرعي:</td>
                    <td className="px-6 py-4 font-bold text-gray-900">1,250 ر.س</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="px-6 py-4 text-left font-medium text-gray-600 border-t border-[#E5E7EB]">ضريبة القيمة المضافة (15%):</td>
                    <td className="px-6 py-4 font-bold text-gray-900 border-t border-[#E5E7EB]">187.5 ر.س</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="px-6 py-5 text-left font-bold text-gray-900 text-base border-t border-[#E5E7EB]">الإجمالي الكلي:</td>
                    <td className="px-6 py-5 font-bold text-[#D4AF37] text-lg border-t border-[#E5E7EB]">1,437.5 ر.س</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          
        </div>

        {/* Left Column (1/3 width on large screens) */}
        <div className="flex flex-col gap-6">
          
          {/* Action Card */}
          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex flex-col gap-4">
            <h3 className="font-bold text-gray-900">تحديث حالة الطلب</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              تحديث الحالة سيقوم بإرسال إشعار للمزارع فورا. تأكد من جاهزية الشحنة قبل الانتقال للخطوة التالية.
            </p>
            
            <button className="w-full bg-[#D4AF37] hover:bg-[#C29F31] transition-colors text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 mt-2 shadow-md shadow-[#D4AF37]/20">
              <Check className="w-5 h-5" />
              تحديث إلى: جاري التجهيز
            </button>
            
            <button className="w-full bg-white border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-colors font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 mt-1">
              إلغاء الطلب
            </button>
          </div>

          {/* Farmer Info Card */}
          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-5">
            <h3 className="font-bold text-gray-900 border-b border-[#E5E7EB] pb-4">بيانات المزارع والتوصيل</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  👨‍🌾
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-xs text-gray-500 font-medium mb-1">اسم المزارع</span>
                  <span className="text-sm font-bold text-gray-900">خالد</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col pt-0.5">
                  <span className="text-xs text-gray-500 font-medium mb-1">موقع التوصيل</span>
                  <span className="text-sm font-bold text-gray-900 leading-tight">الرياض - العمارية</span>
                  <span className="text-xs text-gray-500 mt-1">المملكة العربية السعودية</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold py-2.5 px-4 rounded-lg border border-gray-200 transition-colors text-sm">
              عرض الموقع على الخريطة
            </button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}