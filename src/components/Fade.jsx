import React, { useEffect, useRef, useState } from 'react';

const Fade = ({ children, direction = 'up', delay = 0, duration = 0.8 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  const getTransitionStyles = () => {
    const baseStyle = {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}s ease-in-out, transform ${duration}s ease-in-out`,
      transitionDelay: `${delay}s`,
    };

    switch (direction) {
      case 'up':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        };
      case 'down':
        return {
          ...baseStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
        };
      default:
        return {
          ...baseStyle,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        };
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={domRef}
      style={getTransitionStyles()}
    >
      {children}
    </div>
  );
};

export default Fade;