import React, { useState, useEffect } from 'react';
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MasonryGrid } from "./ui/image-testimonial-grid";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GithubIcon from './icons/GithubIcon';
import { Project } from '../types';

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover"
      />

      <div className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      <div className="absolute top-0 left-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1 drop-shadow-lg">{project.title}</h3>
      </div>

      <div className={`absolute inset-0 p-6 text-white flex flex-col justify-end transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-sm mb-4 leading-relaxed drop-shadow-md">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-medium bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="h-4 w-4 mr-2" />
                Démo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  const [columns, setColumns] = useState(3);

  const projects: Project[] = [
    {
      title: "Plateforme E-Commerce",
      description: "Plateforme de commerce en ligne complète avec panier, paiement et gestion des commandes.",
      stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=1000&q=80",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "App de Gestion de Tâches",
      description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
      stack: ["Next.js", "Supabase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&h=1200&q=80",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Tableau de Bord Analytique",
      description: "Tableau de bord analytique avec visualisations interactives et rapports personnalisés.",
      stack: ["React", "D3.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=900&q=80",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Application Mobile Fitness",
      description: "Application mobile de suivi fitness avec plans d'entraînement personnalisés et suivi nutritionnel.",
      stack: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?auto=format&fit=crop&w=800&h=1100&q=80",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Système de Réservation",
      description: "Système de réservation en ligne pour hôtels avec gestion des disponibilités et paiements.",
      stack: ["Vue.js", "Laravel", "MySQL"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=1000&q=80",
      githubUrl: "#",
    },
    {
      title: "Portfolio Créatif",
      description: "Site portfolio interactif avec animations et transitions fluides pour artistes et créateurs.",
      stack: ["Next.js", "Framer Motion", "TypeScript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&h=1200&q=80",
      githubUrl: "#",
      demoUrl: "#",
    },
  ];

  const getColumns = (width: number) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projets" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Mes Projets</h2>

        <MasonryGrid columns={columns} gap={4}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </MasonryGrid>
      </div>
    </section>
  );
}
