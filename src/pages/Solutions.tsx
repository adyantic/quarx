import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import PayerProviderAccessIcon from '@/assets/Payer_Provider_Access_Strategy.svg';
import PayerProviderContractingIcon from '@/assets/Payer_Provider_Contracting_Strategy.svg';
import PullThroughPerformanceIcon from '@/assets/Pull_through_Performance_Tracking.svg';

interface QuestionCardProps {
  question: string;
  hoverText?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, hoverText }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  
  React.useEffect(() => {
    setIsTouchDevice(window.innerWidth < 1024);
    const handleResize = () => setIsTouchDevice(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isActive = isTouchDevice ? isClicked : isHovered;
  
  return (
    <div 
      className={`w-full h-auto min-h-[70px] md:min-h-[90px] px-2.5 py-4 md:py-5 shadow-md border border-gray-300 flex items-center transition-colors ${
        isActive && hoverText ? 'bg-[#F1F4F1] justify-center' : 'bg-white justify-start'
      } ${isTouchDevice && hoverText ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      onClick={() => isTouchDevice && hoverText && setIsClicked(!isClicked)}
    >
      <p className={`text-[#0B3041] text-sm md:text-base lg:text-xl font-medium leading-6 md:leading-8 ${
        isActive && hoverText ? 'text-center' : ''
      }`}>
        {isActive && hoverText ? hoverText : question}
      </p>
    </div>
  );
};

interface ColumnHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ icon, title }) => (
  <div className="w-full h-auto min-h-[90px] md:min-h-[115px] px-2.5 py-4 md:py-5 bg-[#7097AA] flex items-center justify-center gap-3 md:gap-5">
    <div className="flex-shrink-0 scale-75 md:scale-100">
      {icon}
    </div>
    <h3 className="text-white text-base md:text-xl lg:text-2xl font-medium leading-6 md:leading-9" dangerouslySetInnerHTML={{ __html: title }} />
  </div>
);

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'access' | 'segmentation'>('access');

  const accessColumns = [
    {
      icon: <img src={PayerProviderAccessIcon} alt="Payer-Provider Access Strategy" className="w-[58px] h-[87px]" />,
      title: 'Payer-Provider <br/>Access Strategy',
      questions: [
        { text: 'How does payer management vary by methods and severity across channels?', hoverText: 'Formulary Landscape Analysis' },
        { text: 'What can I expect my launch access timing and trajectory to look like?', hoverText: 'Time to Access Analysis' },
        { text: 'How do payers vary in their ability to control utilization?', hoverText: 'Claims-based Impact of UM Analysis' },
        { text: 'Are there local markets where provider influence trumps payer policy?', hoverText: 'Sub-national Payer-Provider Influence Map' },
        { text: 'How do I think about my access strategy by specific payer types & segments?', hoverText: 'Quantitative Payer Segmentation' },
        { text: 'What is the optimal affordability range from a patient OOP standpoint?', hoverText: 'Patient OOP Exposure & Sensitivity Analysis' }
      ]
    },
    {
      icon: <img src={PayerProviderContractingIcon} alt="Payer-Provider Contracting Strategy" className="w-[88px] h-[57px]" />,
      title: 'Payer-Provider <br/>Contracting Strategy',
      questions: [
        { text: 'What is the optimal channel contracting strategy that aligns with my brand strategy?', hoverText: 'Channel Access Strategy Simulation' },
        { text: 'What is the optimal contracting play for a given PBM or payer?', hoverText: 'Contract Simulation/Deal-View Modeling' },
        { text: 'How much downstream payer coverage can I expect with each of the big 3 PBMs?', hoverText: 'PBM Downstream Adherence Analysis' },
        { text: 'What are the rebates my competitor is likely to offer to a specific PBM or payer?', hoverText: 'Competitive Rebate Equilibrium Simulation' },
        { text: 'To what extent does practice economics impact provider brand preference?', hoverText: 'Reimbursement Landscape & NCR Analysis' }
      ]
    },
    {
      icon: <img src={PullThroughPerformanceIcon} alt="Pull-through & Performance Tracking" className="w-[56px] h-[73px]" />,
      title: 'Pull-through & <br/>Performance Tracking',
      questions: [
        { text: 'How do I flex physician targeting to maximize access pull-through at launch?', hoverText: 'HCP Targeting for Access Pull-through' },
        { text: 'How do I optimize my reimbursement support to maximize patient acquisition?', hoverText: 'Reimbursement Support Optimization' },
        { text: 'Are there HCPs who are prescribing below expectations despite favorable access?', hoverText: 'HCP Access-Performance Benchmarking' },
        { text: 'How do my brand\'s access & performance KPIs compare with other analog launches?', hoverText: 'Access KPI Tracking/Benchmarking' }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-2.5 pt-[70px] md:pt-[50px] pb-[50px] flex flex-col items-center gap-[30px]">
          {/* Tab Buttons */}
          <div className="self-stretch px-2 md:px-5 flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <button
              onClick={() => setActiveTab('access')}
              className={`w-full md:w-auto px-3 md:px-4 py-2 md:py-[11px] rounded-full border transition-colors ${
                activeTab === 'access'
                  ? 'bg-[#156082] text-white border-[#156082]'
                  : 'bg-transparent text-[#7097AA] border-[#7097AA]'
              }`}
            >
              <span className="text-sm md:text-base lg:text-xl font-medium leading-6 md:leading-8">Access & Reimbursement Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab('segmentation')}
              className={`w-full md:w-auto px-3 md:px-4 py-2 md:py-[11px] rounded-full border transition-colors ${
                activeTab === 'segmentation'
                  ? 'bg-[#156082] text-white border-[#156082]'
                  : 'bg-transparent text-[#7097AA] border-[#7097AA]'
              }`}
            >
              <span className="text-sm md:text-base lg:text-xl font-medium leading-6 md:leading-8">Customer Segmentation</span>
            </button>
          </div>

          {/* Content */}
          {activeTab === 'access' && (
            <div className="self-stretch px-2.5 flex flex-col items-center">
              {/* Title */}
              <div className="w-full max-w-[1400px] text-center mb-5 px-2">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-medium leading-7 md:leading-9 lg:leading-[48px]">
                  <span className="text-[#0B3041]">
                    Access & Reimbursement Analytics: Our solutions are designed to answer specific questions to{' '}
                  </span>
                  <span className="text-[#5A9BA6]">
                    define target access, secure it and pull it through
                  </span>
                </h1>
              </div>

              {/* Three Column Layout */}
              <div className="w-full px-5 flex flex-col lg:flex-row items-start gap-4">
                {accessColumns.map((column, index) => (
                  <div key={index} className="flex-1 flex flex-col gap-2.5">
                    <ColumnHeader icon={column.icon} title={column.title} />
                    {column.questions.map((question, qIndex) => (
                      <QuestionCard 
                        key={qIndex} 
                        question={typeof question === 'string' ? question : question.text}
                        hoverText={typeof question === 'object' ? question.hoverText : undefined}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'segmentation' && (
            <div className="self-stretch px-2.5 flex flex-col items-center">
              <div className="w-full max-w-[1400px] text-center">
                <h1 className="text-4xl font-medium leading-[48px] text-[#0B3041]">
                  Customer Segmentation content coming soon
                </h1>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;
