'use client';

import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Marquee({ children, className = '' }: MarqueeProps) {
  return React.createElement('marquee', { className }, children);
}
