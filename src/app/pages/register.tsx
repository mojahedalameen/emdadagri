import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router';

export const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'farmer' | 'supplier' | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = {
    farmer: [
      "استشارات زراعية مجانية من خبراء معتمدين",
      "الوصول لأجود أنواع البذور والأسمدة والمعدات",
      "دعم فني متخصص لمحاصيلك طوال الموسم",
      "تنبيهات جوية وتحذيرات زراعية ذكية"
    ],
    supplier: [
      "لوحة تحكم احترافية لإدارة منتجاتك ومبيعاتك",
      "الوصول لقاعدة واسعة من المزارعين في المملكة",
      "تقارير تحليلية دقيقة لطلب السوق وتوجهاته",
      "نظام فوترة وتوصيل متكامل وموثوق"
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (role === 'farmer') {
        navigate('/marketplace');
      } else {
        setIsSuccess(true);
      }
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F7F8F5] flex items-center justify-center px-6" dir="rtl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white p-16 rounded-[3rem] border border-[#E7E7E2] shadow-2xl text-center"
        >
          <div className="w-24 h-24 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-10 animate-pulse">
            <LucideIcons.Clock className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-[#1D2A1F] mb-6">تم استلام طلبك بنجاح</h2>
          <p className="text-[18px] text-[#667064] mb-12 leading-relaxed">
            حسابك كـ "مورد معتمد" الآن قيد المراجعة الإدارية للتأكد من الوثائق. سيتم إشعارك عبر الجوال فور تفعيل حسابك للبدء في رفع منتجاتك.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#1F5F2C] text-white rounded-full font-bold text-[18px] hover:bg-[#15411e] active:scale-95 transition-all shadow-xl shadow-[#1F5F2C]/20"
          >
            <LucideIcons.Home className="w-5 h-5" />
            العودة للرئيسية
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8F5] py-12 px-6" dir="rtl">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D2A1F] mb-6 leading-tight">
            مرحباً بك في <span className="text-[#1F5F2C]">إمداد</span>
          </h1>
          <p className="text-[16px] text-[#667064]">اختر نوع الحساب للانضمام إلى أكبر منظومة زراعية سعودية</p>
        </div>

        <AnimatePresence mode="wait">
          {!role ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
            >
              {/* Farmer Card */}
              <div 
                onClick={() => setRole('farmer')}
                className="bg-white p-10 rounded-[2rem] border border-[#E7E7E2] hover:border-[#1F5F2C] hover:shadow-2xl hover:-translate-y-2 active:scale-95 transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-[#1F5F2C]/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#1F5F2C] transition-all">
                  <LucideIcons.Sprout className="w-12 h-12 text-[#1F5F2C] group-hover:text-white transition-all" />
                </div>
                <h2 className="text-3xl font-bold text-[#1D2A1F] mb-6 group-hover:text-[#1F5F2C]">انضم كمزارع</h2>
                <ul className="space-y-4 mb-10 text-right w-full">
                  {benefits.farmer.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-[#667064]">
                      <LucideIcons.CheckCircle2 className="w-5 h-5 text-[#C8A646] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 bg-[#F7F8F5] text-[#1D2A1F] font-bold rounded-full group-hover:bg-[#1F5F2C] group-hover:text-white transition-all shadow-sm">
                  سجل كمزارع
                </button>
              </div>

              {/* Supplier Card */}
              <div 
                onClick={() => setRole('supplier')}
                className="bg-white p-10 rounded-[2rem] border border-[#E7E7E2] hover:border-[#C8A646] hover:shadow-2xl hover:-translate-y-2 active:scale-95 transition-all cursor-pointer group flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-[#C8A646]/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-[#C8A646] transition-all">
                  <LucideIcons.Building2 className="w-12 h-12 text-[#C8A646] group-hover:text-white transition-all" />
                </div>
                <h2 className="text-3xl font-bold text-[#1D2A1F] mb-6 group-hover:text-[#C8A646]">انضم كمورد</h2>
                <ul className="space-y-4 mb-10 text-right w-full">
                  {benefits.supplier.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-[#667064]">
                      <LucideIcons.CheckCircle2 className="w-5 h-5 text-[#C8A646] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 bg-[#F7F8F5] text-[#1D2A1F] font-bold rounded-full group-hover:bg-[#C8A646] group-hover:text-white transition-all shadow-sm">
                  سجل شركتك
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto bg-white p-10 rounded-[2rem] border border-[#E7E7E2] shadow-2xl relative"
            >
              <button 
                onClick={() => setRole(null)}
                className="absolute top-8 left-8 p-3 bg-[#F7F8F5] rounded-full hover:bg-white hover:shadow-md transition-all active:scale-90"
              >
                <LucideIcons.ArrowLeft className="w-6 h-6 text-[#667064]" />
              </button>

              <div className="flex flex-col items-center text-center mb-10">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${role === 'farmer' ? 'bg-[#1F5F2C]/10 text-[#1F5F2C]' : 'bg-[#C8A646]/10 text-[#C8A646]'}`}>
                  {role === 'farmer' ? <LucideIcons.Sprout className="w-10 h-10" /> : <LucideIcons.Building2 className="w-10 h-10" />}
                </div>
                <h2 className="text-3xl font-bold text-[#1D2A1F]">إنشاء حساب {role === 'farmer' ? 'مزارع' : 'مورد'}</h2>
                <p className="text-[#667064] mt-2">أدخل بياناتك للبدء في استخدام المنصة</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#1D2A1F] block mr-4">الاسم الكامل</label>
                  <div className="relative">
                    <LucideIcons.User className="absolute right-5 top-1/2 -translate-y-1/2 text-[#667064] w-5 h-5" />
                    <input 
                      type="text" 
                      required
                      placeholder="أدخل اسمك الثلاثي"
                      className="w-full pr-14 pl-6 py-4 bg-[#F7F8F5] border border-[#E7E7E2] rounded-2xl focus:border-[#1F5F2C] focus:bg-white focus:ring-2 focus:ring-[#1F5F2C]/10 transition-all text-right outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#1D2A1F] block mr-4">رقم الجوال</label>
                  <div className="relative">
                    <LucideIcons.Phone className="absolute right-5 top-1/2 -translate-y-1/2 text-[#667064] w-5 h-5" />
                    <input 
                      type="tel" 
                      required
                      placeholder="05xxxxxxxx"
                      className="w-full pr-14 pl-6 py-4 bg-[#F7F8F5] border border-[#E7E7E2] rounded-2xl focus:border-[#1F5F2C] focus:bg-white focus:ring-2 focus:ring-[#1F5F2C]/10 transition-all text-right outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#1D2A1F] block mr-4">كلمة المرور</label>
                  <div className="relative">
                    <LucideIcons.Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-[#667064] w-5 h-5" />
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••"
                      className="w-full pr-14 pl-6 py-4 bg-[#F7F8F5] border border-[#E7E7E2] rounded-2xl focus:border-[#1F5F2C] focus:bg-white focus:ring-2 focus:ring-[#1F5F2C]/10 transition-all text-right outline-none"
                    />
                  </div>
                </div>

                {role === 'supplier' && (
                  <div className="space-y-2 animate-in slide-in-from-top duration-300">
                    <label className="text-[14px] font-bold text-[#1D2A1F] block mr-4">اسم الشركة</label>
                    <div className="relative">
                      <LucideIcons.Building className="absolute right-5 top-1/2 -translate-y-1/2 text-[#667064] w-5 h-5" />
                      <input 
                        type="text" 
                        required
                        placeholder="اسم شركتك أو نشاطك التجاري"
                        className="w-full pr-14 pl-6 py-4 bg-[#F7F8F5] border border-[#E7E7E2] rounded-2xl focus:border-[#1F5F2C] focus:bg-white focus:ring-2 focus:ring-[#1F5F2C]/10 transition-all text-right outline-none"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-5 text-white font-bold text-[18px] rounded-full shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 ${role === 'farmer' ? 'bg-[#1F5F2C] hover:bg-[#15411e] shadow-[#1F5F2C]/20' : 'bg-[#C8A646] hover:bg-[#b38f22] shadow-[#C8A646]/20'}`}
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      'إكمال التسجيل'
                    )}
                  </button>
                </div>

                <p className="text-center text-[14px] text-[#667064]">
                  لديك حساب بالفعل؟ <Link to="/login" className="text-[#1F5F2C] font-bold hover:underline">سجل دخولك من هنا</Link>
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
