import React, { useState, useEffect } from 'react';

const ImageSection: React.FC = () => {
  const [showFirstStatement, setShowFirstStatement] = useState(false);
  const [showSecondStatements, setShowSecondStatements] = useState(false);

  useEffect(() => {
    // Show first statement after 1 second
    const firstTimer = setTimeout(() => {
      setShowFirstStatement(true);
    }, 1000);

    // Show second and third statements after 3 seconds
    const secondTimer = setTimeout(() => {
      setShowSecondStatements(true);
    }, 3000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <section className="flex flex-col relative h-screen w-full items-center justify-center max-md:max-w-full">
      <video
        src="/video-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-8 max-md:px-4">
        <div className="max-w-4xl text-center space-y-6">
          <h2 
            className={`text-[#0b3041] text-4xl md:text-5xl lg:text-6xl font-medium leading-tight transition-all duration-1000 ${
              showFirstStatement ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We are students of our shape-shifting healthcare system.
          </h2>
          
          <div className={`space-y-4 transition-all duration-1000 delay-500 ${
            showSecondStatements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-[#0b3041] text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
              We follow the "data crumbs" to help our clients
            </p>
            <p className="text-[#5A9BA6] text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed">
              optimize their market access and customer engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
