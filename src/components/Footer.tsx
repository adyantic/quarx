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
    <footer className="w-full bg-[#0B3041] py-12">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-start justify-between gap-16 max-md:flex-col max-md:gap-8">
          {/* Company Name */}
          <div className="text-white text-xl font-medium">
            QUARX LLC
          </div>
          
          {/* Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7097AA] text-lg font-light">PRODUCTS</h3>
            <div className="flex flex-col gap-2">
              <span className="text-white text-base font-light hover:text-[#5A9BA6] transition-colors cursor-pointer">BASIS</span>
              <span className="text-white text-base font-light hover:text-[#5A9BA6] transition-colors cursor-pointer">CHORD</span>
              <span className="text-white text-base font-light hover:text-[#5A9BA6] transition-colors cursor-pointer">LARA</span>
            </div>
          </div>
          
          {/* Solutions */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7097AA] text-lg font-light">SOLUTIONS</h3>
            <div className="flex flex-col gap-2">
              <span className="text-white text-base font-light hover:text-[#5A9BA6] transition-colors cursor-pointer">ACCESS & REIMBURSEMENT</span>
              <span className="text-white text-base font-light hover:text-[#5A9BA6] transition-colors cursor-pointer">CUSTOMER SEGMENTATION</span>
            </div>
          </div>
          
          {/* Team */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7097AA] text-lg font-light">TEAM</h3>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#7097AA] text-lg font-light">CONTACT</h3>
          </div>
          
          {/* LinkedIn Icon */}
          <div className="flex items-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ff692081c1c1efc7173b1868fd27622b77c5b569?placeholderIfAbsent=true"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
