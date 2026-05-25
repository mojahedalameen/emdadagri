import image_logo_removebg_preview_1 from '@/imports/logo-removebg-preview-1.png'
import image_logo_removebg_preview from '@/imports/logo-removebg-preview.png'
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { User, Briefcase, PhoneCall, Globe, ShieldCheck, Menu, X, ClipboardList } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImg from "figma:asset/image-4.png"; // Placeholder in case fallback is needed
const LOGO_URL = "https://i.imgur.com/mlkpAl4.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#E7E7E2]/50 shadow-[0_2px_20px_-5px_rgba(29,42,31,0.03)]" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
              <ImageWithFallback 
                src={image_logo_removebg_preview} 
                alt="إمداد" 
                className="h-9 md:h-10.5 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-sm"
              />
              <div className="flex flex-col text-right">
                <span className="text-[15px] md:text-[18px] font-bold text-[#1F5F2C] leading-none tracking-tight font-sans">
                  شركة إمداد <span className="text-[#C8A646]">الزراعية</span>
                </span>
                <span className="text-[10px] md:text-[11px] font-medium text-[#667064] mt-1 tracking-wide">
                  شريكك الزراعي الموثوق بالمملكة العربية السعودية
                </span>
              </div>
            </Link>
            {/* Middle: Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => `relative text-[14px] md:text-[15px] font-bold transition-all hover:text-[#1F5F2C] pb-2.5 pt-2 group ${isActive ? 'text-[#1F5F2C]' : 'text-[#667064]'}`}
              >
                {({ isActive }) => (
                  <>
                    الرئيسية
                    <span className={`absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A646] transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}`}></span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/marketplace" 
                className={({ isActive }) => `relative text-[14px] md:text-[15px] font-bold transition-all hover:text-[#1F5F2C] pb-2.5 pt-2 group ${isActive ? 'text-[#1F5F2C]' : 'text-[#667064]'}`}
              >
                {({ isActive }) => (
                  <>
                    المدخلات الزراعية
                    <span className={`absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A646] transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}`}></span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/suppliers" 
                className={({ isActive }) => `relative text-[14px] md:text-[15px] font-bold transition-all hover:text-[#1F5F2C] pb-2.5 pt-2 group ${isActive ? 'text-[#1F5F2C]' : 'text-[#667064]'}`}
              >
                {({ isActive }) => (
                  <>
                    دليل الشركات
                    <span className={`absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A646] transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}`}></span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/consultations" 
                className={({ isActive }) => `relative text-[14px] md:text-[15px] font-bold transition-all hover:text-[#1F5F2C] pb-2.5 pt-2 group ${isActive ? 'text-[#1F5F2C]' : 'text-[#667064]'}`}
              >
                {({ isActive }) => (
                  <>
                    الاستشارات
                    <span className={`absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A646] transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'}`}></span>
                  </>
                )}
              </NavLink>
            </nav>
          </div>

          {/* Left: Actions */}
          <div className="flex items-center gap-4">
            <Link 
              to="/my-requests" 
              className="hidden sm:flex items-center gap-2 px-5 py-2 text-[13px] md:text-[14px] font-bold text-[#667064] hover:text-[#1F5F2C] bg-[#F7F8F5] hover:bg-[#E7E7E2] rounded-full transition-all shadow-sm"
            >
              <ClipboardList className="w-4 h-4" />
              <span>طلباتي</span>
            </Link>
            <Link 
              to="/register" 
              className="hidden sm:flex items-center gap-2 px-5 py-2 text-[13px] md:text-[14px] font-bold text-[#1F5F2C] border border-[#1F5F2C] rounded-full hover:bg-[#1F5F2C] hover:text-white active:scale-95 transition-all shadow-sm"
            >
              <User className="w-4 h-4" />
              <span>انضم إلينا</span>
            </Link>
            <Link 
              to="/login" 
              className="hidden sm:flex items-center gap-2 px-5 py-2 text-[13px] md:text-[14px] font-bold text-white bg-[#1F5F2C] rounded-full hover:bg-[#15411e] active:scale-95 transition-all shadow-sm"
            >
              <Briefcase className="w-4 h-4" />
              <span>لوحة المورد</span>
            </Link>
            
            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden p-2 text-[#1D2A1F] hover:text-[#1F5F2C] focus:outline-none transition-colors rounded-xl hover:bg-[#F7F8F5]"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E7E7E2] py-4 space-y-4 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-1">
              <NavLink 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `text-[15px] font-bold py-2.5 px-4 rounded-xl transition-all ${isActive ? 'text-[#1F5F2C] bg-[#1F5F2C]/5' : 'text-[#667064] hover:bg-[#F7F8F5]'}`}
              >
                الرئيسية
              </NavLink>
              <NavLink 
                to="/marketplace" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `text-[15px] font-bold py-2.5 px-4 rounded-xl transition-all ${isActive ? 'text-[#1F5F2C] bg-[#1F5F2C]/5' : 'text-[#667064] hover:bg-[#F7F8F5]'}`}
              >
                المدخلات الزراعية
              </NavLink>
              <NavLink 
                to="/suppliers" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `text-[15px] font-bold py-2.5 px-4 rounded-xl transition-all ${isActive ? 'text-[#1F5F2C] bg-[#1F5F2C]/5' : 'text-[#667064] hover:bg-[#F7F8F5]'}`}
              >
                دليل الشركات
              </NavLink>
              <NavLink 
                to="/consultations" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `text-[15px] font-bold py-2.5 px-4 rounded-xl transition-all ${isActive ? 'text-[#1F5F2C] bg-[#1F5F2C]/5' : 'text-[#667064] hover:bg-[#F7F8F5]'}`}
              >
                الاستشارات
              </NavLink>
            </nav>
            <div className="flex flex-col sm:hidden gap-3 pt-4 border-t border-[#E7E7E2]">
              <Link 
                to="/my-requests" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 text-[14px] font-bold text-[#667064] bg-[#F7F8F5] rounded-full hover:text-[#1F5F2C] transition-all shadow-sm"
              >
                <ClipboardList className="w-4 h-4" />
                <span>طلباتي</span>
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 text-[14px] font-bold text-[#1F5F2C] border border-[#1F5F2C] rounded-full hover:bg-[#1F5F2C] hover:text-white transition-all shadow-sm"
              >
                <User className="w-4 h-4" />
                <span>انضم إلينا</span>
              </Link>
              <Link 
                to="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 text-[14px] font-bold text-white bg-[#1F5F2C] rounded-full hover:bg-[#15411e] transition-all shadow-sm"
              >
                <Briefcase className="w-4 h-4" />
                <span>لوحة المورد</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#1D2A1F] text-white pt-16 pb-8 border-t border-[#C8A646]/20" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-4">
            <div className="mb-6">
              <Link to="/" className="flex items-center gap-2.5 group">
                <ImageWithFallback 
                  src={image_logo_removebg_preview_1} 
                  alt="إمداد" 
                  className="h-9 md:h-10.5 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col text-right">
                  <span className="text-[15px] md:text-[18px] font-bold text-white leading-none tracking-tight">
                    شركة إمداد <span className="text-[#C8A646]">الزراعية</span>
                  </span>
                  <span className="text-[10px] md:text-[11px] font-medium text-[#C8A646]/80 mt-1 tracking-wide">
                    شريكك الزراعي الموثوق بالمملكة
                  </span>
                </div>
              </Link>
            </div>
            <p className="text-[#667064] text-[14px] leading-relaxed mb-6 max-w-sm">
              منصة إمداد هي المرجع الأول للمزارع السعودي، نجمع بين الخبرة الزراعية وأحدث التقنيات لتمكين القطاع الزراعي في المملكة العربية السعودية.
            </p>
            <div className="flex gap-4">
              <a href="https://imdad.sa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#C8A646]/30 flex items-center justify-center hover:bg-[#C8A646]/10 cursor-pointer transition-all">
                <Globe className="w-5 h-5 text-[#C8A646]" />
              </a>
              <a href="https://imdad.sa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#C8A646]/30 flex items-center justify-center hover:bg-[#C8A646]/10 cursor-pointer transition-all">
                <ShieldCheck className="w-5 h-5 text-[#C8A646]" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-bold text-[16px] mb-8 text-[#C8A646]">المنصة</h4>
            <ul className="space-y-4 text-[14px] text-[#667064]">
              <li><Link to="/" className="hover:text-white transition-colors">عن إمداد</Link></li>
              <li><Link to="/marketplace" className="hover:text-white transition-colors">المدخلات الزراعية</Link></li>
              <li><Link to="/suppliers" className="hover:text-white transition-colors">دليل الشركات</Link></li>
              <li><Link to="/consultations" className="hover:text-white transition-colors">الاستشارات</Link></li>
              <li><Link to="/my-requests" className="hover:text-white transition-colors">طلباتي</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold text-[16px] mb-8 text-[#C8A646]">للموردين</h4>
            <ul className="space-y-4 text-[14px] text-[#667064]">
              <li><Link to="/supplier-dashboard" className="hover:text-white transition-colors">لوحة المورد</Link></li>
              <li><Link to="/supplier-dashboard" className="hover:text-white transition-colors">إضافة منتجات</Link></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert("صفحة سياسة البيع ستكون متوفرة قريباً!"); }} className="hover:text-white transition-colors">سياسة البيع</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); alert("دليل التوثيق سيكون متوفراً قريباً!"); }} className="hover:text-white transition-colors">دليل التوثيق</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-[16px] mb-8 text-[#C8A646]">تواصل معنا</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1F5F2C]/20 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-[#C8A646]" />
                </div>
                <div>
                  <p className="text-[14px] text-[#667064] mb-1">الرقم الموحد</p>
                  <p className="text-[16px] font-bold">920004562</p>
                </div>
              </div>
              <div>
                <p className="text-[14px] text-[#667064] mb-1">المقر الرئيسي</p>
                <p className="text-[16px] font-bold">الخرج، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#667064]/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-[#667064]">
          <div className="flex items-center gap-2">
            <span>© 2026 جميع الحقوق محفوظة لشركة إمداد الزراعية</span>
          </div>
          <div className="flex gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); alert("سياسة الخصوصية ستكون متوفرة قريباً!"); }} className="hover:text-[#C8A646]">سياسة الخصوصية</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("اتفاقية الاستخدام ستكون متوفرة قريباً!"); }} className="hover:text-[#C8A646]">اتفاقية الاستخدام</a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("خريطة الموقع ستكون متوفرة قريباً!"); }} className="hover:text-[#C8A646]">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
