import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F5F5F5] font-['Inter',sans-serif] selection:bg-[#6366F1]/30 selection:text-[#22D3EE] relative overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Featured Projects */}
        <Projects />

        {/* 5. Hackathons & Achievements */}
        <Hackathons />

        {/* 6. Experience */}
        <Experience />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. By The Numbers */}
        <Stats />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}

export default App;
