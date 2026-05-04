/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Instagram, Dribbble, Twitter, ArrowRight, Eye } from 'lucide-react';
import { STATS } from '../constants';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center pt-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-[20%] -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-huge uppercase text-brand-white">
                Dewan Md. <br />
                <span className="text-brand-accent italic font-serif lowercase">Asif Reza</span>
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="w-64 h-64 rounded-full border border-brand-accent/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="absolute inset-0 flex items-center justify-center uppercase text-[10px] tracking-[0.3em] font-medium text-brand-accent">
                <span className="w-full text-center">Creative Director • Visual Storyteller • Based in NY • </span>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl md:rounded-[40px] group"
            >
              <img 
                src="https://i.ibb.co.com/C5dpsgs7/file-000000005fd471fab291aed94c9b2643.png" 
                alt="Featured Work"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>
          </div>

          <div className="md:col-span-5 flex flex-col justify-end gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg md:text-xl text-brand-gray/80 leading-relaxed max-w-sm">
                Design is not just what it looks like, it’s how it works.<br />
                <span className="text-brand-gray/60 italic text-base block mt-2">I believe in creating experiences that connect and inspire.</span>
                <span className="text-sm uppercase tracking-widest text-brand-accent/80 font-bold mt-4 block">Graphic Designer | Brand Identity | Social Media | UI Design</span>
              </p>
            </motion.div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-brand-accent text-brand-black rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 group transition-shadow hover:shadow-[0_0_20px_rgba(244,185,66,0.3)]"
                >
                  Hire Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a 
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-brand-white/20 text-brand-white rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-brand-white hover:text-brand-black transition-all"
                >
                  View Projects <Eye className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="flex items-center gap-12">
                <div className="flex gap-4">
                  {[Instagram, Twitter, Dribbble].map((Icon, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="p-3 border border-brand-white/10 rounded-full hover:bg-brand-accent hover:border-brand-accent hover:text-brand-black transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
                
                <div className="h-[1px] flex-1 bg-brand-white/10" />
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="hidden sm:block"
                >
                  <ArrowDown className="w-5 h-5 text-brand-white/50" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 py-12 border-t border-brand-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-display font-black text-brand-white">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-white/50">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
