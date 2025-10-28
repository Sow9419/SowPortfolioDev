import React from 'react';
import { Theme } from '@/types';
import SunIcon from '@/components/icons/SunIcon';
import MoonIcon from '@/components/icons/MoonIcon';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { Home, User, Wrench, FolderGit2, Briefcase, Mail } from 'lucide-react';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const tabs = [
    { title: 'Accueil', icon: Home },
    { title: 'À propos', icon: User },
    { title: 'Compétences', icon: Wrench },
    { title: 'Projets', icon: FolderGit2 },
    { title: 'Expérience', icon: Briefcase },
    { title: 'Contact', icon: Mail },
  ];
  
  const sectionIds = ['accueil', 'a-propos', 'compétences', 'projets', 'experience', 'contact'];

  const handleTabChange = (index: number | null) => {
    if (index !== null) {
      const sectionId = sectionIds[index];
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleTabChange(0);
    // Additionally, ensure we are at the very top of the page.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-in-down border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 flex justify-center">
            <ExpandableTabs tabs={tabs} onChange={handleTabChange} />
          </div>

          <div className="w-24 flex-shrink-0 flex justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-background transition-all duration-300"
              aria-label="Toggle theme"
            >
              <div className="relative w-6 h-6">
                <SunIcon className={`absolute transition-all duration-500 transform ${theme === Theme.Light ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                <MoonIcon className={`absolute transition-all duration-500 transform ${theme === Theme.Dark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;