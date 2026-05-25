import { Trash2, Plus, Minus, ChevronRight, Apple, CreditCard, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Link } from "react-router";

export function CartScreen() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "بذور طماطم هجينة",
      supplier: "الشركة الوطنية الزراعية",
      price: 150,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1592841208389-52317a7027e4?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "سماد يوريا عضوي",
      supplier: "سافكو للكيماويات",
      price: 280,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "خرطوم ري بالتنقيط",
      supplier: "مصنع البلاستيك الوطني",
      price: 420,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1592919016382-7052f2027e8b?q=80&w=200&auto=format&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <Link to="/" className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronRight size={24} />
        </Link>
        <h2 className="text-2xl font-bold">سلة المشتريات</h2>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-4 p-4 mb-32">
        {items.map((item) => (
          <div key={item.id} className="card border border-gray-100 flex gap-4 p-3 items-center">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm line-clamp-1">{item.name}</h4>
              <p className="text-[10px] text-[#6B7280]">{item.supplier}</p>
              <span className="text-[#D4AF37] font-bold text-sm block mt-1">{item.price} ر.س</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#D4AF37] transition-colors">
                  <Plus size={16} />
                </button>
                <span className="font-bold text-sm min-w-[20px] text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#D4AF37] transition-colors">
                  <Minus size={16} />
                </button>
              </div>
              <button className="text-red-400 hover:text-red-500 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}

        {/* Order Summary */}
        <div className="card bg-white mt-4 flex flex-col gap-3">
          <h3 className="font-bold text-md border-b border-gray-100 pb-2">ملخص الطلب</h3>
          <div className="flex justify-between text-sm">
            <span className="text-[#6B7280]">المجموع الفرعي</span>
            <span className="font-medium">{subtotal.toLocaleString()} ر.س</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-[#6B7280]">ضريبة القيمة المضافة (15%)</span>
            <span className="font-medium">{vat.toLocaleString()} ر.س</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-100">
            <span>الإجمالي</span>
            <span className="text-[#D4AF37]">{total.toLocaleString()} ر.س</span>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Checkout */}
      <div className="fixed bottom-[80px] left-0 right-0 bg-white border-t border-gray-100 p-4 max-w-[393px] mx-auto z-40">
        <button className="button-primary w-full py-4 rounded-xl text-lg shadow-lg flex items-center justify-between px-6 transition-transform active:scale-95">
           <div className="flex items-center gap-3">
             <CreditCard size={24} />
             <span className="font-bold">إتمام الطلب</span>
           </div>
           <div className="flex items-center gap-2">
             <span className="text-white/80 text-sm">بواسطة</span>
             <Apple size={20} />
             <span className="font-bold">Pay</span>
           </div>
        </button>
      </div>
    </div>
  );
}
