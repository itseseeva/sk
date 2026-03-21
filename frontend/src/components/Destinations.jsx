import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  { city: 'Paris', country: 'France', price: 150, image: 'https://images.unsplash.com/photo-1502602898657-3e907626154b?auto=format&fit=crop&q=80&w=800' },
  { city: 'Tokyo', country: 'Japan', price: 650, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800' },
  { city: 'New York', country: 'USA', price: 420, image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800' },
  { city: 'London', country: 'UK', price: 210, image: 'https://images.unsplash.com/photo-1513635269975-5969336cd401?auto=format&fit=crop&q=80&w=800' },
  { city: 'Rome', country: 'Italy', price: 180, image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800' },
  { city: 'Dubai', country: 'UAE', price: 340, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800' },
];

export default function Destinations() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Popular right now</h2>
          <p className="text-gray-600">Other travellers are loving these destinations. Search flights, hotels and car hire and join them on the adventure.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((dest, idx) => (
          <DestinationCard key={idx} {...dest} />
        ))}
      </div>
    </section>
  );
}
