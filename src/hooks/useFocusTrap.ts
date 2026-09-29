import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Hook para atrapar el foco dentro de un modal y restaurarlo al elemento previo
 * al cerrarse, además de gestionar el cierre mediante la tecla Escape.
 */
export function useFocusTrap(
  isOpen: boolean,
  onClose: () => void,
  triggerElement?: HTMLElement | null
): React.RefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Guardar el elemento que disparó la apertura
      triggerRef.current = triggerElement || (document.activeElement as HTMLElement | null);

      // Bloquear scroll de fondo
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Esperar al siguiente frame para enfocar el primer elemento interactivo
      const timeoutId = window.setTimeout(() => {
        if (!containerRef.current) return;
        const focusable = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusable.length > 0) {
          focusable[0].focus();
        } else {
          containerRef.current.focus();
        }
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        if (e.key === 'Tab') {
          if (!containerRef.current) return;
          const focusable = Array.from(
            containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
          ).filter((el) => el.offsetParent !== null); // Visibles

          if (focusable.length === 0) {
            e.preventDefault();
            return;
          }

          const firstElement = focusable[0];
          const lastElement = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement || document.activeElement === containerRef.current) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = originalOverflow;

        // Restaurar foco al elemento que abrió el modal
        if (triggerRef.current && typeof triggerRef.current.focus === 'function') {
          triggerRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose, triggerElement]);

  return containerRef;
}
