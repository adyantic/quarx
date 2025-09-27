import React from 'react';

const ImageSection: React.FC = () => {
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
      <div className="relative max-w-full justify-center flex min-h-[738px] w-[1440px] gap-[40px_48px] overflow-hidden pt-[50px] pb-[640px] px-2.5 max-md:pb-[100px]">
        <div className="z-0 flex min-h-12 min-w-60 gap-2.5 py-2.5 max-md:max-w-full" />
        <div className="absolute z-0 flex min-h-[43px] min-w-60 items-center gap-2.5 justify-center py-2.5 right-2.5 bottom-0 max-md:max-w-full" />
      </div>
    </section>
  );
};

export default ImageSection;
