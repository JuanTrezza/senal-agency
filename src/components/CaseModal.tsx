import React from 'react';
import { CaseStudy } from '../types';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useLanguage } from '../i18n/LanguageContext';
import { X, ArrowUpRight, Award } from 'lucide-react';

interface CaseModalProps {
  readonly caseStudy: CaseStudy | null;
  readonly onClose: () => void;
  readonly onOpenContact: () => void;
  readonly triggerElement?: HTMLElement | null;
}

export const CaseModal: React.FC<CaseModalProps> = ({
  caseStudy,
  onClose,
  onOpenContact,
  triggerElement,
}) => {
  const { t } = useLanguage();
  const modalRef = useFocusTrap(!!caseStudy, onClose, triggerElement);

  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-primary/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-4xl max-h-[92vh] bg-surface border border-primary flex flex-col overflow-hidden shadow-[8px_8px_0px_var(--color-primary)] focus:outline-none"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-space-md py-space-sm border-b border-outline-variant bg-surface-container-low">
          <div className="flex items-center gap-space-sm">
            <span className="font-mono text-label-sm font-bold text-secondary-container">
              {caseStudy.number} {t.caseModal.archiveBadge}
            </span>
            <span className="font-mono text-label-sm uppercase text-on-surface-variant">
              {caseStudy.client}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-primary hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
            aria-label={t.caseModal.closeAria}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="overflow-y-auto p-space-md lg:p-space-lg space-y-space-lg">
          {/* Media Header (Video/Cover) */}
          <div className="relative w-full aspect-video bg-primary overflow-hidden border border-outline-variant">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              poster={caseStudy.coverImage}
            >
              <source src={caseStudy.videoUrl} type="video/mp4" />
              {t.caseModal.videoFallback}
            </video>

            <div className="absolute top-3 left-3 pointer-events-none">
              <span
                className={`font-mono text-label-sm px-2 py-1 uppercase tracking-widest font-semibold ${
                  caseStudy.isBadgeElectric
                    ? 'bg-secondary-container text-on-secondary'
                    : 'bg-surface text-on-surface'
                }`}
              >
                {caseStudy.badgeText}
              </span>
            </div>
          </div>

          {/* Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-label-sm text-on-surface-variant uppercase">
              <span>{caseStudy.client}</span>
              <span>•</span>
              <span>{t.caseModal.yearPrefix} {caseStudy.year}</span>
              <span>•</span>
              <span className="text-secondary-container font-semibold">
                {t.caseModal.certifiedRecord}
              </span>
            </div>

            <h2
              id="modal-case-title"
              className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter font-extrabold text-primary"
            >
              {caseStudy.title}
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-label-sm border border-outline-variant bg-surface-container-low px-2 py-0.5 uppercase text-on-surface"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative Grid: Desafío, Solución, Impacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md border-t border-b border-outline-variant py-space-md">
            <div>
              <span className="font-mono text-label-sm text-on-surface-variant uppercase block mb-1">
                {t.caseModal.challengeHeader}
              </span>
              <p className="font-body text-body-md text-on-surface leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div>
              <span className="font-mono text-label-sm text-secondary-container uppercase block mb-1">
                {t.caseModal.solutionHeader}
              </span>
              <p className="font-body text-body-md text-on-surface leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            <div>
              <span className="font-mono text-label-sm text-primary font-bold uppercase block mb-1">
                {t.caseModal.impactHeader}
              </span>
              <p className="font-body text-body-md text-on-surface leading-relaxed">
                {caseStudy.impact}
              </p>
            </div>
          </div>

          {/* Metrics Row */}
          <div>
            <span className="font-mono text-label-sm text-on-surface-variant uppercase block mb-3">
              {t.caseModal.metricsHeader}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {caseStudy.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 bg-surface-container border border-outline-variant"
                >
                  <div className="font-headline text-2xl sm:text-3xl font-black text-primary uppercase">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-on-surface-variant uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credits */}
          <div className="p-space-md bg-surface-container-low border border-outline-variant flex flex-col sm:flex-row justify-between gap-space-sm font-mono text-label-sm text-on-surface-variant">
            <div>
              <span className="text-primary font-semibold block uppercase">
                {t.caseModal.creativeDirection}
              </span>
              <span>{caseStudy.credits.director}</span>
            </div>
            <div>
              <span className="text-primary font-semibold block uppercase">
                {t.caseModal.culturalStrategy}
              </span>
              <span>{caseStudy.credits.strategy}</span>
            </div>
            <div>
              <span className="text-primary font-semibold block uppercase">
                {t.caseModal.soundDesign}
              </span>
              <span>{caseStudy.credits.sound}</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-space-md py-space-sm border-t border-outline-variant bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-2 font-mono text-label-sm text-primary">
            <Award className="w-4 h-4 text-secondary-container" />
            <span>{t.caseModal.masterReelAvailable}</span>
          </div>

          <div className="flex items-center gap-space-sm">
            <button
              type="button"
              onClick={onClose}
              className="px-space-md py-2 border border-outline-variant font-mono text-label-sm uppercase hover:bg-surface-variant transition-colors cursor-pointer"
            >
              {t.caseModal.closeBtn}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="bg-primary text-on-primary px-space-md py-2 font-mono text-label-sm uppercase flex items-center gap-1 hover:bg-secondary-container hover:text-on-secondary transition-colors cursor-pointer"
            >
              <span>{t.caseModal.discussSimilar}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
