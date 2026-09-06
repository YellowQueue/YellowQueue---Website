import React from 'react';
import { 
  Download, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  HardDrive, 
  Zap, 
  FileText,
  ArrowRight
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDownload: () => void;
  onOpenPrivacy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenDownload, 
  onOpenPrivacy
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#07090E] via-[#0B0F17] to-[#07090E]">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/[0.08] border border-amber-500/25 text-amber-300 text-xs font-medium tracking-wide mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="font-mono font-semibold">v1.0.0 Stable</span>
          <span className="text-amber-500/50">•</span>
          <span className="text-slate-300">By Swami Computers</span>
          <span className="text-amber-500/50">•</span>
          <span className="text-amber-400 font-mono">Windows 10 / 11 x64</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Smart Automated Desktop{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
            Print Queue Management
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Designed specifically for print shops, institutions, and high-volume commercial counters.
          Receive jobs directly from WhatsApp Business and email, eliminate print spooler lockups with auto-healing recovery, and print seamlessly with offline local storage.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Download for Windows (.exe)</span>
          </button>

          <button
            onClick={onOpenPrivacy}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Read Privacy Policy</span>
          </button>
        </div>

        {/* Key Feature Highlights Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Zero Spooler Crashes</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Lightweight supervisory engine auto-heals stalled Windows print services without PC reboots.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">WhatsApp Integration</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Connect WhatsApp Business to receive customer documents and send automated print status updates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Store Email Routing</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Direct store email ingestion automatically counts pages, extracts attachments, and enqueues jobs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
              <HardDrive className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Local & Offline Ready</h3>
            <p className="text-xs text-slate-400 leading-normal">
              Local cache ensures you can continue printing queued jobs even if internet goes down.
            </p>
          </div>

        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Verified Clean 64-bit Windows Binary
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Zero AI Training on Files
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Support from Swami Computers
          </span>
        </div>

      </div>

    </section>
  );
};
