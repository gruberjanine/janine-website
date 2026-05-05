
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext.tsx';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'calendar', 'media', 'teaching', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'calendar', label: t.nav.calendar },
    { id: 'media', label: t.nav.media },
    { id: 'teaching', label: t.nav.lessons },
    { id: 'contact', label: t.nav.contact },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-brand-cream/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      )}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollTo('home')}
          className="text-2xl font-serif tracking-[0.2em] uppercase hover:text-brand-rose-dark transition-colors"
          id="logo-btn"
        >
          Janine Gruber
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "nav-link nav-link-offset text-xs tracking-[0.25em] uppercase",
                activeSection === item.id ? "nav-link-active font-medium" : "text-brand-taupe hover:text-brand-ink"
              )}
              id={`nav-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
            className="text-[10px] tracking-widest border border-brand-ink/20 px-3 py-1.5 rounded-full hover:bg-brand-rose transition-colors uppercase"
            id="lang-toggle-desktop"
          >
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
             onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
             className="text-[10px] tracking-widest border border-brand-ink/20 px-3 py-1.5 rounded-full uppercase"
          >
            {language.toUpperCase()}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-cream font-serif flex flex-col items-center justify-center space-y-10 text-3xl pt-20 h-screen"
            id="mobile-menu"
          >
            {navItems.map((item) => (
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
    </nav>
  );
}
