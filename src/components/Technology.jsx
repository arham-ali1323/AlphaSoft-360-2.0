import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Palette, Server, Smartphone, Terminal, Globe } from 'lucide-react';

const Technology = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Globe },
    { id: 'frontend', name: 'Frontend', icon: Palette },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'database', name: 'Database', icon: Database }
  ];

  const technologies = {
    all: [
      { name: 'React', category: 'frontend', level: 95, color: 'from-cyan-400 to-blue-500' },
      { name: 'Vue.js', category: 'frontend', level: 90, color: 'from-green-400 to-emerald-500' },
      { name: 'Angular', category: 'frontend', level: 85, color: 'from-red-400 to-pink-500' },
      { name: 'Node.js', category: 'backend', level: 95, color: 'from-green-500 to-emerald-600' },
      { name: 'Python', category: 'backend', level: 90, color: 'from-blue-400 to-indigo-500' },
      { name: 'Java', category: 'backend', level: 85, color: 'from-orange-400 to-red-500' },
      { name: 'React Native', category: 'mobile', level: 90, color: 'from-cyan-400 to-blue-500' },
      { name: 'Flutter', category: 'mobile', level: 85, color: 'from-blue-400 to-indigo-500' },
      { name: 'AWS', category: 'cloud', level: 95, color: 'from-orange-400 to-yellow-500' },
      { name: 'Azure', category: 'cloud', level: 85, color: 'from-blue-400 to-cyan-500' },
      { name: 'Docker', category: 'cloud', level: 90, color: 'from-blue-500 to-cyan-600' },
      { name: 'Kubernetes', category: 'cloud', level: 80, color: 'from-blue-600 to-indigo-600' },
      { name: 'MongoDB', category: 'database', level: 90, color: 'from-green-500 to-emerald-600' },
      { name: 'PostgreSQL', category: 'database', level: 95, color: 'from-blue-400 to-indigo-500' },
      { name: 'MySQL', category: 'database', level: 90, color: 'from-orange-400 to-yellow-500' },
      { name: 'Redis', category: 'database', level: 85, color: 'from-red-400 to-pink-500' },
    ]
  };

  const filteredTech = activeCategory === 'all' 
    ? technologies.all 
    : technologies.all.filter(tech => tech.category === activeCategory);

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
    <section id="technology" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

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
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                  : 'glass-effect text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 border border-white/10 hover:border-primary-500/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  {tech.level}%
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {tech.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                />
              </div>

              {/* Category Badge */}
              <div className="mt-4">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Always Evolving, Always Learning
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We continuously update our technology stack to stay ahead of industry trends and 
              deliver the most innovative solutions to our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Code2 className="w-5 h-5 text-primary-400" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Server className="w-5 h-5 text-primary-400" />
                <span>Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Cloud className="w-5 h-5 text-primary-400" />
                <span>Cloud-Native</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
