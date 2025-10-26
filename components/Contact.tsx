import React from 'react';
import { Button } from './ui/button';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // La logique d'envoi de formulaire peut être ajoutée ici
    alert("Merci pour votre message !");
  };

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-20 animate-slide-in-up">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col">
            <div>
              <h3 className="text-xl font-semibold mb-2">Entrons en contact</h3>
              <p className="text-muted-foreground mb-6">
                Je suis actuellement à la recherche de nouvelles opportunités. N'hésitez pas à me contacter par le biais de ce formulaire ou sur mes réseaux sociaux.
              </p>
            </div>
            <div className="space-y-4">
               <a href="mailto:jean.dupont@email.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <MailIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-base">jean.dupont@email.com</span>
              </a>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-105 hover:bg-accent">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="transition-transform hover:scale-105 hover:bg-accent">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Nom</label>
                <input type="text" id="name" name="name" required className="block w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                <input type="email" id="email" name="email" required className="block w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="block w-full px-3 py-2 rounded-md border border-input bg-background text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary"></textarea>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary/80 hover:saturate-150 transition-all duration-300">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}