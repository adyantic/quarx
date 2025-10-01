import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft } from 'lucide-react';
import LaraIcon from '@/assets/LARA.svg';

const LaraDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('why');

  const renderWhyContent = () => (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full max-w-[1440px] px-4">
        <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed">
          Analyzing analog drugs is a critical element of understanding market landscape, setting expectations and developing launch benchmarks.
        </p>
      </div>
      
      <div className="w-full max-w-4xl flex flex-col gap-6 px-4">
        <p className="text-[#0B3041] text-2xl font-medium">
          But the analog selection is often rushed and handled sub-optimally due to the following challenges:
        </p>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Absence of a single comprehensive repository of drugs which captures all the key criteria and characteristics
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Critical drug and market characteristics are only available in an unstructured form need significant secondary research
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Lack of a defined workflow and process for analog selection
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
              <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed">
                WHAT content coming soon
              </p>
            </div>
          </div>
        );
      case 'how':
        return (
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full max-w-[1440px] px-4">
              <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed">
                HOW content coming soon
              </p>
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
              <img src={LaraIcon} alt="LARA icon" className="w-16 h-16" />
              <div className="flex flex-col gap-2">
                <h1 className="text-[#0B3041] text-3xl md:text-4xl font-medium leading-tight">
                  <span className="font-medium">LARA</span> (Launch Analog Recommendation Agent) is an AI-enabled tool <span className="text-[#5A9BA6]">to identify analog drugs to plan and benchmark launch access and performance</span>
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

export default LaraDetail;
