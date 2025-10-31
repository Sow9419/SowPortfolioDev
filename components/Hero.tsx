import React, { useEffect, useRef } from 'react';
import { Button } from "./ui/button";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import MailIcon from "./icons/MailIcon";
import ReactIcon from './icons/skills/ReactIcon';
import NodejsIcon from './icons/skills/NodejsIcon';
import AwsIcon from './icons/skills/AwsIcon';
import MapPinIcon from './icons/MapPinIcon';
import LinkIcon from './icons/LinkIcon';
import { BentoGridItem } from './ui/bento-grid';
import { Linkedin, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <section id="accueil" className="pt-4 pb-4 px-3 sm:px-5 lg:px-6 relative overflow-hidden">
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        
        .gradient-animated {
          background: linear-gradient(135deg, #FED7AA 0%, #FDBA74 50%, #FB923C 100%);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .skill-badge {
          transition: all 0.3s ease;
        }
        
        .skill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(251, 146, 60, 0.3);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <div ref={cardRef} className="container mx-auto max-w-7xl relative z-10 animate-fade-in-down">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* Left Column */}
          <div className="flex flex-col gap-3">
            {/* Profile Card */}
            <BentoGridItem className="bg-orange-50 dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border-none relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-transparent to-blue-200/20 pointer-events-none"></div>
              <div className="flex flex-col items-center text-center h-full justify-center p-4 sm:p-5 relative z-10">
                <div className="w-24 h-24 rounded-full gradient-animated flex items-center justify-center mb-3 ring-4 ring-white/50 dark:ring-gray-700/50 shadow-xl animate-scale-in">
                  <img src="/projetmedia/sowimage.png" alt="" className="w-full h-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <h1 className="text-2xl font-bold mb-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>Sékou Sow</h1>
                <p className="text-muted-foreground mb-3 animate-scale-in" style={{ animationDelay: '0.2s' }}>DEVELOPPEUR – DEVOPS OFFICER</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                    <MapPinIcon className="h-3.5 w-3.5 shrink-0 animate-pulse" />
                    <span>Mali, Bamako</span>
                </div>
                <div className="flex gap-2 w-full max-w-xs animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  <Button className="flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg" size="sm" asChild>
                    <a href="#contact">
                      <MailIcon className="mr-1.5 h-3.5 w-3.5" />
                      Contact
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className=" bg-white h-8 w-8 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-md" asChild>
                    <a href="https://github.com/SekouSallah" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className=" bg-white h-8 w-8 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-md" asChild>
                    <a href="http://www.linkedin.com/in/s%C3%A9kou-sow-379773247" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="bg-transparent h-8 w-8 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-md" asChild>
                    <a href="https://wa.me/22374007045" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                      <img src="/projetmedia/whatsapp (2).png" alt="WhatsApp" className="h-7 w-7" />
                    </a>
                  </Button>
                </div>
              </div>
            </BentoGridItem>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <BentoGridItem className="bg-orange-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-none h-auto skill-badge relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center h-full p-2 relative z-10">
                    <div className="rounded-full mr-2 transition-transform duration-300 group-hover:scale-110">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Frontend" className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-medium text-sm">Frontend</h3>
                    </div>
                    <div className="ml-auto bg-primary/10 rounded-full px-1 py-1 text-xs font-medium text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        +12
                    </div>
                </div>
              </BentoGridItem>
              
              <BentoGridItem className="bg-orange-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-none h-auto skill-badge relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center h-full p-2 relative z-10">
                    <div className="rounded-full mr-2 transition-transform duration-300 group-hover:scale-110">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Backend" className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-medium text-sm">Backend</h3>
                    </div>
                    <div className="ml-auto bg-primary/10 rounded-full px-1 py-1 text-xs font-medium text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        +8
                    </div>
                </div>
              </BentoGridItem>
              
              <BentoGridItem className="bg-orange-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border-none h-auto skill-badge relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center h-full p-2 relative z-10">
                    <div className="p-2 rounded-full bg-background/50 mr-1 transition-transform duration-300 group-hover:scale-110">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" alt="DevOps" className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-medium text-sm">DevOps</h3>
                    </div>
                    <div className="ml-auto bg-primary/10 rounded-full px-2 py-1 text-xs font-medium text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        +5
                    </div>
                </div>
              </BentoGridItem>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-3">
            {/* Vidéo */}
            <BentoGridItem className="p-0 overflow-hidden h-64 transition-all duration-500 bg-orange-50 dark:bg-gray-800 border-none group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                  src="https://i.pinimg.com/736x/9e/0e/2a/9e0e2a8be395cbebe80fe4296dcb4a0e.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </BentoGridItem>

            {/* About Me */}
            <BentoGridItem className="flex-grow bg-orange-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 border-none relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex flex-col h-full p-3 sm:p-3 relative z-10">
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  À propos
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                </h2>
                <p className="text-gray-900 dark:text-orange-50 leading-relaxed text-sm">
                  Développeur et DevOps Officer passionné par les technologies modernes et l'automatisation. 
                  Expérimenté en développement d'application, CI/CD, Docker et kubernetes. Engagé à concevoir des 
                  solutions fiables et adoptées aux besoins des entreprises.
                </p>
              </div>
            </BentoGridItem>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;