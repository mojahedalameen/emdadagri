import { Outlet, NavLink, useLocation } from "react-router";
import { Home, ShoppingBasket, MessageSquare, User, Bell, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function AppShell() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB] font-sans max-w-[393px] mx-auto relative shadow-2xl">
      {/* Top App Bar (56px) */}
      <header className="h-[56px] bg-white border-b border-gray-100 px-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="bg-[#D4AF37] w-8 h-8 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-xs">إمداد</span>
          </div>
          <span className="font-bold text-[#111827]">إمداد</span>
        </div>
        
        <button className="relative p-2 text-[#6B7280] hover:bg-gray-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      {/* Content Area */}
      <main className="flex-1 pb-[80px] overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation Bar (80px) */}
      <nav className="h-[80px] bg-white border-t border-gray-100 flex items-center justify-around px-2 fixed bottom-0 left-0 right-0 max-w-[393px] mx-auto z-50">
        <NavItem to="/" icon={<Home size={24} />} label="الرئيسية" />
        <NavItem to="/suppliers" icon={<ShoppingBasket size={24} />} label="الموردين" />
        <NavItem to="/consultations" icon={<MessageSquare size={24} />} label="استشارات" />
        <NavItem to="/profile" icon={<User size={24} />} label="حسابي" />
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center gap-1 min-w-[64px] transition-colors ${
          isActive ? "text-[#D4AF37]" : "text-[#6B7280]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <div className={`transition-transform duration-200 ${isActive ? "scale-110" : "scale-100"}`}>
            {icon}
          </div>
          <span className="text-[10px] font-medium leading-none">{label}</span>
          {isActive && (
            <motion.div
              layoutId="nav-indicator"
              className="w-1 h-1 bg-[#D4AF37] rounded-full mt-1"
            />
          )}
        </>
      )}
    </NavLink>
  );
}
