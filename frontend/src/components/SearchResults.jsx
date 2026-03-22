import React from 'react';
import { Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import FlightCard from './FlightCard';
import { mockFlights } from '../mockFlights';

export default function SearchResults() {
  return (
    <div className="bg-background min-h-screen pt-20 pb-16">
      {/* Search Summary Bar */}
      <div className="bg-sky-900 text-white py-4 px-4 shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <h2 className="text-lg font-bold">New York (JFK) ✈ London (LHR)</h2>
            <div className="hidden md:block h-1 w-1 bg-sky-400 rounded-full"></div>
            <p className="text-sky-100 text-sm">Oct 15 - Oct 25</p>
            <div className="hidden md:block h-1 w-1 bg-sky-400 rounded-full"></div>
            <p className="text-sky-100 text-sm">1 Adult, Economy</p>
          </div>
          <button className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
            <Filter size={16} /> Edit Search
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 hidden md:block">
          <div className="bg-white rounded-xl shadow-sm p-5 sticky top-40">
            <div className="flex items-center gap-2 font-bold text-lg border-b pb-4 mb-4">
              <SlidersHorizontal size={20} className="text-primary" />
              Filters
            </div>

            {/* Stops Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Stops</h3>
              <label className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded" defaultChecked />
                <span>Direct</span>
              </label>
              <label className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded" defaultChecked />
                <span>1 Stop</span>
              </label>
              <label className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded" />
                <span>2+ Stops</span>
              </label>
            </div>

            {/* Airlines Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Airlines</h3>
              <label className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded" defaultChecked />
                <span>SkyAir</span>
              </label>
              <label className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded" defaultChecked />
                <span>Global Jet</span>
              </label>
              <label className="flex items-center gap-3 mb-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-primary rounded" defaultChecked />
                <span>Oceanic Air</span>
              </label>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-3">Price</h3>
              <input type="range" className="w-full accent-primary" min="200" max="1000" defaultValue="1000" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$200</span>
                <span>$1000+</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Flight List */}
        <main className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 font-medium">Showing {mockFlights.length} results</p>
            <div className="flex items-center gap-2 relative">
              <span className="text-sm text-gray-500">Sort by:</span>
              <button className="flex items-center gap-1 font-semibold text-gray-900 hover:text-primary transition-colors">
                Recommended <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {mockFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
