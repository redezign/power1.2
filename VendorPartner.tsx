'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Loader2, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { supabase } from '@/lib/supabase';

const categories = [
  { value: 'battery_manufacturer', label: 'Battery Manufacturer' },
  { value: 'battery_distributor', label: 'Battery Distributor' },
  { value: 'solar_installer', label: 'Solar Installer' },
  { value: 'inverter_dealer', label: 'Inverter Dealer' },
  { value: 'automotive_service', label: 'Automotive Service Center' },
  { value: 'transport_fleet', label: 'Transport Fleet Owner' },
  { value: 'renewable_energy', label: 'Renewable Energy Company' },
  { value: 'other', label: 'Other' },
];

export default function VendorPartner() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    mobileNumber: '',
    category: '',
    city: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('vendor_partners').insert([
        {
          business_name: formData.businessName,
          contact_person: formData.contactPerson,
          mobile_number: formData.mobileNumber,
          category: formData.category,
          city: formData.city,
          message: formData.message || null,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({
        businessName: '',
        contactPerson: '',
        mobileNumber: '',
        category: '',
        city: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left side - Info */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block text-sm font-medium text-brand-blue-600 uppercase tracking-wider mb-4">
              Partnership Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Partner With PowerAdda
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our growing network of energy solution providers. We are actively seeking partnerships with manufacturers, distributors, and service providers across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-50 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-brand-blue-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">B2B Partnerships</h3>
                  <p className="text-sm text-gray-600">Collaborate on bulk orders and supply chain</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality Network</h3>
                  <p className="text-sm text-gray-600">Premium standards and mutual growth</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6 21h12a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75v12A2.25 2.25 0 006 21z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Pan-India Reach</h3>
                  <p className="text-sm text-gray-600">Expand your business nationwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fast Onboarding</h3>
                  <p className="text-sm text-gray-600">Quick integration and support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div variants={fadeInUp}>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Application Received!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Our partnerships team will review your application and contact you within 2-3 business days.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Submit Another Application
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Business Name */}
                    <div>
                      <Label htmlFor="businessName" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Business Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="businessName"
                        type="text"
                        placeholder="Your company or business name"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className={`h-11 ${errors.businessName ? 'border-red-300 focus:border-red-500' : ''}`}
                      />
                      {errors.businessName && (
                        <p className="text-sm text-red-500 mt-1">{errors.businessName}</p>
                      )}
                    </div>

                    {/* Contact Person */}
                    <div>
                      <Label htmlFor="contactPerson" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Contact Person <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contactPerson"
                        type="text"
                        placeholder="Your full name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className={`h-11 ${errors.contactPerson ? 'border-red-300 focus:border-red-500' : ''}`}
                      />
                      {errors.contactPerson && (
                        <p className="text-sm text-red-500 mt-1">{errors.contactPerson}</p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <Label htmlFor="vendorMobile" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Mobile Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="vendorMobile"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                        className={`h-11 ${errors.mobileNumber ? 'border-red-300 focus:border-red-500' : ''}`}
                      />
                      {errors.mobileNumber && (
                        <p className="text-sm text-red-500 mt-1">{errors.mobileNumber}</p>
                      )}
                    </div>

                    {/* Category */}
                    <div>
                      <Label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Business Category <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <select
                          id="category"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className={`w-full h-11 px-4 pr-10 text-gray-700 bg-white border rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent ${
                            errors.category ? 'border-red-300' : 'border-gray-200'
                          }`}
                        >
                          <option value="">Select category</option>
                          {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                      {errors.category && (
                        <p className="text-sm text-red-500 mt-1">{errors.category}</p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        City <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={`h-11 ${errors.city ? 'border-red-300 focus:border-red-500' : ''}`}
                      />
                      {errors.city && (
                        <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="vendorMessage" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="vendorMessage"
                        placeholder="Tell us about your business and partnership interest..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="resize-none"
                      />
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                      <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                        <p className="text-sm text-red-600">{errors.submit}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-brand-blue-500/25"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Partnership Request'
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
