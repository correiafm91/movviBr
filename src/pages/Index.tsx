
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectTypes from '../components/ProjectTypes';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectTypes />
        <Stats />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
