import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../atoms/Button';

interface ServiceCTAProps {
  title?: string;
  description?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({
  title = 'Ready to get started?',
  description = "Let's discuss how our services can transform your business and help you achieve your goals.",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-gradient-to-br from-aa-primary-dark to-aa-blue-primary rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <a href="/contact">
          <Button variant="outline" size="lg" className='mx-auto'>
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCTA;
