import ecommerceImg from '../assets/img/projects/AuraCart.png';
import healthcareImg from '../assets/img/projects/Shoeto.png';
import fintechImg from '../assets/img/projects/skillorbit.png';
import cloudImg from '../assets/img/projects/isStartup.png';
import analyticsImg from '../assets/img/projects/findhere.png';
import iotImg from '../assets/img/projects/POP.png';

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Modern e-commerce solution with real-time inventory management and AI-powered recommendations.',
    fullDescription: 'A comprehensive e-commerce platform built with cutting-edge technology to provide seamless shopping experiences. Features include real-time inventory management, AI-powered product recommendations, multi-currency support, and progressive web app capabilities.',
    image: ecommerceImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe API', 'Docker'],
    features: [
      'Real-time Analytics Dashboard',
      'AI-Powered Product Recommendations',
      'Multi-currency and Multi-language Support',
      'Progressive Web App (PWA)',
      'Real-time Inventory Management',
      'Secure Payment Processing',
      'Customer Reviews and Ratings',
      'Advanced Search and Filtering'
    ],
    challenges: [
      'Implementing real-time inventory synchronization across multiple warehouses',
      'Building scalable recommendation engine',
      'Ensuring PCI compliance for payment processing',
      'Optimizing performance for high traffic during sales events'
    ],
    solutions: [
      'Implemented WebSocket connections for real-time updates',
      'Developed machine learning models for personalized recommendations',
      'Integrated Stripe with proper security measures',
      'Used Redis caching and CDN for performance optimization'
    ],
    duration: '6 months',
    teamSize: 8,
    client: 'RetailTech Solutions Inc.',
    year: '2024',
    status: 'completed',
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/example/ecommerce-platform',
    liveDemo: 'https://demo.example.com/ecommerce',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'healthcare-management',
    title: 'Healthcare Management System',
    category: 'web',
    description: 'Comprehensive healthcare platform with patient management and telemedicine capabilities.',
    fullDescription: 'A HIPAA-compliant healthcare management system designed to streamline patient care, appointment scheduling, and telemedicine consultations. Built with security and privacy as top priorities.',
    image: healthcareImg,
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'Twilio API', 'WebRTC'],
    features: [
      'HIPAA Compliant Architecture',
      'Video Consultations with Screen Sharing',
      'Electronic Health Records (EHR)',
      'Intelligent Appointment Scheduling',
      'Prescription Management',
      'Billing and Insurance Integration',
      'Patient Portal',
      'Analytics and Reporting'
    ],
    challenges: [
      'Ensuring HIPAA compliance throughout the system',
      'Implementing secure video consultations',
      'Integrating with existing healthcare systems',
      'Managing sensitive patient data securely'
    ],
    solutions: [
      'Implemented end-to-end encryption for all communications',
      'Used WebRTC for secure video streaming',
      'Developed HL7 FHIR interfaces for system integration',
      'Applied multi-layer security with audit trails'
    ],
    duration: '8 months',
    teamSize: 10,
    client: 'MedCare Hospital Group',
    year: '2024',
    status: 'completed',
    link: 'https://example.com/healthcare',
    github: 'https://github.com/example/healthcare-system',
    liveDemo: 'https://demo.example.com/healthcare',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'fintech-mobile',
    title: 'FinTech Mobile App',
    category: 'mobile',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    fullDescription: 'A cutting-edge mobile banking application that combines security, convenience, and innovative features to provide users with complete control over their finances.',
    image: fintechImg,
    technologies: ['React Native', 'Node.js', 'Blockchain', 'AWS', 'Biometric APIs', 'Plaid API'],
    features: [
      'Biometric Security (Face ID, Fingerprint)',
      'Real-time Transaction Processing',
      'Portfolio Management and Analytics',
      'AI-Powered Financial Insights',
      'Peer-to-Peer Payments',
      'Investment Tracking',
      'Budget Planning Tools',
      'Multi-currency Support'
    ],
    challenges: [
      'Implementing robust security measures',
      'Achieving real-time transaction processing',
      'Integrating with multiple banking APIs',
      'Ensuring regulatory compliance'
    ],
    solutions: [
      'Implemented multi-factor authentication with biometrics',
      'Used blockchain technology for secure transactions',
      'Developed unified API gateway for banking integrations',
      'Built compliance monitoring system'
    ],
    duration: '7 months',
    teamSize: 12,
    client: 'SecureBank Technologies',
    year: '2023',
    status: 'completed',
    link: 'https://example.com/fintech',
    github: 'https://github.com/example/fintech-app',
    liveDemo: 'Available on App Store and Play Store',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Infrastructure Migration',
    category: 'cloud',
    description: 'Enterprise cloud migration with zero downtime and auto-scaling capabilities.',
    fullDescription: 'A comprehensive cloud migration project that successfully moved enterprise infrastructure to the cloud with zero downtime, implementing modern DevOps practices and auto-scaling capabilities.',
    image: cloudImg,
    technologies: ['Kubernetes', 'Terraform', 'AWS', 'Jenkins', 'Prometheus', 'Grafana'],
    features: [
      'Zero Downtime Migration Strategy',
      'Auto-scaling Infrastructure',
      'Multi-cloud Deployment',
      'CI/CD Pipeline Automation',
      'Infrastructure as Code (IaC)',
      'Monitoring and Alerting',
      'Backup and Disaster Recovery',
      'Cost Optimization'
    ],
    challenges: [
      'Migrating legacy systems without downtime',
      'Ensuring data consistency during migration',
      'Implementing proper monitoring and alerting',
      'Optimizing cloud costs'
    ],
    solutions: [
      'Developed blue-green deployment strategy',
      'Implemented data synchronization tools',
      'Set up comprehensive monitoring with Prometheus and Grafana',
      'Created cost optimization algorithms'
    ],
    duration: '4 months',
    teamSize: 6,
    client: 'Global Enterprises Ltd.',
    year: '2023',
    status: 'completed',
    link: 'https://example.com/cloud-migration',
    github: 'https://github.com/example/cloud-infrastructure',
    liveDemo: 'Case study available',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'ai-analytics',
    title: 'AI-Powered Analytics Dashboard',
    category: 'ai',
    description: 'Intelligent analytics platform with predictive modeling and automated insights.',
    fullDescription: 'An advanced analytics platform that leverages artificial intelligence and machine learning to provide predictive insights, automated reporting, and intelligent data visualization.',
    image: analyticsImg,
    technologies: ['Python', 'TensorFlow', 'React', 'Apache Spark', 'D3.js', 'PostgreSQL'],
    features: [
      'Predictive Analytics Models',
      'Real-time Dashboards',
      'Automated Insight Generation',
      'Natural Language Queries',
      'Advanced Data Visualization',
      'Custom Report Builder',
      'Anomaly Detection',
      'Trend Analysis'
    ],
    challenges: [
      'Processing large volumes of data in real-time',
      'Building accurate predictive models',
      'Creating intuitive data visualizations',
      'Ensuring data privacy and security'
    ],
    solutions: [
      'Implemented distributed processing with Apache Spark',
      'Developed custom machine learning algorithms',
      'Used D3.js for interactive visualizations',
      'Applied differential privacy techniques'
    ],
    duration: '5 months',
    teamSize: 7,
    client: 'DataCorp Analytics',
    year: '2024',
    status: 'completed',
    link: 'https://example.com/analytics',
    github: 'https://github.com/example/ai-analytics',
    liveDemo: 'https://demo.example.com/analytics',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'iot-smart-home',
    title: 'IoT Smart Home System',
    category: 'mobile',
    description: 'Comprehensive IoT solution for smart home automation and energy management.',
    fullDescription: 'A complete IoT ecosystem for smart home automation that integrates various devices and sensors to provide intelligent home management, energy optimization, and remote control capabilities.',
    image: iotImg,
    technologies: ['Flutter', 'MQTT', 'Node.js', 'MongoDB', 'Raspberry Pi', 'AWS IoT'],
    features: [
      'Voice Control Integration (Alexa, Google Assistant)',
      'Energy Monitoring and Optimization',
      'Automated Scheduling',
      'Remote Access and Control',
      'Device Compatibility Hub',
      'Security Monitoring',
      'Climate Control',
      'Lighting Automation'
    ],
    challenges: [
      'Integrating diverse IoT protocols',
      'Ensuring real-time communication between devices',
      'Managing battery life for wireless sensors',
      'Providing reliable offline functionality'
    ],
    solutions: [
      'Developed universal protocol bridge',
      'Implemented MQTT for efficient messaging',
      'Optimized power consumption algorithms',
      'Created local processing hub for offline operations'
    ],
    duration: '6 months',
    teamSize: 8,
    client: 'SmartHome Technologies',
    year: '2023',
    status: 'completed',
    link: 'https://example.com/smart-home',
    github: 'https://github.com/example/iot-smart-home',
    liveDemo: 'https://demo.example.com/smart-home',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export default projects;
