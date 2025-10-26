import React from 'react';

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Company",
      period: "2021 - Présent",
      description: "Développement et maintenance d'applications web à grande échelle. Lead technique sur plusieurs projets critiques.",
    },
    {
      title: "Full-Stack Developer",
      company: "StartUp Inc",
      period: "2019 - 2021",
      description: "Création de fonctionnalités frontend et backend. Participation à l'architecture technique.",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2019",
      description: "Développement de sites web et applications pour divers clients. Formation continue aux technologies modernes.",
    },
  ];

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20 animate-slide-in-up">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Expérience</h2>
        
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm">
          <div className="relative">
            <div className="absolute left-4 top-1 bottom-1 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-4 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-primary ring-4 ring-background transition-transform group-hover:scale-110"></div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-foreground">{exp.company}</span>
                      <span className="text-muted-foreground/50">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}