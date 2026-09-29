import React, { useRef, useState } from 'react';
import { scrollToId } from '../lib/scroll';
import { useLanguage } from '../i18n/LanguageContext';
import { Play } from 'lucide-react';

interface HeroProps {
  readonly onOpenShowreel: (triggerElement?: HTMLElement | null) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShowreel }) => {
  const { t } = useLanguage();
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const fallbackImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAaE7kBNGFPgKTzSo4kEWoluc4grKSvAQxrzTNxImlohsZCsgkoGjaekNBPpZ5NIsNm_Ows1MPZmtTBEli6SkQ0hVXq44q8LeCgwIGZswkOEn_ulsxHKMCMnv04yQtBywe6nUaFMqSJuPX_w-dT7BDmfMPltQPvZsVWpFMP3__rodU-gUkhM3NDIlVf6ilTV1gqccOThUDY5B_G_BnmarkapMb6tzM_3MxoyAzmC50M7XBTEWieo117mQ';

  const videoSrc =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

  return (
    <section
      id="hero"
      className="w-full px-gutter-mobile lg:px-margin pt-space-lg lg:pt-space-xl pb-space-xl border-b border-outline-variant bg-surface relative"
    >
      {/* Editorial Category Strip */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-lg pb-space-sm border-b border-outline-variant">
        <div className="flex items-center gap-space-sm">
          <span
            className="inline-block w-2.5 h-2.5 bg-secondary-container"
            aria-hidden="true"
          />
          <span className="font-mono text-label-sm uppercase tracking-widest text-primary font-semibold">
            {t.hero.eyebrow1}
          </span>
        </div>
        <div className="font-mono text-label-sm uppercase text-on-surface-variant flex items-center gap-space-md">
          <span>{t.hero.eyebrow2}</span>
          <span className="hidden sm:inline">{t.hero.eyebrow3}</span>
        </div>
      </div>

      {/* Massive Typographic Headline with Integrated Reel Card */}
      <div className="w-full mb-space-xl">
        <h1 className="font-headline text-[48px] sm:text-[68px] lg:text-[104px] uppercase tracking-tighter text-primary leading-[0.88] break-words font-black">
          <span className="block">
            {t.hero.headlinePart1}
          </span>
          <span className="block mt-2 lg:mt-3">
            {t.hero.headlinePart2}
            {/* Inline Video Showreel Card */}
            <button
              type="button"
              onClick={(e) => onOpenShowreel(e.currentTarget)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenShowreel(e.currentTarget);
                }
              }}
              className="inline-block align-middle mx-1 lg:mx-3 relative group cursor-pointer my-2 lg:my-0 text-left"
              aria-label={t.hero.reelPlayAria}
            >
              <span className="block w-[140px] sm:w-[170px] lg:w-[220px] h-[58px] sm:h-[70px] lg:h-[86px] bg-primary relative overflow-hidden border border-primary">
                {!videoError ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onError={() => setVideoError(true)}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    poster={fallbackImageUrl}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                ) : null}

                {/* Fallback image if video fails or while loading */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-300 ${
                    videoError ? 'opacity-80' : 'opacity-20'
                  }`}
                  style={{ backgroundImage: `url('${fallbackImageUrl}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />

                {/* Card labels */}
                <div className="absolute bottom-1.5 left-2 flex items-center gap-1.5 z-10 pointer-events-none">
                  <span
                    className="w-2 h-2 rounded-full bg-secondary-container animate-ping"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[9px] leading-tight text-on-primary font-bold uppercase tracking-wider">
                    {t.hero.reelCornerTag} {t.hero.reelDuration}
                  </span>
                </div>

                <div className="absolute top-1.5 right-2 z-10 text-on-primary group-hover:text-secondary-container transition-colors pointer-events-none">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
              </span>
            </button>
          </span>
          <span className="block mt-1">{t.hero.headlinePart3}</span>
        </h1>
      </div>

      {/* Technical Sub-bar & Coordinates */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md pt-space-md border-t border-outline-variant items-end">
        <div className="md:col-span-6 flex flex-col">
          <span className="font-mono text-label-sm text-on-surface-variant uppercase mb-1">
            {t.hero.subBarStatus}
          </span>
          <p className="font-mono text-label-md text-primary font-medium tracking-tight">
            {t.nav.mobileSubtitle}
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col">
          <span className="font-mono text-label-sm text-on-surface-variant uppercase mb-1">
            COORDINATES
          </span>
          <p className="font-mono text-label-sm text-on-surface">
            {t.hero.subBarCoords}
          </p>
        </div>

        <div className="md:col-span-3 flex md:justify-end">
          <button
            type="button"
            onClick={() => scrollToId('manifiesto')}
            className="group inline-flex items-center gap-2 font-mono text-label-sm uppercase tracking-wider text-primary hover:text-secondary-container transition-colors cursor-pointer"
          >
            <span
              className="w-1.5 h-1.5 bg-primary group-hover:bg-secondary-container"
              aria-hidden="true"
            />
            <span>{t.hero.subBarAction}</span>
            <span
              className="inline-block transform group-hover:translate-y-1 transition-transform"
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
