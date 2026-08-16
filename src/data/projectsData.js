import HZImage from '../assets/images/HZ.png';
import insuranceImage from '../assets/images/insurance.png';
import figminImage from '../assets/images/figmin.png';
import figminWindowImage from '../assets/images/figmin window.png';
import figminHomepageImage from '../assets/images/Figmin Homepage.png';
import drSayaniWindowImage from '../assets/images/dr.sayani\'s window.png';
import drSayaniHomepageImage from '../assets/images/DrSayani Homepage.png';
import logo1Image from '../assets/images/logo 1.png';
import logo2Image from '../assets/images/logo 2.png';
import logo3Image from '../assets/images/logo 3.png';
import logo4Image from '../assets/images/logo 4.png';
import stampyImage from '../assets/images/stampy.jpeg';
import insuranceAppImage from '../assets/images/insuranceApp.jpeg';
import tapzyEImage from '../assets/images/tapzyE.jpeg';
import tapzyAImage from '../assets/images/tapzyA.jpeg';
import tapzyHRImage from '../assets/images/tapzyHR.jpeg';

export const websiteProjects = [
  {
    id: 'web-1', 
    title: 'Holly Zolly ',
    category: 'Website Development',
    heroImage: HZImage,
    description: 'Holly Zolly is a Vastu-inspired e-commerce platform offering thoughtfully curated products to create harmony, positivity, and balance in your space.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    visitUrl: 'https://www.hollyzolly.shop/',
    stats: { conversion: '+140%', loadTime: '0.4s' }
  },
  { 
    id: 'web-2',
    title: 'Griva Insurance',
    category: 'Website Development',
    heroImage: insuranceImage,
    description: 'Griva Insurance is a complete insurance management platform with dedicated Admin, Executive, and Team Lead panels to efficiently manage policies, customers, teams, and insurance operations.',
    tags: ['Next.js', 'GraphQL', 'Shopify API', 'Stripe'],
    visitUrl: 'https://example.com/luxeglow',
    stats: { sales: '3.5x', orders: '12k+' }
  },
  {
    id: 'web-3',
    title: 'Figmin',
    category: 'Website Development',
    heroImage: figminImage,
    description: 'FigMin is a custom figurine e-commerce platform that transforms your photos into personalized collectible figures, crafted and delivered across India.',
    tags: ['React', 'Node.js', 'Mapbox', 'MongoDB'],
    visitUrl: 'https://figmin.in/',
    stats: { listings: '2,500+', views: '50k/mo' }
  },
  // {
  //   id: 'web-4',
  //   title: 'FinEdge Crypto & Banking',
  //   category: 'Website Development',
  //   heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  //   description: 'Next-gen fintech application landing page featuring live stock tickers, wallet connects, and dark mode aesthetics.',
  //   tags: ['React', 'Web3.js', 'Recharts', 'Express'],
  //   visitUrl: 'https://example.com/finedge',
  //   stats: { security: 'Bank Grade', rating: '4.9/5' }
  // }
];

export const appProjects = [
  {
    id: 'app-2',
    title: 'Insurance App',
    category: 'Application Development',
    mockupImage: insuranceAppImage,
    description: 'Insurance app experience built to simplify policy access, claims information, and customer support for faster service.',
    platform: 'Android',
    features: ['Policy overview', 'Claims guidance', 'Customer dashboard', 'Smart support flow'],

  },
 {
  id: 'app-1',
  title: 'Stampy',
  category: 'Application Development',
  mockupImage: stampyImage,
  description:
    'A digital loyalty app that lets customers collect stamps from coffee shops and local businesses, complete their stamp cards, and unlock exciting rewards.',
  platform: 'Android',
  features: [
    'Digital stamp collection',
    'Reward-based loyalty',
    'Easy business integration',
    'Engaging customer experience'
  ],
},
  
{
  id: 'app-3',
  title: 'Tapzy E',
  category: 'Application Development',
  mockupImage: tapzyEImage,
  description:
    'A smart attendance management app that helps employees easily check in and out, track working hours, manage breaks, and monitor their daily attendance.',
  platform: 'Android',
  features: [
    'Quick check-in & check-out',
    'Working hours tracking',
    'Break management',
    'Attendance history'
  ],
}
];

