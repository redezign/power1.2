'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/918655559777', '_blank');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
              <Zap className="relative w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-semibold text-gray-900 tracking-tight">
              Power<span className="text-brand-blue-500">Adda</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              onClick={handleWhatsApp}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Get Quote
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue-500/25"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <Button
              variant="outline"
              onClick={handleWhatsApp}
              className="w-full justify-center py-3 rounded-full"
            >
              Get Quote
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="w-full justify-center py-3 bg-brand-blue-500 hover:bg-brand-blue-600 text-white rounded-full"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
