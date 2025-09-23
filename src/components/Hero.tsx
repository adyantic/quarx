import React, { useState, useEffect } from 'react';
import sunflowerInsight from '@/assets/sunflower-insight.png';

const TransitionSection: React.FC<{ 
  children: React.ReactNode; 
  altContent: React.ReactNode;
  delay?: number;
}> = ({ children, altContent, delay = 0 }) => {
  const [showAlt, setShowAlt] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setShowAlt(prev => !prev);
      }, 4000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className="relative">
      <div className={`transition-opacity duration-1000 ${showAlt ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showAlt ? 'opacity-100' : 'opacity-0'}`}>
        {altContent}
      </div>
    </div>
  );
};

const RealInsightSection: React.FC = () => {
  return (
    <article className="justify-center items-center self-stretch flex min-w-60 flex-col text-[#156082] leading-none w-[385px] gap-10 my-auto">
      <TransitionSection
        delay={2000}
        altContent={
          <img
            src={sunflowerInsight}
            alt="Sunflower showing golden ratio in nature"
            className="w-[365px] h-[365px] object-contain"
          />
        }
      >
        <div className="flex min-h-[365px] max-w-full w-[385px] flex-col items-stretch text-center justify-center">
          <div className="justify-center items-stretch flex w-full flex-col overflow-hidden text-[#0B3041] leading-none p-2.5">
            <div className="text-[#0B3041] text-4xl font-light leading-[48px]">
              13/8 = Φ = ~1.62
            </div>
          </div>
          <div className="justify-center items-stretch flex w-full flex-col overflow-hidden text-black leading-[48px] mt-2.5 p-2.5">
            <p className="text-4xl font-light leading-[48px]">
              <span className="text-[#0B3041]">
                A pinecone's spirals follow the golden ratio. Nature's
                design for
              </span>{" "}
              <span className="text-[#5A9BA6]">
                Optimal Growth Rate.
              </span>
            </p>
          </div>
        </div>
      </TransitionSection>
      <h2 className="text-[#156082] text-4xl font-light leading-[48px] mt-10">
        REAL INSIGHT
      </h2>
    </article>
  );
};

const OldRealInsightSection: React.FC = () => {
  const [showSunflower, setShowSunflower] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSunflower(prev => !prev);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <article className="justify-center items-center self-stretch flex min-w-60 flex-col w-[385px] gap-10 my-auto">
      <div className="relative flex min-h-[365px] max-w-full w-[385px] flex-col items-stretch text-center justify-center">
        {/* Mathematical Formula Frame */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showSunflower ? 'opacity-0' : 'opacity-100'}`}>
          <div className="justify-center items-stretch flex w-full flex-col overflow-hidden text-[#0B3041] leading-none p-2.5">
            <div className="text-[#0B3041] text-4xl font-light leading-[48px]">
              13/8 = Φ = ~1.62
            </div>
          </div>
          <div className="justify-center items-stretch flex w-full flex-col overflow-hidden text-black leading-[48px] mt-2.5 p-2.5">
            <p className="text-4xl font-light leading-[48px]">
              <span className="text-[#0B3041]">
                A pinecone's spirals follow the golden ratio. Nature's
                design for
              </span>{" "}
              <span className="text-[#5A9BA6]">
                Optimal Growth Rate.
              </span>
            </p>
          </div>
        </div>

        {/* Sunflower Frame */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${showSunflower ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={sunflowerInsight}
            alt="Sunflower showing golden ratio in nature"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h2 className="text-[#156082] text-4xl font-light leading-[48px] mt-10">
        REAL INSIGHT
      </h2>
    </article>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-[900px] w-full flex-col items-center justify-center max-md:max-w-full">
      <div className="max-w-[1440px] justify-center items-stretch flex w-full flex-col overflow-hidden gap-28 px-2.5 py-[50px] max-md:max-w-full">
        <h1 className="text-[#0b3041] text-center text-5xl font-medium leading-[64px] max-md:max-w-full max-md:text-[40px] max-md:leading-[60px]">
          We maximize the impact and value of biopharma innovations through{" "}
          <span className="text-[#5A9BA6]">
            real world data and analytics
          </span>
        </h1>
        <div className="flex w-full items-center gap-[270px_100px] text-4xl font-light justify-between flex-wrap mt-28 max-md:max-w-full max-md:mt-10">
          <article className="justify-center items-center self-stretch flex min-w-60 flex-col text-[#156082] leading-none w-[365px] gap-10 my-auto">
            <TransitionSection
              altContent={
                <div className="w-[365px] h-[365px] flex items-center justify-center">
                  <img
                    src={sunflowerInsight}
                    alt="Real World Data - Sunflower"
                    className="w-[300px] h-[300px] object-contain object-left"
                  />
                </div>
              }
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4b9559d846debca3387882f730c5639e178f15c2?placeholderIfAbsent=true"
                alt="Real World Data visualization"
                className="aspect-[1] object-contain w-[365px] max-w-full hover:scale-105 transition-transform duration-300"
              />
            </TransitionSection>
            <h2 className="text-[#156082] text-4xl font-light leading-[48px] mt-10">
              REAL WORLD DATA
            </h2>
          </article>
          <article className="justify-center items-center self-stretch flex min-w-60 flex-col text-[#156082] leading-none w-[365px] gap-10 my-auto">
            <TransitionSection
              delay={1000}
              altContent={
                <div className="w-[365px] h-[365px] flex items-center justify-center">
                  <img
                    src={sunflowerInsight}
                    alt="Real Behaviour - Geometric Pattern"
                    className="w-[300px] h-[300px] object-contain object-center"
                  />
                </div>
              }
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/72e7b0a203d38e3f04b5dea7e36de79506941a67?placeholderIfAbsent=true"
                alt="Real Behaviour analysis"
                className="aspect-[1] object-contain w-[365px] max-w-full rounded-[0px_0px_0px_0px] hover:scale-105 transition-transform duration-300"
              />
            </TransitionSection>
            <h2 className="text-[#156082] text-4xl font-light leading-[48px] mt-10">
              REAL BEHAVIOUR
            </h2>
          </article>
          <RealInsightSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
