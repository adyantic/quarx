import React, { useState, useEffect } from 'react';

interface InsightVariant {
  formula: string;
  description: string;
  highlight: string;
}

const insightVariants: InsightVariant[] = [
  {
    formula: "13/8 = Φ = ~1.62",
    description: "A pinecone's spirals follow the golden ratio. Nature's design for",
    highlight: "Optimal Growth Rate."
  },
  {
    formula: "e^(iπ) + 1 = 0",
    description: "Euler's identity connects fundamental constants. The foundation for",
    highlight: "Mathematical Beauty."
  },
  {
    formula: "P(A|B) = P(B|A)P(A)/P(B)",
    description: "Bayes' theorem reveals conditional probability. The key to",
    highlight: "Predictive Analytics."
  }
];

const TransitioningInsight: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % insightVariants.length
        );
        setIsVisible(true);
      }, 300); // Fade out duration
    }, 3000); // 3 second delay

    return () => clearInterval(interval);
  }, []);

  const currentVariant = insightVariants[currentIndex];

  return (
    <div className="flex min-h-[365px] max-w-full w-[385px] flex-col items-stretch text-center justify-center">
      <div 
        className={`justify-center items-stretch flex w-full flex-col overflow-hidden text-[#0B3041] leading-none p-2.5 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-[#0B3041] text-4xl font-light leading-[48px]">
          {currentVariant.formula}
        </div>
      </div>
      <div 
        className={`justify-center items-stretch flex w-full flex-col overflow-hidden text-black leading-[48px] mt-2.5 p-2.5 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-4xl font-light leading-[48px]">
          <span className="text-[#0B3041]">{currentVariant.description}</span>{' '}
          <span className="text-[#5A9BA6]">{currentVariant.highlight}</span>
        </p>
      </div>
    </div>
  );
};

export default TransitioningInsight;