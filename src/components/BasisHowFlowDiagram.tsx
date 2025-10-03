import React from 'react';
import BasisHowFlowImage from '@/assets/basis-how-flow-diagram.png';

const BasisHowFlowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <img 
        src={BasisHowFlowImage} 
        alt="BASIS patient flow diagram showing the progression from Total Patient Opportunity through various sensitivity stages to final outcomes" 
        className="w-full h-auto"
      />
    </div>
  );
};

export default BasisHowFlowDiagram;
