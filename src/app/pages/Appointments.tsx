import { useState } from "react";
import { Calendar as CalendarIcon, Clock, CircleCheck, EllipsisVertical, Video } from "lucide-react";
import { useNavigate } from "react-router";

export function Appointments() {
  const navigate = useNavigate();
  const [activeDay, setActiveDay] = useState(14);

  const weekDays = [
    { name: "الأحد", day: 12 },
    { name: "الإثنين", day: 13 },
    { name: "الثلاثاء", day: 14 },
    { name: "الأربعاء", day: 15 },
    { name: "الخميس", day: 16 },
    { name: "الجمعة", day: 17 },
  ];

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA]">
      {/* Weekly Calendar Strip */}
      <div className="bg-white px-4 py-3 shadow-sm border-b border-[#E0E0E0]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-[#212529]">مارس 2026</h2>
          <CalendarIcon className="w-4 h-4 text-gray-500" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar justify-between">
          {weekDays.map((date, idx) => {
            const isActive = date.day === activeDay;
            return (
              <button 
                key={idx}
                onClick={() => setActiveDay(date.day)}
                className={`flex flex-col items-center justify-center min-w-[50px] p-2 rounded-xl transition-all duration-300 shrink-0 ${
                  isActive 
                    ? "bg-[#C5A028] text-white shadow-md border border-[#C5A028] hover:-translate-y-0.5" 
                    : "bg-[#F8F9FA] text-gray-500 hover:bg-white border border-[#E0E0E0] hover:border-[#C5A028]/30 hover:text-[#C5A028] hover:shadow-sm"
                }`}
              >
                <span className={`text-[10px] font-bold ${isActive ? "text-white" : "text-gray-400"}`}>
                  {date.name}
                </span>
                <span className="text-sm font-bold mt-1">{date.day}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        
        {activeDay === 14 ? (
          <>
            {/* Pending Appointment */}
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-[#212529] mb-1">بانتظار التأكيد</h3>
              <div className="bg-white rounded-[12px] p-4 shadow-sm hover:shadow-md border border-[#E0E0E0] border-r-4 border-r-[#F59E0B] flex flex-col gap-3 transition-all duration-300 group hover:-translate-y-0.5">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-full flex items-center justify-center text-lg shadow-sm">
                      👳‍♂️
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#212529] group-hover:text-orange-600 transition-colors">عبد الله</span>
                      <span className="text-xs text-gray-500 font-medium">استشارة زراعية عامة</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-[#212529] transition-colors p-1 bg-[#F8F9FA] rounded-full hover:bg-white border border-transparent hover:border-[#E0E0E0] shadow-sm">
                    <EllipsisVertical className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 font-bold bg-[#F8F9FA] px-2 py-1 rounded-full border border-[#E0E0E0]">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>10:00 ص - 10:30 ص</span>
                  </div>
                  <div className="bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A] px-2 py-1 rounded-full text-[10px] font-bold shadow-sm">
                    بانتظار التأكيد
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Appointment */}
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-sm font-bold text-[#212529] mb-1">مكتملة</h3>
              <div className="bg-white rounded-[12px] p-4 shadow-sm border border-[#E0E0E0] border-r-4 border-r-[#2D5A27] flex flex-col gap-3 transition-all duration-300 opacity-90 hover:opacity-100 group">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 border border-green-100 rounded-full flex items-center justify-center text-lg shadow-sm">
                      👨‍🌾
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#212529] group-hover:text-[#2D5A27] transition-colors">محمد</span>
                      <span className="text-xs text-gray-500 font-medium">نقص عناصر غذائية</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-[#212529] transition-colors p-1 bg-[#F8F9FA] rounded-full hover:bg-white border border-transparent hover:border-[#E0E0E0] shadow-sm">
                    <EllipsisVertical className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 font-bold bg-[#F8F9FA] px-2 py-1 rounded-full border border-[#E0E0E0]">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>08:00 ص - 08:30 ص</span>
                  </div>
                  <div className="bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0] px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                    <CircleCheck className="w-3 h-3" /> مكتمل
                  </div>
                </div>
              </div>
            </div>
            
            {/* Placeholder for no more appointments */}
            <div className="mt-8 text-center flex flex-col items-center justify-center opacity-70">
              <div className="w-12 h-12 bg-white border border-[#E0E0E0] rounded-full flex items-center justify-center shadow-sm mb-3">
                 <CalendarIcon className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 font-bold">لا توجد مواعيد أخرى لهذا اليوم</p>
            </div>
          </>
        ) : activeDay === 15 ? (
          <>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-[#212529] mb-1">مواعيد مؤكدة</h3>
              <div className="bg-white rounded-[12px] p-4 shadow-sm border border-[#E0E0E0] border-r-4 border-r-[#2D5A27] flex flex-col gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2D5A27]/10 border border-[#2D5A27]/20 rounded-full flex items-center justify-center text-lg shadow-sm">
                      👨‍🌾
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#212529] group-hover:text-[#2D5A27] transition-colors">فهد</span>
                      <span className="text-xs text-gray-500 font-medium">استشارة فيديو - نخيل</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-[#212529] transition-colors p-1 bg-[#F8F9FA] rounded-full hover:bg-white border border-transparent hover:border-[#E0E0E0] shadow-sm">
                    <EllipsisVertical className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 font-bold bg-[#F8F9FA] px-2 py-1 rounded-full border border-[#E0E0E0]">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>10:00 ص - 10:30 ص</span>
                  </div>
                  <button 
                    onClick={() => navigate('/chat')}
                    className="bg-[#2D5A27] text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 hover:bg-[#234a1f] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                  >
                    <Video className="w-3.5 h-3.5" /> بدء الاستشارة
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-12 text-center flex flex-col items-center justify-center opacity-70">
            <div className="w-16 h-16 bg-white border border-[#E0E0E0] rounded-full flex items-center justify-center shadow-sm mb-4">
              <CalendarIcon className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500 font-bold">لا توجد مواعيد مجدولة في هذا اليوم</p>
          </div>
        )}

      </div>
    </div>
  );
}