/**
 * Utilidad centralizada de scroll para SEÑAL®.
 * Cumple con el requisito estricto de navegación interna sin usar scrollIntoView
 * suelto en componentes ni scroll-smooth global.
 */
export function scrollToId(id: string): void {
  // Limpiar el selector en caso de recibir '#'
  const cleanId = id.replace(/^#/, '');
  const targetElement = document.getElementById(cleanId);

  if (!targetElement) {
    return;
  }

  // Respetar prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const headerOffset = 64; // Altura fija del header (h-16 = 64px)
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}
