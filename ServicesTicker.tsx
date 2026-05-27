'use client';

import { motion } from 'framer-motion';

const services = [
  'Car Batteries',
  'Bike Batteries',
  'Inverter Systems',
  'Solar Energy',
  'Wind Energy',
  'Lithium Batteries',
  'Home Backup',
  'Energy Infrastructure',
  'Smart Power Solutions',
];

export default function ServicesTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50/50 border-y border-gray-100 py-4">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animationPlayState = 'running';
        }}
      >
        {/* First set */}
        {services.map((service, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-6"
          >
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              {service}
            </span>
            <span className="text-gray-300">•</span>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {services.map((service, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-6"
          >
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              {service}
            </span>
            <span className="text-gray-300">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
