import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Section from './ui/Section';
import { TESTIMONIALS, IMAGES } from '../constants';

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.testimonialsBg} 
          alt="Texture Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">מה הלקוחות אומרים?</h2>
          <p className="text-xl text-white/80">אנשים אמיתיים, תוצאות אמיתיות</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-tr-3xl rounded-bl-3xl p-8 shadow-2xl relative"
            >
              <Quote className="absolute top-6 left-6 text-primary/20" size={48} />
              
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 text-lg font-medium mb-6 relative z-10 leading-relaxed">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                  {t.author.charAt(0)}
                </div>
                <span className="font-bold text-dark">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;