import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import BasisIcon from '@/assets/BASIS.svg';
import ChordIcon from '@/assets/CHORD.svg';
import LaraIcon from '@/assets/LARA.svg';

const Products: React.FC = () => {
  const products = [
    {
      title: "CHORD",
      subtitle: "Cross-Channel Hospital OP\nReimbursement Dashboard",
      description: "CHORD is a comprehensive analytics-ready database of reimbursement rates by product, procedure, channel, payer, health system and hospital.",
      icon: ChordIcon
    },
    {
      title: "BASIS",
      subtitle: "Brand Access Strategy\nImpact Simulator",
      description: "Brand Access Strategy Impact Simulator (BASIS) is a structure-driven simulation tool to quantify impact of access shifts on brand utilization & GTN",
      icon: BasisIcon
    },
    {
      title: "LARA",
      subtitle: "Launch Analog\nRecommendation Agent",
      description: "Launch Analog Recommendation Agent (LARA) is an AI-enabled tool to identify analog drugs to plan and benchmark launch access and performance",
      icon: LaraIcon
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      <main className="py-12 px-2.5 overflow-hidden flex flex-col justify-center items-center gap-10">
        <div className="w-full max-w-[1440px] px-2.5 py-12 overflow-hidden flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-start items-center gap-8">
            <h1 className="text-center text-[#0B3041] text-4xl md:text-5xl font-medium leading-tight">
              Our Products: for Accelerated Analytics & Insight Generation
            </h1>
          </div>
          
          <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-5">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="flex-1 p-5 bg-[#F1F4F1] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-[20px] flex flex-col justify-start items-center gap-8 w-full"
              >
                <h2 className="text-[#0B3041] text-4xl md:text-5xl font-medium leading-tight">
                  {product.title}
                </h2>
                
                <div className="w-full text-center text-[#5A9BA6] text-2xl md:text-3xl font-medium leading-10 whitespace-pre-line">
                  {product.subtitle}
                </div>
                
                <div className="w-[85px] h-[85px] flex justify-center items-center">
                  <img 
                    src={product.icon} 
                    alt={`${product.title} icon`}
                    className="w-[85px] h-[85px]" 
                  />
                </div>
                
                <div className="w-full flex justify-center items-start gap-2.5">
                  <p className="flex-1 text-center text-[#0B3041] text-xl md:text-2xl font-medium leading-9">
                    {product.description}
                  </p>
                </div>
                
                <div className="w-[58px] h-[58px] relative overflow-hidden rounded-full bg-[#5A9BA6] flex items-center justify-center hover:bg-[#5A9BA6]/80 transition-colors cursor-pointer">
                  <ChevronRight className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;