import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTitleReveal } from '../hooks/useTitleReveal';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
  readonly onOpenContact: (triggerElement?: HTMLElement | null) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  const { lang, t } = useLanguage();
  const titleRef = useTitleReveal<HTMLHeadingElement>(lang);

  return (
    <section
      id="contacto"
      className="w-full bg-[#2B3BFF] text-white px-gutter-mobile lg:px-margin py-space-xl lg:py-28 relative overflow-hidden"
    >
      {/* Giant typographic watermark in background */}
      <div
        className="absolute -right-10 -bottom-10 pointer-events-none select-none opacity-10 font-headline text-[160px] sm:text-[220px] lg:text-[280px] leading-none uppercase font-black text-white"
        aria-hidden="true"
      >
        {t.cta.watermark}
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 border border-white/30 px-3 py-1 font-mono text-label-sm uppercase tracking-widest mb-space-lg text-white bg-black/20">
          <span
            className="w-2 h-2 rounded-full bg-white animate-ping"
            aria-hidden="true"
          />
          <span>{t.cta.pill}</span>
        </div>

        <h2 key={lang} ref={titleRef} className="font-headline text-4xl sm:text-6xl lg:text-[88px] lg:leading-[88px] uppercase tracking-tighter font-extrabold text-white mb-space-lg">
          {t.cta.titleLine1}
          <br />
          {t.cta.titleLine2}
        </h2>

        <p className="font-body text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mb-space-xl font-normal leading-relaxed">
          {t.cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md">
          {/* High Contrast Button */}
          <button
            type="button"
            onClick={(e) => onOpenContact(e.currentTarget)}
            className="inline-flex items-center justify-center gap-2 bg-[#111111] text-white font-mono text-label-md uppercase tracking-wider px-space-xl py-4 hover:bg-white hover:text-[#111111] transition-all shadow-[4px_4px_0px_#ffffff] cursor-pointer"
          >
            <span>{t.cta.buttonText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 border border-white/30 px-space-md py-3.5 font-mono text-sm tracking-wide bg-black/15">
            <span className="text-white/70">{t.cta.directMailLabel}</span>
            <a
              className="text-white font-bold hover:underline"
              href="mailto:HOLA@SENAL.AGENCY"
            >
              HOLA@SENAL.AGENCY
            </a>
          </div>
        </div>

        {/* Live status tag */}
        <div className="mt-space-xl pt-space-md border-t border-white/20 flex flex-wrap items-center gap-space-md font-mono text-label-sm uppercase text-white/80">
          <span className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-white"
              aria-hidden="true"
            />
            {t.cta.statusCalendar}
          </span>
          <span aria-hidden="true">•</span>
          <span>{t.cta.statusResponse}</span>
          <span aria-hidden="true">•</span>
          <span>{t.cta.statusLocation}</span>
        </div>
      </div>
    </section>
  );
};
