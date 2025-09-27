import React from 'react';
import sunflowerImage from '@/assets/sunflower-analysis.png';
import pineconeImage from '@/assets/pinecone-analysis.png';
import sunflowerInsight from '@/assets/sunflower-insight.png';

const TransitioningHeroGraphic: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
        <div className="flex flex-col items-center text-center w-full max-w-[365px]">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={sunflowerImage}
              alt="Sunflower mathematical analysis - Maximum Efficiency"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#5A9BA6] text-[24px] md:text-[36px] font-light font-sans">REAL WORLD DATA</div>
        </div>
        
        <div className="flex flex-col items-center text-center w-full max-w-[365px]">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={pineconeImage}
              alt="Pinecone mathematical analysis - Optimal Growth"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#5A9BA6] text-[24px] md:text-[36px] font-light font-sans">REAL BEHAVIOUR</div>
        </div>
        
        <div className="flex flex-col items-center text-center w-full max-w-[365px]">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={sunflowerInsight}
              alt="Sunflower insight analysis - Real Insights"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[#5A9BA6] text-[24px] md:text-[36px] font-light font-sans">REAL INSIGHT</div>
        </div>
      </div>
    </div>
  );
};

export default TransitioningHeroGraphic;