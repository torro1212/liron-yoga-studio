import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { IMAGES } from '../constants';
import Button from './ui/Button';

const About = () => {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
            <img src={IMAGES.about} alt="Liron Yoga Founder" className="w-full h-auto object-cover" />
             {/* Gradient Overlay for aesthetic */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-[3rem] -z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-50"></div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-wider uppercase mb-2 block">הסיפור שלנו</span>
          <h2 className="text-4xl md:text-6xl font-black text-dark mb-6 leading-tight">
            יותר מסתם <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">סטודיו ליוגה</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              נעים להכיר, אני לירון. הסטודיו שלי בהרצליה נולד מתוך תשוקה אמיתית לחבר אנשים לגוף שלהם מחדש.
            </p>
            <p className="font-medium text-dark border-r-4 border-primary pr-4">
              "הפילוסופיה שלי פשוטה: גמישות היא לא רק יכולת פיזית, היא דרך חיים. כשאנחנו מגמישים את הגוף, אנחנו מגמישים את המחשבה."
            </p>
            <p>
              יצרתי מרחב בוטיק אינטימי שמאפשר לכל אחד, בכל רמה, למצוא את המקום שלו. בלי שיפוטיות, בלי תחרות - רק אתם והמזרן.
            </p>
          </div>

          <div className="mt-10">
            <Button variant="outline">גלה עוד עלינו</Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;