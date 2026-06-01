import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { CheckCircle, Clock, Globe, ShieldCheck, ArrowRight, Briefcase } from 'lucide-react';
import { servicesData } from '../utils/servicesData';
import { API_BASE_URL } from '../config';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const Home = () => {
  const [formData, setFormData] = useState({ companyName: '', serviceNeeded: servicesData[0]?.title || 'VAT Filing' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Intersection Observer for scroll-triggered animations
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const payload = {
        name: formData.companyName || 'Anonymous',
        email: 'no-email@provided.com',
        company: formData.companyName,
        phone: 'N/A',
        subject: `New Lead: ${formData.serviceNeeded}`,
        message: `Company: ${formData.companyName} is interested in ${formData.serviceNeeded}`,
      };

      await axios.post(`${API_BASE_URL}/api/contact`, payload);
      setStatus({ type: 'success', message: 'Thank you! We will contact you shortly.' });
      setFormData({ companyName: '', serviceNeeded: servicesData[0]?.title || 'VAT Filing' });
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const whyUsItems = [
    { icon: CheckCircle, title: 'Accurate & Professional', desc: 'Zero-error policy in financial data entry and reconciliations.' },
    { icon: Clock, title: 'Timely VAT Filing', desc: 'Never miss a deadline with our automated compliance reminders.' },
    { icon: Globe, title: 'Saudi Market Expertise', desc: 'Deep understanding of SOCPA and ZATCA regulations.' },
    { icon: ShieldCheck, title: 'Full Data Security', desc: 'Enterprise-grade security for your financial records.' },
  ];

  return (
    <>
      <Helmet>
        <title>Hisabtech Accounting | Accounting & Bookkeeping Saudi Arabia</title>
        <meta name="description" content="Precision Accounting. Saudi Expertise. Zero Hassle. ZATCA Phase 2 Compliant." />
      </Helmet>

      <main>
        {/* ────── HERO ────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Saudi Arabia Financial Center"
              className="w-full h-full object-cover scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxBwf0HZdrl4H0yrfEDu66nDsNJlpGXukfxZcmBZvtgdsOneEj9k9VkFLwbzBzukjCPLNDfWmvdRdfA0J-vSq4OwWMutlYNAFyPsUUNT5L7gy9-eCLUTjw6i7NH5GGsbNcsT_U_SDNFZH-E4orQeeZNSGi8vPeOVcEUOD4Q0pBvHivQdl1RuSiUja4Dc0ZRiFg3S-J2QmV8OvNYjPGkVEd9BF6r_EV3hIbMeIXaIsqWoETAwXspxyIKOkjwCki5YL4DHlTF3Cdk4jD"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>

          <div className="relative z-10 px-4 md:px-12 max-w-[1200px] mx-auto w-full pt-24">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-secondary/15 text-secondary px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-secondary/20"
              >
                ZATCA Phase 2 Compliant
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] font-headline-lg"
              >
                Reliable Accounting Support in{' '}
                <span className="text-gradient-gold">Saudi Arabia</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
              >
                Professional Accounting, Bookkeeping, VAT Filing, and ERP Customization for businesses across the Kingdom.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-secondary text-primary px-8 py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                >
                  Request a Quote
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 hover:-translate-y-1 active:translate-y-0 backdrop-blur-sm transition-all duration-300"
                >
                  View Services
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 bg-secondary rounded-full"
              />
            </div>
          </motion.div>
        </section>

        {/* ────── CITIES TRUST BAR ────── */}
        <section className="bg-white border-b border-gray-100 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            {['Riyadh', 'Jeddah', 'Dammam', 'Khobar', 'Jubail'].map((city, i) => (
              <span key={city} className="hover:text-secondary transition-colors duration-300 cursor-default">{city}</span>
            ))}
          </div>
        </section>

        {/* ────── SERVICES ────── */}
        <section
          id="services-section"
          ref={(el) => (sectionRefs.current['services-section'] = el)}
          className="py-28 px-4 md:px-12 max-w-[1200px] mx-auto"
        >
          <motion.div
            initial="hidden"
            animate={visibleSections['services-section'] ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline-lg">
              Comprehensive Financial Solutions
            </motion.h2>
            <motion.div variants={fadeUp} className="h-1 w-20 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={visibleSections['services-section'] ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={fadeUp} custom={index}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="block p-8 bg-white border border-gray-100 rounded-2xl hover-float group h-full"
                  >
                    <div className="w-14 h-14 bg-primary/5 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-400">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                      Learn More <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ────── WHY CHOOSE US ────── */}
        <section
          id="why-section"
          ref={(el) => (sectionRefs.current['why-section'] = el)}
          className="bg-slate-50 py-28 border-y border-gray-100"
        >
          <div className="px-4 md:px-12 max-w-[1200px] mx-auto">
            <motion.div
              initial="hidden"
              animate={visibleSections['why-section'] ? 'visible' : 'hidden'}
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-primary mb-4 font-headline-lg">
                Why Partner with Hisabtech?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 text-lg mb-12 leading-relaxed">
                We combine global accounting standards with deep local expertise to provide a service that is both reliable and compliant.
              </motion.p>

              <motion.div
                initial="hidden"
                animate={visibleSections['why-section'] ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {whyUsItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      custom={i}
                      className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover-float group"
                    >
                      <div className="bg-secondary/10 text-secondary p-3 rounded-xl shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ────── CTA + FORM ────── */}
        <section
          id="cta-section"
          ref={(el) => (sectionRefs.current['cta-section'] = el)}
          className="py-28 px-4 md:px-12 max-w-[1200px] mx-auto"
        >
          <motion.div
            initial="hidden"
            animate={visibleSections['cta-section'] ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <Briefcase size={300} />
            </div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h2 variants={fadeUp} className="text-white text-3xl md:text-4xl font-bold mb-4 font-headline-lg">
                Remote & Onsite Support
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-10">
                Whether you need a dedicated accountant on-site or virtual bookkeeping services, we adapt to your business needs.
              </motion.p>

              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
              >
                {status.message && (
                  <div className={`md:col-span-2 p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                    {status.message}
                  </div>
                )}

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-300 mb-2">Company Name</label>
                  <input
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="bg-white/10 border border-white/15 rounded-xl p-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm"
                    placeholder="Enter your company name"
                    type="text"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-300 mb-2">Service Needed</label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="bg-white/10 border border-white/15 rounded-xl p-3.5 text-white focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-sm appearance-none"
                  >
                    {servicesData.map((service) => (
                      <option key={service.id} value={service.title} className="text-primary bg-white">
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-secondary text-primary py-3.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-secondary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Get a Free Consultation →'}
                  </button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Home;
