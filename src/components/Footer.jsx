import { motion } from 'framer-motion';
import { FaHeart, FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';
import logo from '../assets/logo.png';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Events', href: '#events' },
      { name: 'Venues', href: '#venues' },
    ],
  },
  {
    title: 'Information',
    links: [
      { name: 'Contact', href: '#contact' },
      { name: 'Reserve', href: '#reserve' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-crimson-dark/10 via-black to-black border-t border-gold/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-4"
            >
              <img 
                src={logo} 
                alt="Ebony Angels Logo" 
                className="h-16 w-auto object-contain"
              />
              <h3 
                className="text-3xl font-bold text-gradient"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                Ebony Angels
              </h3>
            </motion.div>
            <p className="text-white/60 mb-6 max-w-md">
              Celebrating over 40 years of sisterhood, unity, and purpose. 
              Join us for an unforgettable Reunion Weekend in March 2026.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: FaFacebook, href: 'https://www.facebook.com/share/17uymYZao2/?mibextid=wwXIfr' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold text-gold mb-4"
                style={{ fontFamily: 'var(--font-family-display)' }}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: '#D4AF37' }}
                      className="text-white/60 hover:text-gold transition-colors inline-block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 text-sm flex items-center gap-2"
          >
            © 2024 Ebony Angels. Made with <FaHeart className="text-crimson" /> for sisterhood.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors"
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
