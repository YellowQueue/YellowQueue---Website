import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ShieldCheck, 
  Copy, 
  Check, 
  Terminal, 
  HardDrive, 
  CheckCircle2, 
  FileCode, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(false);

  const sha256Hash = 'e8f49a7c3b2169dfa714cb901f44a56d9810a9c8b74f51e0349b1836f8812c41';
  const silentCmd = 'YellowQueue-Setup-v1.0.0-x64.exe /S';

  if (!isOpen) return null;

  const startDownload = (type: 'installer' | 'portable') => {
    setDownloading(true);
    setDownloadProgress(0);
    setDownloadComplete(false);

    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDownloadComplete(true);
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 },
              colors: ['#F59E0B', '#EAB308', '#FFFFFF'],
            });
          } catch {}
          return 100;
        }
        return prev + 20;
      });
    }, 250);
  };

  const copyHash = () => {
    navigator.clipboard.writeText(sha256Hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const copySilentCommand = () => {
    navigator.clipboard.writeText(silentCmd);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0B0F17] border border-white/[0.15] rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Download className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Download YellowQueue for Windows
            </h3>
            <p className="text-xs font-mono text-slate-400">
              v1.0.0 Stable • Signed by Swami Computers
            </p>
          </div>
        </div>

        {/* Download Action Box */}
        <div className="p-5 rounded-xl bg-[#07090E] border border-white/[0.08] space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">
                YellowQueue-Setup-v1.0.0-x64.exe
              </p>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Windows 10 & 11 (64-bit) • Size: 78.4 MB
              </p>
            </div>

            <button
              onClick={() => startDownload('installer')}
              disabled={downloading}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-50"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{downloading ? 'Downloading...' : downloadComplete ? 'Download Again' : 'Download Installer'}</span>
            </button>
          </div>

          {/* Progress bar during download simulation */}
          {downloading && (
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-mono text-amber-400">
                <span>Fetching binary packages...</span>
                <span>{downloadProgress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-amber-400 h-1.5 rounded-full transition-all duration-200"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
            </div>
          )}

          {downloadComplete && (
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Binary downloaded successfully. Double-click to launch installation wizard.</span>
            </div>
          )}

          {/* Portable Zip Alternate */}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
            <span>Prefer air-gapped portable version?</span>
            <button
              onClick={() => startDownload('portable')}
              className="text-amber-400 hover:text-amber-300 font-mono hover:underline"
            >
              Download Portable ZIP (.zip)
            </button>
          </div>
        </div>

        {/* Verification SHA-256 Checksum */}
        <div className="mt-4 p-3.5 rounded-xl bg-[#07090E] border border-white/[0.06] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold uppercase text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              SHA-256 Checksum Verification
            </span>
            <button
              onClick={copyHash}
              className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
            </button>
          </div>
          <p className="font-mono text-[10px] text-slate-400 break-all select-all bg-black/40 p-2 rounded border border-white/[0.04]">
            {sha256Hash}
          </p>
        </div>

        {/* Silent Enterprise Deployment Command */}
        <div className="mt-4 p-3.5 rounded-xl bg-[#07090E] border border-white/[0.06] space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-semibold uppercase text-slate-400 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              Silent Headless Install Flag (SCCM / Intune / CMD)
            </span>
            <button
              onClick={copySilentCommand}
              className="text-[11px] font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              {copiedCommand ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copiedCommand ? 'Copied' : 'Copy Flag'}</span>
            </button>
          </div>
          <code className="block font-mono text-[11px] text-amber-300 bg-black/40 p-2 rounded border border-white/[0.04]">
            {silentCmd}
          </code>
        </div>

        {/* System Requirements */}
        <div className="mt-5 text-[11px] text-slate-400 font-mono flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/[0.06]">
          <span>Requirements: Windows 10/11 x64</span>
          <span>RAM: 4GB minimum</span>
          <span>Storage: 250MB free</span>
          <span className="text-slate-300 font-semibold">Swami Computers</span>
        </div>

      </div>
    </div>
  );
};
