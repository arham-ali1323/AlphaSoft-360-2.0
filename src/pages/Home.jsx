import React from 'react';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Technology from '../components/Technology.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Technology />
      <Portfolio />
      <Testimonials />
    </div>
  );
};

export default Home;
