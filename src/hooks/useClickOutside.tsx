import { useEffect, type RefObject } from "react";

/** 
 *  Used by components that have triggered events when clicking outside of itself
 *  e.g. Close dropdown menu when click outside
 */
export function useClickOutside(refs: RefObject<HTMLElement | null>[], callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (refs.every((ref) => ref.current && !ref.current.contains(target))) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, callback]);
}


