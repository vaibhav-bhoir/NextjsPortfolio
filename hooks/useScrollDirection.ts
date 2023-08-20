import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

const useScrollDirection = (): ScrollDirection => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(null);

  useEffect(() => {
    let threshold = 120; 

    
    if (window.innerWidth < 768) {
        threshold = 80;
    }
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollDir;
};

export default useScrollDirection;
