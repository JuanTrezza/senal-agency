import React, { useState, useRef, useEffect } from 'react';
import { Capability } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowUpRight, Check } from 'lucide-react';

interface CapacidadesProps {
  readonly onOpenContact: (triggerElement?: HTMLElement | null) => void;
}

export const Capacidades: React.FC<CapacidadesProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();
  const [hoveredCapability, setHoveredCapability] = useState<Capability | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const capabilitiesList = t.capabilities.items as readonly Capability[];

  // Smooth mouse tracker for desktop floating preview
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
          <h2 className="font-headline text-[36px] sm:text-[44px] lg:text-[54px] lg:leading-[58px] uppercase tracking-tighter text-primary font-bold">
            {t.capabilities.title}
          </h2>
        </div>
        <p className="font-body text-body-md text-on-surface-variant max-w-md">
          {t.capabilities.description}
        </p>
      </div>

      {/* Editorial Interactive List */}
      <div className="flex flex-col border-t border-outline-variant">
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
                onMouseEnter={() => setHoveredCapability(cap)}
                onMouseLeave={() => setHoveredCapability(null)}
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
      {hoveredCapability && (
        <div
          className="hidden lg:block fixed pointer-events-none z-40 transition-opacity duration-150 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x + 140}px`,
            top: `${mousePos.y}px`,
          }}
          aria-hidden="true"
        >
          <div className="w-[280px] h-[180px] bg-primary border-2 border-primary overflow-hidden shadow-[6px_6px_0px_var(--color-primary)]">
            <img
              src={hoveredCapability.previewImage}
              alt={`${t.capabilities.previewAltPrefix} ${hoveredCapability.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-secondary-container/15 mix-blend-multiply" />
            <div className="absolute bottom-2 left-2 right-2 bg-primary/90 text-on-primary p-1 text-center font-mono text-[9px] uppercase tracking-wider">
              {hoveredCapability.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
