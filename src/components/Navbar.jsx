import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Venues', href: '#venues' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      // If not on home page, navigate to home first, then scroll
      window.location.href = `/#${href.substring(1)}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-3"
            >
              <img 
                src={logo} 
                alt="Ebony Angels Logo" 
                className="h-12 md:h-14 w-auto object-contain"
              />
              <span className="text-xl md:text-2xl font-bold text-gradient"
                style={{ fontFamily: 'var(--font-family-display)' }}>
                Ebony Angels
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={isHomePage ? link.href : `/#${link.href.substring(1)}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="relative text-white/80 hover:text-gold transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                onClick={() => handleNavClick(link.href)}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -2 }}
            >
              <Link
                to="/membership"
                className={`relative font-medium transition-colors duration-300 ${
                  location.pathname === '/membership'
                    ? 'text-gold'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                Membership
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
            <motion.a
              href={isHomePage ? '#reserve' : '/#reserve'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-gold text-black font-semibold rounded-full transition-all duration-300"
            >
              Reserve Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={isHomePage ? link.href : `/#${link.href.substring(1)}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-lg text-white/80 hover:text-gold transition-colors py-2"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/membership"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg py-2 transition-colors ${
                    location.pathname === '/membership'
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  }`}
                >
                  Membership
                </Link>
              </motion.div>
              <motion.a
                href={isHomePage ? '#reserve' : '/#reserve'}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-gold text-black font-semibold rounded-full mt-4"
              >
                Reserve Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
