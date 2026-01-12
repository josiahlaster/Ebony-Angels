import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHeart, FaUsers, FaStar, FaGem } from 'react-icons/fa';
import Gallery from './Gallery';

const values = [
  {
    icon: FaHeart,
    title: 'Sisterhood',
    description: 'A bond that transcends time, built on love, trust, and unwavering support.',
  },
  {
    icon: FaUsers,
    title: 'Community',
    description: 'United in purpose, we uplift and empower each other to reach new heights.',
  },
  {
    icon: FaStar,
    title: 'Legacy',
    description: 'Honoring our past while building a future that inspires generations to come.',
  },
  {
    icon: FaGem,
    title: 'Excellence',
    description: 'Committed to the highest standards in everything we do and represent.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-crimson-dark/5 to-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
            Our Story
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: 'var(--font-family-display)' }}>
            <span className="text-white">About </span>
            <span className="text-gradient">Ebony Angels</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-gold mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Since <span className="text-gold font-semibold">1984</span>, the Ebony Angels have stood as a beacon of sisterhood, 
              unity, and purpose. What began as a small group of visionary women has blossomed into a 
              legacy that spans decades and touches countless lives.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Our journey has been marked by shared triumphs, unwavering support during challenges, 
              and a commitment to uplifting each other and our communities. We are more than an organization—
              we are family.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              As we gather for our <span className="text-gold font-semibold">Reunion Weekend 2026</span>, 
              we celebrate not just our history, but the bright future we continue to build together. 
              This is a celebration of legacy, sisterhood, and purpose.
            </p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <Gallery />
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.2)' }}
              className="p-6 rounded-xl glass-effect border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-4"
              >
                <value.icon className="text-2xl text-black" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-family-display)' }}>{value.title}</h3>
              <p className="text-white/60 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
