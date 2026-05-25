import { useNavigate } from "react-router";
import { ArrowRight, Phone, Video, Paperclip, Send, ShoppingCart } from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Chat() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-[#F9FAFB] flex flex-col mx-auto max-w-[480px] shadow-2xl relative overflow-hidden text-right">
      {/* Chat Header */}
      <header className="h-[64px] bg-white flex items-center justify-between px-4 shrink-0 shadow-[0px_4px_6px_rgba(0,0,0,0.02)] z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-lg relative">
              👨‍🌾
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#4CAF50] border-2 border-white rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 leading-tight">فهد</span>
              <span className="text-[10px] text-gray-500">متصل الآن</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-full transition-colors">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 scroll-smooth">
        
        {/* Timestamp */}
        <div className="flex justify-center mt-2">
          <span className="bg-gray-100 text-gray-500 text-[10px] px-3 py-1 rounded-full font-medium">اليوم، 04:15 م</span>
        </div>

        {/* Farmer Message (Received) */}
        <div className="flex items-end gap-2 max-w-[85%] self-start">
          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-sm shrink-0 mb-1">
            👨‍🌾
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-br-sm shadow-[0px_2px_4px_rgba(0,0,0,0.02)] text-sm border border-gray-100">
              <p className="leading-relaxed">السلام عليكم، عندي مشكلة في اصفرار الأوراق، أرفقت لك صورة.</p>
            </div>
            <div className="bg-gray-100 p-1.5 rounded-2xl rounded-br-sm shadow-[0px_2px_4px_rgba(0,0,0,0.02)] border border-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758798368726-c3484ab2fb39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBwbGFudCUyMGxlYWYlMjBkaXNlYXNlfGVufDF8fHx8MTc3MzczNzc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Yellow leaf disease" 
                className="w-full h-40 object-cover rounded-xl"
              />
            </div>
            <span className="text-[10px] text-gray-400 px-1 mt-0.5">04:16 م</span>
          </div>
        </div>

        {/* Advisor Message (Sent) */}
        <div className="flex items-end gap-2 max-w-[85%] self-end">
          <div className="flex flex-col gap-1 w-full">
            <div className="bg-[#FEF9C3] text-gray-900 p-3 rounded-2xl rounded-bl-sm shadow-[0px_2px_4px_rgba(0,0,0,0.02)] text-sm border border-[#FDE047]/30">
              <p className="leading-relaxed">وعليكم السلام، يبدو أنه نقص كالسيوم. سأرسل لك السماد المناسب.</p>
            </div>
            
            {/* Product Card Inside Chat */}
            <div className="bg-white rounded-[12px] p-2 shadow-[0px_4px_6px_rgba(0,0,0,0.05)] border border-gray-100 mt-1 flex gap-3 items-center w-[260px] self-end rounded-bl-sm">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1655130944329-b3a63166f6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyfGVufDF8fHx8MTc3MzczNzc1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Fertilizer" 
                className="w-16 h-16 object-cover rounded-lg bg-gray-50"
              />
              <div className="flex flex-col flex-1">
                <span className="text-sm font-bold text-gray-900 leading-tight">سماد يوريا سائل</span>
                <span className="text-xs text-[#4CAF50] font-bold mt-1">45 ر.س</span>
                <button className="bg-[#D4AF37] text-white text-[10px] font-bold py-1.5 px-2 rounded-md mt-2 flex items-center justify-center gap-1 hover:bg-[#C29F31] transition-colors">
                  <ShoppingCart className="w-3 h-3" /> أضف للسلة للمزارع
                </button>
              </div>
            </div>
            <span className="text-[10px] text-gray-400 px-1 mt-0.5 text-left">04:18 م</span>
          </div>
        </div>

      </main>

      {/* Input Bar */}
      <footer className="bg-white p-3 border-t border-gray-100 flex items-center gap-2 pb-safe shadow-[0px_-4px_6px_rgba(0,0,0,0.02)] z-20">
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 rounded-full transition-colors shrink-0">
          <Paperclip className="w-5 h-5" />
        </button>
        
        <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-[#D4AF37] focus-within:ring-1 focus-within:ring-[#D4AF37] transition-all">
          <input 
            type="text" 
            placeholder="اكتب رسالة..." 
            className="w-full bg-transparent border-none outline-none text-sm text-gray-800 placeholder:text-gray-400 font-medium"
            dir="rtl"
          />
        </div>
        
        <button className="w-10 h-10 flex items-center justify-center bg-[#D4AF37] text-white rounded-full hover:bg-[#C29F31] transition-colors shadow-sm shrink-0 rtl:-scale-x-100">
          <Send className="w-5 h-5 ml-1" />
        </button>
      </footer>
    </div>
  );
}