import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

interface CaseStudyCardProps {
  logo: string;
  title: string;
  outcome: string;
  metrics: string;
  href?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ logo, title, outcome, metrics, href }) => {
  return (
    <Card cornerBorder={true}>
      <div className="h-12 mb-6 flex items-center">
        <div className="bg-gradient-to-r from-aa-blue-light to-aa-cyan rounded-lg px-4 py-2">
          <span className="text-sm font-semibold text-white">{logo}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-aa-primary-dark mb-3">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{outcome}</p>
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6 border-l-4 border-aa-cyan">
        <p className="text-sm font-semibold text-aa-primary-dark">{metrics}</p>
      </div>
      {href && (
        <motion.a
          href={href}
          whileHover={{ x: 5 }}
          className="text-aa-blue-primary hover:text-aa-blue-bright font-semibold text-sm transition-colors duration-200 hover:underline inline-flex items-center gap-2"
        >
          Read Case Study →
        </motion.a>
      )}
    </Card>
  );
};

export default CaseStudyCard;