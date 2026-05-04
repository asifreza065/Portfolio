/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { EXHIBITIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <span className="text-brand-accent uppercase tracking-[0.3em] font-medium text-[10px] mb-4 block">Featured Projects</span>
            <h2 className="text-5xl md:text-6xl mb-8">Creative <br /> <span className="italic font-serif text-brand-gray/60">Journey</span></h2>
          </div>
          <div className="lg:col-span-8 lg:flex lg:items-end">
            <p className="text-brand-gray/50 max-w-xl text-lg border-l border-brand-white/10 pl-8 ml-auto">
              My work focuses on creating modern and impactful visual experiences. I have worked on a range of projects including branding, digital design, and creative campaigns, aiming to deliver clean and meaningful results.
            </p>
          </div>
        </div>

        <div className="divide-y divide-brand-white/10">
          {EXHIBITIONS.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group py-12 flex flex-col md:grid md:grid-cols-12 gap-6 items-center cursor-pointer hover:bg-brand-white/5 transition-colors px-6 -mx-6 rounded-2xl"
            >
              <div className="md:col-span-2 text-[10px] uppercase tracking-widest text-brand-white/40 font-bold">
                {item.date}
              </div>
              <div className="md:col-span-5 flex flex-col">
                <h3 className="text-3xl font-display font-medium group-hover:text-brand-accent transition-colors">
                  {item.name}
                </h3>
                <span className="text-brand-gray/40 text-xs italic font-serif mt-2">{item.type}</span>
              </div>
              <div className="md:col-span-3 text-brand-gray/60 text-sm">
                {item.location}
              </div>
              <div className="md:col-span-2 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-brand-white/10 flex items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
