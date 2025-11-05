import React from 'react';
import { motion } from 'framer-motion';
import InsightCard from '../InsightCard';

interface Insight {
  category: string;
  title: string;
  excerpt: string;
  readTime?: string;
  href?: string;
}

interface InsightGridProps {
  insights: Insight[];
  className?: string;
}

const InsightGrid: React.FC<InsightGridProps> = ({ insights, className = '' }) => {
  const animationVariants = [
    { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
    { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, rotate: -5 }, animate: { opacity: 1, rotate: 0 } },
    { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
    { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-3 gap-8 ${className}`}
    >
      {insights.map((insight, index) => (
        <motion.div
          key={index}
          initial={animationVariants[index % animationVariants.length].initial}
          whileInView={animationVariants[index % animationVariants.length].animate}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <InsightCard
            category={insight.category}
            title={insight.title}
            excerpt={insight.excerpt}
            readTime={insight.readTime}
            href={insight.href}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InsightGrid;