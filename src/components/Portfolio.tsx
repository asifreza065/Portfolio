/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-brand-white text-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <span className="text-brand-black/50 uppercase tracking-[0.3em] font-medium text-[10px] mb-4 block">Selected Works</span>
            <h2 className="text-5xl md:text-8xl tracking-tight">Case <span className="italic font-serif">Studies</span></h2>
          </div>
          <p className="text-brand-black/60 max-w-sm mb-4">
            Explore a collection of visual identities, cinematic projects, and creative experiments crafted with precision and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROJECTS.map((project, idx) => {
            const CardContent = (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] mb-6 bg-brand-black">
                  {project.videoEmbed ? (
                    <iframe 
                      src={project.videoEmbed}
                      className="w-full h-full border-none"
                      allow="autoplay; fullscreen"
                      title={project.title}
                    />
                  ) : (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-transparent transition-colors" />
                      
                      {/* Floating button on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                          <ArrowUpRight className="w-8 h-8 text-brand-black" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-1">{project.title}</h3>
                    <p className="text-brand-black/50 text-xs uppercase tracking-widest">{project.category}</p>
                  </div>
                  <span className="text-brand-black/30 font-medium font-serif italic text-xl">/ {project.year}</span>
                </div>
              </motion.div>
            );

            if (project.link) {
              return (
                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
                  {CardContent}
                </a>
              );
            }

            return <div key={project.id}>{CardContent}</div>;
          })}
        </div>

        <div className="mt-32 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16 border border-brand-black/20 rounded-full flex items-center justify-center group-hover:bg-brand-black group-hover:text-brand-white transition-all duration-300">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-bold">See All Projects</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
