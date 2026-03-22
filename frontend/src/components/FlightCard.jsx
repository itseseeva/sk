import React from 'react';
import { Plane, ChevronRight } from 'lucide-react';

export default function FlightCard({ flight }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow p-4 mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      {/* Airline Info */}
      <div className="flex items-center gap-4 w-full md:w-1/4 pb-4 md:pb-0 border-b md:border-b-0">
        <img src={flight.logo} alt={flight.airline} className="w-10 h-10 rounded-md object-cover" />
        <span className="font-semibold text-gray-700">{flight.airline}</span>
      </div>

      {/* Flight Details */}
      <div className="flex flex-1 items-center justify-between w-full px-0 md:px-8">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-gray-900">{flight.departure.time}</p>
          <p className="text-sm text-gray-500">{flight.departure.city}</p>
        </div>

        <div className="flex flex-col items-center flex-1 px-4">
          <p className="text-xs text-gray-500 mb-1">{flight.duration}</p>
          <div className="w-full flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <Plane size={16} className="text-primary mx-2" />
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <p className={`text-xs mt-1 font-medium ${flight.stops === 'Direct' ? 'text-green-600' : 'text-gray-500'}`}>
            {flight.stops}
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xl font-bold text-gray-900">{flight.arrival.time}</p>
          <p className="text-sm text-gray-500">{flight.arrival.city}</p>
        </div>
      </div>

      {/* Price and Action */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-1/4 pt-4 md:pt-0 border-t md:border-t-0 pl-0 md:pl-6 md:border-l">
        <div className="text-left md:text-right mb-0 md:mb-3">
          <p className="text-2xl font-extrabold text-gray-900">${flight.price}</p>
          <p className="text-xs text-gray-500">Total price</p>
        </div>
        <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-1">
          Select <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
