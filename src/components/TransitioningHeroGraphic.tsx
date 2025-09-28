import React, { useState, useEffect } from 'react';
import sunflowerImage from '@/assets/sunflower.png';
import pineconeImage from '@/assets/pinecone.png';
import sunflowerInsight from '@/assets/sunflower-behaviour.png';
import pineconeInsight from '@/assets/pinecone-behaviour.png';
import sunflowerInsightNew from '@/assets/sunflower-insight-new.png';
import pineconeInsightNew from '@/assets/pinecone-insight-new.png';

const TransitioningHeroGraphic: React.FC = () => {
  const [currentDataImage, setCurrentDataImage] = useState(0);
  const [currentGraphicImage, setCurrentGraphicImage] = useState(0);
  const [isDataVisible, setIsDataVisible] = useState(true);
  const [isGraphicVisible, setIsGraphicVisible] = useState(true);

  const dataImages = [sunflowerImage, pineconeImage];
  const graphicImages = [sunflowerInsight, pineconeInsight];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDataVisible(false);
      setIsGraphicVisible(false);
      
      setTimeout(() => {
        setCurrentDataImage((prev) => (prev + 1) % dataImages.length);
        setCurrentGraphicImage((prev) => (prev + 1) % graphicImages.length);
        setIsDataVisible(true);
        setIsGraphicVisible(true);
        }, 750); // Longer fade duration for smoother transition
      }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [dataImages.length, graphicImages.length]);

  return (
    <div className="w-full max-w-[1200px] mx-auto px-2 xs:px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xs:gap-12 s24:gap-16 md:gap-[52px] items-start">
        {/* Column 1: Data Images + Real World Data */}
        <div className="flex flex-col items-center">
          <div className="h-[250px] xs:h-[300px] s24:h-[350px] md:h-[400px] w-full flex items-center justify-center relative mb-4 xs:mb-6 s24:mb-8">
            <img
              src={dataImages[currentDataImage]}
              alt={currentDataImage === 0 ? "Sunflower mathematical analysis - Maximum Efficiency" : "Pinecone mathematical analysis - Optimal Growth"}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isDataVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-center">
            <div className="text-[#5A9BA6] s24-text-medium text-[20px] xs:text-[24px] s24:text-[28px] md:text-[32px] lg:text-[36px] font-light font-sans">REAL WORLD DATA</div>
          </div>
        </div>

        {/* Column 2: Graphic Images + Real Behaviour */}
        <div className="flex flex-col items-center">
          <div className="h-[250px] xs:h-[300px] s24:h-[350px] md:h-[400px] w-full flex items-center justify-center relative mb-4 xs:mb-6 s24:mb-8">
            <img
              src={graphicImages[currentGraphicImage]}
              alt={currentGraphicImage === 0 ? "Sunflower insight analysis" : "Pinecone insight analysis"}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-center">
            <div className="text-[#5A9BA6] s24-text-medium text-[20px] xs:text-[24px] s24:text-[28px] md:text-[32px] lg:text-[36px] font-light font-sans">REAL BEHAVIOUR</div>
          </div>
        </div>

        {/* Column 3: Transitioning Insight + Real Insight */}
        <div className="flex flex-col items-center">
          <div className="h-[250px] xs:h-[300px] s24:h-[350px] md:h-[400px] w-full flex items-center justify-center relative mb-4 xs:mb-6 s24:mb-8">
            <img
              src={currentGraphicImage === 0 ? sunflowerInsightNew : pineconeInsightNew}
              alt={currentGraphicImage === 0 ? "Sunflower Golden Ratio insight" : "Pinecone Golden Ratio insight"}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-center">
            <div className="text-[#5A9BA6] s24-text-medium text-[20px] xs:text-[24px] s24:text-[28px] md:text-[32px] lg:text-[36px] font-light font-sans">REAL INSIGHT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitioningHeroGraphic;