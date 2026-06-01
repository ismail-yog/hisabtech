import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex justify-between items-center h-20 px-4 md:px-12 max-w-[1200px] mx-auto">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className={`text-2xl font-bold font-headline-lg transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Hisab<span className="text-secondary">tech</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? 'text-secondary font-semibold'
                      : isScrolled
                        ? 'text-slate-600 group-hover:text-secondary'
                        : 'text-white/80 group-hover:text-secondary'
                  }`}>
                    {link.name}
                  </span>
                  {/* Active underline indicator */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-secondary rounded-full"
                    initial={false}
                    animate={{ width: isActive ? '60%' : '0%' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                  {/* Hover glow */}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-secondary/10'
                      : 'group-hover:bg-secondary/5'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center bg-secondary text-primary px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-xl hover:shadow-secondary/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Request Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="text-xl font-bold text-primary font-headline-lg">
                  Hisab<span className="text-secondary">tech</span>
                </span>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="p-4 space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'text-secondary bg-secondary/10 font-semibold border-l-2 border-secondary'
                            : 'text-slate-600 hover:text-secondary hover:bg-gray-50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="p-4 mt-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-primary px-6 py-3 rounded-full text-sm font-semibold w-full text-center block hover:shadow-lg transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
