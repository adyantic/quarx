import React from 'react';

const BasisHowFlowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-3 px-4 py-8">
      {/* Total Patient Opportunity */}
      <div className="text-[#0B3041] font-normal text-xl md:text-2xl text-center mb-2">
        Total Patient Opportunity
      </div>
      
      {/* Patients with Rx - Large Trapezoid */}
      <div className="w-full max-w-4xl">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-bold text-2xl md:text-4xl py-8 md:py-12 text-center relative"
          style={{
            clipPath: 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(135deg, #B8E5F2 0%, #A8D5E2 50%, #98C5D2 100%)'
          }}
        >
          Patients with Rx
        </div>
      </div>

      {/* Down Arrow with shadow effect */}
      <div className="flex flex-col items-center my-1">
        <div className="flex gap-8">
          <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-20">
            <path d="M20 0 L20 40 L10 30 M20 40 L30 30" stroke="#9CA3AF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <polygon points="20,60 10,40 30,40" fill="#9CA3AF"/>
          </svg>
          <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-20">
            <path d="M20 0 L20 40 L10 30 M20 40 L30 30" stroke="#9CA3AF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <polygon points="20,60 10,40 30,40" fill="#9CA3AF"/>
          </svg>
        </div>
      </div>

      {/* Eligible Patient Base */}
      <div className="text-[#0B3041] font-normal text-xl md:text-2xl text-center my-1">
        Eligible Patient Base
      </div>

      {/* HCP Sensitivity to Access - Medium Trapezoid */}
      <div className="w-full max-w-3xl">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-bold text-2xl md:text-4xl py-8 md:py-12 text-center"
          style={{
            clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(135deg, #B8E5F2 0%, #A8D5E2 50%, #98C5D2 100%)'
          }}
        >
          HCP Sensitivity to Access
        </div>
      </div>

      {/* Down Arrow with shadow effect */}
      <div className="flex flex-col items-center my-1">
        <div className="flex gap-8">
          <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-20">
            <path d="M20 0 L20 40 L10 30 M20 40 L30 30" stroke="#9CA3AF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <polygon points="20,60 10,40 30,40" fill="#9CA3AF"/>
          </svg>
          <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-20">
            <path d="M20 0 L20 40 L10 30 M20 40 L30 30" stroke="#9CA3AF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <polygon points="20,60 10,40 30,40" fill="#9CA3AF"/>
          </svg>
        </div>
      </div>

      {/* Patients with Rx */}
      <div className="text-[#0B3041] font-normal text-xl md:text-2xl text-center my-1">
        Patients with Rx
      </div>

      {/* Payer Ability to Control - Medium-Small Trapezoid */}
      <div className="w-full max-w-2xl">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-bold text-2xl md:text-4xl py-7 md:py-10 text-center"
          style={{
            clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
            background: 'linear-gradient(135deg, #B8E5F2 0%, #A8D5E2 50%, #98C5D2 100%)'
          }}
        >
          Payer Ability to Control
        </div>
      </div>

      {/* Down Arrow with shadow effect */}
      <div className="flex flex-col items-center my-1">
        <div className="flex gap-8">
          <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-20">
            <path d="M20 0 L20 40 L10 30 M20 40 L30 30" stroke="#9CA3AF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <polygon points="20,60 10,40 30,40" fill="#9CA3AF"/>
          </svg>
          <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-20">
            <path d="M20 0 L20 40 L10 30 M20 40 L30 30" stroke="#9CA3AF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <polygon points="20,60 10,40 30,40" fill="#9CA3AF"/>
          </svg>
        </div>
      </div>

      {/* Patients with approved Rx */}
      <div className="text-[#0B3041] font-normal text-xl md:text-2xl text-center my-1">
        Patients with<br />approved Rx
      </div>

      {/* Payer Ability to Control - Small Pill Shape */}
      <div className="w-full max-w-xl">
        <div 
          className="bg-[#A8D5E2] text-[#0B3041] font-bold text-xl md:text-2xl py-4 md:py-5 text-center rounded-full"
          style={{
            background: 'linear-gradient(135deg, #B8E5F2 0%, #A8D5E2 50%, #98C5D2 100%)'
          }}
        >
          Payer Ability to Control
        </div>
      </div>

      {/* Large Down Arrow */}
      <div className="flex flex-col items-center my-3">
        <div className="w-2 h-16 bg-[#A8D5E2] rounded-t"></div>
        <div 
          className="w-0 h-0 border-l-[35px] border-r-[35px] border-t-[40px] border-l-transparent border-r-transparent border-t-[#A8D5E2]"
        ></div>
      </div>

      {/* Output List */}
      <div className="flex flex-col gap-3 text-[#0B3041] text-lg md:text-xl mt-2">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#0B3041] rounded-full"></div>
          <span className="font-normal">Patients on Therapy</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#0B3041] rounded-full"></div>
          <span className="font-normal">Demand/Sales/GTN</span>
        </div>
      </div>
    </div>
  );
};

export default BasisHowFlowDiagram;
