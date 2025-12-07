import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';

const TopBar = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: Mail, value: 'hello@techvision.com', href: 'mailto:hello@techvision.com' },
    { icon: Phone, value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, value: 'San Francisco, CA', href: '#' }
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-dark-900/90 backdrop-blur-sm border-b border-white/10 py-2"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-2 sm:mb-0">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors text-sm"
              >
                <info.icon className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">{info.value}</span>
                <span className="xs:hidden">{info.value.split(' ')[0]}</span>
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-6 h-6 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors group"
              >
                <social.icon className="w-3 h-3 text-gray-400 group-hover:text-primary-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
