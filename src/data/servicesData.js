import icon1 from "../assets/img/1.png";
import icon2 from "../assets/img/2.png";
import icon3 from "../assets/img/3.png";
import icon4 from "../assets/img/4.png";
import icon5 from "../assets/img/5.png";
import icon6 from "../assets/img/6.png";
import icon7 from "../assets/img/7.png";
import icon8 from "../assets/img/8.png";
import icon9 from "../assets/img/9.png";
import icon10 from "../assets/img/10.png";
import icon11 from "../assets/img/11.png";
import icon12 from "../assets/img/12.png";

const servicesData = [
  {
    id: "software-development",
    img: icon1,
    title: "App Development",
    description: "Secure and scalable data center services offering advanced infrastructure management, ensuring peak performance and maximum uptime.",
    biography: [
      "Our App Development service provides comprehensive solutions to build robust, scalable, and efficient mobile applications tailored to your business needs. We specialize in custom mobile app development using modern technologies and methodologies.",
      "From initial concept to deployment and maintenance, our team ensures high-quality code, seamless integration, and optimal performance. We focus on agile development practices to deliver projects on time and within budget.",
      "Whether it's iOS, Android, or cross-platform applications, we leverage cutting-edge tools and frameworks to create innovative solutions that drive business success.",
    ],
    skills: [
      { name: "iOS Development", percentage: 95 },
      { name: "Android Development", percentage: 90 },
      { name: "Cross-Platform", percentage: 85 },
      { name: "UI/UX Design", percentage: 88 },
      { name: "API Integration", percentage: 92 },
      { name: "App Store Optimization", percentage: 90 },
    ],
  },
  {
    id: "web-development",
    img: icon2,
    title: "Web Development",
    description: "Custom web application development using modern frameworks and technologies to create responsive, user-friendly websites and web platforms.",
    biography: [
      "Our Web Development service creates dynamic, responsive, and user-friendly websites that enhance your online presence. We build websites that are not only visually appealing but also optimized for performance and SEO.",
      "Using the latest web technologies, we develop custom websites, e-commerce platforms, and web applications that provide exceptional user experiences across all devices.",
      "Our team ensures secure, fast, and maintainable code, with a focus on accessibility and cross-browser compatibility to reach a wider audience.",
    ],
    skills: [
      { name: "React.js", percentage: 95 },
      { name: "Next.js", percentage: 90 },
      { name: "Node.js", percentage: 88 },
      { name: "Responsive Design", percentage: 92 },
      { name: "Performance Optimization", percentage: 90 },
      { name: "SEO Best Practices", percentage: 88 },
    ],
  },
  {
    id: "ecommerce-solutions",
    img: icon3,
    title: "E-Commerce Solutions",
    description: "Advanced data analytics and business intelligence solutions to transform raw data into actionable insights for informed decision-making.",
    biography: [
      "Our E-Commerce Solutions service helps businesses establish and optimize their online stores with cutting-edge technologies and best practices.",
      "We create seamless shopping experiences with secure payment gateways, inventory management, and customer relationship management systems.",
      "Our team specializes in building scalable e-commerce platforms that drive sales and enhance customer engagement across all digital channels.",
    ],
    skills: [
      { name: "E-commerce Platforms", percentage: 95 },
      { name: "Payment Gateway Integration", percentage: 90 },
      { name: "Shopping Cart Solutions", percentage: 88 },
      { name: "Inventory Management", percentage: 92 },
      { name: "Mobile Commerce", percentage: 90 },
      { name: "Conversion Optimization", percentage: 88 },
    ],
  },
  {
    id: "cloud-devops",
    img: icon4,
    title: "Cloud & DevOps",
    description: "Comprehensive cloud migration, infrastructure automation, and DevOps practices to accelerate development cycles and improve deployment reliability.",
    biography: [
      "Our Cloud & DevOps service offers comprehensive cloud migration, infrastructure management, and DevOps practices to streamline your development and deployment processes.",
      "We help businesses leverage cloud platforms for scalability, cost-efficiency, and reliability. Our DevOps expertise ensures continuous integration, delivery, and monitoring for faster, more reliable software releases.",
      "From cloud strategy to implementation and ongoing support, we optimize your infrastructure for maximum performance and security.",
    ],
    skills: [
      { name: "AWS/Azure/GCP", percentage: 95 },
      { name: "Docker & Kubernetes", percentage: 90 },
      { name: "CI/CD Pipelines", percentage: 92 },
      { name: "Infrastructure as Code", percentage: 88 },
      { name: "Monitoring & Logging", percentage: 90 },
      { name: "Cloud Security", percentage: 92 },
    ],
  },
  {
    id: "real-estate-management-solutions",
    img: icon5,
    title: "Real Estate Management Solutions",
    description: "Comprehensive property management solutions to streamline real estate operations and enhance tenant experiences.",
    biography: [
      "Our Real Estate Management Solutions help property managers and real estate professionals optimize their operations and deliver exceptional service.",
      "We provide end-to-end solutions including property listing management, tenant screening, lease management, and maintenance tracking.",
      "Our platform is designed to improve efficiency, reduce costs, and provide valuable insights for better decision-making in real estate management.",
    ],
    skills: [
      { name: "Property Management", percentage: 95 },
      { name: "Tenant Portal", percentage: 90 },
      { name: "Lease Management", percentage: 88 },
      { name: "Maintenance Tracking", percentage: 92 },
      { name: "Financial Reporting", percentage: 90 },
      { name: "Document Management", percentage: 88 },
    ],
  },
  {
    id: "lms-education-solutions",
    img: icon6,
    title: "LMS & Education Solutions",
    description: "Comprehensive learning management systems and educational technology solutions for modern education.",
    biography: [
      "Our LMS & Education Solutions provide powerful tools for educational institutions and corporate training programs.",
      "We create engaging learning experiences with features like course management, student tracking, assessments, and collaborative learning tools.",
      "Our solutions support various learning modalities including online, hybrid, and in-person instruction, making education more accessible and effective.",
    ],
    skills: [
      { name: "Learning Management", percentage: 95 },
      { name: "Course Authoring", percentage: 90 },
      { name: "Student Assessment", percentage: 88 },
      { name: "Gamification", percentage: 85 },
      { name: "Video Conferencing", percentage: 92 },
      { name: "Analytics & Reporting", percentage: 90 },
    ],
  },
  {
    id: "healthcare-management-systems",
    img: icon7,
    title: "Healthcare Management Systems",
    description: "Integrated healthcare solutions to improve patient care and streamline medical practice operations.",
    biography: [
      "Our Healthcare Management Systems are designed to meet the complex needs of modern healthcare providers.",
      "We offer comprehensive solutions including electronic health records (EHR), practice management, telemedicine, and patient engagement tools.",
      "Our HIPAA-compliant systems ensure data security while improving clinical workflows and patient outcomes.",
    ],
    skills: [
      { name: "EHR/EMR Systems", percentage: 95 },
      { name: "Patient Portal", percentage: 90 },
      { name: "Appointment Scheduling", percentage: 92 },
      { name: "Medical Billing", percentage: 88 },
      { name: "Telemedicine", percentage: 90 },
      { name: "Regulatory Compliance", percentage: 92 },
    ],
  },
  {
    id: "ai-powered-automation",
    img: icon8,
    title: "AI-Powered Automation",
    description: "Leverage artificial intelligence to automate processes, enhance decision-making, and drive business growth.",
    biography: [
      "Our AI-Powered Automation solutions help businesses transform their operations through intelligent automation and machine learning.",
      "We develop custom AI models and automation workflows that improve efficiency, reduce costs, and unlock new opportunities for innovation.",
      "From predictive analytics to natural language processing, our solutions are tailored to meet your specific business challenges and objectives.",
    ],
    skills: [
      { name: "Machine Learning", percentage: 90 },
      { name: "Process Automation", percentage: 95 },
      { name: "Natural Language Processing", percentage: 88 },
      { name: "Computer Vision", percentage: 85 },
      { name: "Predictive Analytics", percentage: 92 },
      { name: "AI Integration", percentage: 90 },
    ],
  },
  {
    id: "iot-apps",
    img: icon9,
    title: "IOT Apps",
    description: "Innovative Internet of Things solutions to connect devices, collect data, and enable smart automation.",
    biography: [
      "Our IOT Apps service helps businesses harness the power of connected devices and smart technologies.",
      "We develop custom IoT solutions that enable real-time monitoring, predictive maintenance, and intelligent automation across various industries.",
      "From smart home devices to industrial IoT applications, we create secure, scalable, and reliable solutions that drive digital transformation.",
    ],
    skills: [
      { name: "Device Connectivity", percentage: 95 },
      { name: "Sensor Integration", percentage: 90 },
      { name: "Data Analytics", percentage: 88 },
      { name: "Edge Computing", percentage: 85 },
      { name: "Cloud Integration", percentage: 92 },
      { name: "Security & Privacy", percentage: 90 },
    ],
  },
  {
    id: "product-design",
    img: icon10,
    title: "Product & Design",
    description: "Scalable cloud infrastructure and migration strategies to support digital transformation and growth.",
    biography: [
      "Our Product & Design service focuses on creating intuitive, user-centered designs that enhance product usability and appeal. We combine creativity with functionality to deliver exceptional design solutions.",
      "From user research and wireframing to prototyping and final design, our team ensures that every product meets user needs and business goals.",
      "We specialize in UI/UX design, branding, and product strategy, helping you create products that stand out in the market and delight your users.",
    ],
    skills: [
      { name: "UI/UX Design", percentage: 95 },
      { name: "User Research", percentage: 90 },
      { name: "Prototyping", percentage: 85 },
      { name: "Branding", percentage: 88 },
      { name: "Design Systems", percentage: 80 },
      { name: "Usability Testing", percentage: 90 },
    ],
  },
  {
    id: "data-center",
    img: icon11,
    title: "Data Center",
    description: "Dedicated assistance around the clock to resolve issues quickly and maintain smooth operations.",
    biography: [
      "Our Data Center service provides robust, secure, and high-performance data center solutions to support your critical business operations. We offer managed hosting, colocation, and disaster recovery services.",
      "With state-of-the-art facilities and 24/7 monitoring, we ensure maximum uptime, data security, and compliance with industry standards.",
      "Our team of experts handles everything from infrastructure setup to ongoing maintenance, allowing you to focus on your core business while we manage your data center needs.",
    ],
    skills: [
      { name: "Managed Hosting", percentage: 95 },
      { name: "Colocation Services", percentage: 90 },
      { name: "Disaster Recovery", percentage: 88 },
      { name: "24/7 Monitoring", percentage: 92 },
      { name: "Data Security", percentage: 95 },
      { name: "Compliance Management", percentage: 90 },
    ],
  },
  {
    id: "erp-crm-solutions",
    img: icon12,
    title: "ERP & CRM Solutions",
    description: "User-centered product design and UX/UI development services to create intuitive, engaging digital products that delight your customers.",
    biography: [
      "Our ERP & CRM Solutions empower businesses to streamline operations, improve customer relationships, and enhance decision-making through centralized, intelligent systems.",
      "We provide fully customizable ERP and CRM platforms tailored to your workflows, enabling seamless integration across finance, sales, inventory, HR, and customer engagement processes.",
      "With automation, real-time analytics, and scalable architecture, our solutions help your organization boost productivity, reduce operational complexity, and deliver exceptional customer experiences.",
    ],
    skills: [
      { name: "ERP Implementation", percentage: 95 },
      { name: "CRM Customization", percentage: 92 },
      { name: "Workflow Automation", percentage: 90 },
      { name: "System Integration", percentage: 88 },
      { name: "Data Analytics & Reporting", percentage: 93 },
      { name: "User Training & Support", percentage: 90 },
    ],
  }
];

export default servicesData;
