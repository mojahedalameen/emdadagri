import React, { useState } from "react";
import {
  Hero,
  ConsultationPreview,
  MarketplaceGrid,
  SupplierSection,
  NewsTicker,
  TechnicalSupport,
  LogoSection,
} from "../components/home-sections";
import * as LucideIcons from "lucide-react";
import { Link, useParams } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SimpleFormModal } from "../components/simple-form-modal";
import { getProductImageUrl, getConsultantImageUrl, getSupplierImageUrl, handleImageError } from "../utils/image-helper";

import wheatSeeds from "../../assets/wheat_seeds.png";
import organicFertilizer from "../../assets/organic_fertilizer.png";
import pivotIrrigation from "../../assets/pivot_irrigation.png";
import smartGreenhouse from "../../assets/smart_greenhouse.png";
import heroDatePalms from "../../assets/hero_date_palms.png";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NewsTicker />
      <Hero />
      <LogoSection />
      <MarketplaceGrid />
      <SupplierSection />
      <ConsultationPreview />
      <TechnicalSupport />
    </div>
  );
};

const products = [
  { id: 1, name: "بذور القمح الصلب - نجران", price: "240 ر.س", supplier: "شركة نماء الزراعية", category: "بذور", desc: "هذا الصنف من البذور الممتازة تم اختياره بعناية ليلائم الظروف البيئية والمناخية في المملكة العربية السعودية، لضمان إنتاجية عالية وجودة لا تضاهى." },
  { id: 2, name: "سماد عضوي فائق الجودة 50KG", price: "185 ر.س", supplier: "مصنع الحصاد الذهبي", category: "أسمدة", desc: "هذا السماد عالي الكفاءة يزود التربة والمحاصيل بالعناصر الغذائية الأساسية لتعزيز النمو السليم وزيادة مقاومة النبات للأمراض الميدانية." },
  { id: 3, name: "مبيد آفات زراعي واسع النطاق", price: "95 ر.س", supplier: "شركة الياسين الزراعية", category: "مبيدات", desc: "مبيد فعال ذو جودة عالمية معتمدة لحماية المحاصيل من الآفات والأمراض الفطرية والحشرية، مع مراعاة كامل معايير السلامة البيئية." },
  { id: 4, name: "منظومة ري ذكية متكاملة", price: "1,250 ر.س", supplier: "شركة سنابل الريف", category: "ري", desc: "أنظمة ري حديثة ومتكاملة تساهم في ترشيد استهلاك المياه وتوزيعها بشكل متساوٍ على التربة لتحقيق أقصى استفادة للمحاصيل." },
  { id: 5, name: "بذور الذرة الصفراء الهجين", price: "120 ر.س", supplier: "شركة نماء الزراعية", category: "بذور", desc: "بذور ذرة صفراء هجينة ذات إنتاجية وفيرة ومقاومة ممتازة للجفاف والأمراض المحلية الشائعة." },
  { id: 6, name: "جهاز قياس رطوبة التربة الرقمي", price: "350 ر.س", supplier: "معدات الجزيرة", category: "معدات", desc: "معدات زراعية متطورة مصممة لرفع كفاءة العمليات الميدانية وتقليل التكاليف التشغيلية للمزارع مع سهولة الصيانة والتشغيل." },
  { id: 7, name: "مبيد فطري نحاسي مركز", price: "145 ر.س", supplier: "شركة الياسين الزراعية", category: "مبيدات", desc: "مركب نحاسي مركز وقائي وعلاجي واسع المفعول لمكافحة لفحات المحاصيل والأمراض الفطرية المختلفة." },
  { id: 8, name: "أنابيب ري 16mm لفة 400m", price: "680 ر.س", supplier: "شركة سنابل الريف", category: "ري", desc: "خراطيم ري بالتنقيط عالية المرونة والمتانة ومقاومة لأشعة الشمس المباشرة والظروف البيئية القاسية." },
  { id: 9, name: "بذور طماطم هجين مقاومة للحرارة", price: "310 ر.س", supplier: "شركة نماء الزراعية", category: "بذور", desc: "بذور طماطم مختارة ومطورة لتعطي ثماراً متماسكة وذات لون أحمر جذاب ومقاومة للحرارة المرتفعة." },
  { id: 10, name: "سماد يوريا نيتروجيني 46%", price: "215 ر.س", supplier: "مصنع الحصاد الذهبي", category: "أسمدة", desc: "سماد حبيبي غني بالنيتروجين عالي الذوبان يعمل على تسريع عملية النمو الخضري وتحسين إنتاجية المحاصيل الورقية والحقلية." },
  { id: 11, name: "مبيد حشري بيولوجي آمن", price: "180 ر.س", supplier: "شركة الياسين الزراعية", category: "مبيدات", desc: "مبيد حشري مستخلص من مصادر طبيعية يقضي على الحشرات الضارة دون التأثير على البيئة أو الكائنات النافعة." },
  { id: 12, name: "مضخة مياه زراعية 3 حصان", price: "2,450 ر.س", supplier: "معدات الجزيرة", category: "معدات", desc: "مضخة طاردة مركزية ذات أداء قوي واعتمادية عالية لرفع وضخ المياه لشبكات الري بالرش والتنقيط." },
  { id: 13, name: "رشاش محوري متطور 4 أبراج", price: "85,000 ر.س", supplier: "شركة سنابل الريف", category: "ري", desc: "جهاز ري محوري متكامل ومصنوع من الفولاذ المجلفن عالي الجودة لتغطية مساحات واسعة بكفاءة مائية قصوى." },
  { id: 14, name: "بذور برسيم حجازي ممتاز", price: "450 ر.س", supplier: "شركة نماء الزراعية", category: "بذور", desc: "بذور برسيم حجازي معمرة وممتازة سريعة النمو والإنبات لإنتاج أعلاف غنية بالبروتين للماشية." },
  { id: 15, name: "مغذي ورقي متكامل ذائب", price: "135 ر.س", supplier: "مصنع الحصاد الذهبي", category: "أسمدة", desc: "سماد ورقي مركب يحتوي على كافة العناصر الصغرى والكبرى سريعة الامتصاص لتعويض نقص المغذيات للنبات." },
  { id: 16, name: "صناديق حركية لجمع المحاصيل", price: "25 ر.س", supplier: "مؤسسة الريادة للمدخلات", category: "أخرى", desc: "صناديق بلاستيكية قوية وجيدة التهوية لحفظ ونقل المحاصيل والخضروات والفاكهة دون تلف." }
];

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "بذور":
      return {
        bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/50",
        icon: <LucideIcons.Sprout className="w-12 h-12 text-emerald-600" />,
        largeIcon: <LucideIcons.Sprout className="w-24 h-24 text-emerald-600" />
      };
    case "أسمدة":
      return {
        bg: "bg-gradient-to-br from-amber-50 to-amber-100/50",
        icon: <LucideIcons.Leaf className="w-12 h-12 text-amber-600" />,
        largeIcon: <LucideIcons.Leaf className="w-24 h-24 text-amber-600" />
      };
    case "مبيدات":
      return {
        bg: "bg-gradient-to-br from-rose-50 to-rose-100/50",
        icon: <LucideIcons.FlaskConical className="w-12 h-12 text-rose-600" />,
        largeIcon: <LucideIcons.FlaskConical className="w-24 h-24 text-rose-600" />
      };
    case "معدات":
      return {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
        icon: <LucideIcons.Wrench className="w-12 h-12 text-blue-600" />,
        largeIcon: <LucideIcons.Wrench className="w-24 h-24 text-blue-600" />
      };
    case "ري":
      return {
        bg: "bg-gradient-to-br from-sky-50 to-sky-100/50",
        icon: <LucideIcons.Droplet className="w-12 h-12 text-sky-600" />,
        largeIcon: <LucideIcons.Droplet className="w-24 h-24 text-sky-600" />
      };
    default:
      return {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100/50",
        icon: <LucideIcons.Boxes className="w-12 h-12 text-purple-600" />,
        largeIcon: <LucideIcons.Boxes className="w-24 h-24 text-purple-600" />
      };
  }
};

