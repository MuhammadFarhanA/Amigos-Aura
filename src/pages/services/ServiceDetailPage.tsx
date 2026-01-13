import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageLayout from '../../components/templates/PageLayout';
import Button from '../../components/atoms/Button';
import Card from '../../components/Card';

interface ServiceDetailProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  features: string[];
  useCases: string[];
}

const ServiceDetailPage: React.FC<ServiceDetailProps> = ({
  icon: Icon,
  title,
  description,
  longDescription,
  benefits,
  features,
  useCases,
}) => {
  return (
    <PageLayout title={title} subtitle={description}>
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="w-24 h-24 bg-gradient-subtle rounded-2xl flex items-center justify-center">
            <Icon className="w-12 h-12 text-aa-blue-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">{longDescription}</p>
            </div>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-aa-primary-dark mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-aa-blue-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold text-aa-primary-dark mb-6">Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-aa-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <h3 className="text-2xl font-bold text-aa-primary-dark mb-6">Use Cases</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg"
                >
                  <p className="text-gray-700 font-medium">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-aa-primary-dark to-aa-blue-primary rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how {title.toLowerCase()} can transform your business and help you achieve your goals.
            </p>
              <a href="/contact">
                <Button className='mx-auto' variant="outline" size="lg">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ServiceDetailPage;
