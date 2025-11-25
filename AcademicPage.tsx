
import React, { useEffect } from 'react';
import { useLucide } from './useLucide';
import { SkillBar, Footer } from './SharedComponents';

export const AcademicPage = ({ onGoHome, onNavigateToCreative, onNavigateToContact }: { onGoHome: () => void, onNavigateToCreative: () => void, onNavigateToContact: () => void }) => {
  useLucide([]);
  useEffect(() => window.scrollTo(0, 0), []);

  const skills = [
    { name: "Product Design (UI/UX)", level: "90%" },
    { name: "Marketing Strategy", level: "85%" },
    { name: "Project Management", level: "80%" },
    { name: "Video Editing (Premiere/AE)", level: "95%" },
    { name: "Data Analysis", level: "75%" },
  ];

  return (
    <div className="page-enter bg-[#f8fafc] text-[#1e293b] min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
            <button onClick={onGoHome} className="text-2xl font-bold tracking-tighter text-gray-900 hover:text-indigo-600 transition-colors">PE.</button>
            <div className="flex gap-4">
                <button onClick={onGoHome} className="text-gray-600 hover:text-black transition-colors text-sm font-semibold">Home</button>
                <button onClick={onNavigateToCreative} className="text-gray-600 hover:text-black transition-colors text-sm font-semibold">Creative Work</button>
                <button onClick={onNavigateToContact} className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">Contact</button>
            </div>
        </div>
      </nav>

      <section className="py-16 flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Intro & Skills */}
            <div className="lg:col-span-1 space-y-8">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 shadow-inner mb-6">
                    <img src="https://placehold.co/200x200/e2e8f0/64748b?text=Photo" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Praveen Elanchezhian</h2>
                  <p className="text-sm text-indigo-600 font-medium mt-1">MBA Candidate & Product Strategist</p>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Bridging the gap between creative storytelling and data-driven product strategy.
                  </p>
               </div>

               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="text-lg font-bold mb-6 flex items-center"><i data-lucide="bar-chart-2" className="w-5 h-5 mr-2 text-indigo-500"></i> Skills</h3>
                 <div>
                   {skills.map((skill, idx) => (
                     <SkillBar key={idx} name={skill.name} level={skill.level} />
                   ))}
                 </div>
               </div>
            </div>

            {/* Right Column: Experience & Education */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Experience Section */}
              <div>
                 <h3 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-indigo-500 pl-4">Experience & Projects</h3>
                 
                 {/* Experience Item 1 */}
                 <a href="#" className="block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6 hover:shadow-md hover:border-indigo-200 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                       <h4 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">Product Design Consultant</h4>
                       <span className="text-sm font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">Jul 2024 - Present</span>
                    </div>
                    <p className="text-md font-medium text-gray-500 mb-4">Tamizh | AR Smart Glass</p>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        <li>Led UI/UX design for gesture-controlled AR interface.</li>
                        <li>Prototyped interaction models for voice commands.</li>
                        <li>Developed product roadmap for prototype launch.</li>
                    </ul>
                 </a>

                 {/* Experience Item 2 */}
                 <a href="#" className="block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                       <h4 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">Marketing Strategy Intern</h4>
                       <span className="text-sm font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">May 2025 - Jul 2025</span>
                    </div>
                    <p className="text-md font-medium text-gray-500 mb-4">Madarth</p>
                    <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        <li>Executed social media campaigns for major agricultural clients.</li>
                        <li>Implemented AI-driven workflow for asset generation.</li>
                    </ul>
                 </a>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-emerald-500 pl-4">Education</h3>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="mb-8 relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500"></div>
                    <h4 className="text-lg font-bold text-gray-900">Master of Business Administration (MBA)</h4>
                    <p className="text-gray-500">NIT, Trichy (2024-2026)</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300"></div>
                    <h4 className="text-lg font-bold text-gray-900">B.E. Electronics & Communication</h4>
                    <p className="text-gray-500">Loyola ICAM College of Engineering and Technology, Chennai (2020-2024)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
