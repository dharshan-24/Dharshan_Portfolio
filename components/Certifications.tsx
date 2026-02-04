
import React from 'react';
import { Award, CircleCheck, ExternalLink, Calendar, Target } from 'lucide-react';
import { CERTIFICATIONS } from '../constants.tsx';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl font-bold text-white">
          Professional <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-gray-400 text-lg">Verified credentials and continuous learning achievements</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((cert, idx) => (
          <div 
            key={idx} 
            className="glass p-8 rounded-3xl border border-white/10 flex flex-col space-y-6 group hover:border-blue-500/30 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className={`p-4 rounded-2xl ${
                cert.type === 'Simulation' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'
              }`}>
                <Award className="w-8 h-8" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-green-400 uppercase tracking-widest bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                <CircleCheck className="w-3 h-3" /> Verified
              </div>
            </div>

            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <div className="space-y-1">
                <p className="text-blue-400 font-medium">{cert.provider}</p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" /> {cert.date}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Target className="w-3 h-3" /> Skills Earned
                </p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-lg glass text-[10px] text-gray-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3.5 rounded-xl bg-gradient-accent text-white font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-purple-500/10"
            >
              <ExternalLink className="w-4 h-4" /> View Verification
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
