import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import idnIcon from '@/assets/idn-icon.svg';

const IdnHealthSystemDetail: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-2.5 pt-24 md:pt-28 lg:pt-32 pb-[50px] flex flex-col items-center gap-[30px]">
          {/* Tab Buttons */}
          <div className="self-stretch px-2 md:px-5 flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <Link
              to="/solutions"
              className="w-full md:w-auto px-3 md:px-4 py-2 md:py-[11px] rounded-full border bg-transparent text-[#7097AA] border-[#7097AA] transition-colors hover:bg-[#7097AA]/10"
            >
              <span className="text-sm md:text-base lg:text-xl font-medium leading-6 md:leading-8">Access & Reimbursement Analytics</span>
            </Link>
            <Link
              to="/solutions?tab=segmentation"
              className="w-full md:w-auto px-3 md:px-4 py-2 md:py-[11px] rounded-full border bg-[#156082] text-white border-[#156082] transition-colors"
            >
              <span className="text-sm md:text-base lg:text-xl font-medium leading-6 md:leading-8">Customer Segmentation</span>
            </Link>
          </div>

          {/* Back Link */}
          <div className="self-stretch px-2 md:px-5">
            <Link 
              to="/solutions?tab=segmentation" 
              className="inline-flex items-center gap-2 text-[#5A9BA6] text-lg font-medium hover:underline"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </Link>
          </div>

          {/* Title */}
          <div className="w-full max-w-[1400px] text-center px-2 md:px-5">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-medium leading-7 md:leading-9 lg:leading-[48px]">
              <span className="text-[#5A9BA6]">
                Structure drives behavior when it comes to Health Systems.{' '}
              </span>
              <span className="text-[#0B3041]">
                Our Health System archetyping framework is focused on characterizing the structure and relating it to the observed behavior.
              </span>
            </h1>
          </div>

          {/* Diagram */}
          <div className="w-full px-2 md:px-5 mt-12">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              
              {/* Left Section: Structural & Operational Maturity */}
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 lg:mt-32">
                <h2 className="text-2xl md:text-3xl font-medium text-[#0B3041] mb-4">
                  Structural & Operational<br />Maturity
                </h2>
                <ul className="space-y-3 text-base md:text-lg text-[#0B3041]">
                  <li>• Vertical Integration</li>
                  <li>• Centralization &<br />Cohesiveness</li>
                  <li>• Operational & Technology Integration</li>
                  <li>• Ability to Control</li>
                  <li>• Site of Care Coverage</li>
                </ul>
              </div>

              {/* Center Section: IDN Icon with 3D Building */}
              <div className="flex flex-col items-center justify-start space-y-8">
                {/* Top: Organizational Ethos */}
                <div className="text-center space-y-6">
                  <h2 className="text-2xl md:text-3xl font-medium text-[#0B3041] mb-4">
                    Organizational Ethos
                  </h2>
                  <ul className="space-y-3 text-base md:text-lg text-[#0B3041]">
                    <li>• Cost vs. Outcomes</li>
                    <li>• Level of Risk-Bearing</li>
                    <li>• Willingness to Control</li>
                    <li>• Quality Focus</li>
                    <li>• Clinical Influence &<br />Innovation</li>
                  </ul>
                </div>

                {/* Central 3D Building Icon */}
                <div className="relative w-64 h-64 flex items-center justify-center my-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      {/* 3D Building representation using CSS */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7097AA] to-[#5A9BA6] transform -skew-y-12 skew-x-12 shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#5A9BA6] to-[#156082] transform translate-x-4 -translate-y-4 -skew-y-12 shadow-lg"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-[#156082] to-[#0B3041] transform translate-y-4 skew-x-12 shadow-lg"></div>
                      {/* Icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <img src={idnIcon} alt="IDN Health System" className="w-20 h-20 brightness-0 invert" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section: Market Specificity */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:mt-32">
                <h2 className="text-2xl md:text-3xl font-medium text-[#0B3041] mb-4">
                  Market Specificity
                </h2>
                <ul className="space-y-3 text-base md:text-lg text-[#0B3041]">
                  <li>• Market Coverage</li>
                  <li>• Willingness to Control<br />Prescribing and Protocol</li>
                  <li>• Market specific Clinical<br />Influence & Innovation</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IdnHealthSystemDetail;
