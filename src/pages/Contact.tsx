
import React from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-6xl mx-auto" id="contact-page">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl md:text-7xl font-serif mb-16"
      >
        {t.nav.contact}
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-brand-gold font-bold mb-8">Janine Gruber</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-brand-beige rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-brand-taupe">Email</p>
                   <a href="mailto:gruber.janine@gmx.net" className="text-xl font-serif">gruber.janine@gmx.net</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-brand-beige rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-brand-taupe">{language === 'de' ? 'Telefon' : 'Phone'}</p>
                   <a href="tel:+436766867667" className="text-xl font-serif">+43 676/6867667</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="p-4 bg-brand-beige rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-brand-taupe">{language === 'de' ? 'Standort' : 'Location'}</p>
                   <p className="text-xl font-serif">Wien & Innsbruck, Österreich</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="p-8 border border-brand-beige bg-white/50 backdrop-blur-sm rounded-sm italic font-serif">
            {language === 'de' 
              ? "Für Buchungsanfragen, Konzerttermine oder Unterrichtsstunden kontaktieren Sie mich bitte direkt per E-Mail oder Telefon."
              : "For booking inquiries, concert dates or singing lessons, please contact me directly via email or phone."
            }
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold opacity-60 px-1">{language === 'de' ? 'Vorname' : 'First Name'}</label>
              <input type="text" className="w-full bg-transparent border-b border-brand-beige py-3 focus:border-brand-gold outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold opacity-60 px-1">{language === 'de' ? 'Nachname' : 'Last Name'}</label>
              <input type="text" className="w-full bg-transparent border-b border-brand-beige py-3 focus:border-brand-gold outline-none transition-colors" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-60 px-1">Email</label>
            <input type="email" className="w-full bg-transparent border-b border-brand-beige py-3 focus:border-brand-gold outline-none transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-60 px-1">{language === 'de' ? 'Betreff' : 'Subject'}</label>
            <input type="text" className="w-full bg-transparent border-b border-brand-beige py-3 focus:border-brand-gold outline-none transition-colors" />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-60 px-1">{language === 'de' ? 'Nachricht' : 'Message'}</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-brand-beige py-3 focus:border-brand-gold outline-none transition-colors resize-none" />
          </div>

          <button className="group flex items-center space-x-3 px-8 py-4 bg-brand-ink text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-gold transition-all duration-500 rounded-sm">
            <span>{language === 'de' ? 'Senden' : 'Send'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.form>
      </div>
    </div>
  );
}
