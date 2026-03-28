import React from 'react';
import { X, User, ShoppingBag, ShoppingCart, Info, Phone, FileText, Shield, Package } from 'lucide-react';

export default function Sidebar({ isOpen, onClose, onNavigate }) {
  const links = [
    { name: 'My Account', icon: User, path: '/profile' },
    { name: 'My Purchases', icon: Package, path: '/purchases' },
    { name: 'Cart', icon: ShoppingCart, path: '/cart' },
  ];

  const corporateLinks = [
    { name: 'About Us', icon: Info, path: '/about' },
    { name: 'Contact', icon: Phone, path: '/contact' },
    { name: 'Terms of Service', icon: FileText, path: '/terms' },
    { name: 'Privacy Policy', icon: Shield, path: '/privacy' },
  ];

  const handleLinkClick = (path) => {
    if (path !== '#') {
      onNavigate(path);
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar Panel */}
      <div 
        className={`fixed inset-y-0 left-0 w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <span className="text-xl font-black text-slate-900 tracking-tight">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <div className="space-y-1">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                className="w-full flex items-center gap-3 px-4 py-3 text-slate-700 font-semibold rounded-xl hover:bg-primary/5 hover:text-primary transition-all text-left"
              >
                <link.icon size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-8 mb-4 px-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">OLIMP AIR LLC</h3>
          </div>
          
          <div className="space-y-1">
            {corporateLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.path)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 font-medium rounded-xl hover:bg-slate-50 transition-all text-left"
              >
                <link.icon size={16} className="text-slate-400" />
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <div className="flex items-start gap-3 text-sm">
            <Shield size={24} className="text-green-600 shrink-0" />
            <p className="text-slate-600 text-xs font-medium leading-relaxed">
              Your data is encrypted. Secure payments through our trusted travel partners.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
