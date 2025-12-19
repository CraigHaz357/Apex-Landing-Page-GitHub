
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { INITIAL_SITE_DATA } from './constants';
import { SiteData, ContactLead, AppState } from './types';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';

// Context for global state
interface AppContextType {
  data: SiteData;
  leads: ContactLead[];
  updateData: (newData: SiteData) => void;
  addLead: (lead: Omit<ContactLead, 'id' | 'date' | 'status'>) => void;
  updateLeadStatus: (id: string, status: ContactLead['status']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
};

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('apex_site_data');
    return saved ? JSON.parse(saved) : INITIAL_SITE_DATA;
  });

  const [leads, setLeads] = useState<ContactLead[]>(() => {
    const saved = localStorage.getItem('apex_leads');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('apex_site_data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem('apex_leads', JSON.stringify(leads));
  }, [leads]);

  const updateData = (newData: SiteData) => setData(newData);

  const addLead = (lead: Omit<ContactLead, 'id' | 'date' | 'status'>) => {
    const newLead: ContactLead = {
      ...lead,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      status: 'new'
    };
    setLeads(prev => [newLead, ...prev]);
  };

  const updateLeadStatus = (id: string, status: ContactLead['status']) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  return (
    <AppContext.Provider value={{ data, leads, updateData, addLead, updateLeadStatus }}>
      {children}
    </AppContext.Provider>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <ScrollToTop />
      {!isAdmin && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </AppProvider>
  );
};

export default App;
