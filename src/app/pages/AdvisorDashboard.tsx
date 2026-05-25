import { Calendar, Users, MessageSquare, Star, Clock, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function AdvisorDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900">مرحباً م. فهد، إليك ملخص نشاطك اليوم</h1>

      {/* KPI Cards */}
      <section className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">مواعيد اليوم</span>
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">4</span>
            <span className="text-sm text-blue-600 font-medium">استشارات</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">مزارعين تتابعهم</span>
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">12</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">رسائل غير مقروءة</span>
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">8</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">تقييمك</span>
            <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600">
              <Star className="w-5 h-5" fill="currentColor" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-sm text-gray-500">/ 5.0</span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <section className="lg:col-span-2 bg-white rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden">
          <div className="px-6 py-5 border-b border-[#E5E7EB] flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">جدول مواعيد اليوم</h2>
            <button className="text-sm font-medium text-[#1E3A8A] hover:underline">عرض الأسبوع</button>
          </div>
          
          <div className="flex flex-col p-2">
            {[
              { time: "09:00 ص", farmer: "خالد", topic: "نظام الري بالتنقيط", type: "مرئي" },
              { time: "11:30 ص", farmer: "سعد", topic: "مكافحة الآفات - الطماطم", type: "ميداني" },
              { time: "02:00 م", farmer: "نورة", topic: "استشارة بذور موسمية", type: "مرئي" },
              { time: "04:30 م", farmer: "فهد", topic: "نقص الكالسيوم في التربة", type: "محادثة" },
            ].map((appt, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors rounded-xl border border-transparent hover:border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center justify-center min-w-[80px] bg-gray-50 py-2 rounded-lg text-gray-600 border border-gray-100">
                    <span className="text-sm font-bold">{appt.time}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-gray-900 text-base">{appt.farmer}</span>
                    <span className="text-sm text-gray-500">{appt.topic}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    appt.type === 'مرئي' ? 'bg-blue-100 text-blue-700' : 
                    appt.type === 'ميداني' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {appt.type}
                  </span>
                  <button className="text-[#1E3A8A] hover:bg-blue-50 p-2 rounded-full transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Conversations */}
        <section className="bg-white rounded-xl border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden">
          <div className="px-6 py-5 border-b border-[#E5E7EB] flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">آخر المحادثات</h2>
            <button className="text-sm font-medium text-[#1E3A8A]" onClick={() => navigate('/advisor/chat')}>عرض الكل</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            {[
              { name: "خالد", lastMsg: "بانتظار وصول السماد..", time: "5د", avatar: "👨‍🌾", unread: true },
              { name: "فهد", lastMsg: "شكراً على النصيحة، ممتن لك", time: "1س", avatar: "👨‍🌾", unread: false },
              { name: "نورة", lastMsg: "هل يمكنني زراعة الباذنجان الآن؟", time: "3س", avatar: "👩‍🌾", unread: false },
            ].map((chat, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors rounded-xl cursor-pointer"
                onClick={() => navigate('/advisor/chat')}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl relative shrink-0">
                  {chat.avatar}
                  {chat.unread && <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-gray-900 truncate">{chat.name}</span>
                    <span className="text-[10px] text-gray-400 font-medium shrink-0">{chat.time}</span>
                  </div>
                  <p className={`text-xs truncate ${chat.unread ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                    {chat.lastMsg}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
