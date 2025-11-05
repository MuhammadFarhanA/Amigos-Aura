import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ServiceCard';

interface Service {
  icon: any;
  title: string;
  description: string;
  href?: string;
}

interface ServiceGridProps {
  services: Service[];
  className?: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, className = '' }) => {
  const animationVariants = [
    { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
    { initial: { opacity: 0, rotate: -10 }, animate: { opacity: 1, rotate: 0 } },
    { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
      className={`grid lg:grid-cols-3 gap-8 ${className}`}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={animationVariants[index % animationVariants.length].initial}
          whileInView={animationVariants[index % animationVariants.length].animate}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ServiceCard
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.href}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceGrid;