import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  Download, 
  Menu, 
  X, 
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenPrivacy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenPrivacy }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07090E]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 group-hover:border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all">
              <Printer className="w-5 h-5 text-amber-400 group-hover:scale-105 transition-transform" />
              {/* Status indicator dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 border border-[#07090E]"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  YellowQueue
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                  v1.0
                </span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider font-mono">
                BY SWAMI COMPUTERS
              </span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] px-4 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenPrivacy}
              className="text-xs font-medium text-amber-400/90 hover:text-amber-300 px-3.5 py-1.5 rounded-full hover:bg-amber-500/10 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Privacy Policy
            </button>
          </nav>

          {/* Right Action (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Download for Windows</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDownload}
              className="p-2 rounded-lg bg-amber-400 text-black"
              aria-label="Download"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.04] border border-white/[0.08]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17] border-b border-white/[0.08] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPrivacy();
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-amber-400 hover:bg-amber-500/10 transition-colors flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            Privacy Policy
          </button>
          <div className="pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download for Windows (.exe)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
