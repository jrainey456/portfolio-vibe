import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;
      const intersectionRatio = entry.intersectionRatio;
      
      if (isVisible && intersectionRatio > 0.1) {
        // Fade in when element becomes visible
        setIsIntersecting(true);
        setHasIntersected(true);
      } else if (intersectionRatio === 0) {
        // Reset when completely out of view so it can animate again
        setIsIntersecting(false);
        setHasIntersected(false);
      }
    }, {
      threshold: [0, 0.1, 0.2, 0.5, 0.8],
      rootMargin: '-80px 0px -10% 0px', // Account for navbar height
      ...options
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return [elementRef, isIntersecting, hasIntersected];
};

export default useIntersectionObserver;