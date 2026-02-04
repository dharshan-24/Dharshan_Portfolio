
import React from 'react';
import { SKILLS } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl font-bold text-white">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with to build amazing applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <div 
            key={idx} 
            className="glass p-8 rounded-3xl border border-white/5 space-y-6 group hover:border-white/10 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 border border-white/5 hover:border-blue-500/30 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
