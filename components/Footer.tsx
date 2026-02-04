
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0f0720]/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 text-gray-400 font-medium">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by <span className="text-white font-bold">Dharshan L</span>
        </div>

        <div className="flex items-center gap-6">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass border border-white/10 text-gray-400 hover:text-white hover:bg-blue-600/20 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass border border-white/10 text-gray-400 hover:text-white hover:bg-gray-600/20 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href={SOCIAL_LINKS.email} className="p-3 rounded-xl glass border border-white/10 text-gray-400 hover:text-white hover:bg-purple-600/20 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
