import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';

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
          <div className="w-full px-2 md:px-5 mt-12">
            <div className="max-w-[1200px] mx-auto">
              {/* Grid Layout Container */}
              <div className="grid grid-cols-6 gap-1">
                
                {/* Column 1 - Awareness & Recognition */}
                <div className="flex flex-col items-center">
                  {/* Icon and text above - fixed height */}
                  <div className="flex flex-col items-center justify-end gap-3 mb-6 h-32">
                    <div className="w-16 h-16 rounded-full bg-[#0B3041] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-[#0B3041] text-sm font-medium text-center leading-tight">
                      Where do patients initially present and where are they initially diagnosed?
                    </p>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#9DBFD0] text-white px-6 py-6 text-center font-medium text-base md:text-lg w-full" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 15px 50%)' }}>
                    Awareness &<br />Recognition
                  </div>
                  
                  {/* Empty space below - fixed height */}
                  <div className="h-32 mt-6"></div>
                </div>

                {/* Column 2 - Presentation & Diagnosis */}
                <div className="flex flex-col items-center">
                  {/* Empty space above - fixed height */}
                  <div className="h-32 mb-6"></div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#7AADC4] text-white px-6 py-6 text-center font-medium text-base md:text-lg w-full" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 15px 50%)' }}>
                    Presentation<br />& Diagnosis
                  </div>
                  
                  {/* Icon and text below - fixed height */}
                  <div className="flex flex-col items-center justify-start gap-3 mt-6 h-32">
                    <p className="text-[#0B3041] text-sm font-medium text-center leading-tight">
                      How do patients first become aware of symptoms? How do they seek medical care?
                    </p>
                    <div className="w-16 h-16 rounded-full bg-[#0B3041] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Treatment Selection */}
                <div className="flex flex-col items-center">
                  {/* Icon and text above - fixed height */}
                  <div className="flex flex-col items-center justify-end gap-3 mb-6 h-32">
                    <div className="w-16 h-16 rounded-full border-4 border-[#5A9BA6] bg-white flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#5A9BA6] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-[#0B3041] text-sm font-medium text-center leading-tight">
                      What patient characteristics are most likely to receive your brand?
                    </p>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#5A9BA6] text-white px-6 py-6 text-center font-medium text-base md:text-lg w-full" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 15px 50%)' }}>
                    Treatment<br />Selection
                  </div>
                  
                  {/* Empty space below - fixed height */}
                  <div className="h-32 mt-6"></div>
                </div>

                {/* Column 4 - Brand Selection */}
                <div className="flex flex-col items-center">
                  {/* Empty space above - fixed height */}
                  <div className="h-32 mb-6"></div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#2D7A8F] text-white px-6 py-6 text-center font-medium text-base md:text-lg w-full" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 15px 50%)' }}>
                    Brand<br />Selection
                  </div>
                  
                  {/* Icon and text below - fixed height */}
                  <div className="flex flex-col items-center justify-start gap-3 mt-6 h-32">
                    <p className="text-[#0B3041] text-sm font-medium text-center leading-tight">
                      What patient characteristics and/or external factors influence treatment choice?
                    </p>
                    <div className="w-16 h-16 rounded-full bg-[#5A9BA6] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Column 5 - Brand Access */}
                <div className="flex flex-col items-center">
                  {/* Icon and text above - fixed height */}
                  <div className="flex flex-col items-center justify-end gap-3 mb-6 h-32">
                    <div className="w-16 h-16 border-4 border-[#0B3041] bg-white rotate-45 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#0B3041] -rotate-45" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </div>
                    <p className="text-[#0B3041] text-sm font-medium text-center leading-tight">
                      What are the switching dynamics related to your brand and competitors?
                    </p>
                  </div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#1E5A6B] text-white px-6 py-6 text-center font-medium text-base md:text-lg w-full" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 15px 50%)' }}>
                    Brand<br />Access
                  </div>
                  
                  {/* Empty space below - fixed height */}
                  <div className="h-32 mt-6"></div>
                </div>

                {/* Column 6 - Switching & Progression */}
                <div className="flex flex-col items-center">
                  {/* Empty space above - fixed height */}
                  <div className="h-32 mb-6"></div>
                  
                  {/* Arrow box */}
                  <div className="relative z-10 bg-[#0B3041] text-white px-6 py-6 text-center font-medium text-base md:text-lg w-full" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 15px 50%)' }}>
                    Switching &<br />Progression
                  </div>
                  
                  {/* Icon and text below - fixed height */}
                  <div className="flex flex-col items-center justify-start gap-3 mt-6 h-32">
                    <p className="text-[#0B3041] text-sm font-medium text-center leading-tight">
                      What access hurdles are patients experiencing related to your brand?
                    </p>
                    <div className="w-16 h-16 rounded-full bg-[#0B3041] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
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