export const ProductDetail = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  
  const product = products.find(p => p.id === Number(id)) || products[0];
  const styles = getCategoryStyles(product.category);

  return (
    <div className="py-12 bg-[#F7F8F5]" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[2rem] shadow-xl border border-[#E7E7E2] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Gallery */}
            <div className={`lg:w-1/2 p-12 ${styles.bg} flex items-center justify-center relative border-l border-[#E7E7E2]/60`}>
              <div className="w-48 h-48 rounded-[2.5rem] bg-white border border-[#E7E7E2]/60 shadow-xl flex items-center justify-center transition-transform hover:scale-105 duration-500">
                {styles.largeIcon}
              </div>
              <div className="absolute top-8 right-8 bg-[#1F5F2C] text-white px-6 py-2 rounded-full font-bold text-[14px] shadow-lg">
                 منتج معتمد
              </div>
            </div>

            {/* Info */}
            <div className="lg:w-1/2 p-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-[#1F5F2C]/10 text-[#1F5F2C] text-[13px] font-bold rounded-full">
                  {product.category} عالية الجودة
                </span>
                <div className="flex text-[#A6802B]">
                  {[1,2,3,4,5].map(s => <LucideIcons.Star key={s} className="w-4 h-4 fill-current" />)}
                  <span className="mr-2 text-[#667064] text-[14px]">(4.9/5)</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#1D2A1F] mb-8 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-6 mb-10">
                <span className="text-4xl font-bold text-[#1F5F2C]">
                  {product.price}
                </span>
                <div className="bg-red-50 text-red-600 px-3 py-1 rounded-lg font-bold text-[14px]">
                  خصم 15%
                </div>
              </div>

              <div className="mb-10 p-8 bg-[#F7F8F5] rounded-[2rem] border border-[#E7E7E2] group hover:border-[#1F5F2C] transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-[#E7E7E2] group-hover:bg-[#1F5F2C] transition-all">
                    <LucideIcons.Building2 className="w-8 h-8 text-[#A6802B] group-hover:text-white transition-all" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[13px] text-[#667064] mb-1">
                      تم عرض هذا المنتج ومباع بواسطة:
                    </p>
                    <h3 className="font-bold text-[#1D2A1F] text-[20px] group-hover:text-[#1F5F2C] transition-all">
                      {product.supplier}
                    </h3>
                  </div>
                  <span className="text-[14px] font-bold text-[#1F5F2C] bg-[#F7F8F5] px-4 py-2 rounded-full border border-[#E7E7E2]">
                    مورد معتمد
                  </span>
                </div>
              </div>

              <p className="text-[#667064] text-[18px] mb-10 leading-relaxed">
                {product.desc}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center gap-4 p-5 bg-white border border-[#E7E7E2] rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <LucideIcons.Shield className="w-6 h-6 text-[#A6802B]" />
                  <div>
                    <p className="font-bold text-[15px]">ضمان الجودة</p>
                    <p className="text-[12px] text-[#667064]">معتمد من الهيئة</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white border border-[#E7E7E2] rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <LucideIcons.Truck className="w-6 h-6 text-[#A6802B]" />
                   <div>
                    <p className="font-bold text-[15px]">توصيل سريع</p>
                    <p className="text-[12px] text-[#667064]">خلال 48 ساعة</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <button 
                  onClick={() => setShowModal(true)}
                  className="flex-grow py-5 bg-[#1F5F2C] text-white rounded-full font-bold text-[18px] hover:bg-[#15411e] active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-xl shadow-[#1F5F2C]/20"
                >
                  <LucideIcons.ShoppingCart className="w-6 h-6" />
                  إضافة إلى سلة المشتريات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <SimpleFormModal
          title="إضافة إلى السلة"
          subtitle="يرجى إدخال بياناتك لإتمام عملية طلب المنتج"
          productName={product.name}
          type="purchase"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export const Consultations = () => {
  const [showModal, setShowModal] = useState(false);

  const imdadEngineers = [
    { name: "م. فهد", spec: "خبير محاصيل القمح", city: "القصيم", exp: "12 سنة", status: "متاح الآن", type: "free" },
    { name: "م. محمد", spec: "أخصائي ري حديث", city: "الرياض", exp: "8 سنوات", status: "يرد خلال 10 دقائق", type: "free" },
    { name: "م. سعد", spec: "مكافحة آفات زراعية", city: "الأحساء", exp: "15 سنة", status: "متاح الآن", type: "free" },
  ];

  const specialistConsultants = [
    { name: "م. عبدالله", spec: "تخطيط مزارع نخيل", city: "الخرج", exp: "20 سنة", status: "متاح الآن", price: "250 ر.س", type: "paid" },
    { name: "م. خالد", spec: "زراعة مائية (هيدروبونيك)", city: "جدة", exp: "6 سنوات", status: "مشغول حالياً", price: "180 ر.س", type: "paid" },
    { name: "م. ناصر", spec: "استدامة التربة", city: "حائل", exp: "10 سنوات", status: "متاح الآن", price: "140 ر.س", type: "paid" }
  ];

  const ConsultantCard = ({ advisor }: { advisor: any }) => (
    <div
      className="premium-card p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col"
    >
      {advisor.type === 'free' ? (
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-1.5 bg-[#1F5F2C] text-white text-[12px] font-bold rounded-full shadow-lg shadow-[#1F5F2C]/20 animate-pulse">
            استشارة مجانية
          </span>
        </div>
      ) : (
        <div className="absolute top-6 left-6 z-10">
          <span className="px-4 py-1.5 bg-[#C8A646] text-white text-[12px] font-bold rounded-full shadow-lg shadow-[#C8A646]/20">
            {advisor.price} / للاستشارة
          </span>
        </div>
      )}

      <div className="flex items-center gap-6 mb-8 mt-4">
         <div className="w-24 h-24 bg-[#f0f4f0] rounded-full overflow-hidden border-4 border-white shadow-md shrink-0 group-hover:scale-105 transition-transform">
            <img 
              src={getConsultantImageUrl(advisor.spec)} 
              alt={advisor.name}
              loading="lazy"
              onError={handleImageError}
              className="w-full h-full object-cover"
            />
         </div>
         <div>
            <h3 className="text-[22px] font-bold text-[#1D2A1F] group-hover:text-[#1F5F2C] transition-colors">
              {advisor.name}
            </h3>
            <p className="text-[14px] text-[#667064] mb-2 font-medium">
              {advisor.spec}
            </p>
            <div className="flex items-center gap-2">
               <LucideIcons.MapPin className="w-3 h-3 text-[#C8A646]" />
               <span className="text-[12px] text-[#667064]">{advisor.city} • خبرة {advisor.exp}</span>
            </div>
         </div>
      </div>
      
      <div className="flex items-center justify-between mb-8 py-4 border-y border-[#E7E7E2]">
         <div className="flex items-center gap-2 px-3 py-1 bg-[#F7F8F5] rounded-full">
            <div className={`w-2 h-2 rounded-full ${advisor.status === 'مشغول حالياً' ? 'bg-orange-500' : 'bg-green-500'}`}></div>
            <span className="text-[12px] font-bold">{advisor.status}</span>
         </div>
         <div className="flex text-[#C8A646]">
            {[1,2,3,4,5].map(s => <LucideIcons.Star key={s} className="w-3 h-3 fill-current" />)}
         </div>
      </div>

      <button 
        onClick={() => setShowModal(true)}
        className="w-full py-4 btn-premium-primary text-white rounded-full font-bold text-[16px] flex items-center justify-center gap-3"
      >
        <LucideIcons.MessageSquare className="w-5 h-5" />
        طلب استشارة فورية
      </button>
    </div>
  );

  return (
    <div className="py-12 bg-[#F7F8F5]" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
           <h1 className="text-3xl md:text-4xl font-bold text-[#1D2A1F] mb-6 leading-tight">
             استشارات زراعية <span className="text-[#1F5F2C]">موثوقة</span>
           </h1>
           <p className="text-[16px] text-[#667064] leading-relaxed">
             تواصل مباشرة مع نخبة المهندسين الزراعيين المعتمدين في المملكة العربية السعودية. احصل على إجابات دقيقة لمشاكل مزرعتك في دقائق.
           </p>
        </div>

        {/* Section 1: Imdad Engineers */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-10 bg-[#1F5F2C] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[#1D2A1F]">مهندسو إمداد</h2>
              <span className="px-4 py-1 bg-[#1F5F2C]/10 text-[#1F5F2C] rounded-full text-[14px] font-bold">مجانـي</span>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {imdadEngineers.map((advisor, i) => (
                <ConsultantCard key={i} advisor={advisor} />
              ))}
           </div>
        </div>

        {/* Section 2: Specialist Consultants */}
        <div>
           <div className="flex items-center gap-4 mb-10">
              <div className="w-2 h-10 bg-[#C8A646] rounded-full"></div>
              <h2 className="text-3xl font-bold text-[#1D2A1F]">المستشارون المختصون</h2>
              <span className="px-4 py-1 bg-[#C8A646]/10 text-[#A6802B] rounded-full text-[14px] font-bold">مدفوع</span>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialistConsultants.map((advisor, i) => (
                <ConsultantCard key={i} advisor={advisor} />
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
    </div>
  );
};

export const Marketplace = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "الكل" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.supplier.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-[#F7F8F5]" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1D2A1F] mb-6">
              سوق <span className="text-[#1F5F2C]">المدخلات الزراعية</span>
            </h1>
            <p className="text-[16px] text-[#667064]">
              منصة واحدة تجمع لك أجود أنواع البذور والأسمدة والمبيدات والمعدات من كبار الموردين المعتمدين في المملكة.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full lg:w-auto">
             <div className="relative w-full lg:w-96">
                <LucideIcons.Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667064] w-5 h-5" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث عن منتج، مورد، أو فئة..." 
                  className="w-full pr-12 pl-6 py-4 bg-white border border-[#E7E7E2] rounded-full focus:outline-none focus:border-[#1F5F2C] transition-all shadow-sm"
                />
             </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
           {["الكل", "بذور", "أسمدة", "مبيدات", "معدات", "ري", "أخرى"].map((cat, i) => (
             <button 
               key={i} 
               onClick={() => setActiveCategory(cat)}
               className={`px-8 py-3 rounded-full font-bold text-[14px] transition-all active:scale-95 ${activeCategory === cat ? 'bg-[#1F5F2C] text-white shadow-lg shadow-[#1F5F2C]/10' : 'bg-white text-[#667064] border border-[#E7E7E2] hover:border-[#1F5F2C] hover:text-[#1F5F2C]'}`}
             >
               {cat}
             </button>
           ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-[#E7E7E2] shadow-sm">
            <LucideIcons.SearchX className="w-16 h-16 text-gray-355 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1D2A1F] mb-2">لا توجد نتائج مطابقة</h3>
            <p className="text-[#667064]">جرب البحث بكلمة أخرى أو تغيير الفئة المحددة.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const styles = getCategoryStyles(product.category);
              return (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="premium-card overflow-hidden flex flex-col group"
                >
                  <div className="h-48 relative overflow-hidden bg-[#f0f4f0]">
                    <img 
                      src={getProductImageUrl(product.name)} 
                      alt={product.name}
                      loading="lazy"
                      onError={handleImageError}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#1F5F2C] text-white px-3 py-1 rounded-full text-[12px] font-bold shadow-md z-10">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-[12px] text-[#667064] mb-2 font-medium">{product.supplier}</p>
                    <h3 className="text-[18px] font-bold text-[#1D2A1F] mb-6 group-hover:text-[#1F5F2C] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[12px] text-[#667064]">السعر</span>
                        <span className="text-[20px] font-bold text-[#1F5F2C]">
                          {product.price}
                        </span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedProduct(product.name);
                        }}
                        className="w-12 h-12 bg-[#F7F8F5] text-[#1F5F2C] rounded-2xl flex items-center justify-center hover:bg-[#1F5F2C] hover:text-white active:scale-90 transition-all shadow-sm"
                      >
                        <LucideIcons.ShoppingCart className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
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
    </div>
  );
};

export * from "./register";
export * from "./supplier-login";

export const Suppliers = () => {
  const directory = [
    { name: "شركة نماء الزراعية", city: "الرياض", type: "بذور وأسمدة", products: 450, verified: true },
    { name: "شركة الياسين الزراعية", city: "القصيم", type: "مبيدات ومعدات", products: 320, verified: true },
    { name: "مصنع الحصاد الذهبي", city: "جدة", type: "أسمدة عضوية", products: 120, verified: true },
    { name: "شركة سنابل الريف", city: "الأحساء", type: "معدات ري", products: 280, verified: true },
    { name: "مؤسسة الريادة للمدخلات", city: "حائل", type: "منوع", products: 150, verified: true },
    { name: "شركة أراسكو الزراعية", city: "الخرج", type: "أعلاف ومغذيات", products: 580, verified: true }
  ];

  return (
    <div className="py-12 bg-white" dir="rtl">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D2A1F] mb-6">
            دليل <span className="text-[#1F5F2C]">الشركات الموردة</span>
          </h1>
          <p className="text-[16px] text-[#667064] leading-relaxed">
            شركاء النجاح المعتمدون في منصة إمداد. نضمن لك التعامل مع أفضل الكفاءات والشركات الوطنية ذات السمعة الطيبة في السوق السعودي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {directory.map((company, i) => (
            <div
              key={i}
              className="p-8 border border-[#E7E7E2] rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 active:scale-[0.99] transition-all flex flex-col items-center text-center group bg-[#F7F8F5]/50"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F5F2C]/10 rounded-full mb-4">
                 <LucideIcons.Shield className="w-3 h-3 text-[#1F5F2C]" />
                 <span className="text-[11px] font-bold text-[#1F5F2C] uppercase tracking-wider">مورد معتمد</span>
              </div>

              <h3 className="font-bold text-[24px] text-[#1D2A1F] mb-2 group-hover:text-[#1F5F2C] transition-colors">
                {company.name}
              </h3>
              
              <p className="text-[15px] text-[#667064] mb-8 font-medium">
                {company.type} • {company.city}
              </p>
              
              <div className="grid grid-cols-2 gap-4 w-full mb-10 py-6 border-y border-[#E7E7E2]">
                 <div>
                    <p className="text-[12px] text-[#667064]">المنتجات</p>
                    <p className="text-[18px] font-bold text-[#1D2A1F]">{company.products}+</p>
                 </div>
                 <div>
                    <p className="text-[12px] text-[#667064]">التقييم</p>
                    <div className="flex items-center justify-center gap-1 text-[#C8A646]">
                       <LucideIcons.Star className="w-4 h-4 fill-current" />
                       <span className="text-[18px] font-bold text-[#1D2A1F]">4.8</span>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col gap-2 w-full text-center">
                 <span className="text-[14px] font-medium text-[#1F5F2C] flex items-center justify-center gap-2">
                    <LucideIcons.CheckCircle className="w-4 h-4" /> المنتجات متوفرة في السوق
                 </span>
                 <span className="text-[13px] text-[#667064]">
                    ملف تعريفي موثق بالكامل
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
