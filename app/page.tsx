'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Hero />
        <hr />
        <About />
        <hr />
        <Skills />
        <hr />
        <Experience />
        <hr />
        <Projects />
        <hr />
        <Certifications />
        <hr />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
