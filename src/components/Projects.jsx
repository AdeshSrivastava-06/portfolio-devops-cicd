import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderGit2, Calendar } from 'lucide-react';
import { Github } from './SocialIcons';

const Projects = () => {
  const projects = [
    {
      title: 'TechSentry Intelligence Platform',
      timeline: 'Apr 2026 – Present',
      badge: 'Defence Intelligence • DRDO',
      description: [
        'Full-stack tech intelligence platform for DRDO (Django REST + React) ',
        '\n Topic modeling & LLMs to surface research hotspots, estimate TRL',
        '\n Semantic search across OpenAlex, CrossRef, and patent data',
      ],
      tags: ['Django', 'React', 'LLMs', 'Patent APIs', 'Topic Modeling', 'OpenAlex', 'Semantic Embeddings'],
      github: 'https://github.com/AdeshSrivastava-06/TechSentry',
      featured: true,
    },
    {
      title: 'ScoreScope-AI',
      timeline: 'Feb 2026',
      badge: 'ML Score Analytics',
      description: [
        'Student score analytics platform with CSV upload (Django)',
        'RandomForest + GradientBoosting to flag weak topics',
        'Turns exam trends into personalized study insights',
      ],
      tags: ['Django', 'Python', 'Scikit-learn', 'RandomForest', 'GradientBoosting', 'Analytics'],
      github: 'https://github.com/AdeshSrivastava-06/ScoreScope-AI',
      live: null,
      featured: false,
    },
    {
      title: 'Sentiment Analysis of eConsultation Comments',
      timeline: 'Jan – Feb 2025',
      badge: 'NLP & Text Classification',
      description: [
        'Django app classifying stakeholder feedback (Hugging Face)',
        'Auto-summarizes large comment volumes',
        'Word cloud + NLTK for fast insight extraction',
      ],
      tags: ['Django', 'NLP', 'Hugging Face', 'Transformers', 'NLTK', 'WordCloud', 'Python'],
      github: 'https://github.com/AdeshSrivastava-06/sentiment-analysis',
      live: null,
      featured: false,
    },
  ];

  

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
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
            <span className="text-xs uppercase font-bold tracking-widest text-[#22D3EE]">PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid: 2 cols desktop -> 1 col mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between ${
                project.featured ? 'lg:col-span-2 bg-gradient-to-br from-[#111118] via-[#111118] to-[#6366F1]/10 border-[#6366F1]/30' : ''
              }`}
            >
              <div>
                {/* Card Top Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#6366F1]/15 text-[#22D3EE] border border-[#6366F1]/30">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    {project.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[#A1A1AA]">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.timeline}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#22D3EE] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#0A0A0F] text-[#A1A1AA] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links Row */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5F5F5] hover:text-[#22D3EE] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#22D3EE] hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
