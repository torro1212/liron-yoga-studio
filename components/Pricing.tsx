import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Section from './ui/Section';
import { PACKAGES } from '../constants';
import Button from './ui/Button';

const Pricing = () => {
  return (
    <Section id="pricing" className="bg-surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">בחר את המסלול שלך</h2>
        <p className="text-xl text-gray-500">שקיפות מלאה, בלי הפתעות</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PACKAGES.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-3xl p-8 flex flex-col ${
              pkg.isRecommended 
                ? 'bg-white shadow-2xl border-2 border-primary scale-105 z-10' 
                : 'bg-white/50 border border-gray-200 shadow-lg'
            }`}
          >
            {pkg.isRecommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-emerald-500 text-white px-6 py-1 rounded-full font-bold text-sm shadow-lg flex items-center gap-1">
                <Star size={12} fill="currentColor" /> הכי פופולרי
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-sm h-10">{pkg.description}</p>
            </div>

            <div className="mb-8">
              {pkg.price ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-dark">{pkg.price}</span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-dark">צור קשר</span>
              )}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <div className="bg-green-100 p-1 rounded-full text-primary">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={pkg.isRecommended ? 'primary' : 'outline'} 
              className="w-full"
              onClick={() => window.location.href = '#contact'}
            >
              אני רוצה את זה
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;