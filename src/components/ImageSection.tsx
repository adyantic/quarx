import React, { useState, useEffect, useRef } from 'react';

const ImageSection: React.FC = () => {
  const [showFirstStatement, setShowFirstStatement] = useState(false);
  const [showSecondStatements, setShowSecondStatements] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animations after 2 seconds delay when section is visible
            setTimeout(() => {
              setShowFirstStatement(true);
            }, 2000);

            setTimeout(() => {
              setShowSecondStatements(true);
            }, 4000); // 2 seconds initial delay + 2 seconds between animations
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col relative h-[80vh] w-full items-start justify-start max-md:max-w-full">
      <video
        src="/video-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-start h-full w-full px-8 pt-[60px] max-md:px-4">
        <div className="max-w-[1440px] w-full text-center space-y-6">
          <h2 
            className={`text-[#0b3041] text-[48px] max-md:text-[28px] max-sm:text-[24px] font-medium leading-tight transition-all duration-1000 ${
              showFirstStatement ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We are students of our shape-shifting healthcare system.
          </h2>
          
          <div className={`space-y-4 transition-all duration-1000 delay-500 ${
            showSecondStatements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-[#0b3041] text-[48px] max-md:text-[28px] max-sm:text-[24px] font-medium leading-tight">
              We follow the "data crumbs" to help our clients
            </p>
            <p className="text-[#5A9BA6] text-[48px] max-md:text-[28px] max-sm:text-[24px] font-medium leading-tight">
              optimize their market access and customer engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
