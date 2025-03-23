import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">labarberabrian00@gmail.com</div>
        
        <div className="hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
        
        <button 
          className="text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      
      <div 
        className={`bg-black/90 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white text-left py-2 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;