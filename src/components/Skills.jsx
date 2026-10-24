import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Calculator, 
  Globe, 
  Database, 
  Wrench,
  Sparkles
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      icon: Code2,
      accent: '#6366F1',
      skills: ['Python', 'C', 'JavaScript'],
    },
    {
      category: 'ML & Data Science',
      icon: Cpu,
      accent: '#22D3EE',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'EDA', 'Feature Engineering', 'Data Visualization', 'PyTorch'],
    },
    {
      category: 'Math',
      icon: Calculator,
      accent: '#6366F1',
      skills: ['Statistics', 'Probability', 'Linear Algebra'],
    },
    {
      category: 'Web & Backend',
      icon: Globe,
      accent: '#22D3EE',
      skills: ['Django', 'Django REST Framework', 'React.js', 'REST API Design', 'FastAPI'],
    },
    {
      category: 'Databases',
      icon: Database,
      accent: '#6366F1',
      skills: ['MySQL', 'MongoDB', 'SQLite'],
    },
    {
      category: 'Tools & Infrastructure',
      icon: Wrench,
      accent: '#22D3EE',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Oracle Cloud Infrastructure (OCI)', 'AWS', 'Docker'],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#6366F1] flex-shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider sm:tracking-widest text-[#22D3EE]">
              Skills &amp; Technical Proficiency
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
            Toolkit &amp; Competencies
          </h2>
        </motion.div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((cat, catIdx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.08 * catIdx }}
                className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-white/10 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5 flex-shrink-0"
                    style={{ color: cat.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-[#F5F5F5]">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0A0A0F] text-[#F5F5F5] border border-white/10 hover:border-[#6366F1]/50 hover:text-[#22D3EE] transition-all duration-200 whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;