import React from 'react';
import { Banknote, TrendingUp, Calendar, BarChart as BarChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const bestSellersData = [
  { name: 'سماد يوريا 46%', value: 120000 },
  { name: 'بذور طماطم هجين', value: 80000 },
  { name: 'أنابيب ري 16ملم', value: 45000 },
  { name: 'مبيد حشري عضوي', value: 30000 },
];

export const SupplierSales = () => {
  return (
    <div className="h-full flex flex-col space-y-6 overflow-hidden pb-4">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">تقارير المبيعات</h1>
          <p className="text-sm text-gray-500 mt-1">نظرة تفصيلية لأداء المبيعات والمنتجات الأكثر طلباً</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 shrink-0">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 mb-2">مبيعات اليوم</p>
              <h3 className="text-3xl font-black text-gray-900">12,500 <span className="text-sm text-gray-500 font-medium">ر.س</span></h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
              <Banknote className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-blue-600 font-bold mt-2">
            <TrendingUp className="w-4 h-4" />
            <span>+5% عن الأمس</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-36">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 mb-2">مبيعات الأسبوع</p>
              <h3 className="text-3xl font-black text-gray-900">85,000 <span className="text-sm text-gray-500 font-medium">ر.س</span></h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
              <Calendar className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-green-600 font-bold mt-2">
            <TrendingUp className="w-4 h-4" />
            <span>+12% عن الأسبوع الماضي</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/30 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full -z-0"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-sm font-bold text-gray-500 mb-2">مبيعات الشهر</p>
              <h3 className="text-3xl font-black text-[#D4AF37]">340,000 <span className="text-sm text-gray-500 font-medium">ر.س</span></h3>
            </div>
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center border border-[#D4AF37]/20">
              <BarChartIcon className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#D4AF37] font-bold mt-2 relative z-10">
            <TrendingUp className="w-4 h-4" />
            <span>+25% عن الشهر الماضي</span>
          </div>
        </div>
      </div>

      {/* Best Sellers Chart */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden min-h-[350px]">
        <div className="p-5 border-b border-gray-100 shrink-0">
          <h2 className="text-lg font-bold text-gray-900">أفضل المنتجات مبيعاً (ر.س)</h2>
        </div>
        <div className="p-5 flex-1 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bestSellersData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barSize={50}>
              <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                key="xaxis"
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 13, fill: '#4B5563', fontWeight: 'bold' }} 
                dy={15}
              />
              <YAxis 
                key="yaxis"
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#6B7280', fontWeight: 'bold' }}
                tickFormatter={(value) => `${value / 1000}k`}
                dx={-10}
              />
              <Tooltip 
                key="tooltip"
                cursor={{ fill: '#F9FAFB' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', fontWeight: 'bold', direction: 'rtl' }}
                formatter={(value: number) => [`${value.toLocaleString()} ر.س`, 'إجمالي المبيعات']}
              />
              <Bar key="bar" dataKey="value" radius={[8, 8, 0, 0]}>
                {bestSellersData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#D4AF37' : index === 1 ? '#C29F31' : index === 2 ? '#E5C96B' : '#F2E2A5'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
