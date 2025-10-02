import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import patientIcon from '@/assets/patient-icon.svg';
import treatmentIcon from '@/assets/treatment-icon.svg';
import brandAccessIcon from '@/assets/brand-access-icon.svg';
import presentationIcon from '@/assets/presentation-icon.svg';
import brandSelectionIcon from '@/assets/brand-selection-icon.svg';
import switchingIcon from '@/assets/switching-icon.svg';

const PatientJourneyDetail: React.FC = () => {
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
                Our quantitative Patient Journey and Segmentation framework captures cross-stakeholder dynamics of treatment choice to{' '}
              </span>
              <span className="text-[#5A9BA6]">
                identify discrete target patient segments
              </span>
            </h1>
          </div>

          {/* Journey Flow Diagram */}
          <div className="w-full px-4 md:px-5 mt-6 md:mt-12">
            <div className="max-w-[1200px] mx-auto">
              {/* Grid Layout Container - Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-6 lg:gap-1">
                
                {/* Column 1 - Awareness & Recognition */}
                <div className="flex flex-col items-center">
                  {/* Icon above */}
                  <div className="flex flex-col items-center justify-end mb-4 md:mb-6 lg:h-32">
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                      <img src={patientIcon} alt="Patient" className="w-full h-full" />
                    </div>
                  </div>
                  
                  {/* Arrow box - vertical arrow on mobile, horizontal on desktop */}
                  <div className="relative z-10 bg-[#9DBFD0] text-white px-4 py-6 md:px-6 lg:py-6 text-center font-medium text-sm md:text-base lg:text-lg w-full [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),50%_100%,0_calc(100%-15px))] lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%,15px_50%)]">
                    Awareness &<br />Recognition
                  </div>
                  
                  {/* Text below */}
                  <div className="flex flex-col items-center justify-start mt-4 md:mt-6 lg:h-32">
                    <p className="text-[#0B3041] text-xs md:text-sm font-medium text-center leading-tight">
                      How do patients first become aware of symptoms? How do they seek medical care?
                    </p>
                  </div>
                </div>

                {/* Column 2 - Presentation & Diagnosis */}
                <div className="flex flex-col items-center">
                  {/* Text above on desktop, icon on mobile */}
                  <div className="flex flex-col items-center justify-end mb-4 md:mb-6 lg:h-32">
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center lg:hidden">
                      <img src={presentationIcon} alt="Presentation & Diagnosis" className="w-full h-full" />
                    </div>
                    <p className="hidden lg:block text-[#0B3041] text-sm font-medium text-center leading-tight">
                      Where do patients initially present and where are they initially diagnosed?
                    </p>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#7AADC4] text-white px-4 py-6 md:px-6 lg:py-6 text-center font-medium text-sm md:text-base lg:text-lg w-full [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),50%_100%,0_calc(100%-15px))] lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%,15px_50%)]">
                    Presentation<br />& Diagnosis
                  </div>
                  
                  {/* Icon below on desktop, text on mobile */}
                  <div className="flex flex-col items-center justify-start mt-4 md:mt-6 lg:h-32">
                    <p className="lg:hidden text-[#0B3041] text-xs md:text-sm font-medium text-center leading-tight">
                      Where do patients initially present and where are they initially diagnosed?
                    </p>
                    <div className="hidden lg:flex w-20 h-20 items-center justify-center">
                      <img src={presentationIcon} alt="Presentation & Diagnosis" className="w-full h-full" />
                    </div>
                  </div>
                </div>

                {/* Column 3 - Treatment Selection */}
                <div className="flex flex-col items-center">
                  {/* Icon above */}
                  <div className="flex flex-col items-center justify-end mb-4 md:mb-6 lg:h-32">
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                      <img src={treatmentIcon} alt="Treatment Selection" className="w-full h-full" />
                    </div>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#5A9BA6] text-white px-4 py-6 md:px-6 lg:py-6 text-center font-medium text-sm md:text-base lg:text-lg w-full [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),50%_100%,0_calc(100%-15px))] lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%,15px_50%)]">
                    Treatment<br />Selection
                  </div>
                  
                  {/* Text below */}
                  <div className="flex flex-col items-center justify-start mt-4 md:mt-6 lg:h-32">
                    <p className="text-[#0B3041] text-xs md:text-sm font-medium text-center leading-tight">
                      What patient characteristics are most likely to receive your brand?
                    </p>
                  </div>
                </div>

                {/* Column 4 - Brand Selection */}
                <div className="flex flex-col items-center">
                  {/* Text above on desktop, icon on mobile */}
                  <div className="flex flex-col items-center justify-end mb-4 md:mb-6 lg:h-32">
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center lg:hidden">
                      <img src={brandSelectionIcon} alt="Brand Selection" className="w-full h-full" />
                    </div>
                    <p className="hidden lg:block text-[#0B3041] text-sm font-medium text-center leading-tight">
                      What patient characteristics and/or external factors influence treatment choice?
                    </p>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#2D7A8F] text-white px-4 py-6 md:px-6 lg:py-6 text-center font-medium text-sm md:text-base lg:text-lg w-full [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),50%_100%,0_calc(100%-15px))] lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%,15px_50%)]">
                    Brand<br />Selection
                  </div>
                  
                  {/* Icon below on desktop, text on mobile */}
                  <div className="flex flex-col items-center justify-start mt-4 md:mt-6 lg:h-32">
                    <p className="lg:hidden text-[#0B3041] text-xs md:text-sm font-medium text-center leading-tight">
                      What patient characteristics and/or external factors influence treatment choice?
                    </p>
                    <div className="hidden lg:flex w-20 h-20 items-center justify-center">
                      <img src={brandSelectionIcon} alt="Brand Selection" className="w-full h-full" />
                    </div>
                  </div>
                </div>

                {/* Column 5 - Brand Access */}
                <div className="flex flex-col items-center">
                  {/* Icon above */}
                  <div className="flex flex-col items-center justify-end mb-4 md:mb-6 lg:h-32">
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                      <img src={brandAccessIcon} alt="Brand Access" className="w-full h-full" />
                    </div>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#1E5A6B] text-white px-4 py-6 md:px-6 lg:py-6 text-center font-medium text-sm md:text-base lg:text-lg w-full [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),50%_100%,0_calc(100%-15px))] lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%,15px_50%)]">
                    Brand<br />Access
                  </div>
                  
                  {/* Text below */}
                  <div className="flex flex-col items-center justify-start mt-4 md:mt-6 lg:h-32">
                    <p className="text-[#0B3041] text-xs md:text-sm font-medium text-center leading-tight">
                      What access hurdles are patients experiencing related to your brand?
                    </p>
                  </div>
                </div>

                {/* Column 6 - Switching & Progression */}
                <div className="flex flex-col items-center">
                  {/* Text above on desktop, icon on mobile */}
                  <div className="flex flex-col items-center justify-end mb-4 md:mb-6 lg:h-32">
                    <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center lg:hidden">
                      <img src={switchingIcon} alt="Switching & Progression" className="w-full h-full" />
                    </div>
                    <p className="hidden lg:block text-[#0B3041] text-sm font-medium text-center leading-tight">
                      What are the switching dynamics related to your brand and competitors?
                    </p>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#0B3041] text-white px-4 py-6 md:px-6 lg:py-6 text-center font-medium text-sm md:text-base lg:text-lg w-full [clip-path:polygon(0_0,100%_0,100%_calc(100%-15px),50%_100%,0_calc(100%-15px))] lg:[clip-path:polygon(0_0,calc(100%-20px)_0,100%_50%,calc(100%-20px)_100%,0_100%,15px_50%)]">
                    Switching &<br />Progression
                  </div>
                  
                  {/* Icon below on desktop, text on mobile */}
                  <div className="flex flex-col items-center justify-start mt-4 md:mt-6 lg:h-32">
                    <p className="lg:hidden text-[#0B3041] text-xs md:text-sm font-medium text-center leading-tight">
                      What are the switching dynamics related to your brand and competitors?
                    </p>
                    <div className="hidden lg:flex w-20 h-20 items-center justify-center">
                      <img src={switchingIcon} alt="Switching & Progression" className="w-full h-full" />
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

export default PatientJourneyDetail;
