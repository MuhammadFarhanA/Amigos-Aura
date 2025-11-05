import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import Card from '../Card';

interface WhyChooseSectionProps {
  items: string[];
  delay?: number;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ items, delay = 0 }) => {
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
            <Star className="w-6 h-6 text-aa-blue-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-aa-primary-dark mb-2">Why Choose Amigos Aura</h3>
          </div>
        </div>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-aa-blue-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
};

export default WhyChooseSection;
