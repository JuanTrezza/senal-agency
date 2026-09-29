export type DisciplineFilter =
  | 'todos'
  | 'campana360'
  | 'branding'
  | 'social'
  | 'experiencial'
  | 'audiovisual';

export interface CaseStat {
  readonly label: string;
  readonly value: string;
}

export interface CaseStudy {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly client: string;
  readonly year: string;
  readonly badgeText: string;
  readonly isBadgeElectric?: boolean;
  readonly badgeRight?: string;
  readonly tags: readonly string[];
  readonly disciplines: readonly DisciplineFilter[];
  readonly coverImage: string;
  readonly videoUrl: string;
  readonly colSpan: string;
  readonly heightClass: string;
  readonly summary: string;
  readonly challenge: string;
  readonly solution: string;
  readonly impact: string;
  readonly stats: readonly CaseStat[];
  readonly credits: {
    readonly director: string;
    readonly strategy: string;
    readonly sound: string;
  };
}

export interface Capability {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly subtitleTags: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  readonly previewImage: string;
}

export interface OfficeNode {
  readonly id: string;
  readonly name: string;
  readonly locationString: string;
  readonly status: 'ACTIVO' | 'EN LÍNEA';
  readonly isHq?: boolean;
}

export interface ClientItem {
  readonly id: string;
  readonly name: string;
}

export interface MetricItem {
  readonly id: string;
  readonly category: string;
  readonly numberTag: string;
  readonly targetNumber: number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly label: string;
  readonly isHighlight?: boolean;
}

export interface FaqItem {
  readonly id: string;
  readonly number: string;
  readonly question: string;
  readonly category: string;
  readonly answer: string;
  readonly details?: readonly string[];
}

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly company: string;
  readonly service: string;
  readonly region: string;
  readonly budget: string;
  readonly message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}
