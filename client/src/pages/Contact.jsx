import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { servicesData } from '../utils/servicesData';
import { API_BASE_URL } from '../config';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, data);
      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Hisabtech Accounting</title>
        <meta name="description" content="Get in touch with our accounting experts in Saudi Arabia. We serve Riyadh, Jeddah, Dammam, Khobar, and Jubail." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy text-white pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Let's Talk About Your Business
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Reach out to our experts for a free consultation or to request a quote.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-navy mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-gold h-6 w-6 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Office Location</h4>
                    <p className="text-gray-600 mt-1">King Fahd Road, Olaya District<br/>Riyadh, Saudi Arabia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-gold h-6 w-6 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Phone Number</h4>
                    <p className="text-gray-600 mt-1">+966 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-gold h-6 w-6 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Email Address</h4>
                    <p className="text-gray-600 mt-1">info@hisabtech.com.sa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-gold h-6 w-6 mr-4 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy">Working Hours</h4>
                    <p className="text-gray-600 mt-1">Sunday - Thursday<br/>8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <a 
                  href="https://wa.me/966501234567" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-green-500 text-green-600 font-bold rounded hover:bg-green-500 hover:text-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-navy mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input 
                      {...register('name', { required: true })} 
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-gold transition-colors`} 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      {...register('email', { required: true })} 
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-gold transition-colors`} 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      {...register('phone', { required: true })} 
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-gold transition-colors`} 
                      placeholder="+966 5X XXX XXXX" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input 
                      {...register('company')} 
                      className="w-full px-4 py-3 border border-gray-200 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-gold transition-colors" 
                      placeholder="Your Company LLC" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <select 
                      {...register('city', { required: true })} 
                      className={`w-full px-4 py-3 border ${errors.city ? 'border-red-500' : 'border-gray-200'} rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-gold transition-colors appearance-none`}
                    >
                      <option value="">Select City</option>
                      <option value="Riyadh">Riyadh</option>
                      <option value="Jeddah">Jeddah</option>
                      <option value="Dammam">Dammam</option>
                      <option value="Khobar">Khobar</option>
                      <option value="Jubail">Jubail</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest *</label>
                    <select 
                      {...register('service', { required: true })} 
                      className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-200'} rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-gold transition-colors appearance-none`}
                    >
                      <option value="">Select a Service</option>
                      {servicesData.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    {...register('message')} 
                    className="w-full px-4 py-3 border border-gray-200 rounded bg-slate-50 focus:bg-white focus:outline-none focus:border-gold transition-colors h-32 resize-none" 
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center"><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...</span>
                  ) : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 text-green-700 rounded border border-green-200 mt-4">
                    Thank you! Your message has been sent successfully. Our team will contact you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 text-red-700 rounded border border-red-200 mt-4">
                    Something went wrong. Please try again or contact us via phone.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
