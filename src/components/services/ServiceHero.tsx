import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="space-y-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center"
      >
        <div className="w-24 h-24 bg-gradient-subtle rounded-2xl flex items-center justify-center">
          <Icon className="w-12 h-12 text-aa-blue-primary" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-aa-primary-dark mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export default ServiceHero;
