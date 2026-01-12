import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaUtensils, FaMusic, FaSpa, FaWineGlass } from 'react-icons/fa';

const schedule = [
  {
    day: 'Friday',
    date: 'March 20, 2026',
    events: [
      {
        time: '6:00 PM - 10:00 PM',
        title: 'Welcome Dinner & Live Performance',
        venue: 'ORO Restaurant & Lounge',
        description: 'Kick off the reunion with an elegant dinner featuring live entertainment.',
        icon: FaMusic,
      },
    ],
  },
  {
    day: 'Saturday',
    date: 'March 21, 2026',
    events: [
      {
        time: '10:00 AM - 12:00 PM',
        title: 'Empowerment Brunch',
        venue: 'Lenovo Center',
        description: 'An inspiring morning of connection and empowerment.',
        icon: FaUtensils,
      },
      {
        time: '2:00 PM - 5:00 PM',
        title: 'Spa & Relaxation Session',
        venue: 'Sauna House Durham',
        description: 'Unwind and rejuvenate with a luxurious spa experience.',
        icon: FaSpa,
      },
      {
        time: '7:00 PM - 11:00 PM',
        title: 'Gala Night',
        venue: 'Ellis Station',
        description: 'The main event - dress to impress for an unforgettable evening.',
        icon: FaMusic,
      },
    ],
  },
  {
    day: 'Sunday',
    date: 'March 22, 2026',
    events: [
      {
        time: '11:00 AM - 2:00 PM',
        title: 'Farewell Brunch & Winery Tour',
        venue: 'ZincHouse Winery & Brewery',
        description: 'Toast to sisterhood with wine tasting and a memorable farewell.',
        icon: FaWineGlass,
      },
    ],
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-black via-crimson-dark/10 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

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
            Reunion Weekend
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            style={{ fontFamily: 'var(--font-family-display)' }}>
            <span className="text-white">Event </span>
            <span className="text-gradient">Schedule</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100px' } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-gold mx-auto rounded-full"
          />
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {schedule.map((day, index) => (
            <motion.button
              key={day.day}
              onClick={() => setActiveDay(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeDay === index
                  ? 'bg-gradient-gold text-black glow-gold'
                  : 'bg-white/5 text-white/70 border border-white/20 hover:border-gold/50'
              }`}
            >
              <span className="block text-lg">{day.day}</span>
              <span className="block text-xs opacity-70">{day.date}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Events Timeline */}
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {schedule[activeDay].events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ x: 10 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== schedule[activeDay].events.length - 1 && (
                <div className="absolute left-[11px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-gold to-transparent" />
              )}
              
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-black" />
              </motion.div>

              {/* Event Card */}
              <motion.div
                whileHover={{ boxShadow: '0 20px 40px rgba(212, 175, 55, 0.15)' }}
                className="ml-4 p-6 rounded-xl glass-effect border border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-family-display)' }}>{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-2">
                        <FaClock className="text-gold" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gold" />
                        {event.venue}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-crimson/20 flex items-center justify-center"
                  >
                    <event.icon className="text-xl text-crimson-light" />
                  </motion.div>
                </div>
                <p className="text-white/70">{event.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
