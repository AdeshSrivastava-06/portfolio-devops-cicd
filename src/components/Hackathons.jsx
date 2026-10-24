import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Rocket, Medal, Sparkles } from 'lucide-react';

const Hackathons = () => {
  const achievements = [
    {
      icon: Medal,
      badge: '3rd Place',
      title: 'AXION Intra-College Hackathon',
      date: 'March 2026',
      team: 'Team Gradient Descent',
      institution: 'SCOE Kharghar',
      accent: '#22D3EE',
    },
    {
      icon: Rocket,
      badge: 'Participant',
      title: 'CodeCrafters 3.0 Inter-College Hackathon',
      date: 'March 2026',
      team: 'Team VajraCore',
      institution: 'Inter-College Competition',
      accent: '#6366F1',
    },
    {
      icon: Trophy,
      badge: 'Winner',
      title: 'Idea of Impact: Innovation Challenge',
      date: '2025',
      team: 'Individual/Team Pitch',
      institution: 'SCOE',
      accent: '#22D3EE',
    },
    {
      icon: Award,
      badge: 'Certificate',
      title: 'IITBHU Haxplore Codefest 2026',
      date: '2026',
      team: 'Haxplore Participant',
      institution: 'IIT BHU',
      accent: '#6366F1',
    },
  ];

  return (
    <section id="hackathons" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#6366F1]" />
              <span className="text-xs uppercase font-bold tracking-widest text-[#22D3EE]">COMPETITIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
              Hackathons & Achievements
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111118] border border-[#6366F1]/30 text-[#22D3EE] font-bold text-sm shadow-md"
          >
            <Trophy className="w-4 h-4 text-[#6366F1]" />
            <span>8+ Hackathons Completed</span>
          </motion.div>
        </div>

        {/* Compact Scannable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card glass-card-hover rounded-xl p-5 border border-white/10 flex items-start gap-4"
              >
                <div 
                  className="p-3 rounded-lg bg-white/[0.04] border border-white/5 shrink-0"
                  style={{ color: item.accent }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white/[0.06] text-[#22D3EE] border border-white/10">
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#A1A1AA]">{item.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#F5F5F5] truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-1 truncate">
                    {item.team} • <span className="text-[#F5F5F5]/80">{item.institution}</span>
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

export default Hackathons;
