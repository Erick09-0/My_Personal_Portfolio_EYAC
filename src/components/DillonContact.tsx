import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner@2.0.3';

export function DillonContact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuración de EmailJS
      const serviceID = 'service_fiuz8p7';
      const templateID = 'template_fai9mpk';
      const publicKey = 'hREJkDS2cpgmkGDtP';

      // Parámetros del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ambriz.calderon.erick9@gmail.com',
      };

      // Enviar email con EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Notificación de éxito
      toast.success(
        language === 'es' 
          ? '¡Mensaje enviado! Te responderé pronto.' 
          : 'Message sent! I\'ll get back to you soon.',
        {
          duration: 5000,
          style: {
            background: '#1f2937',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
          },
        }
      );

      // Limpiar formulario
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Notificación de error
      toast.error(
        language === 'es'
          ? 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
          : 'Error sending message. Please try again.',
        {
          duration: 5000,
          style: {
            background: '#1f2937',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t.contact.info.email,
      value: 'ambriz.calderon.erick9@gmail.com',
      href: 'mailto:ambriz.calderon.erick9@gmail.com',
      gradient: 'from-gray-500 to-gray-700',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: t.contact.info.phone,
      value: '443-473-08-70',
      href: 'tel:+524434730870',
      gradient: 'from-gray-600 to-gray-500',
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Erick09-0', label: t.contact.social.github, gradient: 'from-gray-700 to-gray-900' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/erick-calderon09', label: t.contact.social.linkedin, gradient: 'from-gray-600 to-gray-700' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/erick_calderon26/', label: t.contact.social.instagram, gradient: 'from-gray-600 to-gray-800' },
  ];

  return (
    <section id="contact" className="bg-black py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements - Gray */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 space-y-4 sm:space-y-6 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 px-3 sm:px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-gray-300">{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-4">
            {t.contact.title}{' '}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              {t.contact.titleAccent}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl sm:rounded-2xl shadow-lg shadow-black/20 border border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-300"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-gray-900/40`}>
                    <div className="scale-90 sm:scale-100">
                      {item.icon}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium mb-0.5 sm:mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-gray-300 transition-colors font-medium block break-all text-xs sm:text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium break-words text-xs sm:text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 pt-2 sm:pt-4"
            >
              <p className="text-xs sm:text-sm text-gray-500 font-medium">{t.contact.follow}</p>
              <div className="flex gap-2.5 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br ${social.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <div className="scale-90 sm:scale-100">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl shadow-black/20 border border-white/10 space-y-5 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs sm:text-sm text-gray-300 font-medium">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-gray-500 h-11 sm:h-12 rounded-xl text-sm sm:text-base"
                    placeholder={t.contact.form.namePlaceholder}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs sm:text-sm text-gray-300 font-medium">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-gray-500 h-11 sm:h-12 rounded-xl text-sm sm:text-base"
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs sm:text-sm text-gray-300 font-medium">
                  {t.contact.form.subject}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-gray-500 h-11 sm:h-12 rounded-xl text-sm sm:text-base"
                  placeholder={t.contact.form.subjectPlaceholder}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm text-gray-300 font-medium">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-gray-500 min-h-[140px] sm:min-h-[180px] rounded-xl text-sm sm:text-base"
                  placeholder={t.contact.form.messagePlaceholder}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-medium shadow-xl shadow-gray-900/60 hover:shadow-2xl hover:shadow-gray-900/80 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <span>{isSubmitting ? (language === 'es' ? 'Enviando...' : 'Sending...') : t.contact.form.send}</span>
                <Send className={`w-4 h-4 sm:w-5 sm:h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
