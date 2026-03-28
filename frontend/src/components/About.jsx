import React from 'react';
import { ShieldCheck, Globe, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
            About Aviatop
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Aviatop is the official digital travel interface managed by <strong>"OLIMP AIR" LLC</strong>. We are a registered Limited Liability Company established on January 16, 2026, dedicated to providing transparent metasearch flight aggregation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Global Reach, Local Support</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
               Aviatop operates across continents to ensure you have access to the cheapest flights worldwide. 
               Powered by the robust <strong>Skyscanner API</strong>, our flight search engine cross-references millions of routes in milliseconds.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-green-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={28} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Security & Reliability</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              As an official affiliate partner, we provide exactly the same trusted inventory as top-tier airlines. 
              <strong>"OLIMP AIR" LLC</strong> focuses solely on search efficiency; you always complete your transaction securely on the airline or agency's official website. We never process payments directly or store credit card data.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Official Corporate Registry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Legal Entity Name</p>
                  <p className="font-medium text-slate-900">"OLIMP AIR" LLC (Limited Liability Company)</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Registration Date</p>
                  <p className="font-medium text-slate-900">16.01.2026 (Registry #3093595)</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Taxpayer ID (STIR)</p>
                  <p className="font-medium text-slate-900">312 727 076</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Registered Address</p>
                  <p className="font-medium text-slate-900">Do‘stlik MFY, Shukrona ko'chasi, 17-uy, 10-xonadon<br/>Termiz, Surxandaryo Viloyati, Uzbekistan</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Corporate Bank</p>
                  <p className="font-medium text-slate-900">Joint-Stock Commercial People's Bank of the Republic of Uzbekistan (АКБ Народный банк)</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Branch</p>
                  <p className="font-medium text-slate-900">191200, Termiz, O'zbekiston MFY, Madaniyat k., 2</p>
                </div>
              </div>

            </div>
        </div>

      </div>
    </div>
  );
}
