import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Award, Code, Rocket } from 'lucide-react';
import { useRef } from 'react';

export function DillonJourney() {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineItems = [
    {
      year: t.journey.timeline.year2022.year,
      title: t.journey.timeline.year2022.title,
      description: t.journey.timeline.year2022.description,
      tags: t.journey.timeline.year2022.tags,
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      year: t.journey.timeline.year2024.year,
      title: t.journey.timeline.year2024.title,
      description: t.journey.timeline.year2024.description,
      tags: t.journey.timeline.year2024.tags,
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: t.journey.timeline.year2025.year,
      title: t.journey.timeline.year2025.title,
      description: t.journey.timeline.year2025.description,
      tags: t.journey.timeline.year2025.tags,
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <section id="journey" className="bg-black py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 space-y-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">{t.journey.badge}</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
            {t.journey.title}{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              {t.journey.titleAccent}
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.journey.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Background Static Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-800/40 to-transparent -translate-x-1/2" />

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-8 lg:left-1/2 top-0 w-[2px] bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 -translate-x-1/2 origin-top shadow-lg shadow-gray-500/50"
            style={{ height: lineHeight }}
          />

          {/* Glowing Dot at the end of progress line */}
          <motion.div
            className="absolute left-8 lg:left-1/2 top-0 -translate-x-1/2"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, timelineRef.current?.offsetHeight || 0]) }}
          >
            <div className="w-3 h-3 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full shadow-lg shadow-gray-400/70 animate-pulse" />
          </motion.div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col lg:flex-row gap-8 items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Year Badge */}
                <div className={`flex-shrink-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 2 : -2 }}
                    className={`inline-flex items-center gap-3 bg-gradient-to-br from-gray-900/90 to-gray-900/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-700/30 hover:border-gray-500/50 transition-all duration-500 ${
                      index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                    }`}
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center text-white shadow-lg"
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                      {item.year}
                    </span>
                  </motion.div>
                </div>

                {/* Center Dot with Pulse Effect */}
                <div className="absolute left-8 lg:left-1/2 top-4 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Outer glow ring */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 w-4 h-4 bg-gray-400/50 rounded-full blur-sm"
                    />
                    {/* Inner dot */}
                    <div className="relative w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full border-4 border-black shadow-lg shadow-gray-500/60" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    rotateY: index % 2 === 0 ? -2 : 2
                  }}
                  className="flex-1 lg:w-1/2 ml-16 lg:ml-0 perspective-1000"
                >
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:border-gray-500/40 hover:shadow-2xl hover:shadow-gray-700/40 transition-all duration-500 group">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </motion.div>
                    <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + 0.4 + tagIndex * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover:border-gray-400/30 hover:text-gray-100 transition-all duration-300 cursor-default"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Future Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
            className="mt-16 text-center relative"
          >
            <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Outer rotating ring */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 w-6 h-6 bg-gray-400/40 rounded-full blur-md"
                />
                <div className="relative w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-600 rounded-full border-4 border-black shadow-xl shadow-gray-400/70" />
              </motion.div>
            </div>
            
            <motion.div 
              className="ml-16 lg:ml-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-block bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6 shadow-xl hover:shadow-2xl hover:shadow-gray-700/40 hover:border-gray-500/40 transition-all duration-500">
                <p className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent mb-2">
                  {t.journey.timeline.future.title}
                </p>
                <p className="text-gray-400">
                  {t.journey.timeline.future.description}{' '}
                  <span className="text-white font-semibold">{t.journey.timeline.future.descriptionBold}</span>
                  {t.journey.timeline.future.descriptionContinue}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
