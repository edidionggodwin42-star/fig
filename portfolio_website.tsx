import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Button from './components/Button';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 font-sans selection:bg-[#5D5FEF]/30 selection:text-white">
      <nav className="sticky top-0 z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div
            className="text-2xl font-bold text-[#5D5FEF] cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            EG
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const route = link.toLowerCase();
              return (
                <button
                  key={link}
                  onClick={() => setCurrentPage(route)}
                  className={`text-sm font-medium transition-colors ${
                    currentPage === route ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link}
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button onClick={() => setCurrentPage('contact')}>Hire Me</Button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4">
            {navLinks.map((link) => {
              const route = link.toLowerCase();
              return (
                <button
                  key={link}
                  onClick={() => {
                    setCurrentPage(route);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === route ? 'bg-[#5D5FEF]/10 text-white' : 'text-slate-400 hover:bg-slate-800'
                  }`}
                >
                  {link}
                </button>
              );
            })}
            <div className="px-4 pt-2 pb-2 border-t border-slate-800">
              <Button
                className="w-full"
                onClick={() => {
                  setCurrentPage('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 pb-24 min-h-[calc(100vh-160px)]">
        {renderPage()}
      </main>

      <footer className="border-t border-slate-800 bg-[#0B1120]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold text-[#5D5FEF]">EG</div>
          <p className="text-slate-500 text-sm">© 2026 Edidiong Godwin. All rights reserved.</p>
          <div className="flex gap-4">
            {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
              <a key={index} href="#" className="text-slate-500 hover:text-white transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
