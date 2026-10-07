import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import topLogo from '../assets/Logo 2.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const navBackground = isScrolled ? 'bg-white shadow-md py-3' : (isHome ? 'bg-transparent py-5' : 'bg-white shadow-sm py-3');
  const defaultTextColor = isScrolled || !isHome ? 'text-primary hover:text-accent' : 'text-white hover:text-blue-200';
  const logoColor = isScrolled || !isHome ? 'text-primary' : 'text-white';

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`flex items-center`}>
          <img src={topLogo} alt="GISA" className="h-10 object-contain rounded-sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative text-sm tracking-wide transition-colors ${
                  active
                    ? (isScrolled || !isHome ? 'text-accent font-bold' : 'text-white font-bold')
                    : defaultTextColor
                }`}
              >
                {link.name}
                {active && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isScrolled || !isHome ? 'bg-accent' : 'bg-white'}`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex">
          <Link 
            to="/request-quote" 
            className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-md font-medium text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled || !isHome ? 'text-primary' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled || !isHome ? 'text-primary' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`font-medium text-lg py-2 border-b border-gray-50 flex justify-between items-center ${active ? 'text-accent font-bold' : 'text-primary'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronRight size={16} className={active ? "text-accent" : "text-gray-400"} />
                  </Link>
                );
              })}
              <Link 
                to="/request-quote" 
                className="bg-primary text-white text-center py-3 rounded-md font-medium mt-4 mb-2"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
