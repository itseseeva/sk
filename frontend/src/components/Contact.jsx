import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a question about your flight search? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4 mb-8">Corporate Headquarters</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Office Address</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    "OLIMP AIR" LLC<br/>
                    Do‘stlik MFY, Shukrona ko'chasi, 17-uy, 10-xonadon<br/>
                    Termiz, Surxandaryo Viloyati<br/>
                    Uzbekistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email Address</h3>
                  <a href="mailto:support@olimpair.com" className="text-primary font-medium hover:underline">
                    support@olimpair.com
                  </a>
                  <p className="text-slate-500 text-sm mt-2">Expect a reply within 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-slate-100 rounded-2xl p-6 border border-slate-200">
               <h4 className="font-bold text-slate-900 mb-2">Notice on Bookings</h4>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Because AviaSearch is a Skyscanner affiliate search engine, we do not directly process payments or issue tickets. If you have an inquiry regarding a specific booking, please contact the airline or agency you purchased the ticket from.
               </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <MessageSquare size={24} className="text-primary" />
              Send a Message
            </h2>

            {sent ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-[300px] border border-green-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700">Thank you for reaching out. Our support team will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea required rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/95 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2">
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
