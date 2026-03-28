import React, { useState, useEffect } from 'react';
import { Plane, User, LogOut, Menu } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header({ onGoHome, onNavigate, onToggleSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth() || {};

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        {/* Left side: Menu + Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleSidebar}
            className={`p-2 -ml-2 rounded-xl transition-colors duration-300 ${isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white/90 hover:bg-white/10'}`}
          >
            <Menu size={24} />
          </button>
          
          <button
            onClick={onGoHome}
            className="flex items-center gap-2.5"
            aria-label="Go home"
          >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            isScrolled ? 'bg-primary/10' : 'bg-white/15'
          }`}>
            <Plane
              size={22}
              className={`fill-current transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-lg font-extrabold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Aviatop
            </span>
            <span className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-teal' : 'text-white/70'
            }`}>
              powered by Skyscanner
            </span>
          </div>
        </button>
        </div>

        {/* Sign In / User Profile */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className={`text-sm font-semibold hidden sm:block ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
              Hello, {user.email.split('@')[0]}
            </span>
            <button 
              onClick={logout}
              className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                isScrolled
                  ? 'text-red-600 hover:bg-red-50'
                  : 'text-white hover:bg-white/15'
            }`}>
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={() => onNavigate && onNavigate('/login')}
            className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
            isScrolled
              ? 'text-primary hover:bg-primary/8'
              : 'text-white hover:bg-white/15'
          }`}>
            <User size={18} />
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
