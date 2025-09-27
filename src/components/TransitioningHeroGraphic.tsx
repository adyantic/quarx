import React, { useState, useEffect } from 'react';
import sunflowerImage from '@/assets/sunflower-analysis.png';
import pineconeImage from '@/assets/pinecone-analysis.png';

const TransitioningHeroGraphic: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const images = [sunflowerImage, pineconeImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsVisible(true);
      }, 500); // Longer fade duration for smoother transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
        <div className="flex flex-col items-center text-center w-full max-w-[365px]">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={images[currentImage]}
              alt={currentImage === 0 ? "Sunflower mathematical analysis - Maximum Efficiency" : "Pinecone mathematical analysis - Optimal Growth"}
              className={`w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-[#5A9BA6] text-[24px] md:text-[36px] font-light font-sans">REAL WORLD DATA</div>
        </div>
        
        <div className="flex flex-col items-center text-center w-full max-w-[365px]">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={images[currentImage]}
              alt={currentImage === 0 ? "Sunflower mathematical analysis - Maximum Efficiency" : "Pinecone mathematical analysis - Optimal Growth"}
              className={`w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-[#5A9BA6] text-[24px] md:text-[36px] font-light font-sans">REAL BEHAVIOUR</div>
        </div>
        
        <div className="flex flex-col items-center text-center w-full max-w-[365px]">
          <div className="h-[400px] w-full flex items-center justify-center relative mb-8">
            <img
              src={images[currentImage]}
              alt={currentImage === 0 ? "Sunflower mathematical analysis - Maximum Efficiency" : "Pinecone mathematical analysis - Optimal Growth"}
              className={`w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>
          <div className="text-[#5A9BA6] text-[24px] md:text-[36px] font-light font-sans">REAL INSIGHT</div>
        </div>
      </div>
    </div>
  );
};

export default TransitioningHeroGraphic;