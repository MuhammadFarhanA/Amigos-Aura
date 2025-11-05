import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../StatCard';

interface Stat {
  stat: string;
  label: string;
}

interface StatGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const StatGrid: React.FC<StatGridProps> = ({ stats, columns = 4, className = '' }) => {
  const gridClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  };

  const animationVariants = [
    { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 } },
    { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
      viewport={{ once: true }}
      className={`grid ${gridClasses[columns]} gap-8 ${className}`}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={animationVariants[index % animationVariants.length].initial}
          whileInView={animationVariants[index % animationVariants.length].animate}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <StatCard number={stat.stat} label={stat.label} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatGrid;