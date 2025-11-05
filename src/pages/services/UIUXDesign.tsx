import React from 'react';
import { Target, Layout, Palette, Layers, Users } from 'lucide-react';
import { servicesData } from '../../data/services';
import { uiuxDesignContent } from '../../data/uiuxDesignContent';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceCTA from '../../components/services/ServiceCTA';

const iconMap: Record<string, any> = {
  Target,
  Layout,
  Palette,
  Layers,
  Users,
};

const UIUXDesign = () => {
  const service = servicesData.find(s => s.slug === 'ui-ux-design')!;
  const content = uiuxDesignContent;

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <ServiceHero
          icon={service.icon}
          title={service.title}
          subtitle={content.subtitle}
          description={content.longDescription}
        />

        <div className="space-y-8">
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

export default UIUXDesign;
