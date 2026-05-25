import { Outlet, NavLink, useLocation } from "react-router";
import { Home, Calendar, MessageSquare, User } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/farmer": return "الرئيسية";
      case "/farmer/appointments": return "المواعيد";
      default: return "إمداد";
    }
  };

  return (
    <div className="w-full h-screen bg-[#F9FAFB] flex flex-col mx-auto max-w-[480px] shadow-2xl relative overflow-hidden text-right">
      {/* Top App Bar (56px) */}
      <header className="h-[56px] bg-white flex items-center justify-between px-4 shrink-0 shadow-[0px_4px_6px_rgba(0,0,0,0.02)] z-10">
        <div className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center relative">
          <span className="text-xl leading-none" role="img" aria-label="Advisor">👨‍🌾</span>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#4CAF50] border-2 border-white rounded-full"></span>
        </div>
        
        <h1 className="text-[16px] font-semibold text-gray-800">{getPageTitle()}</h1>
        
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-[#F9FAFB] pb-[80px]">
        <Outlet />
      </main>

      {/* Bottom Navigation Bar (80px) */}
      <nav className="absolute bottom-0 left-0 w-full h-[80px] bg-white border-t border-gray-100 flex items-center justify-around px-2 pb-safe z-20 shadow-[0px_-4px_6px_rgba(0,0,0,0.02)] rounded-t-[16px]">
        <NavLink 
          to="/farmer" 
          end
          className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-[#D4AF37]' : 'text-gray-400'}`}
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">الرئيسية</span>
        </NavLink>
        
        <NavLink 
          to="/farmer/appointments" 
          className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-[#D4AF37]' : 'text-gray-400'}`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-[10px] font-medium">المواعيد</span>
        </NavLink>
        
        <NavLink 
          to="/chat" 
          className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-[#D4AF37]' : 'text-gray-400'}`}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px] font-medium">المحادثات</span>
        </NavLink>
        
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">حسابي</span>
        </button>
      </nav>
    </div>
  );
}