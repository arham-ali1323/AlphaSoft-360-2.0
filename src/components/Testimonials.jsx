import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import AnimatedTestimonials from './ui/AnimatedTestimonials.jsx';
import testimonials from '../data/testimonialsData.js';

const Testimonials = () => {
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

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} />

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
