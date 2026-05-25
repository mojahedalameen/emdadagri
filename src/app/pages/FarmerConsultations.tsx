import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Clock, Calendar, History, Star, MessageSquare, CalendarPlus, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

const consultants = [
  { id: 1, name: 'سالم', speciality: 'أراضٍ ومحاصيل', rating: 4.9, eta: 'يرد خلال 5 دقائق', type: 'instant', iconColor: 'bg-green-50 border border-green-100 text-green-700' },
  { id: 2, name: 'عبدالله', speciality: 'مكافحة آفات', rating: 4.7, eta: 'يرد خلال 10 دقائق', type: 'instant', iconColor: 'bg-blue-50 border border-blue-100 text-blue-700' },
  { id: 3, name: 'خالد', speciality: 'هندسة زراعية', rating: 4.8, eta: 'متاح غداً', type: 'scheduled', iconColor: 'bg-[#C5A028]/10 border border-[#C5A028]/20 text-[#C5A028]' },
  { id: 4, name: 'فهد', speciality: 'أسمدة وتغذية', rating: 5.0, eta: 'استشارة منتهية', type: 'previous', iconColor: 'bg-[#F8F9FA] border border-[#E0E0E0] text-gray-700' },
];

export const FarmerConsultations = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'instant';
  const prefillMsg = searchParams.get('msg');
  
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (prefillMsg) {
      toast.info(`تم تجهيز رسالتك: ${prefillMsg}`);
    }
  }, [prefillMsg]);

  const filteredConsultants = consultants.filter(c => c.type === activeTab);

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] font-sans">
      <div className="px-5 pt-5 pb-2 bg-white shrink-0 shadow-sm z-10 border-b border-[#E0E0E0]">
        <h1 className="text-xl font-bold text-[#212529] mb-5">الاستشارات الزراعية</h1>
        
        {/* Modern Tabs */}
        <div className="flex bg-[#F8F9FA] p-1.5 rounded-[16px] mb-2 border border-[#E0E0E0]">
          <button 
            onClick={() => setActiveTab('instant')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-[12px] transition-all duration-300 ${activeTab === 'instant' ? 'bg-white text-[#2D5A27] shadow-sm border border-[#E0E0E0]' : 'text-gray-500 hover:text-[#212529]'}`}
          >
            <Clock className="w-4 h-4" /> فورية
          </button>
          <button 
            onClick={() => setActiveTab('scheduled')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-[12px] transition-all duration-300 ${activeTab === 'scheduled' ? 'bg-white text-[#2D5A27] shadow-sm border border-[#E0E0E0]' : 'text-gray-500 hover:text-[#212529]'}`}
          >
            <Calendar className="w-4 h-4" /> مجدولة
          </button>
          <button 
            onClick={() => setActiveTab('previous')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-[12px] transition-all duration-300 ${activeTab === 'previous' ? 'bg-white text-[#2D5A27] shadow-sm border border-[#E0E0E0]' : 'text-gray-500 hover:text-[#212529]'}`}
          >
            <History className="w-4 h-4" /> السابقة
          </button>
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto no-scrollbar">
        {filteredConsultants.length > 0 ? (
          <div className="space-y-4 pb-8">
            {filteredConsultants.map((consultant) => (
              <div key={consultant.id} className="bg-white p-5 rounded-[16px] border border-[#E0E0E0] shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[#C5A028]/30 transition-all duration-300 flex flex-col gap-4 group">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-sm ${consultant.iconColor}`}>
                    {consultant.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-[#212529] text-[15px] group-hover:text-[#2D5A27] transition-colors">المستشار {consultant.name}</h3>
                      <div className="flex items-center gap-1 bg-[#F8F9FA] border border-[#E0E0E0] px-2 py-1 rounded-full text-[11px] font-bold text-[#212529] shadow-sm">
                        <Star className="w-3.5 h-3.5 text-[#C5A028] fill-[#C5A028]" />
                        {consultant.rating}
                      </div>
                    </div>
                    <p className="text-[13px] text-gray-500 font-medium">{consultant.speciality}</p>
                    <p className="text-[11px] text-[#2D5A27] font-bold mt-1.5">{consultant.eta}</p>
                  </div>
                </div>

                <div className="pt-1">
                  {activeTab === 'instant' && (
                    <button 
                      onClick={() => toast.success(`جاري الاتصال بالمستشار ${consultant.name}...`)}
                      className="w-full bg-[#2D5A27] text-white py-3 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#234a1f] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" /> ابدأ محادثة
                    </button>
                  )}
                  {activeTab === 'scheduled' && (
                    <button 
                      onClick={() => toast('تم فتح نافذة اختيار الموعد')}
                      className="w-full bg-[#2D5A27] text-white py-3 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#234a1f] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                    >
                      <CalendarPlus className="w-4 h-4" /> احجز موعد
                    </button>
                  )}
                  {activeTab === 'previous' && (
                    <button className="w-full bg-white text-[#212529] border border-[#E0E0E0] hover:bg-[#F8F9FA] hover:text-[#2D5A27] hover:border-[#2D5A27]/30 py-3 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm">
                      عرض التقرير <ChevronLeft className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[60vh] flex flex-col items-center justify-center text-center p-6">
            <div className="w-20 h-20 bg-[#F8F9FA] border border-[#E0E0E0] shadow-sm rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-gray-400" />
            </div>
            <p className="font-bold text-[#212529] text-lg mb-2">لا توجد استشارات</p>
            <p className="text-sm text-gray-500 font-medium">لم تقم بأي استشارات في هذا القسم بعد.</p>
          </div>
        )}
      </div>
    </div>
  );
};