
import React from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import { RESUME_DATA } from '../data.ts';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-brand-taupe font-semibold">Discovery</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-light leading-tight"
            >
              {t.about.title}
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl leading-relaxed text-brand-ink/90 font-serif italic"
          >
            {t.about.bio}
          </motion.p>

          <div className="pt-12 grid sm:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-brand-taupe">
                 <div className="w-8 h-px bg-brand-rose-dark" /> {t.about.education}
              </h3>
              <div className="space-y-10">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="group relative pl-6 border-l border-brand-rose">
                    <div className="absolute top-1.5 -left-1 w-2 h-2 rounded-full bg-brand-rose-dark" />
                    <span className="text-[10px] tracking-widest text-brand-taupe font-bold uppercase">{edu.years}</span>
                    <h4 className="font-serif text-2xl mt-1 leading-tight">{edu.title}</h4>
                    <p className="text-sm italic text-brand-taupe mt-1">{edu.institution}</p>
                    {edu.details && <p className="text-sm text-brand-ink/60 mt-2 leading-relaxed">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Roles */}
            <div className="space-y-8">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-brand-taupe">
                 <div className="w-8 h-px bg-brand-rose-dark" /> {t.about.roles}
              </h3>
              <ul className="space-y-4">
                {RESUME_DATA.roles.map((role, idx) => (
                  <li key={idx} className="text-xl font-serif flex items-start gap-3">
                     <span className="text-brand-gold mt-1">✦</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-16">
          <div className="aspect-[4/5] rounded-[99px] overflow-hidden shadow-xl grayscale brightness-110 mb-12">
             <img src="https://images.unsplash.com/photo-1520182205163-04f4a3e9112d?auto=format&fit=crop&q=80&w=1000" alt="Detail" className="w-full h-full object-cover" />
          </div>

          {/* Studied Roles */}
          <div className="bg-brand-beige p-10 rounded-[48px] shadow-sm relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-rose-dark/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <h3 className="text-sm uppercase tracking-[0.3em] font-bold mb-8 flex items-center gap-4 text-brand-taupe">
               <div className="w-8 h-px bg-brand-ink/20" /> {t.about.studiedRoles}
            </h3>
            <ul className="space-y-4">
              {RESUME_DATA.studied.map((role, idx) => (
                <li key={idx} className="text-lg font-serif italic text-brand-ink/70 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          {/* Coaches */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-brand-taupe px-2">
               <div className="w-8 h-px bg-brand-gold" /> {t.about.coaches}
            </h3>
            <div className="flex flex-wrap gap-3">
              {RESUME_DATA.coaches.map((coach, idx) => (
                <span key={idx} className="px-6 py-3 bg-white border border-brand-rose rounded-full text-xs tracking-widest uppercase font-medium shadow-sm hover:shadow-md transition-shadow cursor-default">
                  {coach}
                </span>
              ))}
            </div>
          </div>

          {/* Competitions */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-brand-taupe px-2">
               <div className="w-8 h-px bg-brand-rose-dark" /> {t.about.competitions}
            </h3>
            <div className="space-y-4">
              {RESUME_DATA.competitions.map((comp, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-brand-rose flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-brand-rose flex items-center justify-center shrink-0 group-hover:bg-brand-gold transition-colors">
                    <Trophy size={16} className="group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm font-medium">{comp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
