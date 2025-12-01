import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 relative overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg hover:shadow-primary/40 hover:scale-105 hover:-translate-y-1 animate-breathing-glow",
    secondary: "bg-secondary text-primary hover:bg-secondary/80 hover:scale-105",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
  };

  return (
    <motion.button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      {icon && <span className="text-xl">{icon}</span>}
    </motion.button>
  );
};

export default Button;