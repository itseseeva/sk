import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Features from './components/Features'
import Footer from './components/Footer'
import ArticleView from './components/ArticleView'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Purchases from './components/Purchases'
import Cart from './components/Cart'
import { AuthProvider } from './context/AuthContext'
import { ImageProvider } from './context/ImageContext'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle browser back/forward buttons
  React.useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleGoHome = () => navigate('/');
  const handleOpenArticle = (id) => navigate(`/${id}-post`);

  let currentView = 'home';
  let activeArticleId = null;

  const decodedPath = decodeURIComponent(currentPath).toLowerCase();
  
  if (decodedPath === '/login') {
    currentView = 'login';
  } else if (decodedPath === '/register') {
    currentView = 'register';
  } else if (decodedPath === '/profile') {
    currentView = 'profile';
  } else if (decodedPath === '/purchases') {
    currentView = 'purchases';
  } else if (decodedPath === '/cart') {
    currentView = 'cart';
  } else if (decodedPath === '/about') {
    currentView = 'about';
  } else if (decodedPath === '/contact') {
    currentView = 'contact';
  } else if (decodedPath === '/privacy') {
    currentView = 'privacy';
  } else if (decodedPath === '/terms') {
    currentView = 'terms';
  } else if (decodedPath.match(/^\/([a-z_0-9-]+)-post\/?$/)) {
    currentView = 'article';
    activeArticleId = decodedPath.match(/^\/([a-z_0-9-]+)-post\/?$/)[1];
  }

  return (
    <AuthProvider>
      <ImageProvider>
        <div className="min-h-screen bg-background overflow-x-hidden">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onNavigate={navigate} />
        <Header onGoHome={handleGoHome} onNavigate={navigate} onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main>
          {currentView === 'login' ? (
            <Login onNavigate={navigate} />
          ) : currentView === 'register' ? (
            <Register onNavigate={navigate} />
          ) : currentView === 'profile' ? (
            <>
              <Profile onNavigate={navigate} />
              <Footer onNavigate={navigate} />
            </>
          ) : currentView === 'purchases' ? (
            <>
              <Purchases onNavigate={navigate} />
              <Footer onNavigate={navigate} />
            </>
          ) : currentView === 'cart' ? (
            <>
              <Cart onNavigate={navigate} />
              <Footer onNavigate={navigate} />
            </>
          ) : currentView === 'about' ? (
            <>
              <About />
              <Footer onNavigate={navigate} />
            </>
          ) : currentView === 'contact' ? (
            <>
              <Contact />
              <Footer onNavigate={navigate} />
            </>
          ) : currentView === 'privacy' ? (
            <>
              <PrivacyPolicy />
              <Footer onNavigate={navigate} />
            </>
          ) : currentView === 'terms' ? (
            <>
              <TermsOfService />
              <Footer onNavigate={navigate} />
            </>
          ) : currentView === 'home' ? (
            <>
              <Hero />
              <Destinations onOpenArticle={handleOpenArticle} />
              <Features />
              <Footer onNavigate={navigate} />
            </>
          ) : (
            <>
              <ArticleView articleId={activeArticleId} onBack={handleGoHome} />
              <Footer onNavigate={navigate} />
            </>
          )}
        </main>
      </div>
      </ImageProvider>
    </AuthProvider>
  )
}

export default App
