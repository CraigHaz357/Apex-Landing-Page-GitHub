
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../App';
import { SectionContent } from '../types';

const AdminDashboard: React.FC = () => {
  const { data, leads, updateData, updateLeadStatus } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const handleUpdateSection = (id: string, updates: Partial<SectionContent>) => {
    const newSections = data.sections.map(s => s.id === id ? { ...s, ...updates } : s);
    updateData({ ...data, sections: newSections });
  };

  const handleUpdateContactInfo = (field: string, value: string) => {
    updateData({
      ...data,
      contactInfo: { ...data.contactInfo, [field]: value }
    });
  };

  const Sidebar = () => (
    <div className="w-64 bg-slate-900 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="w-6 h-6 bg-white rounded-sm"></div>
        <span className="font-bold tracking-tight">Admin Portal</span>
      </div>
      <nav className="flex-grow py-6">
        <Link to="/admin" className={`flex items-center px-6 py-3 hover:bg-slate-800 transition-colors ${location.pathname === '/admin' ? 'bg-slate-800 border-r-4 border-white' : ''}`}>
          <span className="text-sm font-medium">Overview</span>
        </Link>
        <Link to="/admin/content" className={`flex items-center px-6 py-3 hover:bg-slate-800 transition-colors ${location.pathname.includes('/content') ? 'bg-slate-800 border-r-4 border-white' : ''}`}>
          <span className="text-sm font-medium">Site Content</span>
        </Link>
        <Link to="/admin/leads" className={`flex items-center px-6 py-3 hover:bg-slate-800 transition-colors ${location.pathname.includes('/leads') ? 'bg-slate-800 border-r-4 border-white' : ''}`}>
          <span className="text-sm font-medium">Inquiries</span>
          {leads.filter(l => l.status === 'new').length > 0 && (
            <span className="ml-auto bg-white text-slate-900 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              {leads.filter(l => l.status === 'new').length}
            </span>
          )}
        </Link>
        <Link to="/admin/seo" className={`flex items-center px-6 py-3 hover:bg-slate-800 transition-colors ${location.pathname.includes('/seo') ? 'bg-slate-800 border-r-4 border-white' : ''}`}>
          <span className="text-sm font-medium">SEO & Meta</span>
        </Link>
      </nav>
      <div className="p-6 border-t border-slate-800">
        <Link to="/" className="text-xs text-slate-400 hover:text-white flex items-center">
          <span>&larr; Return to Website</span>
        </Link>
      </div>
    </div>
  );

  const Overview = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold serif">System Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Total Inquiries</div>
          <div className="text-4xl font-black">{leads.length}</div>
        </div>
        <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Unread Messages</div>
          <div className="text-4xl font-black text-slate-900">{leads.filter(l => l.status === 'new').length}</div>
        </div>
        <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Active Sections</div>
          <div className="text-4xl font-black">{data.sections.filter(s => s.enabled).length}</div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold mb-6 serif">General Information</h2>
        <div className="space-y-6 max-w-2xl">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Company Name</label>
            <input 
              type="text" 
              className="w-full border border-slate-200 px-4 py-2 rounded focus:ring-1 focus:ring-slate-900 outline-none" 
              value={data.companyName}
              onChange={(e) => updateData({...data, companyName: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address</label>
              <input 
                type="text" 
                className="w-full border border-slate-200 px-4 py-2 rounded focus:ring-1 focus:ring-slate-900 outline-none" 
                value={data.contactInfo.email}
                onChange={(e) => handleUpdateContactInfo('email', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Phone</label>
              <input 
                type="text" 
                className="w-full border border-slate-200 px-4 py-2 rounded focus:ring-1 focus:ring-slate-900 outline-none" 
                value={data.contactInfo.phone}
                onChange={(e) => handleUpdateContactInfo('phone', e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContentEditor = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold serif">Site Content Editor</h1>
        <div className="text-xs text-slate-400">Reorder sections by dragging (simulated)</div>
      </div>

      <div className="space-y-6">
        {data.sections.sort((a,b) => a.order - b.order).map(section => (
          <div key={section.id} className="bg-white p-6 rounded-sm border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">Type: {section.type}</span>
                <h3 className="text-lg font-bold mt-2 serif">{section.title}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">Enabled</span>
                <button 
                  onClick={() => handleUpdateSection(section.id, { enabled: !section.enabled })}
                  className={`w-10 h-5 rounded-full transition-colors relative ${section.enabled ? 'bg-slate-900' : 'bg-slate-200'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${section.enabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Section Title</label>
                  <input 
                    type="text" 
                    className="w-full border border-slate-100 px-3 py-2 text-sm focus:ring-1 focus:ring-slate-900 outline-none" 
                    value={section.title}
                    onChange={(e) => handleUpdateSection(section.id, { title: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Subtitle / Description</label>
                  <textarea 
                    rows={3}
                    className="w-full border border-slate-100 px-3 py-2 text-sm focus:ring-1 focus:ring-slate-900 outline-none" 
                    value={section.subtitle}
                    onChange={(e) => handleUpdateSection(section.id, { subtitle: e.target.value })}
                  />
                </div>
              </div>

              {section.items && (
                <div className="bg-slate-50 p-4 border border-slate-100 rounded">
                   <label className="block text-[10px] font-bold text-slate-400 uppercase mb-3">Items / List Elements</label>
                   <div className="space-y-3">
                     {section.items.map(item => (
                       <div key={item.id} className="flex items-center gap-2">
                         <input 
                          type="text" 
                          className="flex-grow border border-slate-200 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-slate-900" 
                          value={item.title}
                          onChange={(e) => {
                            const newItems = section.items!.map(i => i.id === item.id ? {...i, title: e.target.value} : i);
                            handleUpdateSection(section.id, { items: newItems });
                          }}
                         />
                       </div>
                     ))}
                   </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const LeadsList = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold serif">Inquiry Inbox</h1>
      <div className="bg-white rounded-sm border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Status</th>
              <th className="px-6 py-4 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Lead Name</th>
              <th className="px-6 py-4 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Contact Info</th>
              <th className="px-6 py-4 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Date</th>
              <th className="px-6 py-4 font-bold text-slate-600 uppercase tracking-wider text-[10px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leads.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-400 italic">No inquiries received yet.</td></tr>
            ) : leads.map(lead => (
              <tr key={lead.id} className={lead.status === 'new' ? 'bg-slate-50/50' : ''}>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${lead.status === 'new' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-semibold">{lead.name}</td>
                <td className="px-6 py-4">
                  <div className="text-slate-600">{lead.email}</div>
                  <div className="text-[11px] text-slate-400">{lead.phone}</div>
                </td>
                <td className="px-6 py-4 text-slate-500">{new Date(lead.date).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <button 
                    onClick={() => updateLeadStatus(lead.id, lead.status === 'new' ? 'viewed' : 'new')}
                    className="text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    {lead.status === 'new' ? 'Mark Read' : 'Mark Unread'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const SeoSettings = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold serif">SEO & Metadata</h1>
      <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm max-w-2xl">
        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Meta Title Tag</label>
            <input 
              type="text" 
              className="w-full border border-slate-200 px-4 py-2 rounded focus:ring-1 focus:ring-slate-900 outline-none" 
              value={data.seo.title}
              onChange={(e) => updateData({...data, seo: {...data.seo, title: e.target.value}})}
            />
            <p className="mt-1 text-[10px] text-slate-400">Ideally between 50-60 characters.</p>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Meta Description</label>
            <textarea 
              rows={4}
              className="w-full border border-slate-200 px-4 py-2 rounded focus:ring-1 focus:ring-slate-900 outline-none" 
              value={data.seo.description}
              onChange={(e) => updateData({...data, seo: {...data.seo, description: e.target.value}})}
            />
            <p className="mt-1 text-[10px] text-slate-400">Ideally between 150-160 characters.</p>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Social Sharing Image (OG:Image URL)</label>
            <input 
              type="text" 
              className="w-full border border-slate-200 px-4 py-2 rounded focus:ring-1 focus:ring-slate-900 outline-none" 
              value={data.seo.ogImage}
              onChange={(e) => updateData({...data, seo: {...data.seo, ogImage: e.target.value}})}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-grow p-10 overflow-auto">
        <Routes>
          <Route index element={<Overview />} />
          <Route path="content" element={<ContentEditor />} />
          <Route path="leads" element={<LeadsList />} />
          <Route path="seo" element={<SeoSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
