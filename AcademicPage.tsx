
import React, { useEffect } from 'react';
import { useLucide } from './useLucide';
import { SkillBar, Footer } from './SharedComponents';
import { content } from './content';

export const AcademicPage = ({ onGoHome, onNavigateToCreative, onNavigateToContact }: { onGoHome: () => void, onNavigateToCreative: () => void, onNavigateToContact: () => void }) => {
  useLucide([]);
  useEffect(() => window.scrollTo(0, 0), []);

  const { profile, skills, experience, education, sectionTitles } = content.academicPage;

  return (
    <div className="page-enter bg-[#f8fafc] text-[#1e293b] min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-[#f8fafc]/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
            <button onClick={onGoHome} className="text-2xl font-bold tracking-tighter text-gray-900 hover:text-indigo-600 transition-colors">{content.global.logoText}</button>
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
                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-sm text-indigo-600 font-medium mt-1">{profile.role}</p>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    {profile.description}
                  </p>
               </div>

               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                 <h3 className="text-lg font-bold mb-6 flex items-center"><i data-lucide="bar-chart-2" className="w-5 h-5 mr-2 text-indigo-500"></i> {sectionTitles.skills}</h3>
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
                 <h3 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-indigo-500 pl-4">{sectionTitles.experience}</h3>
                 
                 {experience.map((exp, idx) => (
                   <a key={idx} href={exp.link} className="block bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-6 hover:shadow-md hover:border-indigo-200 transition-all group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                         <h4 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">{exp.role}</h4>
                         <span className="text-sm font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{exp.duration}</span>
                      </div>
                      <p className="text-md font-medium text-gray-500 mb-4">{exp.company}</p>
                      <ul className="space-y-2 text-gray-600 list-disc list-inside">
                          {exp.details.map((detail, dIdx) => (
                            <li key={dIdx}>{detail}</li>
                          ))}
                      </ul>
                   </a>
                 ))}
              </div>

              {/* Education Section */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-gray-900 border-l-4 border-emerald-500 pl-4">{sectionTitles.education}</h3>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  {education.map((edu, idx) => (
                    <div key={idx} className={`relative pl-6 border-l-2 border-gray-200 ${idx !== education.length - 1 ? 'mb-8' : ''}`}>
                      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-${edu.color}`}></div>
                      <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-gray-500">{edu.school} ({edu.year})</p>
                    </div>
                  ))}
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
