export const serviceDetails: Record<string, {
  longDescription: string;
  benefits: string[];
  features: string[];
  useCases: string[];
}> = {
  'core-software-development': {
    longDescription: 'Our core software development services deliver end-to-end custom solutions that power your business. From full-stack web applications to native mobile apps, we leverage modern frameworks and best practices to build scalable, maintainable, and high-performance software. Our expert developers work closely with your team to understand requirements and deliver solutions that exceed expectations.',
    benefits: [
      'Accelerate time-to-market with agile development practices',
      'Reduce technical debt with clean, maintainable code',
      'Scale applications effortlessly with modern architecture',
      'Ensure cross-platform compatibility and responsiveness',
      'Lower long-term maintenance costs',
      'Gain competitive advantage with custom features'
    ],
    features: [
      'Full-stack web development (React, Vue, Angular, Node.js)',
      'Native and cross-platform mobile apps (iOS, Android, React Native)',
      'RESTful and GraphQL API development',
      'Microservices architecture',
      'Progressive Web Applications (PWA)',
      'Real-time features with WebSockets',
      'Automated testing and quality assurance',
      'Code reviews and technical documentation'
    ],
    useCases: [
      'Custom business applications and SaaS platforms',
      'Enterprise web portals and intranets',
      'Customer-facing mobile applications',
      'B2B software solutions',
      'E-learning and collaboration platforms',
      'Workflow automation tools'
    ]
  },
  'digital-transformation': {
    longDescription: 'Transform your enterprise with comprehensive digital transformation strategies that modernize legacy systems, streamline operations, and unlock new business opportunities. We help organizations navigate the complexity of digital change, from system integration to complete platform modernization, ensuring minimal disruption while maximizing value.',
    benefits: [
      'Modernize legacy systems without business disruption',
      'Improve operational efficiency and reduce costs',
      'Enable new digital business models and revenue streams',
      'Enhance employee productivity with modern tools',
      'Improve customer experience across all touchpoints',
      'Future-proof your technology infrastructure'
    ],
    features: [
      'Legacy system modernization and re-platforming',
      'Enterprise application integration (EAI)',
      'API-first architecture design',
      'Business process automation',
      'Digital workflow optimization',
      'Change management and training',
      'Cloud migration strategies',
      'Microservices transformation'
    ],
    useCases: [
      'Mainframe to cloud migration',
      'ERP system modernization',
      'Digital workplace transformation',
      'Customer portal development',
      'Supply chain digitalization',
      'Document management system overhaul'
    ]
  },
  'b2b-marketing-commerce': {
    longDescription: 'Elevate your B2B sales and marketing with powerful commerce platforms and automation tools designed for complex business workflows. From sophisticated B2B eCommerce solutions to marketing automation and CRM systems, we build integrated platforms that drive pipeline growth, improve conversion rates, and enhance customer relationships.',
    benefits: [
      'Increase sales with self-service B2B portals',
      'Automate lead nurturing and qualification',
      'Improve sales team efficiency with CRM integration',
      'Gain visibility into marketing ROI and attribution',
      'Personalize buyer journeys at scale',
      'Reduce manual order processing and errors'
    ],
    features: [
      'B2B eCommerce platforms with custom pricing',
      'Marketing automation and email campaigns',
      'CRM development and integration (Salesforce, HubSpot)',
      'Lead scoring and qualification systems',
      'Account-based marketing (ABM) tools',
      'Customer self-service portals',
      'Quote and proposal generation',
      'Multi-channel marketing orchestration'
    ],
    useCases: [
      'Wholesale and distribution portals',
      'Manufacturing sales platforms',
      'Professional services lead generation',
      'Partner relationship management (PRM)',
      'Channel sales enablement',
      'B2B marketplace development'
    ]
  },
  'cybersecurity-compliance': {
    longDescription: 'Protect your organization with comprehensive cybersecurity solutions and compliance frameworks that safeguard critical assets, ensure regulatory adherence, and build customer trust. Our security experts provide end-to-end protection from assessment and strategy to implementation and ongoing monitoring.',
    benefits: [
      'Prevent costly data breaches and security incidents',
      'Ensure compliance with industry regulations',
      'Protect intellectual property and sensitive data',
      'Maintain customer trust and brand reputation',
      'Reduce risk of ransomware and cyberattacks',
      'Meet insurance and contractual security requirements'
    ],
    features: [
      'Security assessments and penetration testing',
      'SOC 2, ISO 27001, HIPAA, GDPR compliance',
      'Security Operations Center (SOC) setup',
      'Identity and access management (IAM)',
      'Network security and firewall configuration',
      'Endpoint detection and response (EDR)',
      'Security awareness training programs',
      'Incident response planning and execution'
    ],
    useCases: [
      'Enterprise security posture assessment',
      'Compliance audit preparation and certification',
      'Cloud security architecture design',
      'Application security testing',
      'Security for healthcare and financial services',
      'Zero trust network implementation'
    ]
  },
  'ui-ux-design': {
    longDescription: 'Create exceptional user experiences with our comprehensive UI/UX design services. From user research and prototyping to complete design system development, we craft intuitive, accessible, and beautiful interfaces that drive engagement, satisfaction, and business results. Our user-centered approach ensures products that people love to use.',
    benefits: [
      'Increase user engagement and satisfaction',
      'Improve conversion rates and business metrics',
      'Reduce development costs with clear specifications',
      'Build consistent brand experiences',
      'Decrease user support requests',
      'Accelerate product development cycles'
    ],
    features: [
      'User research and persona development',
      'Information architecture and user flows',
      'Wireframing and interactive prototyping',
      'Visual design and brand identity',
      'Design system development',
      'Usability testing and optimization',
      'Accessibility compliance (WCAG)',
      'Responsive and mobile-first design'
    ],
    useCases: [
      'SaaS product design and optimization',
      'Enterprise application redesign',
      'Mobile app user experience',
      'eCommerce platform design',
      'Design system creation for large organizations',
      'Dashboard and data visualization design'
    ]
  },
  'cloud-devops': {
    longDescription: 'Accelerate delivery and improve reliability with modern cloud infrastructure and DevOps practices. We help organizations migrate to the cloud, build scalable infrastructure, and implement automation that reduces manual work, speeds up deployments, and improves system reliability. Our expertise spans AWS, Azure, and Google Cloud Platform.',
    benefits: [
      'Reduce infrastructure costs with cloud optimization',
      'Improve deployment frequency and reliability',
      'Scale automatically based on demand',
      'Minimize downtime with redundancy and failover',
      'Accelerate development with CI/CD automation',
      'Enhance security with cloud-native tools'
    ],
    features: [
      'Cloud migration and modernization (AWS, Azure, GCP)',
      'Infrastructure as code (Terraform, CloudFormation)',
      'Container orchestration with Kubernetes',
      'CI/CD pipeline development (Jenkins, GitLab, GitHub Actions)',
      'Monitoring and observability (Prometheus, Grafana)',
      'Site reliability engineering (SRE)',
      'Serverless architecture implementation',
      'Multi-cloud and hybrid cloud strategies'
    ],
    useCases: [
      'On-premises to cloud migration',
      'Microservices deployment and management',
      'Disaster recovery and high availability',
      'Development environment automation',
      'Cloud cost optimization',
      'Global content delivery networks'
    ]
  },
  'data-analytics': {
    longDescription: 'Transform raw data into strategic insights with our comprehensive data and analytics services. We build robust data infrastructure, create powerful visualizations, and implement advanced analytics that help you understand your business, predict outcomes, and make data-driven decisions with confidence.',
    benefits: [
      'Make informed decisions with accurate data insights',
      'Identify trends and opportunities early',
      'Improve operational efficiency through analytics',
      'Predict customer behavior and market changes',
      'Optimize pricing, inventory, and resources',
      'Measure and improve business performance'
    ],
    features: [
      'Data warehouse and data lake design',
      'ETL/ELT pipeline development',
      'Business intelligence dashboards (Tableau, Power BI)',
      'Real-time analytics and streaming data',
      'Predictive analytics and forecasting',
      'Customer segmentation and behavior analysis',
      'Data governance and quality management',
      'Self-service analytics platforms'
    ],
    useCases: [
      'Enterprise data warehouse implementation',
      'Customer analytics and segmentation',
      'Sales and marketing performance dashboards',
      'Supply chain optimization',
      'Financial reporting and analysis',
      'Product usage analytics'
    ]
  },
  'ai-machine-learning': {
    longDescription: 'Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and create intelligent experiences. From natural language processing to computer vision, we develop and deploy AI solutions that solve real business problems and create competitive advantages.',
    benefits: [
      'Automate repetitive tasks and processes',
      'Gain insights from unstructured data',
      'Improve accuracy and reduce human error',
      'Personalize customer experiences at scale',
      'Predict outcomes and optimize strategies',
      'Unlock new product capabilities'
    ],
    features: [
      'Machine learning model development and training',
      'Natural language processing (NLP) and chatbots',
      'Computer vision and image recognition',
      'Recommendation engines',
      'Predictive maintenance systems',
      'Fraud detection and anomaly detection',
      'AI model deployment and MLOps',
      'Large language model (LLM) integration'
    ],
    useCases: [
      'Intelligent chatbots and virtual assistants',
      'Document processing and automation',
      'Demand forecasting and inventory optimization',
      'Customer churn prediction',
      'Quality control with computer vision',
      'Personalized product recommendations'
    ]
  },
  'consulting-outsourcing': {
    longDescription: 'Extend your technical capabilities with our consulting and outsourcing services. Whether you need strategic IT guidance, dedicated development teams, or specific technical expertise, we provide flexible engagement models that help you scale efficiently, access specialized skills, and deliver projects successfully.',
    benefits: [
      'Access specialized expertise without hiring overhead',
      'Scale development capacity up or down flexibly',
      'Reduce project timelines with dedicated teams',
      'Focus on core business while we handle technology',
      'Benefit from proven best practices and methodologies',
      'Reduce operational costs compared to in-house teams'
    ],
    features: [
      'IT strategy and technology consulting',
      'Staff augmentation and team extension',
      'Dedicated development teams',
      'Technical project management',
      'Architecture and design consulting',
      'Code quality and security audits',
      'Technology selection and evaluation',
      'Agile coaching and transformation'
    ],
    useCases: [
      'Short-term specialized skill requirements',
      'Long-term dedicated development teams',
      'Digital transformation strategy',
      'Technology stack evaluation',
      'Project rescue and turnaround',
      'Offshore development center setup'
    ]
  },
  'white-label-partnership': {
    longDescription: 'Expand your service offerings and accelerate go-to-market with our white-label solutions and strategic partnership programs. We provide proven, production-ready software that you can brand as your own, along with comprehensive technical support and partnership opportunities that drive mutual growth.',
    benefits: [
      'Launch new products without development investment',
      'Generate recurring revenue streams quickly',
      'Maintain your brand identity throughout',
      'Reduce time to market by months or years',
      'Focus on sales and customer relationships',
      'Access ongoing updates and improvements'
    ],
    features: [
      'Fully customizable white-label software',
      'Multi-tenant SaaS architecture',
      'Custom branding and styling',
      'Reseller and partner programs',
      'Revenue sharing models',
      'Technical support and documentation',
      'Sales and marketing collateral',
      'Ongoing product updates included'
    ],
    useCases: [
      'Agencies expanding service portfolios',
      'Technology resellers and VARs',
      'Consultancies offering managed solutions',
      'Enterprises creating internal product lines',
      'Franchises providing branded technology',
      'MSPs adding software offerings'
    ]
  },
  'additional-b2b-services': {
    longDescription: 'Ensure long-term success with our comprehensive suite of supporting B2B services. From rigorous quality assurance to detailed technical documentation and training programs, we provide the essential services that keep your technology investments performing optimally and your teams operating effectively.',
    benefits: [
      'Reduce bugs and improve software quality',
      'Accelerate team onboarding and productivity',
      'Maintain comprehensive system documentation',
      'Ensure ongoing support and maintenance',
      'Optimize system performance and reliability',
      'Transfer knowledge effectively to internal teams'
    ],
    features: [
      'Quality assurance and testing services',
      'Technical writing and documentation',
      'User training and enablement programs',
      'Ongoing maintenance and support',
      'Performance optimization and tuning',
      'System monitoring and health checks',
      'Knowledge transfer and workshops',
      'Service level agreements (SLAs)'
    ],
    useCases: [
      'Post-launch application support',
      'User training for enterprise software',
      'API documentation for developers',
      'System administration training',
      'Ongoing application maintenance',
      'Performance monitoring and optimization'
    ]
  }
};
