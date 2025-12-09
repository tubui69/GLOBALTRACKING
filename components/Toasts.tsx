import React, { useEffect, useState } from 'react';
import { RANDOM_PHONES } from '../constants';

const MAX_TOASTS = 4;

const Toasts: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentPhone, setCurrentPhone] = useState('');
  const [toastCount, setToastCount] = useState(0);

  useEffect(() => {
    const showToast = () => {
      if (toastCount >= MAX_TOASTS) return;

      const randomPhone = RANDOM_PHONES[Math.floor(Math.random() * RANDOM_PHONES.length)];
      setCurrentPhone(randomPhone);
      setVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setVisible(false);
        setToastCount(prev => prev + 1);
      }, 4000);

      // Schedule next toast
      if (toastCount < MAX_TOASTS - 1) {
        const nextInterval = Math.floor(Math.random() * (15000 - 5000 + 1) + 5000);
        setTimeout(showToast, nextInterval);
      }
    };

    // Initial delay
    const initialTimer = setTimeout(showToast, 2000);

    return () => clearTimeout(initialTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible && !currentPhone) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9990] flex flex-col gap-2 pointer-events-none w-full max-w-sm sm:w-auto items-end px-4 sm:px-0">
      {visible && (
        <div className={`bg-white/90 backdrop-blur border border-slate-200 p-2 rounded-lg shadow-lg flex items-center gap-2 w-auto max-w-[240px] pointer-events-auto ${visible ? 'animate-slideInRight' : 'animate-fadeOut'}`}>
          <div className="bg-green-100 text-green-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs">
            <i className="fas fa-check"></i>
          </div>
          <div>
            <p className="text-[8px] text-slate-500 font-bold uppercase">Vừa kích hoạt</p>
            <p className="text-[10px] font-bold text-slate-800">SĐT {currentPhone}...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toasts;