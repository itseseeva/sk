import React from 'react';
import SkyscannerWidget from './SkyscannerWidget';
import { TrendingDown, Globe2, Shield } from 'lucide-react';

const stats = [
  { value: '1,200+', label: 'airlines' },
  { value: '100M+', label: 'flights in database' },
  { value: '190+', label: 'countries worldwide' },
];

export default function Hero() {
  return (
    <section
      id="search"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920')`,
        }}
      />

      {/* Градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a3a]/90 via-primary/75 to-teal/60" />

      {/* Декоративные пятна */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-teal/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* Контент */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-28 pb-16 flex flex-col items-center text-center">

        {/* Бейдж */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
          <TrendingDown size={16} className="text-teal-300" />
          <span className="text-white/90 text-sm font-semibold">Best prices powered by Skyscanner</span>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
          Find your{' '}
          <span className="bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
            dream flight
          </span>
          <br className="hidden sm:block" />
          {' '}at the best price
        </h1>

        {/* Подзаголовок */}
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mb-10 font-medium">
          We compare millions of offers from airlines and agencies —
          so you pay less.
        </p>

        {/* Виджет Skyscanner */}
        <div className="w-full max-w-5xl">
          <SkyscannerWidget />
        </div>

        {/* Статистика */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white text-2xl md:text-3xl font-extrabold">{s.value}</p>
              <p className="text-white/60 text-sm font-medium mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Доверительные значки */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-xs font-medium">
          <div className="flex items-center gap-1.5">
            <Shield size={14} />
            <span>Secure payment</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-1.5">
            <Globe2 size={14} />
            <span>Global flight search</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <span>No hidden fees</span>
        </div>
      </div>

      {/* Волна снизу */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f1f2f8"/>
        </svg>
      </div>
    </section>
  );
}
