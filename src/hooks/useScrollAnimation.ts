import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Hook for staggered animations
export function useStaggerAnimation<T extends HTMLElement>(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) {
  const { ref, isVisible } = useScrollAnimation<T>(options);

  const getStaggerDelay = (index: number, baseDelay = 100) => {
    // Ensure index doesn't exceed itemCount for safety
    const safeIndex = Math.min(index, itemCount - 1);
    return `${safeIndex * baseDelay}ms`;
  };

  return { ref, isVisible, getStaggerDelay, itemCount };
}
