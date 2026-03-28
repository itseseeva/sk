import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Package, ExternalLink } from 'lucide-react';

export default function Profile({ onNavigate }) {
  const { user, logout, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-24"><div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin rounded-full"></div></div>;
  }

  if (!user && !loading) {
    setTimeout(() => onNavigate('/login'), 0);
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-8">My Account</h1>
        
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center shrink-0">
            <User size={40} className="text-primary" />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Hello, {user.email.split('@')[0]}</h2>
            <p className="text-slate-500 font-medium mb-6">{user.email}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <button 
                onClick={() => onNavigate('/purchases')}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors text-slate-700 font-bold text-sm"
              >
                <Package size={18} />
                My Purchases
              </button>
              
              <button 
                onClick={logout}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 transition-colors text-red-600 font-bold text-sm"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl text-white">
          <h3 className="text-xl font-bold mb-4">Need help with a booking?</h3>
          <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl">
            Aviatop is a flight search engine powered by Skyscanner. If you've already booked a flight, your payment and ticket are managed directly by the airline or travel agency you selected.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
            Contact Support <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
