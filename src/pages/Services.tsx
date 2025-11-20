import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/templates/PageLayout';
import ServiceGrid from '../components/organisms/ServiceGrid';
import Card from '../components/Card';
import Button from '../components/atoms/Button';
import { servicesData } from '../data/services';

const Services = () => {
  return (
    <PageLayout
      title="Our Services"
      subtitle="Comprehensive technology services to help you build, deploy, and scale world-class digital products. From concept to production, we've got you covered."
    >
      {/* Services Grid */}
      <ServiceGrid services={servicesData} className="mb-20" />

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-12">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-aa-primary-dark mb-6"
          >
            Need something specific?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Every project is unique. Let's discuss your specific requirements and create a custom solution that fits your needs perfectly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            
          >
            <Button className='mx-auto'>Schedule a Consultation</Button>
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Services;