import { User, Settings, CreditCard, ShoppingBag, LogOut, ChevronLeft, MapPin, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

export function ProfileScreen() {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* User Info Header */}
      <div className="flex items-center gap-4 mt-4">
        <div className="w-20 h-20 rounded-full border-4 border-[#D4AF37]/10 p-1 bg-white">
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <User size={40} className="text-[#D4AF37]" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">مزرعة فهد 🌾</h2>
          <p className="text-sm text-[#6B7280]">عضو ذهبي • القصيم، المملكة العربية السعودية</p>
          <div className="flex items-center gap-1 mt-1 text-[#D4AF37] font-bold text-xs bg-[#D4AF37]/10 w-max px-2 py-0.5 rounded-full">
             <span className="text-xs">موثق من وزارة الزراعة</span>
          </div>
        </div>
      </div>

      {/* Profile Sections */}
      <div className="flex flex-col gap-4">
        <ProfileItem icon={<ShoppingBag size={20} />} title="طلباتي السابقة" description="تتبع جميع مشترياتك وحالتها." />
        <ProfileItem icon={<Truck size={20} />} title="عناوين الشحن" description="إدارة أماكن التوصيل والمستودعات." />
        <ProfileItem icon={<CreditCard size={20} />} title="طرق الدفع" description="إدارة البطاقات البنكية و Apple Pay." />
        <ProfileItem icon={<Settings size={20} />} title="الإعدادات" description="تعديل الحساب، التنبيهات، والخصوصية." />
      </div>

      <button className="flex items-center gap-3 p-4 rounded-xl border border-red-100 text-red-500 font-bold hover:bg-red-50 transition-colors mt-4">
        <LogOut size={20} />
        <span>تسجيل الخروج</span>
      </button>

      <div className="mt-8 text-center">
        <p className="text-xs text-[#6B7280]">إصدار التطبيق 1.0.0 MVP</p>
        <p className="text-[10px] text-[#6B7280] mt-1">جميع الحقوق محفوظة لمنصة إمداد الزراعية © 2026</p>
      </div>
    </div>
  );
}

function ProfileItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <button className="card flex items-center justify-between p-4 hover:border-[#D4AF37] border border-transparent transition-all text-right group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#D4AF37]/5 rounded-lg flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
           {icon}
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#111827]">{title}</h4>
          <p className="text-[10px] text-[#6B7280]">{description}</p>
        </div>
      </div>
      <ChevronLeft size={16} className="text-[#6B7280]" />
    </button>
  );
}
