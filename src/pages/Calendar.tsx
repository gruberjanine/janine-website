
import React from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data.ts';

export default function Calendar() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-5xl mx-auto" id="calendar-page">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl md:text-7xl font-serif mb-16"
      >
        {t.calendar.title}
      </motion.h1>

      <div className="space-y-24">
        {/* Preview Season */}
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-brand-gold font-bold mb-12 border-b border-brand-beige pb-4 flex items-center gap-4">
            <CalendarIcon size={16} />
            {t.calendar.upcoming}
          </h2>
          <div className="space-y-12">
            {RESUME_DATA.calendar.upcoming.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[1fr_2fr] gap-8 items-start group"
              >
                <div className="text-brand-taupe font-serif text-xl border-l border-brand-gold pl-6 py-2">
                  {item.date}
                </div>
                <div>
                   <h3 className="text-2xl font-serif italic mb-2">{item.title}</h3>
                   <div className="flex items-center gap-2 text-brand-ink/70 mb-1">
                     <MapPin size={14} className="text-brand-gold" />
                     <p>{item.location}</p>
                   </div>
                   {item.details && <p className="text-sm italic text-brand-taupe">{item.details}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-brand-gold font-bold mb-12 border-b border-brand-beige pb-4 flex items-center gap-4">
            <CalendarIcon size={16} />
            {t.calendar.past}
          </h2>
          <div className="space-y-12">
            {RESUME_DATA.calendar.past.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[1fr_2fr] gap-8 items-start group"
              >
                <div className="text-brand-taupe font-serif text-xl border-l border-brand-gold pl-6 py-2">
                   {item.date}
                </div>
                <div>
                   <h3 className="text-2xl font-serif italic mb-2">{item.title}</h3>
                   <div className="flex items-center gap-2 text-brand-ink/70 mb-1">
                     <MapPin size={14} className="text-brand-gold" />
                     <p>{item.location}</p>
                   </div>
                   {item.details && <p className="text-sm italic text-brand-taupe">{item.details}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 p-12 bg-brand-ink text-brand-cream rounded-sm text-center">
        <p className="font-serif italic text-2xl mb-4">"{t.calendar.past}"</p>
        <p className="text-sm tracking-widest uppercase opacity-60">Ausführliche Vita auf Anfrage.</p>
      </div>
    </div>
  );
}
