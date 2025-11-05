import React from 'react';
import { Shield, Lock, Cloud, CreditCard, ShieldCheck } from 'lucide-react';
import { servicesData } from '../../data/services';
import { cybersecurityContent } from '../../data/cybersecurityContent';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceSection from '../../components/services/ServiceSection';
import WhyChooseSection from '../../components/services/WhyChooseSection';
import ServiceCTA from '../../components/services/ServiceCTA';

const iconMap: Record<string, any> = {
  Shield,
  Lock,
  CloudLock: Cloud,
  CreditCard,
  ShieldCheck,
};

const CybersecurityCompliance = () => {
  const service = servicesData.find(s => s.slug === 'cybersecurity-compliance')!;
  const content = cybersecurityContent;

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <ServiceHero
          icon={service.icon}
          title={service.title}
          subtitle={content.subtitle}
          description={content.longDescription}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.sections.map((section, index) => {
            const Icon = iconMap[section.icon];
            return (
              <ServiceSection
                key={index}
                icon={Icon}
                title={section.title}
                description={section.description}
                delay={index * 0.1}
              />
            );
          })}

          <WhyChooseSection items={content.whyChoose} delay={content.sections.length * 0.1} />
        </div>

        <div className="mt-16">
          <ServiceCTA
            title={content.ctaTitle}
            description={content.ctaDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default CybersecurityCompliance;
