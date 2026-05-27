'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { supabase } from '@/lib/supabase';

const serviceTypes = [
  { value: 'car_battery', label: 'Car Battery Replacement' },
  { value: 'bike_battery', label: 'Bike Battery Solutions' },
  { value: 'inverter', label: 'Inverter & Home Backup' },
  { value: 'solar', label: 'Solar Energy Systems' },
  { value: 'wind', label: 'Wind Energy Solutions' },
  { value: 'lithium', label: 'Lithium Battery Systems' },
  { value: 'other', label: 'Other Energy Solutions' },
];

const vehicleTypes = [
  { value: 'hatchback', label: 'Hatchback' },
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
  { value: 'bike', label: 'Two Wheeler' },
  { value: 'three_wheeler', label: 'Three Wheeler' },
  { value: 'commercial', label: 'Commercial Vehicle' },
  { value: 'na', label: 'Not Applicable' },
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    serviceType: '',
    vehicleType: '',
    location: '',
    message: '',
  });

  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('leads').insert([
        {
          full_name: formData.fullName,
          mobile_number: formData.mobileNumber,
          service_type: formData.serviceType,
          vehicle_type: formData.vehicleType || null,
          location: formData.location || null,
          message: formData.message || null,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({
        fullName: '',
        mobileNumber: '',
        serviceType: '',
        vehicleType: '',
        location: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Something went wrong. Please try again or WhatsApp us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918655559777', '_blank');
  };

  return (
    <section id="lead-form" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-brand-blue-600 uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Request a Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within hours.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-8">
                  Team PowerAdda will contact you shortly.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Submit Another Request
                </Button>
                <Button onClick={handleWhatsApp}>
                  WhatsApp Us Now
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={fadeInUp}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 p-8 sm:p-10"
              >
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`h-12 ${errors.fullName ? 'border-red-300 focus:border-red-500' : ''}`}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <Label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700 mb-2 block">
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      className={`h-12 ${errors.mobileNumber ? 'border-red-300 focus:border-red-500' : ''}`}
                    />
                    {errors.mobileNumber && (
                      <p className="text-sm text-red-500 mt-1">{errors.mobileNumber}</p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <Label htmlFor="serviceType" className="text-sm font-medium text-gray-700 mb-2 block">
                      Service Type <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className={`w-full h-12 px-4 pr-10 text-gray-700 bg-white border rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent ${
                          errors.serviceType ? 'border-red-300' : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    {errors.serviceType && (
                      <p className="text-sm text-red-500 mt-1">{errors.serviceType}</p>
                    )}
                  </div>

                  {/* Expandable Additional Fields */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowAdditionalFields(!showAdditionalFields)}
                      className="flex items-center gap-2 text-sm text-brand-blue-600 hover:text-brand-blue-700 transition-colors"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${showAdditionalFields ? 'rotate-180' : ''}`} />
                      {showAdditionalFields ? 'Less details' : 'Add more details (optional)'}
                    </button>

                    <AnimatePresence>
                      {showAdditionalFields && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 space-y-6">
                            {/* Vehicle Type */}
                            <div>
                              <Label htmlFor="vehicleType" className="text-sm font-medium text-gray-700 mb-2 block">
                                Vehicle Type
                              </Label>
                              <div className="relative">
                                <select
                                  id="vehicleType"
                                  value={formData.vehicleType}
                                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                                  className="w-full h-12 px-4 pr-10 text-gray-700 bg-white border border-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent"
                                >
                                  <option value="">Select vehicle type</option>
                                  {vehicleTypes.map((vehicle) => (
                                    <option key={vehicle.value} value={vehicle.value}>
                                      {vehicle.label}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                              </div>
                            </div>

                            {/* Location */}
                            <div>
                              <Label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2 block">
                                Location / Area
                              </Label>
                              <Input
                                id="location"
                                type="text"
                                placeholder="Your location in Mumbai"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="h-12"
                              />
                            </div>

                            {/* Message */}
                            <div>
                              <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                                Additional Message
                              </Label>
                              <Textarea
                                id="message"
                                placeholder="Any specific requirements or questions..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={3}
                                className="resize-none"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit Error */}
                  {errors.submit && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                      <p className="text-sm text-red-600">{errors.submit}</p>
                    </div>
                  )}

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 h-12 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-brand-blue-500/25"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Get Instant Quote'
                      )}
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      variant="outline"
                      className="flex-1 h-12 rounded-full border-2"
                    >
                      WhatsApp Us Instead
                    </Button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
