
import React from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { motion } from 'motion/react';
import { Check, Instagram, Mail, MapPin } from 'lucide-react';

export default function Teaching() {
  const { t } = useLanguage();

  const points = [
    t.teaching.point1,
    t.teaching.point2,
    t.teaching.point3,
    t.teaching.point4,
    t.teaching.point5,
  ];

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-6xl mx-auto" id="teaching-page">
      <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-serif mb-4"
          >
            {t.teaching.title}
          </motion.h1>
          <p className="text-xl md:text-2xl font-light uppercase tracking-widest text-brand-taupe mb-12">
            {t.teaching.subtitle}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg text-brand-ink/90 font-serif italic mb-12"
          >
            <p className="text-2xl leading-relaxed">
              "{t.teaching.intro}"
            </p>
          </motion.div>

          <div className="space-y-8 mb-16">
            <p className="text-lg bg-brand-beige/50 p-6 border-l-2 border-brand-gold italic">
              {t.teaching.offer}
            </p>

            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold mb-6">
                {t.teaching.pointsTitle}
              </h3>
              <ul className="space-y-4">
                {points.map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4 text-xl font-serif"
                  >
                    <Check className="w-5 h-5 text-brand-gold" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-brand-ink text-brand-cream p-12 rounded-sm shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
             <p className="relative z-10 text-xl font-serif italic mb-8 opacity-90">
               {t.teaching.footer}
             </p>
             <div className="relative z-10 grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 text-sm tracking-widest uppercase font-medium">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>{t.teaching.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm tracking-widest uppercase font-bold text-brand-gold">
                  <span>{t.teaching.price}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm tracking-widest uppercase font-medium">
                   <span>{t.teaching.trial}</span>
                </div>
             </div>
          </div>
        </div>

        <aside className="sticky top-32 space-y-8">
           <div className="aspect-square bg-brand-beige overflow-hidden rounded-sm shadow-md">
             <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Teaching" className="w-full h-full object-cover" />
           </div>
           
           <div className="bg-white p-8 border border-brand-beige shadow-sm space-y-6">
             <h4 className="text-center font-serif text-2xl">{t.teaching.contactPrompt}</h4>
             <div className="space-y-4">
                <a href="https://instagram.com/janine.vocalcoaching" target="_blank" className="flex items-center space-x-4 p-4 bg-brand-beige/30 hover:bg-brand-beige transition-colors rounded-sm">
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">@janine.vocalcoaching</span>
                </a>
                <a href="mailto:gruber.janine@gmx.net" className="flex items-center space-x-4 p-4 bg-brand-beige/30 hover:bg-brand-beige transition-colors rounded-sm">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">gruber.janine@gmx.net</span>
                </a>
             </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
