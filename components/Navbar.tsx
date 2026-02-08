import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/Services" },
    { name: "News & Events", path: "/media" },
    { name: "Contact us", path: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 border-b
          ${scrolled
            ? "backdrop-blur-lg shadow-lg border-gray-200/50"
            : "bg-white/95 backdrop-blur-sm border-transparent"
          }`}
      >
        <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:scale-105 transition rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={closeMobileMenu}
          >
            <img
              src="./Test/assets/Dp Global Logistics Logo.png"
              alt="DP Globals"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition pb-1 border-b-2 ${isActive
                    ? "text-primary border-primary"
                    : "text-gray-800 hover:text-primary border-transparent hover:border-primary/30"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-20">
          {/* Close button at top */}
          <div className="absolute top-6 right-4">
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-800" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto px-4">
            <div className="space-y-2 py-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 border-l-4 ${isActive
                      ? "bg-primary/10 text-primary border-primary"
                      : "text-gray-800 hover:bg-gray-100 hover:text-primary border-transparent"
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Optional: Add contact info or CTA at bottom */}
          <div className="border-t border-gray-200 p-4">
            <div className="text-sm text-gray-600">
              <p className="font-semibold mb-1">DP Global Logistics</p>
              <p className="text-xs">Logistically Ahead</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prevent body scroll when mobile menu is open */}
      <style>
        {`
          body {
            overflow: ${isMobileMenuOpen ? 'hidden' : 'auto'};
          }
        `}
      </style>
    </>
  );
};

export default Navbar;