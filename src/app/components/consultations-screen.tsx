import { Star, MessageCircle, Calendar, ChevronLeft, Search, User } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { motion } from "motion/react";

export function ConsultationsScreen() {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filters = ["الكل", "بيوت محمية", "أمراض نباتية", "ري"];

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Header */}
      <section className="mt-2">
        <h2 className="text-2xl font-bold text-[#111827]">استشارة خبير</h2>
        <p className="text-[#6B7280] text-sm mt-1">تحدث مع نخبة الخبراء الزراعيين المعتمدين.</p>
      </section>

      {/* Filter Bar */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
              activeFilter === filter
                ? "bg-[#D4AF37] text-white shadow-sm"
                : "bg-white text-[#6B7280] border border-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Experts List */}
      <div className="flex flex-col gap-4">
        <ExpertCard
          name="م. محمد"
          specialty="خبير آفات زراعية"
          rating={4.8}
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
        />
        <ExpertCard
          name="د. سارة"
          specialty="أخصائية ري وتسميد"
          rating={4.9}
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        />
        <ExpertCard
          name="م. إبراهيم"
          specialty="متخصص في البيوت المحمية"
          rating={4.7}
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
        />
        <ExpertCard
          name="م. نورة"
          specialty="أمراض النخيل والتمور"
          rating={4.6}
          image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
        />
      </div>
    </div>
  );
}

function ExpertCard({ name, specialty, rating, image }: { name: string; specialty: string; rating: number; image: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="card border border-gray-100 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/20">
          <ImageWithFallback src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg">{name}</h4>
            <div className="flex items-center gap-1 bg-[#D4AF37]/10 px-2 py-0.5 rounded-md">
              <Star size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
              <span className="text-[#D4AF37] font-bold text-xs">{rating}</span>
            </div>
          </div>
          <p className="text-[#6B7280] text-sm">{specialty}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="button-primary flex-1 py-3 text-sm">
          <Calendar size={18} />
          حجز موعد
        </button>
        <button className="button-secondary flex-1 py-3 text-sm">
          <MessageCircle size={18} />
          محادثة فورية
        </button>
      </div>
    </motion.div>
  );
}
