import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, MapPin, Mail } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { IMAGES, CONTACT } from '../constants';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 min-h-[800px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.ctaBg} 
          alt="Yoga Studio Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl"
          >
            {formState === 'success' ? (
              <div className="text-center py-20 text-white">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={40} className="text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">תודה רבה!</h3>
                <p className="text-xl opacity-90">קיבלנו את הפרטים, נחזור אליך בהקדם.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-4xl font-black text-white mb-2 text-shadow-hero">מוכנים להתחיל?</h2>
                  <p className="text-zinc-200 mb-8">השאירו פרטים ונחזור אליכם לתיאום שיעור ניסיון</p>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="שם מלא"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:outline-none focus:border-primary transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="טלפון"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:outline-none focus:border-primary transition-all"
                  />
                  <textarea
                    placeholder="הודעה (אופציונלי)"
                    rows={4}
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/60 focus:bg-white/20 focus:outline-none focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                <Button 
                  variant="primary" 
                  className="w-full text-lg" 
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? 'שולח...' : 'דבר איתי!'}
                  {formState !== 'submitting' && <Send size={20} />}
                </Button>
                
                <p className="text-center text-white/50 text-sm">
                  * אנחנו מכבדים את הפרטיות שלך ולא שולחים ספאם.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col justify-center text-white space-y-8"
          >
             <h2 className="text-4xl font-black leading-tight text