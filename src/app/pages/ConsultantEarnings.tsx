import React from 'react';
import { Banknote, ArrowDownLeft, Calendar, FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const mockTransactions = [
  { id: 'TRX-992', date: '18 مارس 2026', type: 'استشارة فيديو', farmer: 'فهد', amount: '+150', status: 'مكتمل' },
  { id: 'TRX-991', date: '15 مارس 2026', type: 'زيارة ميدانية', farmer: 'صالح', amount: '+500', status: 'مكتمل' },
  { id: 'TRX-990', date: '10 مارس 2026', type: 'طلب سحب رصيد', farmer: 'تحويل بنكي', amount: '-1200', status: 'قيد المعالجة' },
  { id: 'TRX-989', date: '05 مارس 2026', type: 'استشارة نصية', farmer: 'خالد', amount: '+75', status: 'مكتمل' },
];

export const ConsultantEarnings = () => {
  return (
    <div className="flex flex-col h-full bg-[#F9FAFB] font-sans" dir="rtl">
      {/* Header */}
      <div className="bg-white px-5 py-4 shadow-sm border-b border-gray-100 shrink-0">
        <h1 className="text-xl font-bold text-gray-900">المستحقات المالية</h1>
        <p className="text-xs text-gray-500 mt-1">تتبع أرباحك وعمليات السحب</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Balance Card */}
        <div className="p-4 shrink-0">
          <div className="bg-emdad-dark text-white rounded-[24px] p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emdad-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 opacity-90">
                <Banknote size={18} />
                <span className="text-sm font-medium">الرصيد المتاح للسحب</span>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black">3,250</span>
                <span className="text-sm text-gray-300 font-medium">ر.س</span>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-emdad-gold text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#C29F31] transition-colors shadow-md shadow-emdad-gold/20">
                  <ArrowUpRight size={18} />
                  سحب الرصيد
                </button>
                <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors backdrop-blur-sm">
                  <FileText size={18} />
                  كشف حساب
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="px-4 grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-500">أرباح هذا الشهر</span>
            <div className="flex items-center gap-1 text-green-600">
              <span className="text-lg font-black">1,850</span>
              <span className="text-[10px]">ر.س</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[20px] shadow-sm border border-gray-100 flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-500">الاستشارات المكتملة</span>
            <div className="flex items-center gap-1 text-emdad-dark">
              <span className="text-lg font-black">24</span>
              <span className="text-[10px]">استشارة</span>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-t-[32px] shadow-[0_-4px_20px_rgba(0,0,0,0.02)] border-t border-gray-100 p-5 min-h-[400px]">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900">سجل العمليات</h2>
            <button className="text-xs font-bold text-emdad-gold flex items-center gap-1">
              <Calendar size={14} /> فلتر
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {mockTransactions.map((trx) => {
              const isIncome = trx.amount.startsWith('+');
              return (
                <div key={trx.id} className="flex items-center justify-between pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                      isIncome ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
                    }`}>
                      {isIncome ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">{trx.type}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-gray-500">{trx.farmer}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-[10px] text-gray-400">{trx.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-sm font-black ${isIncome ? 'text-green-600' : 'text-gray-900'}`} dir="ltr">
                      {trx.amount} ر.س
                    </span>
                    <span className={`text-[10px] font-bold flex items-center gap-1 ${
                      trx.status === 'مكتمل' ? 'text-green-600' : 'text-orange-500'
                    }`}>
                      {trx.status === 'مكتمل' && <CheckCircle2 size={10} />}
                      {trx.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};