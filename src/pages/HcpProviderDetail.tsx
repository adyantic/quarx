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
            <div className="max-w-[1100px] mx-auto relative">
              {/* Container with border */}
              <div className="relative border-2 border-[#5A9BA6] rounded-[40px] p-12 md:p-20">
                {/* Behavioral label - Left side */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="bg-white px-4 py-2">
                    <p className="text-[#0B3041] text-xl md:text-2xl font-medium tracking-wider" 
                       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      Behavioral
                    </p>
                  </div>
                </div>

                {/* Environmental label - Right side */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <div className="bg-white px-4 py-2">
                    <p className="text-[#0B3041] text-xl md:text-2xl font-medium tracking-wider" 
                       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      Environmental
                    </p>
                  </div>
                </div>

                {/* Hexagonal Layout */}
                <div className="relative w-full aspect-square max-w-[650px] mx-auto">
                  {/* Center HCP Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center border-4 border-[#7097AA] shadow-lg">
                      <img src={hcpIcon} alt="HCP" className="w-20 h-20 md:w-24 md:h-24" />
                    </div>
                  </div>

                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ transform: 'scale(0.88)' }}>
                    <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="80%" y2="23%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="80%" y2="57%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="20%" y2="57%" stroke="#D1D5DB" strokeWidth="2" />
                    <line x1="50%" y1="50%" x2="20%" y2="23%" stroke="#D1D5DB" strokeWidth="2" />
                    
                    <circle cx="50%" cy="12%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="80%" cy="23%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="80%" cy="57%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="50%" cy="88%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="20%" cy="57%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                    <circle cx="20%" cy="23%" r="8" fill="white" stroke="#D1D5DB" strokeWidth="2" />
                  </svg>

                  {/* Top - Market Potential */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[10%]">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-[#5A9BA6] flex items-center justify-center text-white text-center p-4 font-medium text-base md:text-lg shadow-lg"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Market<br />Potential</span>
                    </div>
                  </div>

                  {/* Top Right - Treatment Approach */}
                  <div className="absolute top-[8%] right-[2%]">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-[#2D7A8F] flex items-center justify-center text-white text-center p-4 font-medium text-base md:text-lg shadow-lg"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Treatment<br />Approach</span>
                    </div>
                  </div>

                  {/* Left - Institutional Control */}
                  <div className="absolute top-[35%] left-0 -translate-x-[12%]">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-[#9B9BC1] flex items-center justify-center text-white text-center p-4 font-medium text-base md:text-lg shadow-lg"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Institutional<br />Control</span>
                    </div>
                  </div>

                  {/* Right Top - Payer Favorability */}
                  <div className="absolute top-[32%] right-0 translate-x-[8%]">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-[#C1B5D9] flex items-center justify-center text-white text-center p-3 font-medium text-sm md:text-base shadow-lg"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Payer<br />Favorability<br />& Control</span>
                    </div>
                  </div>

                  {/* Bottom Left - New Therapy Adoption */}
                  <div className="absolute bottom-[8%] left-[8%]">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-[#C1B5D9] flex items-center justify-center text-white text-center p-3 font-medium text-sm md:text-base shadow-lg"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>New Therapy<br />Adoption</span>
                    </div>
                  </div>

                  {/* Bottom Right - Access Resilience */}
                  <div className="absolute bottom-[18%] right-[5%]">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-[#8B8BAE] flex items-center justify-center text-white text-center p-4 font-medium text-base md:text-lg shadow-lg"
                         style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}>
                      <span>Access<br />Resilience</span>
                    </div>
                  </div>

                  {/* Bottom Center - Peer Influence */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[12%]">
                    <div className="w-32 h-32 md:w-36 md:h-36 bg-[#5A9BA6] flex items-center justify-center text-white text-center p-3 font-medium text-sm md:text-base shadow-lg"
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
