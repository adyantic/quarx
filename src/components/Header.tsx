import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <div className="relative">
              {/* Quarx logo placeholder - you can replace with actual logo */}
              <div className="w-8 h-8 bg-[#5A9BA6] rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="relative">
              <div className="text-[#0B3041] text-3xl font-light tracking-wide">
                QUARX
              </div>
              <div className="text-[#5A9BA6] text-xs font-light absolute right-0 -bottom-1">
                Biopharma Consulting
              </div>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className={`text-lg font-light transition-colors duration-200 ${
                location.pathname === '/products' 
                  ? 'text-[#5A9BA6]' 
                  : 'text-[#0B3041] hover:text-[#156082]'
              }`}
            >
              PRODUCTS
            </Link>
            <button className="text-[#0B3041] hover:text-[#156082] text-lg font-light transition-colors duration-200">
              SOLUTIONS
            </button>
            <button className="text-[#0B3041] hover:text-[#156082] text-lg font-light transition-colors duration-200">
              TEAM
            </button>
            <button className="text-[#0B3041] hover:text-[#156082] text-lg font-light transition-colors duration-200">
              CONTACT
            </button>
          </nav>

          {/* Mobile Menu Button - for future implementation */}
          <div className="md:hidden">
            <button className="text-[#0B3041] hover:text-[#156082] transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
