import React from 'react';
import { Check, ShieldCheck, Download, ExternalLink, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onOpenDownload: () => void;
  onOpenPrivacy: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDownload, onOpenPrivacy }) => {
  const commonFeatures = [
    'Windows 10 & 11 (64-bit) Native Desktop App',
    'Auto-Healing Print Spooler (Zero Jams & Freezes)',
    'WhatsApp Business Direct Document Ingestion',
    'Store Email Ingestion Worker with Auto-Queue',
    '100% Local Storage & Offline Print Operation',
    'Connect Unlimited USB, LAN, & Network Printers',
    'Zero AI Training & 100% Customer Data Privacy',
    'Direct Support from Swami Computers',
  ];

  return (
    <section id="pricing" className="py-20 bg-[#07090E] relative overflow-hidden border-t border-white/[0.06]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Simple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-amber-400 text-xs font-mono font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            TRANSPARENT PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Simple, Honest Pricing
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            No hidden setup fees, per-page metering, or surprise charges. All features included.
          </p>
        </div>

        {/* 2 Simple Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Monthly Plan Card */}
          <div className="rounded-2xl bg-[#0B0F17] border border-white/[0.1] p-7 sm:p-8 flex flex-col justify-between hover:border-white/[0.2] transition-colors">
            <div>
              {/* Offer Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold mb-4">
                First Month Offer
              </div>

              <h3 className="text-xl font-bold text-white">Monthly Plan</h3>
              <p className="text-xs text-slate-400 mt-1">
                Flexible month-to-month license per machine
              </p>

              {/* Price */}
              <div className="mt-5 pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-1">
                  <span className="line-through decoration-rose-500 decoration-2">₹399/-</span>
                  <span className="text-rose-400 text-xs font-semibold uppercase">Not ₹399/-</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight text-amber-400">
                    ₹299/-
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    INR / month
                  </span>
                </div>
                <p className="text-[11px] text-amber-300 font-mono mt-2">
                  First month offer at ₹299/- (Regular ₹399/-)
                </p>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Included Features:
                </p>
                {commonFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <button
                onClick={onOpenDownload}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download for Windows</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 font-mono mt-2">
                30-day money-back guarantee
              </p>
            </div>
          </div>

          {/* Yearly Plan Card (Highlighted) */}
          <div className="relative rounded-2xl bg-[#0E1422] border-2 border-amber-400/70 p-7 sm:p-8 flex flex-col justify-between shadow-[0_0_35px_rgba(245,158,11,0.12)]">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-amber-400 text-black font-extrabold text-[10px] tracking-wider uppercase shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Best Value • Save ₹1000</span>
            </div>

            <div>
              {/* Offer Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold mb-4">
                Annual Offer
              </div>

              <h3 className="text-xl font-bold text-white">Yearly Plan</h3>
              <p className="text-xs text-slate-400 mt-1">
                Full year of hassle-free uninterrupted printing
              </p>

              {/* Price */}
              <div className="mt-5 pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-mono mb-1">
                  <span className="line-through decoration-rose-500 decoration-2">₹3999/-</span>
                  <span className="text-rose-400 text-xs font-semibold uppercase">Not ₹3999/-</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight text-amber-400">
                    ₹2999/-
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    INR / year
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 font-mono mt-2 font-semibold">
                  Special annual offer at ₹2999/- (Save ₹1000)
                </p>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Included Features:
                </p>
                {commonFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <button
                onClick={onOpenDownload}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Download for Windows</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 font-mono mt-2">
                30-day money-back guarantee
              </p>
            </div>
          </div>

        </div>

        {/* Simple Privacy Banner */}
        <div className="mt-12 p-5 rounded-xl bg-[#0B0F17] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-slate-300">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Data Privacy Guarantee</p>
              <p className="text-slate-400 text-[11px]">
                Swami Computers does not use your print documents to train AI models.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenPrivacy}
            className="shrink-0 text-amber-400 hover:text-amber-300 font-mono font-medium flex items-center gap-1 hover:underline"
          >
            <span>Read Privacy Policy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
