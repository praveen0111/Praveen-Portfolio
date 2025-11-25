
import React, { useState, useEffect } from 'react';
import { content } from './content';

// Reusable Social Icon Link
export const SocialIcon = ({ icon, href, colorClass, label }: { icon: string, href: string, colorClass: string, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={label}
    className={`group flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:scale-110 transition-transform duration-300 ${colorClass}`}
  >
    <i data-lucide={icon} className="w-6 h-6"></i>
  </a>
);

// Reusable Footer Component
export const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800 mt-auto">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} {content.global.copyrightName}. All Rights Reserved.</p>
        <p className="text-xs mt-1 text-gray-500">Designed with React & Tailwind CSS.</p>
      </div>
      <div className="flex gap-6">
         {content.footer.links.map((link, idx) => (
           <a key={idx} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
         ))}
      </div>
    </div>
  </footer>
);

// Skill Bar Component with Animation
export const SkillBar = ({ name, level }: { name: string, level: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger the fade-in
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`mb-4 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full animate-[fillBar_1.5s_ease-out_forwards]" 
          style={{ width: level, '--target-width': level } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
};

// Project Tile with Carousel
export interface ProjectProps {
  title: string;
  category: string;
  description: string;
  images: string[];
  link: string; 
}

export const ProjectTile = ({ project }: { project: ProjectProps }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <a 
      href={project.link} 
      className="block group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-900">
        {project.images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`${project.title} slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        
        {/* Carousel Controls (visible on hover) */}
        {project.images.length > 1 && isHovered && (
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button onClick={prevSlide} className="p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition">
              <i data-lucide="chevron-left" className="w-5 h-5"></i>
            </button>
            <button onClick={nextSlide} className="p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition">
              <i data-lucide="chevron-right" className="w-5 h-5"></i>
            </button>
          </div>
        )}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-2 left-0 w-full flex justify-center gap-1">
          {project.images.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}></div>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1">{project.category}</div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
        <div className="mt-4 flex items-center text-sm text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
          View Project <i data-lucide="arrow-right" className="w-4 h-4 ml-1"></i>
        </div>
      </div>
    </a>
  );
};
