import React from 'react';
import BasisHowDiagram from '@/assets/basis-how-diagram.png';

const BasisHowDiagramWithText: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Background Image */}
      <img 
        src={BasisHowDiagram} 
        alt="BASIS patient flow diagram background graphics" 
        className="w-full h-auto"
      />
      
      {/* Text Overlays */}
      <div className="absolute inset-0">
        {/* Patient Flow - Top Row */}
        <div className="absolute top-[8%] left-[5%] text-[#0B3041] font-medium text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          Eligible Patient Base
        </div>
        
        <div className="absolute top-[8%] left-[26%] text-[#0B3041] font-medium text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          Patients with Rx
        </div>
        
        <div className="absolute top-[8%] left-[47%] text-[#0B3041] font-medium text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          Patients with Approved Rx
        </div>
        
        <div className="absolute top-[8%] right-[20%] text-[#0B3041] font-medium text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          Patients with Dispensed Rx
        </div>
        
        {/* Bottom Sensitivity Parameters */}
        <div className="absolute bottom-[8%] left-[5%] text-[#156082] font-semibold text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          Market Sizing Inputs
        </div>
        
        <div className="absolute bottom-[8%] left-[26%] text-[#156082] font-semibold text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          HCP Demand Sensitivity
        </div>
        
        <div className="absolute bottom-[8%] left-[47%] text-[#156082] font-semibold text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          Payer Approach & Sensitivity
        </div>
        
        <div className="absolute bottom-[8%] right-[20%] text-[#156082] font-semibold text-[clamp(0.6rem,1.2vw,1rem)] text-center max-w-[15%]">
          Patient OOP Sensitivity
        </div>
        
        {/* Output Stack - Right Side */}
        <div className="absolute top-[20%] right-[3%] flex flex-col gap-[clamp(0.5rem,2.5vw,1.5rem)]">
          <div className="text-white font-bold text-[clamp(0.7rem,1.4vw,1.1rem)] text-center">
            Patients
          </div>
          <div className="text-white font-bold text-[clamp(0.7rem,1.4vw,1.1rem)] text-center">
            Units
          </div>
          <div className="text-white font-bold text-[clamp(0.7rem,1.4vw,1.1rem)] text-center">
            Gross Sales
          </div>
          <div className="text-white font-bold text-[clamp(0.7rem,1.4vw,1.1rem)] text-center">
            Net Sales
          </div>
          <div className="text-white font-bold text-[clamp(0.7rem,1.4vw,1.1rem)] text-center">
            GTN
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasisHowDiagramWithText;
