import React from 'react';
import BasisHowDiagram from '@/assets/basis-how-diagram-clean.png';

const BasisHowDiagramWithText: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto flex gap-4">
      {/* Left side with top and bottom labels */}
      <div className="flex-1 flex flex-col">
        {/* Top Labels */}
        <div className="flex justify-between mb-4 px-4">
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            Eligible Patient<br />Base
          </div>
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            Patients<br />with Rx
          </div>
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            Patients with<br />Approved Rx
          </div>
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            Patients with<br />Dispensed Rx
          </div>
        </div>

        {/* Diagram Image */}
        <img 
          src={BasisHowDiagram} 
          alt="BASIS patient flow diagram background graphics" 
          className="w-full h-auto"
        />

        {/* Bottom Labels */}
        <div className="flex justify-between mt-4 px-4">
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            Market Sizing<br />Inputs
          </div>
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            HCP Demand<br />Sensitivity
          </div>
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            Payer Approach<br />& Sensitivity
          </div>
          <div className="flex-1 text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] leading-tight">
            Patient OOP<br />Sensitivity
          </div>
        </div>
      </div>

      {/* Right Side Output Stack */}
      <div className="flex flex-col justify-center gap-[clamp(0.5rem,1.5vw,1rem)] pl-4">
        <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] whitespace-nowrap">
          Patients
        </div>
        <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] whitespace-nowrap">
          Units
        </div>
        <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] whitespace-nowrap">
          Gross Sales
        </div>
        <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] whitespace-nowrap">
          Net Sales
        </div>
        <div className="text-[#2C3E50] font-normal text-[clamp(0.7rem,1.3vw,1.1rem)] whitespace-nowrap">
          GTN
        </div>
      </div>
    </div>
  );
};

export default BasisHowDiagramWithText;
