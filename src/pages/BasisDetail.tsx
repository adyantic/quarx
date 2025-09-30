import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import BasisIcon from '@/assets/BASIS.svg';

const BasisDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('why');

  const renderWhyContent = () => (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full max-w-[1440px] px-4">
        <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed">
          To optimize both payer and provider contracting strategy for drugs administered in the hospital 
          outpatient setting through the analysis of
        </p>
      </div>
      
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Quantifying the impact of access on brand demand and it's implication on GTN
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Incorporating real world data driven sensitivities and financial rigor into evaluating contracting scenarios
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Providing flexibility to model cross-channel implications of rebate spend allocations as well as individual account level contracts
          </p>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'why':
        return renderWhyContent();
      case 'what':
        return (
          <div className="w-full flex flex-col items-center gap-8">
            <p className="text-center text-[#0B3041] text-2xl">
              WHAT content coming soon...
            </p>
          </div>
        );
      case 'how':
        return (
          <div className="w-full flex flex-col items-center gap-8">
            <p className="text-center text-[#0B3041] text-2xl">
              HOW content coming soon...
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 w-full">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back button */}
          <button
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-[#5A9BA6] text-xl mb-8 hover:text-[#40A3BD] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
            Back to Products
          </button>
          
          {/* Title and Icon */}
          <div className="flex flex-col items-center gap-8 mb-8 pt-5 pb-5">
            <div className="flex items-center gap-6">
              <img src={BasisIcon} alt="BASIS icon" className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h1 className="text-[#0B3041] text-4xl md:text-5xl font-light leading-tight">
                  <span className="font-medium">BASIS</span> (Brand Access Strategy Impact Simulator) is a structure-driven simulation tool
                </h1>
              </div>
            </div>
            <p className="text-[#5A9BA6] text-3xl md:text-4xl font-light text-center">
              to quantify the impact of access shifts on brand utilization & GTN
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('why')}
              className={`px-12 py-3 text-2xl font-light transition-all ${
                activeTab === 'why'
                  ? 'bg-[#156082] text-white'
                  : 'bg-[#E8E8E8] text-[#0B3041] hover:bg-[#D0D0D0]'
              }`}
            >
              WHY?
            </button>
            <button
              onClick={() => setActiveTab('what')}
              className={`px-12 py-3 text-2xl font-light transition-all ${
                activeTab === 'what'
                  ? 'bg-[#156082] text-white'
                  : 'bg-[#E8E8E8] text-[#0B3041] hover:bg-[#D0D0D0]'
              }`}
            >
              WHAT?
            </button>
            <button
              onClick={() => setActiveTab('how')}
              className={`px-12 py-3 text-2xl font-light transition-all ${
                activeTab === 'how'
                  ? 'bg-[#156082] text-white'
                  : 'bg-[#E8E8E8] text-[#0B3041] hover:bg-[#D0D0D0]'
              }`}
            >
              HOW?
            </button>
          </div>

          {/* Content */}
          <div className="pb-16">
            {renderContent()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BasisDetail;
