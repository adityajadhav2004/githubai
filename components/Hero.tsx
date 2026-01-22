'use client';

import Marquee from './Marquee';

export default function Hero() {
  return (
    <section className="text-center py-8">
      {/* Marquee Banner */}
      <Marquee className="text-[#FF00FF] text-xl font-bold mb-4">
        🚀 Welcome to my homepage!!! 🚀 Under Construction 🚧 Best Viewed in Netscape Navigator 4.0 🌐
      </Marquee>

      {/* Main Title */}
      <div className="border-4 border-[#00FF00] p-6 bg-[#001f3f] mb-6">
        <pre className="neon-text text-2xl md:text-4xl font-bold mb-4">
{`
═══════════════════════════════════
    ADITYA JADHAV
    Web Developer | AI Builder
    Mumbai, India
═══════════════════════════════════
`}
        </pre>
        <p className="text-[#00FFFF] text-lg blink">★ Building the Future on a Dial-Up Connection ★</p>
      </div>

      {/* Badge Section */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%23000'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='10' fill='%2300FF00' text-anchor='middle'%3ENetscape Now!%3C/text%3E%3C/svg%3E"
          alt="Best Viewed in Netscape"
          className="border-2 border-[#00FF00]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%23FF00FF'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='10' fill='%23000' text-anchor='middle'%3EGeoCities%3C/text%3E%3C/svg%3E"
          alt="GeoCities"
          className="border-2 border-[#FF00FF]"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect width='88' height='31' fill='%2300FFFF'/%3E%3Ctext x='44' y='20' font-family='Arial' font-size='8' fill='%23000' text-anchor='middle' font-weight='bold'%3ELighthouse 95%2B%3C/text%3E%3C/svg%3E"
          alt="Lighthouse 95+"
          className="border-2 border-[#00FFFF]"
        />
      </div>

      {/* Quick Stats Table */}
      <table className="mx-auto mb-6">
        <thead>
          <tr className="bg-[#001f3f]">
            <th className="text-[#FFFF00] p-2" colSpan={2}>⚡ QUICK STATS ⚡</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[#00FFFF] p-2">🎓 Education:</td>
            <td className="text-[#00FF00] p-2">BTech ECS - 8.0 CGPA</td>
          </tr>
          <tr className="bg-[#001f3f]">
            <td className="text-[#00FFFF] p-2">📍 Location:</td>
            <td className="text-[#00FF00] p-2">Mumbai, India</td>
          </tr>
          <tr>
            <td className="text-[#00FFFF] p-2">💻 Specialties:</td>
            <td className="text-[#00FF00] p-2">React, Next.js, AI, Three.js</td>
          </tr>
          <tr className="bg-[#001f3f]">
            <td className="text-[#00FFFF] p-2">⚡ Performance:</td>
            <td className="text-[#00FF00] p-2">Lighthouse 99-100</td>
          </tr>
        </tbody>
      </table>

      {/* Animated GIF placeholder */}
      <div className="flex justify-center gap-4 flex-wrap">
        <span className="text-4xl blink">🔥</span>
        <span className="text-4xl blink" style={{ animationDelay: '0.3s' }}>⚡</span>
        <span className="text-4xl blink" style={{ animationDelay: '0.6s' }}>💻</span>
        <span className="text-4xl blink" style={{ animationDelay: '0.9s' }}>🚀</span>
      </div>
    </section>
  );
}
