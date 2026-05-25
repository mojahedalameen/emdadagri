import { Download, Wallet, ArrowLeftRight, Landmark } from "lucide-react";
import { toast } from "sonner";

export function AdminFinance() {
  const settlements = [
    { id: 1, entity: "الياسين الزراعية", type: "مبيعات بذور", total: 15000, commission: 1200, net: 13800, status: "pending" },
    { id: 2, entity: "سعد (مستشار)", type: "استشارة", total: 300, commission: 24, net: 276, status: "completed" },
    { id: 3, entity: "شركة أراسكو", type: "مبيعات أسمدة", total: 42000, commission: 3360, net: 38640, status: "pending" },
    { id: 4, entity: "خالد (مستشار)", type: "استشارة", total: 150, commission: 12, net: 138, status: "completed" },
  ];

  return (
    <div className="flex flex-col gap-8 h-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-[#212529]">العمليات المالية وعمولات المنصة</h1>
        
        <button 
          onClick={() => toast.success("تم تصدير التقرير بنجاح")}
          className="bg-white border border-[#E0E0E0] hover:bg-[#F8F9FA] hover:-translate-y-0.5 transition-all duration-300 text-[#212529] font-bold py-2.5 px-5 rounded-lg flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:border-[#C5A028]/30"
        >
          <Download className="w-5 h-5 text-[#2D5A27]" />
          تصدير التقرير (CSV)
        </button>
      </div>

      {/* Financial KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2D5A27] p-6 rounded-2xl shadow-md flex items-center justify-between text-white border border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white/80">إجمالي عمولات إمداد</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">120,000</span>
              <span className="text-base font-medium text-white/80">ر.س</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-[#C5A028] flex items-center justify-center border-2 border-white/20 shadow-sm">
            <Wallet className="w-7 h-7 text-white" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E0E0E0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-500">مستحقات الموردين المعلقة</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#212529]">45,000</span>
              <span className="text-base font-medium text-gray-500">ر.س</span>
            </div>
          </div>
          <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors shadow-sm">
            <ArrowLeftRight className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
          </div>
        </div>
      </section>

      {/* Settlements Table */}
      <section className="bg-white rounded-[16px] border border-[#E0E0E0] shadow-sm overflow-hidden flex-1 flex flex-col">
        <div className="px-6 py-5 border-b border-[#E0E0E0] flex items-center justify-between bg-white shrink-0">
          <h2 className="text-lg font-bold text-[#212529]">جدول التسويات المعلقة والأخيرة</h2>
        </div>
        
        <div className="w-full overflow-x-auto flex-1">
          <table className="w-full text-right border-collapse">
            <thead className="bg-[#F8F9FA] text-gray-600 text-sm font-bold border-b border-[#E0E0E0]">
              <tr>
                <th className="px-6 py-4 whitespace-nowrap">الجهة / الاسم</th>
                <th className="px-6 py-4 whitespace-nowrap">نوع العملية</th>
                <th className="px-6 py-4 whitespace-nowrap">إجمالي المبلغ</th>
                <th className="px-6 py-4 whitespace-nowrap">عمولة إمداد (8%)</th>
                <th className="px-6 py-4 whitespace-nowrap">الصافي للمستفيد</th>
                <th className="px-6 py-4 whitespace-nowrap">الإجراء</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800 bg-white divide-y divide-[#E0E0E0]">
              {settlements.map((item) => (
                <tr key={item.id} className="hover:bg-[#F8F9FA] transition-colors group">
                  <td className="px-6 py-5 font-bold text-[#212529] group-hover:text-[#2D5A27] transition-colors">{item.entity}</td>
                  <td className="px-6 py-5 text-gray-600 font-medium">{item.type}</td>
                  <td className="px-6 py-5 font-bold text-[#212529]">{item.total.toLocaleString()} ر.س</td>
                  <td className="px-6 py-5 font-bold text-[#C5A028]">{item.commission.toLocaleString()} ر.س</td>
                  <td className="px-6 py-5 font-bold text-green-700">{item.net.toLocaleString()} ر.س</td>
                  <td className="px-6 py-5">
                    {item.status === 'pending' ? (
                      <button 
                        onClick={() => toast.success("تم تأكيد التحويل بنجاح")}
                        className="flex items-center gap-2 bg-[#2D5A27] hover:bg-[#234a1f] text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      >
                        <Landmark className="w-4 h-4" />
                        تحويل البنك
                      </button>
                    ) : (
                      <span className="inline-flex items-center px-4 py-2.5 rounded-lg text-xs font-bold bg-green-50 text-green-700 border border-green-100 shadow-sm">
                        تم التحويل
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}