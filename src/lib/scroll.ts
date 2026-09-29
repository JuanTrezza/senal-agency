import { getLenis, prefersReducedMotion } from './motion';

/**
 * Utilidad centralizada de scroll para SEÑAL®.
 * Cumple con el requisito estricto de navegación interna sin usar scrollIntoView
 * suelto en componentes ni scroll-smooth global. Usa Lenis cuando está activo.
 */
const HEADER_OFFSET = 64; // Altura fija del header (h-16 = 64px)

export function scrollToId(id: string): void {
  // Limpiar el selector en caso de recibir '#'
  const cleanId = id.replace(/^#/, '');
  const targetElement = document.getElementById(cleanId);

  if (!targetElement) {
    return;
  }

  const lenis = getLenis();

  // Sin Lenis (reduced-motion o antes de inicializar): scroll nativo
  if (!lenis) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
    return;
  }

  const run = () =>
    lenis.scrollTo(targetElement, {
      offset: -HEADER_OFFSET,
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

  // Si un overlay (menú mobile) se cerró en el mismo handler, Lenis sigue detenido
  // hasta que corre la limpieza de su lock: esperar un frame antes de scrollear.
  if (lenis.isStopped) requestAnimationFrame(run);
  else run();
}
