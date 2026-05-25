import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import logo from "figma:asset/image-4.png";
import banner from "figma:asset/image-5.png";

export const SupplierDashboard = () => {
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('الرئيسية');
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F8F5] p-6" dir="rtl">
        <div className="empty-state bg-white p-12 rounded-[2rem] border border-[#E7E7E2] shadow-sm max-w-md w-full flex flex-col items-center text-center">
          <div className="empty-icon w-16 h-16 bg-[#1F5F2C]/5 rounded-full flex items-center justify-center text-[#1F5F2C] mb-6">
            <LucideIcons.Lock className="w-8 h-8" />
          </div>
          <p className="empty-title text-[#667064] text-[14px] font-bold mb-6">سجّل دخولك لعرض محتواك</p>
          <Link 
            to="/login" 
            className="px-8 py-3 bg-[#1F5F2C] text-white rounded-full font-bold text-[14px] hover:bg-[#15411e] active:scale-95 transition-all shadow-sm"
          >
            تسجيل الدخول
          </Link>
        </div>
      </div>
    );
  }

  const kpis = [
    { label: 'إجمالي المبيعات', value: '142,500 ر.س', trend: '+12.5%', icon: <LucideIcons.TrendingUp className="w-6 h-6"/>, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'الطلبات الجديدة', value: '24 طلب', trend: '+4 طلبات', icon: <LucideIcons.ShoppingCart className="w-6 h-6"/>, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'المنتجات النشطة', value: '85 منتج', trend: 'ثابت', icon: <LucideIcons.Package className="w-6 h-6"/>, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'منتجات منخفضة المخزون', value: '6 أصناف', trend: '-2 صنف', icon: <LucideIcons.AlertTriangle className="w-6 h-6"/>, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  const recentOrders = [
    { id: '#ORD-9821', customer: 'محمد', city: 'القصيم', total: '1,240 ر.س', date: 'منذ ساعة', status: 'جديد' },
    { id: '#ORD-9820', customer: 'سعد', city: 'الرياض', total: '3,150 ر.س', date: 'منذ ساعتين', status: 'قيد التجهيز' },
    { id: '#ORD-9819', customer: 'فهد', city: 'حائل', total: '890 ر.س', date: 'منذ 5 ساعات', status: 'تم التوصيل' },
    { id: '#ORD-9818', customer: 'عبدالله', city: 'جدة', total: '2,400 ر.س', date: 'أمس', status: 'تم التوصيل' },
  ];

  const products = [
    { id: 1, name: 'بذور القمح الصلب', category: 'بذور', stock: '12 كجم', price: '240 ر.س', status: 'منخفض المخزون' },
    { id: 2, name: 'سماد عضوي سائل', category: 'أسمدة', stock: '45 لتر', price: '185 ر.س', status: 'نشط' },
    { id: 3, name: 'مبيد فطري نحاسي', category: 'مبيدات', stock: '3 علب', price: '95 ر.س', status: 'منخفض المخزون' },
    { id: 4, name: 'بذور الذرة الصفراء', category: 'بذور', stock: '120 كجم', price: '120 ر.س', status: 'نشط' },
  ];

  const customers = [
    { name: 'محمد القحطاني', email: 'mohammed@example.com', spent: '12,450 ر.س', orders: 8, lastOrder: '2026-04-20', location: 'الرياض' },
    { name: 'سارة الشمري', email: 'sara@example.com', spent: '8,200 ر.س', orders: 5, lastOrder: '2026-04-22', location: 'القصيم' },
    { name: 'فهد العتيبي', email: 'fahad@example.com', spent: '5,600 ر.س', orders: 3, lastOrder: '2026-04-15', location: 'جدة' },
    { name: 'نورة الدوسري', email: 'noura@example.com', spent: '15,800 ر.س', orders: 12, lastOrder: '2026-04-25', location: 'الدمام' },
    { name: 'عبدالله السديري', email: 'abdullah@example.com', spent: '3,400 ر.س', orders: 2, lastOrder: '2026-04-10', location: 'تبوك' },
  ];

  const salesData = [
    { name: 'يناير', sales: 4000, orders: 24 },
    { name: 'فبراير', sales: 3000, orders: 18 },
    { name: 'مارس', sales: 2000, orders: 12 },
    { name: 'أبريل', sales: 2780, orders: 20 },
    { name: 'مايو', sales: 1890, orders: 15 },
    { name: 'يونيو', sales: 2390, orders: 19 },
    { name: 'يوليو', sales: 3490, orders: 22 },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'الرئيسية':
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
             {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#E7E7E2] hover:shadow-md transition-all">
                  <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                     {stat.icon}
                  </div>
                  <p className="text-[13px] text-[#667064] mb-1 font-medium">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-[#1D2A1F] mb-3">{stat.value}</h3>
                  <div className="flex items-center gap-2">
                     {stat.trend.includes('+') ? <LucideIcons.ArrowUpRight className="w-4 h-4 text-green-500" /> : <LucideIcons.ArrowDownRight className="w-4 h-4 text-red-500" />}
                     <span className={`text-[12px] font-bold ${stat.trend.includes('+') ? 'text-green-600' : 'text-red-600'}`}>{stat.trend}</span>
                     <span className="text-[11px] text-[#667064]">مقارنة بالشهر الماضي</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-[#E7E7E2] p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-[#1D2A1F]">آخر الطلبات</h2>
                  <button onClick={() => setActiveTab('الطلبات')} className="text-[14px] font-bold text-[#1F5F2C] hover:underline">عرض الكل</button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-right">
                    <thead>
                      <tr className="text-[#667064] text-[13px] border-b border-[#F7F8F5]">
                        <th className="pb-4 font-bold">رقم الطلب</th>
                        <th className="pb-4 font-bold">العميل</th>
                        <th className="pb-4 font-bold">المبلغ الإجمالي</th>
                        <th className="pb-4 font-bold">التاريخ</th>
                        <th className="pb-4 font-bold">الحالة</th>
                        <th className="pb-4 font-bold text-center">إجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F7F8F5]">
                      {recentOrders.map((row, idx) => (
                        <tr key={idx} className="group hover:bg-[#F7F8F5]/50 transition-all">
                          <td className="py-5 font-bold text-[#1F5F2C] text-[14px]">{row.id}</td>
                          <td className="py-5">
                             <div className="flex flex-col text-right">
                                <span className="font-bold text-[#1D2A1F] text-[14px]">{row.customer}</span>
                                <span className="text-[11px] text-[#667064]">{row.city}</span>
                             </div>
                          </td>
                          <td className="py-5 font-bold text-[#1D2A1F] text-[14px]">{row.total}</td>
                          <td className="py-5 text-[#667064] text-[13px]">{row.date}</td>
                          <td className="py-5">
                            <span className={`px-4 py-1 rounded-full text-[11px] font-bold ${
                              row.status === 'جديد' ? 'bg-blue-50 text-blue-700' : 
                              row.status === 'قيد التجهيز' ? 'bg-orange-50 text-orange-700' : 
                              'bg-green-50 text-green-700'
                            }`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="py-5 text-center">
                             <button className="p-2 text-[#667064] hover:text-[#1F5F2C] hover:bg-white rounded-lg transition-all">
                                <LucideIcons.MoreVertical className="w-4 h-4" />
                             </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-10">
                 <div className="bg-white rounded-[2.5rem] shadow-sm border border-[#E7E7E2] p-8">
                    <h2 className="text-xl font-bold text-[#1D2A1F] mb-6 flex items-center gap-3">
                       <LucideIcons.AlertTriangle className="w-5 h-5 text-red-500" />
                       تنبيهات المخزون
                    </h2>
                    <div className="space-y-6 text-right">
                       {[
                         { name: 'بذور القمح الصلب', stock: '12 كجم', limit: '50 كجم' },
                         { name: 'مبيد فطري نحاسي', stock: '3 علب', limit: '10 علب' },
                         { name: 'سماد عضوي سائل', stock: '8 لتر', limit: '20 لتر' }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-red-50/50 rounded-2xl border border-red-100/50">
                            <div>
                               <p className="text-[14px] font-bold text-[#1D2A1F] mb-1">{item.name}</p>
                               <p className="text-[11px] text-red-600 font-bold">متبقي: {item.stock}</p>
                            </div>
                            <button className="px-4 py-2 bg-white text-red-600 border border-red-200 rounded-xl text-[11px] font-bold hover:bg-red-50">تحديث</button>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'المنتجات':
        if (products.length === 0) {
          return (
            <div className="empty-state bg-white p-12 rounded-[2rem] border border-[#E7E7E2] shadow-sm flex flex-col items-center justify-center text-center">
              <div className="empty-icon w-16 h-16 bg-[#1F5F2C]/5 rounded-full flex items-center justify-center text-[#1F5F2C] mb-6">
                <LucideIcons.Package className="w-8 h-8" />
              </div>
              <p className="empty-title text-[#667064] text-[14px] font-bold mb-6">لا توجد منتجات معروضة حالياً</p>
              <button 
                onClick={() => setIsAddProductOpen(true)}
                className="px-8 py-3 bg-[#1F5F2C] text-white rounded-full font-bold text-[14px] hover:bg-[#15411e] active:scale-95 transition-all shadow-sm"
              >
                إضافة منتج جديد
              </button>
            </div>
          );
        }
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-[#E7E7E2] p-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-bold text-[#1D2A1F]">إدارة المنتجات</h2>
               <div className="flex gap-4">
                  <div className="relative">
                     <LucideIcons.Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667064] w-4 h-4" />
                     <input type="text" placeholder="بحث..." className="pr-10 pl-4 py-2 bg-[#F7F8F5] border-none rounded-full text-[14px]" />
                  </div>
                  <button className="p-2 bg-[#F7F8F5] rounded-full text-[#1D2A1F] hover:bg-[#E7E7E2] transition-all">
                     <LucideIcons.Filter className="w-5 h-5" />
                  </button>
               </div>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-right">
                  <thead>
                     <tr className="text-[#667064] text-[13px] border-b border-[#F7F8F5]">
                        <th className="pb-4 font-bold">المنتج</th>
                        <th className="pb-4 font-bold">الفئة</th>
                        <th className="pb-4 font-bold">المخزون</th>
                        <th className="pb-4 font-bold">السعر</th>
                        <th className="pb-4 font-bold">الحالة</th>
                        <th className="pb-4 font-bold text-center">إجراءات</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F7F8F5]">
                     {products.map((p, idx) => (
                        <tr key={idx} className="group hover:bg-[#F7F8F5]/50 transition-all">
                           <td className="py-5">
                              <div className="flex items-center gap-3">
                                 <div className="w-10 h-10 bg-[#F7F8F5] rounded-lg"></div>
                                 <span className="font-bold text-[#1D2A1F] text-[14px]">{p.name}</span>
                              </div>
                           </td>
                           <td className="py-5 text-[14px] text-[#667064]">{p.category}</td>
                           <td className="py-5 font-bold text-[#1D2A1F] text-[14px]">{p.stock}</td>
                           <td className="py-5 font-bold text-[#1D2A1F] text-[14px]">{p.price}</td>
                           <td className="py-5">
                              <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${p.status === 'نشط' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                 {p.status}
                              </span>
                           </td>
                           <td className="py-5 text-center">
                              <button className="p-2 text-[#667064] hover:text-[#1F5F2C] transition-all">
                                 <LucideIcons.Edit2 className="w-4 h-4" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </div>
        );
      case 'الطلبات':
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-[#E7E7E2] p-8 animate-in fade-in duration-500">
            <h2 className="text-xl font-bold text-[#1D2A1F] mb-8">إدارة الطلبات</h2>
            <div className="space-y-4">
               {recentOrders.map((order, i) => (
                  <div key={i} className="p-6 bg-[#F7F8F5]/50 border border-[#E7E7E2] rounded-3xl flex items-center justify-between group hover:border-[#1F5F2C] transition-all">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1F5F2C] font-bold shadow-sm">
                           {i + 1}
                        </div>
                        <div>
                           <p className="font-bold text-[#1D2A1F] mb-1">{order.id} - {order.customer}</p>
                           <p className="text-[12px] text-[#667064] text-right">{order.city} • {order.date}</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-8">
                        <p className="font-bold text-[#1F5F2C]">{order.total}</p>
                        <span className={`px-4 py-1.5 rounded-full text-[12px] font-bold ${order.status === 'جديد' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                           {order.status}
                        </span>
                        <button className="px-6 py-2 bg-white border border-[#E7E7E2] rounded-full text-[13px] font-bold hover:bg-[#1F5F2C] hover:text-white transition-all">تفاصيل الطلب</button>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        );
      case 'المبيعات':
        return (
          <div className="space-y-10 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-[2rem] border border-[#E7E7E2] shadow-sm">
                <p className="text-[14px] text-[#667064] mb-2">إجمالي المبيعات (أبريل)</p>
                <h3 className="text-3xl font-bold text-[#1D2A1F]">42,850 ر.س</h3>
                <p className="text-green-600 font-bold text-[12px] mt-2">+15% عن الشهر الماضي</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-[#E7E7E2] shadow-sm">
                <p className="text-[14px] text-[#667064] mb-2">متوسط قيمة الطلب</p>
                <h3 className="text-3xl font-bold text-[#1D2A1F]">840 ر.س</h3>
                <p className="text-blue-600 font-bold text-[12px] mt-2">+5% زيادة</p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-[#E7E7E2] shadow-sm">
                <p className="text-[14px] text-[#667064] mb-2">عدد الطلبات المكتملة</p>
                <h3 className="text-3xl font-bold text-[#1D2A1F]">52 طلب</h3>
                <p className="text-green-600 font-bold text-[12px] mt-2">+8 طلبات</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-[#E7E7E2] shadow-sm">
              <h2 className="text-xl font-bold text-[#1D2A1F] mb-10">تحليل المبيعات الشهرية</h2>
              <div className="h-[300px] w-full">
                {/* Recharts placeholder or simple bar chart */}
                <div className="flex items-end justify-between h-full gap-4 pt-10 px-4">
                  {salesData.map((d, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 gap-4 h-full justify-end">
                      <div 
                        className="w-full bg-[#1F5F2C]/10 rounded-t-xl hover:bg-[#1F5F2C] transition-all relative group" 
                        style={{ height: `${(d.sales / 5000) * 100}%` }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1D2A1F] text-white px-3 py-1 rounded-lg text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                          {d.sales} ر.س
                        </div>
                      </div>
                      <span className="text-[12px] text-[#667064]">{d.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div className="bg-white p-8 rounded-[2.5rem] border border-[#E7E7E2] shadow-sm">
                  <h2 className="text-xl font-bold text-[#1D2A1F] mb-6">الأصناف الأكثر مبيعاً</h2>
                  <div className="space-y-6">
                     {[
                       { name: 'بذور القمح الصلب', amount: '12,400 ر.س', count: '45 قطعة' },
                       { name: 'سماد عضوي سائل', amount: '8,200 ر.س', count: '32 قطعة' },
                       { name: 'منظومة ري ذكية', amount: '15,000 ر.س', count: '12 قطعة' }
                     ].map((p, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-[#F7F8F5] rounded-2xl">
                          <div>
                             <p className="font-bold text-[#1D2A1F]">{p.name}</p>
                             <p className="text-[12px] text-[#667064]">{p.count}</p>
                          </div>
                          <p className="font-bold text-[#1F5F2C]">{p.amount}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="bg-[#1D2A1F] p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl font-bold text-[#C8A646] mb-4">نصيحة "إمداد" للنمو</h2>
                    <p className="text-gray-400 text-[14px] leading-relaxed mb-8">
                       بناءً على بيانات مبيعاتك، نلاحظ طلباً متزايداً على "الأسمدة العضوية" في منطقة القصيم خلال شهر مايو. ننصح بتعزيز مخزونك وتقديم عروض خاصة لزيادة حصتك السوقية.
                    </p>
                    <button className="px-6 py-3 bg-[#C8A646] text-[#1D2A1F] rounded-full font-bold text-[13px]">عرض التوقعات الموسمية</button>
                  </div>
                  <LucideIcons.TrendingUp className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5" />
               </div>
            </div>
          </div>
        );
      case 'العملاء':
        return (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-[#E7E7E2] p-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
               <div>
                  <h2 className="text-xl font-bold text-[#1D2A1F] mb-2">إدارة العملاء</h2>
                  <p className="text-[14px] text-[#667064]">لديك 124 عميلاً مسجلاً في متجرك.</p>
               </div>
               <div className="flex gap-4 w-full md:w-auto">
                  <div className="relative flex-grow md:flex-grow-0">
                     <LucideIcons.Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667064] w-4 h-4" />
                     <input type="text" placeholder="بحث عن عميل..." className="w-full md:w-64 pr-12 pl-6 py-3 bg-[#F7F8F5] border-none rounded-2xl text-[14px]" />
                  </div>
                  <button className="p-3 bg-[#F7F8F5] rounded-2xl text-[#1D2A1F] hover:bg-[#E7E7E2] transition-all">
                     <LucideIcons.Download className="w-5 h-5" />
                  </button>
               </div>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-right">
                  <thead>
                     <tr className="text-[#667064] text-[13px] border-b border-[#F7F8F5]">
                        <th className="pb-4 font-bold">العميل</th>
                        <th className="pb-4 font-bold">الموقع</th>
                        <th className="pb-4 font-bold text-center">عدد الطلبات</th>
                        <th className="pb-4 font-bold text-center">إجمالي المشتريات</th>
                        <th className="pb-4 font-bold">آخر طلب</th>
                        <th className="pb-4 font-bold text-center">إجراءات</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F7F8F5]">
                     {customers.map((c, idx) => (
                        <tr key={idx} className="group hover:bg-[#F7F8F5]/50 transition-all">
                           <td className="py-5">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl bg-[#1F5F2C]/5 flex items-center justify-center text-[#1F5F2C] font-bold">
                                    {c.name.charAt(0)}
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="font-bold text-[#1D2A1F] text-[14px]">{c.name}</span>
                                    <span className="text-[11px] text-[#667064]">{c.email}</span>
                                 </div>
                              </div>
                           </td>
                           <td className="py-5 text-[14px] text-[#1D2A1F] font-medium">{c.location}</td>
                           <td className="py-5 text-center font-bold text-[#1D2A1F] text-[14px]">{c.orders}</td>
                           <td className="py-5 text-center font-bold text-[#1F5F2C] text-[14px]">{c.spent}</td>
                           <td className="py-5 text-[13px] text-[#667064]">{c.lastOrder}</td>
                           <td className="py-5 text-center">
                              <button className="p-2 text-[#667064] hover:text-[#1F5F2C] transition-all">
                                 <LucideIcons.MessageSquare className="w-4 h-4" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
          </div>
        );
      case 'الإعدادات':
        return (
          <div className="max-w-4xl animate-in fade-in duration-500">
             <div className="bg-white rounded-[3rem] shadow-sm border border-[#E7E7E2] overflow-hidden">
                <div className="h-40 relative overflow-hidden">
                   <ImageWithFallback src={banner} alt="Store Banner" className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/20"></div>
                   <div className="absolute -bottom-12 right-10">
                      <div className="w-24 h-24 rounded-3xl bg-[#C8A646] border-4 border-white flex items-center justify-center text-3xl text-white font-bold shadow-xl">
                         ن
                      </div>
                   </div>
                   <button className="absolute bottom-4 left-10 px-4 py-2 bg-white/10 backdrop-blur text-white text-[12px] font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all">
                      تغيير غلاف المتجر
                   </button>
                </div>
                
                <div className="p-10 pt-20">
                   <div className="flex gap-12 border-b border-[#F7F8F5] mb-10 pb-2 overflow-x-auto whitespace-nowrap">
                      {['الملف الشخصي', 'معلومات المتجر', 'الشحن والتوصيل', 'الإشعارات'].map((tab, i) => (
                        <button key={i} className={`pb-4 text-[15px] font-bold transition-all relative ${i === 1 ? 'text-[#1F5F2C]' : 'text-[#667064] hover:text-[#1D2A1F]'}`}>
                           {tab}
                           {i === 1 && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1F5F2C] rounded-full"></div>}
                        </button>
                      ))}
                   </div>

                   <div className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2 text-right">
                            <label className="text-[14px] font-bold text-[#1D2A1F]">اسم المتجر (النشاط التجاري)</label>
                            <input type="text" defaultValue="شركة نماء الزراعية" className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right" />
                         </div>
                         <div className="space-y-2 text-right">
                            <label className="text-[14px] font-bold text-[#1D2A1F]">الرقم الضريبي</label>
                            <input type="text" defaultValue="30004562100003" className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right" />
                         </div>
                         <div className="space-y-2 text-right">
                            <label className="text-[14px] font-bold text-[#1D2A1F]">الموقع الرئيسي</label>
                            <input type="text" defaultValue="الرياض - طريق الملك فهد" className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right" />
                         </div>
                         <div className="space-y-2 text-right">
                            <label className="text-[14px] font-bold text-[#1D2A1F]">رقم السجل التجاري</label>
                            <input type="text" defaultValue="1010452631" className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right" />
                         </div>
                      </div>

                      <div className="space-y-2 text-right">
                         <label className="text-[14px] font-bold text-[#1D2A1F]">نبذة عن المتجر</label>
                         <textarea rows={4} className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right">نحن شركة رائدة في توريد المدخلات الزراعية عالية الجودة للمزارع السعودي، متخصصون في البذور الهجينة والأسمدة الصديقة للبيئة.</textarea>
                      </div>

                      <div className="pt-6 border-t border-[#F7F8F5] flex justify-end gap-4">
                         <button className="px-10 py-4 bg-[#1F5F2C] text-white rounded-full font-bold shadow-xl shadow-[#1F5F2C]/10">حفظ التغييرات</button>
                         <button className="px-10 py-4 bg-white text-[#1D2A1F] border border-[#E7E7E2] rounded-full font-bold">إلغاء</button>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
             <div className="w-20 h-20 bg-[#F7F8F5] rounded-full flex items-center justify-center mb-6">
                <LucideIcons.Construction className="w-10 h-10 text-[#C8A646]" />
             </div>
             <h3 className="text-2xl font-bold text-[#1D2A1F] mb-2">قيد التطوير</h3>
             <p className="text-[#667064]">هذا القسم سيكون متاحاً قريباً في تحديثات المنصة القادمة.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F5] flex overflow-hidden" dir="rtl">
      {/* Sidebar */}
      <aside className="w-72 bg-[#1D2A1F] text-white flex flex-col shrink-0">
        <div className="p-8 border-b border-white/10">
           <ImageWithFallback 
            src={logo} 
            alt="إمداد" 
            className="h-10 w-auto object-contain brightness-0 invert"
          />
        </div>
        
        <div className="p-6 flex-grow">
          <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-6 px-4 text-right">لوحة التحكم</p>
          <nav className="space-y-2">
            {[
              { icon: LucideIcons.LayoutDashboard, label: 'الرئيسية' },
              { icon: LucideIcons.Package, label: 'المنتجات' },
              { icon: LucideIcons.ShoppingCart, label: 'الطلبات' },
              { icon: LucideIcons.TrendingUp, label: 'المبيعات' },
              { icon: LucideIcons.Users, label: 'العملاء' },
              { icon: LucideIcons.Settings, label: 'الإعدادات' },
            ].map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === item.label;
              return (
                <button 
                  key={idx} 
                  onClick={() => setActiveTab(item.label)}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-[14px] transition-all ${isActive ? 'bg-[#1F5F2C] text-white shadow-lg' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-bold text-[15px]">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-white/10">
           <div className="bg-[#1F5F2C]/30 p-6 rounded-[1.5rem] border border-white/5 text-right">
              <p className="text-[13px] font-bold mb-2">الدعم الفني للموردين</p>
              <p className="text-[12px] text-gray-400 mb-4">متواجدون لخدمتك على مدار الساعة</p>
              <button className="w-full py-2 bg-white text-[#1D2A1F] rounded-full font-bold text-[12px]">تحدث معنا</button>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col h-screen overflow-y-auto">
        <header className="h-20 bg-white border-b border-[#E7E7E2] px-10 flex items-center justify-between shrink-0 sticky top-0 z-20">
          <div className="flex items-center gap-6 flex-grow max-w-xl">
             <div className="relative w-full">
                <LucideIcons.Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#667064] w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="ابحث عن طلبات، عملاء، أو منتجات..." 
                  className="w-full pr-12 pl-6 py-2.5 bg-[#F7F8F5] border-none rounded-full text-[14px] focus:ring-1 focus:ring-[#1F5F2C] text-right"
                />
             </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 px-4 py-2 bg-green-50 rounded-full border border-green-100">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[12px] font-bold text-green-700 uppercase">حساب موثق</span>
            </div>
            
            <button className="relative p-2.5 bg-[#F7F8F5] rounded-full text-[#1D2A1F] hover:bg-[#E7E7E2] transition-all">
              <LucideIcons.Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold border-2 border-white">3</span>
            </button>
            
            <div className="flex items-center gap-4 pr-6 border-r border-[#E7E7E2]">
              <div className="text-right">
                <p className="text-[14px] font-bold text-[#1D2A1F]">شركة نماء الزراعية</p>
                <p className="text-[12px] text-[#667064]">مورد بلاتيني</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#C8A646] flex items-center justify-center text-white font-bold shadow-lg shadow-[#C8A646]/20">
                 ن
              </div>
            </div>
          </div>
        </header>

        <div className="p-10">
          <div className="flex justify-between items-end mb-10">
            <div className="text-right">
              <h1 className="text-3xl font-bold text-[#1D2A1F] mb-2">{activeTab}</h1>
              <p className="text-[#667064]">مرحباً بك مجدداً، إليك نظرة سريعة على أداء مبيعاتك اليوم.</p>
            </div>
            <button 
              onClick={() => setIsAddProductOpen(true)}
              className="flex items-center gap-3 px-8 py-4 bg-[#1F5F2C] text-white rounded-full font-bold text-[16px] shadow-xl shadow-[#1F5F2C]/20 hover:bg-[#15411e] transition-all"
            >
              <LucideIcons.Plus className="w-5 h-5" />
              إضافة منتج جديد
            </button>
          </div>

          {renderContent()}
        </div>
      </main>

      {/* Add Product Modal */}
      {isAddProductOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
           <div className="absolute inset-0 bg-[#1D2A1F]/60 backdrop-blur-sm" onClick={() => setIsAddProductOpen(false)}></div>
           <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden border border-[#E7E7E2]">
              <div className="p-10 border-b border-[#F7F8F5] flex justify-between items-center text-right">
                 <div>
                    <h2 className="text-2xl font-bold text-[#1D2A1F]">إضافة منتج جديد</h2>
                    <p className="text-[14px] text-[#667064]">أدخل تفاصيل المنتج ليظهر في سوق المدخلات</p>
                 </div>
                 <button onClick={() => setIsAddProductOpen(false)} className="p-3 bg-[#F7F8F5] rounded-full text-[#667064] hover:bg-[#E7E7E2] transition-all">
                    <LucideIcons.X className="w-6 h-6" />
                 </button>
              </div>
              
              <div className="p-10 max-h-[70vh] overflow-y-auto">
                 <form className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                       <div className="col-span-2 space-y-2 text-right">
                          <label className="text-[14px] font-bold text-[#1D2A1F]">اسم المنتج</label>
                          <input type="text" placeholder="مثلاً: بذور القمح نجران" className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right" />
                       </div>
                       
                       <div className="space-y-2 text-right">
                          <label className="text-[14px] font-bold text-[#1D2A1F]">الفئة</label>
                          <select className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right">
                             <option>بذور</option>
                             <option>أسمدة</option>
                             <option>مبيدات</option>
                             <option>معدات</option>
                          </select>
                       </div>
                       
                       <div className="space-y-2 text-right">
                          <label className="text-[14px] font-bold text-[#1D2A1F]">السعر (ر.س)</label>
                          <input type="number" placeholder="0.00" className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right" />
                       </div>

                       <div className="space-y-2 text-right">
                          <label className="text-[14px] font-bold text-[#1D2A1F]">الكمية المتوفرة</label>
                          <input type="number" placeholder="0" className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right" />
                       </div>

                       <div className="space-y-2 text-right">
                          <label className="text-[14px] font-bold text-[#1D2A1F]">وحدة القياس</label>
                          <select className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right">
                             <option>كجم</option>
                             <option>لتر</option>
                             <option>قطعة</option>
                             <option>كيس</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-2 text-right">
                       <label className="text-[14px] font-bold text-[#1D2A1F]">وصف المنتج</label>
                       <textarea rows={4} placeholder="اكتب تفاصيل المنتج ومميزاته هنا..." className="w-full px-6 py-4 bg-[#F7F8F5] border-none rounded-2xl focus:ring-1 focus:ring-[#1F5F2C] text-right"></textarea>
                    </div>

                    <div className="space-y-2 text-right">
                       <label className="text-[14px] font-bold text-[#1D2A1F]">صورة المنتج</label>
                       <div className="border-2 border-dashed border-[#E7E7E2] rounded-[2rem] p-10 flex flex-col items-center justify-center bg-[#F7F8F5]/50 group hover:border-[#1F5F2C] transition-all cursor-pointer">
                          <LucideIcons.Plus className="w-10 h-10 text-[#667064] group-hover:text-[#1F5F2C] mb-4" />
                          <p className="text-[14px] text-[#667064]">اضغط لرفع الصورة أو اسحبها هنا</p>
                          <p className="text-[11px] text-[#667064] mt-2">JPG, PNG (حد أقصى 5MB)</p>
                       </div>
                    </div>
                 </form>
              </div>

              <div className="p-10 border-t border-[#F7F8F5] flex gap-4">
                 <button 
                  className="flex-grow py-4 bg-[#1F5F2C] text-white rounded-full font-bold text-[16px] shadow-xl shadow-[#1F5F2C]/10 hover:bg-[#15411e] transition-all"
                  onClick={() => setIsAddProductOpen(false)}
                 >
                    حفظ ونشر المنتج
                 </button>
                 <button 
                  className="px-10 py-4 bg-white text-[#1D2A1F] border border-[#E7E7E2] rounded-full font-bold text-[16px] hover:bg-[#F7F8F5] transition-all"
                  onClick={() => setIsAddProductOpen(false)}
                 >
                    إلغاء
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
