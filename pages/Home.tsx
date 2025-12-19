
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';
import SectionRenderer from '../components/SectionRenderer';

const Home: React.FC = () => {
  const { data } = useApp();
  
  // Sort and filter enabled sections
  const visibleSections = data.sections
    .filter(s => s.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <div className="animate-in fade-in duration-700">
      {visibleSections.map(section => (
        <SectionRenderer key={section.id} section={section} />
      ))}

      {/* Trust Signal Bar */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-8">Trusted By Industry Professionals</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
            <span className="text-2xl font-black italic">ESTROW</span>
            <span className="text-2xl font-black italic">MORTGAGE</span>
            <span className="text-2xl font-black italic">TITLES</span>
            <span className="text-2xl font-black italic">EQUITY</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">Ready to convert your note into capital?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Most of our clients receive a finalized quote within 48 hours. Start the conversation today with zero obligation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/contact" 
                className="bg-slate-900 text-white px-10 py-4 rounded-sm text-lg font-bold hover:bg-slate-800 transition-all shadow-xl hover:translate-y-[-2px]"
              >
                Request a Quote
              </Link>
              <Link 
                to="/about" 
                className="text-slate-900 px-10 py-4 rounded-sm text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
