import React from 'react';
import TransitioningHeroGraphic from './TransitioningHeroGraphic';


const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center max-md:max-w-full bg-gradient-to-t from-[#F0FBFD] to-[#FFFFFF]">
      <div className="max-w-[1440px] justify-center items-stretch flex w-full flex-col overflow-hidden gap-16 px-2.5 py-[50px] max-md:max-w-full">
        <h1 className="text-[#0b3041] text-center text-[60px] font-medium leading-[72px] max-md:max-w-full max-md:text-[48px] max-md:leading-[64px]">
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
