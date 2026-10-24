import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    // Triggers contact or download section
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-grid-pattern">
      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-[#6366F1]/20 to-[#22D3EE]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-[#6366F1]/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-[#22D3EE] mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#6366F1]" />
          <span>AI/ML Developer</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
        </motion.div>

        {/* Main Heading - Stacked on Mobile */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F5F5F5] mb-6 leading-[1.15]"
        >
          <span className="block sm:inline">Hi, I'm </span>
          <span className="bg-gradient-to-r from-[#F5F5F5] via-[#22D3EE] to-[#6366F1] bg-clip-text text-transparent block sm:inline">
            Adesh Srivastava
          </span>
        </motion.h1>

        {/* Short Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          Building practical AI solutions and full-stack applications with machine learning, data intelligence, and modern web frameworks.
        </motion.p>

        {/* CTA Buttons - Full width & stacked on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6366F1] to-[#4F46E5] hover:from-[#4F46E5] hover:to-[#6366F1] shadow-lg shadow-[#6366F1]/25 hover:shadow-[#6366F1]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onClick={handleDownloadResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#F5F5F5] bg-[#111118] border border-white/10 hover:border-[#6366F1]/50 hover:bg-white/[0.04] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-[#22D3EE]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/AdeshSrivastava-06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl bg-[#111118] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-[#6366F1]/50 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/adesh-srivastava-038a2037a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl bg-[#111118] border border-white/10 text-[#A1A1AA] hover:text-white hover:border-[#22D3EE]/50 hover:bg-white/[0.04] transition-all duration-200 hover:-translate-y-1"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;