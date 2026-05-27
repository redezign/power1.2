'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const faqs = [
  {
    question: 'What types of batteries do you support?',
    answer: 'We support a wide range of batteries including lead-acid, AGM, gel, lithium-ion, and LiFePO4 batteries for cars, bikes, inverters, and energy storage systems. We work with major brands like Exide, Amaron, Luminous, and others.',
  },
  {
    question: 'How does doorstep battery installation work?',
    answer: 'Simply contact us via WhatsApp or our form. Share your requirements and location. Our technician will arrive at your doorstep with the battery and necessary tools. Installation typically takes 15-30 minutes depending on the vehicle type.',
  },
  {
    question: 'What is your service coverage in Mumbai?',
    answer: 'We cover all major areas across Mumbai including South Mumbai, Western Suburbs, Central Mumbai, Navi Mumbai, Thane, and Mira-Bhayander. Service time varies by location, typically within 2-4 hours of booking confirmation.',
  },
  {
    question: 'Do you provide inverter and home backup solutions?',
    answer: 'Yes, we offer complete inverter solutions including battery selection, installation, and maintenance. We also provide home backup systems including solar hybrid inverters and lithium battery storage for uninterrupted power.',
  },
  {
    question: 'What are your solar energy services?',
    answer: 'We provide residential and commercial solar installations including rooftop solar panels, inverters, and battery storage systems. Our team handles everything from site assessment and design to installation and maintenance.',
  },
  {
    question: 'Do you offer warranty on products and services?',
    answer: 'All genuine products come with manufacturer warranty. Installation service is covered under our service warranty. We provide proper documentation and bills for all purchases.',
  },
  {
    question: 'What are your renewable energy expansion plans?',
    answer: 'PowerAdda is expanding into wind energy solutions, EV charging infrastructure, and smart grid systems. We are building partnerships to offer comprehensive clean energy solutions across India.',
  },
  {
    question: 'How quickly can I expect service after booking?',
    answer: 'For standard battery replacement, we typically provide same-day service within 2-4 hours. For complex installations like solar or inverter systems, we schedule within 24-48 hours after site assessment.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Common Questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600"
          >
            Find answers to frequently asked questions about our services and solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900 pr-8">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  openIndex === index ? 'bg-brand-blue-500 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
