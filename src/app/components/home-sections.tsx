import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SimpleFormModal } from './simple-form-modal';

// Import local premium assets
import heroDatePalms from '../../assets/hero_date_palms.png';
import pivotIrrigation from '../../assets/pivot_irrigation.png';
import smartGreenhouse from '../../assets/smart_greenhouse.png';
import organicFertilizer from '../../assets/organic_fertilizer.png';
import wheatSeeds from '../../assets/wheat_seeds.png';

// News Ticker
export const NewsTicker = () => {
  const news = [
    "السعودية تعلن استعادة أول مليون هكتار من الأراضي المتدهورة — 27 مارس 2026",
    "وزارة البيئة والمياه والزراعة تطلق صندوق نماء لدعم الاستدامة البيئية والمائية والزراعية — 17 فبراير 2026",
    "السعودية تشارك كضيف شرف في معرض AgriteQ 2026 وتستعرض تقدمها في الاكتفاء الذاتي الزراعي — 12 فبراير 2026",
    "توقيع اتفاقية دولية لتعزيز الابتكار الزراعي في المملكة — 14 يناير 2026"
  ];

  return (
    <div className="bg-[#1F5F2C] text-white py-3 overflow-hidden whitespace-nowrap border-b border-[#C8A646]/30" dir="rtl">
      <div className="flex animate-ticker items-center space-x-12 space-x-reverse">
        {Array(3).fill(0).flatMap(() => news).map((text, i) => (
          <div key={i} className="flex items-center gap-4 px-4 border-l border-white/20 last:border-l-0">
             <div className="w-2 h-2 bg-[#C8A646] rounded-full shrink-0"></div>
             <span className="text-[14px] font-medium tracking-wide">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hero Section
export const Hero = () => {
  return (
    <section className="relative pt-12 pb-16 overflow-hidden bg-[#F7F8F5]" dir="rtl">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1F5F2C]/5 rounded-bl-[10rem] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#C8A646]/5 rounded-tr-[10rem] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[18px] md:text-[22px] font-bold text-[#1F5F2C] mb-3 tracking-wide">
                شركة إمداد <span className="text-[#A6802B]">الزراعية</span>
              </h2>
              
              <h1 className="font-bold text-[#1D2A1F] leading-[1.2] mb-6 text-[28px] md:text-[36px] tracking-tight">
                أفضل المدخلات الزراعية <br />
                <span className="text-[#1F5F2C] relative inline-block">
                  من موردين معتمدين
                  <svg className="absolute -bottom-2 right-0 w-full h-2 text-[#C8A646]/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
                <span className="text-[#A6802B]"> لمزرعتك</span>
              </h1>
              
              <p className="text-[14px] md:text-[15px] text-[#667064] mb-8 leading-relaxed max-w-xl">
                نربط المزارع السعودي بأفضل الموردين المعتمدين لتوفير أجود أنواع البذور والأسمدة والمعدات لتنمية محاصيلك، مع تقديم خدمات استشارية مساندة لضمان نجاح محصولك.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/marketplace" className="inline-flex items-center justify-center px-7 py-3.5 bg-[#1F5F2C] text-white rounded-full font-bold hover:bg-[#15411e] active:scale-95 transition-all shadow-lg shadow-[#1F5F2C]/20 group text-[15px]">
                  تصفح المدخلات الزراعية
                  <LucideIcons.ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
                </Link>
                <Link to="/consultations" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#1D2A1F] border border-[#E7E7E2] rounded-full font-bold text-[15px] hover:bg-[#F7F8F5] hover:border-[#1F5F2C] active:scale-95 transition-all shadow-sm">
                  طلب استشارة
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-4 p-4 bg-white/70 backdrop-blur rounded-[1.5rem] border border-[#E7E7E2] w-fit shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex -space-x-2 space-x-reverse">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-[#F7F8F5] hover:z-10 transition-all shadow-sm">
                      <LucideIcons.User2 className="w-5 h-5 text-[#1F5F2C]" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-[#C8A646] mb-0.5">
                    {[1, 2, 3, 4, 5].map(s => <LucideIcons.Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-[13px] text-[#1D2A1F] font-bold">ثقة أكثر من <span className="text-[#1F5F2C] font-extrabold">480+</span> مزارع سعودي</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-center items-center h-[420px] md:h-[480px] w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              {/* Primary Image: Date Palms (Heritage) */}
              <div className="absolute right-6 top-6 w-[75%] h-[280px] md:h-[340px] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform duration-500 z-10">
                <ImageWithFallback 
                  src={heroDatePalms} 
                  alt="Saudi Date Palms Oasis" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A1F]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-6 text-white z-20">
                  <p className="text-[11px] text-[#C8A646] font-bold">أصالة نبعت من أرضنا</p>
                  <h4 className="text-[16px] font-black">واحات النخيل بالتنسيق التقليدي</h4>
                </div>
              </div>

              {/* Secondary Image: Pivot Irrigation (Modern Tech) */}
              <div className="absolute left-0 bottom-4 w-[55%] h-[140px] md:h-[170px] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white hover:scale-[1.03] transition-transform duration-500 z-20">
                <ImageWithFallback 
                  src={pivotIrrigation} 
                  alt="Saudi Modern Pivot Irrigation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2A1F]/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 right-4 text-white z-20">
                  <p className="text-[10px] text-[#C8A646] font-bold">مشاريع الأمن الغذائي</p>
                  <h4 className="text-[13px] font-extrabold">الري المحوري الحديث بالدقة والذكاء</h4>
                </div>
              </div>

              {/* Third Image: Smart Greenhouse (Innovation) */}
              <div className="absolute left-8 top-0 w-[38%] h-[100px] md:h-[120px] rounded-[1.2rem] overflow-hidden shadow-lg border-2 border-white hover:scale-[1.03] transition-transform duration-500 z-20 hidden md:block">
                <ImageWithFallback 
                  src={smartGreenhouse} 
                  alt="Saudi Smart Greenhouse" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Glass Badges */}
              <div className="absolute bottom-16 right-[-10px] bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-[#C8A646]/20 hover:-translate-y-1 transition-transform z-30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#C8A646]/10 rounded-lg flex items-center justify-center">
                    <LucideIcons.ShieldCheck className="w-4.5 h-4.5 text-[#C8A646]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#667064] font-bold">موردون معتمدون</p>
                    <p className="text-[12px] font-extrabold text-[#1D2A1F]">منتجات أصلية 100%</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-[-5px] bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-[#1F5F2C]/10 hover:scale-105 transition-transform z-30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#1F5F2C]/10 rounded-full flex items-center justify-center">
                    <LucideIcons.Truck className="text-[#1F5F2C] w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#667064] font-bold">توصيل للمزرعة</p>
                    <p className="text-[12px] font-extrabold text-[#1D2A1F]">خلال 48 ساعة فقط</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Decorative patterns */}
      <div className="absolute -z-10 top-[-50px] left-[-50px] w-64 h-64 bg-[#C8A646]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -z-10 bottom-[-50px] right-[-50px] w-80 h-80 bg-[#1F5F2C]/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

// Logo Section
export const LogoSection = () => {
  return null;
};

// Technical Support
export const TechnicalSupport = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-12 bg-white" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-3 py-1 bg-[#C8A646]/10 text-[#A6802B] text-[12px] font-bold rounded-full mb-4 uppercase tracking-wider">
              قنوات التواصل
            </div>
            <h2 className="text-xl md:text-[28px] font-bold text-[#1D2A1F] mb-4 leading-[1.2]">الدعم الفني <br /><span className="text-[#1F5F2C]">بخدمتكم دائماً</span></h2>
            <p className="text-[#667064] text-[15px] mb-8 leading-relaxed max-w-lg">
              فريقنا المتخصص متواجد للرد على استفساراتكم التقنية والزراعية. سواء كنت مزارعاً تبحث عن حلول، أو مورداً ترغب بالانضمام لمنصتنا، لا تتردد في التواصل معنا.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#F7F8F5] rounded-xl flex items-center justify-center border border-[#E7E7E2] group-hover:bg-[#1F5F2C] group-hover:border-[#1F5F2C] transition-all duration-300">
                  <LucideIcons.Phone className="w-5 h-5 text-[#1F5F2C] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[12px] text-[#667064] mb-0.5">الرقم الموحد</p>
                  <p className="text-[15px] font-bold text-[#1D2A1F] tracking-wide">920000000</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#F7F8F5] rounded-xl flex items-center justify-center border border-[#E7E7E2] group-hover:bg-[#1F5F2C] group-hover:border-[#1F5F2C] transition-all duration-300">
                  <LucideIcons.Mail className="w-5 h-5 text-[#1F5F2C] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[12px] text-[#667064] mb-0.5">البريد الإلكتروني</p>
                  <p className="text-[15px] font-bold text-[#1D2A1F]">support@imdad.sa</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white/80 backdrop-blur-lg p-6 md:p-8 rounded-[2rem] border border-[#E7E7E2] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-l from-[#1F5F2C] to-[#C8A646]"></div>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <LucideIcons.CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D2A1F] mb-2">تم الإرسال بنجاح</h3>
                  <p className="text-[14px] text-[#667064]">شكراً لتواصلك معنا، سيقوم فريق الدعم بالرد عليك قريباً.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#1D2A1F] block mr-2">الاسم الكريم</label>
                    <input 
                      type="text" 
                      required
                      placeholder="أدخل اسمك بالكامل"
                      className="w-full px-4 py-3 bg-[#F7F8F5] border border-[#E7E7E2] rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right text-[14px]"
                    />
                  </div>
                  <div className="space-y-1.5 relative">
                    <label className="text-[13px] font-bold text-[#1D2A1F] block mr-2">نوع الاستفسار</label>
                    <select className="w-full px-4 py-3 bg-[#F7F8F5] border border-[#E7E7E2] rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right appearance-none text-[14px] cursor-pointer">
                      <option value="farmer">مزارع / صاحب مشروع</option>
                      <option value="supplier">مورد / شريك أعمال</option>
                      <option value="other">استفسار عام</option>
                    </select>
                    <LucideIcons.ChevronDown className="absolute left-4 bottom-4 w-4 h-4 text-[#667064] pointer-events-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-bold text-[#1D2A1F] block mr-2">الرسالة / تفاصيل الاستفسار</label>
                    <textarea 
                      required
                      placeholder="كيف يمكننا مساعدتك اليوم؟"
                      rows={3}
                      className="w-full px-4 py-3 bg-[#F7F8F5] border border-[#E7E7E2] rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right resize-none text-[14px]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-[#1F5F2C] text-white rounded-full font-bold text-[15px] hover:bg-[#15411e] active:scale-[0.98] transition-all shadow-md shadow-[#1F5F2C]/10 mt-3 flex items-center justify-center gap-2 group"
                  >
                    إرسال الرسالة
                    <LucideIcons.Send className="w-4 h-4 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Consultation Preview
export const ConsultationPreview = () => {
  const [showModal, setShowModal] = useState(false);

  const consultants = [
    { name: "م. فهد", spec: "خبير محاصيل القمح", city: "القصيم", exp: "12 سنة", status: "متاح الآن" },
    { name: "م. محمد", spec: "أخصائي ري حديث", city: "الرياض", exp: "8 سنوات", status: "يرد خلال 10 دقائق" },
    { name: "م. سعد", spec: "مكافحة آفات زراعية", city: "الأحساء", exp: "15 سنة", status: "متاح الآن" }
  ];

  return (
    <section className="py-12 bg-[#F7F8F5]" dir="rtl">
       <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            <div className="lg:w-1/2">
               <h2 className="text-[22px] md:text-[28px] font-bold text-[#1D2A1F] mb-6 leading-tight">
                  لا تخاطر بمحصولك.. <br />
                  <span className="text-[#1F5F2C]">استشر نخبة المهندسين</span>
               </h2>
               <p className="text-[15px] text-[#667064] mb-8 leading-relaxed">
                  نخبة من المهندسين الزراعيين السعوديين المعتمدين بانتظارك لتقديم حلول دقيقة لمشاكل التربة، الري، ومكافحة الآفات بناءً على خبرة محلية في بيئة المملكة.
               </p>
               <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform cursor-default">
                     <LucideIcons.CheckCircle2 className="w-5 h-5 text-[#A6802B]" />
                     <span className="text-[14px] font-bold text-[#1D2A1F]">اعتماد رسمي من وزارة الزراعة</span>
                  </div>
                  <div className="flex items-center gap-3 hover:translate-x-1 transition-transform cursor-default">
                     <LucideIcons.CheckCircle2 className="w-5 h-5 text-[#A6802B]" />
                     <span className="text-[14px] font-bold text-[#1D2A1F]">استجابة فورية على مدار الساعة</span>
                  </div>
               </div>
               <Link to="/consultations" className="text-[#1F5F2C] font-bold text-[15px] flex items-center gap-2 group hover:gap-4 transition-all active:scale-95">
                  استعرض كافة المهندسين
                  <LucideIcons.ChevronLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
               </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 gap-4 w-full">
               {consultants.map((c, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.02, translateY: -3 }}
                   whileTap={{ scale: 0.98 }}
                   className="bg-white/80 backdrop-blur-md p-6 rounded-[1.5rem] border border-[#E7E7E2] shadow-sm flex items-center justify-between group hover:shadow-lg hover:border-[#1F5F2C] transition-all cursor-pointer"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 rounded-full border-2 border-[#F7F8F5] flex items-center justify-center bg-[#1F5F2C]/5 shrink-0 group-hover:scale-105 transition-transform">
                          <LucideIcons.User2 className="w-8 h-8 text-[#1F5F2C]" />
                       </div>
                       <div>
                          <h4 className="text-[16px] font-bold text-[#1D2A1F] mb-0.5 group-hover:text-[#1F5F2C] transition-colors">{c.name}</h4>
                          <p className="text-[#667064] text-[13px] mb-1.5">{c.spec} • {c.city}</p>
                          <div className="flex items-center gap-1.5">
                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                             <span className="text-[11px] font-bold text-green-600 uppercase">{c.status}</span>
                          </div>
                       </div>
                    </div>
                    <button 
                       onClick={() => setShowModal(true)}
                       className="px-4.5 py-2 bg-[#1F5F2C] text-white rounded-full font-bold text-[13px] hover:bg-[#15411e] active:scale-90 transition-all shadow-md"
                    >
                       بدء المحادثة
                    </button>
                 </motion.div>
               ))}
            </div>
          </div>
       </div>
       {showModal && (
         <SimpleFormModal
           title="طلب استشارة زراعية"
           subtitle="املأ البيانات التالية ليتواصل معك المهندس المختص"
           type="consultation"
           onClose={() => setShowModal(false)}
         />
       )}
    </section>
  );
};

// Marketplace Preview
export const MarketplaceGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    { 
      id: 1, 
      name: "بذور القمح الصلب - صنف نجران", 
      price: "240 ر.س", 
      supplier: "شركة نماء الزراعية", 
      category: "بذور"
    },
    { 
      id: 2, 
      name: "سماد عضوي فائق الجودة 50KG", 
      price: "185 ر.س", 
      supplier: "مصنع الحصاد الذهبي", 
      category: "أسمدة"
    },
    { 
      id: 3, 
      name: "مبيد آفات زراعي واسع النطاق", 
      price: "95 ر.س", 
      supplier: "شركة الياسين الزراعية", 
      category: "مبيدات"
    },
    { 
      id: 4, 
      name: "منظومة ري ذكية متكاملة", 
      price: "1,250 ر.س", 
      supplier: "شركة سنابل الريف", 
      category: "ري"
    }
  ];

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "بذور":
        return {
          bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/50",
          icon: <LucideIcons.Sprout className="w-8 h-8 text-emerald-600" />
        };
      case "أسمدة":
        return {
          bg: "bg-gradient-to-br from-amber-50 to-amber-100/50",
          icon: <LucideIcons.Leaf className="w-8 h-8 text-amber-600" />
        };
      case "مبيدات":
        return {
          bg: "bg-gradient-to-br from-rose-50 to-rose-100/50",
          icon: <LucideIcons.FlaskConical className="w-8 h-8 text-rose-600" />
        };
      case "معدات":
        return {
          bg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
          icon: <LucideIcons.Wrench className="w-8 h-8 text-blue-600" />
        };
      case "ري":
        return {
          bg: "bg-gradient-to-br from-sky-50 to-sky-100/50",
          icon: <LucideIcons.Droplet className="w-8 h-8 text-sky-600" />
        };
      default:
        return {
          bg: "bg-gradient-to-br from-purple-50 to-purple-100/50",
          icon: <LucideIcons.Boxes className="w-8 h-8 text-purple-600" />
        };
    }
  };

  return (
    <section className="py-12 bg-white" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
          <div>
            <div className="inline-block px-3 py-1 bg-[#C8A646]/10 text-[#A6802B] text-[12px] font-bold rounded-full mb-3">
              سوق المدخلات الزراعية
            </div>
            <h2 className="text-[22px] md:text-[28px] font-bold text-[#1D2A1F] mb-2">أفضل المنتجات لمزرعتك</h2>
            <p className="text-[#667064] text-[15px]">تسوق مباشرة من كبار الموردين المعتمدين في المملكة</p>
          </div>
          <Link to="/marketplace" className="px-6 py-2.5 bg-white text-[#1F5F2C] border border-[#1F5F2C] rounded-full font-bold text-[14px] hover:bg-[#1F5F2C] hover:text-white active:scale-95 transition-all shadow-sm">
            عرض كافة المنتجات
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const styles = getCategoryStyles(product.category);
            return (
              <Link 
                to={`/product/${product.id}`} 
                key={product.id}
                className="group flex flex-col bg-white rounded-[1.5rem] border border-[#E7E7E2] overflow-hidden hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] transition-all duration-500"
              >
                <div className={`h-40 flex items-center justify-center relative ${styles.bg} transition-colors duration-500`}>
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#E7E7E2]/60 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {styles.icon}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#1F5F2C] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-md">
                    {product.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-[11px] text-[#667064] mb-1.5 font-medium">{product.supplier}</p>
                  <h3 className="text-[16px] font-bold text-[#1D2A1F] mb-4 group-hover:text-[#1F5F2C] transition-colors leading-tight">{product.name}</h3>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#667064]">السعر</span>
                      <span className="text-[16px] font-bold text-[#1F5F2C]">{product.price}</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedProduct(product.name);
                      }}
                      className="w-10 h-10 bg-[#F7F8F5] text-[#1F5F2C] rounded-xl flex items-center justify-center hover:bg-[#1F5F2C] hover:text-white active:scale-90 transition-all shadow-sm"
                    >
                      <LucideIcons.ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {selectedProduct && (
        <SimpleFormModal
          title="إضافة إلى السلة"
          subtitle="يرجى إدخال بياناتك لإتمام عملية طلب المنتج"
          productName={selectedProduct}
          type="purchase"
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

// Supplier Directory CTA
export const SupplierSection = () => {
  return (
    <section className="py-12 bg-[#F7F8F5]" dir="rtl">
       <div className="max-w-[1240px] mx-auto px-6 md:px-12">
          <div className="bg-[#1D2A1F] rounded-[2rem] p-8 md:p-14 relative overflow-hidden group">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F5F2C]/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A646]/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000 delay-100"></div>
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-3/5">
                   <h2 className="text-[22px] md:text-[30px] font-bold text-white mb-4 leading-tight">
                      كن شريكاً في <br />
                      <span className="text-[#C8A646]">النهضة الزراعية</span>
                   </h2>
                   <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
                      انضم إلى كبرى الشركات الزراعية السعودية التي تعرض منتجاتها عبر إمداد. نمنحك الأدوات التقنية للوصول إلى آلاف المزارعين وإدارة مبيعاتك باحترافية.
                   </p>
                   <div className="flex flex-wrap gap-4">
                      <Link to="/register" className="px-6 py-3 bg-[#C8A646] text-[#1D2A1F] rounded-full font-bold text-[14px] hover:bg-[#b38f22] active:scale-95 transition-all shadow-md shadow-[#C8A646]/20">
                         انضم كمورد معتمد
                      </Link>
                      <a href="mailto:business@imdad.sa" className="px-6 py-3 bg-white/5 text-white border border-white/25 rounded-full font-bold text-[14px] backdrop-blur hover:bg-white/10 transition-colors text-center">
                         للتواصل: business@imdad.sa
                      </a>
                   </div>
                </div>
                <div className="lg:w-2/5 grid grid-cols-2 gap-3 opacity-50 group-hover:opacity-70 transition-opacity">
                   <div className="space-y-3">
                      <div className="bg-white/5 p-6 rounded-2xl backdrop-blur flex items-center justify-center hover:bg-white/10 transition-colors">
                         <LucideIcons.Factory className="w-12 h-12 text-white" />
                      </div>
                      <div className="bg-white/5 p-8 rounded-3xl backdrop-blur flex items-center justify-center hover:bg-white/10 transition-colors">
                         <LucideIcons.Warehouse className="w-12 h-12 text-white" />
                      </div>
                   </div>
                   <div className="space-y-4 pt-8">
                      <div className="bg-white/5 p-8 rounded-3xl backdrop-blur flex items-center justify-center hover:bg-white/10 transition-colors">
                         <LucideIcons.Tractor className="w-12 h-12 text-white" />
                      </div>
                      <div className="bg-white/5 p-8 rounded-3xl backdrop-blur flex items-center justify-center hover:bg-white/10 transition-colors">
                         <LucideIcons.Sprout className="w-12 h-12 text-white" />
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="mt-20">
             <p className="text-center text-[#667064] font-bold text-[14px] uppercase tracking-widest mb-12">موردون معتمدون في المنصة</p>
             <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <span className="text-[24px] font-bold text-[#1D2A1F]">شركة نماء</span>
                <span className="text-[24px] font-bold text-[#1D2A1F]">الحصاد الذهبي</span>
                <span className="text-[24px] font-bold text-[#1D2A1F]">سنابل الريف</span>
                <span className="text-[24px] font-bold text-[#1D2A1F]">الياسين الزراعية</span>
                <span className="text-[24px] font-bold text-[#1D2A1F]">معدات الجزيرة</span>
             </div>
          </div>
       </div>
    </section>
  );
};
