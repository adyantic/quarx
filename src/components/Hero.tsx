import React from 'react';
import TransitioningHeroGraphic from './TransitioningHeroGraphic';


const Hero: React.FC = () => {
  return (
    <section className="flex min-h-[calc(100vh-88px)] sm:min-h-[calc(100svh-88px)] md:min-h-[calc(100dvh-88px)] w-screen flex-col items-center justify-center max-md:max-w-full bg-gradient-to-t from-[#F0FBFD] to-[#FFFFFF]">
      <div className="max-w-[1440px] justify-center items-stretch flex w-full flex-col gap-16 px-2.5 py-[50px] mx-auto">
        <h1 className="text-[#0b3041] text-center s24-text-hero text-[40px] xs:text-[48px] s24:text-[52px] md:text-[60px] font-medium leading-tight xs:leading-[1.2] s24:leading-[1.15] md:leading-[72px] max-w-full px-2 xs:px-4">
          We maximize the impact and value of biopharma innovations through{" "}
          <span className="text-[#5A9BA6]">
            real world data and analytics
          </span>
        </h1>
        <div className="flex w-full justify-center mt-12 max-md:mt-6">
          <TransitioningHeroGraphic />
        </div>
      </div>
    </section>
  );
};

export default Hero;
