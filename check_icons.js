import fs from 'fs';
import * as lucide from 'lucide-react';

const files = ['Navbar', 'Hero', 'About', 'Skills', 'Projects', 'Hackathons', 'Experience', 'Certifications', 'Stats', 'Contact', 'Footer'];
files.forEach(f => {
  const content = fs.readFileSync('./src/components/' + f + '.jsx', 'utf8');
  const matches = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/g);
  if (matches) {
    matches.forEach(m => {
      const names = m.replace(/import\s+\{/, '').replace(/\}\s+from\s+['"]lucide-react['"]/, '').split(',').map(s => s.trim());
      names.forEach(n => {
        if (!n) return;
        if (!lucide[n]) console.log('MISSING ICON in ' + f + ':', n);
      });
    });
  }
});
