import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      avatar: 'SJ',
      content: 'TechVision transformed our business with their innovative solutions. Their team\'s expertise and dedication helped us achieve digital excellence.',
      rating: 5,
      project: 'E-Commerce Platform',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'FinanceFlow',
      avatar: 'MC',
      content: 'Outstanding service and technical excellence. They delivered our fintech app ahead of schedule with exceptional quality.',
      rating: 5,
      project: 'Mobile Banking App',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Product Manager',
      company: 'HealthTech Solutions',
      avatar: 'ER',
      content: 'The team went above and beyond to understand our healthcare needs. Their solution has revolutionized our patient management.',
      rating: 5,
      project: 'Healthcare System',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Founder',
      company: 'CloudScale',
      avatar: 'DK',
      content: 'TechVision\'s cloud migration expertise saved us months of work. Zero downtime and perfect execution.',
      rating: 5,
      project: 'Cloud Migration',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      position: 'Marketing Director',
      company: 'RetailMax',
      avatar: 'JT',
      content: 'Their AI-powered analytics dashboard has transformed how we make business decisions. Incredible ROI!',
      rating: 5,
      project: 'Analytics Platform',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      name: 'Robert Wilson',
      position: 'Operations Manager',
      company: 'SmartHome Co.',
      avatar: 'RW',
      content: 'The IoT solution they built for us is cutting-edge. Our customers love the seamless experience.',
      rating: 5,
      project: 'IoT Platform',
      gradient: 'from-cyan-500 to-blue-500'
    }
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

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
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              {/* Testimonial Card */}
              <div className="glass-effect rounded-2xl p-6 h-full border border-white/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary-500/20">
                {/* Quote Icon */}
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <span className="text-xs text-primary-400 uppercase tracking-wider">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold`}>
                      {testimonial.avatar}
                    </div>
                    
                    {/* Name & Position */}
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  4.9/5
                </div>
                <div className="text-gray-400 mb-2">Average Rating</div>
                <div className="flex justify-center gap-1">
                  {renderStars(5)}
                </div>
              </div>
              
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  500+
                </div>
                <div className="text-gray-400">
                  Happy Clients
                </div>
              </div>
              
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  98%
                </div>
                <div className="text-gray-400">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-4">
            Ready to join our list of satisfied clients?
          </p>
          <button className="btn-primary">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
