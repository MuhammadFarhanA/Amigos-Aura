import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Card from '../Card';

interface ServiceSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
  delay?: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  icon: Icon,
  title,
  description,
  items,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card>
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-subtle rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-aa-blue-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-aa-primary-dark mb-2">{title}</h3>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
        {items && items.length > 0 && (
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-aa-blue-primary flex-shrink-0 mt-2" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </motion.div>
  );
};

export default ServiceSection;
