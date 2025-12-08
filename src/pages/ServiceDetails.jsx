import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, DollarSign, CheckCircle, Target, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import servicesData from '../data/servicesData.js';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = servicesData.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <button 
            onClick={() => navigate('/services')}
            className="btn-primary"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

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
    <section className="pt-20 pb-20 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/services')}
          className="mb-8 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Services</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Service Header */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Service Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h1>
                    <p className="text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="text-gray-300 leading-relaxed mb-6">
                  {service.biography.map((para, index) => (
                    <p key={index} className="mb-3">
                      {para}
                    </p>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="btn-primary">
                  Get Started
                </button>
              </div>

              {/* Service Image */}
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary-400" />
              Our Expertise
            </h2>
            <div className="space-y-4">
              {service.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-primary-400 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our {service.title.toLowerCase()} services can help transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  <Users className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </button>
                <button className="px-6 py-3 bg-white/10 rounded-lg font-medium text-white hover:bg-white/20 transition-colors border border-white/20">
                  View Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
