import React from 'react';
import { motion } from 'framer-motion';
import { Video as LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  animate?: boolean;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  color = 'text-current',
  className = '',
  animate = false,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
  };

  const iconElement = (
    <IconComponent className={`${sizeClasses[size]} ${color} ${className}`} />
  );

  if (animate) {
    return (
      <motion.div
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {iconElement}
      </motion.div>
    );
  }

  return iconElement;
};

export default Icon;