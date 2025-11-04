import { Menu, X, Home, User, Briefcase, TrendingUp, Wrench, Mail, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function DillonNavigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  const toggleLanguage = () => {
    setIsChangingLanguage(true);
    setIsOpen(false); // Close mobile menu if open
    setTimeout(() => {
      setLanguage(language === 'en' ? 'es' : 'en');
      setTimeout(() => {
        setIsChangingLanguage(false);
      }, 400);
    }, 600);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: t.nav.home, icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: t.nav.about, icon: <User className="w-4 h-4" /> },
    { id: 'work', label: t.nav.work, icon: <Briefcase className="w-4 h-4" /> },
    { id: 'journey', label: t.nav.journey, icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'services', label: t.nav.services, icon: <Wrench className="w-4 h-4" /> },
    { id: 'contact', label: t.nav.contact, icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Language Change Loading Overlay */}
      <AnimatePresence>
        {isChangingLanguage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Animated Globe Icon */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-gray-900/50"
                >
                  <Languages className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl blur-xl opacity-50"
                />
              </div>

              {/* Loading Text */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-lg mb-2"
                >
                  {language === 'en' ? 'Cambiando idioma...' : 'Changing language...'}
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-gray-500 border-t-transparent rounded-full mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 ${isOpen ? 'z-[110]' : 'z-50'} transition-all duration-500 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className="text-2xl font-semibold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent relative z-50"
          >
            Portfolio
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions - Language Toggle + Download CV */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:bg-white/10"
            >
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                {language === 'en' ? 'EN' : 'ES'}
              </span>
            </motion.button>

            {/* Download CV Button */}
            <motion.a
              href={language === 'en' ? '/cv1.pdf' : '/cv.pdf'}
              download={language === 'en' ? 'Erick_Calderon_CV_English.pdf' : 'Erick_Calderon_CV.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-gray-900/60 hover:shadow-xl hover:shadow-gray-900/80 transition-all duration-300"
            >
              {t.nav.downloadCV}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative z-[110] w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.nav>

      {/* Mobile Navigation - Minimalist Glassmorphism - Moved outside nav for proper z-index stacking */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xl md:hidden z-[90]"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel - Minimalist Style */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-black/40 backdrop-blur-3xl border-l border-white/10 md:hidden overflow-y-auto z-[100]"
            >
              <div className="relative z-10 px-6 pt-24 pb-12 space-y-6">
                
                {/* Navigation Items - Clean Glassmorphism Style */}
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/10">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 text-gray-300 hover:text-white text-sm px-4 py-3.5 rounded-2xl hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-gray-400">
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Language Toggle Button Mobile */}
                <motion.button
                  onClick={toggleLanguage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-6 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Languages className="w-4 h-4" />
                  <span>{language === 'en' ? 'English (EN)' : 'Español (ES)'}</span>
                </motion.button>

                {/* CTA Button - Download CV */}
                <motion.a
                  href={language === 'en' ? '/cv1.pdf' : '/cv.pdf'}
                  download={language === 'en' ? 'Erick_Calderon_CV_English.pdf' : 'Erick_Calderon_CV.pdf'}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3.5 rounded-2xl text-sm font-medium shadow-lg shadow-gray-900/60 transition-all duration-300 inline-block text-center"
                >
                  {t.nav.downloadCV}
                </motion.a>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center pt-6 border-t border-white/10"
                >
                  <p className="text-sm text-gray-500">
                    © 2025 Portfolio
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
