import React from 'react';
import { ShoppingCart, Compass } from 'lucide-react';

export default function Cart({ onNavigate }) {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-16">Your Cart</h1>
        
        <div className="bg-white rounded-3xl p-12 sm:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-2xl mx-auto flex flex-col items-center">
          <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mb-6">
            <ShoppingCart size={40} className="text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Because Aviatop is a metasearch engine, flight tickets are purchased directly on the airline's website, not stored in an Aviatop cart. 
          </p>
          <button 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 py-3 px-6 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all hover:-translate-y-0.5"
          >
            <Compass size={18} />
            Explore Destinations
          </button>
        </div>
      </div>
    </div>
  );
}
