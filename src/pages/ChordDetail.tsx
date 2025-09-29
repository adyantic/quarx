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
            Variation in negotiated rates for competing drugs across payers and providers
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Variation in negotiated rates for competing drugs across payers and providers
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Relationship between NCR and product preference
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
            Provider discounts to position a favorable NCR vis-à-vis competition
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-md">
          <div className="w-2.5 h-2.5 bg-[#156082] rounded-sm flex-shrink-0"></div>
          <p className="text-[#0B3041] text-2xl font-medium">
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
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side - Three columns */}
            <div className="flex-1 flex flex-col sm:flex-row gap-6 lg:gap-8">
              {/* Numbers Column */}
              <div className="flex-1 bg-[#B8E6E1] rounded-lg p-6 flex flex-col items-center gap-4">
                <h3 className="text-[#0B3041] text-xl font-medium mb-4">NUMBERS</h3>
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#0B3041] rounded flex items-center justify-center">
                      <span className="text-white text-xs">📊</span>
                    </div>
                    <div>
                      <span className="text-[#0B3041] text-lg font-medium">~1 Billion</span>
                      <span className="text-[#0B3041] text-sm ml-1">Records</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#D8B4FE] rounded flex items-center justify-center">
                      <span className="text-white text-xs">🏥</span>
                    </div>
                    <div>
                      <span className="text-[#0B3041] text-lg font-medium">~6,000</span>
                      <span className="text-[#0B3041] text-sm ml-1">Hospitals</span>
                    </div>
                  </div>
                  <div className="text-[#0B3041] text-sm ml-9">~500 Health Systems</div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#5A9BA6] rounded flex items-center justify-center">
                      <span className="text-white text-xs">💰</span>
                    </div>
                    <div>
                      <span className="text-[#0B3041] text-lg font-medium">~2,500</span>
                      <span className="text-[#0B3041] text-sm ml-1">Payers</span>
                    </div>
                  </div>
                  <div className="text-[#0B3041] text-sm ml-9">&gt;50,000 Plans</div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#93C5FD] rounded flex items-center justify-center">
                      <span className="text-white text-xs">📋</span>
                    </div>
                    <div>
                      <span className="text-[#0B3041] text-lg font-medium">&gt;150,000</span>
                      <span className="text-[#0B3041] text-sm ml-1">Codes</span>
                    </div>
                  </div>
                  <div className="text-[#0B3041] text-xs mt-2">• HCPCS/CPT • NDC • APC • ICD-RPCS</div>
                </div>
              </div>

              {/* Features Column */}
              <div className="flex-1 bg-[#B8E6E1] rounded-lg p-6 flex flex-col items-center gap-4">
                <h3 className="text-[#0B3041] text-xl font-medium mb-4">FEATURES</h3>
                <div className="space-y-6 w-full">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <div className="text-[#0B3041] text-sm font-medium">ANALYTICS READY DATA MODEL</div>
                      <div className="text-[#0B3041] text-xs">Standardized Clean and Quality Assured Data</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <div className="text-[#0B3041] text-sm font-medium">MAXIMUM DATA RESOLUTION</div>
                      <div className="text-[#0B3041] text-xs">Able to Distinguish Rates for the Same Code at the Same Provider</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <div className="text-[#0B3041] text-sm font-medium">INTEGRATED HOSPITAL & PRODUCT PROFILES</div>
                      <div className="text-[#0B3041] text-xs">Augment Rate Data with Key Descriptive Characteristics</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <div className="text-[#0B3041] text-sm font-medium">GEOGRAPHIC DRILLDOWN</div>
                      <div className="text-[#0B3041] text-xs">Compare Rates at Regional and Local Levels Within a State</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#156082] rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <div>
                      <div className="text-[#0B3041] text-sm font-medium">CLOUD-BASED DASHBOARD ACCESS</div>
                      <div className="text-[#0B3041] text-xs">Dashboard is Optimized via Cloud Based that Delivers Reports</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Levels Column */}
              <div className="flex-1 bg-[#B8E6E1] rounded-lg p-6 flex flex-col items-center gap-4">
                <h3 className="text-[#0B3041] text-xl font-medium mb-4">LEVELS</h3>
                <div className="space-y-3 w-full">
                  <div className="bg-[#156082] text-white p-2 rounded text-center text-sm font-medium">
                    Level 1: Channel
                  </div>
                  <div className="bg-[#5A9BA6] text-white p-2 rounded text-center text-sm font-medium">
                    Level 2: Payer
                  </div>
                  <div className="bg-[#7FB3D3] text-white p-2 rounded text-center text-sm font-medium">
                    Level 3: Plan
                  </div>
                  <div className="bg-[#9FC5E8] text-white p-2 rounded text-center text-sm font-medium">
                    Level 4: Health System
                  </div>
                  <div className="bg-[#B6D7EE] text-white p-2 rounded text-center text-sm font-medium">
                    Level 5: Local Geo
                  </div>
                  <div className="bg-[#CFE2F3] text-[#0B3041] p-2 rounded text-center text-sm font-medium">
                    Level 6: Hospital
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Description points */}
            <div className="lg:w-80 space-y-6">
              <div>
                <p className="text-[#0B3041] text-sm font-medium">Payer negotiated rates for all hospital outpatient <span className="text-[#5A9BA6]">and inpatient procedures at the plan level</span></p>
              </div>
              <div>
                <p className="text-[#0B3041] text-sm">Payer reimbursement methodology by plan, provider and procedure <span className="text-[#5A9BA6]">(Fee Schedule vs % Billed Charges, Case Rate, Per Diem etc.)</span></p>
              </div>
              <div>
                <p className="text-[#0B3041] text-sm font-medium">Negotiated rates for APC based payments</p>
              </div>
              <div>
                <p className="text-[#0B3041] text-sm">Hospitals that are operationally and technologically integrated <span className="text-[#5A9BA6]">(set up with the same Charge Data Master)</span></p>
              </div>
              <div>
                <p className="text-[#0B3041] text-sm font-medium">Level of uniformity it negotiated rates across Hospitals in a Health System</p>
              </div>
            </div>
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
                <p className="text-[#5A9BA6] text-4xl font-medium">
                  is a comprehensive analytics-ready database of payer-provider negotiated rates
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-20">
            <button
              onClick={() => setActiveTab('why')}
              className={`w-full sm:w-50 h-12 px-6 sm:px-10 py-4 text-lg sm:text-2xl font-medium transition-colors shadow-lg flex items-center justify-center ${
                activeTab === 'why'
                  ? 'bg-[#156082] text-white'
                  : 'bg-[#F1F4F1] text-[#156082]'
              }`}
            >
              WHY?
            </button>
            <button
              onClick={() => setActiveTab('what')}
              className={`w-full sm:w-50 h-12 px-6 sm:px-10 py-4 text-lg sm:text-2xl font-medium transition-colors shadow-lg flex items-center justify-center ${
                activeTab === 'what'
                  ? 'bg-[#156082] text-white'
                  : 'bg-[#F1F4F1] text-[#156082]'
              }`}
            >
              WHAT?
            </button>
            <button
              onClick={() => setActiveTab('how')}
              className={`w-full sm:w-50 h-12 px-6 sm:px-10 py-4 text-lg sm:text-2xl font-medium transition-colors shadow-lg flex items-center justify-center ${
                activeTab === 'how'
                  ? 'bg-[#156082] text-white'
                  : 'bg-[#F1F4F1] text-[#156082]'
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