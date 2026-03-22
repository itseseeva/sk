import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Features from './components/Features'
import Footer from './components/Footer'
import SkyscannerSearchEngine from './components/SkyscannerSearchEngine'

function App() {
  const [view, setView] = useState('home');

  const handleSearch = () => {
    window.scrollTo(0, 0);
    setView('results');
  };

  const handleGoHome = () => {
    window.scrollTo(0, 0);
    setView('home');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onGoHome={handleGoHome} />
      <main>
        {view === 'home' ? (
          <>
            <Hero onSearch={handleSearch} />
            <Destinations />
            <Features />
          </>
        ) : (
          <SkyscannerSearchEngine isLive={false} />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
