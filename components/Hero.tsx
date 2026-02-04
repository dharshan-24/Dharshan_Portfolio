
import React from 'react';
import profileImage from "../assets/New Photo.png";

import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80; // height of fixed navbar
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20 pb-12 lg:pt-0 lg:pb-0 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 lg:order-1 space-y-8 animate-fade-in will-change-transform
                flex flex-col items-center text-center
                lg:items-start lg:text-left">
          <div
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-blue-400
              mx-auto text-center
              lg:mx-0 lg:text-left
              "
          >
              👋 Welcome To My Portfolio
          </div>

          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Dharshan L</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">
              Python Fullstack Developer
            </h3>
            <p className="text-lg text-gray-400 max-w-lg">
              Building Scalable Backend Solutions
            </p>
          </div>

          <div className="flex flex-wrap gap-4
                justify-center
                lg:justify-start">
            <a 
              href="#projects" 
              onClick={scrollToProjects}
              className="px-8 py-3.5 rounded-xl bg-gradient-accent text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] active:scale-95 cursor-pointer"
            >
              View Projects <ArrowDown className="w-4 h-4" />
            </a>
            <a 
              href={SOCIAL_LINKS.resume} 
              download="Sudharshan_J_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl glass text-white font-semibold flex items-center gap-2 border border-white/10 hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.email} className="p-3 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in will-change-transform">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px] group">
            {/* Pulsing Background Glow */}
            <div className="absolute inset-0 bg-gradient-accent blur-[80px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
            
            {/* Perfect Circle Container */}
            <div className="relative w-full h-full aspect-square rounded-full glow-border p-1.5 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative bg-[#1a0b36]">
                <img 
                  src={profileImage}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
            
            {/* Floating Status Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 glass px-5 py-2.5 rounded-full text-xs font-semibold text-emerald-400 whitespace-nowrap border border-emerald-400/30 shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all duration-500 group-hover:border-emerald-400/70">
  
            {/* Animated status dot */}
            <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
             </span>

              {/* Status text */}
              <span className="tracking-wide">Open To Work</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
