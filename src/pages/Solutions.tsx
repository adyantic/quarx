import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { KeyRound, Handshake, TrendingUp } from 'lucide-react';

interface QuestionCardProps {
  question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => (
  <div className="w-full min-h-[90px] px-2.5 py-5 bg-white shadow-md border border-gray-300 flex items-center">
    <p className="text-[#0B3041] text-xl font-medium leading-8">
      {question}
    </p>
  </div>
);

interface ColumnHeaderProps {
  icon: React.ReactNode;
  title: string;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ icon, title }) => (
  <div className="w-full h-[115px] px-2.5 py-5 bg-[#7097AA] flex items-center justify-center gap-5">
    <div className="text-white">
      {icon}
    </div>
    <h3 className="text-white text-2xl font-medium leading-9" dangerouslySetInnerHTML={{ __html: title }} />
  </div>
);

const Solutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'access' | 'segmentation'>('access');

  const accessColumns = [
    {
      icon: <KeyRound size={56} strokeWidth={2} />,
      title: 'Payer-Provider <br/>Access Strategy',
      questions: [
        'How does payer management vary by methods and severity across channels?',
        'What can I expect my launch access timing and trajectory to look like?',
        'How do payers vary in their ability to control utilization?',
        'Are there local markets where provider influence trumps payer policy?',
        'How do I think about my access strategy by specific payer types & segments?',
        'What is the optimal affordability range from a patient OOP standpoint?'
      ]
    },
    {
      icon: <Handshake size={56} strokeWidth={2} />,
      title: 'Payer-Provider <br/>Contracting Strategy',
      questions: [
        'What is the optimal channel contracting strategy that aligns with my brand strategy?',
        'What is the optimal contracting play for a given PBM or payer?',
        'How much downstream payer coverage can I expect with each of the big 3 PBMs?',
        'What are the rebates my competitor is likely to offer to a specific PBM or payer?',
        'To what extent does practice economics impact provider brand preference?'
      ]
    },
    {
      icon: <TrendingUp size={56} strokeWidth={2} />,
      title: 'Pull-through & <br/>Performance Tracking',
      questions: [
        'How do I flex physician targeting to maximize access pull-through at launch?',
        'How do I optimize my reimbursement support to maximize patient acquisition?',
        'Are there HCPs who are prescribing below expectations despite favorable access?',
        'How do my brand\'s access & performance KPIs compare with other analog launches?'
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
                      <QuestionCard key={qIndex} question={question} />
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
