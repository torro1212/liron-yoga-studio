import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Activity, User, ArrowLeft } from 'lucide-react';
import Section from './ui/Section';
import { SERVICES } from '../constants';

const icons = {
  wind: Wind,
  activity: Activity,
  user: User
};

const Services = () => {
  return (
    <Section id="services" className="bg-surface">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-dark mb-4">השירותים שלנו</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          כל השיעורים מועברים בקבוצות קטנות עם יחס אישי ומדויק
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-20"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-xl p-3 text-primary shadow-lg">
                  <Icon size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" onClick={() => window.location.href = '#contact'}>
                  קרא עוד <ArrowLeft size={18} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;