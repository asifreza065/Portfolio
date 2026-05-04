/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-brand-black/80 backdrop-blur-md' : 'py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="text-2xl font-display font-black tracking-tighter text-brand-white">
            ASIF<span className="text-brand-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-brand-white/70 hover:text-brand-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2 border border-brand-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all duration-500 flex items-center gap-2"
            >
              Start Project <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[60] bg-brand-black flex flex-col items-center justify-center"
      >
        <button 
          className="absolute top-8 right-6 text-brand-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 0.1 * idx }}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display font-black tracking-tighter hover:text-brand-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};
