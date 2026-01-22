'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    const statuses = [
      'Connecting to adityajadhav.exe...',
      'Handshake established...',
      'Loading GeoCities framework...',
      'Initializing retro mode...',
      'Almost there...'
    ];

    let currentStatus = 0;
    const statusInterval = setInterval(() => {
      if (currentStatus < statuses.length) {
        setStatus(statuses[currentStatus]);
        currentStatus++;
      }
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => {
      clearInterval(statusInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000]">
      <div className="text-center p-8 max-w-md w-full">
        <pre className="text-[#00FF00] text-lg mb-4 font-mono">
{`
╔═══════════════════════════════╗
║  ADITYA JADHAV WEB PORTAL     ║
║  Version 1.0 (1997)           ║
╚═══════════════════════════════╝
`}
        </pre>
        
        <div className="mb-4">
          <p className="text-[#00FF00] text-sm mb-2 font-mono">{status}</p>
          <div className="w-full bg-[#001f3f] border-2 border-[#00FF00] h-8 relative overflow-hidden">
            <div 
              className="h-full bg-[#00FF00] transition-all duration-100 flex items-center justify-center"
              style={{ width: `${progress}%` }}
            >
              <span className="text-[#000000] font-bold text-xs font-mono">{progress}%</span>
            </div>
          </div>
        </div>

        <p className="text-[#00FFFF] text-xs font-mono blink">
          {progress === 100 ? '>> ENTER SITE <<' : 'Please wait...'}
        </p>
      </div>
    </div>
  );
}
