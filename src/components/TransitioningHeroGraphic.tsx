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
      }, 300); // Half of transition duration
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <img
        src={images[currentImage]}
        alt={currentImage === 0 ? "Sunflower insight - Maximum Efficiency" : "Pinecone insight - Optimal Growth"}
        className={`w-full h-auto transition-opacity duration-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default TransitioningHeroGraphic;