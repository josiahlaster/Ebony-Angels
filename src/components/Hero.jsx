import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowDown } from 'react-icons/fa';
import { useMemo } from 'react';

export default function Hero() {
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })), []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-crimson-dark/30 to-black" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            animate={{
              y: [0, -20, 20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: particle.delay,
            }}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* Flapping Angel Wings */}
      {/* Left Wing */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 origin-right"
        animate={{ rotateY: [0, 35, 0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.svg
          width="300"
          height="400"
          viewBox="0 0 300 400"
          className="opacity-20 md:opacity-30"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <linearGradient id="wingGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B0000" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Main wing shape */}
          <path
            d="M280 200 Q240 150 200 120 Q150 80 100 60 Q60 45 20 50 Q40 80 60 100 Q30 90 10 100 Q40 120 70 130 Q40 125 15 140 Q50 155 90 160 Q50 160 20 180 Q60 190 110 190 Q70 200 40 220 Q90 220 140 210 Q100 230 70 260 Q130 250 180 230 Q150 270 130 310 Q180 280 220 250 Q200 300 190 350 Q230 310 260 260 Q250 320 250 370 Q280 320 290 260 Q300 320 300 380 Q310 310 300 240 Q320 280 340 340 Q330 270 300 210 Z"
            fill="url(#wingGradientLeft)"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          {/* Wing feather details */}
          <path d="M260 200 Q220 170 180 150" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <path d="M250 210 Q200 190 150 180" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <path d="M240 220 Q180 210 130 200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <path d="M230 235 Q170 230 110 220" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.2" fill="none" />
          <path d="M250 250 Q200 260 160 280" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <path d="M260 270 Q220 290 190 320" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.2" fill="none" />
        </motion.svg>
      </motion.div>

      {/* Right Wing */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 origin-left"
        animate={{ rotateY: [0, -35, 0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.svg
          width="300"
          height="400"
          viewBox="0 0 300 400"
          className="opacity-20 md:opacity-30 scale-x-[-1]"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <linearGradient id="wingGradientRight" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8B0000" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Main wing shape */}
          <path
            d="M280 200 Q240 150 200 120 Q150 80 100 60 Q60 45 20 50 Q40 80 60 100 Q30 90 10 100 Q40 120 70 130 Q40 125 15 140 Q50 155 90 160 Q50 160 20 180 Q60 190 110 190 Q70 200 40 220 Q90 220 140 210 Q100 230 70 260 Q130 250 180 230 Q150 270 130 310 Q180 280 220 250 Q200 300 190 350 Q230 310 260 260 Q250 320 250 370 Q280 320 290 260 Q300 320 300 380 Q310 310 300 240 Q320 280 340 340 Q330 270 300 210 Z"
            fill="url(#wingGradientRight)"
            stroke="#D4AF37"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          {/* Wing feather details */}
          <path d="M260 200 Q220 170 180 150" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <path d="M250 210 Q200 190 150 180" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <path d="M240 220 Q180 210 130 200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <path d="M230 235 Q170 230 110 220" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.2" fill="none" />
          <path d="M250 250 Q200 260 160 280" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          <path d="M260 270 Q220 290 190 320" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.2" fill="none" />
        </motion.svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Established Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6"
        >
          <span className="px-4 py-2 border border-gold/50 rounded-full text-gold text-sm tracking-widest uppercase">
            Established 1984
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-family-display)' }}
        >
          <span className="text-white">Ebony</span>{' '}
          <span className="text-gradient">Angels</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/70 mb-4 font-light"
        >
          Legacy • Sisterhood • Purpose
        </motion.p>

        {/* Event Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 
            className="text-3xl md:text-4xl text-gold mb-2"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Reunion Weekend 2026
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white/80">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: '#D4AF37' }}
            >
              <FaCalendarAlt className="text-gold" />
              <span>March 20-23, 2026</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05, color: '#D4AF37' }}
            >
              <FaMapMarkerAlt className="text-gold" />
              <span>Raleigh-Durham, NC</span>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#reserve"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-gold text-black font-bold text-lg rounded-full transition-all duration-300 glow-gold"
          >
            Reserve Your Spot
          </motion.a>
          <motion.a
            href="#events"
            whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white/10"
          >
            View Schedule
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/50"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
