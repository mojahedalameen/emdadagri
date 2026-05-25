import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';

interface FormProps {
  title: string;
  subtitle: string;
  productName?: string;
  type: 'purchase' | 'consultation';
  onClose: () => void;
}

export const SimpleFormModal = ({ title, subtitle, productName, type, onClose }: FormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl relative flex flex-col max-h-[85vh] modal-content"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-[#F7F8F5] rounded-full hover:bg-white hover:shadow-md transition-all active:scale-90 z-20"
        >
          <LucideIcons.X className="w-5 h-5 text-[#667064]" />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col flex-1 overflow-hidden"
            >
              <div className="p-5 md:p-6 shrink-0 border-b border-[#E7E7E2]">
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${type === 'purchase' ? 'bg-[#1F5F2C]/10 text-[#1F5F2C]' : 'bg-[#C8A646]/10 text-[#C8A646]'}`}>
                    {type === 'purchase' ? <LucideIcons.ShoppingCart className="w-6 h-6" /> : <LucideIcons.MessageSquare className="w-6 h-6" />}
                  </div>
                  <h2 className="text-lg font-bold text-[#1D2A1F] mb-1">{title}</h2>
                  <p className="text-[13px] text-[#667064]">{subtitle}</p>
                </div>
              </div>

              <div className="overflow-y-auto flex-1 p-5 md:p-6">
                <form id="simple-form" onSubmit={handleSubmit} className="space-y-3.5">
                  {productName && (
                    <div className="p-3 bg-[#F7F8F5] rounded-2xl border border-[#E7E7E2] mb-3">
                      <p className="text-[11px] text-[#667064] mb-0.5">المنتج المختار:</p>
                      <p className="text-[13px] font-bold text-[#1F5F2C]">{productName}</p>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-[12px] font-bold text-[#1D2A1F] block mr-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      required
                      placeholder="أدخل اسمك الكريم"
                      className="w-full px-4 py-2.5 bg-[#F7F8F5] border-2 border-transparent rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right text-[13px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[12px] font-bold text-[#1D2A1F] block mr-2">رقم الجوال</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="05xxxxxxxx"
                      className="w-full px-4 py-2.5 bg-[#F7F8F5] border-2 border-transparent rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right text-[13px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[12px] font-bold text-[#1D2A1F] block mr-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      required
                      placeholder="example@mail.com"
                      className="w-full px-4 py-2.5 bg-[#F7F8F5] border-2 border-transparent rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right text-[13px]"
                    />
                  </div>

                  {type === 'consultation' && (
                    <>
                      <div className="space-y-1">
                        <label className="text-[12px] font-bold text-[#1D2A1F] block mr-2">نوع الاستشارة</label>
                        <select className="w-full px-4 py-2.5 bg-[#F7F8F5] border-2 border-transparent rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right appearance-none text-[13px]">
                          <option>استشارة عامة</option>
                          <option>أمراض ومكافحة آفات</option>
                          <option>أنظمة ري حديثة</option>
                          <option>تحليل تربة</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[12px] font-bold text-[#1D2A1F] block mr-2">وصف مختصر للمشكلة</label>
                        <textarea 
                          placeholder="اشرح لنا طبيعة المشكلة باختصار..."
                          rows={2.5}
                          className="w-full px-4 py-2.5 bg-[#F7F8F5] border-2 border-transparent rounded-xl focus:bg-white focus:border-[#1F5F2C] outline-none transition-all text-right resize-none text-[13px]"
                        />
                      </div>
                    </>
                  )}
                </form>
              </div>

              <div className="p-5 md:p-6 shrink-0 border-t border-[#E7E7E2] bg-white rounded-b-[2rem]">
                <button 
                  type="submit"
                  form="simple-form"
                  disabled={loading}
                  className={`w-full py-3.5 text-white font-bold text-[15px] rounded-full shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 ${type === 'purchase' ? 'bg-[#1F5F2C] hover:bg-[#15411e] shadow-[#1F5F2C]/20' : 'bg-[#C8A646] hover:bg-[#b38f22] shadow-[#C8A646]/20'}`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    'إرسال الطلب'
                  )}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 text-center"
            >
              <div className="w-14 h-14 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <LucideIcons.CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-[#1D2A1F] mb-3">تم استلام طلبك بنجاح</h2>
              <p className="text-[14px] text-[#667064] mb-6 leading-relaxed">
                {type === 'purchase' 
                  ? "تمت إضافة طلبك بنجاح، وسيتم التواصل معك لاستكمال عملية الشراء."
                  : "تم استلام طلبك بنجاح، وسيتم التواصل معك قريباً."}
              </p>
              <button 
                onClick={onClose}
                className="w-full py-3 bg-[#1F5F2C] text-white rounded-full font-bold text-[14px] hover:bg-[#15411e] transition-all"
              >
                حسناً، شكراً لك
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};