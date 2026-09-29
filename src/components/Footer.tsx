import React, { useState } from 'react';
import { useBuenosAiresTime } from '../hooks/useBuenosAiresTime';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  readonly onShowToast: (message: string) => void;
  readonly onOpenContact: (triggerElement?: HTMLElement | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const { lang, t } = useLanguage();
  const { regionalTimes } = useBuenosAiresTime(lang);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      onShowToast(t.footer.newsletterInvalidToast);
      return;
    }

    onShowToast(t.footer.newsletterSuccessToast);
    setNewsletterEmail('');
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant">
      {/* Giant SEÑAL Wordmark Banner */}
      <div className="w-full border-b border-outline-variant overflow-hidden select-none py-space-md lg:py-space-lg">
        <div className="w-full px-gutter-mobile lg:px-margin">
          <span className="block font-headline text-[72px] sm:text-[110px] md:text-[160px] lg:text-[220px] uppercase tracking-tighter text-primary font-black leading-none whitespace-nowrap">
            SEÑAL®
          </span>
        </div>
      </div>

      {/* 4-Column Editorial Matrix */}
      <div className="w-full px-gutter-mobile lg:px-margin py-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg lg:gap-gutter">
        {/* Col 1: HQ & Coordenadas */}
        <div className="flex flex-col border-l border-outline-variant pl-space-md">
          <span className="font-mono text-label-sm uppercase text-on-surface-variant mb-space-sm">
            {t.footer.hqTitle}
          </span>
          <p className="font-body text-body-md text-on-surface font-semibold">
            {t.footer.hqLocation}
          </p>
          <p className="font-mono text-body-sm text-on-surface-variant mt-1 leading-relaxed">
            LAT -34.6037° S
            <br />
            LON -58.3816° W
          </p>
          <p className="font-mono text-label-sm uppercase text-secondary-container mt-space-md font-semibold tracking-wider">
            {t.footer.hqAvailability}
          </p>
        </div>

        {/* Col 2: Red & Dispersiones */}
        <div className="flex flex-col border-l border-outline-variant pl-space-md">
          <span className="font-mono text-label-sm uppercase text-on-surface-variant mb-space-sm">
            {t.footer.networkTitle}
          </span>
          <ul className="flex flex-col space-y-space-xs font-mono text-label-md uppercase">
            <li className="flex items-center justify-between border-b border-outline-variant py-space-xs">
              <span className="text-on-surface-variant">BUENOS AIRES</span>
              <span className="text-on-surface font-semibold">
                {regionalTimes.buenosAires} ART
              </span>
            </li>
            <li className="flex items-center justify-between border-b border-outline-variant py-space-xs">
              <span className="text-on-surface-variant">MADRID</span>
              <span className="text-on-surface">{regionalTimes.madrid} CEST</span>
            </li>
            <li className="flex items-center justify-between border-b border-outline-variant py-space-xs">
              <span className="text-on-surface-variant">NEW YORK</span>
              <span className="text-on-surface">{regionalTimes.newYork} EDT</span>
            </li>
            <li className="flex items-center justify-between py-space-xs">
              <span className="text-on-surface-variant">TOKYO</span>
              <span className="text-on-surface">{regionalTimes.tokyo} JST</span>
            </li>
          </ul>
        </div>

        {/* Col 3: Canales & Índice */}
        <div className="flex flex-col border-l border-outline-variant pl-space-md">
          <span className="font-mono text-label-sm uppercase text-on-surface-variant mb-space-sm">
            {t.footer.channelsTitle}
          </span>
          <nav
            aria-label={t.footer.socialLinksAria}
            className="flex flex-col space-y-space-xs"
          >
            <a
              className="font-mono text-label-md uppercase text-on-surface hover:text-secondary-container transition-colors flex items-center justify-between py-1"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>INSTAGRAM</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="font-mono text-label-md uppercase text-on-surface hover:text-secondary-container transition-colors flex items-center justify-between py-1"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LINKEDIN</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="font-mono text-label-md uppercase text-on-surface hover:text-secondary-container transition-colors flex items-center justify-between py-1"
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>VIMEO</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="font-mono text-label-md uppercase text-on-surface hover:text-secondary-container transition-colors flex items-center justify-between py-1"
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>X (TWITTER)</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="font-mono text-label-md uppercase text-on-surface hover:text-secondary-container transition-colors flex items-center justify-between py-1"
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>SPOTIFY</span>
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>

        {/* Col 4: Correo Editorial */}
        <div className="flex flex-col border-l border-outline-variant pl-space-md justify-between">
          <div className="flex flex-col">
            <span className="font-mono text-label-sm uppercase text-on-surface-variant mb-space-sm">
              {t.footer.newsletterTitle}
            </span>
            <p className="font-body text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              {t.footer.newsletterDesc}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full border border-primary">
              <input
                className="w-full bg-surface px-space-sm py-space-sm font-mono text-label-sm text-on-surface focus:outline-none placeholder:text-outline"
                placeholder={t.footer.newsletterPlaceholder}
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                aria-label={t.footer.newsletterInputAria}
              />
              <button
                className="bg-primary text-on-primary px-space-md font-mono text-label-sm uppercase hover:bg-secondary-container hover:text-on-secondary transition-colors cursor-pointer shrink-0"
                type="submit"
              >
                {t.footer.newsletterSubmit}
              </button>
            </form>
          </div>

          <div className="mt-space-md pt-space-sm border-t border-outline-variant">
            <span className="font-mono text-label-sm uppercase text-on-surface-variant block">
              {t.footer.directContactTitle}
            </span>
            <a
              className="font-mono text-label-md uppercase text-on-surface hover:text-secondary-container font-semibold"
              href="mailto:HOLA@SENAL.AGENCY"
            >
              HOLA@SENAL.AGENCY
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-outline-variant px-gutter-mobile lg:px-margin py-space-md flex flex-col md:flex-row items-center justify-between gap-space-md font-mono text-label-sm text-on-surface-variant uppercase">
        <div className="flex items-center gap-space-lg flex-wrap">
          <span>{t.footer.copyright}</span>
          <span className="hidden md:inline" aria-hidden="true">•</span>
          <span>{t.footer.allRightsReserved}</span>
          <span className="hidden md:inline" aria-hidden="true">•</span>
          <span>{t.footer.subCopyright}</span>
        </div>

        <div className="flex items-center gap-space-md">
          <button
            type="button"
            onClick={() => onShowToast(t.footer.legalToast)}
            className="hover:text-on-surface transition-colors cursor-pointer"
          >
            {t.footer.legalNotice}
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => onShowToast(t.footer.privacyToast)}
            className="hover:text-on-surface transition-colors cursor-pointer"
          >
            {t.footer.privacy}
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => onShowToast(t.footer.colophonToast)}
            className="hover:text-on-surface transition-colors cursor-pointer"
          >
            {t.footer.colophon}
          </button>
        </div>
      </div>
    </footer>
  );
};
