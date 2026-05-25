import React from 'react';
import { Store, MapPin, Phone, Mail, Building, Check } from 'lucide-react';
import { toast } from 'sonner';

export const SupplierSettings = () => {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("تم حفظ التعديلات بنجاح");
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">إعدادات المتجر</h1>
          <p className="text-sm text-gray-500 mt-1">تحديث معلومات المتجر وبيانات التواصل المعتمدة</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden max-w-3xl">
        <form onSubmit={handleSave} className="p-6 sm:p-8 space-y-8">
          
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">المعلومات الأساسية</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Store className="w-4 h-4 text-gray-400" />
                  اسم المتجر المورد
                </label>
                <input 
                  type="text" 
                  defaultValue="شركة نماء الزراعية للتجارة" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] font-medium bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  رقم السجل التجاري
                </label>
                <input 
                  type="text" 
                  defaultValue="1010543210" 
                  readOnly
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none font-medium bg-gray-100 text-gray-500 cursor-not-allowed"
                />
                <p className="text-[11px] text-gray-400 mt-1.5">لا يمكن تغيير رقم السجل بعد توثيق الحساب.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">بيانات التواصل والعنوان</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  البريد الإلكتروني
                </label>
                <input 
                  type="email" 
                  defaultValue="sales@nama-agri.sa" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] font-medium text-left"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  رقم الهاتف
                </label>
                <input 
                  type="tel" 
                  defaultValue="+966501234567" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] font-medium text-left"
                  dir="ltr"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  العنوان المعتمد
                </label>
                <textarea 
                  rows={3}
                  defaultValue="الرياض، المدينة الصناعية الثانية، مستودع رقم 4" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37] font-medium resize-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
            <button 
              type="button"
              className="px-6 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              إلغاء
            </button>
            <button 
              type="submit"
              className="bg-[#D4AF37] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#C29F31] transition-colors flex items-center gap-2 shadow-md shadow-[#D4AF37]/20"
            >
              <Check className="w-5 h-5" />
              حفظ الإعدادات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
