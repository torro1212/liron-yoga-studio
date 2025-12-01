import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import Button from './ui/Button';
import { IMAGES, CONTACT } from '../constants';

const Hero = () => {
  return (
    <section className="relative w-full h-[110vh] overflow-hidden flex items-center justify-center">
      {/* Background with Parallax effect simulation via fixed position */}
      <div className="absolute inset-0 z-0">
         <img 
            src={IMAGES.hero} 
            alt="Liron Yoga Studio Hero" 
            className="w-full h-full object-cover"
         />
         {/* Mandatory Overlay for Readability - Updated to 20% */}
         <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Social Proof Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 flex items-center gap-2"
        >
          <div className="flex text-yellow-400">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <span className="text-white font-medium text-sm">5.0 דירוג בגוגל</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] text-shadow-hero"
        >
          למצוא את <span className="underline decoration-primary decoration-4 underline-offset-8">השקט</span><br/>
          בתוך התנועה
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl text-zinc-200 max-w-2xl mb-10 font-light text-shadow-hero"
        >
          Deep flexibility training combined with Vinyasa flow in a personal, aesthetic boutique setting.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <Button 
            variant="primary" 
            onClick={() => window.location.href = CONTACT.whatsapp}
            icon={<ArrowLeft size={20} />}
          >
            שריין מקום עכשיו
          </Button>
          <Button 
            variant="glass"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            הסיפור שלנו
          </Button>
        </motion.div>

        {/* Floating Abstract Elements */}
        <div className="absolute top-1/4 right-[10%] w-24 h-24 rounded-full bg-primary/20 blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-[10%] w-32 h-32 rounded-full bg-blue-400/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;