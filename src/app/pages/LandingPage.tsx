import React from 'react';
import { Link } from 'react-router';
import { 
  Shield, Sprout, Store, MessageSquare, 
  TrendingUp, BarChart3, CloudSun, 
  Droplets, Truck, MapPin, Calendar, 
  CheckCircle2, ArrowLeft 
} from 'lucide-react';
import logoImage from 'figma:asset/694d3171baf1561efc382dd632a2e2b9056a85a0.png';

export const LandingPage = () => {
  return (
    <div className="min-h-[100dvh] w-full bg-[#F8F9FA] flex flex-col items-center relative font-sans overflow-x-hidden overflow-y-auto" dir="rtl">

      {/* Topographic / Grid Pattern Background - Light Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23212529' fill-opacity='0.5' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFFFFF]/80 via-[#F8F9FA]/80 to-[#F8F9FA]"></div>

      <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col items-center min-h-[100dvh] z-10 relative">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-[#C5A028] blur-[60px] opacity-10 rounded-full"></div>
            <img src={logoImage} alt="Emdad Logo" className="h-28 sm:h-36 md:h-44 object-contain relative z-10 drop-shadow-sm" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#212529] mb-6 tracking-tight">
            منصة <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#C5A028] to-[#2D5A27]">إمداد</span> الزراعية
          </h1>
          <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            المنظومة الرقمية المتكاملة لإدارة سلاسل التوريد الزراعية في المملكة، من المزرعة إلى المائدة بتقنيات متقدمة.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

          {/* Card 1: Admin */}
          <Link to="/admin" className="group md:col-span-2 lg:col-span-2 lg:row-span-1 bg-white border border-[#E0E0E0] rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-8 hover:-translate-y-1 hover:shadow-xl hover:border-[#C5A028]/40 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C5A028]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#C5A028]/10 transition-all duration-500"></div>

            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6 border border-[#E0E0E0] group-hover:bg-[#C5A028]/10 group-hover:border-[#C5A028]/20 transition-all duration-300">
                <Shield className="w-7 h-7 text-[#212529] group-hover:text-[#C5A028] transition-colors" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-[#212529] mb-3">لوحة الإدارة</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                التحكم الكامل في المنظومة، مراقبة أداء الأسواق، إدارة العمليات المالية، واعتماد المستخدمين الجدد من خلال واجهة مركزية متطورة.
              </p>
              <div className="flex items-center text-[#212529] group-hover:text-[#C5A028] font-bold text-sm gap-2 mt-auto transition-all">
                <span>الدخول للوحة التحكم</span>
                <ArrowLeft className="w-4 h-4" />
              </div>
            </div>

            {/* Mini Dashboard Visual */}
            <div className="hidden md:flex flex-1 bg-[#F8F9FA] rounded-2xl border border-[#E0E0E0] p-4 flex-col gap-4 relative z-10 shadow-sm group-hover:border-[#C5A028]/20 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-bold">نظرة عامة على النظام</span>
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 bg-white border border-[#E0E0E0] rounded-xl p-3 flex flex-col gap-2 shadow-sm">
                  <span className="text-[10px] text-gray-500 font-medium">العمليات اليومية</span>
                  <div className="flex items-end gap-2">
                    <span className="text-lg font-bold text-[#212529]">8,432</span>
                    <span className="text-[10px] text-[#2D5A27] font-bold flex items-center"><TrendingUp className="w-3 h-3 ml-1"/> +12%</span>
                  </div>
                </div>
                <div className="flex-1 bg-white border border-[#E0E0E0] rounded-xl p-3 flex flex-col gap-2 shadow-sm">
                  <span className="text-[10px] text-gray-500 font-medium">الإيرادات</span>
                  <div className="flex items-end gap-2">
                    <span className="text-lg font-bold text-[#212529]">2.4M</span>
                    <span className="text-[10px] text-[#2D5A27] font-bold flex items-center"><TrendingUp className="w-3 h-3 ml-1"/> +8%</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-16 bg-gradient-to-t from-[#C5A028]/10 to-transparent border-b-2 border-[#C5A028] rounded-sm mt-auto opacity-70"></div>
            </div>
          </Link>

          {/* Card 2: Farmer App */}
          <Link to="/farmer" className="group md:col-span-1 lg:col-span-1 lg:row-span-2 bg-white border border-[#E0E0E0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#2D5A27]/40 transition-all duration-300 shadow-sm relative overflow-hidden">
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#2D5A27]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#2D5A27]/10 transition-all duration-500"></div>

             <div className="w-14 h-14 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-6 border border-[#E0E0E0] group-hover:bg-[#2D5A27]/10 group-hover:border-[#2D5A27]/20 transition-all duration-300">
                <Sprout className="w-7 h-7 text-[#212529] group-hover:text-[#2D5A27] transition-colors" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-[#212529] mb-3">تطبيق المزارع</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                متابعة المحاصيل، طلب الاستشارات الزراعية، وعرض المنتجات في السوق مباشرة للوصول إلى المشترين بسهولة.
              </p>

              {/* Farmer App Visual Widget */}
              <div className="mt-auto w-full bg-[#F8F9FA] rounded-2xl border border-[#E0E0E0] p-5 flex flex-col gap-5 relative z-10 shadow-sm group-hover:border-[#2D5A27]/20 transition-colors">
                <div className="flex justify-between items-center pb-4 border-b border-[#E0E0E0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
                      <CloudSun className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">الطقس اليوم</p>
                      <p className="text-sm font-bold text-[#212529]">مشمس، 32°C</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-medium">الري</p>
                    <p className="text-sm font-bold text-blue-600 flex items-center"><Droplets className="w-3 h-3 mr-1"/> 80%</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-gray-600 font-bold">حالة المحاصيل (النخيل)</p>
                  <div className="w-full bg-[#E0E0E0] rounded-full h-2 shadow-inner">
                    <div className="bg-[#2D5A27] h-2 rounded-full w-[75%] relative shadow-sm">
                      <div className="absolute -left-1 -top-1 w-4 h-4 bg-white border border-[#2D5A27] rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center text-[#212529] group-hover:text-[#2D5A27] font-bold text-sm gap-2 mt-8 transition-all">
                <span>فتح التطبيق</span>
                <ArrowLeft className="w-4 h-4" />
              </div>
          </Link>

          {/* Card 3: Supplier Hub */}
          <Link to="/supplier" className="group md:col-span-1 lg:col-span-1 bg-white border border-[#E0E0E0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#C5A028]/40 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A028]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#C5A028]/15 transition-all duration-500"></div>
            <div className="w-12 h-12 bg-[#F8F9FA] rounded-xl flex items-center justify-center mb-5 border border-[#E0E0E0] group-hover:bg-[#C5A028]/10 group-hover:border-[#C5A028]/20 transition-all duration-300">
              <Store className="w-6 h-6 text-[#212529] group-hover:text-[#C5A028] transition-colors" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold text-[#212529] mb-2">لوحة المورد</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              إدارة المشتريات، تتبع الشحنات وسلاسل الإمداد بدقة، ومراقبة المخزون.
            </p>

            {/* Logistics Widget */}
            <div className="mt-auto bg-[#F8F9FA] rounded-xl border border-[#E0E0E0] p-4 relative z-10 flex items-center justify-between group-hover:border-[#C5A028]/20 transition-colors shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white border border-[#E0E0E0] rounded-full flex items-center justify-center text-gray-500 shadow-sm">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#212529]">شحنة #8092</p>
                  <p className="text-[10px] text-[#2D5A27] font-medium">في الطريق</p>
                </div>
              </div>
              <MapPin className="w-4 h-4 text-gray-400" />
            </div>
          </Link>

          {/* Card 4: Consultant App */}
          <Link to="/consultant" className="group md:col-span-2 lg:col-span-1 bg-white border border-[#E0E0E0] rounded-[32px] p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#2D5A27]/40 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#2D5A27]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#2D5A27]/15 transition-all duration-500"></div>
            <div className="w-12 h-12 bg-[#F8F9FA] rounded-xl flex items-center justify-center mb-5 border border-[#E0E0E0] group-hover:bg-[#2D5A27]/10 group-hover:border-[#2D5A27]/20 transition-all duration-300">
              <MessageSquare className="w-6 h-6 text-[#212529] group-hover:text-[#2D5A27] transition-colors" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold text-[#212529] mb-2">تطبيق المستشار</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              جدولة المواعيد، تقديم تقارير فنية، ومتابعة المستحقات المالية.
            </p>

            {/* Calendar Widget */}
            <div className="mt-auto bg-[#F8F9FA] rounded-xl border border-[#E0E0E0] p-4 relative z-10 flex flex-col gap-3 group-hover:border-[#2D5A27]/20 transition-colors shadow-sm">
              <div className="flex items-center justify-between text-xs text-gray-500 font-bold">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3"/> مواعيد اليوم</span>
                <span className="text-[#212529]">3 استشارات</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 -space-x-reverse">
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E0E0E0] shadow-sm flex items-center justify-center text-[10px] font-bold text-[#212529]">س</div>
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E0E0E0] shadow-sm flex items-center justify-center text-[10px] font-bold text-[#212529]">م</div>
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E0E0E0] shadow-sm flex items-center justify-center text-[10px] font-bold text-[#212529]">ع</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-[#2D5A27] mr-auto" />
              </div>
            </div>
          </Link>

        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm font-medium text-gray-500 w-full animate-in fade-in duration-1000 delay-500">
          <p>جميع الحقوق محفوظة © منصة إمداد الزراعية {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  );
};
