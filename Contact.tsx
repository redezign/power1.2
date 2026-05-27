'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918655559777', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@poweradda.com';
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left side - Contact Info */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-sm font-medium text-brand-blue-600 uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or need assistance? We are here to help. Reach out to us through any of these channels.
            </p>

            <div className="space-y-6 mb-10">
              {/* WhatsApp - Primary */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-green-50/50 border border-brand-green-500/10">
                <div className="w-12 h-12 rounded-xl bg-brand-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">WhatsApp</p>
                  <p className="text-gray-600">+91 8655559777</p>
                  <p className="text-sm text-gray-500 mt-1">Fastest response time</p>
                </div>
              </div>

              {/* Email */}
              <button
                onClick={handleEmail}
                className="flex items-start gap-4 p-4 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-500/10 w-full text-left hover:bg-brand-blue-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <p className="text-gray-600">info@poweradda.com</p>
                  <p className="text-sm text-gray-500 mt-1">Business inquiries</p>
                </div>
              </button>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <p className="text-gray-600">+91 8655559777</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat, 9AM-8PM</p>
                </div>
              </div>
            </div>

            {/* Coverage */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-brand-blue-50 to-white border border-brand-blue-100">
              <div className="w-12 h-12 rounded-xl bg-white border border-brand-blue-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Service Coverage</p>
                <p className="text-gray-600">Complete Mumbai coverage including:</p>
                <p className="text-sm text-gray-500 mt-1">South Mumbai, Western Suburbs, Central Mumbai, Navi Mumbai, Thane</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Map placeholder */}
          <motion.div variants={fadeInUp}>
            <div className="relative h-full min-h-[400px] lg:min-h-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-200">
              {/* Map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-brand-blue-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">PowerAdda HQ</h3>
                  <p className="text-gray-600 text-sm max-w-xs">
                    Serving Mumbai with premium energy solutions
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Abstract map pattern */}
              <div className="absolute inset-0 opacity-[0.02]">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 5}
                      x2="100"
                      y2={i * 5}
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-gray-900"
                    />
                  ))}
                  {[...Array(20)].map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 5}
                      y1="0"
                      x2={i * 5}
                      y2="100"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-gray-900"
                    />
                  ))}
                </svg>
              </div>

              {/* Location markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-brand-blue-500 rounded-full shadow-lg animate-pulse" />
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-brand-blue-400 rounded-full shadow-md" />
              <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-brand-blue-400 rounded-full shadow-md" />
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-brand-blue-400 rounded-full shadow-md" />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-16"
        >
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-brand-green-500 hover:bg-brand-green-600 text-white text-base font-medium px-10 py-6 rounded-full transition-all duration-300 shadow-lg shadow-brand-green-500/25"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
