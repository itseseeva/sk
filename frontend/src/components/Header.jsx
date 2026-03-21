import React from 'react';
import { Plane, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 flex items-center justify-between px-4 lg:px-8">
      {/* Logo Area */}
      <div className="flex items-center gap-2 text-primary cursor-pointer hover:opacity-90">
        <Plane size={28} className="fill-current" />
        <span className="text-xl font-bold tracking-tight">GlobalFlight</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
        <a href="#" className="hover:text-primary transition-colors text-primary border-b-2 border-primary pb-1 mt-1">Flights</a>
        <a href="#" className="hover:text-primary transition-colors pb-1 mt-1">Hotels</a>
        <a href="#" className="hover:text-primary transition-colors pb-1 mt-1">Car Hire</a>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:bg-sky-50 px-4 py-2 rounded-full transition-colors">
          <User size={20} />
          Sign In
        </button>
        {/* Mobile Menu */}
        <button className="md:hidden text-gray-600 hover:text-primary">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
