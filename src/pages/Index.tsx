
import { useEffect } from 'react';
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
  }, []);

  return (
    <div className="min-h-screen bg-dark-500">
      <Header />
      <Hero />
      <Features />
      <DemoSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
