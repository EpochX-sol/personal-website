export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' }, 
];
export const projects =[
  {
    id: 1,
    title: 'Ethio Tour',
    description: 'A comprehensive tourism management system for customized travel experiences in Ethiopia.',
    longDescription: 'As a full-stack developer using Svelte.js, Node.js, MongoDB, and Express, I created EthioTour, a comprehensive tourism management system. It features a user-friendly interface, secure booking and payment, interactive maps, reviews, and responsive customer support.',
    images: [
        '/ethiotour/image_original (6).png',
      '/ethiotour/image_original (1).png',
      '/ethiotour/image_original (2).png',
      '/ethiotour/image_original (3).png',
      '/ethiotour/image_original (4).png',
      '/ethiotour/image_original (5).png',
      '/ethiotour/image_original.png',
    ],
    tags: ['Svelte.js', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://ethiotour.com',
    githubUrl: 'https://github.com/EpochX-sol/Ethio-tour',
    features: [
      'User-friendly interface',
      'Secure booking and payment',
      'Interactive maps', 
      'Customer reviews',
      'Responsive design'
    ]
  },
 {
    id: 2,
    title: 'EpochX Agency',
    description: 'A modern and dynamic creative agency website showcasing services and portfolio.',
    longDescription: 'Developed a sophisticated creative agency website using React and Tailwind CSS. The website features smooth scrolling navigation, interactive UI elements, responsive design, and dynamic content sections. Built with a focus on performance and user experience.',
    images: [
      '/epochx/desktop-preview.jpg',
      '/epochx/desktop-design.jpg',
      '/epochx/mobile-design.jpg',
      '/epochx/mobile-menu.jpg',
    ],
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    liveUrl: 'https://epochx-agency.vercel.app/',
    githubUrl: 'https://github.com/EpochX-sol/epochx-agency',
    features: [
      'Responsive design',
      'Smooth scroll navigation',
      'Interactive UI elements',
      'Dynamic content sections',
      'Modern animations',
      'Portfolio showcase',
      'Testimonials carousel',
      'Mobile-first approach'
    ]
  },
  {
    id: 3,
    title: 'Brandualist Agency',
    description: 'A dynamic marketing agency website.',
    longDescription: 'Developed a sophisticated marketing agency platform for Brandualist, a Ukraine-based creative agency. Built with SvelteKit, it features an immersive portfolio showcase with dynamic animations, and interactive UI.',
    images: [
      '/brandualist/brandualist9.png',
      '/brandualist/brandualist.png',
      '/brandualist/brandualist1.png',
      '/brandualist/brandualist2.png',
      '/brandualist/brandualist3.png',
      '/brandualist/brandualist4.png',
      '/brandualist/brandualist5.png',
      '/brandualist/brandualist6.png',
      '/brandualist/brandualist7.png',
      '/brandualist/brandualist8.png',
        
    ],
    tags: ['SvelteKit', 'Three.js','Scss'],
    liveUrl: 'https://brandualist.com',
    githubUrl: 'private',
    features: [    
       'Interactive 3D demonstrations',  
      'Real-time rendering', 
      'Cross-platform support', 
    ]
  },
  {
    id: 4,
    title: 'Niguss Shoe',
    description: 'A modern e-commerce platform for premium Ethiopian handcrafted shoes.',
    longDescription: 'Engineered a sophisticated e-commerce platform for Niguss Shoe, showcasing Ethiopia\'s finest handcrafted footwear. Built with Svelte and integrated with a robust backend, the platform offers an immersive shopping experience. Features include a dynamic product catalog with advanced filtering, 360-degree product views, size customization, and real-time inventory management. The platform also includes a custom order tracking system, integrated payment processing with local Ethiopian payment methods, and a sophisticated analytics dashboard for sales and inventory insights. Special features include a virtual try-on system, customer loyalty program, and automated email marketing integration.',
    images: [
      '/nigus/nigus.png',
      '/nigus/nigus1.png',
      '/nigus/nigus2.png',
      '/nigus/nigus3.png',
      '/nigus/nigus4.png',
      '/nigus/nigus5.png',
      '/nigus/nigus6.png',
    ],
    tags: ['Next js', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://niguss-shoe.com',
    githubUrl: 'private',
    features: [ 
      'Size customization system',  
      'Multiple payment integrations',
      'Customer loyalty program',
      'Advanced order tracking',
      'Analytics dashboard',
      'Automated email marketing',
      'Mobile-first responsive design'
    ]
  },
  {
    id: 5,
    title: 'Felagi Jobs',
    description: 'A comprehensive job posting and finding platform connecting Ethiopian talent with opportunities.',
    longDescription: 'Developed Felagi Jobs, an innovative job marketplace platform specifically designed for the Ethiopian market. This platform bridges the gap between local talent and employers through advanced technology. Built with React and Node.js. Automated application tracking, and a sophisticated company verification system. Notable features include interview scheduling with timezone management. The platform also offers comprehensive analytics for both employers and job seekers, helping them make data-driven decisions.',
    images: [
        '/felagijobs/image_original9.png',
        '/felagijobs/image_original.png',
        '/felagijobs/image_original1.png',
        '/felagijobs/image_original2.png',
        '/felagijobs/image_original3.png',
        '/felagijobs/image_original4.png',
        '/felagijobs/image_original5.png',
        '/felagijobs/image_original6.png',
        '/felagijobs/image_original7.png',
        '/felagijobs/image_original8.png', 
    ],
    tags: ['React',"Tailwind", 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'felagi-jobs.netlify.app',
    githubUrl: 'https://github.com/EpochX-sol/Nigus-Shoes',
    features: [ 
      'Local context-aware resume builder',
      'Company verification system', 
      'Advanced search filters',
      'Real-time notifications', 
      'Analytics dashboard',  
    ]
  },
  {
    id: 6,
    title: 'VR Technologies',
    description: 'An Interactive landing page for a company called VR Technologies.',
    longDescription: 'Engineered a cutting-edge Website using Svelte.',
    images: [
      '/vr/vr.png',
      '/vr/vr2.png',
      '/vr/vr3.png',
      '/vr/vr4.png',	
    ],
    tags: ['Svelte', 'Firebase','ShadCN'],
    liveUrl: 'https://vr-technologies.web.app/',
    githubUrl: 'private',
    features: [
      'Technical documentation'
    ]
  }
]

export type Project = typeof projects[0];
export const SKILLS = [
  'Python',
  'React',
  'MongoDB',
  'JavaScript',
  'Svelte.js',
  'MySQL',
  'C# (.NET)',
  'Node.js',
  'Git',
  'Go lang',
  'Express',
  'TypeScript'
]; 