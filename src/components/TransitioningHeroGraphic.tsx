import React, { useState, useEffect } from 'react';
import sunflowerImage from '@/assets/sunflower-no-text.png';
import pineconeImage from '@/assets/pinecone-no-text.png';

const TransitioningHeroGraphic: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const images = [
    { src: sunflowerImage, alt: "Sunflower with fibonacci spiral" },
    { src: pineconeImage, alt: "Pinecone with geometric pattern" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsVisible(true);
      }, 500);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
      {/* Transitioning Images Container */}
      <div className="w-full h-[300px] flex items-center justify-center relative overflow-hidden mb-8">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      </div>
      
      {/* Static Text */}
      <div className="flex justify-between w-full max-w-[800px] text-[#5A9BA6] text-lg font-medium">
        <span>REAL WORLD DATA</span>
        <span>REAL BEHAVIOUR</span>
        <span>REAL INSIGHT</span>
      </div>
    </div>
  );
};

export default TransitioningHeroGraphic;