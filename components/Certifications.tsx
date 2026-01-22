'use client';

export default function Certifications() {
  const certifications = [
    {
      name: 'Google Cloud Professional',
      provider: 'Google Cloud',
      icon: '☁️',
      color: '#00FF00'
    },
    {
      name: 'AWS Solutions Architecture',
      provider: 'Forage',
      icon: '🏗️',
      color: '#00FFFF'
    },
    {
      name: 'Automation & Testing',
      provider: 'Udemy',
      icon: '🤖',
      color: '#FF00FF'
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl text-[#00FF00] font-bold mb-4 text-center blink">
        🏆 BADGES.SYS 🏆
      </h2>
      
      <div className="border-2 border-[#00FF00] bg-[#001f3f] p-6">
        <p className="text-[#FFFF00] text-center mb-6 text-sm">
          ═══════ ACHIEVEMENT UNLOCKED ═══════
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="border-4 bg-[#000000] p-6 text-center hover:scale-105 transition-transform"
              style={{ borderColor: cert.color }}
            >
              <div className="text-6xl mb-3">{cert.icon}</div>
              <h3 
                className="font-bold mb-2 text-sm"
                style={{ color: cert.color }}
              >
                {cert.name}
              </h3>
              <p className="text-[#00FF00] text-xs">
                Issued by: {cert.provider}
              </p>
              <div className="mt-4">
                <span 
                  className="text-xs border px-3 py-1 inline-block"
                  style={{ borderColor: cert.color, color: cert.color }}
                >
                  VERIFIED ✓
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[#00FFFF] text-sm">
            💎 Collecting more achievements... Check back soon! 💎
          </p>
        </div>
      </div>
    </section>
  );
}
