/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden"
            >
              <img 
                src="https://i.ibb.co.com/C5dpsgs7/file-000000005fd471fab291aed94c9b2643.png" 
                alt="Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </motion.div>
            
            {/* Abstract Decorative Shape */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border border-brand-accent/20 rounded-full flex items-center justify-center pointer-events-none"
            >
              <div className="w-1/2 h-full border-r border-brand-accent/20" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-accent uppercase tracking-[0.3em] font-medium text-[10px] mb-4 block">Our Philosophy</span>
              <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
                Design that <span className="italic font-serif text-brand-gray/60">Speaks.</span>
              </h2>
              <p className="text-xl text-brand-gray/70 leading-relaxed max-w-xl mb-8">
                I am a creative designer based in Bangladesh, focused on building clean and impactful visual experiences. I believe simplicity is the key to powerful design. Every detail matters, and every design should tell a meaningful story. My work combines creativity with strategy to deliver results that connect with people.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Graphic Design', 'UI/UX Design', 'Branding & Identity', 'Motion Graphics', 'Digital Strategy'].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-brand-accent group-hover:scale-150 transition-transform" />
                    <span className="text-2xl font-display font-medium text-brand-white/80 group-hover:text-brand-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>

              <p className="text-base text-brand-gray/60 italic font-medium">
                I am always open to new opportunities and creative collaborations.
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 self-start px-10 py-4 bg-brand-white text-brand-black font-medium uppercase tracking-widest text-xs rounded-full hover:bg-brand-accent transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
