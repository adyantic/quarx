import React, { useState, useEffect } from 'react';
import sunflowerImage from '@/assets/sunflower-insight.png';
import pineconeImage from '@/assets/pinecone-insight.png';

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
    <div className="w-full max-w-[1200px] mx-auto h-[400px] flex items-center justify-center relative overflow-hidden">
      <img
        src={images[currentImage]}
        alt={currentImage === 0 ? "Sunflower insight - Maximum Efficiency" : "Pinecone insight - Optimal Growth"}
        className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      />
    </div>
  );
};

export default TransitioningHeroGraphic;