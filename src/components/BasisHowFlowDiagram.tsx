import React from 'react';
import PatientsWithRxTrapezoid from '@/assets/patients-with-rx-trapezoid.png';
import HcpSensitivityTrapezoid from '@/assets/hcp-sensitivity-trapezoid.png';
import PayerAbilityTrapezoid from '@/assets/payer-ability-trapezoid.png';
import ArrowIcon from '@/assets/arrow-up-bold-outline-1.png';

const BasisHowFlowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-3 px-4 py-8">
      {/* Total Patient Opportunity */}
      <div className="text-[#0B3041] font-normal text-xl md:text-2xl text-center mb-2">
        Total Patient Opportunity
      </div>
      
      {/* Patients with Rx - Large Trapezoid */}
      <div className="w-full max-w-4xl relative">
        <img 
          src={PatientsWithRxTrapezoid} 
          alt="Trapezoid background graphic" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#0B3041] font-bold text-2xl md:text-4xl">
            Patients with Rx
          </span>
        </div>
      </div>

      {/* Eligible Patient Base */}
      <div className="flex items-center justify-center gap-3 my-1">
        <img src={ArrowIcon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
        <span className="text-[#0B3041] font-normal text-xl md:text-2xl text-center">
          Eligible Patient Base
        </span>
        <img src={ArrowIcon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
      </div>

      {/* HCP Sensitivity to Access - Medium Trapezoid */}
      <div className="w-full max-w-3xl relative">
        <img 
          src={HcpSensitivityTrapezoid} 
          alt="Trapezoid background graphic" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#0B3041] font-bold text-2xl md:text-4xl">
            HCP Sensitivity to Access
          </span>
        </div>
      </div>


      {/* Patients with Rx */}
      <div className="flex items-center justify-center gap-3 my-1">
        <img src={ArrowIcon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
        <span className="text-[#0B3041] font-normal text-xl md:text-2xl text-center">
          Patients with Rx
        </span>
        <img src={ArrowIcon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
      </div>

      {/* Payer Ability to Control - Medium-Small Trapezoid */}
      <div className="w-full max-w-2xl relative">
        <img 
          src={PayerAbilityTrapezoid} 
          alt="Trapezoid background graphic" 
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#0B3041] font-bold text-2xl md:text-4xl">
            Payer Ability to Control
          </span>
        </div>
      </div>


      {/* Patients with approved Rx */}
      <div className="flex items-center justify-center gap-3 my-1">
        <img src={ArrowIcon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
        <span className="text-[#0B3041] font-normal text-xl md:text-2xl text-center">
          Patients with<br />approved Rx
        </span>
        <img src={ArrowIcon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
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
