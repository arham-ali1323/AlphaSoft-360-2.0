import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Zap, Globe, Heart } from 'lucide-react';
import AnimatedTestimonials from './ui/AnimatedTestimonials.jsx';
import testimonials from '../data/testimonialsData.js';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'At our core, we prioritize innovation to drive measurable results and long-term success.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We build lasting partnerships with our clients, focusing on their growth and success.'
    },
    {
      icon: Zap,
      title: 'Scalable Solutions',
      description: 'Every digital product we create is designed to grow with your business needs.'
    },
    {
      icon: Heart,
      title: 'User-Centered Design',
      description: 'We put users at the center of everything we create, ensuring exceptional experiences.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'With 7+ years of experience, we serve clients across the globe with proven solutions.'
    },
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'Our commitment to excellence means never compromising on quality or integrity.'
    }
  ];

  const stats = [
    { number: '7+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '15+', label: 'Countries Served' }
  ];

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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>

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
            Empowering Business Growth Through <span className="gradient-text">Innovative Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With over 7 years of proven expertise in software development, our team excels in delivering high-performance web applications, IoT solutions, and seamless API integrations for clients across the globe.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Innovation, Scalability, and User-Focused Design
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                At our core, we prioritize innovation, scalability, and user-focused design — ensuring every digital product we create drives measurable results and long-term success for our partners.
              </p>
              <p>
                We stand firmly against complacency and compromise, driven by the belief that true progress emerges from clarity, integrity, and purpose. In a world often distracted by short-term gains, we remain focused on creating lasting impact through dedication, innovation, and thoughtful execution.
              </p>
              <p>
                Our vision isn't built on convenience — it's built on commitment: a commitment to excellence, continuous growth, and doing what's right, even when it's not easy.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl glass-effect"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Excellence & Commitment</h4>
                  <p className="text-gray-300">Building lasting impact through innovation</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2,
              }}
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Award className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about working with us.
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
