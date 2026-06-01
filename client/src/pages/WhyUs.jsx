import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Us | Hisabtech Accounting</title>
        <meta name="description" content="Discover why top Saudi enterprises choose Hisabtech over in-house accountants or generic firms." />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy text-white pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            The Smarter Choice for Your Finances
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            We combine local expertise with global standards to deliver an accounting experience that simply works.
          </motion.p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">How We Compare</h2>
            <p className="text-gray-600">See why outsourcing to Hisabtech provides the highest ROI.</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-navy font-bold">
                  <th className="p-5 border-b border-gray-200 w-1/4">Feature</th>
                  <th className="p-5 border-b border-gray-200 w-1/4 bg-navy/5 text-navy">Hisabtech</th>
                  <th className="p-5 border-b border-gray-200 w-1/4">In-house Accountant</th>
                  <th className="p-5 border-b border-gray-200 w-1/4">Generic Firm</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { feature: 'ZATCA Expertise', us: true, inhouse: false, generic: false },
                  { feature: 'Saudi Labor Law Knowledge', us: true, inhouse: true, generic: false },
                  { feature: 'ERP Setup & Support', us: true, inhouse: false, generic: false },
                  { feature: 'Advanced MIS Reports', us: true, inhouse: false, generic: true },
                  { feature: 'Cost Effectiveness', us: true, inhouse: false, generic: true },
                  { feature: 'Fast Response Time', us: true, inhouse: false, generic: false },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 border-b border-gray-100 font-medium text-navy">{row.feature}</td>
                    <td className="p-5 border-b border-gray-100 bg-navy/5">
                      {row.us ? <CheckCircle2 className="text-gold h-6 w-6" /> : <XCircle className="text-gray-300 h-6 w-6" />}
                    </td>
                    <td className="p-5 border-b border-gray-100">
                      {row.inhouse ? <CheckCircle2 className="text-green-500 h-6 w-6" /> : <XCircle className="text-red-400 h-6 w-6" />}
                    </td>
                    <td className="p-5 border-b border-gray-100">
                      {row.generic ? <CheckCircle2 className="text-green-500 h-6 w-6" /> : <XCircle className="text-red-400 h-6 w-6" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to Make the Switch?</h2>
          <p className="text-lg text-gray-600 mb-8">Join hundreds of Saudi businesses that have optimized their financial operations with us.</p>
          <Link to="/contact" className="btn-primary">Get a Free Proposal</Link>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
