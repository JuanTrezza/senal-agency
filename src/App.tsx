import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifiesto } from './components/Manifiesto';
import { Marquee } from './components/Marquee';
import { CasesBento } from './components/CasesBento';
import { Capacidades } from './components/Capacidades';
import { Metricas } from './components/Metricas';
import { Oficinas } from './components/Oficinas';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ShowreelModal } from './components/ShowreelModal';
import { Toast } from './components/Toast';

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [contactTrigger, setContactTrigger] = useState<HTMLElement | null>(null);
  const [showreelTrigger, setShowreelTrigger] = useState<HTMLElement | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenContact = (trigger?: HTMLElement | null) => {
    setContactTrigger(trigger || (document.activeElement as HTMLElement | null));
    setIsContactOpen(true);
  };

  const handleOpenShowreel = (trigger?: HTMLElement | null) => {
    setShowreelTrigger(trigger || (document.activeElement as HTMLElement | null));
    setIsShowreelOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary flex flex-col font-sans transition-colors duration-150">
      {/* Accessible Skip-to-content Link for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-primary focus:text-on-primary focus:border-2 focus:border-secondary-container focus:outline-none font-mono text-xs uppercase tracking-wider shadow-[4px_4px_0px_var(--color-secondary-container)]"
      >
        {t.common.skipLink}
      </a>

      {/* Fixed Navbar with Live Clock, Theme Toggle & Accessible Mobile Menu */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="w-full pt-16 flex-1 flex flex-col focus:outline-none">
        {/* 1. Hero Section with Massive Typography & Video Showreel */}
        <Hero onOpenShowreel={handleOpenShowreel} />

        {/* 2. Manifiesto Radical */}
        <Manifiesto />

        {/* 3. Infinite Client Marquee */}
        <Marquee />

        {/* 4. Bento Grid: 6 Casos Seleccionados with Hover Video & Filter */}
        <CasesBento onOpenContact={handleOpenContact} />

        {/* 5. Capacidades: Lista Editorial with Mouse-Following Preview */}
        <Capacidades onOpenContact={() => handleOpenContact()} />

        {/* 6. Big Numbers: Métricas Regionales con Contadores Animados */}
        <Metricas />

        {/* 7. Centros de Operaciones & Nodos de Talento LATAM */}
        <Oficinas />

        {/* 8. Preguntas Frecuentes Desplegables (FAQ Accordion) */}
        <FaqSection onOpenContact={() => handleOpenContact()} />

        {/* 9. Electric Blue CTA Section */}
        <CtaSection onOpenContact={() => handleOpenContact()} />
      </main>

      {/* 10. Editorial Footer with Clock Matrix & Newsletter */}
      <Footer
        onShowToast={(msg) => setToastMessage(msg)}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Modals & Feedback Overlays */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onShowToast={(msg) => setToastMessage(msg)}
        triggerElement={contactTrigger}
      />

      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        triggerElement={showreelTrigger}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
