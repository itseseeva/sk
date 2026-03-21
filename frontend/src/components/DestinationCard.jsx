import React from 'react';

export default function DestinationCard({ city, country, price, image }) {
  return (
    <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={city}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{city}</h3>
          <p className="text-sm opacity-90">{country}</p>
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="text-gray-500 text-sm">Direct flights from</div>
        <div className="text-lg font-bold text-gray-900">${price}</div>
      </div>
    </div>
  );
}
