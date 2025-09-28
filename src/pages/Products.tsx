import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import BasisIcon from '@/assets/BASIS.svg';
import ChordIcon from '@/assets/CHORD.svg';
import LaraIcon from '@/assets/LARA.svg';

const Products: React.FC = () => {
  const products = [
    {
      title: "BASIS",
      subtitle: "Brand Access Strategy Impact Simulator",
      description: "Brand Access Strategy Impact Simulator (BASIS) is a structure-driven simulation tool to quantify the impact of access shifts on brand utilization & GTN",
      icon: BasisIcon
    },
    {
      title: "CHORD",
      subtitle: "Cross-Channel Hospital OP\nReimbursement Dashboard",
      description: "CHORD is a comprehensive analytics-ready database of reimbursement rates by product, procedure, channel, payer, health system and hospital.",
      icon: ChordIcon
    },
    {
      title: "LARA",
      subtitle: "Launch Analog Recommendation Agent",
      description: "Launch Analog Recommendation Agent (LARA) is an AI-enabled tool to identify analog drugs to plan and benchmark launch access and performance",
      icon: LaraIcon
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      
      <div className="flex min-h-px w-full bg-muted" />
      
      <main className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-foreground mb-8 max-w-4xl mx-auto leading-tight">
              Our Products: for Accelerated Analytics & Insight Generation
            </h1>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[74px] max-w-6xl mx-auto">
            {products.map((product, index) => {
              return (
                <Card key={index} className="bg-card border-0 rounded-[20px] shadow-lg min-h-[650px] flex flex-col w-full">
                  <CardHeader className="text-center pb-4 pt-6 px-4 sm:px-6">
                    <CardTitle className="text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground mb-4 sm:mb-6">
                      {product.title}
                    </CardTitle>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-secondary leading-relaxed whitespace-pre-line">
                      {product.subtitle}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="text-center flex flex-col justify-between flex-1 px-4 sm:px-6 pb-6 sm:pb-8">
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <div className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] flex items-center justify-center">
                        <img 
                          src={product.icon} 
                          alt={`${product.title} icon`}
                          className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px]" 
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 flex items-start justify-center mb-2 md:mb-4">
                      <p className="text-base sm:text-lg lg:text-xl font-medium text-foreground leading-relaxed text-center">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-[58px] h-[58px] rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors cursor-pointer">
                        <ChevronRight className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;