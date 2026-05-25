import React, { useState } from 'react';
import { ChevronRight, Trash2, ShieldCheck, Wallet, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

export const FarmerCart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'بذور طماطم هجين',
      supplier: 'مؤسسة نماء الزراعية',
      price: 45,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1658992004251-78399f66f6f4?w=200&q=80',
    },
    {
      id: 2,
      name: 'سماد يوريا 46%',
      supplier: 'الشركة السعودية للأسمدة',
      price: 120,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1696371269544-e2601fd835f5?w=200&q=80',
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(current => current.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        if (newQ === 0) {
          handleDelete(id);
          return item;
        }
        return { ...item, quantity: newQ };
      }
      return item;
    }));
  };

  const handleDelete = (id: number) => {
    toast('هل تريد حذف المنتج من السلة؟', {
      action: {
        label: 'حذف',
        onClick: () => {
          setItems(current => current.filter(item => item.id !== id));
          toast.success('تم الحذف بنجاح');
        }
      },
      cancel: { label: 'تراجع' }
    });
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  const [paymentMethod, setPaymentMethod] = useState('apple');

  if (items.length === 0) {
    return (
      <div className="flex flex-col h-full bg-[#F8F9FA] font-sans">
        <div className="p-5 flex items-center gap-4 bg-white border-b border-[#E0E0E0] shadow-sm">
          <button onClick={() => navigate(-1)} className="w-10 h-10 bg-[#F8F9FA] rounded-full flex items-center justify-center hover:bg-white border border-transparent hover:border-[#E0E0E0] hover:shadow-sm transition-all duration-300">
            <ChevronRight className="w-6 h-6 text-[#212529] mr-0.5" />
          </button>
          <h1 className="text-xl font-bold text-[#212529]">السلة</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-24 h-24 bg-white border border-[#E0E0E0] shadow-sm rounded-full flex items-center justify-center mb-5">
            <ShoppingCart className="w-10 h-10 text-gray-400" />
          </div>
          <p className="font-bold text-[#212529] mb-2 text-xl">سلتك فارغة</p>
          <p className="text-[14px] text-gray-500 mb-8 font-bold">لم تقم بإضافة أي منتجات للسلة بعد.</p>
          <button 
            onClick={() => navigate('/farmer/market')}
            className="bg-[#2D5A27] text-white font-bold py-3.5 px-10 rounded-[16px] shadow-md hover:shadow-lg hover:bg-[#234a1f] hover:-translate-y-0.5 transition-all duration-300"
          >
            تصفح السوق
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] font-sans relative">
      <div className="p-4 flex items-center gap-4 bg-white border-b border-[#E0E0E0] shrink-0 sticky top-0 z-10 shadow-sm">
        <button onClick={() => navigate(-1)} className="w-10 h-10 bg-[#F8F9FA] rounded-full flex items-center justify-center hover:bg-white border border-transparent hover:border-[#E0E0E0] hover:shadow-sm transition-all duration-300">
          <ChevronRight className="w-6 h-6 text-[#212529] mr-0.5" />
        </button>
        <h1 className="text-[18px] font-bold text-[#212529]">السلة ({items.length})</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-5 pb-36 no-scrollbar">
        <div className="space-y-4 mb-8">
          {items.map(item => (
            <div key={item.id} className="bg-white p-3.5 rounded-[16px] border border-[#E0E0E0] shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 group">
              <div className="w-[85px] h-[85px] bg-[#F8F9FA] rounded-[12px] overflow-hidden shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col py-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-[#212529] text-[14px] line-clamp-1 pl-4 group-hover:text-[#2D5A27] transition-colors">{item.name}</h3>
                  <button onClick={() => handleDelete(item.id)} className="text-gray-400 hover:text-red-500 transition-colors shrink-0 p-1 bg-[#F8F9FA] rounded-md hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 font-bold mb-auto">{item.supplier}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold text-[#2D5A27] text-[15px]">{item.price} <span className="text-[10px] text-gray-500 font-bold">ر.س</span></span>
                  <div className="flex items-center gap-3 bg-[#F8F9FA] px-2 py-1.5 rounded-[10px] border border-[#E0E0E0] shadow-sm">
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center font-bold text-[#212529] hover:bg-white hover:text-[#2D5A27] hover:shadow-sm rounded-md transition-all border border-transparent hover:border-[#E0E0E0]">+</button>
                    <span className="w-4 text-center text-[14px] font-bold text-[#212529]">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center font-bold text-[#212529] hover:bg-white hover:text-red-500 hover:shadow-sm rounded-md transition-all border border-transparent hover:border-[#E0E0E0]">-</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <h3 className="font-bold text-[#212529] text-[16px] mb-4">طريقة الدفع</h3>
        <div className="flex flex-col gap-3 mb-8">
          <label className={`flex items-center gap-4 p-4 rounded-[16px] border-2 transition-all cursor-pointer group ${paymentMethod === 'apple' ? 'border-[#2D5A27] bg-[#2D5A27]/5 shadow-sm' : 'border-[#E0E0E0] bg-white hover:border-[#2D5A27]/50'}`}>
            <input type="radio" name="payment" checked={paymentMethod === 'apple'} onChange={() => setPaymentMethod('apple')} className="text-[#2D5A27] scale-125 accent-[#2D5A27]" />
            <span className="font-bold text-[15px] text-[#212529]">Apple Pay</span>
          </label>
          <label className={`flex items-center gap-4 p-4 rounded-[16px] border-2 transition-all cursor-pointer group ${paymentMethod === 'mada' ? 'border-[#2D5A27] bg-[#2D5A27]/5 shadow-sm' : 'border-[#E0E0E0] bg-white hover:border-[#2D5A27]/50'}`}>
            <input type="radio" name="payment" checked={paymentMethod === 'mada'} onChange={() => setPaymentMethod('mada')} className="text-[#2D5A27] scale-125 accent-[#2D5A27]" />
            <span className="font-bold text-[15px] text-[#212529]">مدى (Mada)</span>
          </label>
        </div>

        {/* Summary */}
        <div className="bg-white p-5 rounded-[16px] border border-[#E0E0E0] shadow-sm mb-4">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-[14px] text-gray-600 font-bold">
              <span>المجموع الفرعي</span>
              <span className="text-[#212529]">{subtotal.toFixed(2)} ر.س</span>
            </div>
            <div className="flex justify-between text-[14px] text-gray-600 font-bold">
              <span>ضريبة القيمة المضافة (15%)</span>
              <span className="text-[#212529]">{vat.toFixed(2)} ر.س</span>
            </div>
          </div>
          <div className="pt-4 border-t border-dashed border-[#E0E0E0] flex justify-between items-end">
            <span className="font-bold text-[#212529] text-[16px]">الإجمالي</span>
            <span className="text-2xl font-bold text-[#2D5A27]">{total.toFixed(2)} <span className="text-[12px] text-gray-500 font-bold">ر.س</span></span>
          </div>
        </div>
      </div>

      {/* Fixed Checkout Button */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-[#E0E0E0] z-20 shadow-[0_-8px_20px_-10px_rgba(0,0,0,0.05)] pb-safe">
        <button 
          onClick={() => {
            toast.success('تم تأكيد طلبك بنجاح!');
            navigate('/farmer/orders');
          }}
          className="w-full bg-[#C5A028] text-white font-bold h-[54px] rounded-[16px] shadow-md hover:shadow-lg hover:bg-[#b08e23] hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2 text-[15px]"
        >
          <Wallet className="w-5 h-5" />
          تأكيد الطلب
        </button>
      </div>
    </div>
  );
};