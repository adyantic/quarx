import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-4 xs:px-6 s24:px-[30px] py-4 s24:py-6 max-w-[2400px] mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          {/* QUARX Logo */}
          <img 
            src="/quarx-logo.png" 
            alt="QUARX Logo" 
            className="w-8 h-8"
          />
          
          {/* Brand Text */}
          <div className="relative">
            <div className="text-[#0B3041] text-[28px] xs:text-[32px] s24:text-[38px] lg:text-[42px] font-medium leading-tight tracking-wide">
              QUARX
            </div>
            <div className="text-[#5A9BA6] text-[8px] xs:text-[9px] s24:text-[10px] lg:text-[11px] font-light leading-tight absolute right-0 -bottom-1">
              Biopharma Consulting
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8 lg:gap-12">
          <Link 
            to="/products" 
            className={`text-lg lg:text-2xl font-light transition-colors duration-200 ${
              location.pathname.startsWith('/products') 
                ? 'text-[#5A9BA6]' 
                : 'text-[#0B3041] hover:text-[#156082]'
            }`}
          >
            PRODUCTS
          </Link>
          <button className="text-[#0B3041] hover:text-[#156082] text-lg lg:text-2xl font-light transition-colors duration-200">
            SOLUTIONS
          </button>
          <button className="text-[#0B3041] hover:text-[#156082] text-lg lg:text-2xl font-light transition-colors duration-200">
            TEAM
          </button>
          <button className="text-[#0B3041] hover:text-[#156082] text-lg lg:text-2xl font-light transition-colors duration-200">
            CONTACT
          </button>
        </nav>

        {/* Mobile & Tablet Hamburger Menu */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#0B3041]" />
          ) : (
            <Menu className="w-6 h-6 text-[#0B3041]" />
          )}
        </button>
      </div>

        {/* Mobile & Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="flex flex-col px-4 xs:px-6 s24:px-[30px] py-4 space-y-4">
              <Link 
                to="/products" 
                className={`text-lg s24:text-xl font-light transition-colors duration-200 ${
                  location.pathname.startsWith('/products') 
                    ? 'text-[#5A9BA6]' 
                    : 'text-[#0B3041] hover:text-[#156082]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                PRODUCTS
              </Link>
              <button 
                className="text-[#0B3041] hover:text-[#156082] text-lg s24:text-xl font-light transition-colors duration-200 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                SOLUTIONS
              </button>
              <button 
                className="text-[#0B3041] hover:text-[#156082] text-lg s24:text-xl font-light transition-colors duration-200 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                TEAM
              </button>
              <button 
                className="text-[#0B3041] hover:text-[#156082] text-lg s24:text-xl font-light transition-colors duration-200 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
