import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function Membership() {
  const formContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Store ref value for cleanup
    const container = formContainerRef.current;

    // Create and inject the JotForm script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/260114203564142';
    script.async = true;

    if (container) {
      container.appendChild(script);
    }

    // Cleanup script on unmount
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-crimson-dark/5 to-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-crimson/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8 group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6"
              style={{ fontFamily: 'var(--font-family-display)' }}
            >
              Become a Member
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Join the Ebony Angels sisterhood and be part of our legacy of elegance,
              empowerment, and community service.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-32 h-1 bg-gradient-gold mx-auto mb-12"
          />

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { title: 'Sisterhood', desc: 'Connect with inspiring women who share your values' },
              { title: 'Events', desc: 'Exclusive access to members-only gatherings and experiences' },
              { title: 'Community', desc: 'Make a difference through service and outreach' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 text-center hover:border-gold/40 transition-colors"
              >
                <h3 className="text-gold font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-gold text-center mb-6">Membership Application</h2>
            <div
              ref={formContainerRef}
              className="jotform-container min-h-[600px]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
