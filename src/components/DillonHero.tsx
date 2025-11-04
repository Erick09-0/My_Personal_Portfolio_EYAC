import image_5b4da87d6c0ce78aca22d8dcdd384fd3eedebde7 from 'figma:asset/5b4da87d6c0ce78aca22d8dcdd384fd3eedebde7.png';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function DillonHero() {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-black pt-20 relative overflow-hidden"
    >
      {/* Animated Background Elements - Gray */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-3xl"
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge - Gray */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white">
                {t.hero.title1}
                <br />
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent">
                  {t.hero.title2}
                </span>
                <br />
                {t.hero.title3}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl space-y-6"
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                {t.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('work')}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-4 rounded-full font-medium shadow-2xl shadow-gray-900/60 hover:shadow-gray-900/80 transition-all duration-300"
                >
                  <span>{t.hero.viewWork}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span>{t.hero.getInTouch}</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image - Gray Style */}
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-900/50 ring-1 ring-white/10 relative group">
                {/* Image */}
                <ImageWithFallback
                  src={image_5b4da87d6c0ce78aca22d8dcdd384fd3eedebde7}
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />
                
                {/* Gray Overlay - Bottom to Top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-gray-900/30 to-transparent pointer-events-none" />
                
                {/* Gray Glow Edges */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/10 pointer-events-none" />
                
                {/* Inner Gray Glow */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,255,255,0.1)] pointer-events-none" />
                
                {/* Animated Gray Shine Effect */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"
                />
              </div>
              
              {/* External Gray Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-600 rounded-[3.2rem] -z-10 opacity-50 blur-xl" />
              <div className="absolute -inset-2 bg-gradient-to-tr from-gray-800/30 via-transparent to-gray-700/30 rounded-[3.4rem] -z-20 blur-2xl" />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-gray-900/90 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl shadow-gray-900/30 border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                      +10
                    </p>
                    <p className="text-sm text-gray-400">{t.hero.projectsCompleted}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
