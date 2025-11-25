
import React, { useEffect } from 'react';
import { useLucide } from './useLucide';
import { ProjectTile, Footer } from './SharedComponents';
import { content } from './content';

export const CreativePage = ({ onGoHome, onNavigateToAcademic, onNavigateToContact }: { onGoHome: () => void, onNavigateToAcademic: () => void, onNavigateToContact: () => void }) => {
  useLucide([]);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="page-enter bg-[#0f172a] text-[#e2e8f0] min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
            <button onClick={onGoHome} className="text-2xl font-bold tracking-tighter hover:text-indigo-400 transition-colors">{content.global.logoText}</button>
            <div className="flex gap-4">
                <button onClick={onGoHome} className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">Home</button>
                <button onClick={onNavigateToAcademic} className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">Digital Profile</button>
                <button onClick={onNavigateToContact} className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors">Contact</button>
            </div>
        </div>
      </nav>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-6">
          <header className="mb-16 text-center">
             <h2 className="text-5xl font-bold text-white mb-6">{content.creativePage.title}</h2>
             <p className="max-w-2xl mx-auto text-gray-400 text-lg">
               {content.creativePage.description}
             </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.creativePage.projects.map((proj, idx) => (
              <ProjectTile key={idx} project={proj} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
