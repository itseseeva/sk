import React, { useState } from 'react';
import { PlaneTakeoff, PlaneLanding, Calendar, ArrowRightLeft, Users, ChevronDown, Check, Search } from 'lucide-react';

export default function SkyscannerWidget() {
  const [tripType, setTripType] = useState('return');
  const [directOnly, setDirectOnly] = useState(false);
  const [origin, setOrigin] = useState('London (LHR)');
  const [destination, setDestination] = useState('Dubai (DXB)');
  const [depart, setDepart] = useState('15 Apr 2026');
  const [returnD, setReturnD] = useState('22 Apr 2026');
  const [showPassengers, setShowPassengers] = useState(false);
  const [passengers, setPassengers] = useState(1);
  const [activeCalendar, setActiveCalendar] = useState(null); // 'depart' | 'return' | null
  const [calendarDate, setCalendarDate] = useState(new Date(2026, 3, 1)); // April 2026 by default

  // Focus states to give inputs that premium Skyscanner blue outline feel
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching flights from ${origin} to ${destination} on ${depart}...`);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const handleDateSelect = (day) => {
    const formatted = `${day} ${monthNames[calendarDate.getMonth()].substring(0,3)} ${calendarDate.getFullYear()}`;
    if (activeCalendar === 'depart') {
       setDepart(formatted);
       if (tripType === 'return') setActiveCalendar('return');
       else setActiveCalendar(null);
    } else {
       setReturnD(formatted);
       setActiveCalendar(null);
    }
  };

  const nextMonth = () => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1));
  const prevMonth = () => setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1));

  // Dynamic Calendar generation
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1; // Adapt Sunday-first to Monday-first (0-6)
  
  const calendarDays = Array.from({length: daysInMonth}, (_, i) => i + 1);
  const emptyDays = Array.from({length: firstDay}, (_, i) => i);

  return (
    <div className="w-full relative z-20">
      
      {/* Top Controls Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 text-white">
        
        {/* Trip Type Selector */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer group" onClick={() => setTripType('return')}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${tripType === 'return' ? 'border-sky-300 bg-sky-300' : 'border-white/70 group-hover:border-white'}`}>
              {tripType === 'return' && <div className="w-2 h-2 bg-slate-900 rounded-full" />}
            </div>
            <span className={`font-medium transition-colors ${tripType === 'return' ? 'text-white font-bold' : 'text-white/80 group-hover:text-white'}`}>Return</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group" onClick={() => setTripType('one-way')}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${tripType === 'one-way' ? 'border-sky-300 bg-sky-300' : 'border-white/70 group-hover:border-white'}`}>
              {tripType === 'one-way' && <div className="w-2 h-2 bg-slate-900 rounded-full" />}
            </div>
            <span className={`font-medium transition-colors ${tripType === 'one-way' ? 'text-white font-bold' : 'text-white/80 group-hover:text-white'}`}>One way</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group hidden sm:flex" onClick={() => setTripType('multi')}>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${tripType === 'multi' ? 'border-sky-300 bg-sky-300' : 'border-white/70 group-hover:border-white'}`}>
              {tripType === 'multi' && <div className="w-2 h-2 bg-slate-900 rounded-full" />}
            </div>
            <span className={`font-medium transition-colors ${tripType === 'multi' ? 'text-white font-bold' : 'text-white/80 group-hover:text-white'}`}>Multi-city</span>
          </label>
        </div>

        {/* Passengers & Direct Flights */}
        <div className="flex items-center gap-6 relative">
          <button 
             type="button" 
             onClick={() => setShowPassengers(!showPassengers)}
             className="flex items-center gap-2 text-white/90 font-medium hover:text-white transition-colors focus:outline-none"
          >
             <Users size={18} className="text-sky-300" />
             <span>{passengers} adult{passengers > 1 ? 's' : ''}, Economy</span>
             <ChevronDown size={16} className={`transition-transform duration-300 ${showPassengers ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Passengers Dropdown */}
          {showPassengers && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 p-4 w-64 z-50 text-slate-800 animate-fade-in-up">
               <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-sm">Adults (16+)</span>
                  <div className="flex items-center gap-3">
                     <button type="button" onClick={() => setPassengers(Math.max(1, passengers - 1))} className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-500 font-bold">-</button>
                     <span className="w-4 text-center font-bold">{passengers}</span>
                     <button type="button" onClick={() => setPassengers(passengers + 1)} className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-sky-500 font-bold">+</button>
                  </div>
               </div>
               <div className="h-px bg-slate-100 my-3" />
               <div className="text-xs text-slate-500 mb-2 font-bold uppercase tracking-wider">Cabin Class</div>
               <div className="flex items-center gap-2 mb-4">
                 <input type="radio" checked readOnly className="text-primary focus:ring-primary" />
                 <span className="text-sm font-medium">Economy</span>
               </div>
               <button type="button" onClick={() => setShowPassengers(false)} className="w-full py-2 bg-sky-50 text-primary font-bold rounded-lg text-sm hover:bg-sky-100 transition-colors">Done</button>
            </div>
          )}

          <label className="flex items-center gap-2 cursor-pointer group">
            <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${directOnly ? 'bg-sky-300' : 'border-2 border-white/70 group-hover:border-white'}`}>
               {directOnly && <Check size={14} className="text-slate-900 stroke-[3]" />}
            </div>
            <span className="font-medium text-white/90 group-hover:text-white transition-colors">Direct flights only</span>
            <input type="checkbox" className="hidden" checked={directOnly} onChange={(e) => setDirectOnly(e.target.checked)} />
          </label>
        </div>

      </div>

      {/* Main Search Bar Card */}
      <form onSubmit={handleSearch} className="bg-white rounded-2xl md:rounded-full p-2 shadow-2xl shadow-slate-900/40 relative flex flex-col md:flex-row md:items-center">
        
        {/* Origin Input */}
        <div 
          className={`flex-1 flex items-center gap-3 px-6 py-4 md:py-3 transition-colors rounded-xl md:rounded-l-full md:rounded-r-none ${focusedInput === 'origin' ? 'bg-sky-50 outline outline-2 outline-primary outline-offset-[-2px]' : 'hover:bg-slate-50'}`}
          onClick={() => document.getElementById('origin').focus()}
        >
          <PlaneTakeoff size={24} className={focusedInput === 'origin' ? 'text-primary' : 'text-slate-400'} />
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">From</label>
            <input 
              id="origin"
              type="text" 
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Country, city or airport" 
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-bold placeholder-slate-400 text-base md:text-lg truncate outline-none"
              onFocus={() => setFocusedInput('origin')}
              onBlur={() => setFocusedInput(null)}
              autoComplete="off"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="absolute left-1/2 top-1/2 md:top-1/2 -mt-10 md:mt-0 -ml-5 md:static md:-mx-4 z-10 hidden md:flex items-center justify-center">
          <button type="button" onClick={handleSwap} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md text-slate-400 hover:text-primary hover:border-primary transition-colors focus:outline-none">
            <ArrowRightLeft size={16} />
          </button>
        </div>
        {/* Divider for mobile */}
        <div className="h-px w-full bg-slate-200 md:hidden" />

        {/* Destination Input */}
        <div 
           className={`flex-1 flex items-center gap-3 px-6 py-4 md:py-3 transition-colors rounded-xl md:rounded-none ${focusedInput === 'destination' ? 'bg-sky-50 outline outline-2 outline-primary outline-offset-[-2px]' : 'hover:bg-slate-50'}`}
           onClick={() => document.getElementById('destination').focus()}
        >
          <PlaneLanding size={24} className={focusedInput === 'destination' ? 'text-primary' : 'text-slate-400'} />
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">To</label>
            <input 
              id="destination"
              type="text" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Country, city or airport" 
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-bold placeholder-slate-400 text-base md:text-lg truncate outline-none"
              onFocus={() => setFocusedInput('destination')}
              onBlur={() => setFocusedInput(null)}
              autoComplete="off"
            />
          </div>
        </div>
        
        {/* Vertical Divider for desktop */}
        <div className="w-px h-12 bg-slate-200 hidden md:block" />
        {/* Horizontal Divider for mobile */}
        <div className="h-px w-full bg-slate-200 md:hidden" />

        {/* Date Controls Container */}
        <div className="flex flex-1 md:max-w-md divide-x divide-slate-200 border-b border-slate-200 md:border-b-0 relative">
          
          {/* Calendar Dropdown */}
          {activeCalendar && (
            <div className="absolute top-full left-0 md:-left-12 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-[340px] z-50 animate-fade-in-up">
              <div className="flex items-center justify-between mb-4">
                 <button type="button" onClick={prevMonth} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 font-bold">&lt;</button>
                 <span className="font-black text-slate-800 tracking-wide">{monthNames[month]} {year}</span>
                 <button type="button" onClick={nextMonth} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 font-bold">&gt;</button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                 <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
              </div>
              <div className="grid grid-cols-7 gap-1">
                 {emptyDays.map(i => <div key={`empty-${i}`} className="aspect-square"></div>)}
                 {calendarDays.map(day => {
                    const currentFormatted = `${day} ${monthNames[month].substring(0,3)} ${year}`;
                    const isSelected = 
                       (activeCalendar === 'depart' && depart === currentFormatted) ||
                       (activeCalendar === 'return' && returnD === currentFormatted);
                    
                    return (
                      <button 
                        key={day} 
                        type="button"
                        onClick={() => handleDateSelect(day)}
                        className={`aspect-square rounded-full flex items-center justify-center text-sm font-bold transition-all
                          ${isSelected ? 'bg-primary text-white shadow-md shadow-primary/30' : 'text-slate-700 hover:bg-slate-100'}`}
                      >
                        {day}
                      </button>
                    )
                 })}
              </div>
              <div className="mt-4 flex gap-2">
                 <button type="button" onClick={() => setActiveCalendar(null)} className="flex-1 py-2 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors">Cancel</button>
              </div>
            </div>
          )}

          {/* Depart Date */}
          <div 
             className={`flex-1 flex items-center gap-3 px-6 py-4 md:py-3 transition-colors rounded-none ${focusedInput === 'depart' || activeCalendar === 'depart' ? 'bg-sky-50 outline outline-2 outline-primary outline-offset-[-2px] z-10' : 'hover:bg-slate-50'}`}
             onClick={() => { document.getElementById('depart').focus(); setActiveCalendar('depart'); setShowPassengers(false); }}
          >
            <Calendar size={20} className={focusedInput === 'depart' || activeCalendar === 'depart' ? 'text-primary' : 'text-slate-400'} />
            <div className="flex-1 cursor-pointer">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 pointer-events-none">Depart</label>
              <input 
                id="depart"
                type="text" 
                value={depart}
                onChange={(e) => setDepart(e.target.value)}
                placeholder="Add date" 
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-bold placeholder-slate-400 text-base outline-none cursor-pointer"
                onFocus={() => { setFocusedInput('depart'); setActiveCalendar('depart'); setShowPassengers(false); }}
                onBlur={() => setFocusedInput(null)}
                readOnly
              />
            </div>
          </div>

          {/* Return Date */}
          <div 
             className={`flex-1 flex items-center gap-3 px-6 py-4 md:py-3 transition-colors ${tripType === 'one-way' ? 'opacity-50 pointer-events-none' : ''} ${focusedInput === 'returnD' || activeCalendar === 'return' ? 'bg-sky-50 outline outline-2 outline-primary outline-offset-[-2px] z-10' : 'hover:bg-slate-50'}`}
             onClick={() => { 
                if(tripType !== 'one-way') {
                   document.getElementById('returnD').focus();
                   setActiveCalendar('return');
                   setShowPassengers(false);
                }
             }}
          >
            <Calendar size={20} className={focusedInput === 'returnD' || activeCalendar === 'return' ? 'text-primary' : 'text-slate-400'} />
            <div className="flex-1 cursor-pointer">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5 pointer-events-none">Return</label>
              <input 
                id="returnD"
                type="text" 
                value={tripType === 'one-way' ? '' : returnD}
                onChange={(e) => setReturnD(e.target.value)}
                placeholder="Add date" 
                className="w-full bg-transparent border-none p-0 focus:ring-0 text-slate-900 font-bold placeholder-slate-400 text-base outline-none cursor-pointer"
                onFocus={() => { setFocusedInput('returnD'); setActiveCalendar('return'); setShowPassengers(false); }}
                onBlur={() => setFocusedInput(null)}
                readOnly={tripType !== 'one-way'}
                disabled={tripType === 'one-way'}
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="p-2 md:pl-4 mt-2 md:mt-0">
          <button 
             type="submit"
             className="w-full md:w-auto h-16 md:h-14 px-8 bg-[#00a698] hover:bg-[#009488] text-white rounded-xl md:rounded-full font-black text-xl md:text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 outline-none focus:ring-4 focus:ring-[#00a698]/30"
          >
             Search
             <Search className="w-6 h-6 stroke-[3]" />
          </button>
        </div>

      </form>
    </div>
  );
}
