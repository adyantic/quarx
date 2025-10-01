import React from 'react';

const BasisHowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Main flow container */}
      <div className="relative flex flex-col gap-16">
        
        {/* Top row: Patient flow stages */}
        <div className="grid grid-cols-4 gap-6 relative">
          {/* Eligible Patient Base */}
          <div className="flex flex-col items-center gap-2 relative">
            <div className="bg-[#D4E9F0] border-2 border-[#5A9BA6] rounded-lg p-6 min-h-[100px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-base font-medium leading-tight">
                Eligible<br />Patient Base
              </p>
            </div>
            {/* Arrow right */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Patients with Rx */}
          <div className="flex flex-col items-center gap-2 relative">
            <div className="bg-[#D4E9F0] border-2 border-[#5A9BA6] rounded-lg p-6 min-h-[100px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-base font-medium leading-tight">
                Patients<br />with Rx
              </p>
            </div>
            {/* Arrow right */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Patients with Approved Rx */}
          <div className="flex flex-col items-center gap-2 relative">
            <div className="bg-[#D4E9F0] border-2 border-[#5A9BA6] rounded-lg p-6 min-h-[100px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-base font-medium leading-tight">
                Patients with<br />Approved Rx
              </p>
            </div>
            {/* Arrow right */}
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Patients with Dispensed Rx */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-[#D4E9F0] border-2 border-[#5A9BA6] rounded-lg p-6 min-h-[100px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-base font-medium leading-tight">
                Patients with<br />Dispensed Rx
              </p>
            </div>
          </div>
        </div>

        {/* Middle row: Vertical arrows */}
        <div className="grid grid-cols-4 gap-6">
          <div className="flex justify-center">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0V40M12 40L6 34M12 40L18 34" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0V40M12 40L6 34M12 40L18 34" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0V40M12 40L6 34M12 40L18 34" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0V40M12 40L6 34M12 40L18 34" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Bottom row: Sensitivity parameters */}
        <div className="grid grid-cols-4 gap-6">
          {/* Market Sizing Inputs */}
          <div className="flex flex-col items-center">
            <div className="bg-[#E8F4F8] border-2 border-[#7097AA] rounded-lg p-4 min-h-[80px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-sm font-medium leading-tight">
                Market Sizing<br />Inputs
              </p>
            </div>
          </div>

          {/* HCP Demand Sensitivity */}
          <div className="flex flex-col items-center">
            <div className="bg-[#E8F4F8] border-2 border-[#7097AA] rounded-lg p-4 min-h-[80px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-sm font-medium leading-tight">
                HCP Demand<br />Sensitivity
              </p>
            </div>
          </div>

          {/* Payer Approach & Sensitivity */}
          <div className="flex flex-col items-center">
            <div className="bg-[#E8F4F8] border-2 border-[#7097AA] rounded-lg p-4 min-h-[80px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-sm font-medium leading-tight">
                Payer Approach &<br />Sensitivity
              </p>
            </div>
          </div>

          {/* Patient OOP Sensitivity */}
          <div className="flex flex-col items-center">
            <div className="bg-[#E8F4F8] border-2 border-[#7097AA] rounded-lg p-4 min-h-[80px] flex items-center justify-center">
              <p className="text-[#0B3041] text-center text-sm font-medium leading-tight">
                Patient OOP<br />Sensitivity
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Output metrics */}
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 lg:flex lg:flex-col max-lg:static max-lg:translate-y-0 max-lg:flex-row max-lg:flex-wrap max-lg:justify-center max-lg:mt-12">
          {/* Arrow pointing to outputs */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 max-lg:hidden">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
              <path d="M0 12H32M32 12L25 5M32 12L25 19" stroke="#5A9BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="bg-[#F8E8F4] border-2 border-[#86117A] rounded-lg px-6 py-2">
            <p className="text-[#0B3041] text-sm font-semibold whitespace-nowrap">Patients</p>
          </div>
          <div className="bg-[#F8E8F4] border-2 border-[#86117A] rounded-lg px-6 py-2">
            <p className="text-[#0B3041] text-sm font-semibold whitespace-nowrap">Units</p>
          </div>
          <div className="bg-[#F8E8F4] border-2 border-[#86117A] rounded-lg px-6 py-2">
            <p className="text-[#0B3041] text-sm font-semibold whitespace-nowrap">Gross Sales</p>
          </div>
          <div className="bg-[#F8E8F4] border-2 border-[#86117A] rounded-lg px-6 py-2">
            <p className="text-[#0B3041] text-sm font-semibold whitespace-nowrap">Net Sales</p>
          </div>
          <div className="bg-[#F8E8F4] border-2 border-[#86117A] rounded-lg px-6 py-2">
            <p className="text-[#0B3041] text-sm font-semibold whitespace-nowrap">GTN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasisHowDiagram;
