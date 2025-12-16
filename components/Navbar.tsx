import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Media & Press', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-black py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${scrolled ? 'bg-corporate-blue' : 'bg-white'}`}>
              <Globe className={`h-8 w-8 ${scrolled ? 'text-white' : 'text-corporate-blue'}`} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-corporate-900' : 'text-white'}`}>
              D P GLOBAL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled 
                    ? isActive(link.path) ? 'text-corporate-blue font-bold' : 'text-slate-600 hover:text-corporate-blue'
                    : isActive(link.path) ? 'text-corporate-gold font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                scrolled
                  ? 'bg-corporate-blue text-white hover:bg-blue-700'
                  : 'bg-white text-corporate-900 hover:bg-slate-100'
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-corporate-blue bg-blue-50'
                    : 'text-slate-600 hover:text-corporate-blue hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
               <Link
                to="/contact"
                className="block w-full text-center px-5 py-3 rounded-md text-base font-bold bg-corporate-blue text-white hover:bg-blue-700"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
