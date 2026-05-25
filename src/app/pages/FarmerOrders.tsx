import React from 'react';
import { Package, Truck, CheckCircle2, Clock, ChevronLeft, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const orders = [
  {
    id: '#ORD-4921',
    date: '12 مايو 2024',
    status: 'processing',
    total: 450,
    items: 3
  },
  {
    id: '#ORD-4880',
    date: '05 مايو 2024',
    status: 'delivered',
    total: 1250,
    items: 12
  }
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'processing': return { label: 'جاري التجهيز', color: 'bg-blue-50 text-blue-700 border border-blue-100', icon: Clock };
    case 'shipped': return { label: 'تم الشحن', color: 'bg-orange-50 text-orange-700 border border-orange-100', icon: Truck };
    case 'delivered': return { label: 'تم التسليم', color: 'bg-green-50 text-green-700 border border-green-100', icon: CheckCircle2 };
    default: return { label: 'جديد', color: 'bg-gray-50 text-gray-700 border border-gray-200', icon: Package };
  }
};

export const FarmerOrders = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-[#F8F9FA] font-sans p-5">
      <h1 className="text-2xl font-bold text-[#212529] mb-6 shrink-0">طلباتي</h1>

      <div className="flex-1 space-y-4 overflow-y-auto pb-8 no-scrollbar">
        {orders.map((order) => {
          const config = getStatusConfig(order.status);
          const StatusIcon = config.icon;

          return (
            <div key={order.id} className="bg-white rounded-[16px] border border-[#E0E0E0] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="p-4 border-b border-[#E0E0E0] flex justify-between items-center bg-[#F8F9FA]/50 group-hover:bg-[#F8F9FA] transition-colors">
                <div>
                  <h3 className="font-bold text-[#212529] text-[15px] font-mono tracking-tight mb-1 group-hover:text-[#2D5A27] transition-colors">{order.id}</h3>
                  <p className="text-[11px] text-gray-500 font-medium">{order.date}</p>
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold shadow-sm ${config.color}`}>
                  <StatusIcon className="w-3.5 h-3.5" />
                  {config.label}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[13px] text-gray-500 font-medium">عدد المنتجات: <span className="font-bold text-[#212529]">{order.items}</span></span>
                  <span className="font-bold text-[#2D5A27] text-[16px]">{order.total} <span className="text-[11px] font-bold text-gray-500">ر.س</span></span>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      toast.success('تمت إضافة منتجات الطلب للسلة');
                      navigate('/farmer/cart');
                    }}
                    className="w-12 h-11 bg-[#F8F9FA] text-[#212529] border border-[#E0E0E0] shadow-sm rounded-[12px] flex items-center justify-center hover:bg-white hover:text-[#C5A028] hover:border-[#C5A028] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  <button className="flex-1 bg-white text-[#212529] border border-[#E0E0E0] shadow-sm h-11 rounded-[12px] text-[13px] font-bold flex items-center justify-center gap-2 hover:bg-[#F8F9FA] hover:text-[#2D5A27] hover:border-[#2D5A27]/30 hover:-translate-y-0.5 transition-all duration-300">
                    عرض التفاصيل <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};