import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  cornerBorder?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, cornerBorder = false }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-white rounded-lg p-8 card-shadow transition-all duration-300 relative overflow-hidden h-full ${
        hover ? 'hover:card-shadow-hover' : ''
      } ${cornerBorder ? 'group' : ''} ${className}`}
    >
      {cornerBorder && (
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-aa-blue-primary border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;