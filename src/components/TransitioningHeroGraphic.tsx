import React, { useState, useEffect } from 'react';
import sunflowerImage from '@/assets/sunflower.png';
import pineconeImage from '@/assets/pinecone.png';
import sunflowerInsight from '@/assets/sunflower-insight.png';
import pineconeInsight from '@/assets/pinecone-insight.png';
import TransitioningInsight from './TransitioningInsight';

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
      }, 500); // Longer fade duration for smoother transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [dataImages.length, graphicImages.length]);

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1: Data Images + Real World Data */}
        <div className="flex flex-col items-center">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={dataImages[currentDataImage]}
              alt={currentDataImage === 0 ? "Sunflower mathematical analysis - Maximum Efficiency" : "Pinecone mathematical analysis - Optimal Growth"}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isDataVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-center">
            <div className="text-[#5A9BA6] text-[36px] font-light font-sans">REAL WORLD DATA</div>
          </div>
        </div>

        {/* Column 2: Graphic Images + Real Behaviour */}
        <div className="flex flex-col items-center">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={graphicImages[currentGraphicImage]}
              alt={currentGraphicImage === 0 ? "Sunflower insight analysis" : "Pinecone insight analysis"}
              className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isGraphicVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-center">
            <div className="text-[#5A9BA6] text-[36px] font-light font-sans">REAL BEHAVIOUR</div>
          </div>
        </div>

        {/* Column 3: Transitioning Insight + Real Insight */}
        <div className="flex flex-col items-center">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <TransitioningInsight />
          </div>
          <div className="text-center">
            <div className="text-[#5A9BA6] text-[36px] font-light font-sans">REAL INSIGHT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitioningHeroGraphic;