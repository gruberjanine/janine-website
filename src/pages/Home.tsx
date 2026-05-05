
import React from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { motion } from 'motion/react';
import { ChevronRight, Music } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 space-y-6"
        >
          <div className="space-y-1">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-brand-ink leading-none">Janine</h1>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-brand-ink leading-none pl-12 md:pl-20 italic">Gruber</h1>
          </div>
          <div className="flex items-center gap-6 pl-1 pr-1">
            <div className="h-px bg-brand-taupe flex-1 opacity-30" />
            <p className="text-base md:text-lg tracking-[0.4em] uppercase font-light text-brand-taupe whitespace-nowrap">{t.hero.subtitle}</p>
            <div className="h-px bg-brand-taupe flex-1 opacity-30" />
          </div>
          
          <div className="pt-8 flex gap-8">
             <button onClick={() => scrollTo('about')} className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-medium">
                {t.nav.about}
                <div className="p-3 rounded-full border border-brand-ink group-hover:bg-brand-ink group-hover:text-white transition-all">
                  <ChevronRight size={14} />
                </div>
             </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            {/* Pill-shaped image container */}
            <div className="absolute inset-0 rounded-[999px] border border-brand-rose-dark/30 -m-4 z-0" />
            <div className="w-full h-full rounded-[999px] overflow-hidden relative z-10 bg-brand-rose/20 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516216628859-9bccecad83ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Janine Gruber" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-cream z-20 animate-pulse">
              <Music className="text-brand-gold" size={32} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
