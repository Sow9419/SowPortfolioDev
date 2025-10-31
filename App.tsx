import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Formation from './components/Formation';
import { AuroraBackground } from './components/ui/aurora-background';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === Theme.Dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
  };

  return (
    <AuroraBackground>
      <div className="lg:grid lg:grid-cols-[5rem_1fr]">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="pb-20 lg:pb-0">
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Formation />
          <Contact />
        </main>
      </div>
      <Footer />
    </AuroraBackground>
  );
};

export default App;
