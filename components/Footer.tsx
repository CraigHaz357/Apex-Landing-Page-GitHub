
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';

const Footer: React.FC = () => {
  const { data } = useApp();
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
              <span className="text-white text-lg font-bold tracking-wider serif">{data.companyName}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering note holders with professional liquidity solutions and transparent financial services since inception.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclosure</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <span className="mr-3 opacity-50">Email:</span>
                <span>{data.contactInfo.email}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 opacity-50">Phone:</span>
                <span>{data.contactInfo.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {data.companyName}. All rights reserved. NMLS Licensing information available upon request.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
