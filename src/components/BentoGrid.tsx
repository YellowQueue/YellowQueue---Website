import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  HardDrive, 
  RefreshCw, 
  Printer, 
  SlidersHorizontal,
  CheckCircle2,
  Lock,
  Cpu
} from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-[#07090E] relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-amber-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            POWERFUL DESKTOP ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built for Smooth Daily Print Operations
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Simple, reliable, and purpose-built for busy commercial print counters, Xerox centers, and reprographic teams.
          </p>
        </div>

        {/* Easy, Clean 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Auto-Healing */}
          <div className="p-7 rounded-2xl bg-[#0B0F17] border border-white/[0.08] hover:border-amber-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Auto-Healing Print Spooler
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Monitors the Windows Print Spooler service continuously. If a corrupt file or faulty driver causes a hang, YellowQueue purges the deadlock and restarts the queue in milliseconds.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-amber-400/90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero manual computer reboots</span>
            </div>
          </div>

          {/* Card 2: WhatsApp Business Ingestion */}
          <div className="p-7 rounded-2xl bg-[#0B0F17] border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                WhatsApp Business Sync
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Customers can send documents directly to your store’s WhatsApp Business number. YellowQueue downloads files, extracts metadata, counts pages, and sends operational status updates.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400/90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Automated customer status updates</span>
            </div>
          </div>

          {/* Card 3: Store Email Processing */}
          <div className="p-7 rounded-2xl bg-[#0B0F17] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Store Email Worker
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Route customer email submissions straight to your print shop. YellowQueue extracts PDFs, Word documents, images, and text bodies into clean ready-to-print queues automatically.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-blue-400/90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Instant attachment queueing</span>
            </div>
          </div>

          {/* Card 4: Local Storage & Offline Continuity */}
          <div className="p-7 rounded-2xl bg-[#0B0F17] border border-white/[0.08] hover:border-purple-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-105 transition-transform">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Local Storage & Offline Printing
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Downloaded jobs are securely retained on your local Windows PC cache. If your store loses internet connectivity, your print queue keeps operating without losing pending work.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-purple-400/90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full offline printing resilience</span>
            </div>
          </div>

          {/* Card 5: Fleet & Multi-Printer Support */}
          <div className="p-7 rounded-2xl bg-[#0B0F17] border border-white/[0.08] hover:border-yellow-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-5 group-hover:scale-105 transition-transform">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Universal Printer Compatibility
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Supports all major production and office printers—Canon, HP, Ricoh, Xerox, Epson, Konica Minolta—via USB, LAN, IPP, or RAW 9100 without modifying your manufacturer drivers.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-yellow-400/90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No proprietary driver overrides</span>
            </div>
          </div>

          {/* Card 6: Seamless GitHub Updates & Privacy */}
          <div className="p-7 rounded-2xl bg-[#0B0F17] border border-white/[0.08] hover:border-teal-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-5 group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Data Sovereignty & Fast Updates
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Zero AI training on customer files, zero data resale. Continuous desktop software updates are securely delivered via GitHub release assets to keep your shop running smoothly.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-teal-400/90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Protected by Swami Computers</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
