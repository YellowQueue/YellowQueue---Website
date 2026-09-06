import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const supportEmail = 'support@yellowqueue.dev';

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0D14] border border-white/[0.12] rounded-2xl shadow-2xl flex flex-col text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-[#07090E]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                YellowQueue Privacy Policy
              </h2>
              <p className="text-xs font-mono text-slate-400">
                Effective date: September 6, 2026 • Swami Computers
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 text-sm text-slate-300 leading-relaxed font-sans">
          
          {/* Intro statement */}
          <div className="p-4 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 text-slate-200 text-xs sm:text-sm">
            <p>
              Swami Computers ("Swami Computers," "we," "us," or "our") operates YellowQueue, including the YellowQueue Windows desktop application, related backend services, email processing worker, website, and support services (collectively, the "Service"). This Privacy Policy explains how we collect, use, disclose, and protect information when you use the Service.
            </p>
            <p className="mt-2 font-medium text-amber-300/90">
              By using the Service, you acknowledge this Privacy Policy. If you do not agree with it, do not use the Service.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              1. Who Controls Your Information
            </h3>
            <p>
              Swami Computers is the data controller for information we process to operate and support YellowQueue, except where we process information on behalf of a print-shop customer. Print shops using YellowQueue may be the controller of their customers' content and are responsible for providing any notices and obtaining any consent required by applicable law.
            </p>
            <p className="font-mono text-xs text-amber-400">
              Contact: support@yellowqueue.dev
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              2. Information We Collect
            </h3>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-amber-300">Account and store information</h4>
              <p>
                We collect information needed to create and manage an account, including store name, phone number, email address, password credentials, district, state, address, cache-folder preference, and account timestamps. Passwords are stored in hashed form; we do not store plaintext passwords.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-amber-300">Print jobs and files</h4>
              <p>
                We process information included in print jobs, including sender identifiers, recipient/store email addresses, WhatsApp phone numbers, customer names, message text, email subjects, document names, file metadata, page counts, print settings, job status, pricing information, and uploaded documents or images. File content may include personal or sensitive information supplied by you or your customers. You should not submit information that you are not authorized to process.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-amber-300">WhatsApp information</h4>
              <p>
                When a store connects WhatsApp Business, we may process WhatsApp Business account identifiers, business identifiers, phone-number identifiers, display phone numbers, verified business names, access tokens, incoming messages, sender phone numbers, message identifiers, media identifiers, and media files. We use this information to receive, organize, print, and send operational status messages for print jobs.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-amber-300">Email information</h4>
              <p>
                When mail is sent to a YellowQueue-managed store address, our email-processing service may receive the sender and recipient addresses, subject, plain-text body, message metadata, and attachments. We use this information to create and process print jobs for the intended store.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-amber-300">Device, diagnostic, and usage information</h4>
              <p>
                The desktop application may process local file paths, printer names and capabilities, application version, update status, error details, and application logs. The application stores authentication/session identifiers and selected application settings locally. We do not use the application to sell targeted advertising.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              3. How We Use Information
            </h3>
            <p>We use information to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 ml-2">
              <li>Create and authenticate YellowQueue accounts;</li>
              <li>Route print jobs to the correct store;</li>
              <li>Receive, download, store, preview, and print documents;</li>
              <li>Count pages and apply requested print settings;</li>
              <li>Send WhatsApp operational confirmations and status messages;</li>
              <li>Provide real-time job and printer status updates;</li>
              <li>Maintain local offline copies so authorized users can continue printing when temporarily disconnected;</li>
              <li>Provide customer support, diagnose failures, prevent abuse, and secure the Service;</li>
              <li>Deliver application updates and maintain update and installation records;</li>
              <li>Comply with legal obligations and enforce our agreements.</li>
            </ul>
            <p className="p-3 rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-300 text-xs font-medium">
              We do not use the contents of print jobs or private messages to train general-purpose artificial intelligence models, and we do not sell personal information.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              4. Legal Bases
            </h3>
            <p>
              Where applicable, we process information because it is necessary to perform a contract with you, to provide the Service you request, to pursue our legitimate interests in operating and securing the Service, to comply with legal obligations, or because you have provided consent. Print-shop customers determine the appropriate legal basis for content they submit through a store using YellowQueue.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              5. Local Storage and Offline Processing
            </h3>
            <p>
              YellowQueue is a Windows desktop application. To support previews and offline printing, the application may download and retain copies of print files and job information on the computer where it is installed. These local copies may remain until the user deletes them, clears the application cache, uninstalls the application, or the operating system removes them. Anyone with access to that Windows account or device may be able to access locally stored files. Keep the device protected with a strong Windows account, disk encryption, and appropriate access controls.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              6. Service Providers and Disclosures
            </h3>
            <p>
              We may disclose information to service providers that process it only as needed to provide YellowQueue, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 ml-2">
              <li>Cloud hosting, databases, queues, storage, monitoring, and infrastructure providers, including AWS or equivalent hosting providers;</li>
              <li>Cloudflare, for email routing and email webhook processing;</li>
              <li>Meta, for WhatsApp Business and WhatsApp Cloud API functionality;</li>
              <li>GitHub, for hosting YellowQueue release assets and delivering application updates;</li>
              <li>Authentication, logging, security, maintenance, and support providers;</li>
              <li>Government authorities, courts, or other parties when required by law or necessary to protect rights, safety, or the Service;</li>
              <li>A successor or acquiring entity in connection with a merger, sale, financing, or reorganization.</li>
            </ul>
            <p className="text-xs text-slate-400">
              We do not disclose message or document content to a provider unless that disclosure is necessary for the requested Service or required by law. Third-party providers process information under their own privacy policies and terms.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              7. International Transfers
            </h3>
            <p>
              Your information may be processed in countries other than the country where it was collected, including countries where our service providers operate. Where required, we use legally recognized safeguards for international transfers.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              8. Retention
            </h3>
            <p>
              We retain account information while the account is active and for as long as reasonably necessary for support, security, legal, accounting, and dispute-resolution purposes. Print jobs, files, messages, and attachments are retained according to the applicable store's operational needs, configuration, and deletion actions, subject to backups, legal holds, and technical recovery windows. Local files remain on the user's device until deleted as described above.
            </p>
            <p>
              Store administrators are responsible for deleting jobs and files they no longer need. To request deletion of information held by us, contact <span className="font-mono text-amber-300">support@yellowqueue.dev</span>. We may retain limited information where necessary to comply with law, prevent fraud, resolve disputes, or protect the Service.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              9. Security
            </h3>
            <p>
              We use reasonable administrative, technical, and organizational safeguards designed to protect information, including authenticated access, password hashing, access-controlled service credentials, encrypted HTTPS connections where supported, server-side authorization, and restricted webhook authentication. No internet service, computer, or storage system is completely secure. You are responsible for protecting your account credentials, Windows device, local cache, and connected business accounts.
            </p>
            <p className="text-xs font-mono text-amber-400/90 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
              Never place API keys, access tokens, webhook secrets, or passwords in source code, public repositories, screenshots, issue reports, or support messages.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              10. Your Choices and Rights
            </h3>
            <p>
              Depending on where you live, you may have rights to request access to, correction of, deletion of, restriction of, or portability of your personal information, or to object to certain processing. You may also withdraw consent where processing is based on consent. These rights may be limited by law or by our need to retain information for legitimate purposes.
            </p>
            <p>
              To exercise a right, contact <span className="font-mono text-amber-300">support@yellowqueue.dev</span> with your request, the account or store involved, and enough information for us to verify your identity. You may also contact your print-shop administrator for content submitted to that store. You may have the right to complain to your local data protection authority.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              11. Children's Privacy
            </h3>
            <p>
              The Service is intended for businesses and professional users and is not directed to children. We do not knowingly collect personal information directly from children. If you believe a child has provided information to us, contact <span className="font-mono text-amber-300">support@yellowqueue.dev</span>.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              12. Cookies and Similar Technologies
            </h3>
            <p>
              The desktop application uses local storage for session identifiers, store identifiers, application settings, and offline queue metadata. The Service may use necessary cookies or similar technologies for authentication and security in web-based components. We do not use these technologies for behavioral advertising through the desktop application.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              13. Third-Party Services
            </h3>
            <p>
              YellowQueue may link to or depend on third-party services, including Meta WhatsApp, Cloudflare, AWS, GitHub, and other infrastructure providers. Their privacy practices are governed by their own policies. Review those policies before connecting a third-party account or sending content through that service.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              14. Changes to This Policy
            </h3>
            <p>
              We may update this Privacy Policy to reflect changes in the Service, law, or our practices. We will update the effective date when we make changes. Material changes may also be communicated through the Service or our website where appropriate. Your continued use of the Service after an update means the updated policy applies.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white border-b border-white/[0.08] pb-1.5">
              15. Contact Us
            </h3>
            <p>
              For privacy questions, requests, or complaints, contact:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
              <p className="font-bold text-white">Swami Computers</p>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Email:</span>
                <span className="font-mono text-amber-400">support@yellowqueue.dev</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
            <p className="text-xs text-slate-400 italic">
              This policy is intended to describe YellowQueue's actual operating model. It is not legal advice. Before public launch, have qualified counsel review it for the countries and industries in which you operate, especially if stores process health, financial, education, government, or other regulated information.
            </p>
          </section>

          {/* Footer note inside modal */}
          <div className="pt-6 border-t border-white/[0.08] text-xs font-mono text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Copyright © 2026 Swami Computers. All rights reserved.</span>
            <span>support@yellowqueue.dev</span>
          </div>

        </div>

        {/* Action Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#07090E] flex items-center justify-between">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Contact Swami Computers</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-black transition-colors shadow-lg shadow-amber-400/20"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
