'use client';

import { useState } from 'react';

interface ExperienceItem {
  id: number;
  company: string;
  period: string;
  icon: string;
  achievements: string[];
}

export default function Experience() {
  const [openFolder, setOpenFolder] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'BIGIMPEX',
      period: '2024 - Present',
      icon: '📁',
      achievements: [
        '✓ Created exhibition branding materials',
        '✓ 2x lead generation through strategic campaigns',
        '✓ Managed influencer marketing campaigns',
        '✓ Developed B2B analytics dashboards'
      ]
    },
    {
      id: 2,
      company: 'LATIM STEEL',
      period: '2023 - 2024',
      icon: '📁',
      achievements: [
        '✓ Wrote 50+ SEO-optimized articles',
        '✓ Improved rankings from Page 2 → Page 1',
        '✓ 40% increase in social media engagement',
        '✓ Established content marketing strategy'
      ]
    },
    {
      id: 3,
      company: 'KELUSKAR FITNESS',
      period: '2023',
      icon: '📁',
      achievements: [
        '✓ Local SEO domination achieved',
        '✓ 40%+ increase in gym footfall',
        '✓ Optimized landing pages for conversions',
        '✓ Google My Business optimization'
      ]
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl text-[#00FFFF] font-bold mb-4 text-center blink">
        💼 EXPERIENCE.DIR 💼
      </h2>
      
      <div className="border-2 border-[#00FF00] bg-[#001f3f] p-6">
        <div className="mb-4 flex items-center gap-2 pb-2 border-b border-[#00FF00]">
          <span className="text-[#FFFF00]">📂 My Computer</span>
          <span className="text-[#00FF00]">&gt;</span>
          <span className="text-[#FFFF00]">C:\</span>
          <span className="text-[#00FF00]">&gt;</span>
          <span className="text-[#00FFFF]">Experience</span>
        </div>

        <div className="space-y-3">
          {experiences.map((exp) => (
            <div key={exp.id} className="border border-[#00FF00] bg-[#000000]">
              <button
                onClick={() => setOpenFolder(openFolder === exp.id ? null : exp.id)}
                className="w-full text-left p-3 hover:bg-[#001f3f] transition-colors flex items-center gap-3"
              >
                <span className="text-2xl">{exp.icon}</span>
                <div className="flex-1">
                  <div className="text-[#00FF00] font-bold">{exp.company}</div>
                  <div className="text-[#00FFFF] text-sm">{exp.period}</div>
                </div>
                <span className="text-[#FFFF00]">
                  {openFolder === exp.id ? '▼' : '▶'}
                </span>
              </button>
              
              {openFolder === exp.id && (
                <div className="p-4 border-t border-[#00FF00] bg-[#000000]">
                  <div className="text-[#00FF00] space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-[#00FFFF]">•</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[#FFFF00] mt-4 text-sm">
        🖱️ Click folders to explore more details 🖱️
      </p>
    </section>
  );
}
