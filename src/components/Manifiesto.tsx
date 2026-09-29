import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const Manifiesto: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="manifiesto"
      className="w-full px-gutter-mobile lg:px-margin py-space-xl lg:py-24 bg-surface-container-low border-b border-outline-variant"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter">
        {/* Left Column: Index & Stamp */}
        <div className="lg:col-span-3 flex flex-col justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="font-mono text-label-md font-bold text-secondary-container">
              {t.manifiesto.tagNumber}
            </span>
            <span className="font-mono text-label-md uppercase tracking-wider text-primary">
              {t.manifiesto.tagLabel}
            </span>
          </div>

          <div className="hidden lg:block pt-space-xl">
            <div className="w-12 h-12 border border-primary flex items-center justify-center font-mono text-label-md font-bold text-primary select-none">
              SE
            </div>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase block mt-2 tracking-wider">
              {t.manifiesto.stampSubtitle}
            </span>
          </div>
        </div>

        {/* Right Column: Statement */}
        <div className="lg:col-span-9 flex flex-col">
          <blockquote className="font-body text-xl sm:text-2xl lg:text-[34px] lg:leading-[42px] font-normal text-on-surface tracking-tight max-w-5xl">
            {t.manifiesto.paragraphPart1}
            <span className="font-bold text-primary underline decoration-secondary-container decoration-2 underline-offset-4">
              {t.manifiesto.paragraphWhiteNoise}
            </span>
            {t.manifiesto.paragraphPart2}
            <span className="font-bold text-primary bg-surface-container-highest px-1.5 py-0.5">
              {t.manifiesto.paragraphCulture}
            </span>
            {t.manifiesto.paragraphPart3}
            <span className="font-bold text-secondary-container">
              {t.manifiesto.paragraphDisruption}
            </span>
            {t.manifiesto.paragraphPart4}
            <span className="font-bold text-primary bg-surface-container-highest px-1.5 py-0.5">
              {t.manifiesto.paragraphMovements}
            </span>
            {t.manifiesto.paragraphPart5}
            <span className="font-bold text-primary">
              {t.manifiesto.paragraphClosing}
            </span>
          </blockquote>

          <div className="mt-space-xl pt-space-md border-t border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm font-mono text-label-sm uppercase text-on-surface-variant">
            <span className="text-primary font-semibold">
              [{t.manifiesto.stampTitle} — PALERMO, BSAS]
            </span>
            <span>{t.hero.subBarCoords}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
