import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router';
import logoImg from '@/imports/logo-removebg-preview.png';

export const SupplierLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock login delay
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("isLoggedIn", "true");
      navigate('/supplier-dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F7F8F5] flex items-center justify-center px-6 py-20" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white p-12 rounded-[3rem] border border-[#E7E7E2] shadow-2xl relative overflow-hidden"
      >
        {/* Decorative background circle */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#1F5F2C]/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center mb-10">
            <Link to="/" className="mb-6 block transition-transform hover:scale-105 active:scale-95">
              <img 
                src={logoImg} 
                alt="إمداد" 
                className="h-16 w-auto object-contain mx-auto"
              />
            </Link>
            <h1 className="text-3xl font-bold text-[#1D2A1F]">دخول الموردين</h1>
            <p className="text-[#667064] mt-2">مرحباً بك مجدداً في لوحة تحكم إمداد</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-[14px] font-bold text-[#1D2A1F] block mr-4">اسم المستخدم أو البريد الإلكتروني</label>
              <div className="relative group">
                <LucideIcons.Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-[#667064] group-focus-within:text-[#1F5F2C] w-5 h-5 transition-colors" />
                <input 
                  type="text" 
                  required
                  placeholder="user@example.com"
                  className="w-full pr-14 pl-6 py-4 bg-[#F7F8F5] border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#1F5F2C] focus:ring-0 transition-all text-right outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                <label className="text-[14px] font-bold text-[#1D2A1F]">كلمة المرور</label>
                <Link to="#" className="text-[12px] text-[#C8A646] hover:underline">نسيت كلمة المرور؟</Link>
              </div>
              <div className="relative group">
                <LucideIcons.Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-[#667064] group-focus-within:text-[#1F5F2C] w-5 h-5 transition-colors" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full pr-14 pl-6 py-4 bg-[#F7F8F5] border-2 border-transparent rounded-2xl focus:bg-white focus:border-[#1F5F2C] focus:ring-0 transition-all text-right outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-[#1F5F2C] text-white font-bold text-[18px] rounded-full shadow-xl shadow-[#1F5F2C]/20 hover:bg-[#15411e] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <LucideIcons.LogIn className="w-5 h-5" />
                  تسجيل الدخول
                </>
              )}
            </button>

            <div className="text-center pt-4">
              <p className="text-[14px] text-[#667064]">
                ليس لديك حساب مورد؟ <Link to="/register" className="text-[#1F5F2C] font-bold hover:underline">انضم إلينا الآن</Link>
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
