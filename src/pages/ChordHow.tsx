import { ArrowLeft, Database, Brain, Network, Settings, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ChordHow = () => {
  const processSteps = [
    {
      icon: Database,
      title: "Hospital Published Price Transparency Files",
      description: "Development of custom web-scraping, data validation and ingestion programs to stage Hospital Price Transparency Files",
      color: "bg-purple-100 border-purple-300"
    },
    {
      icon: Brain,
      title: "Multi-step LLM-based Payer-Plan Mastering",
      description: "LLM augmented program to incrementally master payer-plan relationships and establish LoB",
      color: "bg-orange-100 border-orange-300"
    },
    {
      icon: Network,
      title: "Provider Mastering & Hierarchy Mapping",
      description: "Integration of provider ownership, enrollment and cost report data to create hospital profiles",
      color: "bg-teal-100 border-teal-300"
    },
    {
      icon: Settings,
      title: "CMS Data Integration (Codesets, ASP, Utilization)",
      description: "OpenFDA, RxNorm, CMS codesets to standardize codes; Integration of CMS ASP payment limits",
      color: "bg-emerald-100 border-emerald-300"
    },
    {
      icon: BarChart3,
      title: "Database Dashboard Design & Deployment",
      description: "Design and deployment of the database on a cloud-based BI platform for ready access and analysis",
      color: "bg-cyan-100 border-cyan-300"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Back to Products Link */}
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-[#5A9BA6] hover:text-[#0B3041] transition-colors mb-8 text-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        {/* Title Section */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#0B3041] rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-light text-[#0B3041] mb-4 leading-tight">
                <span className="font-semibold">CHORD</span> (Cross-channel Hospital Outpatient Reimbursement Database) is a
              </h1>
              <p className="text-2xl lg:text-3xl text-[#5A9BA6] font-light">
                comprehensive analytics-ready database of payer-provider negotiated rates
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-12">
          <Link 
            to="/products/chord" 
            className="px-8 py-3 bg-gray-200 text-[#0B3041] rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            WHY?
          </Link>
          <Link 
            to="/products/chord" 
            className="px-8 py-3 bg-gray-200 text-[#0B3041] rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            WHAT?
          </Link>
          <div className="px-8 py-3 bg-[#0B3041] text-white rounded-lg font-medium">
            HOW?
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-xl text-[#0B3041] max-w-4xl mx-auto leading-relaxed">
            CHORD's analytic-readiness and accessibility is the result of our systematic and rigorous process of 
            data extraction, curation, mastering, integration and visualization.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Shield-shaped container */}
                <div className="relative mb-6">
                  <div className={`w-32 h-40 ${step.color} border-2 relative flex flex-col items-center justify-center p-4 clip-shield`}>
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-[#0B3041] leading-tight">
                        {step.title}
                      </div>
                    </div>
                  </div>
                  {/* Bottom point of shield */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent ${step.color.includes('purple') ? 'border-t-purple-100' : step.color.includes('orange') ? 'border-t-orange-100' : step.color.includes('teal') ? 'border-t-teal-100' : step.color.includes('emerald') ? 'border-t-emerald-100' : 'border-t-cyan-100'}`}></div>
                </div>

                {/* Step indicator */}
                <div className="w-3 h-3 rounded-full bg-gray-400 mb-4"></div>

                {/* Description */}
                <p className="text-sm text-[#0B3041] text-center leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChordHow;