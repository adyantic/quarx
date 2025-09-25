import React from 'react';
import TransitioningInsight from './TransitioningInsight';


const Hero: React.FC = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center max-md:max-w-full bg-gradient-to-t from-[#F0FBFD] to-[#FFFFFF]">
      <div className="max-w-[1440px] justify-center items-stretch flex w-full flex-col overflow-hidden gap-28 px-2.5 py-[50px] max-md:max-w-full">
        <h1 className="text-[#0b3041] text-center text-[60px] font-medium leading-[72px] max-md:max-w-full max-md:text-[48px] max-md:leading-[64px]">
          We maximize the impact and value of biopharma innovations through{" "}
          <span className="text-[#5A9BA6]">
            real world data and analytics
          </span>
        </h1>
        <div className="flex w-full items-center gap-[270px_100px] text-4xl font-light justify-between flex-wrap mt-28 max-md:max-w-full max-md:mt-10">
          <article className="justify-center items-center self-stretch flex min-w-60 flex-col text-[#156082] leading-none w-[365px] gap-10 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4b9559d846debca3387882f730c5639e178f15c2?placeholderIfAbsent=true"
              alt="Real World Data visualization"
              className="aspect-[1] object-contain w-[365px] max-w-full hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-[#156082] text-4xl font-light leading-[48px] mt-10">REAL WORLD DATA</h2>
          </article>

          <article className="justify-center items-center self-stretch flex min-w-60 flex-col text-[#156082] leading-none w-[365px] gap-10 my-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/72e7b0a203d38e3f04b5dea7e36de79506941a67?placeholderIfAbsent=true"
              alt="Real Behaviour analysis"
              className="aspect-[1] object-contain w-[365px] max-w-full rounded-[0px_0px_0px_0px] hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-[#156082] text-4xl font-light leading-[48px] mt-10">REAL BEHAVIOUR</h2>
          </article>

          <article className="justify-center items-center self-stretch flex min-w-60 flex-col text-[#156082] leading-none w-[385px] gap-10 my-auto">
            <TransitioningInsight />
            <h2 className="text-[#156082] text-4xl font-light leading-[48px] mt-10">REAL INSIGHT</h2>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
