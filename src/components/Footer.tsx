import React, { useState } from 'react';
import { 
  Printer, 
  Mail, 
  Copy, 
  Check, 
  ShieldCheck, 
  Download, 
  ExternalLink 
} from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenDownload, 
  onOpenPrivacy 
}) => {
  const [copied, setCopied] = useState(false);
  const supportEmail = 'support@yellowqueue.dev';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.08] text-slate-400 text-xs font-sans relative overflow-hidden">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Summary (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <Printer className="w-5 h-5 text-amber-400" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white">YellowQueue</span>
                <span className="text-[10px] text-amber-400/90 font-mono tracking-wider">
                  BY SWAMI COMPUTERS
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Smart automated desktop print queue management software for print shops, institutions, and high-volume commercial centers. Ingests jobs from WhatsApp Business and email with offline local cache support.
            </p>

            {/* Direct Support Contact Block */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                Customer & Engineering Support
              </span>
              <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-[#0B0F17] border border-white/[0.1] hover:border-amber-500/40 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono text-white font-medium px-1">
                  {supportEmail}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-amber-400 hover:text-black text-slate-200 text-[11px] font-mono font-medium transition-all flex items-center gap-1"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  Features & Capabilities
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenDownload}
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  Windows 64-bit Installer (.exe)
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Privacy Policy (Col 4) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Privacy & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors text-left flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Privacy Policy
                </button>
              </li>
              <li className="text-slate-400 text-[11px] leading-relaxed pt-1">
                Effective date: September 6, 2026. Data controller: Swami Computers.
              </li>
              <li className="text-slate-400 text-[11px] leading-relaxed">
                Zero AI model training on print jobs or private customer messages.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar with Mandatory Copyright Notice */}
      <div className="border-t border-white/[0.06] bg-[#030508] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs font-mono text-slate-400">
            Copyright © 2026 Swami Computers. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Windows 10 / 11 Native
            </span>
            <span>•</span>
            <span>Zero Telemetry Resale</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
