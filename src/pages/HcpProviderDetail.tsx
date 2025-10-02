import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import hcpIcon from '@/assets/hcp-icon.svg';

const HcpProviderDetail: React.FC = () => {
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
              <span className="text-[#0B3041]">
                Our HCP Segmentation combines the provider's behavioral and environmental traits to{' '}
              </span>
              <span className="text-[#5A9BA6]">
                identify high value targets and their engagement imperatives
              </span>
            </h1>
          </div>

          {/* Hexagonal Diagram */}
          <div className="w-full px-2 md:px-5 mt-12">
            <div className="max-w-[1000px] mx-auto relative">
              {/* Container with border */}
              <div className="relative border-2 border-[#5A9BA6] rounded-[40px] p-8 md:p-16">
                {/* Behavioral label - Left side */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="bg-white px-4 py-2">
                    <p className="text-[#0B3041] text-lg md:text-2xl font-medium tracking-wider" 
                       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      Behavioral
                    </p>
                  </div>
                </div>

                {/* Environmental label - Right side */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <div className="bg-white px-4 py-2">
                    <p className="text-[#0B3041] text-lg md:text-2xl font-medium tracking-wider" 
                       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      Environmental
                    </p>
                  </div>
                </div>

                {/* Hexagonal Layout */}
                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                  {/* Center HCP Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center border-4 border-[#7097AA]">
                      <img src={hcpIcon} alt="HCP" className="w-16 h-16 md:w-20 md:h-20" />
                    </div>
                  </div>

                  {/* Connecting lines (white circles at connection points) */}
                  <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(0.85)' }}>
                    {/* Lines from center to each hexagon */}
                    <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="78%" y2="25%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="78%" y2="55%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="22%" y2="55%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="22%" y2="25%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="65%" y2="70%" stroke="#D1D5DB" strokeWidth="2" />
                    
                    {/* Connection point circles */}
                    <circle cx="50%" cy="15%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="78%" cy="25%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="78%" cy="55%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="50%" cy="85%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="22%" cy="55%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="22%" cy="25%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="65%" cy="70%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                  </svg>

                  {/* Top Left - Market Potential (Teal) */}
                  <div className="absolute top-0 left-[15%] -translate-x-1/2" style={{ transform: 'translateX(-50%)' }}>
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#5A9BA6] flex items-center justify-center text-white text-center p-4 font-medium text-sm md:text-base"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Market<br />Potential</span>
                    </div>
                  </div>

                  {/* Top Right - Treatment Approach (Dark Teal) */}
                  <div className="absolute top-[5%] right-[8%]">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#2D7A8F] flex items-center justify-center text-white text-center p-4 font-medium text-sm md:text-base"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Treatment<br />Approach</span>
                    </div>
                  </div>

                  {/* Left - Institutional Control (Light Purple) */}
                  <div className="absolute top-[35%] left-0 -translate-x-[10%]">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#B4B4DC] flex items-center justify-center text-white text-center p-4 font-medium text-sm md:text-base"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Institutional<br />Control</span>
                    </div>
                  </div>

                  {/* Right Top - Payer Favorability (Light Purple) */}
                  <div className="absolute top-[28%] right-0 translate-x-[5%]">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#C8B4DC] flex items-center justify-center text-white text-center p-3 font-medium text-xs md:text-sm"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Payer<br />Favorability<br />& Control</span>
                    </div>
                  </div>

                  {/* Bottom Left - New Therapy Adoption (Light Purple) */}
                  <div className="absolute bottom-[12%] left-[8%]">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#C8B4DC] flex items-center justify-center text-white text-center p-3 font-medium text-xs md:text-sm"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>New Therapy<br />Adoption</span>
                    </div>
                  </div>

                  {/* Bottom Right - Access Resilience (Light Purple) */}
                  <div className="absolute bottom-[18%] right-[5%]">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#B4B4DC] flex items-center justify-center text-white text-center p-4 font-medium text-sm md:text-base"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Access<br />Resilience</span>
                    </div>
                  </div>

                  {/* Bottom Center - Peer Influence (Teal) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[10%]">
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-[#5A9BA6] flex items-center justify-center text-white text-center p-3 font-medium text-xs md:text-sm"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Peer Influence<br />& Social<br />Multiplier</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HcpProviderDetail;
