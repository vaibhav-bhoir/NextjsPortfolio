import { useEffect, RefObject } from 'react';

interface UseOutsideClickHook {
  (ref: RefObject<HTMLElement>, callback: () => void): void;
}

const useOutsideClick: UseOutsideClickHook = (ref, callback) => {
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
};

export default useOutsideClick;
