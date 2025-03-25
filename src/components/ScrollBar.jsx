import React, { useState, useEffect } from 'react';

const ScrollBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / scrollableHeight) * 100;
        setScrollProgress(progress);
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div 
        className="fixed top-1/2 right-8 -translate-y-1/2 z-[100] w-1 h-3/4 bg-gray-300/20"
        style={{ zIndex: 100 }}
      >
        <div 
          className="absolute right-0 w-full bg-purple-400 transition-all duration-100" 
          style={{ 
            height: `${scrollProgress}%`,
            maxHeight: '100%'
          }}
        />
      </div>
    );
  };

export default ScrollBar;