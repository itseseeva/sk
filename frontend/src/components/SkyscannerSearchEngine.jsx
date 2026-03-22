import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import SearchResults from './SearchResults';

export default function SkyscannerSearchEngine({ isLive = false }) {
  const [isLoading, setIsLoading] = useState(!isLive);

  useEffect(() => {
    if (!isLive) {
      // Simulate network request for mock data (The "Now" State)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Real Widget Integration Logic (The "Future" State)
      
      // INSERT REAL SKYSCANNER SCRIPT HERE
      const script = document.createElement('script');
      script.src = "https://example-partner.skyscanner.net/loader.js"; // Replace with real URL
      script.async = true;
      // Add any specific data attributes required by Skyscanner Partner API
      script.setAttribute('data-skyscanner-widget', 'FlightSearch');
      
      document.body.appendChild(script);

      return () => {
        // Cleanup script when component unmounts to prevent memory leaks
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isLive]);

  // Render Real Widget Container
  if (isLive) {
    return (
      <div className="w-full min-h-[500px] bg-background pt-24 pb-16 flex justify-center">
        {/* The real widget will mount here. Stable height prevents page jumping */}
        <div id="skyscanner-widget-container" className="w-full max-w-7xl mx-auto px-4"></div>
      </div>
    );
  }

  // Render Mock Loading State
  if (isLoading) {
    return (
      <div className="bg-background min-h-[70vh] pt-32 pb-16 flex flex-col items-center justify-center">
        <Loader2 className="w-14 h-14 text-primary animate-spin mb-6" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Finding the best flights...</h2>
        <p className="text-gray-500 font-medium">Searching hundreds of airlines and travel sites</p>
      </div>
    );
  }

  // Render Mock Search Results
  return <SearchResults />;
}
