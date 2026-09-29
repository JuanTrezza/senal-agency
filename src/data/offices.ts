import { OfficeNode } from '../types';

export const OFFICES_DATA: readonly OfficeNode[] = [
  {
    id: 'bsas-hq',
    name: 'BUENOS AIRES (HQ)',
    locationString: "LAT 34°35'S // -3 UTC",
    status: 'ACTIVO',
    isHq: true,
  },
  {
    id: 'cdmx',
    name: 'CDMX',
    locationString: "LAT 19°25'N // -6 UTC",
    status: 'ACTIVO',
  },
  {
    id: 'santiago',
    name: 'SANTIAGO',
    locationString: "LAT 33°27'S // -4 UTC",
    status: 'ACTIVO',
  },
  {
    id: 'bogota',
    name: 'BOGOTÁ',
    locationString: "LAT 04°42'N // -5 UTC",
    status: 'ACTIVO',
  },
  {
    id: 'sao-paulo',
    name: 'SÃO PAULO',
    locationString: "LAT 23°33'S // -3 UTC",
    status: 'ACTIVO',
  },
  {
    id: 'miami',
    name: 'MIAMI US',
    locationString: "LAT 25°46'N // -4 UTC",
    status: 'ACTIVO',
  },
] as const;
