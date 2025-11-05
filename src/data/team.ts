export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  reports?: TeamMember[];
}

export const teamHierarchy: TeamMember = {
  name: 'Hussain Awan',
  role: 'Chairman-CEO',
  bio: 'Visionary leader driving innovation and growth at Amigos Aura with extensive experience in software development and business strategy.',
  image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  reports: [
    {
      name: 'Muhammad Asim',
      role: 'Head of Marketing',
      bio: 'Strategic marketing leader focused on brand growth, digital presence, and client acquisition strategies.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Imran Pervaiz',
      role: 'E-Commerce Director / Head of Marketplace Operations',
      bio: 'Expert in e-commerce platforms, marketplace development, and scaling digital commerce solutions.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Huzaifa Akram',
      role: 'Operations Manager',
      bio: 'Operational excellence specialist ensuring smooth project delivery and client satisfaction.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Zubair Hussain',
      role: 'Game Development Team Lead',
      bio: 'Leading game development initiatives with expertise in game engines, mechanics, and interactive experiences.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Fahad Butt',
      role: 'Lead AI Developer / AI Team Lead',
      bio: 'AI and machine learning expert driving innovation in artificial intelligence solutions and automation.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ],
};

export const companyValues = [
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do, from code quality to client communication.',
  },
  {
    title: 'Collaboration',
    description: 'We work as partners with our clients, treating their success as our own and maintaining transparent communication.',
  },
  {
    title: 'Innovation',
    description: 'We stay at the forefront of technology, constantly learning and applying new approaches to solve complex problems.',
  },
  {
    title: 'Integrity',
    description: 'We do what we say we will do, admit when we make mistakes, and always act in our clients\' best interests.',
  },
];
