import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Send } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-r from-[#6366F1]/15 to-[#22D3EE]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm font-medium text-[#22D3EE] mb-4">
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F5] mb-4">
            Let's Build Something.
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
            I'm open to ML engineering roles, full-stack development opportunities, hackathon collaborations, and innovative tech projects.
          </p>
        </motion.div>

        {/* Action Button & Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <a
            href="mailto:adeshsrivastava250606@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#6366F1] to-[#22D3EE] hover:from-[#4F46E5] hover:to-[#06B6D4] shadow-xl shadow-[#6366F1]/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
            <Send className="w-4 h-4 opacity-80" />
          </a>

          <span className="text-sm text-[#A1A1AA]">
            adeshsrivastava250606@gmail.com
          </span>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://github.com/AdeshSrivastava-06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111118] border border-white/10 text-sm font-medium text-[#A1A1AA] hover:text-white hover:border-[#6366F1] transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/adesh-srivastava-038a2037a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111118] border border-white/10 text-sm font-medium text-[#A1A1AA] hover:text-white hover:border-[#22D3EE] transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
