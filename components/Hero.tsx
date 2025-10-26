import React from 'react';
import { Button } from "./ui/button";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";
import MapPinIcon from "./icons/MapPinIcon";
import LinkIcon from "./icons/LinkIcon";

const Hero: React.FC = () => {
  return (
    <section id="accueil" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 animate-fade-in-down">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Profile Card - Left Side */}
          <div className="w-full md:w-80 shrink-0">
            <div className="bg-card text-card-foreground border border-border rounded-lg p-6 sticky top-24 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 via-muted to-background flex items-center justify-center mb-4 ring-4 ring-background animate-subtle-glow">
                  <span className="text-5xl font-bold text-primary">JD</span>
                </div>
                <h1 className="text-2xl font-bold mb-1">Jean Dupont</h1>
                <p className="text-muted-foreground mb-4">Développeur Full-Stack</p>
                
                <Button className="w-full mb-3" asChild>
                  <a href="#contact">
                    <MailIcon className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </Button>
                
                <div className="flex gap-2 w-full">
                  <Button variant="outline" size="icon" className="flex-1 transition-transform hover:scale-105" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="flex-1 transition-transform hover:scale-105" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="w-full mt-6 pt-6 border-t border-border text-left space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPinIcon className="h-4 w-4 shrink-0" />
                    <span>Paris, France</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <LinkIcon className="h-4 w-4 shrink-0" />
                    <a href="#" className="hover:text-primary transition-colors">monportfolio.dev</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Right Side */}
          <div className="flex-1 space-y-6">
            <div id="a-propos" className="bg-card text-card-foreground border border-border rounded-lg p-6 scroll-mt-20 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">À propos</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Développeur full-stack passionné avec 5+ années d'expérience dans la création 
                d'applications web modernes. Spécialisé en React, TypeScript et Node.js, 
                je conçois des solutions élégantes qui allient performance et expérience utilisateur.
              </p>
            </div>

            <div className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-accent">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ring-4 ring-background group-hover:bg-primary/20 transition-all">
                    <span className="text-2xl" role="img" aria-label="Fusée">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">Performance</h3>
                    <p className="text-sm text-muted-foreground">Applications optimisées et rapides</p>
                  </div>
                </div>
                <div className="group flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-accent">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 ring-4 ring-background group-hover:bg-primary/20 transition-all">
                    <span className="text-2xl" role="img" aria-label="Palette d'artiste">🎨</span>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">Design</h3>
                    <p className="text-sm text-muted-foreground">UI/UX modernes et intuitives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;