import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
