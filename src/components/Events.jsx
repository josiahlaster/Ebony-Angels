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
        time: '6:00 PM - 8:00 PM',
        title: 'Welcome Dinner',
        venue: 'ORO Restaurant & Lounge',
        description: 'Kick off the reunion with an elegant dinner featuring live entertainment.',
        icon: FaMusic,
      },
      {
        time: '9:00 PM - 12:00 AM',
        title: 'Return of the Legends',
        venue: 'Martin Marietta Center for the Performing Arts',
        description: 'Get ready for an unforgettable night as we attend the Return of the Legends live performance. This high-energy event brings legendary artists back to the stage for an incredible evening of music, nostalgia, and nonstop vibes. It’s the perfect night out to dance, sing along, and create memories together.',
        icon: FaMusic,
      },
    ],
  },
  {
    day: 'Saturday',
    date: 'March 21, 2026',
    events: [
      {
        time: '1:00 PM - 5:00 PM',
        title: 'Womens Empowerment',
        venue: 'Lenovo Center',
        description: 'An inspiring evening of connection and empowerment.',
        icon: FaUtensils,
      },
      {
        time: '5:00 PM - 10:00 PM',
        title: 'R&B Lovers Tour',
        venue: 'Lenovo Center',
        description: 'Where smooth R&B hits, romantic melodies, and unforgettable performances create the perfect atmosphere to relax, sing along, and enjoy an amazing night together.',
        icon: FaUtensils,
      },

    ],
  },
  {
    day: 'Sunday',
    date: 'March 22, 2026',
    events: [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Spa & Relaxation Session',
        venue: 'Sauna House Durham',
        description: 'We’ll take time to slow down and truly enjoy one another’s company at It’s A Southern Thing Brunch at Ellis Station. This experience blends classic Southern flavors with a warm, welcoming atmosphere that invites conversation, laughter and connection. It’s the perfect setting to relax, reflect on shared memories, and enjoy a delicious meal together while soaking in the comfort, culture and charm that make Southern hospitality so special. More than just brunch, this moment is about togetherness, meaningful conversations and creating lasting memories in a space that feels inviting and celebratory.',
        icon: FaSpa,
      },
      {
        time: '11:00 AM - 12:30 PM',
        title: 'Its A Southern Thing',
        venue: 'Ellis Station',
        description: 'The main event - dress to impress for an unforgettable evening.',
        icon: FaMusic,
      },
      {
        time: '3:00 PM - 7:00 PM',
        title: 'Farewell Brunch',
        venue: 'ZincHouse Winery & Brewery',
        description: 'We’ll conclude our reunion with a relaxing and memorable visit to ZincHouse Winery & Brewery, serving as the perfect finale to our time together. This beautiful setting offers a chance to unwind, reflect, and savor the moments we’ve shared throughout the trip. With handcrafted wines, brewed selections, and food trucks for dining. A welcoming atmosphere at the ZincHouse creates an ideal space for laughter, heartfelt conversations and one last opportunity to celebrate sisterhood as we bring the reunion to a close.',
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
