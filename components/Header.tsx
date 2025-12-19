
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../App';

const Header: React.FC = () => {
  const { data } = useApp();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeLink = (path: string) => 
    location.pathname === path ? "text-slate-900 font-bold" : "text-slate-600 hover:text-slate-900";

  return (
    <div className={`${data.appearance.headerSticky ? 'sticky top-0 z-50' : ''}`}>
      {/* Top Bar with Phone and Email */}
      <div className="bg-slate-950 text-white py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-[0.15em]">
          <div className="flex items-center space-x-6 mb-1 sm:mb-0">
            <a href={`tel:${data.contactInfo.phone}`} className="flex items-center hover:text-slate-300 transition-colors">
              <svg className="w-3.5 h-3.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {data.contactInfo.phone}
            </a>
            <a href={`mailto:${data.contactInfo.email}`} className="hidden md:flex items-center hover:text-slate-300 transition-colors">
              <svg className="w-3.5 h-3.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {data.contactInfo.email}
            </a>
          </div>
          <div className="hidden sm:block">
            <span className="text-slate-500">Professional Note Buying Service</span>
          </div>
        </div>
      </div>

      <header className="bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-900 rounded-sm transform rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white transform -rotate-45"></div>
                </div>
                <span className="text-xl font-bold uppercase tracking-wider serif">{data.companyName}</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-sm tracking-wide transition-colors ${activeLink(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-slate-900 text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-500 hover:text-slate-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 absolute w-full z-40 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${activeLink(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center mt-4 bg-slate-900 text-white px-6 py-3 rounded-md text-base font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
