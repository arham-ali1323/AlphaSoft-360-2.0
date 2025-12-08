import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const AnimatedTestimonials = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 sm:py-12 overflow-x-hidden">
      <div className="relative h-[500px] sm:h-[450px] md:h-[400px] lg:h-[450px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center px-4"
          >
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 max-w-4xl mx-auto w-full">
              <div className="flex flex-col items-center gap-6 md:gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    <img
                      src={testimonials[activeIndex].src}
                      alt={testimonials[activeIndex].name}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary-500/30"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {/* Stars */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed italic">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <cite className="text-white font-semibold text-base sm:text-lg not-italic">
                        {testimonials[activeIndex].name}
                      </cite>
                      <div className="text-primary-400 text-sm sm:text-base mt-1">
                        {testimonials[activeIndex].designation}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-primary-500 w-8'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 -translate-x-0 sm:-translate-x-4 md:-translate-x-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
        aria-label="Previous testimonial"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 translate-x-0 sm:translate-x-4 md:translate-x-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
        aria-label="Next testimonial"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default AnimatedTestimonials;
