import React from 'react';
import { Wallet, ArrowDownLeft, ArrowUpRight, Download, FileText } from 'lucide-react';

const mockSettlements = [
  { id: 'SET-8821', date: '15 مايو', sales: '20,000', commission: '-1,600', net: '18,400', status: 'معلق' },
  { id: 'SET-8820', date: '01 مايو', sales: '150,000', commission: '-12,000', net: '138,000', status: 'تم التحويل' },
];

export const SupplierFinancials = () => {
  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">التقارير المالية والتسويات</h1>
          <p className="text-sm text-gray-500 mt-1">إدارة الأرصدة وعمليات السحب والتسويات الدورية</p>
        </div>
        <button className="bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
          <Download className="w-4 h-4" />
          تصدير التقرير
        </button>
      </div>

      {/* Available Balance Card */}
      <div className="bg-gradient-to-l from-[#D4AF37] to-[#C29F31] p-8 rounded-2xl shadow-lg shadow-[#D4AF37]/30 text-white shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="w-5 h-5 text-white/80" />
              <p className="text-sm font-bold text-white/90">الرصيد المتاح للسحب</p>
            </div>
            <h2 className="text-4xl font-black tracking-tight">124,500 <span className="text-lg font-bold text-white/80">ر.س</span></h2>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-[#D4AF37] px-6 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
              <ArrowUpRight className="w-4 h-4" />
              طلب سحب
            </button>
          </div>
        </div>
      </div>

      {/* Settlements Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden flex-1">
        <div className="p-5 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">سجل التسويات المالية</h2>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-white sticky top-0 z-10 text-gray-500 font-bold text-[13px] uppercase border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">رقم التسوية</th>
                <th className="px-6 py-4 whitespace-nowrap">التاريخ</th>
                <th className="px-6 py-4 whitespace-nowrap">إجمالي المبيعات</th>
                <th className="px-6 py-4 whitespace-nowrap">عمولة المنصة (8%)</th>
                <th className="px-6 py-4 whitespace-nowrap">الصافي للمورد</th>
                <th className="px-6 py-4 whitespace-nowrap">الحالة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockSettlements.map((item, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'} hover:bg-gray-50/80 transition-colors`}>
                  <td className="px-6 py-4 font-bold text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-600">{item.date}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{item.sales} ر.س</td>
                  <td className="px-6 py-4 font-bold text-red-500">{item.commission} ر.س</td>
                  <td className="px-6 py-4 font-black text-green-600">{item.net} ر.س</td>
                  <td className="px-6 py-4">
                    {item.status === 'معلق' ? (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-50 text-yellow-600 border border-yellow-200">معلق</span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-200">تم التحويل</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
