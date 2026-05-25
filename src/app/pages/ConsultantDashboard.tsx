import React, { useState } from 'react';
import { 
  CalendarDays, MessageSquare, FileText, 
  Banknote, TrendingUp, Clock, ChevronLeft,
  Check, X, AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const ConsultantDashboard = () => {
  const navigate = useNavigate();

  const [todayAppointments, setTodayAppointments] = useState([
    { id: 1, name: 'فهد', time: '10:00 ص', type: 'استشارة فورية', crop: 'نخيل' },
    { id: 2, name: 'صالح', time: '01:30 م', type: 'زيارة ميدانية', crop: 'طماطم' },
  ]);

  const [newRequests, setNewRequests] = useState([
    { id: 3, name: 'خالد', type: 'استشارة فيديو', crop: 'حمضيات' },
  ]);

  const [showRejectModal, setShowRejectModal] = useState<number | null>(null);

  const recentReports = [
    { id: 101, title: 'تقرير مكافحة سوسة النخيل', date: '2026/03/17', status: 'مكتمل' },
    { id: 102, title: 'توصيات التسميد الموسمي', date: '2026/03/16', status: 'مسودة' },
  ];

  const handleAcceptRequest = (id: number) => {
    setNewRequests(prev => prev.filter(req => req.id !== id));
    toast.success('تم قبول طلب الاستشارة بنجاح');
  };

  const handleRejectRequest = (id: number) => {
    setNewRequests(prev => prev.filter(req => req.id !== id));
    setShowRejectModal(null);
    toast.success('تم رفض طلب الاستشارة');
  };

  return (
    <div className="flex flex-col gap-6 p-5 pb-8 font-sans" dir="rtl">
      {/* Welcome Card */}
      <div className="bg-[#2D5A27] text-white rounded-[24px] p-6 shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold mb-1">أهلاً، م. أحمد</h1>
            <p className="text-sm text-white/80">لديك {todayAppointments.length} مواعيد اليوم</p>
          </div>
          <div className="w-14 h-14 bg-[#C5A028] rounded-full flex items-center justify-center border-2 border-white/20 shadow-sm">
            <UserIcon />
          </div>
        </div>
      </div>

      {/* New Requests Section */}
      {newRequests.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#212529] flex items-center gap-2">
              الطلبات الجديدة
              <span className="bg-red-50 border border-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm">{newRequests.length}</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-3">
            {newRequests.map((req) => (
              <div key={req.id} className="bg-white p-4 rounded-[16px] border border-orange-100 shadow-sm flex flex-col gap-3 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-full flex items-center justify-center text-lg shadow-sm">
                    👨‍🌾
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#212529]">{req.name}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-gray-500 bg-[#F8F9FA] border border-[#E0E0E0] px-2 py-0.5 rounded-full font-medium">{req.crop}</span>
                      <span className="text-[11px] text-gray-500 font-medium">{req.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAcceptRequest(req.id)}
                    className="flex-1 bg-[#2D5A27] text-white text-[11px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-1 hover:bg-[#234a1f] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                  >
                    <Check size={14} /> قبول
                  </button>
                  <button 
                    onClick={() => setShowRejectModal(req.id)}
                    className="flex-1 bg-[#F8F9FA] text-[#212529] border border-[#E0E0E0] hover:bg-red-50 hover:text-red-600 hover:border-red-100 text-[11px] font-bold py-2.5 rounded-xl flex items-center justify-center gap-1 transition-all duration-300 shadow-sm"
                  >
                    <X size={14} /> رفض
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Stats Quick Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-[20px] border border-[#E0E0E0] flex flex-col gap-1 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
          <div className="w-8 h-8 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-1 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <MessageSquare size={18} />
          </div>
          <span className="text-lg font-bold text-[#212529]">24</span>
          <span className="text-[11px] font-bold text-gray-500">استشارة هذا الشهر</span>
        </div>
        <div className="bg-white p-4 rounded-[20px] border border-[#E0E0E0] flex flex-col gap-1 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
          <div className="w-8 h-8 bg-[#C5A028]/10 border border-[#C5A028]/20 text-[#C5A028] rounded-lg flex items-center justify-center mb-1 group-hover:bg-[#C5A028] group-hover:text-white transition-colors">
            <Banknote size={18} />
          </div>
          <span className="text-lg font-bold text-[#C5A028]">3,250</span>
          <span className="text-[11px] font-bold text-gray-500">مستحقات (ر.س)</span>
        </div>
      </div>

      {/* Today's Schedule */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#212529]">جدول اليوم</h2>
          <button onClick={() => navigate('/consultant/appointments')} className="text-xs font-bold text-[#C5A028] hover:text-[#2D5A27] transition-colors flex items-center">
            الكل <ChevronLeft className="w-3 h-3 ml-1" />
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {todayAppointments.map((app) => (
            <div key={app.id} className="bg-white p-4 rounded-[16px] border border-[#E0E0E0] flex items-center justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F8F9FA] border border-[#E0E0E0] rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#2D5A27] transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#212529] group-hover:text-[#2D5A27] transition-colors">{app.name}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[11px] text-gray-500 font-medium bg-[#F8F9FA] border border-[#E0E0E0] px-2 py-0.5 rounded-full">{app.crop}</span>
                    <span className="text-[11px] text-[#C5A028] font-bold">{app.time}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/chat')}
                className="text-[11px] font-bold text-[#2D5A27] bg-[#F8F9FA] border border-[#E0E0E0] hover:bg-[#2D5A27] hover:text-white hover:border-[#2D5A27] px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
              >
                بدء
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reports Summary */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#212529]">التقارير الأخيرة</h2>
          <button onClick={() => navigate('/consultant/reports')} className="text-xs font-bold text-[#C5A028] hover:text-[#2D5A27] transition-colors flex items-center">
            إدارة <ChevronLeft className="w-3 h-3 ml-1" />
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {recentReports.map((report) => (
            <div key={report.id} className="bg-white p-4 rounded-[16px] border border-[#E0E0E0] flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <FileText size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#212529] group-hover:text-[#C5A028] transition-colors">{report.title}</h3>
                <p className="text-[11px] text-gray-400 mt-1 font-medium">{report.date}</p>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1.5 rounded-full border shadow-sm ${
                report.status === 'مكتمل' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-[#F8F9FA] text-gray-600 border-[#E0E0E0]'
              }`}>
                {report.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Action */}
      <button className="mt-4 w-full bg-[#C5A028] text-white font-bold py-4 rounded-[16px] shadow-md hover:shadow-lg hover:bg-[#b08e23] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
        <TrendingUp size={20} />
        تحسين أداء حسابي
      </button>

      {/* Reject Modal */}
      {showRejectModal !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E0E0E0] w-full max-w-[320px] p-6 flex flex-col items-center text-center animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-red-50 border border-red-100 rounded-full flex items-center justify-center text-red-500 mb-4 shadow-inner">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#212529] mb-2">رفض الطلب</h3>
            <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed">
              هل أنت متأكد من رغبتك في رفض طلب الاستشارة؟
            </p>
            <div className="flex w-full gap-3">
              <button 
                onClick={() => handleRejectRequest(showRejectModal)}
                className="flex-1 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                تأكيد الرفض
              </button>
              <button 
                onClick={() => setShowRejectModal(null)}
                className="flex-1 bg-white text-[#212529] border border-[#E0E0E0] font-bold py-3 rounded-xl hover:bg-[#F8F9FA] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                تراجع
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

