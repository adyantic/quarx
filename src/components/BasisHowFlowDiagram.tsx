import React from 'react';

const BasisHowFlowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6 px-4">
      {/* Total Patient Opportunity */}
      <div className="text-[#0B3041] font-medium text-sm md:text-base text-center">
        Total Patient Opportunity
      </div>
      
      {/* Patients with Rx - Trapezoid 1 */}
      <div className="w-full max-w-3xl">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-semibold text-lg md:text-2xl py-6 md:py-8 text-center"
          style={{
            clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'
          }}
        >
          Patients with Rx
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-4 bg-[#D1D5DB]"></div>
        <div className="w-3 h-3 border-l-2 border-b-2 border-[#D1D5DB] rotate-[-45deg] translate-y-[-6px]"></div>
      </div>

      {/* Eligible Patient Base */}
      <div className="text-[#0B3041] font-medium text-sm md:text-base text-center">
        Eligible Patient Base
      </div>

      {/* HCP Sensitivity to Access - Trapezoid 2 */}
      <div className="w-full max-w-2xl">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-semibold text-lg md:text-2xl py-6 md:py-8 text-center"
          style={{
            clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
          }}
        >
          HCP Sensitivity to Access
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-4 bg-[#D1D5DB]"></div>
        <div className="w-3 h-3 border-l-2 border-b-2 border-[#D1D5DB] rotate-[-45deg] translate-y-[-6px]"></div>
      </div>

      {/* Patients with Rx */}
      <div className="text-[#0B3041] font-medium text-sm md:text-base text-center">
        Patients with Rx
      </div>

      {/* Payer Ability to Control - Trapezoid 3 */}
      <div className="w-full max-w-xl">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-semibold text-lg md:text-2xl py-5 md:py-6 text-center"
          style={{
            clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)'
          }}
        >
          Payer Ability to Control
        </div>
      </div>

      {/* Down Arrow */}
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-4 bg-[#D1D5DB]"></div>
        <div className="w-3 h-3 border-l-2 border-b-2 border-[#D1D5DB] rotate-[-45deg] translate-y-[-6px]"></div>
      </div>

      {/* Patients with approved Rx */}
      <div className="text-[#0B3041] font-medium text-sm md:text-base text-center">
        Patients with<br />approved Rx
      </div>

      {/* Payer Ability to Control - Trapezoid 4 (smaller) */}
      <div className="w-full max-w-md">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-semibold text-base md:text-xl py-3 md:py-4 text-center rounded-full"
        >
          Payer Ability to Control
        </div>
      </div>

      {/* Large Down Arrow */}
      <div className="flex flex-col items-center my-2">
        <div className="w-1 h-8 bg-[#A8D5E2]"></div>
        <div 
          className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[24px] border-l-transparent border-r-transparent border-t-[#A8D5E2]"
        ></div>
      </div>

      {/* Output List */}
      <div className="flex flex-col gap-2 text-[#0B3041] text-base md:text-lg">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#0B3041] rounded-full"></div>
          <span>Patients on Therapy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#0B3041] rounded-full"></div>
          <span>Demand/Sales/GTN</span>
        </div>
      </div>
    </div>
  );
};

export default BasisHowFlowDiagram;
