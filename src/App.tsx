import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsStrip } from './components/MetricsStrip';
import { BentoGrid } from './components/BentoGrid';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const handleOpenDownload = () => setDownloadModalOpen(true);
  const handleCloseDownload = () => setDownloadModalOpen(false);

  const handleOpenPrivacy = () => setPrivacyModalOpen(true);
  const handleClosePrivacy = () => setPrivacyModalOpen(false);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 font-sans">
      
      {/* Global Navigation */}
      <Navbar 
        onOpenDownload={handleOpenDownload}
        onOpenPrivacy={handleOpenPrivacy}
      />

      <main>
        {/* Simple & Authoritative Hero Section (No complex preview mockups) */}
        <HeroSection 
          onOpenDownload={handleOpenDownload}
          onOpenPrivacy={handleOpenPrivacy}
        />

        {/* 4-Item Quality & Reliability Metrics Strip */}
        <MetricsStrip />

        {/* Clean, Easy 6-Feature Grid */}
        <BentoGrid />

        {/* Transparent Per-Device Pricing */}
        <PricingSection 
          onOpenDownload={handleOpenDownload}
          onOpenPrivacy={handleOpenPrivacy}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with Contact support@yellowqueue.dev & Mandatory Swami Computers Copyright */}
      <Footer 
        onOpenDownload={handleOpenDownload}
        onOpenPrivacy={handleOpenPrivacy}
      />

      {/* Windows Download Modal */}
      <DownloadModal 
        isOpen={downloadModalOpen}
        onClose={handleCloseDownload}
      />

      {/* Complete Official Privacy Policy Modal (Effective September 6, 2026) */}
      <PrivacyPolicyModal 
        isOpen={privacyModalOpen}
        onClose={handleClosePrivacy}
      />

    </div>
  );
}
