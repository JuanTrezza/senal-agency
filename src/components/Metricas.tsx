import React from 'react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { useLanguage } from '../i18n/LanguageContext';

interface MetricBoxProps {
  readonly category: string;
  readonly numberTag: string;
  readonly targetNumber: number;
  readonly prefix?: string;
  readonly padZero?: boolean;
  readonly label: string;
  readonly isHighlight?: boolean;
}

const MetricBox: React.FC<MetricBoxProps> = ({
  category,
  numberTag,
  targetNumber,
  prefix = '',
  padZero = false,
  label,
  isHighlight = false,
}) => {
  const { count, elementRef } = useCounterAnimation(targetNumber);
  const { formatNumber } = useLanguage();

  const formattedCount = padZero && count < 10 ? `0${formatNumber(count)}` : formatNumber(count);

  return (
    <div
      ref={elementRef}
      className="p-space-lg lg:p-space-xl flex flex-col justify-between"
    >
      <div className="font-mono text-label-sm uppercase text-on-surface-variant mb-space-md flex items-center justify-between">
        <span>// {category}</span>
        <span className="text-secondary-container font-bold">{numberTag}</span>
      </div>

      <div>
        <div
          className={`font-headline text-5xl sm:text-6xl lg:text-[84px] lg:leading-[80px] font-black uppercase tracking-tighter ${
            isHighlight ? 'text-secondary-container' : 'text-primary'
          }`}
        >
          {prefix}
          {formattedCount}
        </div>
        <p className="font-mono text-label-md uppercase text-on-surface font-semibold mt-2">
          {label}
        </p>
      </div>
    </div>
  );
};

export const Metricas: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-surface border-b border-outline-variant">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant">
        <MetricBox
          category={t.metrics.trayectoriaCategory}
          numberTag={t.metrics.trayectoriaTag}
          targetNumber={7}
          padZero={true}
          label={t.metrics.trayectoriaLabel}
        />

        <MetricBox
          category={t.metrics.alcanceCategory}
          numberTag={t.metrics.alcanceTag}
          targetNumber={140}
          prefix="+"
          label={t.metrics.alcanceLabel}
        />

        <MetricBox
          category={t.metrics.nodosCategory}
          numberTag={t.metrics.nodosTag}
          targetNumber={6}
          padZero={true}
          label={t.metrics.nodosLabel}
        />

        <MetricBox
          category={t.metrics.reconocimientoCategory}
          numberTag={t.metrics.reconocimientoTag}
          targetNumber={48}
          label={t.metrics.reconocimientoLabel}
          isHighlight={true}
        />
      </div>
    </section>
  );
};
