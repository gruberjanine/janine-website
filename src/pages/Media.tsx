
import React from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { motion } from 'motion/react';
import { RESUME_DATA } from '../data.ts';

export default function Media() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-7xl mx-auto" id="media-page">
      <motion.h1 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl md:text-7xl font-serif mb-16"
      >
        {t.nav.media}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RESUME_DATA.videos?.map((video, idx) => (
          <motion.div 
            key={video.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative aspect-video bg-brand-beige overflow-hidden rounded-3xl border border-brand-rose/20"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <p className="text-brand-taupe font-serif italic text-xl">Weitere Aufnahmen auf Anfrage.</p>
      </div>
    </div>
  );
}
