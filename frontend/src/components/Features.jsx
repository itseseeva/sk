import React from 'react';
import { Tag, Globe2, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Tag,
    color: 'bg-blue-50 text-primary',
    title: 'Best Prices',
    desc: 'We compare real-time prices from thousands of airlines and travel partners to find you the best deal.',
  },
  {
    icon: Globe2,
    color: 'bg-teal-50 text-teal',
    title: 'Global Search',
    desc: 'Access flights worldwide — over 1,200 partners across 190+ countries at your fingertips.',
  },
  {
    icon: Clock,
    color: 'bg-purple-50 text-purple-600',
    title: '24/7 Support',
    desc: 'Our customer service team is always available — in your language, around the clock.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-green-50 text-green-600',
    title: 'No Hidden Fees',
    desc: 'No hidden charges, no surprises. The price you see is the price you pay.',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our advantages</p>
          <h2 className="section-title mb-4">Why choose us?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            We don't just search — we find the best, saving your time and money.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="card p-8 flex flex-col items-center text-center group cursor-default"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
