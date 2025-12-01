import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

const steps = [
  {
    number: "01",
    title: "יוצרים קשר",
    description: "משאירים פרטים באתר או שולחים הודעת וואטסאפ לתיאום."
  },
  {
    number: "02",
    title: "בוחרים שיעור",
    description: "מתייעצים איתנו ובוחרים את השיעור שהכי מתאים לרמה שלכם."
  },
  {
    number: "03",
    title: "מגיעים לסטודיו",
    description: "מגיעים לסטודיו המעוצב שלנו בהרצליה, נושמים ומתחילים."
  },
  {
    number: "04",
    title: "מרגישים את ההבדל",
    description: "יוצאים מהשיעור עם אנרגיה חדשה, גוף משוחרר וחיוך."
  }
];

const Process = () => {
  return (
    <Section className="bg-gradient-to-b from-white to-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-dark">איך זה עובד?</h2>
        <p className="text-lg text-gray-500 mt-2">הדרך שלכם לגוף בריא יותר מתחילה כאן</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Hidden on mobile) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300 -z-0"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative z-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group"
          >
            <div className="w-24 h-24 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-3xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              {step.number}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Process;