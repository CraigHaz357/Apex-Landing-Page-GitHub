
import React, { useState } from 'react';
import { useApp } from '../App';

const Contact: React.FC = () => {
  const { data, addLead } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 serif">Get Your Free Note Appraisal</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tell us a little about your note, and our specialists will provide a custom analysis within 24-48 business hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white p-8 lg:p-16 rounded-sm shadow-2xl border border-slate-100">
          <div>
            <h2 className="text-2xl font-bold mb-8 serif">Direct Inquiry</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-sm text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                <p>Thank you for reaching out. An Apex specialist will contact you shortly to discuss your note's potential.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-green-700 underline font-semibold"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all rounded-sm"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all rounded-sm"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wider">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all rounded-sm"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wider">Note Details (Amount, Terms, Location)</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all rounded-sm"
                    placeholder="Briefly describe the note you are interested in selling..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-sm hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-8 serif">Contact Information</h2>
            <div className="space-y-8 flex-grow">
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Professional Inquiries</h3>
                <p className="text-lg text-slate-900">{data.contactInfo.email}</p>
                <p className="text-lg text-slate-900 font-bold mt-1">{data.contactInfo.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-2">Business Hours</h3>
                <p className="text-lg text-slate-900">Monday — Friday: 9:00 AM – 6:00 PM EST</p>
                <p className="text-lg text-slate-900">Saturday: By Appointment Only</p>
              </div>
            </div>

            {/* Placeholder Map */}
            <div className="mt-12 h-64 bg-slate-100 rounded-sm overflow-hidden relative flex items-center justify-center border border-slate-200">
               <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
               <div className="relative z-10 text-slate-400 text-sm font-medium italic">Map Preview Integration Area</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
