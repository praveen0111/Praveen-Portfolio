
import React, { useState } from 'react';
import { HeroSlider } from './HeroSlider';
import { CreativePage } from './CreativePage';
import { AcademicPage } from './AcademicPage';
import { ContactPage } from './ContactPage';

export const App = () => {
  const [view, setView] = useState<'home' | 'creative' | 'academic' | 'contact'>('home');

  return (
    <main>
      {view === 'home' && (
        <HeroSlider 
          onSelectCreative={() => setView('creative')} 
          onSelectAcademic={() => setView('academic')} 
        />
      )}
      {view === 'creative' && (
        <CreativePage 
          onGoHome={() => setView('home')} 
          onNavigateToAcademic={() => setView('academic')}
          onNavigateToContact={() => setView('contact')}
        />
      )}
      {view === 'academic' && (
        <AcademicPage 
          onGoHome={() => setView('home')} 
          onNavigateToCreative={() => setView('creative')}
          onNavigateToContact={() => setView('contact')}
        />
      )}
      {view === 'contact' && (
        <ContactPage 
          onGoHome={() => setView('home')} 
        />
      )}
    </main>
  );
};
