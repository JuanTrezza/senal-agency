import React, { useState, useRef } from 'react';
import { Capability } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useTitleReveal } from '../hooks/useTitleReveal';
import { gsap, useGSAP } from '../lib/motion';
import { ArrowUpRight, Check } from 'lucide-react';

/** Desplazamiento horizontal de la preview respecto del cursor (px) */
const PREVIEW_OFFSET_X = 140;

interface CapacidadesProps {
  readonly onOpenContact: (triggerElement?: HTMLElement | null) => void;
}

export const Capacidades: React.FC<CapacidadesProps> = ({ onOpenContact }) => {
  const { lang, t } = useLanguage();
  const titleRef = useTitleReveal<HTMLHeadingElement>(lang);
  // Se guarda el id (no el objeto) para que la preview siga el idioma activo,
  // y se conserva al salir para que la imagen no desaparezca antes del fade.
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const snapPreviewRef = useRef<((x: number, y: number) => void) | null>(null);

  const capabilitiesList = t.capabilities.items as readonly Capability[];
  const previewCapability = capabilitiesList.find((cap) => cap.id === previewId) ?? null;

  // Preview flotante que sigue al mouse (solo desktop), sin re-renders: gsap.quickTo
  // interpola x/y hacia el cursor. Con reduced-motion sigue al cursor sin suavizado.
  useGSAP(
    () => {
      const section = containerRef.current;
      const preview = previewRef.current;
      if (!section || !preview) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          smooth: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
          reduce: '(min-width: 1024px) and (prefers-reduced-motion: reduce)',
        },
        (ctx) => {
          const { smooth } = ctx.conditions as { smooth: boolean };
          gsap.set(preview, { xPercent: -50, yPercent: -50 });

          const duration = smooth ? 0.5 : 0;
          const xTo = gsap.quickTo(preview, 'x', { duration, ease: 'power3.out' });
          const yTo = gsap.quickTo(preview, 'y', { duration, ease: 'power3.out' });

          const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX + PREVIEW_OFFSET_X);
            yTo(e.clientY);
          };
          section.addEventListener('mousemove', handleMouseMove);

          // Al entrar a la lista la preview salta al cursor en vez de viajar desde donde quedó
          snapPreviewRef.current = (x, y) => {
            xTo(x + PREVIEW_OFFSET_X, x + PREVIEW_OFFSET_X);
            yTo(y, y);
          };

          return () => {
            section.removeEventListener('mousemove', handleMouseMove);
            snapPreviewRef.current = null;
          };
        }
      );
    },
    { scope: containerRef }
  );

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="capacidades"
      ref={containerRef}
      className="w-full px-gutter-mobile lg:px-margin py-space-xl lg:py-24 border-b border-outline-variant bg-surface-container-low relative"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg pb-space-sm border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="font-mono text-label-md font-bold text-secondary-container">
              {t.capabilities.tagNumber}
            </span>
            <span className="font-mono text-label-md uppercase tracking-wider text-on-surface-variant">
              {t.capabilities.tagLabel}
            </span>
          </div>
          <h2 key={lang} ref={titleRef} className="font-headline text-[36px] sm:text-[44px] lg:text-[54px] lg:leading-[58px] uppercase tracking-tighter text-primary font-bold">
            {t.capabilities.title}
          </h2>
        </div>
        <p className="font-body text-body-md text-on-surface-variant max-w-md">
          {t.capabilities.description}
        </p>
      </div>

      {/* Editorial Interactive List */}
      <div
        className="flex flex-col border-t border-outline-variant"
        onMouseEnter={(e) => snapPreviewRef.current?.(e.clientX, e.clientY)}
      >
        {capabilitiesList.map((cap) => {
          const isExpanded = expandedId === cap.id;

          return (
            <div
              key={cap.id}
              className="border-b border-outline-variant"
            >
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={`cap-content-${cap.id}`}
                onClick={() => toggleExpand(cap.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(cap.id);
                  }
                }}
                onMouseEnter={() => {
                  setPreviewId(cap.id);
                  setIsPreviewVisible(true);
                }}
                onMouseLeave={() => setIsPreviewVisible(false)}
                className="group py-space-md lg:py-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-space-md hover:bg-surface transition-colors px-2 lg:px-4 cursor-pointer focus:outline-none focus:bg-surface"
              >
                {/* Index & Title */}
                <div className="flex items-baseline gap-space-md">
                  <span className="font-mono text-label-md text-on-surface-variant group-hover:text-secondary-container">
                    {cap.number}
                  </span>
                  <h3
                    id={`cap-title-${cap.id}`}
                    className="font-headline text-2xl sm:text-3xl lg:text-[40px] lg:leading-[44px] text-primary uppercase font-extrabold tracking-tight group-hover:translate-x-2 transition-transform"
                  >
                    {cap.title}
                  </h3>
                </div>

                {/* Subtitle Tags & Action button */}
                <div className="flex items-center justify-between lg:justify-end gap-space-lg">
                  <div className="flex items-center gap-2 font-mono text-label-sm text-on-surface-variant uppercase">
                    <span>{cap.subtitleTags}</span>
                  </div>
                  <span className="font-mono text-label-md text-primary group-hover:text-secondary-container">
                    {isExpanded ? t.capabilities.collapseAction : t.capabilities.discoverAction}
                  </span>
                </div>
              </div>

              {/* Expandable Deliverables Drawer */}
              {isExpanded && (
                <div
                  id={`cap-content-${cap.id}`}
                  role="region"
                  aria-labelledby={`cap-title-${cap.id}`}
                  className="bg-surface p-space-md lg:p-space-lg border-t border-dashed border-outline-variant"
                >
                  <div className="max-w-4xl space-y-space-md">
                    <p className="font-body text-base lg:text-lg text-on-surface leading-relaxed">
                      {cap.description}
                    </p>

                    <div>
                      <span className="font-mono text-label-sm uppercase text-on-surface-variant block mb-2 font-semibold">
                        {t.capabilities.deliverablesTitle}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cap.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant font-mono text-label-sm"
                          >
                            <Check className="w-3.5 h-3.5 text-secondary-container shrink-0" />
                            <span className="text-on-surface">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={(e) => onOpenContact(e.currentTarget)}
                        className="inline-flex items-center gap-1.5 bg-primary text-on-primary px-space-md py-2 font-mono text-label-sm uppercase hover:bg-secondary-container transition-colors cursor-pointer"
                      >
                        <span>{t.capabilities.hireDiscipline}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Hover Image Preview (Desktop Only, Follows Mouse) */}
      {/* Siempre montada para que quickTo tenga destino; se muestra por opacidad */}
      <div
        ref={previewRef}
        className={`hidden lg:block fixed left-0 top-0 pointer-events-none z-40 transition-opacity duration-150 ${
          isPreviewVisible && previewCapability ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        {previewCapability && (
          <div className="w-[280px] h-[180px] bg-primary border-2 border-primary overflow-hidden shadow-[6px_6px_0px_var(--color-primary)]">
            <img
              src={previewCapability.previewImage}
              alt={`${t.capabilities.previewAltPrefix} ${previewCapability.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-secondary-container/15 mix-blend-multiply" />
            <div className="absolute bottom-2 left-2 right-2 bg-primary/90 text-on-primary p-1 text-center font-mono text-[9px] uppercase tracking-wider">
              {previewCapability.title}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
