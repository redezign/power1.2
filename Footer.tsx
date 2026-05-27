'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, ArrowRight } from 'lucide-react';

const services = [
  { name: 'Car Battery', href: '#services' },
  { name: 'Bike Battery', href: '#services' },
  { name: 'Inverter Systems', href: '#services' },
  { name: 'Solar Energy', href: '#services' },
  { name: 'Wind Energy', href: '#services' },
  { name: 'Lithium Batteries', href: '#services' },
];

const company = [
  { name: 'About Us', href: '#about' },
  { name: 'How It Works', href: '#' },
  { name: 'Partner With Us', href: '#' },
  { name: 'Insights', href: '#insights' },
  { name: 'FAQ', href: '#' },
];

const contact = [
  { name: 'WhatsApp', href: 'https://wa.me/918655559777', value: '+91 8655559777' },
  { name: 'Email', href: 'mailto:info@poweradda.com', value: 'info@poweradda.com' },
  { name: 'Phone', href: 'tel:+918655559777', value: '+91 8655559777' },
];

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918655559777', '_blank');
  };

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-20 pb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Power Your Journey?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Get premium battery and energy solutions delivered to your doorstep.
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-brand-blue-500/25 group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 rounded-xl" />
                <Zap className="relative w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Power<span className="text-brand-blue-400">Adda</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Powering mobility and homes with premium energy solutions across Mumbai.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/918655559777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-green-500 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              {contact.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-300 hover:text-white transition-colors text-sm block"
                  >
                    <span className="text-gray-500 text-xs block">{item.name}</span>
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Quick Connect
            </h3>
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-green-500 hover:bg-brand-green-600 text-white font-medium rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </button>
            <p className="text-gray-500 text-xs text-center mt-3">
              Fastest way to reach us
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {new Date().getFullYear()} PowerAdda. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
