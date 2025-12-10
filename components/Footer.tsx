import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-corporate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <Globe className="h-6 w-6 text-corporate-blue" />
              <span className="text-xl font-bold">SPGlobal</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {COMPANY_INFO.tagline}
              <br/>
              Delivering excellence in global logistics and supply chain management.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-corporate-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-corporate-gold transition-colors">Our Services</Link></li>
              <li><Link to="/media" className="hover:text-corporate-gold transition-colors">Media & Press</Link></li>
              <li><Link to="/contact" className="hover:text-corporate-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-corporate-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-corporate-gold transition-colors">Air Freight</Link></li>
              <li><Link to="/services" className="hover:text-corporate-gold transition-colors">Ocean Freight</Link></li>
              <li><Link to="/services" className="hover:text-corporate-gold transition-colors">Project Cargo</Link></li>
              <li><Link to="/services" className="hover:text-corporate-gold transition-colors">Supply Chain Consulting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-corporate-blue shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-corporate-blue shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-corporate-blue shrink-0" />
                <span>{COMPANY_INFO.emails.general}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;