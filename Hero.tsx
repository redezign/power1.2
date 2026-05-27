'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918655559777', '_blank');
  };

  const handleGetQuote = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Energy Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-blue-50 rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-50 to-white rounded-full blur-3xl opacity-50" />

        {/* Energy flow lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-900" />
        </svg>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-blue-400 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              y: [null, `${Math.random() * 100}%`],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue-50 border border-brand-blue-100 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-500" />
            </span>
            <span className="text-sm font-medium text-brand-blue-700">
              Powering Mumbai&apos;s Energy Future
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6"
          >
            Fast & Reliable Battery Replacement
            <span className="block mt-2 text-brand-blue-500">at Your Doorstep</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto"
          >
            Premium Car, Bike & Inverter Battery Solutions Across Mumbai
          </motion.p>

          {/* Secondary line */}
          <motion.p
            variants={fadeInUp}
            className="text-base text-gray-500 mb-10"
          >
            Modern energy systems for mobility and homes
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={handleGetQuote}
              size="lg"
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white text-base font-medium px-8 py-6 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-brand-blue-500/25 group"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="text-base font-medium px-8 py-6 rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
            >
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Genuine Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Fast Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-600">Mumbai Coverage</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-1"
        >
          <motion.div
            animate={{ height: ['20%', '40%', '20%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
