import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { servicesData } from '../utils/servicesData';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Hisabtech Accounting</title>
        <meta name="description" content="Explore our 17 professional services including Bookkeeping, VAT Filing, ERP Customization, and Payroll processing in Saudi Arabia." />
      </Helmet>

      {/* Page Header */}
      <section className="bg-navy text-white pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Comprehensive Financial Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            From daily bookkeeping to strategic financial reporting, we provide end-to-end accounting services for businesses in Saudi Arabia.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a free consultation with our experts to discuss your business requirements and find the perfect accounting solution.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
