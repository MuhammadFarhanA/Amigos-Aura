export const navigationItems = [
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
    children: [
      { name: 'Core Software Development', href: '/services/core-software-development' },
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
      { name: 'B2B Marketing & Commerce', href: '/services/b2b-marketing-commerce' },
      { name: 'Cybersecurity & Compliance', href: '/services/cybersecurity-compliance' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'Data & Analytics', href: '/services/data-analytics' },
      { name: 'AI & Machine Learning', href: '/services/ai-machine-learning' },
      { name: 'Consulting & Outsourcing', href: '/services/consulting-outsourcing' },
      { name: 'White-Label & Partnership', href: '/services/white-label-partnership' },
      { name: 'Additional B2B Services', href: '/services/additional-b2b-services' },
    ]
  },
  { name: 'Contact Us', href: '/contact' },
];