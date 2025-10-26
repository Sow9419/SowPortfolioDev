import React from 'react';
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GithubIcon from './icons/GithubIcon';
import ClockIcon from './icons/ClockIcon';

export function Projects() {
  const projects = [
    {
      title: "Plateforme E-Commerce",
      description: "Plateforme de commerce en ligne complète avec panier, paiement et gestion des commandes.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      stars: 124,
      language: "TypeScript",
    },
    {
      title: "App de Gestion de Tâches",
      description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
      tags: ["Next.js", "Supabase", "Tailwind CSS"],
      stars: 89,
      language: "TypeScript",
    },
    {
      title: "Tableau de Bord Analytique",
      description: "Tableau de bord analytique avec visualisations interactives et rapports personnalisés.",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      stars: 156,
      language: "JavaScript",
    },
  ];

  return (
    <section id="projets" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-20 animate-slide-in-up">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Projets</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-card text-card-foreground border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <a href="#" className="hover:text-primary transition-colors">{project.title}</a>
                    <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground border border-border">
                      {project.language}
                    </span>
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 shrink-0 pt-1">
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`Voir le code source du projet ${project.title}`}>
                      <GithubIcon className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label={`Voir la démo du projet ${project.title}`}>
                      <ExternalLinkIcon className="h-4 w-4 mr-2" />
                      Démo
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4 mt-4">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  {project.stars} stars
                </span>
                <span className="flex items-center gap-1.5">
                  <ClockIcon className="w-4 h-4" />
                  Mis à jour récemment
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}