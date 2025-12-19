
import React from 'react';
import { SectionContent } from '../types';
import { Link } from 'react-router-dom';

const SectionRenderer: React.FC<{ section: SectionContent }> = ({ section }) => {
  if (section.type === 'hero') {
    return (
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={section.image || "https://picsum.photos/1600/900?grayscale"} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-110 blur-sm md:blur-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 serif animate-in slide-in-from-left duration-700">
              {section.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
              {section.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to={section.ctaLink || "/contact"} 
                className="inline-block bg-white text-slate-950 px-8 py-4 text-center rounded-sm font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl"
              >
                {section.ctaText}
              </Link>
              <Link 
                to="/about" 
                className="inline-block border border-white/30 text-white px-8 py-4 text-center rounded-sm font-bold text-lg hover:bg-white/10 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (section.type === 'features') {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">{section.title}</h2>
            <div className="w-20 h-1 bg-slate-900 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{section.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {section.items?.map((item) => (
              <div key={item.id} className="group p-8 rounded-lg border border-slate-50 hover:border-slate-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 serif">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === 'grid') {
    return (
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">{section.title}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{section.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items?.map((item) => (
              <div key={item.id} className="bg-slate-900 p-8 rounded-sm border border-slate-800 hover:border-slate-700 transition-all">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (section.type === 'steps') {
    return (
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 serif">{section.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{section.subtitle}</p>
          </div>
          
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              {section.items?.map((item, idx) => (
                <div key={item.id} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white border-2 border-slate-900 rounded-full mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <span className="text-2xl font-black">{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 serif">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default SectionRenderer;
