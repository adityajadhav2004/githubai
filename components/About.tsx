'use client';

export default function About() {
  return (
    <section className="py-8">
      <h2 className="text-3xl text-[#FF00FF] font-bold mb-4 text-center blink">
        🌟 ABOUT.TXT 🌟
      </h2>
      
      <div className="border-2 border-[#00FF00] p-6 bg-[#000000]">
        <pre className="text-[#00FF00] text-sm md:text-base whitespace-pre-wrap font-mono">
{`╔═══════════════════════════════════════════════════╗
║              USER INFORMATION FILE                ║
╚═══════════════════════════════════════════════════╝

NAME:         Aditya Jadhav
CLASS:        Web Developer
ALIGNMENT:    Chaotic Good
LOCATION:     Mumbai, India
STATUS:       Currently Accepting Quests

BIOGRAPHY:
───────────────────────────────────────────────────

I build high-performance web applications,
AI-powered tools, and experimental interfaces
using React, Next.js, Python, and Three.js.

My philosophy:
• Performance is a feature, not an afterthought
• Design should tell stories
• The web should be fun again
• Modern tech deserves vintage aesthetics

Currently working on bridging the gap between
1997 aesthetics and 2025 performance standards.

ACHIEVEMENTS UNLOCKED:
✓ Turned a steel company's blog into page 1 rankings
✓ Made AI predict stock market moves
✓ Built physics simulations in the browser
✓ Achieved perfect Lighthouse scores
✓ Mastered the ancient art of marquee tags

FUN FACTS:
• I believe in writing clean code
• Linux power user since 2020
• Can debug in my sleep
• Coffee-to-code conversion rate: 1:1000

STATUS: Online | Ready to collaborate
MOOD: Optimistic | Caffeinated
═══════════════════════════════════════════════════`}
        </pre>
      </div>

      <p className="text-center text-[#00FFFF] mt-4 text-sm">
        💾 Last Updated: {new Date().toLocaleDateString()} 💾
      </p>
    </section>
  );
}
