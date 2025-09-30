import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronLeft, Database, Building2, Shield, ClipboardList, Brain, Network, Settings, BarChart3 } from 'lucide-react';
import ChordIcon from '@/assets/CHORD.svg';
import FeaturesInfographic from '@/assets/features-infographic.png';
import Number1Icon from '@/assets/number-1.png';
import Number2Icon from '@/assets/number-2.png';
import Number3Icon from '@/assets/number-3.png';
import Number4Icon from '@/assets/number-4.png';
import Number5Icon from '@/assets/number-5.png';
import NumbersInfographic from '@/assets/numbers-infographic.png';
import HospitalShieldIcon from '@/assets/hospital-shield-icon.png';
import PayerPlanShieldIcon from '@/assets/payer-plan-shield.png';
import ProviderMasteringShieldIcon from '@/assets/provider-mastering-shield.png';
import CmsDataIntegrationShieldIcon from '@/assets/cms-data-integration-shield.png';
import CloudDashboardShieldIcon from '@/assets/cloud-dashboard-shield.png';
const ChordDetail: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('why');
  const renderWhyContent = () => <div className="w-full flex flex-col items-center gap-8">
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
    </div>;
  const renderContent = () => {
    switch (activeTab) {
      case 'why':
        return renderWhyContent();
      case 'what':
        return <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side - Three columns */}
            <div className="flex-1 flex flex-col sm:flex-row gap-6 lg:gap-8 items-stretch">
              {/* Numbers Column */}
              <div className="flex-1 max-w-xs flex flex-col h-full">
                {/* Header */}
                <div className="bg-[#40A3BD] text-white text-center py-2 text-lg font-medium">
                  NUMBERS
                </div>
                
                <div className="flex-1 flex flex-col bg-[#EBFFFF]">
                  {/* Records Section */}
                  <div className="flex-1 bg-[#EBFFFF] p-2 flex flex-col justify-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <Database className="w-6 h-6 text-[#16A085]" />
                      </div>
                      <div>
                        <span className="text-[#16A085] text-xl font-bold">~1 Billion</span>
                        <span className="text-[#0B3041] text-lg ml-2">Records</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hospitals Section */}
                  <div className="flex-1 bg-[#EBFFFF] p-2 flex flex-col justify-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
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
                  </div>
                  
                  {/* Payers Section */}
                  <div className="flex-1 bg-[#EBFFFF] p-2 flex flex-col justify-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
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
                  </div>
                  
                  {/* Codes Section */}
                  <div className="flex-1 bg-[#EBFFFF] p-2 flex flex-col justify-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <ClipboardList className="w-6 h-6 text-[#16A085]" />
                        </div>
                        <div>
                          <span className="text-[#16A085] text-xl font-bold">&gt;150,000</span>
                          <span className="text-[#0B3041] text-lg ml-2">Codes</span>
                        </div>
                      </div>
                      <div className="ml-11 text-[#0B3041] text-sm space-y-0.5">
                        <div>• HCPCS/CPT</div>
                        <div>• NDC</div>
                        <div>• APC</div>
                        <div>• ICD10PCS</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Reimbursement Methodology */}
                  <div className="flex-1 bg-[#EBFFFF] p-2 flex flex-col justify-center">
                    <div>
                      <div className="text-[#16A085] font-bold text-sm mb-1">Reimbursement Methodology</div>
                      <div className="text-[#4A5568] text-xs">Fee Schedule | % of Billed Charges | Case Rate | Per Diem</div>
                    </div>
                  </div>
                  
                  {/* Procedure Modifiers */}
                  <div className="flex-1 bg-[#EBFFFF] p-2 flex flex-col justify-center">
                    <div>
                      <div className="text-[#16A085] font-bold text-sm mb-1">Procedure Modifiers</div>
                      <div className="text-[#4A5568] text-xs">340B | Drug Waste | Quantity</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Column */}
              <div className="flex-1 max-w-xs flex flex-col h-full">
                {/* Header */}
                <div className="bg-[#40A3BD] text-white text-center py-2 text-lg font-medium">
                  FEATURES
                </div>
                
                <div className="bg-white p-3 relative flex-1 flex flex-col justify-center">
                  {/* Central vertical line */}
                  <div className="absolute left-1/2 top-3 bottom-3 w-0.5 bg-gray-300 transform -translate-x-px"></div>
                  
                  <div className="space-y-4">
                    {/* Feature 1 - Left side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2 pr-4 text-right">
                        <div className="text-[#0B3041] text-base font-bold mb-1">ANALYTICS READY DATA MODEL</div>
                        <div className="text-[#0B3041] text-base leading-relaxed">Standardized Clean and Quality Assured Data</div>
                      </div>
                      <div className="w-1/2 flex justify-start pl-4">
                        <img src={Number1Icon} alt="Number 1 with arrow pointing to analytics ready data model" className="h-8 w-auto" />
                      </div>
                    </div>
                    
                    {/* Feature 2 - Right side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2"></div>
                      <div className="w-1/2 flex justify-start pl-4">
                        <img src={Number2Icon} alt="Number 2 with arrow pointing to maximum data resolution" className="h-8 w-auto" />
                      </div>
                      <div className="w-1/2 pl-4 text-left">
                        <div className="text-[#0B3041] text-base font-bold mb-1">MAXIMUM DATA RESOLUTION</div>
                        <div className="text-[#0B3041] text-base leading-relaxed">Able to Distinguish Rates for the Same Code at the Same Provider</div>
                      </div>
                    </div>
                    
                    {/* Feature 3 - Left side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2 pr-4 text-right">
                        <div className="text-[#0B3041] text-base font-bold mb-1">INTEGRATED HOSPITAL & PRODUCT PROFILES</div>
                        <div className="text-[#0B3041] text-base leading-relaxed">Augment Rate Data with Key Descriptive Characteristics</div>
                      </div>
                      <div className="w-1/2 flex justify-start pl-4">
                        <img src={Number3Icon} alt="Number 3 with arrow pointing to integrated hospital and product profiles" className="h-8 w-auto" />
                      </div>
                    </div>
                    
                    {/* Feature 4 - Right side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2"></div>
                      <div className="w-1/2 flex justify-start pl-4">
                        <img src={Number4Icon} alt="Number 4 with arrow pointing to geographic drilldown" className="h-8 w-auto" />
                      </div>
                      <div className="w-1/2 pl-4 text-left">
                        <div className="text-[#0B3041] text-base font-bold mb-1">GEOGRAPHIC DRILLDOWN</div>
                        <div className="text-[#0B3041] text-base leading-relaxed">Compare Rates at Regional and Local Levels Within a State</div>
                      </div>
                    </div>
                    
                    {/* Feature 5 - Left side */}
                    <div className="flex items-center relative">
                      <div className="w-1/2 pr-4 text-right">
                        <div className="text-[#0B3041] text-base font-bold mb-1">CLOUD-BASED DASHBOARD ACCESS</div>
                        <div className="text-[#0B3041] text-base leading-relaxed">Dashboard is Optimized via Cloud Based that Delivers Reports</div>
                      </div>
                      <div className="w-1/2 flex justify-start pl-4">
                        <img src={Number5Icon} alt="Number 5 with arrow pointing to cloud-based dashboard access" className="h-8 w-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Levels Column */}
              <div className="flex-1 max-w-xs flex flex-col h-full">
                {/* Header */}
                <div className="bg-[#40A3BD] text-white text-center py-2 text-lg font-medium">
                  LEVELS
                </div>
                
                <div className="bg-[#EBFFFF] p-3 flex-1 flex flex-col justify-between">
                  <p className="text-[#0B3041] text-base mb-3 leading-relaxed">
                    Lookup payer reimbursement rates at any level of Payer, Provider and Geographic granularity
                  </p>
                  
                  <div className="space-y-2">
                    {/* Level 1: Channel */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-2 bg-[#40A3BD] rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#0B3041] text-lg font-bold mb-1">Level 1: Channel</div>
                        <ul className="text-[#0B3041] text-base space-y-0.5">
                          <li>• Commercial, Medicare, Medicaid</li>
                          <li>• exchange, Medicaid managed care</li>
                          <li>• and Medicare Advantage</li>
                        </ul>
                      </div>
                    </div>
                    
                    {/* Level 2: Payer */}
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-2 bg-[#5A9BA6] rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#0B3041] text-lg font-bold mb-1">Level 2: Payer</div>
                        <div className="text-[#0B3041] text-base">
                          Details at the plan products each payer serves with plan and product
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 3: Plan */}
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-2 bg-[#7FB3D3] rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#0B3041] text-lg font-bold mb-1">Level 3: Plan</div>
                        <div className="text-[#0B3041] text-base">
                          Plan level granularity with each plan type (Aml, I-IRA, PPO, HOS-Sage) etc.)
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 4: Health System */}
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-2 bg-[#9FC5E8] rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#0B3041] text-lg font-bold mb-1">Level 4: Health System</div>
                        <div className="text-[#0B3041] text-base">
                          Reimbursement rates by Health System to identify operational owners, links and Health System
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 5: Local Geo */}
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-2 bg-[#B6D7EE] rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#0B3041] text-lg font-bold mb-1">Level 5: Local Geo</div>
                        <div className="text-[#0B3041] text-base">
                          Geographic units mapped at multiple levels - State, MSA, HRR, and Local Geographic Areas
                        </div>
                      </div>
                    </div>
                    
                    {/* Level 6: Hospital */}
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#CFE2F3] rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <div className="text-[#0B3041] text-lg font-bold mb-1">Level 6: Hospital</div>
                        <div className="text-[#0B3041] text-base">
                          Reimbursement amounts at the hospital level with the maximum geographical resolution in the Database
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom text */}
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-[#0B3041] text-base font-bold mb-2">
                      Analyze payer reimbursement rates to understand
                    </div>
                    <ul className="text-[#0B3041] text-base space-y-1">
                      <li>• Variation in reimbursement rates across hospitals</li>
                      <li>• Homogeneity of reimbursement rates within a health system</li>
                      <li>• Differential reimbursement across competitive drugs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Description points */}
            <div className="lg:w-80 space-y-6">
              <div>
                <p className="text-[#0B3041] text-2xl font-medium">Payer negotiated rates for all hospital outpatient <span className="text-[#5A9BA6]">and inpatient procedures at the plan level</span></p>
              </div>
              <div>
                <p className="text-[#0B3041] text-2xl">Payer reimbursement methodology by plan, provider and procedure <span className="text-[#5A9BA6]">(Fee Schedule vs % Billed Charges, Case Rate, Per Diem etc.)</span></p>
              </div>
              <div>
                <p className="text-[#0B3041] text-2xl font-medium">Negotiated rates for APC based payments</p>
              </div>
              <div>
                <p className="text-[#0B3041] text-2xl">Hospitals that are operationally and technologically integrated <span className="text-[#5A9BA6]">(set up with the same Charge Data Master)</span></p>
              </div>
              <div>
                <p className="text-[#0B3041] text-2xl font-medium">Level of uniformity it negotiated rates across Hospitals in a Health System</p>
              </div>
            </div>
          </div>;
      case 'how':
        return <div className="w-full">
            {/* Description */}
            <div className="text-center mb-16">
              <p className="text-[30px] font-light text-[#0B3041] w-full mx-auto leading-relaxed">
                CHORD's analytic-readiness and accessibility is the result of our systematic and rigorous process of 
                data extraction, curation, mastering, integration and visualization.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              {[{
              icon: Database,
              title: "Hospital Published Price Transparency Files",
              description: "Development of custom web-scraping, data validation and ingestion programs to stage Hospital Price Transparency Files",
              color: "bg-purple-100 border-purple-300"
            }, {
              icon: Brain,
              title: "Multi-step LLM-based Payer-Plan Mastering",
              description: "LLM augmented program to incrementally master payer-plan relationships and establish LoB",
              color: "bg-orange-100 border-orange-300"
            }, {
              icon: Network,
              title: "Provider Mastering & Hierarchy Mapping",
              description: "Integration of provider ownership, enrollment and cost report data to create hospital profiles",
              color: "bg-teal-100 border-teal-300"
            }, {
              icon: Settings,
              title: "CMS Data Integration (Codesets, ASP, Utilization)",
              description: "OpenFDA, RxNorm, CMS codesets to standardize codes; Integration of CMS ASP payment limits",
              color: "bg-emerald-100 border-emerald-300"
            }, {
              icon: BarChart3,
              title: "Database Dashboard Design & Deployment",
              description: "Design and deployment of the database on a cloud-based BI platform for ready access and analysis",
              color: "bg-cyan-100 border-cyan-300"
            }].map((step, index) => {
              const IconComponent = step.icon;
              return <div key={index} className="flex flex-col items-center">
                    {/* Shield-shaped container */}
                    <div className="relative mb-6">
                       {index === 0 ? <div className="relative">
                           <img src={HospitalShieldIcon} alt="Hospital Published Price Transparency Files" className="w-32 h-auto object-contain" />
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 w-full">
                              <div className="text-sm font-bold text-[#0B3041] leading-tight">
                               Hospital Published Price Transparency Files
                             </div>
                           </div>
                         </div> : index === 1 ? <div className="relative">
                           <img src={PayerPlanShieldIcon} alt="Multi-step LLM-based Payer-Plan Mastering" className="w-32 h-auto object-contain" />
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 w-full">
                              <div className="text-sm font-bold text-[#0B3041] leading-tight">
                               Multi-step LLM-based Payer-Plan Mastering
                             </div>
                           </div>
                         </div> : index === 2 ? <div className="relative">
                           <img src={ProviderMasteringShieldIcon} alt="Provider Mastering & Hierarchy Mapping" className="w-32 h-auto object-contain" />
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 w-full">
                              <div className="text-sm font-bold text-[#0B3041] leading-tight">
                               Provider Mastering & Hierarchy Mapping
                             </div>
                           </div>
                         </div> : index === 3 ? <div className="relative">
                           <img src={CmsDataIntegrationShieldIcon} alt="CMS Data Integration" className="w-32 h-auto object-contain" />
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 w-full">
                              <div className="text-sm font-bold text-[#0B3041] leading-tight">
                               CMS Data Integration (Codesets, ASP, Utilization)
                             </div>
                           </div>
                         </div> : index === 4 ? <div className="relative">
                           <img src={CloudDashboardShieldIcon} alt="Cloud-based Dashboard Design & Deployment" className="w-32 h-auto object-contain" />
                           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-3 w-full">
                             <div className="text-sm font-bold text-[#0B3041] leading-tight">
                               Cloud-based Dashboard Design & Deployment
                             </div>
                           </div>
                         </div> : <div className={`w-32 h-40 ${step.color} border-2 relative flex flex-col items-center justify-center p-4 clip-shield`}>
                           <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-3">
                             <IconComponent className="w-6 h-6 text-white" />
                           </div>
                           <div className="text-center">
                             <div className="text-sm font-semibold text-[#0B3041] leading-tight">
                               {step.title}
                             </div>
                           </div>
                         </div>}
                      {/* Bottom point of shield - only for non-image items */}
                      {index !== 0 && <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent ${step.color.includes('purple') ? 'border-t-purple-100' : step.color.includes('orange') ? 'border-t-orange-100' : step.color.includes('teal') ? 'border-t-teal-100' : step.color.includes('emerald') ? 'border-t-emerald-100' : 'border-t-cyan-100'}`}></div>}
                    </div>

                    {/* Step indicator */}
                    

                    {/* Description */}
                    <p className="text-[18px] text-[#0B3041] text-center leading-relaxed max-w-xs">
                      {step.description}
                    </p>
                  </div>;
            })}
            </div>
          </div>;
      default:
        return renderWhyContent();
    }
  };
  return <div className="bg-white min-h-screen flex flex-col">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      {/* Header Section */}
      <div className="bg-white">
        <div className="w-full max-w-[1440px] px-2.5 pt-24 pb-[30px] mx-auto">
          {/* Back to Products */}
          <button 
            onClick={() => navigate('/products')} 
            className="flex items-center gap-2 text-[#5A9BA6] hover:text-[#5A9BA6]/80 transition-colors mb-8 bg-white border border-gray-200 px-4 py-2 rounded-md shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-lg font-medium">Back to Products</span>
          </button>
          
          {/* Title and Icon */}
          <div className="flex flex-col items-center gap-8 mb-8 pt-10 pb-5">
            <div className="flex items-center gap-6">
              <img src={ChordIcon} alt="CHORD icon" className="w-16 h-16" />
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
    </div>;
};
export default ChordDetail;