import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkflowSection from './components/WorkflowSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WorkflowSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
