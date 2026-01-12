import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-crimson-dark/10 to-black relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-crimson/10 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 5 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gold uppercase tracking-widest text-sm"
          >
            Join Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: 'var(--font-family-display)' }}>
            <span className="text-white">Reserve Your </span>
            <span className="text-gradient">Spot</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-gold mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}>
              Get In Touch
            </h3>
            <p className="text-white/70 mb-8">
              Ready to join us for an unforgettable weekend of celebration, sisterhood, and memories? 
              Reserve your spot today or reach out with any questions.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <motion.a
                href="mailto:info@ebonyangels.com"
                whileHover={{ x: 10, color: '#D4AF37' }}
                className="flex items-center gap-4 text-white/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <FaEnvelope className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p>info@ebonyangels.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+19195551234"
                whileHover={{ x: 10, color: '#D4AF37' }}
                className="flex items-center gap-4 text-white/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <FaPhone className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Phone</p>
                  <p>(919) 555-1234</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-white/80"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-gold" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Location</p>
                  <p>Raleigh-Durham, NC</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/50 mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: FaFacebook, href: 'https://www.facebook.com/share/17uymYZao2/?mibextid=wwXIfr' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-gold hover:border-gold/50 transition-all"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            id="reserve"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass-effect border border-gold/20">
              <h3 className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}>
                Reservation Form
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Full Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#D4AF37' }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:border-gold transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Email Address</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#D4AF37' }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:border-gold transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Phone Number</label>
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: '#D4AF37' }}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:border-gold transition-all"
                    placeholder="Enter your phone"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">Message (Optional)</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, borderColor: '#D4AF37' }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:border-gold transition-all resize-none"
                    placeholder="Any special requests or questions?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-gold text-black font-bold text-lg rounded-full transition-all duration-300 glow-gold mt-4"
                >
                  Submit Reservation
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
