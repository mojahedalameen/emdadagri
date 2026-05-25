import React from 'react';
import { Truck, CheckCircle, Package, XCircle, Search, Filter } from 'lucide-react';

const mockOrders = [
  { id: 'ORD-9021', date: '12 مايو', farmer: 'فهد', location: 'القصيم', total: '6,500 ر.س', status: 'قيد التجهيز', action: 'تحديث' },
  { id: 'ORD-9020', date: '11 مايو', farmer: 'نورة', location: 'الخرج', total: '1,200 ر.س', status: 'جاري الشحن', action: 'تحديث' },
  { id: 'ORD-9019', date: '10 مايو', farmer: 'خالد', location: 'الرياض', total: '14,000 ر.س', status: 'مكتمل', action: 'الفاتورة' },
  { id: 'ORD-9018', date: '09 مايو', farmer: 'سعد', location: 'تبوك', total: '850 ر.س', status: 'مكتمل', action: 'الفاتورة' },
  { id: 'ORD-9017', date: '08 مايو', farmer: 'محمد', location: 'الأحساء', total: '3,200 ر.س', status: 'ملغى', action: 'التفاصيل' },
];

export const SupplierOrders = () => {
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'قيد التجهيز':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-50 text-yellow-600 border border-yellow-200 flex items-center gap-1.5 w-fit"><Package className="w-3.5 h-3.5" /> قيد التجهيز</span>;
      case 'جاري الشحن':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-200 flex items-center gap-1.5 w-fit"><Truck className="w-3.5 h-3.5" /> جاري الشحن</span>;
      case 'مكتمل':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-600 border border-green-200 flex items-center gap-1.5 w-fit"><CheckCircle className="w-3.5 h-3.5" /> مكتمل</span>;
      case 'ملغى':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-200 flex items-center gap-1.5 w-fit"><XCircle className="w-3.5 h-3.5" /> ملغى</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-50 text-gray-600 border border-gray-200">{status}</span>;
    }
  };

  const getActionButton = (action: string) => {
    const baseStyle = "text-xs font-bold px-4 py-1.5 rounded-lg transition-colors border";
    switch(action) {
      case 'تحديث':
        return <button className={`${baseStyle} text-[#D4AF37] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white`}>{action}</button>;
      case 'الفاتورة':
        return <button className={`${baseStyle} text-gray-600 border-gray-300 hover:bg-gray-100`}>{action}</button>;
      case 'التفاصيل':
        return <button className={`${baseStyle} text-gray-500 border-transparent hover:bg-gray-100 underline decoration-gray-300 underline-offset-4`}>{action}</button>;
      default:
        return <button className={baseStyle}>{action}</button>;
    }
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">إدارة الطلبات</h1>
          <p className="text-sm text-gray-500 mt-1">تتبع وإدارة جميع طلبات العملاء من المزارعين</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden flex-1">
        {/* Toolbar */}
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="ابحث برقم الطلب، اسم المزارع..." 
              className="w-full pl-4 pr-10 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37]"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4" />
            تصفية
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-white sticky top-0 z-10 text-gray-500 font-bold text-[13px] uppercase border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">رقم الطلب</th>
                <th className="px-6 py-4 whitespace-nowrap">التاريخ</th>
                <th className="px-6 py-4 whitespace-nowrap">المزارع</th>
                <th className="px-6 py-4 whitespace-nowrap">المنطقة</th>
                <th className="px-6 py-4 whitespace-nowrap">الإجمالي</th>
                <th className="px-6 py-4 whitespace-nowrap">الحالة</th>
                <th className="px-6 py-4 whitespace-nowrap">الإجراء</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockOrders.map((order, idx) => (
                <tr key={order.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'} hover:bg-gray-50/80 transition-colors`}>
                  <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 font-bold text-[#D4AF37]">{order.farmer}</td>
                  <td className="px-6 py-4 text-gray-500">{order.location}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                  <td className="px-6 py-4">{getActionButton(order.action)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
