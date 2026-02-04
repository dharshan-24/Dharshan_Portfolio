
import React from 'react';
import { Briefcase, Calendar, MapPin, CircleCheck } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 scroll-mt-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl font-bold text-white">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-gray-400 text-lg">Professional journey and achievements</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass p-10 rounded-[32px] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
          
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="p-4 rounded-2xl bg-gradient-accent text-white shrink-0 shadow-lg shadow-purple-500/20">
              <Briefcase className="w-8 h-8" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white">Python Fullstack Developer Intern</h3>
                <h4 className="text-xl font-semibold text-blue-400">Uniq Technologies </h4>
                <div className="flex flex-wrap gap-6 pt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Aug 2025 – Jan 2026</span>
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />Chennai</span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Built responsive and user-friendly interfaces using HTML, CSS, and JavaScript",
                  "Developed backend applications using Python with Django and Flask framework",
                  "Designed and implemented RESTful APIs for frontend–backend integration",
                  "Implemented CRUD operations, authentication, and backend business logic",
                  "Used Git and GitHub for version control, collaboration, and code management",
                  "Deployed frontend and full-stack applications using Vercel,Netlify"
                  
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1.5 shrink-0">
                      <CircleCheck className="w-5 h-5 text-blue-400" />
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
