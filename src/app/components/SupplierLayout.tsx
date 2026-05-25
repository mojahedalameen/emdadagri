import { Outlet, NavLink, useLocation, useNavigate } from "react-router";
import { LayoutDashboard, ShoppingBag, Package, PieChart, Settings, Bell, Search, Building2 } from "lucide-react";

export function SupplierLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "الرئيسية", path: "/supplier", icon: LayoutDashboard },
    { label: "إدارة الطلبات", path: "/supplier/orders", icon: ShoppingBag },
    { label: "منتجاتي", path: "/supplier/products", icon: Package },
    { label: "التقارير المالية", path: "/supplier/reports", icon: PieChart },
    { label: "الإعدادات", path: "/supplier/settings", icon: Settings },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F9FAFB] flex flex-row text-right" dir="rtl">
      {/* Right Sidebar (260px) */}
      <aside className="w-[260px] bg-white border-l border-[#E5E7EB] flex flex-col shrink-0 h-screen sticky top-0">
        {/* Logo Area */}
        <div className="h-[72px] flex items-center px-6 border-b border-[#E5E7EB] cursor-pointer" onClick={() => navigate('/')}>
          <h1 className="text-2xl font-bold text-[#D4AF37]">إمداد</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Handle active state accurately, especially for root /supplier vs sub-routes
            const isActive = item.path === "/supplier" 
              ? location.pathname === "/supplier" 
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gray-50 text-[#D4AF37] border-r-4 border-[#D4AF37]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-r-4 border-transparent"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-[#D4AF37]" : "text-gray-400"}`} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar (72px) */}
        <header className="h-[72px] bg-white border-b border-[#E5E7EB] px-8 flex items-center justify-between shrink-0 sticky top-0 z-10">
          {/* Search */}
          <div className="w-[320px] bg-gray-50 rounded-lg px-4 py-2 border border-[#E5E7EB] focus-within:border-[#D4AF37] focus-within:ring-1 focus-within:ring-[#D4AF37] transition-all flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="البحث برقم الطلب، المزارع..." 
              className="w-full bg-transparent border-none outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>

          {/* Actions & User */}
          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            
            <div className="h-8 w-px bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-gray-900">أهلاً، ممثل المبيعات (سعد) 🏢</span>
                <span className="text-xs text-gray-500">شركة الأسمدة الحديثة</span>
              </div>
              <div className="w-10 h-10 bg-[#FEF9C3] rounded-full flex items-center justify-center text-[#B45309] font-bold text-lg">
                ش
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}