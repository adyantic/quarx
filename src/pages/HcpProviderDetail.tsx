import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import hcpDiagram from '@/assets/hcp-segmentation-diagram.png';

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
            <div className="max-w-[1200px] mx-auto">
              <img 
                src={hcpDiagram} 
                alt="HCP Segmentation Framework showing behavioral and environmental traits including Market Potential, Treatment Approach, Institutional Control, Payer Favorability & Control, New Therapy Adoption, Access Resilience, and Peer Influence & Social Multiplier" 
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

export default HcpProviderDetail;
