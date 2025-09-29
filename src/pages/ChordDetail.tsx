import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import ChordIcon from '@/assets/CHORD.svg';

const ChordDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('why');

  const renderWhyContent = () => (
    <div className="w-full flex flex-col items-center gap-8">
      <p className="text-center text-[#0B3041] text-xl md:text-2xl font-medium max-w-4xl leading-relaxed">
        To optimize both payer and provider contracting strategy for drugs administered in the hospital 
        outpatient setting through the analysis of
      </p>
      
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-[#5A9BA6] rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-[#0B3041] text-lg md:text-xl font-medium">
            Variation in negotiated rates for competing drugs across payers and providers
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-[#5A9BA6] rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-[#0B3041] text-lg md:text-xl font-medium">
            Variation in negotiated rates for competing drugs across payers and providers
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-[#5A9BA6] rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-[#0B3041] text-lg md:text-xl font-medium">
            Relationship between NCR and product preference
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-[#5A9BA6] rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-[#0B3041] text-lg md:text-xl font-medium">
            Provider discounts to position a favorable NCR vis-à-vis competition
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 bg-[#5A9BA6] rounded-full mt-2 flex-shrink-0"></div>
          <p className="text-[#0B3041] text-lg md:text-xl font-medium">
            Level of homogeneity in negotiated rates in a Health system
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
          <div className="w-full flex items-center justify-center py-20">
            <p className="text-[#0B3041] text-xl">What content coming soon...</p>
          </div>
        );
      case 'how':
        return (
          <div className="w-full flex items-center justify-center py-20">
            <p className="text-[#0B3041] text-xl">How content coming soon...</p>
          </div>
        );
      default:
        return renderWhyContent();
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      <main className="min-h-[90vh] py-8 md:py-12 px-2.5 flex flex-col justify-center items-center gap-10">
        <div className="w-full max-w-[1440px] px-2.5 py-12 flex flex-col gap-12">
          {/* Back to Products */}
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 text-[#5A9BA6] hover:text-[#5A9BA6]/80 transition-colors self-start"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-lg font-medium">Back to Products</span>
          </button>
          
          {/* Title and Icon */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <img 
                src={ChordIcon} 
                alt="CHORD icon"
                className="w-16 h-16" 
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-[#0B3041] text-3xl md:text-4xl font-medium">
                  CHORD (Cross-channel Hospital Outpatient Reimbursement Database)
                </h1>
                <p className="text-[#5A9BA6] text-xl md:text-2xl font-medium">
                  is a comprehensive analytics-ready database of payer-provider negotiated rates
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-0">
            <button
              onClick={() => setActiveTab('why')}
              className={`px-8 py-3 text-lg font-medium transition-colors ${
                activeTab === 'why'
                  ? 'bg-[#5A9BA6] text-white'
                  : 'bg-[#E5E5E5] text-[#0B3041] hover:bg-[#D0D0D0]'
              }`}
            >
              WHY?
            </button>
            <button
              onClick={() => setActiveTab('what')}
              className={`px-8 py-3 text-lg font-medium transition-colors ${
                activeTab === 'what'
                  ? 'bg-[#5A9BA6] text-white'
                  : 'bg-[#E5E5E5] text-[#0B3041] hover:bg-[#D0D0D0]'
              }`}
            >
              WHAT?
            </button>
            <button
              onClick={() => setActiveTab('how')}
              className={`px-8 py-3 text-lg font-medium transition-colors ${
                activeTab === 'how'
                  ? 'bg-[#5A9BA6] text-white'
                  : 'bg-[#E5E5E5] text-[#0B3041] hover:bg-[#D0D0D0]'
              }`}
            >
              HOW?
            </button>
          </div>
          
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

export default ChordDetail;