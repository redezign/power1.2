'use client';

import { motion } from 'framer-motion';
import { Car, Bike, Battery, Sun, Wind, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce, hoverLift } from '@/lib/animations';

const services = [
  {
    icon: Car,
    title: 'Car Battery Replacement',
    description: 'Doorstep car battery replacement across Mumbai. Fast, reliable service with genuine products.',
    color: 'from-blue-50 to-blue-100/50',
    iconColor: 'text-blue-600',
    borderColor: 'hover:border-blue-200',
  },
  {
    icon: Bike,
    title: 'Bike Battery Solutions',
    description: 'Premium bike batteries with expert installation. Quality assurance and warranty included.',
    color: 'from-emerald-50 to-emerald-100/50',
    iconColor: 'text-emerald-600',
    borderColor: 'hover:border-emerald-200',
  },
  {
    icon: Battery,
    title: 'Inverter & Home Backup',
    description: 'Complete home power backup systems. Inverter batteries for uninterrupted electricity.',
    color: 'from-amber-50 to-amber-100/50',
    iconColor: 'text-amber-600',
    borderColor: 'hover:border-amber-200',
  },
  {
    icon: Sun,
    title: 'Solar Energy Systems',
    description: 'Clean solar installations for homes and businesses. Reduce energy costs sustainably.',
    color: 'from-orange-50 to-orange-100/50',
    iconColor: 'text-orange-600',
    borderColor: 'hover:border-orange-200',
  },
  {
    icon: Wind,
    title: 'Wind Energy Solutions',
    description: 'Modern wind energy infrastructure for sustainable power generation projects.',
    color: 'from-cyan-50 to-cyan-100/50',
    iconColor: 'text-cyan-600',
    borderColor: 'hover:border-cyan-200',
  },
  {
    icon: Zap,
    title: 'Lithium Battery Systems',
    description: 'Advanced LiFePO4 and lithium-ion battery packs for mobility and energy storage.',
    color: 'from-rose-50 to-rose-100/50',
    iconColor: 'text-rose-600',
    borderColor: 'hover:border-rose-200',
  },
];

export default function ServicesGrid() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
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
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Complete Energy Solutions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            From mobility to home power systems, we deliver premium energy solutions with expert installation and support.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={hoverLift}
              onClick={scrollToForm}
              className={`group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 cursor-pointer ${service.borderColor} hover:shadow-xl hover:shadow-gray-100/50`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
