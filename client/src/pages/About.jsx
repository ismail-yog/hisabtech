import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, ShieldCheck, Zap, Scale } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Hisabtech Accounting</title>
        <meta name="description" content="Learn about our mission, our story, and the team driving top-tier accounting services in Saudi Arabia." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy text-white pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Empowering Saudi Businesses with Financial Clarity
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            We are more than just accountants. We are your strategic partners in navigating the Kingdom's evolving financial landscape.
          </motion.p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded in Riyadh with a vision to simplify complex financial processes, Hisabtech Accounting emerged from the growing need for high-quality, reliable, and ZATCA-compliant accounting services tailored specifically for the Saudi market.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Over the years, we have expanded our footprint across Jeddah, Dammam, Khobar, and Jubail. We pride ourselves on blending deep local regulatory knowledge with global best practices, ensuring our clients can scale confidently without administrative bottlenecks.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-2xl border border-gray-100 shadow-sm relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none text-navy">
              <Target size={150} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4 relative z-10">Our Mission</h3>
            <p className="text-gray-700 text-lg relative z-10 italic">
              "To deliver precision accounting and strategic financial insights that eliminate administrative friction, empowering Saudi businesses to thrive in a dynamic economy."
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide every ledger we balance and every report we generate.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Target, title: 'Accuracy', desc: 'Meticulous attention to detail in every financial record.' },
              { icon: ShieldCheck, title: 'Compliance', desc: 'Unwavering adherence to ZATCA and local labor laws.' },
              { icon: Scale, title: 'Transparency', desc: 'Clear, honest communication and reporting at all times.' },
              { icon: Zap, title: 'Speed', desc: 'Agile execution and timely deliverables you can count on.' }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <val.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">{val.title}</h4>
                <p className="text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experts dedicated to your financial success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Tariq Al-Hashemi', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
              { name: 'Nour El-Din', role: 'Lead Accountant', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
              { name: 'Yousef Rahman', role: 'VAT Specialist', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-gold transition-colors duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href="#" className="text-white hover:text-gold transition-colors"><FaLinkedin size={24} /></a>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-navy mb-1">{member.name}</h4>
                <p className="text-gold font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
