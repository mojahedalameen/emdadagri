import { useState } from "react";
import { Eye, Lock, Unlock, ShieldAlert, CircleCheck } from "lucide-react";

export function AdminUsers() {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filters = ["الكل", "مزارع", "مستشار", "مورد"];

  const users = [
    { id: 1, name: "خالد", role: "مزارع", joinDate: "12 مارس 2026", status: "نشط", avatar: "👨‍🌾" },
    { id: 2, name: "سعد", role: "مستشار", joinDate: "15 مارس 2026", status: "بانتظار التوثيق", avatar: "👨‍🏫" },
    { id: 3, name: "شركة أراسكو", role: "مورد", joinDate: "01 يناير 2026", status: "نشط", avatar: "🏢" },
    { id: 4, name: "نورة", role: "مزارع", joinDate: "05 فبراير 2026", status: "موقوف", avatar: "👩‍🌾" },
    { id: 5, name: "فهد", role: "مستشار", joinDate: "10 مارس 2026", status: "نشط", avatar: "👨‍🏫" },
  ];

  const getRoleBadge = (role: string) => {
    switch(role) {
      case "مزارع": return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">مزارع</span>;
      case "مستشار": return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">مستشار</span>;
      case "مورد": return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">مورد</span>;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "نشط": return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">نشط</span>;
      case "موقوف": return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">موقوف</span>;
      case "بانتظار التوثيق": return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">بانتظار التوثيق</span>;
      default: return null;
    }
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-8 relative">
      {/* Header & Filters */}
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-gray-900">إدارة المستخدمين</h1>
        
        <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-px">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-[1.5px] ${
                activeFilter === filter 
                  ? "border-[#1E3A8A] text-[#1E3A8A]" 
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-[0px_2px_4px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-[#F3F4F6] text-gray-700 text-sm font-medium">
              <tr>
                <th className="px-6 py-4 border-b border-[#E5E7EB]">الاسم</th>
                <th className="px-6 py-4 border-b border-[#E5E7EB]">نوع الحساب</th>
                <th className="px-6 py-4 border-b border-[#E5E7EB]">تاريخ الانضمام</th>
                <th className="px-6 py-4 border-b border-[#E5E7EB]">الحالة</th>
                <th className="px-6 py-4 border-b border-[#E5E7EB]">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800 bg-white divide-y divide-[#E5E7EB]">
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg">
                        {user.avatar}
                      </div>
                      <span className="font-bold text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{getRoleBadge(user.role)}</td>
                  <td className="px-6 py-4 text-gray-600">{user.joinDate}</td>
                  <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="text-gray-400 hover:text-[#1E3A8A] transition-colors" title="عرض التفاصيل">
                        <Eye className="w-5 h-5" />
                      </button>
                      
                      {user.status === "بانتظار التوثيق" ? (
                        <button 
                          onClick={() => setShowModal(true)}
                          className="text-gray-400 hover:text-green-600 transition-colors" 
                          title="توثيق החساب"
                        >
                          <CircleCheck className="w-5 h-5" />
                        </button>
                      ) : user.status === "موقوف" ? (
                        <button className="text-gray-400 hover:text-green-600 transition-colors" title="تفعيل החساب">
                          <Unlock className="w-5 h-5" />
                        </button>
                      ) : (
                        <button className="text-gray-400 hover:text-red-600 transition-colors" title="إيقاف החساب">
                          <Lock className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 flex flex-col gap-6 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FEF9C3] flex items-center justify-center text-[#B45309]">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">تأكيد توثيق החساب</h3>
              <p className="text-sm text-gray-500">
                هل أنت متأكد من توثيق حساب المستشار <span className="font-bold text-gray-900">(سعد)</span>؟ سيتمكن من استقبال طلبات الاستشارة مباشرة.
              </p>
            </div>
            
            <div className="flex gap-3 w-full">
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 bg-[#D4AF37] hover:bg-[#C29F31] text-white font-bold py-3 rounded-lg transition-colors"
              >
                تأكيد التوثيق
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-lg transition-colors"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}