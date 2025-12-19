
import React from 'react';
import { useApp } from '../App';

const About: React.FC = () => {
  const { data } = useApp();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/1920/600?grayscale" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-4 serif">Our Mission & Values</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Providing specialized liquidity solutions with integrity and precision.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-bold mb-8 serif">Integrity in Financial Services</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Apex Note Capital was founded on a simple principle: individuals who hold private real estate notes deserve a transparent, professional, and fast way to access their capital. For too long, the secondary note market has been opaque and intimidating. We bridge that gap with expert underwriting and clear communication.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              As a direct buyer of private mortgage notes, we are not brokers. When you deal with Apex Note Capital, you are dealing with the decision-makers. This translates to faster closings, more reliable offers, and a simplified process from start to finish.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="bg-slate-50 p-8 rounded-sm">
                <h3 className="text-xl font-bold mb-4 serif">Who We Serve</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> Individual Note Holders</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> Estate Planners & Attorneys</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> Real Estate Investors</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> Institutional Funds</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-sm">
                <h3 className="text-xl font-bold mb-4 serif">Our Commitment</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> Transparent Pricing</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> Privacy & Data Security</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> No Hidden Fees</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></span> Timely Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Block */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-black mb-2 serif">$500M+</div>
            <div className="text-slate-400 uppercase tracking-widest text-sm">Note Assets Reviewed</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 serif">15 Days</div>
            <div className="text-slate-400 uppercase tracking-widest text-sm">Average Closing Time</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 serif">48 States</div>
            <div className="text-slate-400 uppercase tracking-widest text-sm">Nationwide Coverage</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
