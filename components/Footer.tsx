import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Plane,
  Ship,
  Box,
  BarChart3,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#344357] via-[#2a3a4e] to-[#1f2d3d] text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-white">
              {/* Logo */}
              <img
                src="./Test/assets/Dp Global Logistics Logo.png"
                alt="DP Global Logo"
                className="w-17 h-17 object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-white/95">
              <span className="block mb-2 font-semibold text-corporate-blue">
                Navigating Tomorrow&apos;s Supply Chain, Today.
              </span>
              At D P GLOBAL LOGISTICS, we began our journey in November 2021,
              backed by over 15 years of industry experience prior to the
              foundation of our organization.
              <br /><br />
              Our professional approach and deep working knowledge enable us
              to plan and execute your material deliveries with complete
              protection and precision at their designated destinations.
            </p>

            <div className="flex gap-4 pt-2">
              <a className="hover:text-white transition cursor-pointer">
                <Linkedin size={18} />
              </a>
              <a className="hover:text-white transition cursor-pointer">
                <Twitter size={18} />
              </a>
              <a className="hover:text-white transition cursor-pointer">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/90">
              <li>
                <Link to="/" className="hover:text-corporate-blue transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-corporate-blue transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-corporate-blue transition">Contact Us</Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-corporate-blue transition">News & Events</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Core Services</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex items-center gap-3">
                <Plane size={18} className="text-corporate-blue" /> Air Freight
              </li>
              <li className="flex items-center gap-3">
                <Ship size={18} className="text-corporate-blue" /> Ocean Freight
              </li>
              <li className="flex items-center gap-3">
                <Box size={18} className="text-corporate-blue" /> Project Cargo
              </li>
              <li className="flex items-center gap-3">
                <BarChart3 size={18} className="text-corporate-blue" /> Supply Chain Consulting
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-5 text-sm text-white/90">
              <p>
                <strong className="text-white">Address:</strong><br />
                Flat No. 123, 2nd Floor<br />
                New Four Storey, Vishal Enclave<br />
                Tagore Garden Extn.<br />
                New Delhi – 110027
              </p>

              <p>
                <strong className="text-white">Phone:</strong><br />
                +91 9999061995<br />
                +91 9891711626
              </p>

              <p>
                <strong className="text-white">Email:</strong><br />
                Sales: accounts@dpglobal.co.in<br />
                General: vijay.shukla@dpglobal.co.in
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-slate-700 pt-6 text-center text-xs text-white/70">
          © {new Date().getFullYear()} D P GLOBAL. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
