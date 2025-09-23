import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      title: "BASIS",
      subtitle: "Brand Access Strategy Impact Simulator",
      description: "Brand Access Strategy Impact Simulator (BASIS) is a structure-driven simulation tool to quantify the impact of access shifts on brand utilization & GTN"
    },
    {
      title: "CHORD",
      subtitle: "Cross-Channel Hospital OP Reimbursement Dashboard",
      description: "CHORD is a comprehensive analytics-ready database of reimbursement rates by product, procedure, channel, payer, health system and hospital."
    },
    {
      title: "LARA",
      subtitle: "Launch Analog Recommendation Agent",
      description: "Launch Analog Recommendation Agent (LARA) is an AI-enabled tool to identify analog drugs to plan and benchmark launch access and performance"
    }
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      
      <div className="flex min-h-px w-full bg-[#E2E2E9]" />
      
      <main className="flex-1 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#2c5282]">
            Our Products for Accelerated Analytics & Insight Generation
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="bg-[#f7f7f9] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-[#2c5282] mb-4">
                    {product.title}
                  </CardTitle>
                  <h3 className="text-lg font-semibold text-[#4a90a4] mb-4">
                    {product.subtitle}
                  </h3>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-[#4a90a4] rounded-full flex items-center justify-center hover:bg-[#3a7a8a] transition-colors cursor-pointer">
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;