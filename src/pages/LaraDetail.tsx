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
      <div className="w-3/4 mx-auto px-4">
        <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed">
          Analyzing analog drugs is a critical element of understanding market landscape, setting expectations and developing launch benchmarks.
        </p>
      </div>
      
      <div className="w-3/4 mx-auto flex flex-col gap-6 px-4">
        <p className="text-[#0B3041] text-2xl font-bold">
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
            <div className="w-3/4 mx-auto px-4">
              <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed mb-12">
                LARA has been specifically designed to make analog selection a fully-informed, efficient and streamlined exercise.
              </p>
            </div>
            
            <div className="w-3/4 mx-auto flex flex-col gap-6 px-4">
              <h2 className="text-[#0B3041] text-2xl font-bold mb-4">
                Key Features
              </h2>
              
              <div className="flex items-start gap-4 p-2 rounded-md">
                <div className="w-6 h-6 rounded-full border-2 border-[#5A9BA6] flex items-center justify-center flex-shrink-0 mt-0">
                  <svg className="w-4 h-4 text-[#5A9BA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#0B3041] text-2xl font-medium leading-tight">
                  Comprehensive drug repository with key absolute and relative characteristics
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-2 rounded-md">
                <div className="w-6 h-6 rounded-full border-2 border-[#5A9BA6] flex items-center justify-center flex-shrink-0 mt-0">
                  <svg className="w-4 h-4 text-[#5A9BA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#0B3041] text-2xl font-medium leading-tight">
                  Streamlined agentic analog selection workflow
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-2 rounded-md">
                <div className="w-6 h-6 rounded-full border-2 border-[#5A9BA6] flex items-center justify-center flex-shrink-0 mt-0">
                  <svg className="w-4 h-4 text-[#5A9BA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#0B3041] text-2xl font-medium leading-tight">
                  AI chatbot to enable to a conversational selection process
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-2 rounded-md">
                <div className="w-6 h-6 rounded-full border-2 border-[#5A9BA6] flex items-center justify-center flex-shrink-0 mt-0">
                  <svg className="w-4 h-4 text-[#5A9BA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#0B3041] text-2xl font-medium leading-tight">
                  Dual mode operation: Guided suggestions-driven process vs. Fully AI-driven recommendations
                </p>
              </div>
              
              <div className="flex items-start gap-4 p-2 rounded-md">
                <div className="w-6 h-6 rounded-full border-2 border-[#5A9BA6] flex items-center justify-center flex-shrink-0 mt-0">
                  <svg className="w-4 h-4 text-[#5A9BA6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#0B3041] text-2xl font-medium leading-tight">
                  Structured output formats (analog profiles, selection summary & rationale)
                </p>
              </div>
            </div>
          </div>
        );
      case 'how':
        return (
          <div className="w-full flex flex-col items-center gap-12">
            <div className="w-3/4 mx-auto px-4">
              <p className="text-center text-[#0B3041] text-3xl font-light leading-relaxed">
                LARA leverages LLM to both curate/structure the drug repository and to power the agentic analog selection workflow
              </p>
            </div>
            
            <div className="w-3/4 mx-auto px-4 flex flex-col lg:flex-row gap-6 items-stretch">
              {/* Card 1: Conversational AI */}
              <div className="flex-1 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#5A9BA6] text-white p-6 text-center rounded-t-3xl">
                  <h3 className="text-xl font-semibold leading-tight">
                    Conversational AI<br />& Dual Modality
                  </h3>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-3 text-[#0B3041]">
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">AI chatbot for conversational querying and analog selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Parallel templated user input interface (in addition to NL query)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">UI designed for iterative and incremental selection process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Structured exportable outputs with the flexibility to reshape the output</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Agentic RAG */}
              <div className="flex-1 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#5A9BA6] text-white p-6 text-center rounded-t-3xl">
                  <h3 className="text-xl font-semibold leading-tight">
                    Agentic RAG<br />Architecture
                  </h3>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-3 text-[#0B3041]">
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Multi-agent architecture: Query router, retrieval and summarization agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Reduced/structured data + summarized unstructured information to retain context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Query builder tool for simple queries and drug look-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Pre-defined deterministic workflow to reduce agent ramble</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Comprehensive Drug Repository */}
              <div className="flex-1 flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#5A9BA6] text-white p-6 text-center rounded-t-3xl">
                  <h3 className="text-xl font-semibold leading-tight">
                    Comprehensive Drug<br />Repository
                  </h3>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-3 text-[#0B3041]">
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Structured data from OpenFDA, Orange/Purple Book, Rx Norm, NDC Directory.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">LLM based curation and structuring of the FDA labels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Longitudinal event tracking based on regulatory press releases and FDA documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-lg mt-1">•</span>
                      <span className="text-base leading-relaxed">Normalized drug pricing; Derivative drug and market characteristics</span>
                    </li>
                  </ul>
                </div>
              </div>
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
        <div className="w-3/4 px-2.5 pt-24 pb-[30px] mx-auto">
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
        <div className="w-3/4 px-2.5 mx-auto flex flex-col gap-12">
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
