import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PayerProviderAccessIcon from '@/assets/Payer_Provider_Access_Strategy.svg';
import PayerProviderContractingIcon from '@/assets/Payer_Provider_Contracting_Strategy.svg';
import PullThroughPerformanceIcon from '@/assets/Pull_through_Performance_Tracking.svg';

interface QuestionCardProps {
  question: string;
  hoverText?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, hoverText }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={`w-full h-[90px] px-2.5 py-5 shadow-md border border-gray-300 flex items-center transition-colors ${
        isHovered && hoverText ? 'bg-[#F1F4F1] justify-center' : 'bg-white justify-start'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={`text-[#0B3041] text-xl font-medium leading-8 ${
        isHovered && hoverText ? 'text-center' : ''
      }`}>
        {isHovered && hoverText ? hoverText : question}
      </p>
    </div>
  );
};

interface ColumnHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ icon, title }) => (
  <div className="w-full h-[115px] px-2.5 py-5 bg-[#7097AA] flex items-center justify-center gap-5">
    {icon}
    <h3 className="text-white text-2xl font-medium leading-9" dangerouslySetInnerHTML={{ __html: title }} />
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
        { text: 'What is the optimal affordability range from a patient OOP standpoint?' }
      ]
    },
    {
      icon: <img src={PayerProviderContractingIcon} alt="Payer-Provider Contracting Strategy" className="w-[88px] h-[57px]" />,
      title: 'Payer-Provider <br/>Contracting Strategy',
      questions: [
        { text: 'What is the optimal channel contracting strategy that aligns with my brand strategy?' },
        { text: 'What is the optimal contracting play for a given PBM or payer?' },
        { text: 'How much downstream payer coverage can I expect with each of the big 3 PBMs?' },
        { text: 'What are the rebates my competitor is likely to offer to a specific PBM or payer?' },
        { text: 'To what extent does practice economics impact provider brand preference?' }
      ]
    },
    {
      icon: <img src={PullThroughPerformanceIcon} alt="Pull-through & Performance Tracking" className="w-[56px] h-[73px]" />,
      title: 'Pull-through & <br/>Performance Tracking',
      questions: [
        { text: 'How do I flex physician targeting to maximize access pull-through at launch?' },
        { text: 'How do I optimize my reimbursement support to maximize patient acquisition?' },
        { text: 'Are there HCPs who are prescribing below expectations despite favorable access?' },
        { text: 'How do my brand\'s access & performance KPIs compare with other analog launches?' }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-[1440px] px-2.5 py-[50px] flex flex-col items-center gap-[30px]">
          {/* Tab Buttons */}
          <div className="self-stretch px-5 flex items-center gap-6">
            <button
              onClick={() => setActiveTab('access')}
              className={`px-4 py-[11px] rounded-full border transition-colors ${
                activeTab === 'access'
                  ? 'bg-[#156082] text-white border-[#156082]'
                  : 'bg-transparent text-[#7097AA] border-[#7097AA]'
              }`}
            >
              <span className="text-xl font-medium leading-8">Access & Reimbursement Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab('segmentation')}
              className={`px-4 py-[11px] rounded-full border transition-colors ${
                activeTab === 'segmentation'
                  ? 'bg-[#156082] text-white border-[#156082]'
                  : 'bg-transparent text-[#7097AA] border-[#7097AA]'
              }`}
            >
              <span className="text-xl font-medium leading-8">Customer Segmentation</span>
            </button>
          </div>

          {/* Content */}
          {activeTab === 'access' && (
            <div className="self-stretch px-2.5 flex flex-col items-center">
              {/* Title */}
              <div className="w-full max-w-[1400px] text-center mb-5">
                <h1 className="text-4xl font-medium leading-[48px]">
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
