import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft, Database, Building2, Shield, ClipboardList } from 'lucide-react';
import ChordIcon from '@/assets/CHORD.svg';
import FeaturesInfographic from '@/assets/features-infographic.png';
import NumbersInfographic from '@/assets/numbers-infographic.png';

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
              <div className="flex-1 max-w-xs">
                {/* Header */}
                <div className="bg-[#40A3BD] text-white text-center py-3 text-lg font-medium">
                  NUMBERS
                </div>
                
                {/* Records Section */}
                <div className="bg-[#EBFFFF] p-4 flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Database className="w-6 h-6 text-[#16A085]" />
                  </div>
                  <div>
                    <span className="text-[#16A085] text-xl font-bold">~1 Billion</span>
                    <span className="text-[#0B3041] text-lg ml-2">Records</span>
                  </div>
                </div>
                
                {/* Hospitals Section */}
                <div className="bg-[#FFE9F1] p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#16A085]" />
                    </div>
                    <div>
                      <span className="text-[#16A085] text-xl font-bold">~6,000</span>
                      <span className="text-[#0B3041] text-lg ml-2">Hospitals</span>
                    </div>
                  </div>
                  <div className="ml-11">
                    <span className="text-[#16A085] text-xl font-bold">~500</span>
                    <span className="text-[#0B3041] text-lg ml-2">Health Systems</span>
                  </div>
                </div>
                
                {/* Payers Section */}
                <div className="bg-[#EBFFFF] p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#16A085]" />
                    </div>
                    <div>
                      <span className="text-[#16A085] text-xl font-bold">~2,500</span>
                      <span className="text-[#0B3041] text-lg ml-2">Payers</span>
                    </div>
                  </div>
                  <div className="ml-11">
                    <span className="text-[#16A085] text-xl font-bold">&gt;50,000</span>
                    <span className="text-[#0B3041] text-lg ml-2">Plans</span>
                  </div>
                </div>
                
                {/* Codes Section */}
                <div className="bg-[#D3FAFB] p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <ClipboardList className="w-6 h-6 text-[#16A085]" />
                    </div>
                    <div>
                      <span className="text-[#16A085] text-xl font-bold">&gt;150,000</span>
                      <span className="text-[#0B3041] text-lg ml-2">Codes</span>
                    </div>
                  </div>
                  <div className="ml-11 text-[#0B3041] text-sm">
                    <div>• HCPCS/CPT</div>
                    <div>• NDC</div>
                    <div>• APC</div>
                    <div>• ICD10PCS</div>
                  </div>
                </div>
                
                {/* Reimbursement Methodology */}
                <div className="bg-[#EBFFFF] p-4 text-center">
                  <div className="text-[#16A085] font-bold text-sm mb-1">Reimbursement Methodology</div>
                  <div className="text-[#4A5568] text-xs">Fee Schedule | % of Billed Charges | Case Rate | Per Diem</div>
                </div>
                
                {/* Procedure Modifiers */}
                <div className="bg-[#EBFFFF] p-4 text-center">
                  <div className="text-[#16A085] font-bold text-sm mb-1">Procedure Modifiers</div>
                  <div className="text-[#4A5568] text-xs">340B | Drug Waste | Quantity</div>
                </div>
              </div>

              {/* Features Column */}
              <div className="flex-1 max-w-xs">
                {/* Header */}
                <div className="bg-[#40A3BD] text-white text-center py-3 text-lg font-medium">
                  FEATURES
                </div>
                
                <div className="bg-white p-6 relative">
                  {/* Central vertical line */}
                  <div className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-gray-300 transform -translate-x-px"></div>
                  
                  <div className="space-y-8">
                    {/* Feature 1 - Left side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2 pr-4 text-right">
                        <div className="text-[#0B3041] text-xs font-bold mb-1">ANALYTICS READY DATA MODEL</div>
                        <div className="text-[#0B3041] text-xs leading-relaxed">Standardized Clean and Quality Assured Data</div>
                      </div>
                      <div className="w-10 h-10 bg-[#40A3BD] rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative">
                        1
                        <div className="absolute right-full w-3 h-0.5 bg-[#40A3BD] top-1/2 transform -translate-y-1/2"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                    
                    {/* Feature 2 - Right side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2"></div>
                      <div className="w-10 h-10 bg-[#FF8C42] rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative">
                        2
                        <div className="absolute left-full w-3 h-0.5 bg-[#FF8C42] top-1/2 transform -translate-y-1/2"></div>
                      </div>
                      <div className="w-1/2 pl-4 text-left">
                        <div className="text-[#0B3041] text-xs font-bold mb-1">MAXIMUM DATA RESOLUTION</div>
                        <div className="text-[#0B3041] text-xs leading-relaxed">Able to Distinguish Rates for the Same Code at the Same Provider</div>
                      </div>
                    </div>
                    
                    {/* Feature 3 - Left side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2 pr-4 text-right">
                        <div className="text-[#0B3041] text-xs font-bold mb-1">INTEGRATED HOSPITAL & PRODUCT PROFILES</div>
                        <div className="text-[#0B3041] text-xs leading-relaxed">Augment Rate Data with Key Descriptive Characteristics</div>
                      </div>
                      <div className="w-10 h-10 bg-[#8B5CF6] rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative">
                        3
                        <div className="absolute right-full w-3 h-0.5 bg-[#8B5CF6] top-1/2 transform -translate-y-1/2"></div>
                      </div>
                      <div className="w-1/2"></div>
                    </div>
                    
                    {/* Feature 4 - Right side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2"></div>
                      <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative">
                        4
                        <div className="absolute left-full w-3 h-0.5 bg-[#10B981] top-1/2 transform -translate-y-1/2"></div>
                      </div>
                      <div className="w-1/2 pl-4 text-left">
                        <div className="text-[#0B3041] text-xs font-bold mb-1">GEOGRAPHIC DRILLDOWN</div>
                        <div className="text-[#0B3041] text-xs leading-relaxed">Compare Rates at Regional and Local Levels Within a State</div>
                      </div>
                    </div>
                    
                    {/* Feature 5 - Left side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2 pr-4 text-right">
                        <div className="text-[#0B3041] text-xs font-bold mb-1">CLOUD-BASED DASHBOARD ACCESS</div>
                        <div className="text-[#0B3041] text-xs leading-relaxed">Dashboard is Optimized via Cloud Based that Delivers Reports</div>
                      </div>
                      <div className="w-10 h-10 bg-[#EC4899] rounded-full flex items-center justify-center text-white font-bold text-sm z-10 relative">
                        5
                        <div className="absolute right-full w-3 h-0.5 bg-[#EC4899] top-1/2 transform -translate-y-1/2"></div>
                      </div>
                      <div className="w-1/2"></div>
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