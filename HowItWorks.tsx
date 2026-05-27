'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ClipboardCheck, Wrench } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Contact PowerAdda',
    description: 'Reach out via WhatsApp or our form. Tell us your requirements and location.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Get Expert Recommendation',
    description: 'Our team analyzes your needs and recommends the best product solution.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Doorstep Installation',
    description: 'Our technician arrives at your location for professional setup.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-sm font-medium text-brand-blue-600 uppercase tracking-wider mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Simple Three-Step Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Getting your battery replaced has never been easier. Follow these simple steps.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-brand-blue-500/10 rounded-full blur-xl" />
                    <div className="relative w-20 h-20 rounded-full bg-white border-2 border-brand-blue-100 flex items-center justify-center shadow-lg shadow-brand-blue-500/5">
                      <step.icon className="w-8 h-8 text-brand-blue-500" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-blue-500 text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
