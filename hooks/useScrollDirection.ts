import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

const useScrollDirection = (): { scrollDir: ScrollDirection; isScrolled: boolean } => {
  const [scrollDir, setScrollDir] = useState<ScrollDirection>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let threshold = window.innerWidth < 768 ? 80 : 250;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
      } else {
        setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      }

      // Update scroll status
      setIsScrolled(scrollY > 0);
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

  return { scrollDir, isScrolled };
};

export default useScrollDirection;
