import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import BasisIcon from '@/assets/BASIS.svg';
import BasisWhatImg1 from '@/assets/basis-what-img1.png';
import BasisWhatImg2 from '@/assets/basis-what-img2.png';
import BasisHowFlowDiagram from '@/components/BasisHowFlowDiagram';

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
            <div className="w-full max-w-[1440px] px-4">
              <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed mb-8">
                BASIS enables rapid scenario evaluation to identify optimal contracting strategies
              </p>
            </div>
            
            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-6 px-4 items-stretch">
              {/* Left Image - Navigation/Form */}
              <div className="flex-[0.3] flex justify-center h-[500px]">
                <img 
                  src={BasisWhatImg1} 
                  alt="BASIS Navigation and Target Access Inputs form" 
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
              
              {/* Right Image - Charts */}
              <div className="flex-[0.7] flex justify-center h-[500px]">
                <img 
                  src={BasisWhatImg2} 
                  alt="BASIS scenario comparison charts showing sales and patient volume analysis" 
                  className="h-full w-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        );
      case 'how':
        return (
          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-full max-w-[1440px] px-4">
              <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed">
                Multiple payer, provider and patient sensitivity parameters are structured as inputs into the model to quantify the impact of access changes
              </p>
            </div>
            
            <div className="w-full max-w-[1440px] px-4 flex justify-center">
              <BasisHowFlowDiagram />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      {/* Header Section */}
      <div className="bg-white">
        <div className="w-full max-w-[1440px] px-2.5 pt-24 pb-[30px] mx-auto">
          {/* Back to Products */}
          <button 
            onClick={() => navigate('/products')} 
            className="flex items-center gap-2 text-[#5A9BA6] hover:text-[#5A9BA6]/80 transition-colors mb-8 bg-white py-2 rounded-md"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-lg font-medium">Back to Products</span>
          </button>
          
          {/* Title and Icon */}
          <div className="flex flex-col items-center gap-8 mb-8 pt-5 pb-5">
            <div className="flex items-center gap-6">
              <img src={BasisIcon} alt="BASIS icon" className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h1 className="text-[#0B3041] text-3xl md:text-4xl font-medium leading-tight">
                  <span className="font-medium">BASIS</span> (Brand Access Strategy Impact Simulator) is a structure-driven simulation tool <span className="text-[#5A9BA6]">to quantify the impact of access shifts on brand utilization & GTN</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-20">
            <button onClick={() => setActiveTab('why')} className={`w-full sm:w-50 h-12 px-6 sm:px-10 py-4 text-lg sm:text-2xl font-medium transition-colors shadow-lg flex items-center justify-center ${activeTab === 'why' ? 'bg-[#156082] text-white' : 'bg-[#F1F4F1] text-[#156082]'}`}>
              WHY?
            </button>
            <button onClick={() => setActiveTab('what')} className={`w-full sm:w-50 h-12 px-6 sm:px-10 py-4 text-lg sm:text-2xl font-medium transition-colors shadow-lg flex items-center justify-center ${activeTab === 'what' ? 'bg-[#156082] text-white' : 'bg-[#F1F4F1] text-[#156082]'}`}>
              WHAT?
            </button>
            <button onClick={() => setActiveTab('how')} className={`w-full sm:w-50 h-12 px-6 sm:px-10 py-4 text-lg sm:text-2xl font-medium transition-colors shadow-lg flex items-center justify-center ${activeTab === 'how' ? 'bg-[#156082] text-white' : 'bg-[#F1F4F1] text-[#156082]'}`}>
              HOW?
            </button>
          </div>
        </div>
      </div>
      
      <main className="flex-1 mt-[30px] py-[30px] px-2.5 flex flex-col items-center gap-10">
        <div className="w-full max-w-[1440px] px-2.5 flex flex-col gap-12">
          {/* Content */}
          <div className="w-full flex justify-center">
            {renderContent()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BasisDetail;
