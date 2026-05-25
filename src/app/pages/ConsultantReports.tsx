import React, { useState } from 'react';
import { Search, FileText, Plus, Filter, MoreVertical, CheckCircle, Clock } from 'lucide-react';

const mockReports = [
  { id: 'REP-104', farmer: 'فهد', crop: 'نخيل', title: 'خطة مكافحة سوسة النخيل الحمراء', date: '2026/03/18', status: 'مسودة', type: 'زيارة ميدانية' },
  { id: 'REP-103', farmer: 'صالح', crop: 'طماطم', title: 'توصيات التسميد بالبوتاسيوم', date: '2026/03/16', status: 'مرسل', type: 'استشارة فيديو' },
  { id: 'REP-102', farmer: 'خالد', crop: 'حمضيات', title: 'علاج تصمغ الحمضيات', date: '2026/03/10', status: 'مرسل', type: 'استشارة نصية' },
  { id: 'REP-101', farmer: 'سعد', crop: 'قمح', title: 'برنامج الري الشتوي', date: '2026/03/05', status: 'مرسل', type: 'استشارة فيديو' },
];

export const ConsultantReports = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] font-sans" dir="rtl">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm border-b border-gray-100 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-xl font-bold text-gray-900">تقارير الاستشارات</h1>
          <p className="text-xs text-gray-500 mt-1">إدارة التقارير والتوصيات المرفوعة للمزارعين</p>
        </div>
        <button className="w-10 h-10 bg-emdad-gold text-white rounded-xl flex items-center justify-center shadow-lg shadow-emdad-gold/20 hover:scale-105 transition-transform">
          <Plus size={20} />
        </button>
      </div>

      {/* Search and Filter */}
      <div className="p-4 shrink-0 flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="ابحث باسم المزارع أو المحصول..." 
            className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emdad-gold/30 focus:border-emdad-gold shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="bg-white border border-gray-200 p-2.5 rounded-xl text-gray-600 shadow-sm hover:bg-gray-50">
          <Filter size={20} />
        </button>
      </div>

      {/* Reports List */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 flex flex-col gap-3">
        {mockReports.map((report) => (
          <div key={report.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-1.5 h-full ${report.status === 'مرسل' ? 'bg-green-500' : 'bg-orange-400'}`}></div>
            
            <div className="flex justify-between items-start pl-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  report.status === 'مرسل' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-500'
                }`}>
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{report.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium text-gray-500">{report.farmer}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-xs font-medium text-gray-500">{report.crop}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-50">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {report.date}
                </span>
                <span className="bg-gray-100 px-2 py-0.5 rounded-md font-medium">
                  {report.type}
                </span>
              </div>
              
              {report.status === 'مرسل' ? (
                <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
                  <CheckCircle size={14} />
                  <span>مرسل للمزارع</span>
                </div>
              ) : (
                <button className="text-xs font-bold text-emdad-gold bg-emdad-gold/10 px-3 py-1 rounded-lg">
                  استكمال المسودة
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};