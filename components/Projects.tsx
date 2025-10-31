import React, { useState } from 'react';
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GithubIcon from './icons/GithubIcon';
import { Sparkles } from 'lucide-react';

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const projects = [
    {
      title: "Plateforme E-Commerce",
      description: "Plateforme de commerce en ligne complète avec panier, paiement et gestion des commandes.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      stars: 124,
      language: "TypeScript",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      author: "John Doe",
      avatar: "JD"
    },
    {
      title: "App de Gestion de Tâches",
      description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
      tags: ["Next.js", "Supabase", "Tailwind CSS"],
      stars: 89,
      language: "TypeScript",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      author: "Jane Smith",
      avatar: "JS"
    },
    {
      title: "Tableau de Bord Analytique",
      description: "Tableau de bord analytique avec visualisations interactives et rapports personnalisés.",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      stars: 156,
      language: "JavaScript",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Mike Johnson",
      avatar: "MJ"
    },
    {
      title: "Portfolio Personnel",
      description: "Site portfolio moderne avec animations fluides et design responsive.",
      tags: ["React", "Framer Motion", "Tailwind"],
      stars: 67,
      language: "TypeScript",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      author: "Sarah Lee",
      avatar: "SL"
    },
    {
      title: "API Rest Sécurisée",
      description: "API RESTful avec authentification JWT, rate limiting et documentation Swagger.",
      tags: ["Node.js", "Express", "JWT", "Swagger"],
      stars: 203,
      language: "JavaScript",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      author: "Tom Brown",
      avatar: "TB"
    },
    {
      title: "Chat en Temps Réel",
      description: "Application de messagerie instantanée avec rooms, partage de fichiers et emojis.",
      tags: ["Socket.io", "React", "Redis", "MongoDB"],
      stars: 145,
      language: "TypeScript",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
      author: "Emma Wilson",
      avatar: "EW"
    }
  ];

  return (
    <section id="projets" className="py-6 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-6">
          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-full border border-slate-200 dark:border-slate-700 shadow-lg">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mes Projets</span>
            </div>
          </div>
        </div>
        
        {/* Masonry Grid Pinterest Style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="break-inside-avoid mb-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="relative group overflow-hidden rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: index % 3 === 0 ? '450px' : index % 3 === 1 ? '350px' : '400px'
                }}
              >
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 group-hover:to-black/95 transition-all duration-300"></div>
                
                {/* Header avec avatar et username */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/50 flex items-center justify-center shadow-lg">
                      <span className="text-white text-xs font-bold">{project.avatar}</span>
                    </div>
                    <span className="text-white text-sm font-semibold drop-shadow-lg">{project.author}</span>
                  </div>
                  
                  {/* Stars badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-300">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span className="text-white text-xs font-bold">{project.stars}</span>
                  </div>
                </div>
                
                {/* Contenu en bas - toujours visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/95 text-sm mb-4 line-clamp-2 drop-shadow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags - apparaissent au hover */}
                  <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/25 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/40 shadow"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-white/25 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/40 shadow">
                      {project.language}
                    </span>
                  </div>
                  
                  {/* Boutons d'action - apparaissent au hover */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-white/25 hover:bg-white/35 backdrop-blur-md border border-white/40 text-white font-semibold shadow-lg"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-white hover:bg-white/95 text-black font-semibold border-0 shadow-lg"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-4 w-4 mr-2" />
                        Démo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}