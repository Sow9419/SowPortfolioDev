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

const skillsList = [
  { name: 'JavaScript', icon: <JavascriptIcon className="w-10 h-10" /> },
  { name: 'TypeScript', icon: <TypescriptIcon className="w-10 h-10" /> },
  { name: 'React', icon: <ReactIcon className="w-10 h-10" /> },
  { name: 'Next.js', icon: <NextjsIcon className="w-10 h-10" /> },
  { name: 'Node.js', icon: <NodejsIcon className="w-10 h-10" /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon className="w-10 h-10" /> },
  { name: 'Python', icon: <PythonIcon className="w-10 h-10" /> },
  { name: 'PostgreSQL', icon: <PostgresqlIcon className="w-10 h-10" /> },
  { name: 'MongoDB', icon: <MongodbIcon className="w-10 h-10" /> },
  { name: 'Git', icon: <GitIcon className="w-10 h-10" /> },
  { name: 'Docker', icon: <DockerIcon className="w-10 h-10" /> },
  { name: 'AWS', icon: <AwsIcon className="w-10 h-10" /> },
  { name: 'Figma', icon: <FigmaIcon className="w-10 h-10" /> },
  { name: 'Vue.js', icon: <VuejsIcon className="w-10 h-10" /> },
  { name: 'Express', icon: <ExpressIcon className="w-10 h-10" /> },
  { name: 'SQL', icon: <SqlIcon className="w-10 h-10" /> },
];

const SkillCard = ({ skill }: { skill: (typeof skillsList)[0] }) => (
    <div className="flex-shrink-0 w-36 h-36 flex flex-col items-center justify-center p-4 bg-card/60 border border-border/50 rounded-xl shadow-sm transition-all duration-300 ease-out backdrop-blur-sm hover:bg-card/80 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
      {skill.icon}
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
        <h2 className="text-3xl font-bold mb-12 text-center">Technologies & Outils</h2>
        
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