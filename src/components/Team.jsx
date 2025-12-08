import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import teamMembers from '../data/teamData.js';

const Team = () => {
  const navigate = useNavigate();

  const handleMemberClick = (memberId) => {
    navigate(`/team/${memberId}`);
  };

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
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

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
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The talented individuals behind our success, dedicated to delivering excellence
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.slice(0, 4).map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Team Member Card */}
              <div className="glass-effect rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Name & Position */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 text-sm font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-sm mb-4 text-center leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors group/link"
                    >
                      <Linkedin className="w-4 h-4 text-gray-400 group-hover/link:text-primary-400" />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors group/link"
                    >
                      <Github className="w-4 h-4 text-gray-400 group-hover/link:text-primary-400" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500/20 transition-colors group/link"
                  >
                    <Mail className="w-4 h-4 text-gray-400 group-hover/link:text-primary-400" />
                  </a>
                </div>

                {/* Click hint */}
                <div className="text-center mt-4">
                  <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence
            </p>
            <button className="btn-primary">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
