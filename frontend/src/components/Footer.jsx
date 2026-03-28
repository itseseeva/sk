import React from 'react';
import { Star, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Trust */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="text-2xl font-black tracking-tight text-white block">Aviatop</span>
              <p className="text-sm font-medium text-slate-400 mt-1">powered by Skyscanner</p>
            </div>
          </div>

          {/* Corporate Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">Company</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onNavigate('/about')} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">About Us</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Contact</button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">Legal</h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onNavigate('/privacy')} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Privacy Policy</button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms')} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium">Terms of Service</button>
              </li>
              <li>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                  <ShieldCheck size={16} className="text-green-500" />
                  <span>Secure Partners</span>
                </div>
              </li>
            </ul>
          </div>

           {/* Contact Info */}
           <div className="space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">Headquarters</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  "OLIMP AIR" LLC<br/>
                  Do‘stlik MFY, Shukrona ko'chasi<br/>
                  17-uy, 10-xonadon<br/>
                  Termiz, Uzbekistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-slate-500 shrink-0" />
                <a href="mailto:support@olimpair.com" className="text-slate-400 hover:text-white transition-colors text-sm">support@olimpair.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {currentYear} "OLIMP AIR" LLC. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            ИНН: 312 727 076 | Flight search engine powered by Skyscanner.
          </p>
        </div>
      </div>
    </footer>
  );
}
