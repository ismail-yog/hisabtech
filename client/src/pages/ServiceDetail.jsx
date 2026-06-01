import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { servicesData } from '../utils/servicesData';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  if (!service) {
    return <Navigate to="/services" />;
  }

  const relatedServices = servicesData
    .filter(s => s.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/contact', { ...data, service: service.title });
      setSubmitStatus('success');
      reset();
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>{service.title} | Hisabtech Accounting</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-navy pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          {service.icon && (() => {
            const Icon = service.icon;
            return <Icon size={300} />;
          })()}
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-gold font-medium text-sm mb-6"
            >
              {service.icon && (() => {
                const Icon = service.icon;
                return <Icon size={18} />;
              })()}
              <span>Professional Service</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl"
            >
              {service.shortDesc}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* What We Do */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">What We Do</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  {service.whatWeDo.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-gold mr-3 h-6 w-6 shrink-0" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Needs This */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Who Needs This</h2>
              <p className="text-lg text-gray-700 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                {service.whoNeedsThis}
              </p>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.process.map((step, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative">
                    <div className="w-12 h-12 bg-navy text-gold rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                      {i + 1}
                    </div>
                    <h4 className="font-semibold text-navy text-lg">{step}</h4>
                    {i < service.process.length - 1 && (
                      <ArrowRight className="hidden md:block absolute top-12 -right-4 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar CTA Widget */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 bg-white rounded-xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-navy mb-2">Request This Service</h3>
              <p className="text-gray-500 mb-6 text-sm">Fill out the form below and our team will get back to you shortly.</p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <input 
                    {...register('name', { required: true })} 
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gold" 
                    placeholder="Full Name" 
                  />
                  {errors.name && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <input 
                    type="email" 
                    {...register('email', { required: true })} 
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gold" 
                    placeholder="Email Address" 
                  />
                  {errors.email && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <input 
                    {...register('phone', { required: true })} 
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gold" 
                    placeholder="Phone Number" 
                  />
                  {errors.phone && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <input 
                    {...register('company')} 
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gold" 
                    placeholder="Company Name (Optional)" 
                  />
                </div>
                <div>
                  <select 
                    {...register('city', { required: true })} 
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gold bg-white"
                  >
                    <option value="">Select City</option>
                    <option value="Riyadh">Riyadh</option>
                    <option value="Jeddah">Jeddah</option>
                    <option value="Dammam">Dammam</option>
                    <option value="Khobar">Khobar</option>
                    <option value="Jubail">Jubail</option>
                  </select>
                  {errors.city && <span className="text-red-500 text-xs">Required</span>}
                </div>
                <div>
                  <textarea 
                    {...register('message')} 
                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-gold h-24 resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm mt-2 text-center bg-green-50 py-2 rounded">Request sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm mt-2 text-center bg-red-50 py-2 rounded">Error sending request. Try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((srv, i) => (
              <Link 
                key={srv.id} 
                to={`/services/${srv.slug}`}
                className="bg-slate-50 p-6 rounded-lg border border-gray-100 hover:border-gold hover:shadow-md transition-all group flex items-center"
              >
                {srv.icon && (() => {
                  const SrvIcon = srv.icon;
                  return <SrvIcon className="text-gold h-10 w-10 mr-4" />;
                })()}
                <div>
                  <h4 className="font-semibold text-navy group-hover:text-gold transition-colors">{srv.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{srv.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
