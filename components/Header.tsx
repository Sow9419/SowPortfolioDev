import React, { useState } from 'react';
import { Theme } from '@/types';
import SunIcon from '@/components/icons/SunIcon';
import MoonIcon from '@/components/icons/MoonIcon';
import { Home, User, Wrench, FolderGit2, Briefcase, Mail } from 'lucide-react';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('accueil');

  const navItems: NavItem[] = [
    { id: 'accueil', icon: <Home className="w-4 h-4" />, label: 'Accueil' },
    { id: 'a-propos', icon: <User className="w-4 h-4" />, label: 'À propos' },
    { id: 'compétences', icon: <Wrench className="w-4 h-4" />, label: 'Compétences' },
    { id: 'projets', icon: <FolderGit2 className="w-4 h-4" />, label: 'Projets' },
    { id: 'experience', icon: <Briefcase className="w-4 h-4" />, label: 'Expérience' },
    { id: 'contact', icon: <Mail className="w-4 h-4" />, label: 'Contact' },
  ];

  const handleNavigation = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="hidden lg:flex flex-col h-screen sticky top-0 z-50 w-14 bg-background/95 backdrop-blur-xl border-r border-border/30 py-8 gap-6 items-center shadow-lg">
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('accueil');
          }}
          className="w-auto h-auto p-2 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg hover:shadow-lg hover:scale-110 transition-all duration-300 mb-4"
        >
          JD
        </a>

        <nav className="flex flex-col gap-4 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              title={item.label}
              className={`w-8 h-8 rounded-2xl flex items-center justify-center transition-all duration-300 group relative ${
                activeSection === item.id
                  ? 'bg-primary text-white shadow-lg scale-110'
                  : 'text-muted-foreground hover:text-primary hover:bg-accent/50 hover:scale-105'
              }`}
            >
              {item.icon}
              <span className="absolute left-16 bg-background border border-border/30 rounded-lg px-3 py-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-muted-foreground hover:bg-accent/50 hover:text-primary transition-all duration-300 hover:scale-105"
          aria-label="Toggle theme"
        >
          <div className="relative w-6 h-6">
            <SunIcon
              className={`absolute transition-all duration-500 transform ${
                theme === Theme.Light ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
              }`}
            />
            <MoonIcon
              className={`absolute transition-all duration-500 transform ${
                theme === Theme.Dark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
              }`}
            />
          </div>
        </button>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30 shadow-2xl">
        <div className="flex justify-around items-center h-20 px-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`flex flex-col items-center justify-center w-10 h-10 rounded-2xl transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-primary text-white scale-110 shadow-lg'
                  : 'text-muted-foreground hover:text-primary'
              }`}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-2xl text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <div className="relative w-6 h-6">
              <SunIcon
                className={`absolute transition-all duration-500 transform ${
                  theme === Theme.Light ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
                }`}
              />
              <MoonIcon
                className={`absolute transition-all duration-500 transform ${
                  theme === Theme.Dark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
