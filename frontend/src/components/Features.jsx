import React from 'react';
import { Tag, Globe2, Clock, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Tag className="w-10 h-10 text-primary mb-4" />,
      title: "Best Prices",
      desc: "We search and compare real-time prices from thousands of airlines and travel partners."
    },
    {
      icon: <Globe2 className="w-10 h-10 text-primary mb-4" />,
      title: "Global Network",
      desc: "Travel anywhere with connections to over 1,200 travel partners worldwide."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary mb-4" />,
      title: "24/7 Support",
      desc: "Our customer service team is here to help you around the clock, in your language."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
      title: "Book with Confidence",
      desc: "No hidden fees, no extra charges. Exactly what you see is what you pay."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Global Flight Search?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-sky-50 transition-colors">
              {f.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
