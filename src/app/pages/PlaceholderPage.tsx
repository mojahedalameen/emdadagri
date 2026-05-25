import React from 'react';
import { useLocation } from 'react-router';
import { LayoutDashboard } from 'lucide-react';

export const PlaceholderPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const pageName = pathParts.length > 1 ? pathParts[pathParts.length - 1] : "الصفحة";

  // Translate common page names to Arabic
  const nameMap: Record<string, string> = {
    crops: "المحاصيل",
    orders: "الطلبات والمشتريات",
    consultations: "الاستشارات",
    appointments: "المواعيد",
    reports: "التقارير",
    earnings: "المستحقات",
    products: "المنتجات",
    sales: "المبيعات",
    users: "المستخدمين",
    operations: "العمليات",
    settings: "الإعدادات"
  };

  const displayName = nameMap[pageName] || pageName;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-white rounded-[24px] border border-[#E0E0E0] shadow-sm">
      <div className="w-24 h-24 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-6 shadow-inner border border-[#E0E0E0]">
        <LayoutDashboard className="w-10 h-10 text-gray-400" />
      </div>
      <h2 className="text-2xl font-bold text-[#212529] mb-3">
        صفحة {displayName}
      </h2>
      <p className="text-gray-500 max-w-md font-medium leading-relaxed">
        هذه الواجهة قيد التطوير حالياً ضمن منصة إمداد. سيتم إطلاق الميزات الخاصة بها قريباً لضمان أفضل تجربة لك.
      </p>
    </div>
  );
};