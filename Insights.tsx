'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

const articles = [
  {
    category: 'Battery Tips',
    title: 'How to Extend Your Car Battery Life',
    excerpt: 'Simple maintenance tips to maximize your car battery lifespan and avoid unexpected breakdowns.',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    href: '#',
  },
  {
    category: 'Inverter Guide',
    title: 'Choosing the Right Inverter for Your Home',
    excerpt: 'A comprehensive guide to selecting the perfect inverter capacity based on your power needs.',
    date: 'Jan 10, 2024',
    readTime: '7 min read',
    href: '#',
  },
  {
    category: 'Solar Energy',
    title: 'Solar Power ROI in Mumbai: What to Expect',
    excerpt: 'Understanding the return on investment for residential solar installations in Mumbai.',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    href: '#',
  },
  {
    category: 'Lithium Battery',
    title: 'LiFePO4 vs Lead Acid: A Modern Comparison',
    excerpt: 'Why lithium iron phosphate batteries are becoming the preferred choice for modern applications.',
    date: 'Dec 28, 2023',
    readTime: '8 min read',
    href: '#',
  },
  {
    category: 'EV Systems',
    title: 'Preparing Your Home for EV Energy Needs',
    excerpt: 'Essential considerations for charging infrastructure when switching to electric vehicles.',
    date: 'Dec 20, 2023',
    readTime: '6 min read',
    href: '#',
  },
  {
    category: 'Renewable Energy',
    title: 'The Future of Clean Energy in India',
    excerpt: 'How India is transitioning to renewable energy and what it means for consumers.',
    date: 'Dec 15, 2023',
    readTime: '5 min read',
    href: '#',
  },
];

const categoryColors: Record<string, string> = {
  'Battery Tips': 'bg-blue-100 text-blue-700',
  'Inverter Guide': 'bg-amber-100 text-amber-700',
  'Solar Energy': 'bg-orange-100 text-orange-700',
  'Lithium Battery': 'bg-rose-100 text-rose-700',
  'EV Systems': 'bg-emerald-100 text-emerald-700',
  'Renewable Energy': 'bg-cyan-100 text-cyan-700',
};

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-white">
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
            Insights & Resources
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Energy Knowledge Hub
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Expert guides, tips, and insights on batteries, inverters, solar energy, and modern power systems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {articles.map((article, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-200">
                {/* Card Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${categoryColors[article.category]}`}>
                      {article.category.split(' ')[0]}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-medium text-brand-blue-600 group-hover:text-brand-blue-700 transition-colors">
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-medium hover:border-brand-blue-500 hover:text-brand-blue-600 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
