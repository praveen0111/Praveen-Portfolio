
import React, { useEffect } from 'react';
import { useLucide } from './useLucide';
import { SocialIcon, Footer } from './SharedComponents';

export const ContactPage = ({ onGoHome }: { onGoHome: () => void }) => {
  useLucide([]);
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="page-enter bg-gray-900 min-h-screen text-white flex flex-col">
      <nav className="p-6 flex justify-between items-center">
        <button onClick={onGoHome} className="flex items-center text-gray-400 hover:text-white transition-colors font-semibold">
          <i data-lucide="arrow-left" className="w-5 h-5 mr-2"></i> Back Home
        </button>
      </nav>
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-3xl w-full flex flex-col items-center">
          
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Hi, Let's Connect!</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-lg">
            Whether you have a project in mind, want to discuss tech trends, or just want to say hi, I'm always open to a chat.
          </p>
          
          <div className="flex justify-center flex-wrap gap-8 mb-16">
            {/* <!-- EDIT SOCIAL LINKS HERE --> */}
            <SocialIcon icon="mail" href="mailto:praveenchezhian1@gmail.com" colorClass="text-red-500" label="Email" />
            <SocialIcon icon="instagram" href="#" colorClass="text-pink-600" label="Instagram" />
            <SocialIcon icon="facebook" href="#" colorClass="text-blue-600" label="Facebook" />
            <SocialIcon icon="twitter" href="#" colorClass="text-sky-500" label="X (Twitter)" />
            <SocialIcon icon="linkedin" href="#" colorClass="text-blue-700" label="LinkedIn" />
            <SocialIcon icon="github" href="#" colorClass="text-gray-900" label="GitHub" />
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-lg">
             <p className="text-gray-400 mb-6">Or send me a direct message:</p>
             <a 
               href="mailto:praveenchezhian1@gmail.com" 
               className="inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]"
             >
               Say Hello
             </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};