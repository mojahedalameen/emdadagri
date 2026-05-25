import React, { useState, useRef, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { 
  Sprout, Users, Truck, LayoutDashboard, 
  Settings, Bell, Search, LogOut, Menu, X, 
  Banknote, CalendarDays, ShoppingBag, FileText,
  BarChart3, User, LogOut as LogOutIcon, UserCircle
} from 'lucide-react';
import logoImage from 'figma:asset/694d3171baf1561efc382dd632a2e2b9056a85a0.png';
import { toast } from 'sonner';

interface NavItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

const getNavItems = (pathname: string): NavItem[] => {
  if (pathname.startsWith('/supplier')) {
    return [
      { name: 'الرئيسية', icon: LayoutDashboard, path: '/supplier' },
      { name: 'المنتجات', icon: Sprout, path: '/supplier/products' },
      { name: 'الطلبات', icon: Truck, path: '/supplier/orders' },
      { name: 'المبيعات', icon: Banknote, path: '/supplier/sales' },
      { name: 'التقارير المالية', icon: FileText, path: '/supplier/financial-reports' },
      { name: 'الإعدادات', icon: Settings, path: '/supplier/settings' },
    ];
  }
  if (pathname.startsWith('/admin')) {
    return [
      { name: 'الرئيسية', icon: LayoutDashboard, path: '/admin' },
      { name: 'المستخدمين', icon: Users, path: '/admin/users' },
      { name: 'العمليات', icon: BarChart3, path: '/admin/operations' },
      { name: 'الإعدادات', icon: Settings, path: '/admin/settings' },
    ];
  }
  return [];
};

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = getNavItems(location.pathname);
  
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let roleName = "";
  if (location.pathname.startsWith('/supplier')) roleName = "بوابة المورد";
  if (location.pathname.startsWith('/admin')) roleName = "لوحة الإدارة";

  const userName = "أحمد";

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate('/');
    toast.success("تم تسجيل الخروج بنجاح");
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8F9FA] text-[#212529]" dir="rtl">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-[#E0E0E0] shadow-sm transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        flex flex-col
        ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Logo Area */}
        <div className="flex items-center justify-between h-[100px] px-6 border-b border-[#E0E0E0] shrink-0 bg-white">
          <Link to="/" className="flex items-center justify-center w-full transition-transform hover:scale-105">
            <img src={logoImage} alt="Emdad Logo" className="w-[120px] object-contain drop-shadow-sm" />
          </Link>
          <button className="lg:hidden text-gray-500 hover:text-[#2D5A27] transition-colors" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="px-6 py-4 bg-[#F8F9FA] shrink-0 border-b border-[#E0E0E0]/50">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{roleName}</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path) && item.path.split('/').length > 2);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative hover:-translate-y-0.5 ${
                  isActive 
                    ? 'bg-[#2D5A27]/10 text-[#2D5A27] shadow-sm' 
                    : 'text-gray-600 hover:bg-[#F8F9FA] hover:text-[#212529] hover:shadow-sm border border-transparent hover:border-[#E0E0E0]'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                {isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#2D5A27] rounded-l-full shadow-sm"></div>
                )}
                <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#2D5A27]' : 'text-gray-400 group-hover:text-[#2D5A27]/70'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-[#E0E0E0] shrink-0 bg-[#F8F9FA]/50">
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold text-red-600 bg-red-50 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md border border-red-100 hover:border-red-600 hover:-translate-y-0.5"
          >
            <LogOut className="w-5 h-5" />
            تسجيل الخروج
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen bg-[#F8F9FA]">
        {/* Top Bar */}
        <header className="flex items-center justify-between h-[64px] px-6 bg-white border-b border-[#E0E0E0] lg:px-8 shrink-0 relative z-30 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-gray-500 hover:text-[#2D5A27] transition-colors focus:outline-none bg-[#F8F9FA] p-2 rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex relative max-w-md w-64 lg:w-96 group">
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-focus-within:text-[#2D5A27] transition-colors">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                placeholder="ابحث عن منتج، طلب، الخ..." 
                className="w-full pl-4 pr-10 py-2.5 bg-[#F8F9FA] border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2D5A27]/20 focus:border-[#2D5A27] transition-all hover:border-gray-300 shadow-sm inset-shadow-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Notifications Dropdown */}
            <div className="relative" ref={notifRef}>
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className={`relative p-2.5 text-gray-500 transition-all duration-300 rounded-full focus:outline-none border ${isNotificationsOpen ? 'bg-[#F8F9FA] border-[#E0E0E0] shadow-sm text-[#2D5A27]' : 'border-transparent hover:bg-[#F8F9FA] hover:text-[#2D5A27]'}`}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
              </button>
              
              {isNotificationsOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-[#E0E0E0] py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-3 border-b border-[#E0E0E0] flex justify-between items-center bg-[#F8F9FA]/50">
                    <h3 className="text-sm font-bold text-[#212529]">الإشعارات</h3>
                    <button className="text-xs font-bold text-[#2D5A27] hover:text-[#212529] transition-colors">تحديد كـ مقروء</button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-[#F8F9FA] cursor-pointer flex gap-3 border-b border-[#E0E0E0]/50 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                        <Truck className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#212529]">طلب جديد: ORD-9021</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">تم استلام طلب جديد من فيصل</p>
                        <span className="text-[10px] text-gray-400 mt-1 block font-medium">منذ 5 دقائق</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="h-8 w-px bg-[#E0E0E0] mx-1 hidden sm:block"></div>
            
            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center gap-3 focus:outline-none rounded-full p-1.5 transition-all duration-300 border ${isProfileOpen ? 'bg-[#F8F9FA] border-[#E0E0E0] shadow-sm' : 'border-transparent hover:bg-[#F8F9FA]'}`}
              >
                <div className="hidden sm:block text-right px-2">
                  <p className="text-sm font-bold text-[#212529]">{userName}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A028]/10 flex items-center justify-center text-[#C5A028] font-bold border border-[#C5A028]/30 shadow-sm">
                  {userName.charAt(0)}
                </div>
              </button>
              
              {isProfileOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#E0E0E0] py-1 z-50 animate-in fade-in slide-in-from-top-2">
                  <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#212529] hover:bg-[#F8F9FA] hover:text-[#2D5A27] w-full text-right transition-colors">
                    <UserCircle className="w-4 h-4" />
                    الملف الشخصي
                  </button>
                  <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#212529] hover:bg-[#F8F9FA] hover:text-[#2D5A27] w-full text-right transition-colors">
                    <Settings className="w-4 h-4" />
                    الإعدادات
                  </button>
                  <div className="h-px bg-[#E0E0E0] my-1"></div>
                  <button 
                    onClick={() => {
                      setIsProfileOpen(false);
                      setShowLogoutModal(true);
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 w-full text-right font-bold transition-colors"
                  >
                    <LogOutIcon className="w-4 h-4" />
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#F8F9FA]">
          <Outlet />
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl border border-[#E0E0E0] max-w-sm w-full p-6 animate-in fade-in zoom-in duration-200">
            <div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 shadow-inner flex items-center justify-center mx-auto mb-4">
              <LogOutIcon className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-center text-[#212529] mb-2">تسجيل الخروج</h3>
            <p className="text-sm text-center text-gray-600 mb-6 leading-relaxed">هل أنت متأكد أنك تريد تسجيل الخروج من الحساب؟</p>
            <div className="flex gap-3">
              <button 
                onClick={handleLogout}
                className="flex-1 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                تأكيد الخروج
              </button>
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 bg-white border border-[#E0E0E0] text-[#212529] font-bold py-3 rounded-xl hover:bg-[#F8F9FA] hover:border-gray-300 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};