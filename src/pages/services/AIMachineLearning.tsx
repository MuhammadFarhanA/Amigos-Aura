import React from 'react';
import ServiceDetailPage from './ServiceDetailPage';
import { servicesData } from '../../data/services';
import { serviceDetails } from '../../data/serviceDetails';

const AIMachineLearning = () => {
  const service = servicesData.find(s => s.slug === 'ai-machine-learning')!;
  const details = serviceDetails['ai-machine-learning'];

  return (
    <ServiceDetailPage
      icon={service.icon}
      title={service.title}
      description={service.description}
      longDescription={details.longDescription}
      benefits={details.benefits}
      features={details.features}
      useCases={details.useCases}
    />
  );
};

export default AIMachineLearning;
