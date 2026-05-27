'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOnce } from '@/lib/animations';

const aboutSections = [
  {
    title: 'Who We Are',
    content: 'PowerAdda is a Mumbai-based energy and mobility solutions company focused on delivering premium battery products and renewable energy systems. We combine cutting-edge technology with exceptional service to power homes and vehicles across the city.',
  },
  {
    title: 'What We Do',
    content: 'We provide comprehensive energy solutions including car and bike battery replacement, inverter systems, solar installations, wind energy projects, and advanced lithium battery systems. Our doorstep service ensures convenience without compromising quality.',
  },
  {
    title: 'Our Mission',
    content: 'To make reliable energy accessible to every home and vehicle in Mumbai through premium products, expert installation, and transparent service. We aim to build trust through consistent quality and customer satisfaction.',
  },
  {
    title: 'Our Vision',
    content: 'To become India\'s leading clean energy and mobility infrastructure platform. We envision a future where sustainable energy solutions are affordable, accessible, and widely adopted across urban and rural India.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Image/Visual */}
          <motion.div
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50 to-brand-blue-100/50 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Abstract energy pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 10}
                        x2="100"
                        y2={i * 10}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gray-900"
                      />
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <line
                        key={`v-${i}`}
                        x1={i * 10}
                        y1="0"
                        x2={i * 10}
                        y2="100"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-gray-900"
                      />
                    ))}
                  </svg>
                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-600 flex items-center justify-center mx-auto mb-4 transform rotate-12 shadow-lg shadow-brand-blue-500/25">
                      <svg className="w-12 h-12 text-white transform -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">PowerAdda</p>
                    <p className="text-sm text-gray-500 mt-1">Since 2024</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 right-8 w-16 h-16 bg-brand-blue-100 rounded-lg flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-brand-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-12 left-8 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
                >
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.917M11 3.055V5a2 2 0 002 2h1a2 2 0 012 2 2 2 0 002 2v2.917" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={slideInRight}
            className="space-y-8"
          >
            <div>
              <span className="inline-block text-sm font-medium text-brand-blue-600 uppercase tracking-wider mb-4">
                About PowerAdda
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Powering Mumbai&apos;s Energy Future
              </h2>
            </div>

            <div className="space-y-6">
              {aboutSections.map((section, index) => (
                <div key={index} className="border-l-2 border-brand-blue-100 pl-6 py-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue-500" />
                  <span>Mumbai Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Renewable Expansion</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
