import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

interface InsightCardProps {
  category: string;
  title: string;
  excerpt: string;
  readTime?: string;
  href?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ category, title, excerpt, readTime, href }) => {
  return (
    <Card cornerBorder={true}>
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-gradient-to-r from-aa-cyan-light to-aa-blue-light bg-opacity-20 text-aa-blue-primary text-xs font-semibold px-3 py-1 rounded-lg">
          {category}
        </span>
        {readTime && (
          <span className="text-xs text-gray-600">{readTime}</span>
        )}
      </div>
      <h3 className="text-lg font-bold text-aa-primary-dark mb-3 line-clamp-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
      {href && (
        <motion.a
          href={href}
          whileHover={{ x: 5 }}
          className="text-aa-blue-primary hover:text-aa-blue-bright font-semibold text-sm transition-colors duration-200 hover:underline inline-flex items-center gap-2"
        >
          Read More →
        </motion.a>
      )}
    </Card>
  );
};

export default InsightCard;