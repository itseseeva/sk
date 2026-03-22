import React from 'react';
import SearchBar from './SearchBar';

export default function Hero({ onSearch }) {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-4 bg-sky-900 overflow-hidden">
      {/* Background Image Setup (Placeholder gradient used here to ensure load) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-sky-700 opacity-95"></div>
      
      {/* Decorative Blur */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-md mb-4">
          Find Your Next Adventure
        </h1>
        <p className="text-lg md:text-xl text-sky-100 max-w-2xl font-medium drop-shadow-sm mb-2">
          Compare cheap flights, hotels, and car hire to book the perfect trip.
        </p>

        <SearchBar onSearch={onSearch} />
      </div>
    </section>
  );
}
