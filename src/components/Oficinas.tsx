import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const Oficinas: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-surface-container border-b border-outline-variant py-space-md px-gutter-mobile lg:px-margin">
      <div className="flex items-center justify-between flex-wrap gap-space-sm mb-space-sm pb-space-xs border-b border-outline-variant">
        <span className="font-mono text-label-sm uppercase text-on-surface-variant font-bold tracking-wider">
          {t.offices.headerTitle}
        </span>
        <span className="font-mono text-label-sm text-secondary-container font-semibold">
          {t.offices.systemStatus}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-sm font-mono text-[11px] uppercase">
        {t.offices.items.map((office) => (
          <div
            key={office.id}
            className="p-2 border border-outline-variant bg-surface flex flex-col justify-between hover:border-primary transition-colors"
          >
            <div>
              <span className="font-bold text-primary block truncate">
                {office.name}
              </span>
              <span className="text-on-surface-variant block text-[10px] truncate">
                {office.locationString}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-secondary-container font-bold">
              <span>{t.common.statusActive}</span>
              <span
                className={`w-1.5 h-1.5 rounded-full bg-secondary-container ${
                  office.isHq ? 'animate-pulse' : ''
                }`}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
