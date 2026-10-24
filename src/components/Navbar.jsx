import React, { useState, useEffect } from 'react';
import { Menu, X, FileText} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', mobileOnly: false },
    { name: 'About', href: '#about', mobileOnly: false },
    { name: 'Projects', href: '#projects', mobileOnly: false },
    { name: 'Hackathons', href: '#hackathons', mobileOnly: true },
    { name: 'Experience', href: '#experience', mobileOnly: false },
    { name: 'Contact', href: '#contact', mobileOnly: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'hackathons', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopLinks = navLinks.filter(link => !link.mobileOnly);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-[#0A0A0F]/80 backdrop-blur-md py-4 border-b border-white/5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#6366F1] rounded-lg px-1 py-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#6366F1] to-[#22D3EE] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#6366F1]/20 group-hover:scale-105 transition-transform duration-200">
              AS
            </div>
            <span className="font-bold text-lg tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors">
              <span className="hidden sm:inline">Adesh Srivastava</span>
              <span className="sm:hidden">Adesh</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {desktopLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-[#22D3EE] bg-white/5 shadow-inner' 
                      : 'text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-white/[0.03]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold bg-[#6366F1] text-white hover:bg-[#6366F1]/90 shadow-md shadow-[#6366F1]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366F1]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden glass-nav border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 max-w-6xl mx-auto">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? 'text-[#22D3EE] bg-[#6366F1]/10 border-l-2 border-[#22D3EE]' 
                        : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-base font-semibold bg-[#6366F1] text-white hover:bg-[#6366F1]/90 shadow-lg shadow-[#6366F1]/20 transition-all active:scale-[0.98]"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
