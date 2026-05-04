/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Twitter, Dribbble, Github, Facebook } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-black text-brand-white pt-32 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-32">
          <h2 className="text-[20vw] font-display font-black leading-none uppercase tracking-tighter opacity-5 select-none pointer-events-none absolute left-0 w-full text-center">
            ASIF REZA
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
            <div className="max-w-xl">
              <span className="text-brand-accent uppercase tracking-[0.3em] font-medium text-[10px] mb-8 block">Ready for the next step?</span>
              <p className="text-brand-gray/60 italic text-lg mb-8 max-w-md">"Design is not just what it looks like, it’s how it works. I believe in creating experiences that connect and inspire."</p>
              <a 
                href="mailto:asifreza065@gmail.com" 
                className="text-4xl md:text-7xl font-display font-black hover:text-brand-accent transition-colors break-words"
              >
                Let's make <br /> magic happen<span className="text-brand-accent">.</span>
              </a>
            </div>
            
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/share/1CQqokyzjm/" },
                { Icon: Instagram, url: "https://www.instagram.com/dewanmdasifraza?utm_source=qr&igsh=MTBiaXJ6djV3ZWZiYw==" },
                { Icon: Twitter, url: "#" },
                { Icon: Dribbble, url: "#" },
                { Icon: Github, url: "#" }
              ].map(({ Icon, url }, idx) => (
                <a 
                  key={idx} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 border border-brand-white/10 rounded-full flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all duration-500"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-3xl font-display font-black tracking-tighter">ASIF.</span>
            <span className="text-[10px] uppercase tracking-widest text-brand-white/30">Independent Creative Designer</span>
          </div>

          <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold text-brand-white/50">
            <a href="#" className="hover:text-brand-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-white transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-white transition-colors">Cookies</a>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-brand-white/30 font-medium">
            © {currentYear} Asif Reza. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
