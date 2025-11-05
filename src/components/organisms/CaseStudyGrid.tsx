import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from '../CaseStudyCard';

interface CaseStudy {
  logo: string;
  title: string;
  outcome: string;
  metrics: string;
  href?: string;
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  className?: string;
}

const CaseStudyGrid: React.FC<CaseStudyGridProps> = ({ caseStudies, className = '' }) => {
  const animationVariants = [
    { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
    { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    { initial: { opacity: 0, rotate: 5 }, animate: { opacity: 1, rotate: 0 } },
    { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-8 ${className}`}
    >
      {caseStudies.map((study, index) => (
        <motion.div
          key={index}
          initial={animationVariants[index % animationVariants.length].initial}
          whileInView={animationVariants[index % animationVariants.length].animate}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <CaseStudyCard
            logo={study.logo}
            title={study.title}
            outcome={study.outcome}
            metrics={study.metrics}
            href={study.href}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CaseStudyGrid;