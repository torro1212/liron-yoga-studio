import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Section from './ui/Section';
import { FAQS } from '../constants';
import { FAQItem as FAQItemType } from '../types';

interface FAQItemProps {
  item: FAQItemType;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      className={`border-b border-gray-200 ${isOpen ? 'bg-surface/50' : ''}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-right gap-4 focus:outline-none"
      >
        <span className={`text-lg md:text-xl font-bold ${isOpen ? 'text-primary' : 'text-dark'}`}>
          {item.question}
        </span>
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-dark mb-4">שאלות נפוצות</h2>
          <p className="text-gray-500">כל מה שרציתם לדעת ולא העזתם לשאול</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;