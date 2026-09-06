import React from 'react';
import { ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const metrics = [
    {
      value: '99.9%',
      label: 'Spool Uptime',
      subtext: 'High-availability buffer prevents print queue deadlocks during shift peaks.',
      icon: Activity,
      color: 'text-amber-400',
      badge: 'Continuous Spooling',
    },
    {
      value: 'Zero',
      label: 'Spooler Crashes',
      subtext: 'Automated ring-3 watchdog auto-heals corrupted print jobs without PC reboots.',
      icon: CheckCircle2,
      color: 'text-emerald-400',
      badge: 'Self-Healing Engine',
    },
    {
      value: '0.02s',
      label: 'Dispatch Latency',
      subtext: 'Native Windows API bridge with sub-20ms RAW socket network routing.',
      icon: Zap,
      color: 'text-amber-400',
      badge: 'Zero Bottleneck',
    },
    {
      value: '100%',
      label: 'Local File Privacy',
      subtext: 'Sovereign on-premises processing. No customer documents touch external clouds.',
      icon: ShieldCheck,
      color: 'text-blue-400',
      badge: 'Air-Gapped Ready',
    },
  ];

  return (
    <section className="relative py-14 bg-[#07090E] border-y border-white/[0.08] overflow-hidden">
      {/* Background glow strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.03] via-transparent to-amber-500/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-[#0B0F17]/80 border border-white/[0.08] hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                    {metric.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                    <IconComponent className={`w-4 h-4 ${metric.color}`} />
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                    {metric.value}
                  </span>
                </div>

                {/* Metric Label */}
                <h3 className="mt-1 text-base font-semibold text-slate-200">
                  {metric.label}
                </h3>

                {/* Subtext */}
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {metric.subtext}
                </p>

                {/* Subtle border bottom glow on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-amber-400/0 to-transparent group-hover:via-amber-400/40 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
