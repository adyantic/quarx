import React from 'react';

interface FooterLinkProps {
  text: string;
  isHeader?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ text, isHeader = false }) => {
  const baseClasses = "text-xl font-light leading-8";
  const colorClasses = isHeader ? "text-[#7097AA]" : "text-white hover:text-[#5A9BA6] transition-colors cursor-pointer";
  
  return (
    <div className={`${baseClasses} ${colorClasses} self-stretch my-auto`}>
      {text}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="justify-center items-center flex w-full gap-2.5 bg-[#0B3041] max-md:max-w-full">
      <div className="self-stretch flex min-w-60 w-[1440px] max-w-[1440px] flex-col overflow-hidden items-stretch justify-center my-auto p-2.5">
        <div className="flex w-full gap-10 flex-wrap p-2.5 max-md:max-w-full">
          <div className="min-w-60 text-2xl text-white font-medium text-center w-[345px]">
            <div className="flex w-full flex-col overflow-hidden justify-center p-5 rounded-[20px]">
              <div className="text-white text-2xl font-medium leading-9">
                QUARX LLC
              </div>
            </div>
          </div>
          
          <nav className="flex flex-col overflow-hidden items-stretch text-xl text-white font-light whitespace-nowrap leading-[1.6] justify-center p-5 rounded-[20px]">
            <div className="flex flex-col">
              <FooterLink text="PRODUCTS" isHeader />
              <div className="flex items-center gap-2.5 justify-center mt-2.5">
                <FooterLink text="BASIS" />
              </div>
              <div className="flex items-center gap-2.5 justify-center mt-2.5">
                <FooterLink text="CHORD" />
              </div>
              <div className="flex items-center gap-2.5 justify-center mt-2.5">
                <FooterLink text="LARA" />
              </div>
            </div>
          </nav>
          
          <nav className="flex min-w-60 flex-col overflow-hidden items-stretch text-xl text-white font-light leading-[1.6] justify-center p-5 rounded-[20px]">
            <div>
              <FooterLink text="SOLUTIONS" isHeader />
              <div className="flex items-center gap-2.5 justify-center mt-2.5">
                <FooterLink text="ACCESS & REIMBURSEMENT" />
              </div>
              <div className="flex items-center gap-2.5 justify-center mt-2.5">
                <FooterLink text="CUSTOMER SEGMENTATION" />
              </div>
            </div>
          </nav>
          
          <nav className="flex flex-col overflow-hidden items-stretch text-xl text-[#7097AA] font-light whitespace-nowrap leading-[1.6] justify-center p-5 rounded-[20px]">
            <div>
              <FooterLink text="TEAM" isHeader />
            </div>
          </nav>
          
          <nav className="flex flex-col overflow-hidden items-stretch text-xl text-[#7097AA] font-light whitespace-nowrap leading-[1.6] justify-center p-5 rounded-[20px]">
            <div>
              <FooterLink text="CONTACT" isHeader />
            </div>
          </nav>
          
          <div className="flex flex-col overflow-hidden items-stretch justify-center w-[70px] p-5 rounded-[20px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ff692081c1c1efc7173b1868fd27622b77c5b569?placeholderIfAbsent=true"
              alt="Social media icon"
              className="aspect-[1] object-contain w-[30px] hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
