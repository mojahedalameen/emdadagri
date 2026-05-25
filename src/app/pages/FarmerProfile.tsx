import React from 'react';
import { User, MapPin, CreditCard, Globe, HelpCircle, LogOut, ChevronLeft, Sprout } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const FarmerProfile = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: MapPin, label: 'العناوين المحفوظة', value: 'القصيم' },
    { icon: CreditCard, label: 'طرق الدفع', value: 'بطاقتين' },
    { icon: Globe, label: 'اللغة', value: 'العربية' },
    { icon: HelpCircle, label: 'الدعم الفني', value: '' },
  ];

  const handleLogout = () => {
    toast('هل أنت متأكد من تسجيل الخروج؟', {
      action: {
        label: 'تسجيل الخروج',
        onClick: () => {
          navigate('/');
        }
      },
      cancel: {
        label: 'إلغاء'
      }
    });
  };

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] font-sans p-5 pb-8">
      <h1 className="text-2xl font-bold text-[#212529] mb-6 shrink-0">حسابي</h1>

      {/* User Info Card */}
      <div className="bg-white rounded-[16px] p-5 border border-[#E0E0E0] shadow-sm flex items-center gap-5 mb-8 hover:shadow-md transition-shadow">
        <div className="w-[72px] h-[72px] bg-[#C5A028]/10 rounded-full flex items-center justify-center text-[#C5A028] font-bold text-3xl shadow-sm border border-[#C5A028]/20">
          ف
        </div>
        <div>
          <h2 className="text-xl font-bold text-[#212529] mb-1">فهد</h2>
          <div className="flex items-center gap-3 text-[13px] text-gray-500 font-medium">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#2D5A27]" /> القصيم</span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5"><Sprout className="w-3.5 h-3.5 text-[#2D5A27]" /> مزرعة نخيل</span>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="bg-white rounded-[16px] border border-[#E0E0E0] shadow-sm mb-8 overflow-hidden">
        <div className="divide-y divide-[#E0E0E0]">
          {menuItems.map((item, index) => (
            <button key={index} className="w-full flex items-center justify-between p-4.5 hover:bg-[#F8F9FA] transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F8F9FA] group-hover:bg-white rounded-full flex items-center justify-center text-[#212529] transition-all duration-300 border border-transparent group-hover:border-[#E0E0E0] group-hover:text-[#2D5A27] group-hover:shadow-sm">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-[#212529] text-[15px] group-hover:text-[#2D5A27] transition-colors">{item.label}</span>
              </div>
              <div className="flex items-center gap-3">
                {item.value && <span className="text-[13px] font-bold text-gray-500">{item.value}</span>}
                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-[#2D5A27] transition-colors" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Logout - Text Only */}
      <button 
        onClick={handleLogout}
        className="w-full py-4 flex items-center justify-center gap-2 font-bold text-[15px] text-red-600 hover:bg-red-50 hover:shadow-sm border border-transparent hover:border-red-100 rounded-[16px] transition-all duration-300"
      >
        <LogOut className="w-5 h-5" />
        تسجيل الخروج
      </button>
    </div>
  );
};