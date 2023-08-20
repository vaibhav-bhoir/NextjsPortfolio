import { useEffect, RefObject } from 'react';

interface UseOutsideClickOptions {
  ref: RefObject<HTMLElement>;
  callback: () => void;
}

function useOutsideClick({ ref, callback }: UseOutsideClickOptions): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
