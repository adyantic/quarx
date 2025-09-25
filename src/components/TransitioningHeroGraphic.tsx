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

  const textLabels = [
    ["REAL WORLD DATA", "REAL BEHAVIOUR", "REAL INSIGHT"],
    ["REAL WORLD DATA", "REAL BEHAVIOUR", "REAL INSIGHT"]
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center relative overflow-hidden">
      <div className="h-[400px] w-full flex items-center justify-center relative">
        <img
          src={images[currentImage]}
          alt={currentImage === 0 ? "Sunflower mathematical analysis - Maximum Efficiency" : "Pinecone mathematical analysis - Optimal Growth"}
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      </div>
      <div className="flex justify-between w-full max-w-[800px] mt-6">
        {textLabels[currentImage].map((label, index) => (
          <div key={index} className="text-[#5A9BA6] text-lg font-medium">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransitioningHeroGraphic;