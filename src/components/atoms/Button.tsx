import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3';
  
  const variantClasses = {
    primary: 'bg-aa-blue-primary hover:bg-aa-blue-bright text-white hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-aa-cyan hover:border-aa-cyan-light text-aa-cyan hover:text-aa-cyan-light hover:-translate-y-0.5',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-aa-blue-primary hover:-translate-y-0.5',
  };
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3',
    lg: 'px-10 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} rounded-lg ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;