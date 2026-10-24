import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 relative">
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
            <span className="text-xs uppercase font-bold tracking-widest text-[#22D3EE]">CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F5F5F5]">
            Certifications
          </h2>
        </motion.div>

        {/* Clean Single Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/10 border border-[#6366F1]/30 text-[#22D3EE] shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
                <span className="text-xs font-semibold text-[#22D3EE] uppercase tracking-wider">Oracle Certified</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5]">
                Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
              </h3>
              <p className="text-sm text-[#A1A1AA] mt-1">
                Issued by Oracle Corporation • <span className="text-[#F5F5F5]/80">October 2025</span>
              </p>
            </div>
          </div>

          <a
            href="https://mylearn.oracle.com/ou/learning-path/become-an-oci-ai-foundations-associate-2025/137976"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#0A0A0F] text-[#F5F5F5] border border-white/10 hover:border-[#6366F1] hover:text-[#22D3EE] transition-all duration-200 shrink-0 self-start sm:self-auto"
          >
            <span>View Credential</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
