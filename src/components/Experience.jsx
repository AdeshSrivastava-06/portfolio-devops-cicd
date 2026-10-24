import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, Sparkles } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'ML Engineering Intern',
      company: 'FlyRank AI',
      period: '2026',
      location: 'Remote',
      bullets: [
        'Worked on ML pipelines for a content-scoring and search-intelligence use case.',
        'Built and evaluated weekly ML assignments on real-world, high-dimensional datasets.',
        'Applied structured experimentation and analytics workflows to production-style data.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#22D3EE]">WORK EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
            Industry Experience
          </h2>
        </motion.div>

        {/* Timeline / Card */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/10 relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-[#6366F1]/15 text-[#22D3EE]">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#22D3EE] font-semibold pl-11">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0A0F] border border-white/10 text-xs sm:text-sm text-[#A1A1AA] self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-[#6366F1]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
