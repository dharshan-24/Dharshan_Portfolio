
import React from 'react';
import { Github, ExternalLink, BookOpen } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl font-bold text-white">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing my best work in backend development and full-stack applications
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="glass rounded-2xl overflow-hidden border border-white/5 group hover:border-white/10 transition-all flex flex-col"
          >
            <div className="relative h-52 md:h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0720] to-transparent opacity-60"></div>
              
              {project.badges && (
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.badges.map(badge => (
                    <span key={badge} className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      badge === 'Building' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-400'
                    } border border-white/10 backdrop-blur-md`}>
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 space-y-5 flex-grow flex flex-col">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg glass text-[10px] font-medium text-blue-300 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-accent text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-3 px-4 rounded-xl glass border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
                {project.docsLink && (
                  <a 
                    href={project.docsLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 py-3 px-4 rounded-xl glass border border-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> API Docs
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
