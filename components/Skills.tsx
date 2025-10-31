import React from 'react';
import JavascriptIcon from './icons/skills/JavascriptIcon';
import TypescriptIcon from './icons/skills/TypescriptIcon';
import PythonIcon from './icons/skills/PythonIcon';
import SqlIcon from './icons/skills/SqlIcon';
import ReactIcon from './icons/skills/ReactIcon';
import NextjsIcon from './icons/skills/NextjsIcon';
import TailwindIcon from './icons/skills/TailwindIcon';
import VuejsIcon from './icons/skills/VuejsIcon';
import NodejsIcon from './icons/skills/NodejsIcon';
import ExpressIcon from './icons/skills/ExpressIcon';
import PostgresqlIcon from './icons/skills/PostgresqlIcon';
import MongodbIcon from './icons/skills/MongodbIcon';
import GitIcon from './icons/skills/GitIcon';
import DockerIcon from './icons/skills/DockerIcon';
import AwsIcon from './icons/skills/AwsIcon';
import FigmaIcon from './icons/skills/FigmaIcon';
import { Sparkles } from 'lucide-react';

const skillsList = [
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#007396' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6DB33F' },
  { name: 'Quarkus', logo: 'https://design.jboss.org/quarkus/logo/final/SVG/quarkus_icon_rgb_default.svg', color: '#4695EB' },
  { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', color: '#E0234E' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'Ionic', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg', color: '#3880FF' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', color: '#DD0031' },
  { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D24939' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', color: '#F46800' },
  { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', color: '#E6522C' },
  { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', color: '#EE0000' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
  { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', color: '#0175C2' },
  { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC' },
  { name: 'ArgoCD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg', color: '#F05032' },

];

// FIX: Refactored to a typed functional component to resolve issues with React's `key` prop type inference.
type SkillCardProps = { skill: (typeof skillsList)[0] };
const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
    <div className="flex-shrink-0 w-36 h-36 flex flex-col items-center justify-center p-4 bg-card/60 border border-border/50 rounded-xl shadow-sm transition-all duration-300 ease-out backdrop-blur-sm hover:bg-card/80 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
      <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
      <p className="mt-3 text-sm font-semibold text-center text-foreground">
        {skill.name}
      </p>
    </div>
);

export function Skills() {
  const middleIndex = Math.ceil(skillsList.length / 2);
  const firstRowSkills = skillsList.slice(0, middleIndex);
  const secondRowSkills = skillsList.slice(middleIndex);

  return (
    <section id="compétences" className="py-12 scroll-mt-20 animate-slide-in-up">
      <div className="container mx-auto">
        <div className="relative flex justify-center">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-full border border-slate-200 dark:border-slate-700 shadow-lg">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Outils et Technologies</span>
            </div> 
        </div>
             
        <div 
          className="relative group flex flex-col gap-6"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
        >
          {/* Première rangée - défile vers la gauche */}
          <div className="overflow-hidden">
            <div className="flex space-x-6 pr-6 animate-scroll-left group-hover:[animation-play-state:paused]">
              {/* Le contenu est dupliqué pour un défilement infini */}
              {firstRowSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
              {firstRowSkills.map((skill) => <SkillCard key={`${skill.name}-clone`} skill={skill} />)}
            </div>
          </div>
          
          {/* Deuxième rangée - défile vers la droite */}
          <div className="overflow-hidden">
             <div className="flex space-x-6 pr-6 animate-scroll-right group-hover:[animation-play-state:paused]">
              {/* Le contenu est dupliqué pour un défilement infini */}
              {secondRowSkills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
              {secondRowSkills.map((skill) => <SkillCard key={`${skill.name}-clone`} skill={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
