
import React, { useState, useEffect, useRef } from 'react';
import { useLucide } from './useLucide';

export const HeroSlider = ({ onSelectCreative, onSelectAcademic }: { onSelectCreative: () => void, onSelectAcademic: () => void }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  useLucide();

  // Intro Animation
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const duration = 1500;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsedTime = time - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      const amplitude = 15;
      const currentPos = 50 + amplitude * Math.sin(progress * Math.PI * 2);
      
      setSliderPos(currentPos);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setSliderPos(50);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Eye Tracking Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const characters = document.querySelectorAll('.character');
      
      characters.forEach((character: Element) => {
        const charEl = character as HTMLElement;
        const rect = charEl.getBoundingClientRect();
        if (rect.width === 0) return;

        const charX = rect.left + rect.width / 2;
        const charY = rect.top + rect.height / 2;
        
        const pupils = charEl.querySelectorAll('.pupil');
        const angle = Math.atan2(e.clientY - charY, e.clientX - charX);
        const distance = Math.min(2.5, Math.hypot(e.clientX - charX, e.clientY - charY) / 100);
        
        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;
        
        pupils.forEach((pupil) => {
          (pupil as HTMLElement).style.transform = `translate(${3 + pupilX}px, ${3 + pupilY}px)`;
        });

        // Proximity wiggle effect
        const proximity = Math.hypot(e.clientX - charX, e.clientY - charY);
        if (proximity < 200) {
           charEl.style.animation = 'float 6s ease-in-out infinite, wiggle 0.5s ease-in-out infinite';
        } else {
           charEl.style.animation = 'float 6s ease-in-out infinite';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dragging Logic
  useEffect(() => {
    const handleUp = () => {
      setIsDragging(false);
      document.body.classList.remove('is-dragging');
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const rect = containerRef.current.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      setSliderPos(pos * 100);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchend', handleUp);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove, { passive: false });
    }

    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    document.body.classList.add('is-dragging');
  };

  const parallaxOffset = (sliderPos - 50) * 0.5;

  return (
    <section 
      id="slider-container" 
      ref={containerRef}
    >
      {/* Creative Panel (Left/Base) */}
      <div 
        id="creative-panel" 
        className="panel" 
        style={{ 
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)` 
        }}
      >
        <div 
            className="absolute inset-0 w-full h-full"
            style={{ transform: `translateX(${parallaxOffset}px)` }}
        >
            {/* 
               Mobile Layout (md:hidden): 
               - Content: Top 30%
               - Character: Top 75%
            */}
            
            <div 
                id="filmmaker-character" 
                className="character absolute 
                           top-[75%] left-1/2 -translate-x-1/2 opacity-70 scale-[0.6]
                           md:top-1/2 md:-translate-y-1/2 md:left-[15%] md:translate-x-0 md:opacity-100 md:scale-100"
            >
                <div className="character-head">
                    <div className="character-hair"></div>
                    <div className="eye left"><div className="pupil"></div></div>
                    <div className="eye right"><div className="pupil"></div></div>
                </div>
                <div className="character-body"></div>
                {/* Creative Icons */}
                <div style={{top: 0, left: '-20%', animationDelay: '0s'}} className="character-icon w-12 h-12 text-white"><i data-lucide="camera" className="w-6 h-6"></i></div>
                <div style={{bottom: '10px', right: '-10%', animationDelay: '-2s'}} className="character-icon w-12 h-12 text-white"><i data-lucide="film" className="w-6 h-6"></i></div>
                <div style={{top: '40%', right: '-40%', animationDelay: '-1s'}} className="character-icon software-logo bg-purple-600">Pr</div>
                <div style={{bottom: '40%', left: '-40%', animationDelay: '-3s'}} className="character-icon software-logo bg-indigo-700">Ae</div>
                <div style={{top: '70%', left: '-10%', animationDelay: '-4s'}} className="character-icon w-10 h-10 text-white"><i data-lucide="mic-2" className="w-5 h-5"></i></div>
            </div>

            <div className="panel-content absolute 
                            top-[30%] left-1/2 -translate-x-1/2 text-center 
                            md:top-1/2 md:-translate-y-1/2 md:right-[10%] md:left-auto md:translate-x-0 md:text-right pr-4 md:pr-0">
                <div className="panel-logo text-gray-400">PE.</div>
                <h1 className="panel-title text-white">Creative</h1>
                <p className="panel-description md:ml-auto text-gray-400">Filmmaker with a passion for visual storytelling and expertise in editing and post-production workflow.</p>
                <button type="button" onClick={onSelectCreative} className="panel-link">Explore My Work</button>
            </div>
        </div>
      </div>

      {/* Academic Panel (Right/Overlay) */}
      <div 
        id="academic-panel" 
        className="panel" 
        style={{ 
            clipPath: `inset(0 0 0 ${sliderPos}%)` 
        }}
      >
        <div 
            className="absolute inset-0 w-full h-full"
            style={{ transform: `translateX(${parallaxOffset * 0.8}px)` }} 
        >
            <div 
                id="academic-character" 
                className="character absolute 
                           top-[75%] left-1/2 -translate-x-1/2 opacity-70 scale-[0.6]
                           md:top-1/2 md:-translate-y-1/2 md:left-auto md:right-[15%] md:translate-x-0 md:opacity-100 md:scale-100"
            >
                <div className="character-head">
                    <div className="character-hair"></div>
                    <div className="eye left"><div className="pupil"></div></div>
                    <div className="eye right"><div className="pupil"></div></div>
                </div>
                <div className="character-body"><div className="tie"></div></div>
                {/* Tech/Business Icons */}
                <div style={{top: '5%', left: '-30%', animationDelay: '-0.5s'}} className="character-icon w-12 h-12"><i data-lucide="briefcase" className="w-6 h-6"></i></div>
                <div style={{top: '20%', right: '-40%', animationDelay: '-2.5s'}} className="character-icon w-12 h-12"><i data-lucide="trending-up" className="w-6 h-6"></i></div>
                <div style={{bottom: '60px', left: '-50%', animationDelay: '-4.5s'}} className="character-icon w-10 h-10"><i data-lucide="cpu" className="w-5 h-5"></i></div>
                <div style={{top: '-30px', left: '10%', animationDelay: '-1.5s'}} className="character-icon w-10 h-10"><i data-lucide="globe" className="w-5 h-5"></i></div>
            </div>

            <div className="panel-content absolute 
                            top-[30%] left-1/2 -translate-x-1/2 text-center 
                            md:top-1/2 md:-translate-y-1/2 md:left-[10%] md:translate-x-0 md:text-left pl-4 md:pl-0">
                <div className="panel-logo text-gray-500">PE.</div>
                <h1 className="panel-title text-red-600">Digital</h1>
                <p className="panel-description text-gray-600">MBA candidate specializing in the intersection of technology, marketing, and product design.</p>
                <button type="button" onClick={onSelectAcademic} className="panel-link">View My Profile</button>
            </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        id="slider-handle" 
        style={{ left: `${sliderPos}%` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div id="slider-handle-orb">
            <i data-lucide="chevron-left" className="text-white h-5 w-5"></i>
            <i data-lucide="chevron-right" className="text-gray-300 h-5 w-5"></i>
        </div>
      </div>
    </section>
  );
};
