
import React, { useEffect } from 'react';
import { useLucide } from './useLucide';
import { ProjectTile, ProjectProps, Footer } from './SharedComponents';

export const CreativePage = ({ onGoHome, onNavigateToAcademic, onNavigateToContact }: { onGoHome: () => void, onNavigateToAcademic: () => void, onNavigateToContact: () => void }) => {
  useLucide([]);
  useEffect(() => window.scrollTo(0, 0), []);

  const projects: ProjectProps[] = [
    {
      title: "GR3Y",
      category: "Thriller Film",
      description: "An archaeologist unearths a treasure box, which leads to a turn of unexpected events. Multi-award winning short film focusing on suspense and visual storytelling.",
      images: [
        "https://m.media-amazon.com/images/M/MV5BM2YzNTgxNDgtY2M3Yi00ZTRiLTljNTctMTI3MDlkZTNjYjJiXkEyXkFqcGc@._V1_.jpg", // <!-- INSERT IMAGE URL -->
        "https://placehold.co/600x400/334155/cbd5e1?text=GR3Y+Still+1",
        "https://placehold.co/600x400/0f172a/64748b?text=GR3Y+Still+2"
      ],
      link: "#" // <!-- INSERT LINK -->
    },
    {
      title: "STRANGERS",
      category: "Drama Film",
      description: "A conversation between a stranger and a bystander unfolds, past and present collide. Explores themes of connection and consequence.",
      images: [
        "https://placehold.co/600x400/374151/d1d5db?text=Strangers+Poster",
        "https://placehold.co/600x400/4b5563/9ca3af?text=Strangers+Still"
      ],
      link: "#"
    },
    {
      title: "Neon Nights",
      category: "Music Video",
      description: "A cyberpunk-inspired music video featuring heavy VFX work and dynamic color grading to match the synth-wave track.",
      images: ["https://placehold.co/600x400/4c1d95/a78bfa?text=Neon+Nights"],
      link: "#"
    },
    {
      title: "Urban Echoes",
      category: "Documentary",
      description: "A look into the lives of street musicians in Chennai, capturing the raw sounds and stories of the city.",
      images: ["https://placehold.co/600x400/78350f/fcd34d?text=Urban+Echoes"],
      link: "#"
    },
    {
      title: "Product Launch X",
      category: "Commercial",
      description: "High-energy commercial editing for a new tech product launch, emphasizing speed and sleek design.",
      images: ["https://placehold.co/600x400/064e3b/34d399?text=Product+Launch"],
      link: "#"
    },
    {
      title: "VFX Breakdown Reel",
      category: "Showreel",
      description: "A compilation of visual effects work including compositing, rotoscoping, and 3D integration.",
      images: ["https://placehold.co/600x400/831843/f472b6?text=VFX+Reel"],
      link: "#"
    }
  ];

  return (
    <div className="page-enter bg-[#0f172a] text-[#e2e8f0] min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
            <button onClick={onGoHome} className="text-2xl font-bold tracking-tighter hover:text-indigo-400 transition-colors">PE.</button>
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
             <h2 className="text-5xl font-bold text-white mb-6">Creative Projects</h2>
             <p className="max-w-2xl mx-auto text-gray-400 text-lg">
               A collection of narratives brought to life through direction, editing, and sound design.
             </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <ProjectTile key={idx} project={proj} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
