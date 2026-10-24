import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Bot, Code, Trophy, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'B.E. Information Technology',
      subtitle: 'Third-Year Student (SCOE)',
      accent: '#6366F1',
    },
    {
      icon: Bot,
      title: 'AI/ML Engineering',
      subtitle: 'Models, Pipelines & NLP',
      accent: '#22D3EE',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      subtitle: 'Django & React Integration',
      accent: '#6366F1',
    },
    {
      icon: Trophy,
      title: 'Hackathons & Building',
      subtitle: '8+ Competitions & Projects',
      accent: '#22D3EE',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#22D3EE]">About Me</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
            Bridging Machine Learning & Full-Stack Systems
          </h2>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 sm:p-8 mb-10 border border-white/10"
        >
          <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            I'm a third-year Information Technology student with a strong foundation in Machine Learning, Data Science, and Applied Mathematics. I build end-to-end ML pipelines, data-driven full-stack applications with Django and React, and enjoy solving real problems through hackathons and independent projects.
          </p>
        </motion.div>

        {/* 4-Item Highlight Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="glass-card glass-card-hover rounded-xl p-5 border border-white/10 flex items-start gap-4 group"
              >
                <div 
                  className="p-3 rounded-lg bg-white/[0.04] border border-white/5 transition-transform duration-200 group-hover:scale-110"
                  style={{ color: item.accent }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#F5F5F5] group-hover:text-[#22D3EE] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
