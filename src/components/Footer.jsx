import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10 bg-[#0A0A0F]/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[#F5F5F5] tracking-tight">
              Adesh Srivastava
            </h3>
            <p className="text-xs text-[#A1A1AA] mt-1 font-medium">
              AI/ML Developer • Builder • Learner
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AdeshSrivastava-06"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#111118] border border-white/10 text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/adesh-srivastava-038a2037a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#111118] border border-white/10 text-[#A1A1AA] hover:text-[#6366F1] hover:border-[#6366F1]/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:adeshsrivastava250606@gmail.com"
              aria-label="Email Adesh Srivastava"
              className="p-2 rounded-lg bg-[#111118] border border-white/10 text-[#A1A1AA] hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[#A1A1AA] text-center md:text-right">
            <span>© 2026 Adesh Srivastava. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
