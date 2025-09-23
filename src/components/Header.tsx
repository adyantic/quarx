import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="self-center flex min-h-[90px] w-full max-w-[1827px] items-center gap-[40px_100px] overflow-hidden font-light justify-between flex-wrap px-[30px] py-[13px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex items-center gap-2.5 my-auto">
        <div className="self-stretch relative flex flex-col items-stretch justify-center my-auto">
          <div className="text-[#0B3041] text-[42px] leading-[64px] z-0">
            QUARX
          </div>
          <div className="text-[#5A9BA6] text-xs font-light leading-4 absolute z-0 w-[117px] h-4 right-0 bottom-0">
            Biopharma Consulting
          </div>
        </div>
      </div>
      <nav className="items-center self-stretch flex min-w-60 gap-12 overflow-hidden text-2xl text-[#0B3041] whitespace-nowrap flex-wrap my-auto p-2.5 max-md:max-w-full">
        <div className="self-stretch flex items-center gap-2.5 text-[#0B3041] justify-center my-auto hover:text-[#5A9BA6] transition-colors cursor-pointer">
          <div className="text-2xl font-light leading-9 self-stretch my-auto">
            PRODUCTS
          </div>
        </div>
        <div className="self-stretch flex items-center gap-2.5 justify-center my-auto hover:text-[#5A9BA6] transition-colors cursor-pointer">
          <div className="text-[#0B3041] text-2xl font-light leading-9 self-stretch my-auto">
            SOLUTIONS
          </div>
        </div>
        <div className="self-stretch flex items-center gap-2.5 justify-center my-auto hover:text-[#5A9BA6] transition-colors cursor-pointer">
          <div className="text-[#0B3041] text-2xl font-light leading-9 self-stretch my-auto">
            TEAM
          </div>
        </div>
        <div className="self-stretch flex items-center gap-2.5 justify-center my-auto hover:text-[#5A9BA6] transition-colors cursor-pointer">
          <div className="text-[#0B3041] text-2xl font-light leading-9 self-stretch my-auto">
            CONTACT
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
