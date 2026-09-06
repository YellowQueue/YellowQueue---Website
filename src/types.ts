export type JobStatus = 'queued' | 'spooling' | 'routing' | 'printing' | 'completed' | 'healed';

export interface PrintJob {
  id: string;
  token: string;
  fileName: string;
  fileSize: string;
  pages: number;
  format: 'PDF' | 'DOCX' | 'TIFF' | 'DWG' | 'IMAGE';
  colorMode: 'B&W' | 'Full Color';
  priority: 'Normal' | 'High' | 'Rush';
  assignedPrinter: string;
  progress: number;
  status: JobStatus;
  pagesPrinted: number;
  timestamp: string;
  spoolLatencyMs: number;
}

export interface PrinterDevice {
  id: string;
  name: string;
  model: string;
  connection: 'LAN / RAW 9100' | 'USB 3.0' | 'IPP Network';
  ip: string;
  status: 'idle' | 'printing' | 'ready' | 'spooling';
  queueDepth: number;
  speedPpm: number;
  colorCapable: boolean;
  trayLevel: number; // percentage
  tonerLevel: number; // percentage
  jobsHandledToday: number;
}

export interface SpoolLog {
  id: string;
  timestamp: string;
  level: 'info' | 'success' | 'warn' | 'system';
  message: string;
  tag: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  priceMonthly: number;
  priceAnnual: number;
  priceLifetime: number;
  licenseScope: string;
  activationLimit: string;
  features: string[];
  ctaLabel: string;
}

export interface FaqItem {
  id: string;
  category: 'Compatibility' | 'Updates' | 'Offline & Licensing' | 'Performance' | 'WhatsApp & Email' | 'Privacy & Data' | string;
  question: string;
  answer: string;
}
