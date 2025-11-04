import { Code, Palette, Monitor, Database, GitBranch, FileCode } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function DillonServices() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Code className="w-7 h-7" />,
      title: t.services.items.frontend.title,
      description: t.services.items.frontend.description,
      gradient: 'from-gray-500 to-gray-700',
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: t.services.items.design.title,
      description: t.services.items.design.description,
      gradient: 'from-gray-600 to-gray-500',
    },
    {
      icon: <Monitor className="w-7 h-7" />,
      title: t.services.items.responsive.title,
      description: t.services.items.responsive.description,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: t.services.items.database.title,
      description: t.services.items.database.description,
      gradient: 'from-gray-600 to-gray-700',
    },
    {
      icon: <GitBranch className="w-7 h-7" />,
      title: t.services.items.versionControl.title,
      description: t.services.items.versionControl.description,
      gradient: 'from-gray-700 to-gray-600',
    },
    {
      icon: <FileCode className="w-7 h-7" />,
      title: t.services.items.landing.title,
      description: t.services.items.landing.description,
      gradient: 'from-gray-600 to-gray-700',
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-gray-950 to-black py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements - Gray */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">{t.services.badge}</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight max-w-2xl text-white">
            {t.services.title}{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              {t.services.titleAccent}
            </span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gray-900/40`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
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
