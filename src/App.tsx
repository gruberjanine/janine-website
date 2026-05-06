/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, X, Instagram, Mail, Phone, MapPin, 
  ChevronRight, Calendar as CalendarIcon, Music, 
  Mic2, GraduationCap, Trophy, Users, Heart,
  Send, ExternalLink, Camera, Image
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { translations as TRANSLATIONS } from './translations';
import { RESUME_DATA } from './data';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

export default function App() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mediaTab, setMediaTab] = useState<'videos' | 'stage' | 'portraits'>('videos');
  const [legalModal, setLegalModal] = useState<'imprint' | 'privacy' | null>(null);
  const [lightbox, setLightbox] = useState<{ images: { id: string, caption?: string, copyright?: string }[], index: number } | null>(null);
  const [state, handleSubmit] = useForm("xlgzbqek");

  const t = TRANSLATIONS[lang];

  // Automatic Dynamic Calendar Logic
  const allEvents = [...t.calendar.resumeData.upcoming, ...t.calendar.resumeData.past];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dynamicUpcoming = allEvents
    .filter(event => event.isoDate && new Date(event.isoDate) >= today)
    .sort((a, b) => new Date(a.isoDate!).getTime() - new Date(b.isoDate!).getTime());

  const dynamicPast = allEvents
    .filter(event => !event.isoDate || new Date(event.isoDate) < today)
    .sort((a, b) => new Date(b.isoDate!).getTime() - new Date(a.isoDate!).getTime());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'calendar', 'media', 'lessons', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 170 && rect.bottom >= 170) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'ArrowRight') {
        const nextIndex = (lightbox.index + 1) % lightbox.images.length;
        setLightbox({ ...lightbox, index: nextIndex });
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length;
        setLightbox({ ...lightbox, index: prevIndex });
      } else if (e.key === 'Escape') {
        setLightbox(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'calendar', label: t.nav.calendar },
    { id: 'media', label: t.nav.media },
    { id: 'lessons', label: t.nav.lessons },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream/50 selection:bg-brand-rose-button selection:text-white font-sans text-brand-ink">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-rose/40 blur-[120px] rounded-full" />
        <div className="absolute top-[60%] -right-[10%] w-[35%] h-[35%] bg-brand-rose-light/50 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled 
          ? "bg-brand-cream/85 backdrop-blur-xl py-4 shadow-sm border-b border-brand-rose/20" 
          : "bg-transparent py-10"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => scrollTo('home')}
            className={cn(
              "group relative flex items-center justify-center w-14 h-14 transition-all duration-500",
              !scrolled ? "scale-110" : "scale-100"
            )}
          >
            <div className={cn(
              "absolute inset-0 rounded-full border border-brand-ink/10 transition-all duration-700 group-hover:border-brand-rose-dark group-hover:rotate-45",
              !scrolled ? "bg-white/40 backdrop-blur-md shadow-sm" : "bg-transparent"
            )} />
            <span className={cn(
              "relative z-10 text-xl font-serif tracking-widest font-light transition-colors duration-500",
              "text-brand-ink group-hover:text-brand-rose-dark"
            )}>
              JG
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[11px] tracking-[0.25em] uppercase transition-all duration-500",
                  activeSection === item.id 
                    ? "bg-brand-rose-button text-white shadow-xl shadow-brand-rose-button/20 font-bold scale-105" 
                    : scrolled 
                      ? "text-brand-taupe hover:text-brand-ink hover:bg-brand-rose/30" 
                      : "text-brand-ink bg-white/30 backdrop-blur-md hover:bg-white/60 shadow-sm"
                )}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className={cn(
                "ml-6 text-[10px] tracking-widest border border-brand-ink/20 px-4 py-2 rounded-full transition-all duration-500 uppercase font-bold",
                scrolled ? "text-brand-ink hover:bg-brand-rose hover:border-brand-rose" : "text-brand-ink bg-white/40 backdrop-blur-md hover:bg-white/80"
              )}
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
              className="text-[10px] tracking-widest border border-brand-ink/20 px-3 py-1.5 rounded-full uppercase font-bold"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-40 bg-brand-cream/95 backdrop-blur-lg font-serif flex flex-col items-center justify-center space-y-10 text-3xl pt-20"
          >
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollTo(item.id)} 
                className="tracking-widest uppercase hover:text-brand-rose-dark transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>


      {/* Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.weserv.nl/?url=drive.google.com/uc?id=1YOsFUuWd7zNi02PiK16acbJa9qYkgiWT&w=2400" 
              alt="Janine Gruber" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Copyright badge on hero - Light color for visibility */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0 z-30">
              <span className="text-[6px] uppercase tracking-[0.4em] text-white/60 font-bold bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">© Katarina Novcic</span>
            </div>
            {/* Multi-layered overlay for depth and readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-beige via-brand-beige/40 to-transparent" />
            <div className="absolute inset-0 bg-brand-ink/5" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-4xl space-y-8"
          >
            <div className="space-y-0 relative">
              <div className="pb-2">
                <motion.span 
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                  className="text-sm uppercase tracking-[0.6em] text-brand-rose-dark font-bold mb-6 block md:translate-y-0 -translate-y-6"
                >
                  {t.hero.subtitle}
                </motion.span>
              </div>
              
              <div className="overflow-hidden pb-6 -mb-6">
                <motion.h1 
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="text-[14vw] md:text-[11vw] lg:text-[10.5rem] font-light tracking-tighter text-brand-ink leading-[0.8] mix-blend-multiply"
                >
                  Janine
                </motion.h1>
              </div>
              
              <div className="overflow-hidden pb-6 -mb-6">
                <motion.h1 
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                  className="text-[14vw] md:text-[11vw] lg:text-[10.5rem] font-light tracking-tighter text-brand-rose-dark leading-[0.8] pl-16 md:pl-48 italic mix-blend-darken"
                >
                  Gruber
                </motion.h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section (Vita) */}
      <section id="about" className="pt-16 pb-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="max-w-4xl mx-auto space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-6xl md:text-7xl font-light">{t.about.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-[1fr_340px] gap-16 items-start">
              <div className="space-y-12">
                <div className="prose prose-xl text-brand-ink/90 font-normal leading-relaxed whitespace-pre-wrap text-justify max-w-none">
                  {t.about.bio}
                </div>
              </div>

              <div className="space-y-3 sticky top-40">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="aspect-[3/4] rounded-[40px] overflow-hidden border border-brand-rose shadow-sm shadow-2xl relative"
                >
                   <img 
                     src="https://images.weserv.nl/?url=drive.google.com/uc?id=1s7Pqe8wb23Krbertpfm1tztp5pFym_3W&w=800" 
                     alt="Janine Gruber Portrait" 
                     className="w-full h-full object-cover"
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[40px]" />
                </motion.div>
                <p className="text-[6px] uppercase tracking-[0.2em] text-brand-taupe/40 text-center font-medium">© Katarina Novcic</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 pt-24 border-t border-brand-rose-medium/20">
              {/* Education */}
              <div className="space-y-10">
                <h3 className="text-lg uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-brand-rose-dark">
                   <div className="w-8 h-px bg-brand-rose-dark" /> {t.about.education}
                </h3>
                <div className="space-y-12">
                  {t.about.resumeData.education.map((edu, idx) => (
                    <div key={idx} className="group relative pl-8 border-l-2 border-brand-rose-medium/20">
                      <div className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-brand-rose-medium border-4 border-white shadow-sm" />
                      <span className="text-[10px] tracking-[0.2em] text-brand-rose-dark font-black uppercase">{edu.years}</span>
                      <h4 className="font-serif text-2xl mt-2 leading-tight">{edu.title}</h4>
                      <p className="text-base italic text-brand-taupe mt-1">{edu.institution}</p>
                      {edu.details && <p className="text-sm text-brand-ink/60 mt-3 leading-relaxed">{edu.details}</p>}
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Competitions */}
              <div className="space-y-8">
                <h3 className="text-lg uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-brand-rose-dark">
                   <div className="w-8 h-px bg-brand-rose-dark" /> {t.about.competitions}
                </h3>
                <div className="grid gap-4">
                  {t.about.resumeData.competitions.map((comp, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-brand-rose-medium/30 flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-brand-rose flex items-center justify-center shrink-0">
                        <Trophy size={20} className="text-brand-rose-dark" />
                      </div>
                      <p className="text-sm font-semibold tracking-tight">{comp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Repertoire Section */}
            <div className="pt-24 space-y-16">
               <div className="space-y-4 text-center">
                 <h2 className="text-5xl font-light">{t.about.repertoire}</h2>
               </div>

               <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-10 p-10 bg-white rounded-[48px] border border-brand-rose-medium/20 shadow-sm">
                      <h3 className="text-lg uppercase tracking-[0.3em] font-bold text-brand-rose-dark flex items-center gap-4">
                        <div className="w-8 h-px bg-brand-rose-dark" /> {t.about.roles}
                      </h3>
                      <ul className="space-y-6">
                        {t.about.resumeData.roles.map((role, idx) => (
                          <li key={idx} className="text-xl font-serif flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-rose-button mt-2.5 shrink-0" />
                            <span className="leading-tight">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
 
                    <div className="space-y-10 p-10 bg-brand-rose/5 rounded-[48px] border border-brand-rose-medium/10">
                      <h3 className="text-lg uppercase tracking-[0.3em] font-bold text-brand-rose-dark flex items-center gap-4">
                        <div className="w-8 h-px bg-brand-rose-dark/40" /> {t.about.studiedRoles}
                      </h3>
                      <ul className="space-y-5">
                        {t.about.resumeData.studied.map((role, idx) => (
                          <li key={idx} className="text-lg font-serif italic text-brand-ink/60 flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-rose-medium/40 mt-2.5 shrink-0" />
                            <span className="leading-snug">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                 </div>
                 <div className="space-y-4">
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="hidden lg:block aspect-[2/3] rounded-[48px] overflow-hidden border border-brand-rose shadow-xl relative"
                   >
                     <img 
                        src={`https://images.weserv.nl/?url=drive.google.com/uc?id=1Cdcf4pDt2Jn5lvbaw284BABwc4A6T9Yc&w=800`} 
                        alt="Janine Gruber Repertoire" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                     />
                   </motion.div>
                   <p className="hidden lg:block text-[6px] uppercase tracking-[0.2em] text-brand-taupe/40 text-center font-medium">© Katarina Novcic</p>
                 </div>
               </div>
            </div>

            {/* Coaches */}
            <div className="pt-24 space-y-10">
              <h3 className="text-lg uppercase tracking-[0.3em] font-bold flex items-center gap-4 text-brand-rose-dark justify-center">
                 <div className="w-12 h-px bg-brand-rose-medium" /> {t.about.coaches} <div className="w-12 h-px bg-brand-rose-medium" />
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {t.about.resumeData.coaches.map((coach, idx) => (
                  <span key={idx} className="px-8 py-4 bg-white border border-brand-rose-medium/20 rounded-full text-xs tracking-widest uppercase font-bold text-brand-ink/70 shadow-sm">
                    {coach}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="pt-16 pb-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-6xl md:text-7xl font-light">{t.calendar.title}</h2>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-16 items-start">
            <div className="space-y-12 mb-32">
              <div className="space-y-6 mb-12">
                <h3 className="text-lg uppercase tracking-[0.3em] font-bold text-brand-rose-dark flex items-center gap-4">
                   <div className="w-8 h-px bg-brand-rose-dark" /> {t.calendar.upcoming}
                </h3>
              </div>
              {dynamicUpcoming.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "group grid md:grid-cols-[180px_1fr] gap-8 p-8 md:p-12 bg-white rounded-[40px] border border-brand-rose-medium/20 shadow-sm transition-all duration-500",
                    item.link && "hover:shadow-xl hover:border-brand-rose-medium/40 cursor-pointer"
                  )}
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <div className="space-y-2">
                    <div className="text-2xl font-serif text-brand-rose-button">{item.date}</div>
                    {item.time && <div className="text-sm tracking-widest text-brand-taupe uppercase font-bold">{item.time}</div>}
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-serif leading-tight">{item.title}</h3>
                      {item.description && <p className="text-lg italic text-brand-taupe">{item.description}</p>}
                    </div>
 
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-brand-rose/30">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-brand-rose-dark mt-1 shrink-0" />
                        <span className="text-sm leading-relaxed text-brand-ink/70">{item.location}</span>
                      </div>
                      <div className="space-y-4">
                        {item.details && (
                          <div className="text-sm text-brand-taupe italic">{item.details}</div>
                        )}
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-ink hover:text-brand-rose-button transition-colors"
                          >
                            {t.calendar.detailsBtn} <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sticky Portrait in Calendar Section */}
            <div className="sticky top-40 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-[32px] overflow-hidden border border-brand-rose shadow-xl"
              >
                <img 
                  src="https://images.weserv.nl/?url=drive.google.com/uc?id=1WT8V-mDsUI_-Ocih7MqZ7SQ_p7DDKmsR&w=400" 
                  alt="Janine Gruber" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="text-center px-1">
                <p className="text-[6px] uppercase tracking-[0.2em] text-brand-taupe/40 font-medium">© Katarina Novcic</p>
              </div>
            </div>
          </div>

          <div className="pt-20 border-t border-brand-rose/40">
            <div className="space-y-6 mb-12">
                <h3 className="text-lg uppercase tracking-[0.3em] font-bold text-brand-rose-dark flex items-center gap-4">
                   <div className="w-8 h-px bg-brand-rose-dark" /> {t.calendar.past}
                </h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {dynamicPast.map((item, idx) => (
                <div key={idx} className="group grid md:grid-cols-[140px_1fr] gap-x-8 gap-y-4 p-8 bg-white/40 rounded-[32px] border border-brand-rose-medium/20 transition-all duration-300 hover:bg-white/60">
                  <div className="text-brand-rose-button font-serif shrink-0 italic text-lg">{item.date}</div>
                  <div className="space-y-4">
                    <h4 className="font-serif text-xl leading-tight">{item.title}</h4>
                    <div className="grid md:grid-cols-2 gap-4 pt-3 border-t border-brand-rose/20">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={14} className="text-brand-rose-dark mt-0.5 shrink-0" />
                        <span className="text-[11px] uppercase tracking-widest text-brand-taupe font-bold leading-tight">{item.location}</span>
                      </div>
                      {item.details && (
                        <div className="text-[11px] uppercase tracking-widest text-brand-rose-dark font-medium italic leading-tight">
                          {item.details}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="pt-16 pb-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-light"
            >
              {t.media.title}
            </motion.h2>

            {/* Media Tabs */}
            <div className="flex flex-wrap justify-center gap-4 pt-10">
              {[
                { id: 'videos', label: t.media.videos, icon: <Music size={14} /> },
                { id: 'stage', label: t.media.stagePhotos, icon: <Camera size={14} /> },
                { id: 'portraits', label: t.media.portraits, icon: <Image size={14} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setMediaTab(tab.id as any)}
                  className={cn(
                    "px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center gap-3 border",
                    mediaTab === tab.id 
                      ? "bg-brand-rose-button text-white border-brand-rose-button shadow-lg shadow-brand-rose-button/20 scale-105" 
                      : "bg-white text-brand-rose-dark border-brand-rose-medium/20 hover:border-brand-rose-button hover:text-brand-rose-button"
                  )}
                >
                  <span className={cn("transition-colors", mediaTab === tab.id ? "text-white" : "text-brand-rose-dark/60")}>
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="min-h-[600px] relative">
            <AnimatePresence mode="wait">
              {mediaTab === 'videos' && (
                <motion.div
                  key="videos"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {RESUME_DATA.videos?.map((video, idx) => (
                      <motion.div 
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative aspect-video bg-brand-rose/10 rounded-[32px] overflow-hidden border border-brand-rose/30 shadow-sm transition-all duration-500 hover:shadow-xl"
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
                </motion.div>
              )}

              {mediaTab === 'stage' && (
                <motion.div
                  key="stage"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {RESUME_DATA.gallery.stage.length > 0 ? (
                      RESUME_DATA.gallery.stage.map((item: any, idx) => (
                        <div key={item.id} className="space-y-3">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => setLightbox({ images: RESUME_DATA.gallery.stage, index: idx })}
                            className="aspect-[3/4] rounded-3xl overflow-hidden border border-brand-rose-medium/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative group cursor-zoom-in"
                          >
                            <img 
                              src={`https://images.weserv.nl/?url=drive.google.com/uc?id=${item.id}&w=1000`} 
                              alt={item.caption || `Stage Photo ${idx + 1}`} 
                              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.objectPosition || ''}`}
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                          <div className="text-center px-1">
                             <p className="text-[6px] uppercase tracking-[0.2em] text-brand-taupe/40 font-medium mb-1">{item.copyright || '© Katarina Novcic'}</p>
                             {item.caption && <p className="text-[11px] font-serif italic text-brand-ink/90 leading-tight">{item.caption}</p>}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full py-20 border-2 border-dashed border-brand-rose-medium/20 rounded-[48px] flex flex-col items-center justify-center text-center space-y-4">
                        <p className="text-xl font-serif italic text-brand-taupe opacity-60">{t.media.comingSoon}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {mediaTab === 'portraits' && (
                <motion.div
                  key="portraits"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {RESUME_DATA.gallery.portraits.map((item, idx) => (
                      <div key={item.id} className="space-y-2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          onClick={() => setLightbox({ images: RESUME_DATA.gallery.portraits, index: idx })}
                          className="aspect-[3/4] rounded-3xl overflow-hidden border border-brand-rose-medium/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative group cursor-zoom-in"
                        >
                          <img 
                            src={`https://images.weserv.nl/?url=drive.google.com/uc?id=${item.id}&w=1000`} 
                            alt={`Portrait ${idx + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                        <p className="text-[6px] uppercase tracking-[0.2em] text-brand-taupe/40 text-center font-medium">{item.copyright || '© Katarina Novcic'}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="lessons" className="pt-16 pb-24 bg-brand-rose-light/50 scroll-mt-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-rose/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-tight break-words">{t.teaching.title}</h2>
              </div>

              <p className="text-lg sm:text-xl text-brand-ink/80 leading-relaxed font-serif italic">
                {t.teaching.intro}
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-[32px] shadow-sm border border-brand-rose-medium/20 space-y-6">
                <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-brand-rose-dark flex items-center gap-3">
                   <Mic2 size={16} /> {t.teaching.focusTitle}
                </h3>
                <ul className="space-y-4">
                  {t.teaching.focusItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm md:text-base">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-rose-medium shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Image & Booking Column */}
            <div className="lg:col-span-6 space-y-8">
               <div className="max-w-[240px] mx-auto space-y-3">
                 <motion.div
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   onClick={() => setLightbox({ images: [{ id: "1NAyybBAHbYTQx5zRVGM92k-Q81ivWvSR", copyright: "© Katarina Novcic" }], index: 0 })}
                   className="relative aspect-square cursor-zoom-in"
                 >
                   <div className="absolute inset-0 bg-brand-rose/20 rounded-full blur-3xl animate-pulse" />
                   <div className="w-full h-full rounded-[32px] overflow-hidden border-2 border-white shadow-xl relative z-10">
                     <img 
                       src="https://images.weserv.nl/?url=drive.google.com/uc?id=1NAyybBAHbYTQx5zRVGM92k-Q81ivWvSR&w=600" 
                       alt="Janine Gruber Vocal Coach" 
                       className="w-full h-full object-cover"
                       referrerPolicy="no-referrer"
                     />
                   </div>
                 </motion.div>
                 <p className="text-[6px] uppercase tracking-[0.2em] text-brand-taupe/40 text-center font-medium">© Katarina Novcic</p>
               </div>

               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="pt-6 border-t border-brand-rose/20 space-y-6"
               >
                 <div className="text-center space-y-3">
                   <h3 className="text-2xl md:text-3xl font-light">{t.teaching.bookingTitle}</h3>
                   <p className="text-brand-taupe italic font-serif text-sm">
                     {t.teaching.bookingSubtitle}
                   </p>
                 </div>
                 
                 <div className="bg-white rounded-[24px] border border-brand-rose-medium/30 shadow-xl overflow-hidden relative group">
                   <iframe 
                     src="https://cal.com/janine.vocalcoaching/gesangsunterricht?embed=true" 
                     style={{ width: '100%', height: '340px', border: 'none' }}
                     title="Booking Calendar"
                     className="relative z-10 w-full"
                   />
                 </div>
                 
                 <div className="text-center">
                   <a 
                     href="https://cal.com/janine.vocalcoaching/gesangsunterricht" 
                     target="_blank" 
                     className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-rose-dark hover:text-brand-rose-button transition-colors px-6 py-3 bg-white rounded-full border border-brand-rose/30 shadow-sm"
                   >
                     {t.teaching.bookingButton} <ExternalLink size={12} />
                   </a>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-16 pb-24 px-6 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <h3 className="text-lg uppercase tracking-[0.3em] font-bold text-brand-rose-dark flex items-center gap-4 mb-4">
                 <div className="w-8 h-px bg-brand-rose-dark" /> {t.contact.subtitle}
              </h3>
              <h2 className="text-6xl md:text-7xl font-light">{t.contact.title}</h2>
            </div>
 
            <div className="space-y-10 pt-4">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white border border-brand-rose rounded-3xl flex items-center justify-center group-hover:bg-brand-rose transition-colors duration-500 shadow-sm">
                  <Mail size={22} className="text-brand-ink" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe font-bold">Email</p>
                  <a href="mailto:gruber.janine@gmx.net" className="text-xl md:text-2xl font-serif hover:text-brand-rose-dark transition-colors">gruber.janine@gmx.net</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white border border-brand-rose rounded-3xl flex items-center justify-center group-hover:bg-brand-rose transition-colors duration-500 shadow-sm">
                  <Instagram size={22} className="text-brand-ink" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe font-bold">Instagram</p>
                  <a href="https://instagram.com/janine_gruber_" target="_blank" className="text-xl md:text-2xl font-serif hover:text-brand-rose-dark transition-colors">@janine_gruber_</a>
                </div>
              </div>
            </div>
 
            <div className="max-w-md p-5 border border-brand-rose/40 rounded-[32px] bg-white shadow-xl shadow-brand-rose/5 flex items-center gap-6">
               <div className="w-20 h-20 rounded-full overflow-hidden border border-brand-rose/20 shrink-0 shadow-sm">
                  <img 
                    src="https://images.weserv.nl/?url=drive.google.com/uc?id=1D0Xvwst5e8OznPQr3uHgDE_IUR_gOAjX&w=400" 
                    alt="Janine Gruber" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
                <div className="space-y-1">
                  <p className="text-sm font-serif italic text-brand-ink leading-tight">
                    {lang === 'de' ? '"Ich freue mich über jede Nachricht!"' : '"I look forward to hearing from you!"'}
                  </p>
                  <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-taupe">— Janine Gruber</p>
                </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            {state.succeeded ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-rose-light/30 p-10 md:p-16 rounded-[64px] border border-brand-rose/30 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-brand-rose-button rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-serif italic text-brand-ink">
                  {lang === 'de' ? 'Vielen Dank!' : 'Thank you!'}
                </h3>
                <p className="text-brand-taupe font-serif">
                  {lang === 'de' 
                    ? 'Ihre Nachricht wurde erfolgreich versendet. Ich werde mich so schnell wie möglich bei Ihnen melden.' 
                    : 'Your message has been sent successfully. I will get back to you as soon as possible.'}
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-rose-dark hover:text-brand-rose-button transition-colors pt-4"
                >
                  {lang === 'de' ? 'Eine weitere Nachricht senden' : 'Send another message'}
                </button>
              </motion.div>
            ) : (
              <form className="bg-brand-beige/20 p-10 md:p-16 rounded-[64px] border border-brand-rose/30 space-y-10 shadow-sm" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe font-bold ml-4">{t.contact.formName}</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-white border border-brand-rose/20 p-5 rounded-full focus:ring-1 focus:ring-brand-rose-dark outline-none transition-all placeholder:text-brand-taupe/40" 
                      placeholder={lang === 'de' ? "Maria Muster" : "Sarah Smith"} 
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 ml-4 mt-1" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe font-bold ml-4">{t.contact.formEmail}</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-white border border-brand-rose/20 p-5 rounded-full focus:ring-1 focus:ring-brand-rose-dark outline-none transition-all placeholder:text-brand-taupe/40" 
                      placeholder="hello@example.com" 
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 ml-4 mt-1" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-brand-taupe font-bold ml-4">{t.contact.formMessage}</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={6} 
                    required
                    className="w-full bg-white border border-brand-rose/20 p-8 rounded-[32px] focus:ring-1 focus:ring-brand-rose-dark outline-none transition-all resize-none placeholder:text-brand-taupe/40" 
                    placeholder={t.contact.formPlaceholder} 
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 ml-4 mt-1" />
                </div>
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className={cn(
                    "group w-full text-white py-6 rounded-full tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-xl flex items-center justify-center gap-4",
                    state.submitting 
                      ? "bg-brand-rose-dark/50 cursor-not-allowed" 
                      : "bg-brand-rose-button hover:bg-brand-rose-dark hover:scale-[1.02] active:scale-95 shadow-brand-rose-button/20"
                  )}
                >
                  {state.submitting ? (
                    lang === 'de' ? 'Wird gesendet...' : 'Sending...'
                  ) : (
                    <>
                      {t.contact.formSend} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-20 border-t border-brand-rose bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-10">
            <div className="text-center">
              <p className="font-serif tracking-[0.4em] uppercase text-2xl mb-2 text-brand-ink">Janine Gruber</p>
              <p className="text-[10px] uppercase tracking-[0.35em] text-brand-taupe font-bold">{t.footer.role}</p>
            </div>
  
            <div className="flex justify-center space-x-8 text-brand-taupe">
              <a href="https://instagram.com/janine_gruber_" target="_blank" className="hover:text-brand-rose-dark transition-all duration-300 transform hover:scale-110"><Instagram size={22} /></a>
              <a href="mailto:gruber.janine@gmx.net" className="hover:text-brand-rose-dark transition-all duration-300 transform hover:scale-110"><Mail size={22} /></a>
            </div>
  
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-8 border-t border-brand-rose/30 w-full justify-center">
              <p className="text-[10px] tracking-[0.2em] text-brand-taupe/80 order-2 md:order-1">
                copyright © 2026 Janine Gruber
              </p>
              <div className="flex items-center gap-10 order-1 md:order-2">
                <button 
                  onClick={() => setLegalModal('imprint')}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe hover:text-brand-rose-dark transition-colors"
                >
                  {t.footer.imprint}
                </button>
                <button 
                  onClick={() => setLegalModal('privacy')}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-taupe hover:text-brand-rose-dark transition-colors"
                >
                  {t.footer.privacy}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <AnimatePresence>
        {legalModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-brand-ink/90 backdrop-blur-md" onClick={() => setLegalModal(null)} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
            >
              <div className="p-8 md:p-12 border-b border-brand-rose/20 flex justify-between items-center bg-brand-cream/30">
                <h2 className="text-2xl font-serif italic text-brand-ink">
                  {legalModal === 'imprint' ? t.footer.imprint : t.footer.privacy}
                </h2>
                <button 
                  onClick={() => setLegalModal(null)}
                  className="p-3 hover:bg-brand-rose/10 rounded-full transition-colors group"
                >
                  <X size={24} className="text-brand-taupe group-hover:text-brand-ink transition-colors" />
                </button>
              </div>
              <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar prose prose-sm prose-stone">
                <div className="space-y-8 font-sans leading-relaxed text-brand-ink/80 text-justify whitespace-pre-wrap">
                  {legalModal === 'imprint' ? t.footer.legal.imprintFull : t.footer.legal.privacyFull}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 bg-brand-ink/95 backdrop-blur-xl" onClick={() => setLightbox(null)} />
            
            <motion.div
              layoutId={`img-${lightbox.images[lightbox.index].id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-full max-h-full flex items-center justify-center group"
            >
              {/* Navigation Arrows */}
              {lightbox.images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
                    }}
                    className="absolute left-4 md:-left-16 p-4 text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm z-10"
                    aria-label="Previous image"
                  >
                    <ChevronRight className="rotate-180" size={32} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
                    }}
                    className="absolute right-4 md:-right-16 p-4 text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              <div className="relative">
                <img 
                  key={lightbox.images[lightbox.index].id}
                  src={`https://images.weserv.nl/?url=drive.google.com/uc?id=${lightbox.images[lightbox.index].id}&w=1600`} 
                  className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain border border-white/10"
                  alt={lightbox.images[lightbox.index].caption || "Enlarged view"}
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-1">
                      {lightbox.images[lightbox.index].caption && (
                        <p className="font-serif italic text-lg leading-tight">{lightbox.images[lightbox.index].caption}</p>
                      )}
                      <p className="text-[6px] uppercase tracking-[0.2em] opacity-60 font-bold">{lightbox.images[lightbox.index].copyright || "© Katarina Novcic"}</p>
                    </div>
                    <div className="text-[10px] tracking-[0.3em] font-bold opacity-40 uppercase">
                      {lightbox.index + 1} / {lightbox.images.length}
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 md:-right-12 p-3 text-white hover:text-brand-rose transition-colors"
              >
                <X size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
