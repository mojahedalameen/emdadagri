import React from 'react';
import { Users, LayoutDashboard, ShieldCheck, Activity, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

export const AdminDashboard = () => {
  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-[#212529] mb-1">الإدارة</h1>
          <p className="text-sm text-gray-500 font-medium">نظرة عامة بسيطة</p>
        </div>
        <button 
          onClick={() => toast.success('جاري إنشاء التقرير...')}
          className="bg-[#C5A028] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:bg-[#b08e23] hover:-translate-y-0.5 transition-all duration-300"
        >
          تقرير شامل
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 shrink-0">
        <div className="bg-white p-6 rounded-2xl border border-[#E0E0E0] shadow-sm relative overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-[#C5A028]"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-[#C5A028]/10 rounded-xl flex items-center justify-center text-[#C5A028] group-hover:bg-[#C5A028] group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-100 shadow-sm">
              <ArrowUpRight className="w-3 h-3" /> 12%
            </span>
          </div>
          <h3 className="text-3xl font-black text-[#212529] mb-1">1,240</h3>
          <p className="text-sm text-gray-500 font-bold">إجمالي المزارعين</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E0E0E0] shadow-sm relative overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-blue-500"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-100 shadow-sm">
              <ArrowUpRight className="w-3 h-3" /> 5%
            </span>
          </div>
          <h3 className="text-3xl font-black text-[#212529] mb-1">85</h3>
          <p className="text-sm text-gray-500 font-bold">مستشار معتمد</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E0E0E0] shadow-sm relative overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-orange-500"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Activity className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-100 shadow-sm">
              <ArrowUpRight className="w-3 h-3" /> 24%
            </span>
          </div>
          <h3 className="text-3xl font-black text-[#212529] mb-1">342</h3>
          <p className="text-sm text-gray-500 font-bold">مورد مسجل</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E0E0E0] shadow-sm relative overflow-hidden group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-[#2D5A27]"></div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-[#2D5A27]/10 rounded-xl flex items-center justify-center text-[#2D5A27] group-hover:bg-[#2D5A27] group-hover:text-white transition-colors">
              <LayoutDashboard className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-3xl font-black text-[#212529] mb-1">8.5M</h3>
          <p className="text-sm text-gray-500 font-bold">حجم التداولات (ر.س)</p>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-2xl border border-[#E0E0E0] shadow-sm overflow-hidden flex flex-col mb-2">
        <div className="p-5 border-b border-[#E0E0E0] shrink-0">
          <h2 className="text-lg font-bold text-[#212529]">تنبيهات النظام</h2>
        </div>
        <div className="p-5 flex-1 flex flex-col justify-start gap-4">
          <div className="flex items-center justify-between p-5 bg-red-50/50 rounded-xl border border-red-100 hover:bg-red-50 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-red-800">تراخيص معلقة</h4>
                <p className="text-xs text-red-600 font-medium mt-0.5">يوجد 5 موردين بانتظار الموافقة</p>
              </div>
            </div>
            <button 
              onClick={() => toast.success('تم فتح صفحة المراجعة')}
              className="bg-white text-red-700 px-5 py-2.5 rounded-xl text-sm font-bold border border-red-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-red-50 transition-all duration-300"
            >
              مراجعة
            </button>
          </div>

          <div className="flex items-center justify-between p-5 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-blue-800">استقرار النظام</h4>
                <p className="text-xs text-blue-600 font-medium mt-0.5">الخوادم تعمل بشكل طبيعي</p>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-xs font-bold">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};