import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 border-b border-slate-700 pb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <Plane size={24} className="fill-current text-sky-400" />
            <span className="text-xl font-bold tracking-tight">GlobalFlight</span>
          </div>
          <p className="text-sm text-slate-400">
            Making travel simpler, finding the best flights and saving you money since 2026.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Partners</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Work With Us</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Airlines</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Travel Agents</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Affiliates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-sky-400 transition-colors">Accessibility</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © 2026 Global Flight Search. All rights reserved. Widget powered by Skyscanner.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
