import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import {
  OroLogo,
  LenovoCenterLogo,
  SaunaHouseLogo,
  ZincHouseLogo,
  EllisStationLogo,
  AngierHouseLogo,
} from './VenueLogos';

const venues = [
  {
    name: 'ORO Restaurant & Lounge',
    type: 'Welcome Dinner',
    description: 'An upscale dining experience with exquisite cuisine and sophisticated ambiance.',
    features: ['Fine Dining', 'Live Music', 'Craft Cocktails'],
    Logo: OroLogo,
  },
  {
    name: 'Lenovo Center',
    type: 'Empowerment Event',
    description: 'A premier venue for our morning of inspiration and connection.',
    features: ['Key Note Speaker', 'Professional Setup', 'Live Performence'],
    Logo: LenovoCenterLogo,
  },
  {
    name: 'Sauna House Durham',
    type: 'Spa & Wellness',
    description: 'Luxurious relaxation facilities for the ultimate rejuvenation experience.',
    features: ['Saunas', 'Private Setting', 'Massage'],
    Logo: SaunaHouseLogo,
  },
  {
    name: 'Its A Southern Thing',
    type: 'Ellis Station',
    description: 'Historic elegance meets modern sophistication for our main celebration.',
    features: ['Food', 'Downtown Durham,', 'Premium Bar'],
    Logo: EllisStationLogo,
  },
  {
    name: 'ZincHouse Winery & Brewery',
    type: 'Farewell Brunch',
    description: 'Beautiful vineyard setting for our memorable farewell gathering.',
    features: ['Wine Tasting', 'Scenic Views', 'Gourmet Brunch'],
    Logo: ZincHouseLogo,
  },
  {
    name: 'The Angier House',
    type: 'Accommodations',
    description: 'Charming lodging with all the comforts of home for our weekend stay.',
    features: ['Luxury Rooms', 'Private Setting', 'Modern Charm'],
    Logo: AngierHouseLogo,
  },
];

export default function Venues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="venues" className="py-24 bg-gradient-to-br from-black via-crimson-dark/8 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 -right-40 w-80 h-80 rounded-full bg-crimson/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
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
            Where We Gather
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: 'var(--font-family-display)' }}>
            <span className="text-white">Featured </span>
            <span className="text-gradient">Venues</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-gold mx-auto rounded-full"
          />
        </motion.div>

        {/* Venues Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-crimson/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 rounded-2xl glass-effect border border-white/10 group-hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                {/* Venue Logo */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-16 mb-4"
                >
                  <venue.Logo className="w-full h-full" />
                </motion.div>

                {/* Type Badge */}
                <span className="inline-block px-3 py-1 bg-crimson/20 text-crimson-light text-xs rounded-full mb-3 w-fit">
                  {venue.type}
                </span>

                {/* Venue Name */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors"
                  style={{ fontFamily: 'var(--font-family-display)' }}>
                  {venue.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm mb-4 flex-grow">
                  {venue.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {venue.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-1 text-xs text-gold/80 bg-gold/10 px-2 py-1 rounded-full"
                    >
                      <FaStar className="text-[8px]" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold/10 to-transparent pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gold/50 text-gold rounded-full hover:bg-gold/10 transition-all"
          >
            <FaMapMarkerAlt />
            View All Locations on Map
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
