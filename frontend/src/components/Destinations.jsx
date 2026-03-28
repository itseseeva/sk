import React from 'react';
import { Flame } from 'lucide-react';

const destinations = [
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    price: 280,
    tag: 'Hot deal',
    image: '/articles/dubai1.jpg',
  },
  {
    id: 'bangkok',
    city: 'Bangkok',
    country: 'Thailand',
    price: 420,
    tag: 'Popular',
    image: '/articles/bangkok1.jpg',
  },
  {
    id: 'barcelona',
    city: 'Barcelona',
    country: 'Spain',
    price: 95,
    tag: null,
    image: '/articles/barri.jpg',
  },
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    price: 590,
    tag: null,
    image: '/articles/shibuya1.jpg',
  },
  {
    id: 'rome',
    city: 'Rome',
    country: 'Italy',
    price: 79,
    tag: 'Hot deal',
    image: '/articles/colosseum2.jpg',
  },
  {
    id: 'new_york',
    city: 'New York',
    country: 'USA',
    price: 340,
    tag: null,
    image: '/articles/cabs2.jpg',
  },
];

function formatPrice(price) {
  return '£' + price.toLocaleString('en-GB');
}

export default function Destinations({ onOpenArticle }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Destinations</p>
            <h2 className="section-title mb-2">Trending right now</h2>
            <p className="section-subtitle max-w-lg">
              Thousands of travellers are booking these destinations right now.
            </p>
          </div>
          <a
            href="#search"
            className="btn-outline shrink-0 self-start md:self-auto"
          >
                        All destinations
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => (
            <a
              key={idx}
              href={`/${dest.id}-post`}
              onClick={(e) => {
                e.preventDefault();
                if (onOpenArticle) onOpenArticle(dest.id);
              }}
              className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1"
            >
              {/* Фото */}
              <img
                src={dest.image}
                alt={`${dest.city}, ${dest.country}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Градиент снизу */}
              <div className="absolute inset-0 bg-card-gradient" />

              {/* Бейдж */}
              {dest.tag && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  <Flame size={12} />
                  {dest.tag}
                </div>
              )}

              {/* Контент */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <p className="text-white text-xl font-extrabold leading-tight">{dest.city}</p>
                  <p className="text-white/70 text-sm font-medium">{dest.country}</p>
                </div>
                <div className="text-right">
                      <p className="text-white/60 text-xs mb-0.5">from</p>
                  <p className="text-white text-lg font-extrabold">{formatPrice(dest.price)}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
