'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const commands = [
    '> skills --list',
    '',
    'Languages:',
    '  - Python',
    '  - JavaScript / TypeScript',
    '  - C++',
    '  - Bash',
    '',
    'Web Stack:',
    '  - React.js',
    '  - Next.js',
    '  - Django',
    '  - Tailwind CSS',
    '  - Framer Motion',
    '',
    'Backend & Databases:',
    '  - MongoDB',
    '  - PostgreSQL',
    '  - MySQL',
    '  - Supabase',
    '  - Neon',
    '',
    'AI & Machine Learning:',
    '  - OpenRouter API',
    '  - NewsAPI',
    '  - NLP Libraries',
    '  - AI Model Integration',
    '',
    'Extras:',
    '  - Three.js (3D Graphics)',
    '  - GSAP Animation',
    '  - SEO Optimization',
    '  - Content Strategy',
    '  - Social Media Growth',
    '  - Linux System Admin',
    '',
    '> Status: All systems operational ✓'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand(prev => {
        if (prev < commands.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayText(commands.slice(0, currentCommand + 1).join('\n'));
  }, [currentCommand]);

  return (
    <section className="py-8">
      <h2 className="text-3xl text-[#FFFF00] font-bold mb-4 text-center blink">
        ⚙️ SKILLS.EXE ⚙️
      </h2>
      
      <div className="border-2 border-[#00FF00] bg-[#000000] p-6 min-h-[400px] font-mono">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#00FF00]">
          <span className="text-[#FF0000]">●</span>
          <span className="text-[#FFFF00]">●</span>
          <span className="text-[#00FF00]">●</span>
          <span className="text-[#00FFFF] ml-2">C:\ADITYA\SKILLS&gt;</span>
        </div>
        
        <pre className="text-[#00FF00] text-sm md:text-base whitespace-pre-wrap">
          {displayText}
          <span className="blink">_</span>
        </pre>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[#00FFFF] text-sm">
          💡 Tip: These skills are backwards compatible with modern web standards
        </p>
      </div>
    </section>
  );
}
