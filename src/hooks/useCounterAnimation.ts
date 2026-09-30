import { useState, useRef } from 'react';
import { gsap, useGSAP } from '../lib/motion';

/**
 * Hook para animar contadores numéricos al entrar en el viewport (ScrollTrigger).
 * El número lo sigue renderizando React (así respeta el formato del idioma) y solo
 * se actualiza cuando cambia el entero. Con `prefers-reduced-motion` muestra el
 * valor final de inmediato, también si la preferencia cambia con la página abierta.
 */
export function useCounterAnimation(
  targetValue: number,
  duration = 1.8
): { readonly count: number; readonly elementRef: React.RefObject<HTMLDivElement | null> } {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useGSAP(
    () => {
      const element = elementRef.current;
      if (!element) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          reduce: '(prefers-reduced-motion: reduce)',
        },
        (ctx) => {
          const { reduce } = ctx.conditions as { reduce: boolean };

          if (reduce || hasAnimatedRef.current) {
            setCount(targetValue);
            return;
          }

          const counter = { value: 0 };
          let lastValue = 0;

          gsap.to(counter, {
            value: targetValue,
            duration,
            // Equivale al ease-out cubic de la versión anterior
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 85%', once: true },
            onUpdate: () => {
              const next = Math.floor(counter.value);
              if (next !== lastValue) {
                lastValue = next;
                setCount(next);
              }
            },
            onComplete: () => {
              hasAnimatedRef.current = true;
              setCount(targetValue);
            },
          });
        }
      );
    },
    { scope: elementRef, dependencies: [targetValue, duration] }
  );

  return { count, elementRef };
}
