import React, { useState, useRef } from 'react';
import { CaseStudy, DisciplineFilter } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useTitleReveal } from '../hooks/useTitleReveal';
import { CaseModal } from './CaseModal';

interface CasesBentoProps {
  readonly onOpenContact: (triggerElement?: HTMLElement | null) => void;
}

export const CasesBento: React.FC<CasesBentoProps> = ({ onOpenContact }) => {
  const { lang, t } = useLanguage();
  const titleRef = useTitleReveal<HTMLHeadingElement>(lang);
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineFilter>('todos');
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [activeTrigger, setActiveTrigger] = useState<HTMLElement | null>(null);

  const casesList = t.cases.items as readonly CaseStudy[];

  const filteredCases = selectedDiscipline === 'todos'
    ? casesList
    : casesList.filter((item) => item.disciplines.includes(selectedDiscipline));

  const filterOptions: readonly { readonly id: DisciplineFilter; readonly label: string }[] = [
    { id: 'todos', label: t.cases.filters.todos },
    { id: 'campana360', label: t.cases.filters.campana360 },
    { id: 'branding', label: t.cases.filters.branding },
    { id: 'social', label: t.cases.filters.social },
    { id: 'experiencial', label: t.cases.filters.experiencial },
    { id: 'audiovisual', label: t.cases.filters.audiovisual },
  ];

  const handleOpenCase = (caseItem: CaseStudy, trigger: HTMLElement | null) => {
    setActiveTrigger(trigger);
    setActiveCase(caseItem);
  };

  const handleCloseCase = () => {
    setActiveCase(null);
  };

  return (
    <section
      id="trabajos"
      className="w-full px-gutter-mobile lg:px-margin py-space-xl border-b border-outline-variant bg-surface"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg pb-space-md border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="font-mono text-label-md font-bold text-secondary-container">
              {t.cases.tagNumber}
            </span>
            <span className="font-mono text-label-md uppercase tracking-wider text-on-surface-variant">
              {t.cases.tagLabel}
            </span>
          </div>
          <h2 key={lang} ref={titleRef} className="font-headline text-[36px] sm:text-[44px] lg:text-[54px] lg:leading-[58px] uppercase tracking-tighter text-primary font-bold">
            {t.cases.title}
          </h2>
        </div>

        {/* Filter Bar */}
        <div
          role="toolbar"
          aria-label={t.cases.filterToolbarAria}
          className="flex flex-wrap items-center gap-1.5 font-mono text-label-sm"
        >
          <span className="text-on-surface-variant uppercase mr-1 hidden sm:inline">
            {t.cases.filterLabel}
          </span>
          {filterOptions.map((f) => {
            const isActive = selectedDiscipline === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedDiscipline(f.id)}
                className={`px-2 py-1 uppercase tracking-wider transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-secondary-container text-on-secondary border-secondary-container font-bold'
                    : 'bg-surface text-on-surface border-outline-variant hover:border-primary'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bento Grid (12-col structure) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
        {filteredCases.map((caseItem) => (
          <CaseItemCard
            key={caseItem.id}
            caseStudy={caseItem}
            onSelect={(trigger) => handleOpenCase(caseItem, trigger)}
          />
        ))}
      </div>

      {/* Archive Link */}
      <div className="mt-space-lg flex justify-end">
        <button
          type="button"
          onClick={(e) => {
            setSelectedDiscipline('todos');
            handleOpenCase(casesList[0], e.currentTarget);
          }}
          className="px-space-md py-space-sm border border-primary text-primary font-mono text-label-md uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
        >
          {t.cases.exploreArchive}
        </button>
      </div>

      {/* Detail Modal */}
      <CaseModal
        caseStudy={activeCase}
        onClose={handleCloseCase}
        onOpenContact={() => onOpenContact(activeTrigger)}
        triggerElement={activeTrigger}
      />
    </section>
  );
};

interface CaseItemCardProps {
  readonly caseStudy: CaseStudy;
  readonly onSelect: (trigger: HTMLElement) => void;
}

const CaseItemCard: React.FC<CaseItemCardProps> = ({ caseStudy, onSelect }) => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <article
      ref={cardRef}
      tabIndex={0}
      role="button"
      aria-label={`${t.cases.cardAriaPrefix} ${caseStudy.title} ${t.cases.forClient} ${caseStudy.client}`}
      className={`${caseStudy.colSpan} group relative bg-surface-container border border-outline-variant hover:border-primary transition-all flex flex-col justify-between overflow-hidden cursor-pointer`}
      onClick={() => {
        if (cardRef.current) onSelect(cardRef.current);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (cardRef.current) onSelect(cardRef.current);
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative w-full ${caseStudy.heightClass} overflow-hidden bg-primary`}>
        {/* Static Background Image Fallback */}
        <div
          className={`w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 ${
            isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url('${caseStudy.coverImage}')` }}
          role="img"
          aria-label={`${t.cases.photoAltPrefix} ${caseStudy.title} ${t.cases.forClient} ${caseStudy.client}`}
        />

        {/* Hover Video Element (Desktop) */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className={`hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isPlaying ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <source src={caseStudy.videoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent pointer-events-none" />

        {/* Badges & Top Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span
            className={`font-mono text-label-sm px-2 py-1 uppercase tracking-widest font-semibold ${
              caseStudy.isBadgeElectric
                ? 'bg-secondary-container text-on-secondary'
                : 'bg-surface text-on-surface'
            }`}
          >
            {caseStudy.badgeText}
          </span>
          {caseStudy.badgeRight && (
            <span className="bg-primary/90 text-on-primary font-mono text-label-sm px-2 py-1 uppercase">
              {caseStudy.badgeRight}
            </span>
          )}
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
          <span className="font-mono text-label-sm text-surface uppercase block mb-1">
            {caseStudy.client}
          </span>
          <h3 className="font-headline text-2xl lg:text-[34px] lg:leading-tight text-on-primary uppercase tracking-tighter font-extrabold">
            {caseStudy.title}
          </h3>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface">
        <div className="flex flex-wrap gap-1.5 font-mono text-label-sm">
          {caseStudy.tags.map((tag) => (
            <span
              key={tag}
              className="border border-outline-variant px-2 py-0.5 uppercase text-on-surface"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className="font-mono text-label-sm font-bold uppercase tracking-wider text-primary group-hover:text-secondary-container transition-colors inline-flex items-center gap-1 pointer-events-none"
        >
          {t.cases.viewFullCase}
        </span>
      </div>
    </article>
  );
};
