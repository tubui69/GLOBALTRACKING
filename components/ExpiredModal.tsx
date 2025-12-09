import React from 'react';
import { ZALO_LINK } from '../constants';

interface ExpiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetPhone: string;
  onLogout: () => void;
}

const ExpiredModal: React.FC<ExpiredModalProps> = ({ isOpen, onClose, targetPhone, onLogout }) => {
  if (!isOpen) return null;

  const contactZalo = () => window.open(ZALO_LINK, '_blank');

  return (
    <div className="fixed inset-0 bg-[#0f172a]/95 z-[300] flex items-center justify-center p-4 backdrop-blur-md">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative animate-slideInLeft">
        <div className="bg-red-600 p-6 md:p-8 text-center text-white relative overflow-hidden">
          <i className="fas fa-ban text-5xl md:text-6xl mb-3 md:mb-4 relative z-10 drop-shadow-md"></i>
          <h3 className="text-2xl md:text-3xl font-black uppercase relative z-10 tracking-tight">KEY CHƯA ĐƯỢC XÁC MINH</h3>
          <p className="text-red-100 text-xs md:text-sm mt-2 relative z-10 font-medium bg-red-700/50 inline-block px-3 py-1 rounded-full">
            Vui lòng mua hoặc gia hạn Key
          </p>
        </div>
        
        <div className="p-6 md:p-8 text-center">
          <p className="text-slate-600 text-sm mb-6 md:mb-8 leading-relaxed font-medium">
            Mã kích hoạt của bạn chưa được xác minh. Để tiếp tục giám sát số điện thoại 
            <strong className="text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mx-1">{targetPhone}</strong>, 
            vui lòng gia hạn ngay.
          </p>
          
          <button onClick={contactZalo} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3.5 md:py-4 rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transition transform hover:scale-[1.02] mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png" alt="Zalo" className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full p-0.5 shadow-sm" />
            <div className="text-left leading-none">
              <span className="block text-[10px] opacity-80 font-normal mb-1 text-blue-100">Liên hệ Admin</span>
              <span className="block text-base md:text-lg">GIA HẠN / MUA KEY</span>
            </div>
          </button>
          
          <div className="flex justify-between items-center mt-4">
            <button onClick={onLogout} className="text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-wider underline decoration-slate-300">
              Đăng xuất
            </button>
            <button onClick={onClose} className="text-slate-400 hover:text-blue-600 text-xs font-bold uppercase tracking-wider underline decoration-slate-300">
              Bỏ qua, xem tiếp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpiredModal;