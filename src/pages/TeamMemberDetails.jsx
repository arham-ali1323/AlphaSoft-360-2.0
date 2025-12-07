import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import teamMembers from '../data/teamData.js';

const TeamMemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const member = teamMembers.find(m => m.id === id);
  
  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Team Member Not Found</h1>
          <button 
            onClick={() => navigate('/team')}
            className="btn-primary"
          >
            Back to Team
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
          onClick={() => navigate('/team')}
          className="mb-8 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Team</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="glass-effect rounded-2xl p-8 border border-white/10 sticky top-24">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {member.name}
                </h1>
                <p className="text-primary-400 text-lg font-medium">
                  {member.role}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <a href={`mailto:${member.contact.email}`} className="hover:text-white transition-colors">
                    {member.contact.email}
                  </a>
                </div>
                {member.contact.phone && (
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <a href={`tel:${member.contact.phone}`} className="hover:text-white transition-colors">
                      {member.contact.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-6 border-t border-white/10">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary-400" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-400 hover:text-primary-400" />
                  </a>
                )}
                {member.socials.portfolio && (
                  <a
                    href={member.socials.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400 hover:text-primary-400" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {member.bio}
              </p>
              {member.biography && (
                <div className="space-y-3">
                  {member.biography.map((para, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="glass-effect rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
              <div className="space-y-4">
                {member.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            {member.education && (
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    {member.education.degree}
                  </h3>
                  {member.education.institution && (
                    <p className="text-gray-300">
                      {member.education.institution}
                    </p>
                  )}
                  {member.education.status && (
                    <p className="text-primary-400 text-sm">
                      {member.education.status}
                    </p>
                  )}
                  {member.education.year && (
                    <p className="text-primary-400 text-sm">
                      {member.education.year}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Experience */}
            {member.experience && (
              <div className="glass-effect rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
                <div className="space-y-6">
                  {member.experience.map((exp, index) => (
                    <div key={index} className="border-l border-primary-500/30 pl-6">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.duration}</p>
                      </div>
                      {exp.details && (
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {exp.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMemberDetails;
