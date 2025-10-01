import React from 'react';
import BasisHowDiagram from '@/assets/basis-how-diagram-clean.png';

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
        <div className="absolute top-[3%] left-[2%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          Eligible Patient<br />Base
        </div>
        
        <div className="absolute top-[6%] left-[23%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          Patients<br />with Rx
        </div>
        
        <div className="absolute top-[8%] left-[44%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          Patients with<br />Approved Rx
        </div>
        
        <div className="absolute top-[10%] right-[25%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          Patients with<br />Dispensed Rx
        </div>
        
        {/* Bottom Sensitivity Parameters */}
        <div className="absolute bottom-[3%] left-[2%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          Market Sizing<br />Inputs
        </div>
        
        <div className="absolute bottom-[6%] left-[23%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          HCP Demand<br />Sensitivity
        </div>
        
        <div className="absolute bottom-[9%] left-[44%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          Payer Approach<br />& Sensitivity
        </div>
        
        <div className="absolute bottom-[12%] right-[25%] text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] text-left leading-tight max-w-[12%]">
          Patient OOP<br />Sensitivity
        </div>
        
        {/* Output Stack - Right Side */}
        <div className="absolute top-[27%] right-[2%] flex flex-col gap-[clamp(1rem,3.5vw,2.2rem)] text-right">
          <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)]">
            Patients
          </div>
          <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)]">
            Units
          </div>
          <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)]">
            Gross Sales
          </div>
          <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)]">
            Net Sales
          </div>
          <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)]">
            GTN
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasisHowDiagramWithText;
