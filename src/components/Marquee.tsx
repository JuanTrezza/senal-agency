import React from 'react';
import { CLIENTS_DATA } from '../data/clients';
import { useLanguage } from '../i18n/LanguageContext';
import { useVelocityMarquee } from '../hooks/useVelocityMarquee';

export const Marquee: React.FC = () => {
  const { t } = useLanguage();
  // 28s por vuelta: la misma velocidad que tenía la animación CSS (dos tracks, -100% cada uno)
  const marqueeRef = useVelocityMarquee<HTMLElement>({ duration: 28, shift: -100, pauseOnHover: true });

  return (
    <section
      ref={marqueeRef}
      aria-label={t.marquee.sectionAria}
      className="w-full bg-[#111111] dark:bg-[#161616] text-[#FFFFFF] dark:text-[#F2EFE8] py-4 overflow-hidden border-b border-outline-variant select-none"
    >
      <div className="flex w-max items-center">
        {/* Pass 1 */}
        <div data-marquee-track className="flex items-center shrink-0 space-x-8 px-4 font-headline text-lg sm:text-xl lg:text-2xl uppercase tracking-widest font-black">
          {CLIENTS_DATA.map((client) => (
            <React.Fragment key={`pass1-${client.id}`}>
              <span>{client.name}</span>
              <span
                className="text-secondary-container text-xs inline-block"
                aria-hidden="true"
              >
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Pass 2 (seamless duplication) */}
        <div
          data-marquee-track
          className="flex items-center shrink-0 space-x-8 px-4 font-headline text-lg sm:text-xl lg:text-2xl uppercase tracking-widest font-black"
          aria-hidden="true"
        >
          {CLIENTS_DATA.map((client) => (
            <React.Fragment key={`pass2-${client.id}`}>
              <span>{client.name}</span>
              <span className="text-secondary-container text-xs inline-block">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
