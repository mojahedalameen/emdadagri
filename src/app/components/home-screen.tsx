import { Search, ChevronLeft, ShoppingCart, Leaf, MessageCircle, Truck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Link } from "react-router";

export function HomeScreen() {
  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Welcome Section */}
      <section className="mt-2">
        <h2 className="text-2xl font-bold text-[#111827]">مرحباً بك، مزرعة فهد 🌾</h2>
        <p className="text-[#6B7280] text-sm mt-1">تتبع نمو مزرعتك وتحقق من طلباتك.</p>
      </section>

      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Search size={18} className="text-[#6B7280]" />
        </div>
        <input
          type="text"
          placeholder="ابحث عن أسمدة، بذور، معدات..."
          className="input-field pr-10"
        />
      </div>

      {/* Quick Actions (3 Horizontal Cards) */}
      <section>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <QuickActionCard
            icon={<Leaf className="text-[#D4AF37]" size={20} />}
            label="طلب مدخلات زراعية"
            to="/suppliers"
          />
          <QuickActionCard
            icon={<MessageCircle className="text-[#D4AF37]" size={20} />}
            label="تحدث مع خبير"
            to="/consultations"
          />
          <QuickActionCard
            icon={<Truck className="text-[#D4AF37]" size={20} />}
            label="تتبع الشحنة"
            to="/cart"
          />
        </div>
      </section>

      {/* Suppliers Offers (Vertical Product Cards) */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">عروض الموردين</h3>
          <Link to="/suppliers" className="text-[#D4AF37] text-sm font-medium">عرض الكل</Link>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <ProductCard
            image="https://images.unsplash.com/photo-1592841208389-52317a7027e4?q=80&w=200&auto=format&fit=crop"
            title="بذور طماطم هجينة"
            supplier="الشركة الوطنية الزراعية"
            price="150"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=200&auto=format&fit=crop"
            title="سماد يوريا عضوي"
            supplier="سافكو للكيماويات"
            price="280"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1592919016382-7052f2027e8b?q=80&w=200&auto=format&fit=crop"
            title="خرطوم ري بالتنقيط"
            supplier="مصنع البلاستيك الوطني"
            price="420"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=200&auto=format&fit=crop"
            title="مبيد حشري آمن"
            supplier="الشركة الحديثة للزراعة"
            price="95"
          />
        </div>
      </section>
      
      {/* Cart Floating Button (MVP shortcut) */}
      <Link to="/cart" className="fixed bottom-[100px] left-6 w-14 h-14 bg-[#D4AF37] rounded-full shadow-lg flex items-center justify-center text-white">
        <ShoppingCart size={24} />
      </Link>
    </div>
  );
}

function QuickActionCard({ icon, label, to }: { icon: React.ReactNode; label: string; to: string }) {
  return (
    <Link to={to} className="flex-shrink-0 w-[120px]">
      <div className="card h-full flex flex-col items-center justify-center text-center gap-2 p-3 hover:border-[#D4AF37] border border-transparent transition-all">
        <div className="bg-[#D4AF37]/10 w-10 h-10 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <span className="text-xs font-bold leading-tight line-clamp-2">{label}</span>
      </div>
    </Link>
  );
}

function ProductCard({ image, title, supplier, price }: { image: string; title: string; supplier: string; price: string }) {
  return (
    <motion.div whileTap={{ scale: 0.98 }} className="card p-0 overflow-hidden border border-gray-100 flex flex-col">
      <div className="h-32 w-full">
        <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h4 className="font-bold text-sm line-clamp-1">{title}</h4>
        <p className="text-[10px] text-[#6B7280] mb-2">{supplier}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#6B7280]">السعر</span>
            <span className="text-[#D4AF37] font-bold text-sm">{price} ر.س</span>
          </div>
          <button className="bg-[#D4AF37] text-white p-1.5 rounded-lg hover:bg-[#B8962A] transition-colors">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
