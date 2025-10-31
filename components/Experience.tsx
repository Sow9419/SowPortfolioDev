import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, Building2, Code, Server, Database, Rocket, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Loga Engineering",
      period: "Depuis Juillet 2024",
      type: "CDI",
      icon: <Code className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      projects: [
        {
          name: "BCI MALI SA - PISFN",
          description: "Développement de micro services pour la phase pilote du projet (PISFN) de la BCEAO",
          tags: ["Spring Boot", "Kafka", "Redis", "Keycloak", "Angular"],
          achievements: [
            "Participation à la phase pilote du projet PISFN (Plateforme d'Interopérabilité des Services Financiers Numériques)",
            "Conception et développement de microservices",
            "Intégration avec le Core Banking de la BCI Mali"
          ]
        }
      ]
    },
    {
      title: "DevOps & Backend Developer",
      company: "Loga Engineering",
      period: "2024",
      type: "Projet",
      icon: <Server className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      projects: [
        {
          name: "BCI MALI SA - Bank-to-Wallet BCI-Orange Money",
          description: "Intégration de la solution Bank-to-Wallet",
          tags: ["SOAP", "JAX-WS", "Kubernetes", "Jenkins"],
          achievements: [
            "Développement de webservices SOAP assurant la communication avec le Core Banking Orion",
            "Déploiement sur Kubernetes via pipeline CI/CD (Jenkins, GitHub Actions)",
            "Mise en place de monitoring avec Prometheus et Grafana",
            "Tests end-to-end garantissant la fiabilité du système"
          ]
        },
        {
          name: "BOA MALI - Bank-to-Wallet BOA-Moov",
          description: "Intégration de la solution Bank-to-Wallet",
          tags: ["Spring Boot", "Kubernetes", "Prometheus", "Grafana"],
          achievements: [
            "Développement de webservices SOAP",
            "Pipeline CI/CD avec Jenkins et GitHub Actions",
            "Solution de monitoring et observabilité",
            "Tests end-to-end complets"
          ]
        },
        {
          name: "Plateforme DevOps - Google Cloud",
          description: "Infrastructure cloud complète",
          tags: ["GCP", "Kubernetes", "ArgoCD", "MinIO"],
          achievements: [
            "Déploiement d'applications sur Kubernetes",
            "Création d'opérateurs et automatisation",
            "Observabilité avec Prometheus et Grafana",
            "Gestion du stockage via MinIO"
          ]
        }
      ]
    },
    {
      title: "Stage de qualification",
      company: "AGETIC Mali",
      period: "2023-2024",
      type: "Stage",
      icon: <Building2 className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      projects: [
        {
          name: "Application de gestion hospitalière",
          description: "Solution complète de numérisation des dossiers patients",
          tags: ["Spring Boot", "Angular", "Ionic", "Jasper Reports", "Kubernetes"],
          achievements: [
            "Numérisation complète des dossiers patients",
            "Gestion des rendez-vous et consultations",
            "Suivi de l'enrôlement aux analyses médicales",
            "Historique détaillé des passages patients"
          ]
        }
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 relative overflow-hidden"
    >
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(251, 146, 60, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(251, 146, 60, 0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .experience-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .experience-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .tag-badge {
          transition: all 0.3s ease;
        }
        
        .tag-badge:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-500">Parcours Professionnel</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
            Expérience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la conception à la production, découvrez mon parcours technique et mes réalisations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-blue-500/50 to-purple-500/50 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-start">
                  {/* Left Side */}
                  {index % 2 === 0 && (
                    <div className="text-right pr-8">
                      <div
                        className="experience-card bg-card rounded-2xl p-6 shadow-xl border border-border hover:border-orange-500/50 cursor-pointer inline-block w-full"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        <div className="relative overflow-hidden">
                          {activeIndex === index && (
                            <div className="absolute inset-0 shimmer-effect"></div>
                          )}
                          
                          <div className="relative z-10">
                            <div className="flex items-center justify-end gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                                {exp.type}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                            
                            <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                              <span className="font-medium">{exp.company}</span>
                              <Building2 className="w-4 h-4" />
                            </div>
                            
                            <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-4">
                              <span>{exp.period}</span>
                              <Calendar className="w-4 h-4" />
                            </div>

                            {exp.projects.map((project, pIndex) => (
                              <div key={pIndex} className="mt-4 p-4 bg-muted/50 rounded-lg text-left">
                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                  <Rocket className="w-4 h-4 text-orange-500" />
                                  {project.name}
                                </h4>
                                <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {project.tags.map((tag, tIndex) => (
                                    <span
                                      key={tIndex}
                                      className="tag-badge px-2 py-1 bg-background rounded-md text-xs font-medium border border-border"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <div className="space-y-2">
                                  {project.achievements.map((achievement, aIndex) => (
                                    <div key={aIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                                      <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-500 shrink-0" />
                                      <span>{achievement}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Timeline Dot - Centered */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg animate-pulse-glow`}>
                        <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}>
                            {exp.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side */}
                  {index % 2 !== 0 && (
                    <div className="pl-8">
                      <div
                        className="experience-card bg-card rounded-2xl p-6 shadow-xl border border-border hover:border-orange-500/50 cursor-pointer"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                      >
                        <div className="relative overflow-hidden">
                          {activeIndex === index && (
                            <div className="absolute inset-0 shimmer-effect"></div>
                          )}
                          
                          <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                                {exp.type}
                              </span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                              <Building2 className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>

                            {exp.projects.map((project, pIndex) => (
                              <div key={pIndex} className="mt-4 p-4 bg-muted/50 rounded-lg">
                                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                                  <Rocket className="w-4 h-4 text-orange-500" />
                                  {project.name}
                                </h4>
                                <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {project.tags.map((tag, tIndex) => (
                                    <span
                                      key={tIndex}
                                      className="tag-badge px-2 py-1 bg-background rounded-md text-xs font-medium border border-border"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <div className="space-y-2">
                                  {project.achievements.map((achievement, aIndex) => (
                                    <div key={aIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                                      <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-500 shrink-0" />
                                      <span>{achievement}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Empty div for grid alignment when content is on left */}
                  {index % 2 === 0 && <div></div>}
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                        {exp.icon}
                      </div>
                      {index < experiences.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-orange-500/50 to-purple-500/50 my-2"></div>
                      )}
                    </div>

                    <div className="flex-1 pb-8">
                      <div className="experience-card bg-card rounded-2xl p-4 shadow-lg border border-border">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white mb-2`}>
                          {exp.type}
                        </span>
                        
                        <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>

                        {exp.projects.map((project, pIndex) => (
                          <div key={pIndex} className="mt-3 p-3 bg-muted/50 rounded-lg">
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                              <Rocket className="w-4 h-4 text-orange-500" />
                              {project.name}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-1 mb-2">
                              {project.tags.map((tag, tIndex) => (
                                <span
                                  key={tIndex}
                                  className="px-2 py-1 bg-background rounded-md text-xs font-medium border border-border"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="space-y-1">
                              {project.achievements.map((achievement, aIndex) => (
                                <div key={aIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle2 className="w-3 h-3 mt-0.5 text-green-500 shrink-0" />
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="glass-morphism rounded-xl p-4 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Projets</div>
          </div>
          <div className="glass-morphism rounded-xl p-4 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">15+</div>
            <div className="text-sm text-muted-foreground mt-1">Technologies</div>
          </div>
          <div className="glass-morphism rounded-xl p-4 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">3+</div>
            <div className="text-sm text-muted-foreground mt-1">Clients</div>
          </div>
          <div className="glass-morphism rounded-xl p-4 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">2+</div>
            <div className="text-sm text-muted-foreground mt-1">Années</div>
          </div>
        </div>
      </div>
    </section>
  );
}