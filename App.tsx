import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import LoginModal from './components/LoginModal';
import Toasts from './components/Toasts';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [targetPhone, setTargetPhone] = useState<string>('');

  const handleLoginSuccess = (phone: string) => {
    setTargetPhone(phone);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    // Simple reload to reset state as per original behavior
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Social Proof Toasts (Only on Landing) */}
      {currentView === 'landing' && <Toasts />}

      {/* Main Views */}
      {currentView === 'landing' && (
        <LandingPage onLoginClick={() => setIsLoginModalOpen(true)} />
      )}

      {currentView === 'dashboard' && (
        <Dashboard 
          targetPhone={targetPhone} 
          onLogout={handleLogout} 
        />
      )}

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;