import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTitleReveal } from '../hooks/useTitleReveal';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';

interface FaqSectionProps {
  readonly onOpenContact: (triggerElement?: HTMLElement | null) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const { lang, t } = useLanguage();
  const titleRef = useTitleReveal<HTMLHeadingElement>(lang);
  const [openId, setOpenId] = useState<string | null>('onboarding-proceso');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full px-gutter-mobile lg:px-margin py-space-xl lg:py-24 border-b border-outline-variant bg-surface"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg pb-space-md border-b border-outline-variant">
        <div>
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="font-mono text-label-md font-bold text-secondary-container">
              {t.faqs.tagNumber}
            </span>
            <span className="font-mono text-label-md uppercase tracking-wider text-on-surface-variant">
              {t.faqs.tagLabel}
            </span>
          </div>
          <h2 key={lang} ref={titleRef} className="font-headline text-[36px] sm:text-[44px] lg:text-[54px] lg:leading-[58px] uppercase tracking-tighter text-primary font-bold">
            {t.faqs.title}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
          <p className="font-body text-body-sm text-on-surface-variant max-w-sm">
            {t.faqs.description}
          </p>
          <button
            type="button"
            onClick={(e) => onOpenContact(e.currentTarget)}
            className="inline-flex items-center gap-1.5 px-space-md py-2 border border-primary text-primary font-mono text-label-sm uppercase hover:bg-primary hover:text-on-primary transition-colors shrink-0 cursor-pointer"
          >
            <span>{t.faqs.askOtherBtn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col border-t border-outline-variant">
        {t.faqs.items.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="border-b border-outline-variant"
            >
              {/* Accordion Trigger */}
              <button
                type="button"
                id={`faq-btn-${faq.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${faq.id}`}
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left py-space-md lg:py-space-lg flex flex-col lg:flex-row lg:items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors px-2 lg:px-4 cursor-pointer focus:outline-none focus:bg-surface-container-low group"
              >
                {/* Index + Question */}
                <div className="flex items-start lg:items-baseline gap-space-md flex-1">
                  <span className="font-mono text-label-md text-on-surface-variant group-hover:text-secondary-container shrink-0 mt-0.5 lg:mt-0">
                    {faq.number}
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl lg:text-[28px] lg:leading-tight text-primary uppercase font-bold tracking-tight group-hover:text-secondary-container transition-colors">
                    {faq.question}
                  </h3>
                </div>

                {/* Category & Status Indicator */}
                <div className="flex items-center justify-between lg:justify-end gap-space-lg shrink-0">
                  <span className="font-mono text-label-sm text-on-surface-variant uppercase tracking-wider hidden sm:inline">
                    [{faq.category}]
                  </span>
                  <div className="flex items-center gap-1 font-mono text-label-md text-primary group-hover:text-secondary-container font-semibold">
                    <span className="hidden md:inline">
                      {isOpen ? t.faqs.collapse : t.faqs.expand}
                    </span>
                    <span className="w-6 h-6 border border-outline-variant flex items-center justify-center bg-surface group-hover:border-primary">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-secondary-container" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-primary" />
                      )}
                    </span>
                  </div>
                </div>
              </button>

              {/* Accordion Content Panel */}
              {isOpen && (
                <div
                  id={`faq-content-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="bg-surface-container-low p-space-md lg:p-space-lg border-t border-dashed border-outline-variant"
                >
                  <div className="max-w-4xl space-y-space-md">
                    <p className="font-body text-base lg:text-lg text-on-surface leading-relaxed font-normal">
                      {faq.answer}
                    </p>

                    {faq.details && faq.details.length > 0 && (
                      <div className="pt-2">
                        <span className="font-mono text-label-sm uppercase text-on-surface-variant block mb-2 font-semibold">
                          {t.faqs.keyPointsTitle}
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {faq.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="p-3 bg-surface border border-outline-variant flex items-start gap-2"
                            >
                              <Check className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
                              <span className="font-body text-body-sm text-on-surface leading-snug">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex items-center justify-between border-t border-outline-variant/60">
                      <span className="font-mono text-[11px] text-on-surface-variant uppercase">
                        {t.faqs.customQueryPrompt}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => onOpenContact(e.currentTarget)}
                        className="inline-flex items-center gap-1 font-mono text-label-sm text-primary hover:text-secondary-container uppercase font-semibold cursor-pointer"
                      >
                        <span>{t.faqs.directConnect}</span>
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
    </section>
  );
};
