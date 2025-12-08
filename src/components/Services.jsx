import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Smartphone, Globe, Cpu, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import servicesData from '../data/servicesData.js';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive IT solutions tailored to meet your unique business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Card */}
              <div className="glass-effect rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary-500/20 border border-white/10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Skills Preview */}
                <div className="space-y-2">
                  {service.skills.slice(0, 3).map((skill, idx) => (
                    <div key={idx} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-primary-600/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Click Hint */}
                <div className="absolute bottom-4 left-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click for details
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We specialize in creating tailored solutions that address your specific business challenges
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-primary"
            >
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
