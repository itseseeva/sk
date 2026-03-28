import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Clock, Calendar, Heart, Share2, Info, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { articles } from '../data/articles';
import AdminEditableImage from './AdminEditableImage';

// Beautiful CSS-only fade-in animation
function FadeInBlock({ children, delay = 0 }) {
  return (
    <div 
      className="animate-fade-in-up opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
}

// Photo Slider Component
function FullWidthSlider({ images, caption, articleId, blockIdx }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || !Array.isArray(images) || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const isArray = Array.isArray(images);

  return (
    <figure className="my-16 w-[100vw] ml-[calc(50%-50vw)] animate-fade-in-up group flex flex-col items-center">
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-slate-900">
        {isArray ? images.map((img, i) => (
          <AdminEditableImage 
            key={i} 
            targetId={`${articleId}_content_${blockIdx}_${i}`}
            defaultSrc={img} 
            alt={caption} 
            className={`absolute inset-0 w-full h-full object-cover shadow-2xl transition-opacity duration-1000 ${i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
          />
        )) : (
          <AdminEditableImage targetId={`${articleId}_content_${blockIdx}`} defaultSrc={images} alt={caption} className="w-full h-full object-cover shadow-2xl" />
        )}
        
        {isArray && images.length > 1 && (
          <>
            <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/20">
              <ChevronLeft size={28} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 shadow-xl border border-white/20">
              <ChevronRight size={28} />
            </button>
            
            {/* Gradient Overlay for Caption and Dots */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

            <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
              {images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white w-8 shadow-[0_0_12px_rgba(255,255,255,0.9)]' : 'bg-white/40 hover:bg-white/80'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {caption && (
        <div className="absolute bottom-12 left-0 right-0 z-30 text-center pointer-events-none px-6">
          <figcaption className="text-white/95 text-sm md:text-lg font-medium drop-shadow-md">{caption}</figcaption>
        </div>
      )}
    </figure>
  );
}

export default function ArticleView({ articleId, onBack }) {
  const article = articles[articleId];

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [articleId]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Article not found</h2>
          <button onClick={onBack} className="btn-primary">Go Back Home</button>
        </div>
      </div>
    );
  }

  // Helper to render different block types
  const renderBlock = (block, idx) => {
    switch (block.type) {
      case 'p':
        return (
          <FadeInBlock key={idx}>
            <p className="text-xl leading-relaxed text-gray-700 mb-8">{block.text}</p>
          </FadeInBlock>
        );
      case 'h2':
        return (
          <FadeInBlock key={idx}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-16 mb-8 relative inline-block">
              {block.text}
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-teal rounded-full" />
            </h2>
          </FadeInBlock>
        );
      case 'quote':
        return (
          <FadeInBlock key={idx}>
            <blockquote className="my-14 border-l-4 border-primary pl-6 py-2 bg-gradient-to-r from-sky-50 to-transparent rounded-r-2xl pr-8">
              <p className="text-2xl md:text-3xl font-medium italic text-gray-800 leading-snug">"{block.text}"</p>
              {block.author && <footer className="mt-4 text-gray-500 font-semibold">— {block.author}</footer>}
            </blockquote>
          </FadeInBlock>
        );
      case 'image':
        return (
          <figure key={idx} className="my-14 text-center animate-fade-in-up">
            <AdminEditableImage targetId={`${articleId}_content_${idx}`} defaultSrc={block.url} alt={block.caption} className="w-full h-auto object-cover rounded-3xl shadow-xl border border-gray-100/50 hover:shadow-2xl transition-shadow duration-500" />
            {block.caption && <figcaption className="text-gray-500 text-sm mt-4 font-medium italic">{block.caption}</figcaption>}
          </figure>
        );
      case 'image_full':
        return <FullWidthSlider key={idx} images={block.images || block.url} caption={block.caption} articleId={articleId} blockIdx={idx} />;
      case 'gallery':
        return (
          <div key={idx} className="my-14 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in-up">
            {block.images.map((img, i) => (
              <img key={i} src={img} alt="Gallery" onError={(e) => console.error("Image failed to load:", e.target.src)} className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            ))}
          </div>
        );
      case 'info_box':
        return (
          <FadeInBlock key={idx}>
            <div className="my-16 bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl p-8 md:p-10 border border-sky-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="p-3 bg-white rounded-xl shadow-sm text-primary">
                  <Info size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{block.title}</h3>
              </div>
              
              <ul className="space-y-6 relative z-10">
                {block.items.map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                    <span className="font-bold text-gray-900 min-w-[140px] uppercase tracking-wider text-xs flex items-center gap-2">
                       <MapPin size={14} className="text-teal" /> {item.label}
                    </span>
                    <span className="text-gray-700 leading-relaxed font-medium">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInBlock>
        );
      default:
        return null;
    }
  };

  return (
    <article className="min-h-screen bg-white pb-0">
      {/* Floating Back Button */}
      <button 
        onClick={onBack} 
        className="fixed top-24 left-4 md:left-8 z-40 bg-white/90 backdrop-blur-md p-3.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 hover:bg-white hover:shadow-[0_8px_30px_rgb(7,112,227,0.2)] transition-all duration-300 text-gray-800"
        aria-label="Back to home"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Hero Parallax Image */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden group">
        <AdminEditableImage 
          targetId={`${articleId}_hero`}
          defaultSrc={article.heroImage} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0f172a]" />
        
        {/* Header Content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-16 pt-32 max-w-5xl mx-auto text-center md:text-left z-10">
          <FadeInBlock delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-6">
              <MapPin size={16} /> Travel Guide
            </div>
          </FadeInBlock>
          
          <FadeInBlock delay={300}>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              {article.title}
            </h1>
          </FadeInBlock>
          
          <FadeInBlock delay={500}>
            <p className="text-xl md:text-3xl text-white/90 font-medium max-w-3xl mb-12 leading-snug">
              {article.subtitle}
            </p>
          </FadeInBlock>
          
          <FadeInBlock delay={700}>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-teal-300" />
                <span className="font-medium text-base">{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-sky-300" />
                <span className="font-medium text-base">{article.readTime}</span>
              </div>
            </div>
          </FadeInBlock>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="bg-white relative z-20 -mt-8 rounded-t-[40px] px-4 pt-16 pb-24 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          
          {/* Action Bar */}
          <div className="flex items-center justify-between gap-4 mb-16 pb-8 border-b border-gray-100">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-gray-500 hover:text-rose-500 hover:bg-rose-50 font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm border border-gray-100">
                <Heart size={20} /> <span className="hidden sm:inline">Add to Wishlist</span>
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-primary hover:bg-sky-50 font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm border border-gray-100">
                <Share2 size={20} /> <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>

          {/* Dynamic Content Rendering */}
          <div className="article-content">
            {article.content.map((block, idx) => renderBlock(block, idx))}
          </div>

        </div>
      </section>

      {/* Massive Call to Action */}
      <FadeInBlock>
        <div className="relative overflow-hidden bg-hero-gradient py-28 px-4 text-center mt-auto">
          <div className="absolute inset-0 bg-[url('/articles/img_1.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6">Inspired to visit {article.title.split(':')[0]}?</h3>
            <p className="text-xl text-white/80 mb-10">Stop dreaming and start planning. Find the best flight deals right now seamlessly.</p>
            <button 
              onClick={() => {
                onBack(); // Go back to home
                setTimeout(() => {
                  document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' }); // Scroll to Skyscanner Widget
                }, 300);
              }} 
              className="bg-white text-primary text-xl font-bold px-10 py-5 rounded-full shadow-2xl hover:scale-105 hover:shadow-primary/50 transition-all duration-300"
            >
              Search Flights Now
            </button>
          </div>
        </div>
      </FadeInBlock>
    </article>
  );
}
