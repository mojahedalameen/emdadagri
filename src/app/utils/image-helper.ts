export const getProductImageUrl = (name: string): string => {
  const n = name.trim();
  if (n.includes("بذور القمح") || n.includes("القمح الصلب")) {
    return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("سماد عضوي")) {
    return "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("مبيد آفات")) {
    return "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("منظومة ري ذكية")) {
    return "https://images.unsplash.com/photo-1563514223300-6d43cc8e01bf?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("بذور الذرة") || n.includes("الذرة الصفراء")) {
    return "https://images.unsplash.com/photo-1551754625-70c90487530d?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("رطوبة التربة") || n.includes("قياس رطوبة")) {
    return "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("مبيد فطري")) {
    return "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("أنابيب ري")) {
    return "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("بذور طماطم") || n.includes("طماطم هجين")) {
    return "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("سماد يوريا") || n.includes("يوريا سائل")) {
    return "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("مبيد حشري")) {
    return "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("مضخة مياه")) {
    return "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("رشاش محوري")) {
    return "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("بذور برسيم")) {
    return "https://images.unsplash.com/photo-1533240332313-0db49b439ad3?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("مغذي ورقي")) {
    return "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("صناديق حركية") || n.includes("مقص تقليم")) {
    return "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80";
  }
  
  return `https://picsum.photos/seed/${encodeURIComponent(n)}/800/600`;
};

export const getConsultantImageUrl = (spec: string): string => {
  const s = spec.trim();
  if (s.includes("القمح")) {
    return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80";
  }
  if (s.includes("ري")) {
    return "https://images.unsplash.com/photo-1563514223300-6d43cc8e01bf?auto=format&fit=crop&w=600&q=80";
  }
  if (s.includes("آفات") || s.includes("تسميد")) {
    return "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80";
  }
  if (s.includes("نخيل")) {
    return "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=600&q=80";
  }
  if (s.includes("مائية")) {
    return "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80";
  }
  if (s.includes("التربة")) {
    return "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80";
  }
  return `https://picsum.photos/seed/${encodeURIComponent(s)}/800/600`;
};

export const getSupplierImageUrl = (name: string): string => {
  const n = name.trim();
  if (n.includes("نماء")) {
    return "https://images.unsplash.com/photo-153240332313-0db49b439ad3?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("الياسين")) {
    return "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("الحصاد")) {
    return "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("سنابل")) {
    return "https://images.unsplash.com/photo-1563514223300-6d43cc8e01bf?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("الريادة") || n.includes("معدات الجزيرة")) {
    return "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80";
  }
  if (n.includes("أراسكو")) {
    return "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80";
  }
  return `https://picsum.photos/seed/${encodeURIComponent(n)}/800/600`;
};

export const getAgriImageUrl = (keyword: string): string => {
  return getProductImageUrl(keyword);
};

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.style.display = 'none';
  const parent = e.currentTarget.parentElement;
  if (parent) {
    parent.style.backgroundColor = '#f0f4f0';
  }
};
