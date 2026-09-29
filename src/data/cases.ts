import { CaseStudy } from '../types';

export const CASES_DATA: readonly CaseStudy[] = [
  {
    id: 'valuta-pay-el-billete',
    number: '01',
    title: 'EL BILLETE QUE NO DUERME',
    client: 'VALUTA PAY LATAM',
    year: '2024',
    badgeText: 'CANNES LIONS GRAND PRIX',
    isBadgeElectric: true,
    badgeRight: 'REC ● 03:15',
    tags: ['CAMPAÑA 360°', 'TIKTOK TREND', 'FILM CINE'],
    disciplines: ['todos', 'campana360', 'audiovisual'],
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCXIQJlSNpWdRqBxefvZ9laN-oIq2N3Uh4ErYXLZIFIv9kyU27WJw9ATHRhfDYJtzp7mFuHByqIz4P3i5hYBHX-MoaHDqB6jg1pKP1hTNlLX5wtacWhSEkBTEIWf-1CMKhCRQrJwYj85c6BmUCEubsi3OAdB8tORSFs_w9R98IlGs2rcwnZjhB_V3-7zxAlxnFpm1l1xcAYDSlQz49ogAupjU85R2u2B_VGXLTXx2kY1u1e_FzMOXWAA',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    colSpan: 'lg:col-span-8',
    heightClass: 'h-[320px] lg:h-[440px]',
    summary:
      'Una intervención monumental en el Microcentro porteño que sincronizó finanzas cotidianas con el pulso nocturno de la ciudad.',
    challenge:
      'Posicionar la cuenta remunerada de Valuta Pay frente al avance agresivo de la banca tradicional en un contexto inflacionario vertiginoso.',
    solution:
      'Hackeamos las pantallas gigantes del Obelisco de Buenos Aires convirtiéndolas en contadores en tiempo real de los rendimientos generados mientras la ciudadanía duerme. Complementamos con 12 creadores nocturnos en comercios 24hs.',
    impact:
      '+3.8M de billeteras activadas en 72 horas, trending topic nacional durante 4 días consecutivos y el Gran Prix latinoamericano en Cannes Lions 2024.',
    stats: [
      { label: 'NUEVAS BILLETERAS', value: '+3.8M' },
      { label: 'IMPRESIONES SOCIALES', value: '42.5M' },
      { label: 'CONVERSIÓN DIRECTA', value: '+314%' },
      { label: 'ROI PUBLICITARIO', value: '8.4x' },
    ],
    credits: {
      director: 'Martín Donozo',
      strategy: 'Lucía Santillán',
      sound: 'Bamba Music BA',
    },
  },
  {
    id: 'sonora-sonidos-de-barrio',
    number: '02',
    title: 'SONIDOS DE BARRIO',
    client: 'SONORA CONOSUR',
    year: '2024',
    badgeText: 'CASE ARCHIVE',
    isBadgeElectric: false,
    badgeRight: '02 // 06',
    tags: ['AUDIO BRANDING', 'CULTURA URBANA'],
    disciplines: ['todos', 'branding', 'social'],
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSXG2SZRaKA-YyAjo-_s-JtufEJsSJuGz6khS1UWaN6LxDnbMB1sEl71ptkROuWubYu0H_x7gtwe4nuf4NfKacs6ToC5VdKEaU52Cz9Yp55Yh_-6A4_qnIkSQ2Ijnxs4VKf8QhWg2kFWUFZkQs8hf-wGa9bcmUJP7zTk4yhK7IA5WiBMZNUgwMnmAmFHsaQkNKFvzthHQSTLoWoIEv902-1UdpWZbwvFtXlD_UL2iJg7zdYmNWEcV3SA',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[320px] lg:h-[440px]',
    summary:
      'Mapeo sonoro y visual de los barrios de Buenos Aires donde nació la escena del trap y RKT que hoy domina las listas regionales.',
    challenge:
      'Conectar orgánicamente a Sonora con las subculturas urbanas juveniles sin parecer una plataforma corporativa colonizando la escena independiente.',
    solution:
      'Instalamos cabinas acústicas analógicas y códigos de escucha geolocalizados en esquinas icónicas de Morón, La Boca y San Martín, permitiendo desbloquear tracks inéditos de productores emergentes.',
    impact:
      'Más de 850 mil horas de streaming en listas autogestionadas y récord de permanencia de usuarios menores de 24 años en la plataforma.',
    stats: [
      { label: 'HORAS DE ESCUCHA', value: '+850K' },
      { label: 'PARTICIPACIÓN ORGÁNICA', value: '92%' },
      { label: 'NUEVOS ARTISTAS', value: '48' },
      { label: 'RETENCIÓN MENSUAL', value: '+44%' },
    ],
    credits: {
      director: 'Franco Basile',
      strategy: 'Tomás Albornoz',
      sound: 'Estudio Triángulo Verde',
    },
  },
  {
    id: 'pampa-sur-himno-del-encuentro',
    number: '03',
    title: 'EL HIMNO DEL ENCUENTRO',
    client: 'CERVEZA PAMPA SUR',
    year: '2023',
    badgeText: 'ACTIVACIÓN',
    isBadgeElectric: false,
    badgeRight: '03 // 06',
    tags: ['EXPERIENCIAL', 'STADIUM EVENT'],
    disciplines: ['todos', 'experiencial', 'campana360'],
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC48N4Y627PfjxyQjtDsIlmY1ripBAcyRA-VILTCXA8zerU_qIKVNz7Iv3UhGNOAtc1Gch5utsdI_KmEA0EkRWaozjWQNEYJWe7q-NubBNBWK_6XHjVH6olaYPahTh7rChIn4a8XsqEZTmm9UcoTZQLHN4s9oxtQ6SgehlX-zKQ5z0z0lnqL71KFP4Xyl70bRXsQfAmY0w36EJoP0PyzCqD6vDIo8DqxL-3nfdv2n3DLpxgXy_g4K3F_A',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    colSpan: 'lg:col-span-4',
    heightClass: 'h-[280px] lg:h-[360px]',
    summary:
      'Una celebración colectiva masiva que sincronizó a más de 60.000 fanáticos en un estadio con vasos inteligentes conectados a frecuencias de audio.',
    challenge:
      'Revitalizar el ritual del brindis popular de Cerveza Pampa Sur en grandes recitales sin interrumpir la experiencia de los espectadores con promociones tradicionales.',
    solution:
      'Desarrollamos una pulsera de radiofrecuencia incorporada a los vasos conmemorativos que vibraba e iluminaba al unísono durante el coro del himno de la noche.',
    impact:
      'Mención en los principales medios culturales de la región y un 98% de vasos conservados como piezas de colección.',
    stats: [
      { label: 'ASISTENTES EN VIVO', value: '62.000' },
      { label: 'VASOS REUTILIZADOS', value: '98.4%' },
      { label: 'EARNED MEDIA', value: '$1.2M USD' },
      { label: 'ENGAGEMENT RATE', value: '78%' },
    ],
    credits: {
      director: 'Camila Zapiola',
      strategy: 'Esteban Carrizo',
      sound: '440Hz Lab',
    },
  },
  {
    id: 'zancada-correr-sin-permiso',
    number: '04',
    title: 'CORRER SIN PERMISO',
    client: 'ZANCADA CONOSUR',
    year: '2024',
    badgeText: 'CLIO AWARDS GOLD',
    isBadgeElectric: true,
    badgeRight: '04 // 06',
    tags: ['ESTRATEGIA', 'BRAND CONTENT', 'GUERRILLA RUN'],
    disciplines: ['todos', 'branding', 'audiovisual'],
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtVBfanZDWrGv6v7bjgX1Vev95nmPODtT0BgqZj1kFBkyUvugvqKHkOayikCHiOzduIVBNAjq6eWJGFlQ7i6ek1RcpVWtW1ioZqkDFdvfb_iJWFDqPPcB6C3r5zpNLdAnrMGXL_wVxtiNhsOR0YmkCCfLVnidGp4HPM72jYSk0mKJwKObKyk0yu6p12vZyGHYFlEyM6a03dyd53GPl8rnxBVGJ9Nq17HG08y2Va8fY6mw_mxP__AJcNQ',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    colSpan: 'lg:col-span-8',
    heightClass: 'h-[280px] lg:h-[360px]',
    summary:
      'Carreras nocturnas no anunciadas en fábricas abandonadas y túneles industriales de La Boca, documentadas con estética cinematográfica brutalista.',
    challenge:
      'Instalar a Zancada como referente del atletismo callejero rebelde frente a competencias comerciales sanitizadas y sin espíritu underground.',
    solution:
      'Convocatorias secretas vía coordenadas enviadas por canales privados 30 minutos antes de la largada. Luces estroboscópicas, humo blanco y filmación en 16mm con revelado analógico crudo.',
    impact:
      'Agotamiento inmediato de la línea Zancada Trail en Cono Sur y Clio Awards Gold en la categoría Brand Film & Culture.',
    stats: [
      { label: 'RUNNERS SECRETOS', value: '4.200' },
      { label: 'TIEMPO SOLD OUT', value: '18 min' },
      { label: 'ALCANCE INSTAGRAM', value: '18.9M' },
      { label: 'CLIO AWARDS', value: 'Gold 2024' },
    ],
    credits: {
      director: 'Nico Nublo',
      strategy: 'Sofía Werthein',
      sound: 'Furia Estudio',
    },
  },
  {
    id: 'brasa-co-fuego-amigo',
    number: '05',
    title: 'FUEGO AMIGO',
    client: 'BRASA & CO. ARGENTINA',
    year: '2023',
    badgeText: 'VIRAL REACH',
    isBadgeElectric: false,
    badgeRight: '05 // 06',
    tags: ['GUERRILLA PR', 'SOCIAL FIRST'],
    disciplines: ['todos', 'social'],
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBQ5AU683KLhpNagVJJZrA-1Olr6M7MwW00Z4tOSfaew8-GvHI9PGiLquJVPpf85UqF88_8V-QFvwu2vud6lRWi4NStM2cA6kCRi82rjih_FqBBvvleZgFvlhswyN6s4EwNSahZfEbqsbIgsNdLBcu_9fJjycQaJ7O61E8GQGCpcnU4KwSfmaiBZ3CaQHM5vt5N3-Gwu6MBQs9fax6HiSeG5FLrqsvyjtuF6OWlwNmqsqlt6BmHi9isg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    colSpan: 'lg:col-span-5',
    heightClass: 'h-[260px] lg:h-[320px]',
    summary:
      'Una audaz campaña de respuesta rápida en redes sociales donde la parrilla se convirtió en el termómetro de las discusiones futbolísticas de los domingos.',
    challenge:
      'Instalar el concepto de "fuego de verdad" de Brasa & Co. en un mercado saturado de mensajes gastronómicos idénticos durante los superclásicos.',
    solution:
      'Monitoreo en tiempo real de las conversaciones digitales para quemar en vivo paninis de hamburguesas con los memes más filosos del minuto.',
    impact:
      '300% de aumento en órdenes delivery durante los partidos de fútbol y portada en medios de marketing regional.',
    stats: [
      { label: 'CRECIMIENTO DELIVERY', value: '+300%' },
      { label: 'INTERACCIONES X/TW', value: '1.4M' },
      { label: 'SENTIMIENTO POSITIVO', value: '94%' },
      { label: 'PREMIO EFFIE LATAM', value: 'Plata 2023' },
    ],
    credits: {
      director: 'Lucas Varela',
      strategy: 'Damián Caccavo',
      sound: 'Mono Sur',
    },
  },
  {
    id: 'vortice-duelo-rio-de-la-plata',
    number: '06',
    title: 'DUELO EN EL RÍO DE LA PLATA',
    client: 'VÓRTICE ENERGY LATAM',
    year: '2024',
    badgeText: 'TRANSMISIÓN EN VIVO',
    isBadgeElectric: true,
    badgeRight: '06 // 06',
    tags: ['EVENTO EN VIVO', 'STREAM MULTICAM'],
    disciplines: ['todos', 'experiencial', 'audiovisual'],
    coverImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZanLH58R4LB3xNI7eCnZjk6cMgPeCQdKBY19ocJmJRVtEuc_smM6j5eztpilk2z1zI9xSJwsdJuVLXkUCZbeX4DyzVew1CMurAq5RZr64YqxLG9hbcfU9lj_79GtAdNA_oq2gDcqGbGcBdRHtVb0km63Zi1JtyWKe6I5yB_YxzJc-OlmyZL_06RcQtVWJSIKs31PeDhdLvhplyg8yy6jMnB-FYBXcPF-bfHHlQ5rpCBIisoCQpAeJ-A',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    colSpan: 'lg:col-span-7',
    heightClass: 'h-[260px] lg:h-[320px]',
    summary:
      'Dos escenarios flotantes gigantes enfrentados sobre el Río de la Plata en Puerto Madero para la batalla final de freestyle con más de 1.8M de espectadores concurrentes.',
    challenge:
      'Posicionar a Vórtice Energy como el catalizador de la escena urbana con una experiencia de streaming nunca antes vista en Sudamérica.',
    solution:
      'Montamos 18 cámaras robóticas de alta velocidad sobre cables suspendidos entre diques y un sistema de audio cuadrafónico para los espectadores en tierra.',
    impact:
      'El evento de streaming cultural más visto del año en Twitch y YouTube en español, con cero incidentes técnicos.',
    stats: [
      { label: 'CONCURRENCIA PICO', value: '1.82M' },
      { label: 'TOTAL VIEWERS', value: '12.4M' },
      { label: 'CÁMARAS SIMULTÁNEAS', value: '18' },
      { label: 'STREAM DURATION', value: '5h 42m' },
    ],
    credits: {
      director: 'Sebastián Sigal',
      strategy: 'Valeria Mendoza',
      sound: 'Vórtice Sound Lab',
    },
  },
] as const;
