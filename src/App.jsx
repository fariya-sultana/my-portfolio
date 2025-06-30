import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';
// import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* <ParticleBackground /> */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Services/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;