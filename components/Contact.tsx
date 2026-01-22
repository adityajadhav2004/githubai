'use client';

import { useState } from 'react';
import Marquee from './Marquee';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent to the void! 📡\n(This is a demo - email integration coming soon)');
  };

  return (
    <section className="py-8">
      <h2 className="text-3xl text-[#FFFF00] font-bold mb-4 text-center blink">
        📧 CONTACT.EXE 📧
      </h2>
      
      <Marquee className="text-[#FF00FF] mb-4">
        💌 I reply faster than dial-up! 💌
      </Marquee>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="border-2 border-[#00FF00] bg-[#000000] p-6">
          <h3 className="text-[#00FFFF] font-bold mb-4 text-center">
            📮 SEND MESSAGE
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[#00FF00] text-sm block mb-1">YOUR NAME:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your name..."
                required
              />
            </div>

            <div>
              <label className="text-[#00FF00] text-sm block mb-1">YOUR EMAIL:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="text-[#00FF00] text-sm block mb-1">MESSAGE:</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Let's build something cool..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="w-full">
              [ SEND MESSAGE ]
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="border-2 border-[#00FFFF] bg-[#001f3f] p-6">
            <h3 className="text-[#FFFF00] font-bold mb-4 text-center">
              🌐 FIND ME ONLINE
            </h3>
            
            <div className="space-y-3">
              <a 
                href="mailto:adityajadhav052004@gmail.com"
                className="block text-[#00FFFF] hover:text-[#FFFF00] border border-[#00FF00] p-3 text-center"
              >
                📧 EMAIL: adityajadhav052004@gmail.com
              </a>
              
              <a 
                href="https://github.com/adityajadhav2004"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#00FFFF] hover:text-[#FFFF00] border border-[#00FF00] p-3 text-center"
              >
                🐙 GITHUB: /adityajadhav2004
              </a>
              
              <a 
                href="https://linkedin.com/in/aditya-jadhav-a9692a290"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#00FFFF] hover:text-[#FFFF00] border border-[#00FF00] p-3 text-center"
              >
                💼 LINKEDIN: /aditya-jadhav
              </a>
            </div>
          </div>

          <div className="border-2 border-[#FF00FF] bg-[#000000] p-4 text-center">
            <p className="text-[#00FF00] text-sm mb-2">⏰ RESPONSE TIME</p>
            <p className="text-[#00FFFF] text-xs">Usually within 24 hours</p>
            <p className="text-[#FFFF00] text-xs mt-2">(Faster than loading a GeoCities page!)</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center border-2 border-[#FFFF00] bg-[#001f3f] p-4">
        <p className="text-[#00FF00] text-sm">
          🤝 Open to collaborations, freelance work, and interesting projects!
        </p>
      </div>
    </section>
  );
}
