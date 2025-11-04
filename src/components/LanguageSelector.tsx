import { motion, AnimatePresence } from 'motion/react';
import { Globe, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface LanguageSelectorProps {
  onLanguageSelect: (lang: 'en' | 'es') => void;
}

export function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  const [selectedLang, setSelectedLang] = useState<'en' | 'es' | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  const languages = [
    {
      code: 'en' as const,
      name: 'English',
      nativeName: 'English',
      flag: '🇺🇸',
    },
    {
      code: 'es' as const,
      name: 'Spanish',
      nativeName: 'Español',
      flag: '🇪🇸',
    },
  ];

  const handleSelect = (lang: 'en' | 'es') => {
    setSelectedLang(lang);
    setIsExiting(true);
    setTimeout(() => {
      onLanguageSelect(lang);
    }, 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background - Gray */}
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
          className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-[700px] h-[700px] bg-gradient-to-tr from-white/5 to-white/10 rounded-full blur-3xl"
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isExiting ? 0 : 1, y: isExiting ? -30 : 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-12"
          >
            {/* Logo/Icon - Gray */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-gray-900/50"
                >
                  <Globe className="w-12 h-12 text-white" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl blur-xl opacity-50"
                />
              </div>
            </motion.div>

            {/* Title - Gray */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Welcome <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">·</span> Bienvenido
              </h1>
              <p className="text-lg text-gray-400">
                Choose your preferred language
              </p>
            </motion.div>

            {/* Language Cards - Gray */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto"
            >
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: selectedLang && selectedLang !== lang.code ? 0.9 : 1 
                  }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: selectedLang ? 1 : 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSelect(lang.code)}
                  className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-3xl p-8 border transition-all duration-300 ${
                    selectedLang === lang.code
                      ? 'border-gray-500 shadow-2xl shadow-gray-900/50'
                      : 'border-white/10 hover:border-white/20 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-gray-900/20'
                  }`}
                  disabled={isExiting}
                >
                  {/* Flag */}
                  <div className="text-6xl mb-4">{lang.flag}</div>

                  {/* Language Name */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      {lang.nativeName}
                    </h3>
                    <p className="text-sm text-gray-400">{lang.name}</p>
                  </div>

                  {/* Arrow Icon - Gray */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: selectedLang === lang.code ? 1 : 0,
                      x: selectedLang === lang.code ? 0 : -10
                    }}
                    className="absolute top-8 right-8"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>

                  {/* Hover Glow - Gray */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 ${
                    selectedLang === lang.code ? 'opacity-100' : 'group-hover:opacity-50'
                  } rounded-3xl transition-opacity duration-300`} />
                </motion.button>
              ))}
            </motion.div>

            {/* Loading Indicator - Gray */}
            <AnimatePresence>
              {isExiting && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-center"
                >
                  <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900/50 to-gray-900/30 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full"
                    />
                    <span className="text-sm text-gray-300">Loading...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
