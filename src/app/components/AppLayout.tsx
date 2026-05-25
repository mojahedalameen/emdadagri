import React from 'react';
import { Outlet, Link, useLocation } from "react-router";
import { 
  Home, Store, Users, ShoppingBag, User,
  CalendarDays, FileText, Banknote, LayoutDashboard,
  Bell
} from 'lucide-react';
import { Toaster } from 'sonner';
import logoImage from 'figma:asset/694d3171baf1561efc382dd632a2e2b9056a85a0.png';

interface NavItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

const getNavItems = (pathname: string): NavItem[] => {
  if (pathname.startsWith('/farmer')) {
    return [
      { name: 'الرئيسية', icon: Home, path: '/farmer' },
      { name: 'السوق', icon: Store, path: '/farmer/market' },
      { name: 'الاستشارات', icon: Users, path: '/farmer/consultations' },
      { name: 'طلباتي', icon: ShoppingBag, path: '/farmer/orders' },
      { name: 'حسابي', icon: User, path: '/farmer/profile' },
    ];
  }
  if (pathname.startsWith('/consultant')) {
    return [
      { name: 'الرئيسية', icon: LayoutDashboard, path: '/consultant' },
      { name: 'المواعيد', icon: CalendarDays, path: '/consultant/appointments' },
      { name: 'التقارير', icon: FileText, path: '/consultant/reports' },
      { name: 'مستحقاتي', icon: Banknote, path: '/consultant/earnings' },
    ];
  }
  return [];
};

export const AppLayout = () => {
  const location = useLocation();
  const navItems = getNavItems(location.pathname);
  
  const isFarmer = location.pathname.startsWith('/farmer');
  const userName = isFarmer ? "فهد" : "أحمد";

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen sm:p-4 text-[#212529]" dir="rtl">
      {/* App Container - Mobile constrained on desktop */}
      <div className="w-full max-w-[393px] bg-[#F8F9FA] h-[100dvh] sm:h-[852px] sm:rounded-[24px] sm:shadow-2xl sm:border border-[#E0E0E0] overflow-hidden flex flex-col relative mx-auto font-sans">
        
        {/* Top Header */}
        <header className="flex items-center justify-between px-5 pt-6 pb-4 bg-white shrink-0 z-10 sticky top-0 shadow-sm border-b border-[#E0E0E0]">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={logoImage} alt="Emdad Logo" className="h-16 object-contain" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-bold text-[#212529]">أهلاً، {userName}</div>
            <button className="relative p-2 text-gray-500 hover:text-[#2D5A27] bg-[#F8F9FA] rounded-full transition-colors hover:shadow-sm">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Main App Content */}
        <main className="flex-1 overflow-y-auto relative scroll-smooth no-scrollbar bg-[#F8F9FA]">
          <Outlet />
        </main>

        {/* Bottom Navigation */}
        <nav className="shrink-0 bg-white px-2 py-2 flex items-center justify-between pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20 border-t border-[#E0E0E0]">
          {navItems.map((item) => {
            const isActive = item.path === '/farmer' || item.path === '/consultant' 
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);
              
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center gap-1 p-2 flex-1 transition-all duration-300 hover:-translate-y-0.5 ${
                  isActive ? 'text-[#2D5A27]' : 'text-gray-400 hover:text-[#2D5A27]/80'
                }`}
              >
                <item.icon className={`w-6 h-6 ${isActive ? 'fill-[#2D5A27]/10 stroke-[#2D5A27]' : ''}`} />
                <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <Toaster position="top-center" dir="rtl" toastOptions={{
        className: 'font-sans'
      }} />
    </div>
  );
};