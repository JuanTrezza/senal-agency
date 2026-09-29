import React, { useState, useEffect, useRef } from 'react';
import { useBuenosAiresTime } from '../hooks/useBuenosAiresTime';
import { useLenisLock } from '../hooks/useLenisLock';
import { scrollToId } from '../lib/scroll';
import { ThemeMode } from '../hooks/useTheme';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, ArrowUpRight, User, Sun, Moon, Globe } from 'lucide-react';

interface NavbarProps {
  readonly theme: ThemeMode;
  readonly onToggleTheme: () => void;
  readonly onOpenContact: (triggerElement?: HTMLElement | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenContact,
}) => {
  const { lang, t, toggleLang } = useLanguage();
  const { timeBuenosAires } = useBuenosAiresTime(lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hamburgerBtnRef = useRef<HTMLButtonElement | null>(null);
  const contactBtnRef = useRef<HTMLButtonElement | null>(null);

  // Pausa el scroll suave de la página mientras el menú mobile está abierto
  useLenisLock(mobileMenuOpen);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToId(id);
  };

  // Esc closes mobile menu and restores focus to hamburger trigger
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuOpen(false);
        hamburgerBtnRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface border-b border-outline-variant transition-colors duration-150">
      <div className="h-16 w-full px-gutter-mobile lg:px-margin flex items-center justify-between">
        {/* Left: Brand + Live Buenos Aires Clock */}
        <div className="flex items-center gap-space-lg">
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-space-xs text-left cursor-pointer group"
            aria-label={t.nav.brandAria}
          >
            <span className="font-headline text-headline-sm uppercase tracking-tighter text-primary font-black">
              SEÑAL
              <sup className="font-mono text-label-sm ml-0.5 font-normal text-on-surface-variant">
                ®
              </sup>
            </span>
          </button>

          {/* Clock pill / box */}
          <div
            className="hidden xl:flex items-center border border-outline-variant px-space-sm py-space-xs bg-surface"
            title={t.nav.clockTitle}
          >
            <span
              className="w-2 h-2 rounded-full bg-secondary-container animate-pulse mr-space-sm"
              aria-hidden="true"
            />
            <span className="font-mono text-label-sm text-on-surface uppercase tracking-wider">
              {t.nav.buenosAiresLabel} {timeBuenosAires} {t.nav.timezoneSuffix}
            </span>
          </div>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Navegación principal"
        >
          <button
            type="button"
            onClick={() => handleNavClick('trabajos')}
            className="px-space-md py-space-sm font-mono text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"
          >
            {t.nav.trabajos}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('capacidades')}
            className="px-space-md py-space-sm font-mono text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"
          >
            {t.nav.capacidades}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('manifiesto')}
            className="px-space-md py-space-sm font-mono text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"
          >
            {t.nav.nosotros}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('faq')}
            className="px-space-md py-space-sm font-mono text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"
          >
            {t.nav.faq}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('contacto')}
            className="px-space-md py-space-sm font-mono text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-colors"
          >
            {t.nav.contacto}
          </button>
        </nav>

        {/* Right: Actions + Language Toggle + Theme Toggle + Mobile Menu Toggle */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {/* ES / EN Language Selector Button (Desktop & Tablet) */}
          <button
            type="button"
            onClick={toggleLang}
            className="px-2.5 py-1.5 border border-outline-variant text-primary bg-surface hover:bg-surface-variant transition-colors flex items-center gap-1.5 cursor-pointer font-mono text-xs font-bold uppercase tracking-widest"
            aria-label={t.nav.langToggleAria}
            title={t.nav.langToggleAria}
          >
            <Globe className="w-3.5 h-3.5 text-secondary-container" aria-hidden="true" />
            <span>{t.nav.langTarget}</span>
          </button>

          {/* Theme Toggle Button (Desktop & Tablet) */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 border border-outline-variant text-primary bg-surface hover:bg-surface-variant transition-colors flex items-center justify-center cursor-pointer"
            aria-label={theme === 'dark' ? t.nav.themeToLightAria : t.nav.themeToDarkAria}
            title={theme === 'dark' ? t.nav.themeToLightAria : t.nav.themeToDarkAria}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-secondary-container" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-primary" aria-hidden="true" />
            )}
          </button>

          <button
            ref={contactBtnRef}
            type="button"
            onClick={() => onOpenContact(contactBtnRef.current)}
            className="hidden sm:inline-flex items-center justify-center gap-1 bg-primary px-space-md py-2 text-on-primary font-mono text-label-md uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary transition-colors"
          >
            <span>{t.nav.iniciarProyecto}</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          {/* User / Portal Icon Button */}
          <button
            type="button"
            onClick={(e) => onOpenContact(e.currentTarget)}
            aria-label={t.nav.openContactAria}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-secondary-container transition-colors"
          >
            <User className="w-4 h-4 text-on-primary" aria-hidden="true" />
          </button>

          {/* Mobile Menu Button */}
          <button
            ref={hamburgerBtnRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-primary border border-outline-variant hover:bg-surface-variant cursor-pointer"
            aria-label={mobileMenuOpen ? t.nav.closeMenuAria : t.nav.openMenuAria}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          data-lenis-prevent
          className="lg:hidden fixed inset-0 top-16 bg-surface z-40 flex flex-col justify-between p-gutter-mobile border-t border-outline-variant overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.mobileMenuLabel}
        >
          <div className="flex flex-col pt-space-lg space-y-space-md">
            <div className="border-b border-outline-variant pb-space-sm mb-space-sm flex items-center justify-between">
              <span className="font-mono text-label-sm uppercase text-on-surface-variant">
                {t.nav.buenosAiresLabel} {timeBuenosAires} {t.nav.timezoneSuffix}
              </span>
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            </div>

            {/* Mobile Language Selector */}
            <button
              type="button"
              onClick={toggleLang}
              className="w-full flex items-center justify-between p-3 border border-outline-variant bg-surface-container font-mono text-xs uppercase tracking-wider text-primary hover:border-primary transition-colors text-left"
              aria-label={t.nav.langToggleAria}
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary-container" />
                <span>IDIOMA // LANGUAGE: {t.nav.langCurrent}</span>
              </span>
              <span className="text-secondary-container font-bold">{t.nav.mobileLanguageChange}</span>
            </button>

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="w-full flex items-center justify-between p-3 border border-outline-variant bg-surface-container font-mono text-xs uppercase tracking-wider text-primary hover:border-primary transition-colors text-left"
              aria-label={theme === 'dark' ? t.nav.themeToLightAria : t.nav.themeToDarkAria}
            >
              <span className="flex items-center gap-2">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-secondary-container" />
                ) : (
                  <Moon className="w-4 h-4 text-primary" />
                )}
                <span>{theme === 'dark' ? t.nav.mobileThemeDark : t.nav.mobileThemeLight}</span>
              </span>
              <span className="text-secondary-container font-bold">{t.nav.mobileThemeChange}</span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('trabajos')}
              className="text-left font-headline text-[32px] leading-tight uppercase font-bold text-primary hover:text-secondary-container transition-colors py-2 border-b border-outline-variant"
            >
              {t.nav.mobileNavPrefix.trabajos}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('capacidades')}
              className="text-left font-headline text-[32px] leading-tight uppercase font-bold text-primary hover:text-secondary-container transition-colors py-2 border-b border-outline-variant"
            >
              {t.nav.mobileNavPrefix.capacidades}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('manifiesto')}
              className="text-left font-headline text-[32px] leading-tight uppercase font-bold text-primary hover:text-secondary-container transition-colors py-2 border-b border-outline-variant"
            >
              {t.nav.mobileNavPrefix.nosotros}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('faq')}
              className="text-left font-headline text-[32px] leading-tight uppercase font-bold text-primary hover:text-secondary-container transition-colors py-2 border-b border-outline-variant"
            >
              {t.nav.mobileNavPrefix.faq}
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('contacto')}
              className="text-left font-headline text-[32px] leading-tight uppercase font-bold text-primary hover:text-secondary-container transition-colors py-2 border-b border-outline-variant"
            >
              {t.nav.mobileNavPrefix.contacto}
            </button>
          </div>

          <div className="pt-space-xl pb-space-lg flex flex-col gap-space-md">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact(hamburgerBtnRef.current);
              }}
              className="w-full bg-primary text-on-primary py-4 font-mono text-label-md uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-secondary-container hover:text-on-secondary transition-colors"
            >
              <span>{t.nav.iniciarProyecto}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="font-mono text-[11px] text-on-surface-variant text-center uppercase">
              {t.nav.mobileSubtitle}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
