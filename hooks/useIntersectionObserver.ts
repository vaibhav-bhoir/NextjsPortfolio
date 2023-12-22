import { useEffect, useRef } from 'react';

type IntersectionObserverHookProps = {
  target: Element | null;
  callback: (entry: IntersectionObserverEntry) => void;
  options?: IntersectionObserverInit;
};

const useIntersectionObserver = ({
  target,
  callback,
  options = {
    threshold: 0.7,
  },
}: IntersectionObserverHookProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!target) {
      console.warn('Intersection Observer hook: Invalid target.');
      return;
    }

    observer.current = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, options);

    observer.current.observe(target);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [target, callback, options]);
};

export default useIntersectionObserver;
