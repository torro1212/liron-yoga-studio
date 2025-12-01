import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children, noPadding = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section 
      id={id} 
      className={`relative w-full overflow-hidden ${noPadding ? '' : 'py-24 md:py-32'} ${className}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;