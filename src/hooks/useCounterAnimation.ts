import { useEffect, useState, useRef } from 'react';

/**
 * Hook para animar contadores numéricos al entrar en el viewport.
 * Respeta `prefers-reduced-motion` pasando al valor final de inmediato.
 */
export function useCounterAnimation(
  targetValue: number,
  duration = 1800
): { readonly count: number; readonly elementRef: React.RefObject<HTMLDivElement | null> } {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          if (prefersReducedMotion) {
            setCount(targetValue);
            return;
          }

          const startTime = performance.now();

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing out cubic: 1 - pow(1 - progress, 3)
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * targetValue);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [targetValue, duration]);

  return { count, elementRef };
}
