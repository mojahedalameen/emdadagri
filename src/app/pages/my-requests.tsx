import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import * as LucideIcons from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const MyRequests = () => {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('consultationRequests') || '[]');
    setRequests(saved);
  }, []);

  const cancelRequest = (id: number) => {
    const updated = requests.filter(req => req.id !== id);
    setRequests(updated);
    localStorage.setItem('consultationRequests', JSON.stringify(updated));
  };

  return (
    <div className="py-12 bg-[#F7F8F5] min-h-screen" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D2A1F] mb-4">طلباتي</h1>
          <p className="text-[16px] text-[#667064]">تتبع طلبات الاستشارة التي أرسلتها</p>
        </div>

        {requests.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-[#E7E7E2] shadow-sm">
            <LucideIcons.ClipboardList className="w-16 h-16 text-[#C8A646] mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold text-[#1D2A1F] mb-2">لا توجد طلبات بعد</h3>
            <p className="text-[#667064] mb-8">ابدأ باستشارة أحد مهندسينا المتخصصين</p>
            <Link to="/consultations" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#1F5F2C] text-white rounded-full font-bold hover:bg-[#15411e] transition-all">
              تصفح المستشارين
              <LucideIcons.ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map(req => (
              <div key={req.id} className="bg-white p-6 rounded-[2rem] border border-[#E7E7E2] shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#f0f4f0] rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <ImageWithFallback 
                      src={req.engineerImage} 
                      alt={req.engineerName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#1D2A1F]">{req.engineerName}</h3>
                    <p className="text-[13px] text-[#667064]">{req.specialty}</p>
                  </div>
                </div>

                <div className="mb-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-[12px] font-bold rounded-full flex items-center gap-1.5">
                      <LucideIcons.Clock className="w-3.5 h-3.5" />
                      {req.status}
                    </span>
                  </div>
                  <div className="text-[14px] text-[#667064]">
                    <span className="font-bold text-[#1D2A1F]">الموضوع: </span> {req.topic}
                  </div>
                  <div className="text-[13px] text-[#667064]">
                    <span className="font-bold text-[#1D2A1F]">أُرسل: </span> 
                    {new Date(req.createdAt).toLocaleDateString('ar-SA')} الساعة {new Date(req.createdAt).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                <button 
                  onClick={() => cancelRequest(req.id)}
                  className="w-full py-2.5 bg-[#F7F8F5] text-[#667064] rounded-xl font-bold text-[14px] hover:bg-red-50 hover:text-red-600 transition-colors flex items-center justify-center gap-2"
                >
                  <LucideIcons.XCircle className="w-4 h-4" />
                  إلغاء الطلب
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
