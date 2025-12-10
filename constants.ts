import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  ClipboardCheck, 
  TrendingUp, 
  Anchor
} from 'lucide-react';
import { Service, PressRelease, NewsArticle } from './types';

export const COMPANY_INFO = {
  name: "SPGlobal",
  owner: "Vijay Shukla",
  tagline: "Navigating Tomorrow's Supply Chain, Today.",
  intro: "Under the visionary leadership of Vijay Shukla, SPGlobal redefines logistics through reliability, technological integration, and deep market expertise. We don't just move cargo; we optimize your entire value chain.",
  address: "1204, Trade Tower, Bandra-Kurla Complex, Mumbai, MH 400051, India",
  emails: {
    sales: "sales@spglobal.com",
    careers: "careers@spglobal.com",
    general: "info@spglobal.com",
  },
  phone: "+91 22 4567 8900"
};

export const SERVICES: Service[] = [
  {
    id: 'air-freight',
    title: "Air Freight",
    description: "Speed, global reach, and handling of time-critical shipments.",
    category: 'Freight',
    icon: Plane,
    details: ["Express Global Delivery", "Time-Critical Cargo", "Charter Services"]
  },
  {
    id: 'ocean-freight',
    title: "Ocean Freight",
    description: "Comprehensive FCL and LCL options with global port coverage.",
    category: 'Freight',
    icon: Ship,
    details: ["Full Container Load (FCL)", "Less than Container Load (LCL)", "Intermodal Solutions"]
  },
  {
    id: 'ground-transport',
    title: "Ground Transportation",
    description: "Last-mile delivery, FTL, and LTL services within India and connecting hubs.",
    category: 'Freight',
    icon: Truck,
    details: ["National Trucking Network", "Last-Mile Delivery", "Cross-Border Logistics"]
  },
  {
    id: 'project-cargo',
    title: "Project Cargo & Heavy Lift",
    description: "Expert handling of oversized, complex, or high-value industrial equipment.",
    category: 'Specialized',
    icon: Anchor,
    details: ["Oversized Machinery", "Industrial Plant Relocation", "Route Survey & Planning"]
  },
  {
    id: 'customs-compliance',
    title: "Customs & Compliance",
    description: "Expertise in navigating complex international trade regulations.",
    category: 'Specialized',
    icon: ClipboardCheck,
    details: ["Import/Export Clearance", "Regulatory Compliance", "Duty Drawback"]
  },
  {
    id: 'consulting',
    title: "Supply Chain Consulting",
    description: "Optimizing client logistics for efficiency and cost savings.",
    category: 'Consulting',
    icon: TrendingUp,
    details: ["Network Design", "Cost Optimization", "Inventory Management"]
  }
];

export const PRESS_RELEASES: PressRelease[] = [
  {
    id: '1',
    title: "SPGlobal Announces New European Logistics Hub",
    date: "October 15, 2023",
    summary: "Expanding our footprint to better serve the Euro-Asian trade corridor with a state-of-the-art facility in Rotterdam."
  },
  {
    id: '2',
    title: "Vijay Shukla Interviewed on Future of Indian Trade",
    date: "September 22, 2023",
    summary: "Our founder discusses the pivotal role of digitalization in modernizing India's supply chain infrastructure."
  },
  {
    id: '3',
    title: "SPGlobal Achieves ISO 9001:2015 Certification",
    date: "August 05, 2023",
    summary: "Reaffirming our commitment to quality management and operational excellence."
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: "Top Logistics Companies to Watch in 2024",
    source: "Global Trade Magazine",
    date: "November 2023",
    url: "#"
  },
  {
    id: '2',
    title: "The Tech Revolution in Freight Forwarding",
    source: "Supply Chain Digest",
    date: "October 2023",
    url: "#"
  }
];