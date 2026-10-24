import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Briefcase, GraduationCap } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      label: 'Hackathons',
      value: '8+',
      icon: Trophy,
      accent: '#22D3EE',
    },
    {
      label: 'Projects Built',
      value: '5',
      icon: Code2,
      accent: '#6366F1',
    },
    {
      label: 'Internship',
      value: '1',
      icon: Briefcase,
      accent: '#22D3EE',
    },
    {
      label: 'CGPA',
      value: '9.67',
      icon: GraduationCap,
      accent: '#6366F1',
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl bg-gradient-to-r from-[#111118] via-[#111118] to-[#6366F1]/10">
          
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#22D3EE]">BY THE NUMBERS</span>
          </div>

          {/* Grid: 4 cols desktop -> 2 cols mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.02] border border-white/5"
                >
                  <div 
                    className="p-2.5 rounded-lg bg-white/[0.04] mb-3"
                    style={{ color: stat.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F5] tracking-tight mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#A1A1AA] text-center">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
