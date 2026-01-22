'use client';

import { useState, useEffect } from 'react';
import Marquee from './Marquee';

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor counter
    const count = Math.floor(Math.random() * 999999) + 100000;
    setVisitorCount(count);
  }, []);

  return (
    <footer className="py-8 mt-8 border-t-4 border-[#00FF00]">
      {/* Visitor Counter */}
      <div className="flex justify-center mb-6">
        <div className="border-4 border-[#FF00FF] bg-[#000000] p-4 text-center">
          <p className="text-[#00FFFF] text-xs mb-2">VISITOR COUNTER</p>
          <div className="bg-[#001f3f] border-2 border-[#00FF00] px-4 py-2">
            <span className="text-[#00FF00] font-bold text-2xl neon-text font-mono">
              {visitorCount.toString().padStart(6, '0')}
            </span>
          </div>
          <p className="text-[#FFFF00] text-xs mt-2">You are visitor #{visitorCount}</p>
        </div>
      </div>

      {/* Retro Badges Row */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%23000'/%3E%3Ctext x='44' y='20' font-family='monospace' font-size='9' fill='%2300FF00' text-anchor='middle'%3EBest Viewed%3C/text%3E%3Ctext x='44' y='28' font-family='monospace' font-size='7' fill='%2300FF00' text-anchor='middle'%3ENetscape 4.0%3C/text%3E%3C/svg%3E"
          alt="Best Viewed in Netscape"
        />
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%23FF00FF'/%3E%3Ctext x='44' y='20' font-family='monospace' font-size='10' fill='%23000' font-weight='bold' text-anchor='middle'%3EGeoCities%3C/text%3E%3C/svg%3E"
          alt="GeoCities"
        />
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%2300FFFF'/%3E%3Ctext x='44' y='15' font-family='monospace' font-size='8' fill='%23000' font-weight='bold' text-anchor='middle'%3EHTML 3.2%3C/text%3E%3Ctext x='44' y='25' font-family='monospace' font-size='8' fill='%23000' font-weight='bold' text-anchor='middle'%3ECOMPLIANT%3C/text%3E%3C/svg%3E"
          alt="HTML 3.2"
        />
      </div>

      {/* Under Construction Banner */}
      <Marquee className="text-[#FFFF00] mb-4">
        🚧 UNDER CONSTRUCTION 🚧 NEW FEATURES COMING SOON 🚧 LAST UPDATED: 1999 🚧
      </Marquee>

      {/* Copyright */}
      <div className="text-center">
        <pre className="text-[#00FF00] text-xs mb-3 inline-block">
{`
┌────────────────────────────────────┐
│  Made with ❤️ and bad decisions   │
│  © 1997-2025 Aditya Jadhav        │
│  All wrongs reserved              │
└────────────────────────────────────┘
`}
        </pre>
        
        <p className="text-[#00FFFF] text-xs mb-2">
          Powered by: React 19 + Next.js 16 + Tailwind CSS
        </p>
        
        <p className="text-[#FF00FF] text-xs blink">
          ⚡ Modern Code. Vintage Internet. ⚡
        </p>
      </div>

      {/* Easter Egg Hint */}
      <div className="mt-6 text-center">
        <p className="text-[#FFFF00] text-xs opacity-50">
          💡 Hint: Try the Konami Code for a surprise... (↑ ↑ ↓ ↓ ← → ← → B A)
        </p>
      </div>
    </footer>
  );
}
