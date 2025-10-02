import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import idnDiagram from '@/assets/idn-health-system-diagram-new.png';

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
          <div className="w-full px-2 md:px-5 mt-2">
            <div className="max-w-[1200px] mx-auto">
              <img 
                src={idnDiagram} 
                alt="Health System Archetyping Framework showing Organizational Ethos, Structural & Operational Maturity, and Market Specificity around a central health system building" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default IdnHealthSystemDetail;
