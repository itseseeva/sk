import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

/* 
  ВНИМАНИЕ: 
  Этот компонент представляет собой визуальную оболочку для формы поиска ("заглушку").
  В будущем здесь можно будет разместить скрипт или <iframe> виджета партнера Skyscanner.
  Например:
  <div id="skyscanner-widget-container"></div>
  <script src="https://example-skyscanner-partner-script.js"></script>
*/

export default function SearchBar() {
  const [tripType, setTripType] = useState('return');

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-4 md:p-6 mt-6 md:mt-8">
      {/* Search Type Selector */}
      <div className="flex gap-4 mb-4 border-b pb-4">
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
          <input 
            type="radio" 
            name="tripType" 
            value="return" 
            checked={tripType === 'return'}
            onChange={() => setTripType('return')}
            className="w-4 h-4 text-primary focus:ring-primary"
          />
          Return
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
          <input 
            type="radio" 
            name="tripType" 
            value="oneWay" 
            checked={tripType === 'oneWay'}
            onChange={() => setTripType('oneWay')}
            className="w-4 h-4 text-primary focus:ring-primary"
          />
          One way
        </label>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Origin */}
        <div className="relative col-span-1 lg:col-span-1 border rounded-lg hover:border-sky-500 focus-within:border-sky-500 transition-colors">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPin size={20} className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="From" 
            className="w-full h-full py-3 pl-10 pr-4 rounded-lg focus:outline-none text-gray-900 placeholder:text-gray-500 font-medium bg-transparent"
          />
        </div>

        {/* Destination */}
        <div className="relative col-span-1 lg:col-span-1 border rounded-lg hover:border-sky-500 focus-within:border-sky-500 transition-colors">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPin size={20} className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="To" 
            className="w-full h-full py-3 pl-10 pr-4 rounded-lg focus:outline-none text-gray-900 placeholder:text-gray-500 font-medium bg-transparent"
          />
        </div>

        {/* Dates */}
        <div className="relative col-span-1 lg:col-span-1 border rounded-lg hover:border-sky-500 focus-within:border-sky-500 transition-colors flex items-center">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Calendar size={20} className="text-gray-400" />
          </div>
          <input 
            type="text" 
            placeholder="Depart" 
            className="w-1/2 h-full py-3 pl-10 pr-2 focus:outline-none text-gray-900 font-medium bg-transparent border-r"
          />
          <input 
            type="text" 
            placeholder="Return" 
            disabled={tripType === 'oneWay'}
            className="w-1/2 h-full py-3 px-3 rounded-r-lg focus:outline-none text-gray-900 font-medium bg-transparent disabled:opacity-50"
          />
        </div>

        {/* Travelers */}
        <div className="relative col-span-1 lg:col-span-1 border rounded-lg hover:border-sky-500 focus-within:border-sky-500 transition-colors">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Users size={20} className="text-gray-400" />
          </div>
          <select className="w-full h-full py-3 pl-10 pr-4 rounded-lg focus:outline-none text-gray-900 font-medium bg-transparent appearance-none cursor-pointer">
            <option>1 Adult, Economy</option>
            <option>2 Adults, Economy</option>
            <option>1 Adult, Business</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="col-span-1 lg:col-span-1">
          <button className="w-full h-full min-h-[50px] bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-lg">
            <span>Search Flights</span>
            <Search size={20} />
          </button>
        </div>
      </div>
      
    </div>
  );
}
