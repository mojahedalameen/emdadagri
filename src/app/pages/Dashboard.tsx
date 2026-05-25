import { useNavigate } from "react-router";
import { Check, X, Clock, MapPin, AlertCircle } from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col gap-6">
      {/* Welcome Section */}
      <section className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          أهلاً بك، م. خالد <span className="text-2xl" role="img" aria-label="waving">👋</span>
        </h2>
        <p className="text-sm text-gray-500">إليك ملخص أداءك ومواعيدك اليوم</p>
      </section>

      {/* Quick Stats (3 horizontal cards) */}
      <section className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-[12px] p-3 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-1">
          <span className="text-xs text-gray-500 font-medium">الاستشارات</span>
          <span className="text-lg font-bold text-gray-900">142</span>
        </div>
        <div className="bg-white rounded-[12px] p-3 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-1">
          <span className="text-xs text-gray-500 font-medium">التقييم</span>
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-gray-900">4.9</span>
            <span className="text-[#D4AF37] text-sm">⭐</span>
          </div>
        </div>
        <div className="bg-white rounded-[12px] p-3 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center gap-1">
          <span className="text-xs text-gray-500 font-medium">الرصيد</span>
          <span className="text-sm font-bold text-[#4CAF50]">4,500 ر.س</span>
        </div>
      </section>

      {/* Upcoming Appointment */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-gray-800">الموعد القادم</h3>
          <button onClick={() => navigate("/appointments")} className="text-sm text-[#D4AF37] font-medium">عرض الكل</button>
        </div>
        
        <div className="bg-white rounded-[12px] p-4 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] border-r-4 border-[#D4AF37] flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-xl">
                👨‍🌾
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-gray-900">فهد</span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3" />
                  <span>القصيم</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#FEF9C3] text-[#CA8A04] text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>04:00 م</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-1 bg-[#F9FAFB] p-3 rounded-lg">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> موضوع الاستشارة:
            </span>
            <span className="text-sm font-semibold text-gray-800">أمراض طماطم (اصفرار الأوراق)</span>
          </div>
          
          <button 
            onClick={() => navigate("/chat")}
            className="w-full bg-[#D4AF37] text-white font-bold py-3 rounded-[12px] mt-1 hover:bg-[#C29F31] transition-colors"
          >
            بدء الاستشارة
          </button>
        </div>
      </section>

      {/* New Requests */}
      <section className="flex flex-col gap-3">
        <h3 className="text-base font-bold text-gray-800">طلبات جديدة</h3>
        
        <div className="flex flex-col gap-3">
          {/* Request 1 */}
          <div className="bg-white rounded-[12px] p-3 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-lg">
                👳‍♂️
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">عبد الله</span>
                <span className="text-xs text-gray-500">تخطيط زراعي • غداً، 10:00 ص</span>
              </div>
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-[#4CAF50] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                <Check className="w-4 h-4" /> قبول
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                <X className="w-4 h-4" /> رفض
              </button>
            </div>
          </div>

          {/* Request 2 */}
          <div className="bg-white rounded-[12px] p-3 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-lg">
                🧑‍🌾
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">سعد</span>
                <span className="text-xs text-gray-500">مكافحة آفات • غداً، 01:30 م</span>
              </div>
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-[#4CAF50] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                <Check className="w-4 h-4" /> قبول
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                <X className="w-4 h-4" /> رفض
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}