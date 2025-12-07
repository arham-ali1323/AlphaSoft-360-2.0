import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, CheckCircle, AlertCircle, Lightbulb, Target, Code, Database, Globe, Smartphone, Cloud, Brain } from 'lucide-react';
import projects from '../data/projectsData.js';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/projects')}
            className="btn-primary"
          >
            Back to Projects
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

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'web': return <Globe className="w-5 h-5" />;
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'cloud': return <Cloud className="w-5 h-5" />;
      case 'ai': return <Brain className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status) => {
    return status === 'completed' ? 'text-green-400' : 'text-yellow-400';
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
          onClick={() => navigate('/projects')}
          className="mb-8 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Projects</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Project Header */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-white`}>
                    {getCategoryIcon(project.category)}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-1">
                      {project.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary-400 capitalize">{project.category}</span>
                      <span className={getStatusColor(project.status)}>
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <div>
                      <p className="text-xs text-gray-400">Year</p>
                      <p className="text-white font-medium">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-400" />
                    <div>
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="text-white font-medium">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary-400" />
                    <div>
                      <p className="text-xs text-gray-400">Team Size</p>
                      <p className="text-white font-medium">{project.teamSize} members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary-400" />
                    <div>
                      <p className="text-xs text-gray-400">Client</p>
                      <p className="text-white font-medium">{project.client}</p>
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-lg font-medium text-white hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* Project Preview */}
              <div>
                <div className="h-80 rounded-2xl overflow-hidden relative bg-gray-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <p className="text-lg font-semibold">Project Preview</p>
                      {project.liveDemo && (
                        <p className="text-sm opacity-90">{project.liveDemo}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-primary-400" />
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full border border-primary-500/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary-400" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-400" />
                Challenges
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                Solutions
              </h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Project Gallery/Showcase */}
          <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-primary-400" />
              Project Showcase
            </h2>
            <div className="text-center">
              <div className="w-full max-w-4xl mx-auto mb-6 rounded-2xl overflow-hidden bg-gray-800" style={{minHeight: '400px'}}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
              <p className="text-gray-400 mb-4">Interactive demo and screenshots available</p>
              {project.liveDemo && project.liveDemo !== 'Case study available' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Try Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
