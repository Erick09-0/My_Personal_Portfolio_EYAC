import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import jcogImage from 'figma:asset/f07f30ca1dbe019d2272001c8b810c93b949f3e5.png';

export function DillonWork() {
  const { t } = useLanguage();
  
  const project = {
    title: t.work.projects.jcog.title,
    subtitle: t.work.projects.jcog.subtitle,
    image: jcogImage,
    year: '2025',
    gradient: 'from-blue-500 to-blue-700',
    link: 'https://pwa-clinica-jcog.vercel.app/',
  };

  return (
    <section id="work" className="bg-black py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements - Gray */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl" />

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
            <span className="text-sm font-medium text-gray-300">{t.work.badge}</span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
            {t.work.title}{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              {t.work.titleAccent}
            </span>
          </h2>
        </motion.div>

        {/* Project - Centered */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-[2rem] shadow-lg shadow-black/20 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-500 block"
          >
            {/* Project Image */}
            <div className="aspect-[16/9] overflow-hidden bg-black relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay - Gray */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Hover Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.gradient} px-3 py-1 rounded-full shadow-lg shadow-gray-900/40`}>
                  <span className="text-xs font-medium text-white">{project.year}</span>
                </div>
              </div>
              <p className="text-gray-400 text-lg">
                {project.subtitle}
              </p>
            </div>
          </motion.a>
        </div>

        {/* View Project Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-10 py-4 rounded-full font-medium shadow-xl shadow-gray-900/60"
          >
            <span>{t.work.seeAll}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
