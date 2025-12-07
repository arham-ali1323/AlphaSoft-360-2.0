import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Star, Clock, Shield, Zap } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqCategories = [
    {
      title: 'General Questions',
      icon: HelpCircle,
      questions: [
        {
          question: 'What services does TechVision offer?',
          answer: 'We offer comprehensive IT solutions including web development, mobile app development, cloud solutions, AI & machine learning, cybersecurity, and data analytics.'
        },
        {
          question: 'How long has TechVision been in business?',
          answer: 'TechVision has been pioneering digital transformation since 2010, with over a decade of experience in delivering innovative solutions.'
        },
        {
          question: 'Do you work with startups and enterprises?',
          answer: 'Yes, we work with businesses of all sizes from startups to Fortune 500 companies, providing tailored solutions for each client\'s unique needs.'
        }
      ]
    },
    {
      title: 'Process & Timeline',
      icon: Clock,
      questions: [
        {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on complexity. Simple websites may take 4-6 weeks, while complex enterprise solutions can take 3-6 months or more.'
        },
        {
          question: 'What is your development process?',
          answer: 'We follow an agile methodology with regular sprints, client feedback sessions, and iterative development to ensure the best results.'
        },
        {
          question: 'How do you ensure project quality?',
          answer: 'We have comprehensive QA processes, code reviews, automated testing, and client acceptance testing to ensure high-quality deliverables.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      icon: Star,
      questions: [
        {
          question: 'How do you price your projects?',
          answer: 'We offer flexible pricing models including fixed-price, time & materials, and dedicated team models based on project requirements.'
        },
        {
          question: 'Do you require upfront payment?',
          answer: 'Typically, we require 30% upfront, with milestone-based payments throughout the project lifecycle.'
        },
        {
          question: 'Do you offer maintenance services?',
          answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your applications run smoothly after launch.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: Shield,
      questions: [
        {
          question: 'What kind of support do you provide?',
          answer: 'We provide 24/7 support for critical issues, business hours support for standard requests, and dedicated account managers for enterprise clients.'
        },
        {
          question: 'Do you provide training?',
          answer: 'Yes, we provide comprehensive training for your team on how to use and manage the solutions we deliver.'
        },
        {
          question: 'What technologies do you specialize in?',
          answer: 'We specialize in React, Node.js, Python, cloud platforms (AWS, Azure, GCP), and emerging technologies like AI/ML and blockchain.'
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const newIndex = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === newIndex ? null : newIndex);
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
    <section className="py-20 relative overflow-hidden">
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
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and pricing
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8 border border-white/10"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const isActive = activeIndex === `${categoryIndex}-${questionIndex}`;
                  return (
                    <motion.div
                      key={questionIndex}
                      className="border border-white/10 rounded-lg overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <span className="text-white font-medium pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary-400 transition-transform duration-300 ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: isActive ? 'auto' : 0,
                          opacity: isActive ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 text-gray-300 border-t border-white/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
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
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-12 h-12 text-primary-400 mr-4" />
              <h3 className="text-3xl font-bold text-white">
                Still have questions?
              </h3>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <button className="btn-primary">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
