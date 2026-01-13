import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  imageUrl,
}) => {
  return (
    <div className="space-y-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center"
      >
        {imageUrl ? (
          <div className="relative w-full max-w-4xl h-80 rounded-3xl overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-6">
                {title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="w-24 h-24 bg-gradient-subtle rounded-2xl flex items-center justify-center">
            <Icon className="w-12 h-12 text-aa-blue-primary" />
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-4xl mx-auto"
      >
        {!imageUrl && (
          <h1 className="text-4xl md:text-5xl font-bold text-aa-primary-dark mb-6">
            {title}
          </h1>
        )}
        <p className="text-xl text-gray-600 mb-4">{subtitle}</p>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export default ServiceHero;
