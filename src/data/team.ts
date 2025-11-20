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
  bio: 'Visionary leader driving innovation and growth at Amigos Aura with extensive expertise in business strategy and organizational leadership.',
  image: 'assets/hussain.jpg',
  reports: [
    {
      name: 'Muhammad Asim',
      role: 'Head of Marketing',
      bio: 'Strategic marketing leader focused on brand growth, digital presence, and client acquisition strategies.',
      image: 'assets/asim.jpg',
    },
    {
      name: 'Imran Pervaiz',
      role: 'E-Commerce Director / Head of Marketplace Operations',
      bio: 'Expert in e-commerce platforms, marketplace development, and scaling digital commerce solutions.',
      image: 'assets/imran.png',
    },
    {
      name: 'Huzaifa Akram',
      role: 'Operations Manager',
      bio: 'Operational excellence specialist ensuring smooth project delivery and client satisfaction.',
      image: 'assets/huzaifa.png',
    },
    {
      name: 'Zubair Hussain',
      role: 'Game Development Team Lead',
      bio: 'Leading game development initiatives with expertise in game engines, mechanics, and interactive experiences.',
      image: 'assets/zubair.jpg',
    },
    {
      name: 'Fahad Butt',
      role: 'Lead AI Developer / AI Team Lead',
      bio: 'AI and machine learning expert driving innovation in artificial intelligence solutions and automation.',
      image: 'assets/fahad.jpg',
    },
    {
      name: 'Muhammad Farhan Atif',
      role: 'UI/UX Design and Frontend Lead',
      bio: 'Experienced UI/UX designer and frontend lead specializing in building accessible, responsive, and performant interfaces. Leads design systems, component architecture, and cross-functional collaboration to deliver user-centered, pixel-perfect products.',
      image: 'assets/farhan.jpg',
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
