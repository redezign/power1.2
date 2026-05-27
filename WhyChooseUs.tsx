'use client';

import { motion } from 'framer-motion';
import { Check, Clock, MapPin, Shield, Users, Zap, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const reasons = [
  {
    icon: Shield,
    title: 'Genuine Products',
    description: 'Authentic batteries from trusted brands with full warranty',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick service delivery within hours across Mumbai',
  },
  {
    icon: MapPin,
    title: 'Doorstep Installation',
    description: 'Professional setup at your location, no hassle',
  },
  {
    icon: Check,
    title: 'Transparent Pricing',
    description: 'Clear quotes with no hidden charges or surprises',
  },
  {
    icon: Users,
    title: 'Expert Technicians',
    description: 'Skilled professionals with years of experience',
  },
  {
    icon: Globe,
    title: 'Mumbai Coverage',
    description: 'Complete coverage across Mumbai and surrounding areas',
  },
  {
    icon: Zap,
    title: 'Renewable Energy Vision',
    description: 'Committed to sustainable energy solutions for future',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50/50">
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
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            The PowerAdda Difference
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We combine premium products with exceptional service to deliver the best energy solutions experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 mb-5 group-hover:shadow-md group-hover:border-brand-blue-100 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-brand-blue-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
