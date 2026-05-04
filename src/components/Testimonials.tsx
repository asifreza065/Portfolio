/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-32 bg-brand-accent text-brand-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-10">
        <Quote className="w-96 h-96 -rotate-12" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-16"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight mb-8 leading-tight">
                Let’s Create Something <span className="italic font-serif opacity-60">Meaningful.</span>
              </h2>
              <div className="space-y-12">
                <p className="text-2xl md:text-4xl font-medium tracking-tight leading-loose max-w-3xl border-l-4 border-brand-black/20 pl-8 italic">
                  "Design is not just what it looks like, it’s how it works. I believe in creating experiences that connect and inspire."
                </p>
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl font-medium tracking-tight leading-relaxed max-w-2xl opacity-80">
                    Available for Freelance Work.
                  </p>
                  <p className="text-lg md:text-xl font-medium tracking-tight leading-relaxed max-w-2xl opacity-60">
                    Let’s work together to bring your ideas to life.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
