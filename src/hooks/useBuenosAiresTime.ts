import { useEffect, useState } from 'react';

export interface RegionalTimes {
  readonly buenosAires: string;
  readonly madrid: string;
  readonly newYork: string;
  readonly tokyo: string;
}

function formatTzTime(timeZone: string, locale: string): string {
  try {
    const formatter = new Intl.DateTimeFormat(locale, {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    return formatter.format(new Date());
  } catch {
    return '18:41';
  }
}

/**
 * Hook para obtener la hora en vivo de Buenos Aires (America/Argentina/Buenos_Aires)
 * y nodos internacionales de dispersión formateada con Intl según el idioma activo.
 */
export function useBuenosAiresTime(lang: 'es' | 'en' = 'es'): {
  readonly timeBuenosAires: string;
  readonly regionalTimes: RegionalTimes;
} {
  const locale = lang === 'es' ? 'es-AR' : 'en-US';

  const [times, setTimes] = useState<RegionalTimes>(() => ({
    buenosAires: formatTzTime('America/Argentina/Buenos_Aires', locale),
    madrid: formatTzTime('Europe/Madrid', locale),
    newYork: formatTzTime('America/New_York', locale),
    tokyo: formatTzTime('Asia/Tokyo', locale),
  }));

  useEffect(() => {
    const updateTimes = () => {
      setTimes({
        buenosAires: formatTzTime('America/Argentina/Buenos_Aires', locale),
        madrid: formatTzTime('Europe/Madrid', locale),
        newYork: formatTzTime('America/New_York', locale),
        tokyo: formatTzTime('Asia/Tokyo', locale),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [locale]);

  return {
    timeBuenosAires: times.buenosAires,
    regionalTimes: times,
  };
}
