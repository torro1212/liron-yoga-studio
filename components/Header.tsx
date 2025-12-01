import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_NAME, CONTACT } from '../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'בית', href: '#' },
    { name: 'שירותים', href: '#services' },
    { name: 'אודות', href: '#about' },
    { name: 'המלצות', href: '#testimonials' },
    { name: 'שאלות', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/80 backdrop-blur-xl shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50">
           <h1 className={`font-black text-2xl tracking-tight ${isScrolled ? 'text-primary' : 'text-white text-shadow-hero'}`}>
            {BUSINESS_NAME}
           </h1>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-lg hover:text-primary transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-zinc-100 text-shadow-hero'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2 rounded-full font-bold transition-all hover:scale-105 ${
              isScrolled 
                ? 'bg-primary text-white shadow-lg' 
                : 'bg-white text-primary shadow-xl'
            }`}
          >
            צור קשר
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 p-2 rounded-full ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-gray-800 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-white text-xl font-bold rounded-full shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                צור קשר
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;