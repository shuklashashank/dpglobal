import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'Freight' | 'Specialized' | 'Consulting';
  details?: string[];
}

export interface PressRelease {
  id: string;
  title: string;
  date: string;
  summary: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  path: string;
}