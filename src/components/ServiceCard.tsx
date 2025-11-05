import React from 'react';
import { motion } from 'framer-motion';
import { Video as LucideIcon } from 'lucide-react';
import Card from './Card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, href }) => {
  return (
    <Card cornerBorder={true}>
      <div className="text-center h-full flex flex-col">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-20 h-20 bg-gradient-subtle rounded-lg flex items-center justify-center mx-auto mb-6"
        >
          <Icon className="w-10 h-10 text-aa-blue-primary" />
        </motion.div>
        <h3 className="text-xl font-bold text-aa-primary-dark mb-4">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        {href && (
          <motion.a
            href={href}
            whileHover={{ x: 5 }}
            className="text-aa-blue-primary hover:text-aa-blue-bright font-semibold text-sm transition-colors duration-200 hover:underline inline-flex items-center gap-2 justify-center"
          >
            Learn More →
          </motion.a>
        )}
      </div>
    </Card>
  );
};

export default ServiceCard;