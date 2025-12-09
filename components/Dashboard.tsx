import React, { useState } from 'react';
import ExpiredModal from './ExpiredModal';

interface DashboardProps {
  targetPhone: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ targetPhone, onLogout }) => {
  const [isExpiredOpen, setIsExpiredOpen] = useState(false);

  const openExpired = () => setIsExpiredOpen(true);

  return (
    <div className="fixed inset-0 bg-[#f1f5f9] z-[100] flex animate-fadeIn font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-[260px] bg-[#0f172a] text-white flex flex-col h-full shrink-0 shadow-2xl relative z-20 hidden md:flex">
        <div className="h-16 md:h-20 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-shield-alt"></i>
            </div>
            <span className="font-bold text-lg tracking-wide">ADMIN PANEL</span>
          </div>
        </div>
        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white shadow-lg shadow-blue-500/30 rounded-xl transition-all cursor-pointer font-medium">
            <i className="fas fa-map-marked-alt w-6"></i> 1. Định Vị GPS
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer font-medium">
            <i className="fas fa-comment-dots w-6"></i> 2. Tin Nhắn Zalo
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer font-medium">
            <i className="fab fa-facebook-messenger w-6"></i> 3. Tin Nhắn Mess
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer font-medium">
            <i className="fas fa-phone w-6"></i> 4. Lịch Sử Cuộc Gọi
          </div>
        </div>
        <div className="p-4 border-t border-slate-800 bg-[#0f172a]">
          <button onClick={onLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-bold w-full p-2 rounded hover:bg-white/5 transition">
            <i className="fas fa-sign-out-alt"></i> Đăng Xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 shadow-sm z-10">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-slate-800">Giám Sát Thời Gian Thực</h2>
            <p className="text-[10px] md:text-xs text-slate-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Hệ thống đang hoạt động
            </p>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-slate-800">{targetPhone}</p>
              <p className="text-xs text-slate-500">iPhone • Pin 82%</p>
            </div>
            <button className="md:hidden text-slate-600 text-xl" onClick={onLogout}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full overflow-y-auto pb-20 md:pb-0">
            
            {/* Module 1: GPS */}
            <div className="col-span-1 h-[350px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="absolute top-0 left-0 right-0 p-3 border-b border-slate-100 bg-white/95 z-30 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marked-alt text-red-500"></i>
                  <span className="font-bold text-slate-700 text-sm">1. Định Vị GPS</span>
                </div>
                <button className="bg-white text-slate-700 text-[10px] font-bold px-2 py-1 rounded border border-slate-300 shadow-sm hover:bg-slate-50 flex items-center gap-1">Mở Bằng App GPS</button>
              </div>
              <div className="absolute inset-0 top-[40px] bg-slate-100 filter blur-sm z-0" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')", backgroundSize: "cover" }}></div>
              <div onClick={openExpired} className="absolute inset-0 background-white/50 backdrop-blur-[4px] flex flex-col items-center justify-center z-20 cursor-pointer transition-all hover:bg-white/30 pt-10">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                  <i className="fas fa-lock text-yellow-500 text-xl"></i>
                </div>
                <span className="font-bold text-slate-800 text-sm">NỘI DUNG ĐÃ KHÓA</span>
                <span className="text-xs text-blue-600 font-medium mt-1 hover:underline">Xác thực Key để xem</span>
              </div>
            </div>

            {/* Module 2: Zalo */}
            <div className="col-span-1 h-[350px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="absolute top-0 left-0 right-0 p-3 border-b border-slate-100 bg-white/95 z-30 flex justify-between items-center">
                <span className="font-bold text-slate-700 text-sm flex items-center gap-2"><i className="fas fa-comment-dots text-blue-600"></i> 2. Tin Nhắn Zalo</span>
                <button className="bg-white text-slate-700 text-[10px] font-bold px-2 py-1 rounded border border-slate-300 shadow-sm hover:bg-slate-50 flex items-center gap-1">Mở Bằng App Zalo</button>
              </div>
              <div className="p-4 space-y-4 filter blur-sm opacity-50 mt-12 z-0">
                <div className="flex gap-2"><div className="w-8 h-8 bg-gray-300 rounded-full"></div><div className="bg-gray-100 h-8 w-2/3 rounded-lg"></div></div>
                <div className="flex gap-2 flex-row-reverse"><div className="bg-blue-100 h-8 w-1/2 rounded-lg"></div></div>
              </div>
              <div onClick={openExpired} className="absolute inset-0 background-white/50 backdrop-blur-[4px] flex flex-col items-center justify-center z-20 cursor-pointer transition-all hover:bg-white/30 pt-10">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                  <i className="fas fa-lock text-yellow-500 text-xl"></i>
                </div>
                <span className="font-bold text-slate-800 text-sm">NỘI DUNG ĐÃ KHÓA</span>
                <span className="text-xs text-blue-600 font-medium mt-1 hover:underline">Xác thực Key để xem</span>
              </div>
            </div>

            {/* Module 3: FB */}
            <div className="col-span-1 h-[350px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="absolute top-0 left-0 right-0 p-3 border-b border-slate-100 bg-white/95 z-30 flex justify-between items-center">
                <div className="flex items-center gap-2"><i className="fab fa-facebook-messenger text-blue-500"></i><span className="font-bold text-slate-700 text-sm">3. Tin Nhắn Facebook</span></div>
                <button className="bg-white text-slate-700 text-[10px] font-bold px-2 py-1 rounded border border-slate-300 shadow-sm hover:bg-slate-50 flex items-center gap-1">Mở Bằng App FB</button>
              </div>
              <div className="flex items-center justify-center h-full filter blur-sm opacity-50 z-0 pt-10">
                <i className="fab fa-facebook-messenger text-6xl text-slate-200"></i>
              </div>
              <div onClick={openExpired} className="absolute inset-0 background-white/50 backdrop-blur-[4px] flex flex-col items-center justify-center z-20 cursor-pointer transition-all hover:bg-white/30 pt-10">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                  <i className="fas fa-lock text-yellow-500 text-xl"></i>
                </div>
                <span className="font-bold text-slate-800 text-sm">NỘI DUNG ĐÃ KHÓA</span>
                <span className="text-xs text-blue-600 font-medium mt-1 hover:underline">Xác thực Key để xem</span>
              </div>
            </div>

            {/* Module 4: Calls */}
            <div className="col-span-1 h-[350px] relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="absolute top-0 left-0 right-0 p-3 border-b border-slate-100 bg-white/95 z-30 flex justify-between items-center">
                <div className="flex items-center gap-2"><i className="fas fa-phone-alt text-green-500"></i><span className="font-bold text-slate-700 text-sm">4. Lịch Sử Cuộc Gọi</span></div>
              </div>
              <div className="mt-12 p-4 filter blur-sm select-none z-0">
                <table className="w-full text-xs text-left text-slate-600">
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white">
                      <td className="px-2 py-3 font-medium">0912.***.***</td>
                      <td className="px-2 py-3 text-red-500">Đến</td>
                      <td className="px-2 py-3">
                        <button className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded hover:bg-green-200 flex items-center gap-1">
                          <i className="fas fa-play"></i> File ghi âm
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div onClick={openExpired} className="absolute inset-0 background-white/50 backdrop-blur-[4px] flex flex-col items-center justify-center z-20 cursor-pointer transition-all hover:bg-white/30 pt-10">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                  <i className="fas fa-lock text-yellow-500 text-xl"></i>
                </div>
                <span className="font-bold text-slate-800 text-sm">NỘI DUNG ĐÃ KHÓA</span>
                <span className="text-xs text-blue-600 font-medium mt-1 hover:underline">Xác thực Key để xem</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ExpiredModal 
        isOpen={isExpiredOpen} 
        onClose={() => setIsExpiredOpen(false)} 
        targetPhone={targetPhone}
        onLogout={onLogout}
      />
    </div>
  );
};

export default Dashboard;