'use client';

import Marquee from './Marquee';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  links?: {
    live?: string;
    github?: string;
  };
  icon: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'STOCK PREDICTION AI',
      icon: '🧠',
      description: 'AI-powered stock market prediction system',
      tech: ['OpenRouter', 'NewsAPI', 'Python', 'AI Logic'],
      features: [
        'Real-time market data analysis',
        'AI-driven buy/sell insights',
        'News sentiment analysis',
        'Predictive modeling'
      ],
      links: {
        github: '#'
      }
    },
    {
      title: 'GARUDA AI SEARCH',
      icon: '🌐',
      description: 'Next-gen AI contextual search engine',
      tech: ['Next.js', 'AI', 'Glassmorphism', 'TypeScript'],
      features: [
        'Lighthouse Score: 99',
        'AI-powered contextual search',
        'Modern glassmorphic UI',
        'Ultra-fast performance'
      ],
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'SOLICITATION OF GRAVITY',
      icon: '🌍',
      description: 'Interactive physics simulation',
      tech: ['Three.js', 'WebGL', 'Physics Engine', 'React'],
      features: [
        'Earth/Moon/Mars gravity sims',
        'Real-time 3D rendering',
        'Interactive controls',
        'Educational physics model'
      ],
      links: {
        live: '#'
      }
    },
    {
      title: 'SHIVA AI ASSISTANT',
      icon: '🤖',
      description: 'Voice-activated AI assistant',
      tech: ['Python', 'NLP', 'GUI', 'Speech Recognition'],
      features: [
        'Natural language processing',
        'Voice command execution',
        'Custom GUI interface',
        'Task automation'
      ],
      links: {
        github: '#'
      }
    },
    {
      title: 'PERSONAL PORTFOLIO',
      icon: '💼',
      description: 'High-performance portfolio site',
      tech: ['Next.js', 'GSAP', 'Framer Motion', 'Tailwind'],
      features: [
        'Lighthouse 100/100',
        'Smooth animations',
        'Performance-first design',
        'Modern UI/UX'
      ],
      links: {
        live: '#'
      }
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl text-[#FF00FF] font-bold mb-4 text-center blink">
        🚀 PROJECTS.ZIP 🚀
      </h2>
      
      <Marquee className="text-[#FFFF00] mb-4">
        ⭐ Featured Projects - Click to explore! ⭐
      </Marquee>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <div 
            key={idx}
            className="border-4 border-[#00FF00] bg-[#000000] p-4 hover:border-[#00FFFF] transition-colors"
          >
            {/* Project Header */}
            <div className="border-b-2 border-[#00FF00] pb-2 mb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl">{project.icon}</span>
                <h3 className="text-[#00FF00] font-bold text-lg neon-text">
                  {project.title}
                </h3>
              </div>
              <p className="text-[#00FFFF] text-sm">{project.description}</p>
            </div>

            {/* Tech Stack */}
            <div className="mb-3">
              <p className="text-[#FFFF00] text-xs font-bold mb-1">TECH STACK:</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs border border-[#00FF00] text-[#00FF00] px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-3">
              <p className="text-[#FFFF00] text-xs font-bold mb-1">FEATURES:</p>
              <ul className="text-[#00FFFF] text-xs space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>▸ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex gap-2 mt-4">
                {project.links.live && (
                  <button className="text-xs px-3 py-1 bg-[#00FF00] text-[#000000] font-bold hover:bg-[#00FFFF]">
                    [ DEMO ]
                  </button>
                )}
                {project.links.github && (
                  <button className="text-xs px-3 py-1 border border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000]">
                    [ CODE ]
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center border-2 border-[#FFFF00] bg-[#001f3f] p-4">
        <p className="text-[#FFFF00] text-sm">
          🌟 More projects available on GitHub - Each built with performance & creativity in mind! 🌟
        </p>
      </div>
    </section>
  );
}
