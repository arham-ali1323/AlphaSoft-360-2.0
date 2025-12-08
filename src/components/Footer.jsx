import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'AI & ML', href: '#services' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: Mail, value: 'alphasoft360@gmail.com', href: 'mailto:alphasoft360@gmail.com' },
    { icon: Phone, value: '+92 370 4857471', href: 'tel:+923704857471' },
    { icon: MapPin, value: 'Main Pakavenue Rd, Sahiwal, 57000, Pakistan', href: 'https://maps.google.com/?q=Main+Pakavenue+Rd+Sahiwal+57000+Pakistan' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <footer className="relative bg-dark-900 border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-dark-800"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {/* Company Info */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h2 className="text-3xl font-bold gradient-text mb-4">TechVision</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Transforming businesses through innovative technology solutions. 
                  We build the future, one line of code at a time.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <info.icon className="w-4 h-4 mr-3" />
                    <span className="text-sm">{info.value}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors group"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                variants={itemVariants}
              >
                <h3 className="text-white font-semibold mb-4 capitalize">
                  {category === 'company' ? 'Company' : category === 'services' ? 'Services' : category === 'resources' ? 'Resources' : 'Legal'}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        smooth={true}
                        duration={800}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-sm cursor-pointer"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    Stay Updated
                  </h3>
                  <p className="text-gray-300">
                    Subscribe to our newsletter for the latest updates and insights.
                  </p>
                </div>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                  <button className="btn-primary">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 TechVision. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-gray-400 text-sm">
                  Made with ❤️ by TechVision Team
                </div>
                
                {/* Back to Top Button */}
                <Link
                  to="home"
                  smooth={true}
                  duration={800}
                  className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center hover:bg-primary-500/30 transition-colors cursor-pointer group"
                >
                  <ArrowUp className="w-5 h-5 text-primary-400 group-hover:text-primary-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
