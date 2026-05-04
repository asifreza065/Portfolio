/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Send, Mail, MapPin, ArrowRight, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-brand-white text-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col justify-between py-8">
            <div>
              <h2 className="text-7xl md:text-9xl mb-12 flex flex-col tracking-tighter">
                <span>LET'S</span>
                <span className="text-outline italic font-serif">CREATE</span>
              </h2>
              <p className="text-xl text-brand-black/60 max-w-sm mb-12">
                Have a vision that needs clarity? We'd love to hear from you. Let's make something exceptional together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-black/5 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-lg font-medium">asifreza065@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-black/5 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-lg font-medium">+8801410562640</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-black/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-lg font-medium">Khulna, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-black p-8 md:p-16 rounded-[3rem] text-brand-white">
            <form className="space-y-12">
              <div className="space-y-2 relative group">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-white/40 block">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Alexander McQueen"
                  className="w-full bg-transparent border-b border-brand-white/10 py-4 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-white/20 text-xl"
                />
              </div>

              <div className="space-y-2 relative group">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-white/40 block">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@world.com"
                  className="w-full bg-transparent border-b border-brand-white/10 py-4 focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-white/20 text-xl"
                />
              </div>

              <div className="space-y-2 relative group">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-white/40 block">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-brand-white/10 py-4 focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:text-brand-white/20 text-xl"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-brand-accent text-brand-black rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
