
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DemoSection from '@/components/DemoSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Apply staggered animation to elements with animate-in class
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((element, index) => {
      element.classList.add(`stagger-${index % 5 + 1}`);
    });
    
    // Prefetch images for better performance
    const prefetchImages = [
      // Add important images to prefetch
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3"
    ];
    
    prefetchImages.forEach(imgSrc => {
      const img = new Image();
      img.src = imgSrc;
    });
    
    // Report web vitals for performance monitoring
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfEntries = performance.getEntriesByType('navigation');
          if (perfEntries.length > 0) {
            console.log('Page loaded in:', perfEntries[0].duration, 'ms');
          }
        }, 0);
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>MemeAI - Generate Hilarious Memes with AI in Seconds</title>
        <meta name="description" content="Transform your ideas into meme gold with our advanced AI meme generator. Create viral-worthy content in seconds with powerful customization tools." />
        <meta name="keywords" content="ai meme generator, meme creator, funny memes, meme maker, viral content, ai-generated memes, custom memes, meme templates, humor ai" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="MemeAI - Generate Hilarious Memes with AI in Seconds" />
        <meta name="author" content="MemeAI Team" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://memeai.netlify.app/" />
        <meta property="og:title" content="MemeAI - Generate Hilarious Memes with AI" />
        <meta property="og:description" content="Transform your ideas into meme gold with our advanced AI meme generator. Create viral-worthy content in seconds." />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MemeAI - Generate Hilarious Memes with AI" />
        <meta name="twitter:description" content="Create viral-worthy memes in seconds with our AI-powered meme generator." />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        
        {/* Canonical link */}
        <link rel="canonical" href="https://memeai.netlify.app/" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="application-name" content="MemeAI" />
        <meta name="theme-color" content="#6b21a8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MemeAI" />
      </Helmet>
      
      <div className="min-h-screen bg-dark-500">
        <Header />
        <main>
          <Hero />
          <Features />
          <DemoSection />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
