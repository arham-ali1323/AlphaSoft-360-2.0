import React from 'react';
import { motion } from 'framer-motion';
import { useScroll } from '../contexts/ScrollContext.jsx';

const Layout = ({ children }) => {
  const { isScrollingDown } = useScroll();

  return (
    <main 
      className={`transition-all duration-300 ${
        isScrollingDown ? 'pt-16' : 'pt-28'
      }`}
    >
      {children}
    </main>
  );
};

export default Layout;
