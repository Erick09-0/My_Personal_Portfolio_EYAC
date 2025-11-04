import { ArrowRight, Award, Heart, Lightbulb, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function DillonAbout() {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      label: t.about.stats.experience,
      value: '2',
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: t.about.stats.projects,
      value: '+10',
      color: 'from-gray-600 to-gray-500',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: t.about.stats.commitment,
      value: '100%',
      color: 'from-gray-500 to-gray-600',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      label: t.about.stats.learning,
      value: '∞',
      color: 'from-gray-600 to-gray-700',
    },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-black to-gray-950 py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements - Gray Minimalist Design */}
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-gray-800/20 to-transparent rounded-full blur-2xl" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/5 rounded-3xl rotate-12" />
      <div className="absolute bottom-32 right-20 w-40 h-40 border border-white/5 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-2xl rotate-45" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      {/* Animated Lines */}
      <motion.div
        animate={{ 
          scaleX: [1, 1.2, 1],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <motion.div
        animate={{ 
          scaleX: [1, 1.3, 1],
          opacity: [0.02, 0.06, 0.02]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      
      {/* Floating Dots */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full" />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/10 rounded-full" />
      
      {/* Gradient Bars */}
      <div className="absolute top-0 left-1/4 w-px h-64 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute bottom-0 right-1/3 w-px h-48 bg-gradient-to-t from-white/10 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Badge & Button */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-300">{t.about.badge}</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold leading-tight text-white"
              >
                {t.about.title}
                <br />
                <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                  {t.about.titleAccent}
                </span>
              </motion.h2>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-gray-900/60"
              >
                <span>{t.about.button}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-2xl space-y-4"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                {t.about.greeting}
              </h3>
              <p className="text-gray-400 leading-relaxed text-justify text-[18px]">
                {t.about.description}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-3xl p-8 shadow-lg shadow-black/20 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gray-900/30`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>

              {/* Value */}
              <p className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-sm text-gray-400 font-medium">
                {stat.label}
              </p>

              {/* Hover Glow - Gray */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
