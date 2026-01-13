import React from 'react';
import { Briefcase, Users, ClipboardCheck, Rocket, Search } from 'lucide-react';
import { servicesData } from '../../data/services';
import { consultingOutsourcingContent } from '../../data/consultingOutsourcingContent';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceCTA from '../../components/services/ServiceCTA';

const iconMap: Record<string, any> = {
  Briefcase,
  Users,
  ClipboardCheck,
  Rocket,
  Search,
};

const ConsultingOutsourcing = () => {
  const service = servicesData.find(s => s.slug === 'consulting-outsourcing')!;
  const content = consultingOutsourcingContent;

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <ServiceHero
          icon={service.icon}
          title={service.title}
          subtitle={content.subtitle}
          description={content.longDescription}
          imageUrl={service.imageUrl}
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
        </div>

        <div className="mt-16">
          <ServiceCTA />
        </div>
      </div>
    </div>
  );
};

export default ConsultingOutsourcing;
