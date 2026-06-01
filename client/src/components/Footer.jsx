import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-0">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <span className="text-2xl font-bold font-headline-lg">
                Hisab<span className="text-secondary">tech</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering Saudi businesses with precision accounting and strategic financial management.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-block bg-secondary/15 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                ZATCA Compliant
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-gray-400">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'VAT (ZATCA)', path: '/services/vat-filing' },
                { name: 'Payroll Services', path: '/services/payroll' },
                { name: 'ERP Solutions', path: '/services/erp-customization' },
                { name: 'All Services', path: '/services' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 text-sm hover:text-secondary transition-colors duration-300 inline-flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-gray-400">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Why Choose Us', path: '/why-us' },
                { name: 'Contact Us', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 text-sm hover:text-secondary transition-colors duration-300 inline-flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-gray-400">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">King Fahd Road, Riyadh, KSA</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">info@hisabtech.com.sa</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+966 50 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Hisabtech Accounting. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Precision Accounting · Saudi Expertise · Zero Hassle
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
