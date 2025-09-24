import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="w-full bg-white">
      <div className="flex items-center justify-between px-[30px] py-6 max-w-[2400px] mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          {/* QUARX Logo */}
          <img 
            src="/lovable-uploads/logo (2).png.png" 
            alt="QUARX Logo" 
            className="w-8 h-8"
          />
          
          {/* Brand Text */}
          <div className="relative">
            <div className="text-[#0B3041] text-[42px] font-light leading-tight tracking-wide">
              QUARX
            </div>
            <div className="text-[#5A9BA6] text-[11px] font-light leading-tight absolute right-0 -bottom-1">
              Biopharma Consulting
            </div>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-12">
          <Link 
            to="/products" 
            className={`text-2xl font-light transition-colors duration-200 ${
              location.pathname === '/products' 
                ? 'text-[#5A9BA6]' 
                : 'text-[#0B3041] hover:text-[#156082]'
            }`}
          >
            PRODUCTS
          </Link>
          <button className="text-[#0B3041] hover:text-[#156082] text-2xl font-light transition-colors duration-200">
            SOLUTIONS
          </button>
          <button className="text-[#0B3041] hover:text-[#156082] text-2xl font-light transition-colors duration-200">
            TEAM
          </button>
          <button className="text-[#0B3041] hover:text-[#156082] text-2xl font-light transition-colors duration-200">
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
