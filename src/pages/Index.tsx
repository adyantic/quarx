import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageSection from '@/components/ImageSection';
import PhilosophySection from '@/components/PhilosophySection';
import PrinciplesSection from '@/components/PrinciplesSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-stretch w-screen overflow-x-hidden">
      <Header />
      
      <div className="flex min-h-px w-full bg-[#E2E2E9]" />
      
      <main className="pt-[88px] w-screen overflow-x-hidden">
        <Hero />
        <ImageSection />
        <PhilosophySection />
        <PrinciplesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
