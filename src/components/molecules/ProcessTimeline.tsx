import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  step: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps, className = '' }) => {
  return (
    <div className={`grid lg:grid-cols-6 gap-8 ${className}`}>
      {steps.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative mb-8">
            <div className="w-16 h-16 gradient-subtle rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-lg">{index + 1}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-200 -z-10"></div>
            )}
          </div>
          <h3 className="text-xl font-bold text-aa-primary-dark mb-3">{item.step}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProcessTimeline;