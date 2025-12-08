import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Layout from './components/Layout.jsx';
import { ScrollProvider } from './contexts/ScrollContext.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Team from './pages/Team.jsx';
import TeamMemberDetails from './pages/TeamMemberDetails.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import ServiceDetails from './pages/ServiceDetails.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router future={{ 
  v7_startTransition: true,
  v7_relativeSplatPath: true 
}}>
      <ScrollProvider>
        <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden w-full max-w-full">
          <TopBar />
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/:id" element={<TeamMemberDetails />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <Footer />
        </div>
      </ScrollProvider>
    </Router>
  );
}

export default App;