export const uiUxProjects = [
  {
    id: 'uiux-1',
    title: 'Figmin',
    thumbnail: figminWindowImage,
    homepageImage: figminHomepageImage,
    tagline: 'Custom collectible figurines made from your memories',
    themeColor: '#84486c',
    heroBadge: '✨ Personalized Design',
    heroTitle: 'Turn your favorite moments into collectible figurines',
    heroDescription: 'Figmin brings your photos into beautifully crafted figurine experiences with modern product storytelling and bespoke personalization.',
    features: [
      { title: 'Photo to Figurine', desc: 'Convert cherished memories into realistic and stylized collectible figures.' },
      { title: 'Made-to-Order Process', desc: 'Personalized workflows designed around your custom design selections and gifting moments.' },
      { title: 'Premium Product Story', desc: 'Highlight craftsmanship, materials, and the joy of unforgettable keepsakes.' },
      { title: 'India Delivery Experience', desc: 'Built for seamless ordering, trust, and a premium ecommerce journey.' }
    ],
    pricingPlans: [
      { name: 'Starter', price: '₹799', desc: 'Perfect for quick gifting', features: ['Custom figurine concept', 'Base design preview', 'Secure checkout'] },
      { name: 'Premium', price: '₹1,999', desc: 'For premium personalized gifting', features: ['Advanced customization', 'Priority production', 'Express delivery support'] }
    ]
  },
  {
    id: 'uiux-2',
    title: 'Dr. Sayani',
    thumbnail: drSayaniWindowImage,
    homepageImage: drSayaniHomepageImage,
    tagline: 'Healthcare and wellness consulting with a personal touch',
    themeColor: '#3a2e39',
    heroBadge: '🏥 Trusted Care',
    heroTitle: 'Modern healthcare guidance built around trust and clarity',
    heroDescription: 'Dr. Sayani combines compassionate patient experiences with accessible wellness storytelling and premium care presentation.',
    features: [
      { title: 'Patient-Centered Design', desc: 'A warm, calming layout that helps visitors feel confident and comfortable.' },
      { title: 'Medical Storytelling', desc: 'Present services, expertise, and wellness support through clean, reassuring content.' },
      { title: 'Appointment Journey', desc: 'Simplify the visit path with polished calls to action and clear information flow.' },
      { title: 'Expert Brand Trust', desc: 'Build credibility through a premium healthcare digital presence.' }
    ],
    pricingPlans: [
      { name: 'Consultation', price: '₹999', desc: 'Ideal for first-time patient engagement', features: ['Profile showcase', 'Service overview', 'Contact flow'] },
      { name: 'Premium Care', price: '₹2,499', desc: 'For advanced practice branding', features: ['Full service presentation', 'Enhanced trust sections', 'Lead-focused conversion'] }
    ]
  },
  {
    id: 'uiux-3',
    title: 'Kuro - Cyber Security Dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    tagline: 'Proactive Zero-Trust Threat Intelligence',
    themeColor: '#1e293b',
    heroBadge: '🛡️ Enterprise Defense',
    heroTitle: 'Detect, Shield & Neutralize Cyber Threats Live',
    heroDescription: 'Real-time network telemetry, automated vulnerability patching, and AI incident mitigation for enterprise infrastructure.',
    features: [
      { title: 'Live Threat Map', desc: 'Visualize attack vectors across global servers with instant IP blocking.' },
      { title: 'Zero-Trust Auth', desc: 'Multi-factor biometric verification for all internal database queries.' },
      { title: 'Automated Patching', desc: 'Continuous vulnerability scanning and auto-deployment of security fixes.' },
      { title: 'Compliance Reports', desc: 'Export SOC2, GDPR, and ISO-ready audit logs with a single click.' }
    ],
    pricingPlans: [
      { name: 'Business Shield', price: '$149/mo', desc: 'Up to 50 server nodes', features: ['24/7 Monitoring', 'Daily Security Scans', 'Email Alerts'] },
      { name: 'Enterprise Fortress', price: '$499/mo', desc: 'Unlimited global nodes', features: ['Dedicated Security Officer', 'Custom SIEM Integration', 'SLA Guarantee'] }
    ]
  },
  {
    id: 'uiux-4',
    title: 'NomadFlow - Remote Team Workspaces',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Asynchronous Collaboration Reimagined',
    themeColor: '#84486c',
    heroBadge: '🌐 Distributed Teams',
    heroTitle: 'Bring Harmony To Asynchronous Global Work',
    heroDescription: 'Replaces noisy chat threads with structured project boards, video voice notes, and unified team knowledge bases.',
    features: [
      { title: 'Async Video Standups', desc: 'Record short 1-minute video updates without scheduling live meetings.' },
      { title: 'Visual Project Boards', desc: 'Kanban, Gantt charts, and mind maps synchronized in real-time.' },
      { title: 'Knowledge Base Wiki', desc: 'Clean document documentation with inline comments and version history.' },
      { title: 'Time-zone Scheduler', desc: 'Smart meeting recommendations across multiple global time zones.' }
    ],
    pricingPlans: [
      { name: 'Team Plan', price: '$12/user', desc: 'For distributed teams', features: ['Unlimited Projects', '50GB Storage', 'Integrations'] },
      { name: 'Enterprise', price: '$25/user', desc: 'For large remote companies', features: ['SSO Enforcement', 'Unlimited Storage', 'Dedicated Manager'] }
    ]
  }
];

export const logoProjects = [
  {
    id: 'logo-1',
    title: 'Pamela Learning Centre',
    category: 'Education & Branding',
    image: logo1Image,
    desc: 'Professional educational brand identity representing learning, growth, and academic excellence.'
  },
  {
    id: 'logo-2',
    title: 'Next Construction Ltd.',
    category: 'Construction & Branding',
    image: logo2Image,
    desc: 'Bold construction brand identity reflecting strength, reliability, progress, and professional expertise.'
  },
  {
    id: 'logo-3',
    title: 'Firm Foundation Ltd.',
    category: 'Education & Training',
    image: logo3Image,
    desc: 'Premium educational identity symbolizing strong foundations, knowledge, discipline, and lifelong learning.'
  },
  {
    id: 'logo-4',
    title: 'Bakers Kitchen',
    category: 'Food & Bakery Branding',
    image: logo4Image,
    desc: 'Warm and inviting bakery brand identity inspired by freshness, craftsmanship, taste, and quality.'
  }
];
