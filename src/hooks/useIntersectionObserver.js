import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isVisible = entry.isIntersecting;
      const intersectionRatio = entry.intersectionRatio;
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      if (isVisible && intersectionRatio > 0.1) {
        // Fade in when element becomes visible
        setIsIntersecting(true);
        setHasIntersected(true);
      } else if (intersectionRatio === 0) {
        // Only fade out when scrolling up (not when scrolling down past it)
        if (!isScrollingDown) {
          setIsIntersecting(false);
          setHasIntersected(false);
        }
      }

      lastScrollY.current = currentScrollY;
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