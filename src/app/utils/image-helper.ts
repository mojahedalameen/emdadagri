import wheatSeeds from '../../assets/wheat_seeds.png';
import organicFertilizer from '../../assets/organic_fertilizer.png';
import pivotIrrigation from '../../assets/pivot_irrigation.png';
import smartGreenhouse from '../../assets/smart_greenhouse.png';
import heroDatePalms from '../../assets/hero_date_palms.png';

export const getProductImageUrl = (name: string): string => {
  const n = name.trim();
  if (n.includes("بذور القمح") || n.includes("القمح الصلب")) {
    return wheatSeeds;
  }
  if (n.includes("سماد عضوي")) {
    return organicFertilizer;
  }
  if (n.includes("مبيد آفات")) {
    return "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("منظومة ري ذكية") || n.includes("أنابيب ري") || n.includes("مضخة مياه") || n.includes("رشاش محوري")) {
    return pivotIrrigation;
  }
  if (n.includes("بذور الذرة") || n.includes("الذرة الصفراء")) {
    return wheatSeeds; // Fallback to wheat seeds or greenhouse
  }
  if (n.includes("رطوبة التربة") || n.includes("قياس رطوبة")) {
    return "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("مبيد فطري") || n.includes("مبيد حشري")) {
    return "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("بذور طماطم") || n.includes("طماطم هجين") || n.includes("بذور برسيم")) {
    return smartGreenhouse;
  }
  if (n.includes("سماد يوريا") || n.includes("يوريا سائل") || n.includes("مغذي ورقي")) {
    return organicFertilizer;
  }
  if (n.includes("صناديق حركية") || n.includes("مقص تقليم")) {
    return "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80";
  }
  
  return smartGreenhouse;
};

export const getConsultantImageUrl = (spec: string): string => {
  const s = spec.trim();
  if (s.includes("القمح")) {
    return wheatSeeds;
  }
  if (s.includes("ري")) {
    return pivotIrrigation;
  }
  if (s.includes("آفات") || s.includes("تسميد")) {
    return organicFertilizer;
  }
  if (s.includes("نخيل")) {
    return heroDatePalms;
  }
  if (s.includes("مائية") || s.includes("التربة")) {
    return smartGreenhouse;
  }
  return smartGreenhouse;
};

export const getSupplierImageUrl = (name: string): string => {
  const n = name.trim();
  if (n.includes("نماء")) {
    return wheatSeeds;
  }
  if (n.includes("الياسين")) {
    return smartGreenhouse;
  }
  if (n.includes("الحصاد")) {
    return organicFertilizer;
  }
  if (n.includes("سنابل")) {
    return pivotIrrigation;
  }
  if (n.includes("الريادة") || n.includes("معدات الجزيرة")) {
    return smartGreenhouse;
  }
  if (n.includes("أراسكو")) {
    return organicFertilizer;
  }
  return smartGreenhouse;
};

export const getAgriImageUrl = (keyword: string): string => {
  return getProductImageUrl(keyword);
};

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = smartGreenhouse;
};
