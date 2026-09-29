import { DisciplineFilter } from '../types';

export const es = {
  common: {
    skipLink: 'Saltar al contenido principal',
    closeEsc: 'Cerrar [ESC]',
    yearPrefix: 'AÑO',
    directMail: 'DIRECT MAIL:',
    exploreArchive: 'EXPLORAR ARCHIVO COMPLETO (2018—2025) [42 CASOS] →',
    certifiedRecord: 'FICHA CERTIFICADA',
    statusActive: 'ACTIVO',
    statusOnline: 'EN LÍNEA',
    hoursUnit: 'HORAS HÁBILES',
  },
  nav: {
    brandAria: 'Ir al inicio de SEÑAL®',
    clockTitle: 'Hora oficial de Buenos Aires, Argentina',
    buenosAiresLabel: 'BUENOS AIRES',
    timezoneSuffix: 'ART (UTC-3)',
    trabajos: 'TRABAJOS',
    capacidades: 'CAPACIDADES',
    nosotros: 'NOSOTROS',
    faq: 'FAQ',
    contacto: 'CONTACTO',
    iniciarProyecto: 'INICIAR PROYECTO',
    openContactAria: 'Abrir formulario de contacto',
    openMenuAria: 'Abrir menú',
    closeMenuAria: 'Cerrar menú',
    mobileMenuLabel: 'Menú de navegación móvil',
    mobileNavPrefix: {
      trabajos: '01 // TRABAJOS',
      capacidades: '02 // CAPACIDADES',
      nosotros: '03 // NOSOTROS',
      faq: '04 // FAQ',
      contacto: '05 // CONTACTO',
    },
    mobileThemeDark: 'MODO OSCURO (ACTIVO)',
    mobileThemeLight: 'MODO CLARO (ACTIVO)',
    mobileThemeChange: '[CAMBIAR]',
    mobileLanguageChange: '[CAMBIAR IDIOMA]',
    mobileSubtitle: 'LATAM CREATIVE COLLECTIVE // EST. 2018 // BUENOS AIRES',
    themeToDarkAria: 'Cambiar a tema oscuro',
    themeToLightAria: 'Cambiar a tema claro',
    langToggleAria: 'Cambiar idioma a inglés',
    langCurrent: 'ES',
    langTarget: 'EN',
  },
  hero: {
    eyebrow1: 'AGENCIA CREATIVA & ESTRATÉGICA',
    eyebrow2: 'BUENOS AIRES // LATAM',
    eyebrow3: 'ISSN 2810-6423',
    headlinePart1: 'HACEMOS QUE',
    headlinePart2: 'LAS MARCAS SE',
    headlinePart3: 'ESCUCHEN.',
    reelPlayAria: 'Reproducir showreel de SEÑAL® 2025 en pantalla completa',
    reelCornerTag: 'REEL 2025',
    reelDuration: '[01:42]',
    reelCenterTag: 'VER SHOWREEL',
    reelHoverState: '4K CINEMATIC MASTER',
    reelClickHint: 'CLIC PARA REPRODUCIR',
    subBarCoords: "LAT 34°35'S // LON 58°22'W // PALERMO SOHO",
    subBarStatus: 'ESTUDIO CREATIVO ACTIVO',
    subBarAction: 'SCROLL HACIA EL CONTENIDO',
  },
  manifiesto: {
    tagNumber: '00',
    tagLabel: '// MANIFIESTO RADICAL',
    paragraphPart1: 'Vivimos en la era de la saturación algorítmica. El 99% de lo que ves no es contenido, es ',
    paragraphWhiteNoise: 'ruido blanco',
    paragraphPart2: '. En SEÑAL® no producimos piezas para rellenar feeds. Operamos en la intersección entre ',
    paragraphCulture: 'cultura de calle',
    paragraphPart3: ', estrategia implacable y ',
    paragraphDisruption: 'disrupción tecnológica',
    paragraphPart4: ' para convertir marcas en ',
    paragraphMovements: 'movimientos populares',
    paragraphPart5: '. Si querés pasar desapercibido, sobran las agencias tradicionales. ',
    paragraphClosing: 'Si querés que no puedan ignorarte, estás en el lugar correcto.',
    stampTitle: 'DIRECCIÓN CREATIVA',
    stampSubtitle: 'DOCUMENTO INTERNO // 2025',
  },
  marquee: {
    sectionAria: 'Clientes y marcas aliadas',
  },
  cases: {
    tagNumber: '01',
    tagLabel: '// CASOS SELECCIONADOS',
    title: 'TRABAJOS QUE DEJARON MARCA',
    filterLabel: '[FILTRO]:',
    filterToolbarAria: 'Filtro de casos por disciplina',
    filters: {
      todos: 'TODOS',
      campana360: 'CAMPAÑA 360°',
      branding: 'BRANDING',
      social: 'SOCIAL & PR',
      experiencial: 'EXPERIENCIAL',
      audiovisual: 'AUDIOVISUAL',
    },
    viewFullCase: 'VER CASO COMPLETO ↗',
    exploreArchive: 'EXPLORAR ARCHIVO COMPLETO (2018—2025) [42 CASOS] →',
    cardAriaPrefix: 'Ver caso de estudio completo:',
    forClient: 'para',
    photoAltPrefix: 'Fotografía del caso',
    items: [
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
        disciplines: ['todos', 'campana360', 'audiovisual'] as DisciplineFilter[],
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
        disciplines: ['todos', 'branding', 'social'] as DisciplineFilter[],
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
        disciplines: ['todos', 'experiencial', 'campana360'] as DisciplineFilter[],
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
        disciplines: ['todos', 'branding', 'audiovisual'] as DisciplineFilter[],
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
        disciplines: ['todos', 'social'] as DisciplineFilter[],
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
        disciplines: ['todos', 'experiencial', 'audiovisual'] as DisciplineFilter[],
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
    ],
  },
  caseModal: {
    archiveBadge: '// ARCHIVO',
    closeAria: 'Cerrar detalle de caso (Esc)',
    videoFallback: 'Tu navegador no soporta el tag de video.',
    yearPrefix: 'AÑO',
    certifiedRecord: 'FICHA CERTIFICADA',
    challengeHeader: '// 01 EL DESAFÍO',
    solutionHeader: '// 02 LA SOLUCIÓN TÁCTICA',
    impactHeader: '// 03 EL IMPACTO CULTURAL',
    metricsHeader: 'MÉTRICAS Y RESULTADOS CERTIFICADOS',
    creativeDirection: 'DIRECCIÓN CREATIVA:',
    culturalStrategy: 'ESTRATEGIA CULTURAL:',
    soundDesign: 'DISEÑO SONORO:',
    masterReelAvailable: 'DISPONIBLE EN REEL MAESTRO 2025',
    closeBtn: 'CERRAR [ESC]',
    discussSimilar: 'DISCUTIR UN CASO SIMILAR',
  },
  capabilities: {
    tagNumber: '02',
    tagLabel: '// DISCIPLINAS',
    title: 'LO QUE DOMINAMOS',
    description: 'Abordaje táctico sin intermediarios burocráticos. Equipos modulares que operan a la velocidad del feed.',
    collapseAction: '[COLAPSAR —]',
    discoverAction: '[DESCUBRIR ↗]',
    deliverablesTitle: 'ENTREGABLES Y ALCANCE TÁCTICO:',
    hireDiscipline: 'CONTRATAR ESTA DISCIPLINA',
    previewAltPrefix: 'Vista previa de',
    items: [
      {
        id: 'estrategia-cultural',
        number: '01.',
        title: 'ESTRATEGIA CULTURAL & BRANDING',
        subtitleTags: '[DIAGNÓSTICO // TERRITORIOS // IDENTIDAD VIVA]',
        description:
          'Construcción de universos de marca que resisten la prueba del tiempo y conectan con tensiones sociales reales. Dejamos atrás manuales estáticos para crear identidades vivas y reactivas al pulso del presente.',
        deliverables: [
          'Auditoría y cartografía cultural de categoría',
          'Arquitectura y posicionamiento radical',
          'Sistemas de identidad visual y sonora reactivos',
          'Manual de voz, tono y protocolos de conversación',
        ],
        previewImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDCXIQJlSNpWdRqBxefvZ9laN-oIq2N3Uh4ErYXLZIFIv9kyU27WJw9ATHRhfDYJtzp7mFuHByqIz4P3i5hYBHX-MoaHDqB6jg1pKP1hTNlLX5wtacWhSEkBTEIWf-1CMKhCRQrJwYj85c6BmUCEubsi3OAdB8tORSFs_w9R98IlGs2rcwnZjhB_V3-7zxAlxnFpm1l1xcAYDSlQz49ogAupjU85R2u2B_VGXLTXx2kY1u1e_FzMOXWAA',
      },
      {
        id: 'creatividad-impacto',
        number: '02.',
        title: 'CREATIVIDAD DE ALTO IMPACTO',
        subtitleTags: '[GRANDES IDEAS // GUERRILLA // ACCIÓN REAL]',
        description:
          'Campañas diseñadas para romper la inercia cognitiva del público. No buscamos clicks pasivos; generamos actos creativos que se ganan un lugar en la cultura popular, noticias y memes.',
        deliverables: [
          'Campañas integradas multicanal 360°',
          'Activaciones de guerrilla e intervenciones urbanas',
          'Big Ideas y conceptos paraguas anuales',
          'Stunts públicos de alto voltaje noticioso',
        ],
        previewImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCSXG2SZRaKA-YyAjo-_s-JtufEJsSJuGz6khS1UWaN6LxDnbMB1sEl71ptkROuWubYu0H_x7gtwe4nuf4NfKacs6ToC5VdKEaU52Cz9Yp55Yh_-6A4_qnIkSQ2Ijnxs4VKf8QhWg2kFWUFZkQs8hf-wGa9bcmUJP7zTk4yhK7IA5WiBMZNUgwMnmAmFHsaQkNKFvzthHQSTLoWoIEv902-1UdpWZbwvFtXlD_UL2iJg7zdYmNWEcV3SA',
      },
      {
        id: 'social-tiktok',
        number: '03.',
        title: 'SOCIAL & TIKTOK ARCHITECTURE',
        subtitleTags: '[FORMATOS VERTICALES // NARRATIVA FEED // VIRALIDAD]',
        description:
          'El feed no es una vidriera para adaptar comerciales de televisión. Diseñamos formatos nativos, ágiles y adictivos que dominan las lógicas del algoritmo y hablan el idioma genuino de las comunidades.',
        deliverables: [
          'Creación de contenidos en tiempo real (Newsjacking)',
          'Estrategia editorial para TikTok e Instagram Reels',
          'Laboratorios de hooks y experimentación sonora',
          'Formatos seriados de marca con recurrencia orgánica',
        ],
        previewImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC48N4Y627PfjxyQjtDsIlmY1ripBAcyRA-VILTCXA8zerU_qIKVNz7Iv3UhGNOAtc1Gch5utsdI_KmEA0EkRWaozjWQNEYJWe7q-NubBNBWK_6XHjVH6olaYPahTh7rChIn4a8XsqEZTmm9UcoTZQLHN4s9oxtQ6SgehlX-zKQ5z0z0lnqL71KFP4Xyl70bRXsQfAmY0w36EJoP0PyzCqD6vDIo8DqxL-3nfdv2n3DLpxgXy_g4K3F_A',
      },
      {
        id: 'pr-creator-relations',
        number: '04.',
        title: 'PR DISRUPTIVO & CREATOR RELATIONS',
        subtitleTags: '[EARNED MEDIA // CURADURÍA // VOCEROS CULTURALES]',
        description:
          'Tratamos el PR como un arma de influencia masiva. Reemplazamos comunicados de prensa aburridos por piezas que los editores quieren publicar y alianzas con creadores con credibilidad real.',
        deliverables: [
          'Curaduría y contratación de talento cultural auténtico',
          'Kits de prensa conceptuales de alto impacto físico',
          'Estrategia de earned media y conversación pública',
          'Gestión de crisis reputacional y contención narrativa',
        ],
        previewImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAtVBfanZDWrGv6v7bjgX1Vev95nmPODtT0BgqZj1kFBkyUvugvqKHkOayikCHiOzduIVBNAjq6eWJGFlQ7i6ek1RcpVWtW1ioZqkDFdvfb_iJWFDqPPcB6C3r5zpNLdAnrMGXL_wVxtiNhsOR0YmkCCfLVnidGp4HPM72jYSk0mKJwKObKyk0yu6p12vZyGHYFlEyM6a03dyd53GPl8rnxBVGJ9Nq17HG08y2Va8fY6mw_mxP__AJcNQ',
      },
      {
        id: 'experiencias-inmersivas',
        number: '05.',
        title: 'EXPERIENCIAS DE MARCA INMERSIVAS',
        subtitleTags: '[ESCENOGRAFÍA // TECNOLOGÍA EN VIVO // POP-UPS]',
        description:
          'Traducimos promesas de marca en espacios físicos inolvidables. Desde fiestas clandestinas y pop-up stores hasta festivales multitudinarios donde cada detalle está curado con precisión milimétrica.',
        deliverables: [
          'Diseño espacial y arquitectura efímera',
          'Instalaciones interactivas guiadas por software propio',
          'Producción técnica integral de eventos y festivales',
          'Planes de captación y amplificación digital del evento',
        ],
        previewImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCBQ5AU683KLhpNagVJJZrA-1Olr6M7MwW00Z4tOSfaew8-GvHI9PGiLquJVPpf85UqF88_8V-QFvwu2vud6lRWi4NStM2cA6kCRi82rjih_FqBBvvleZgFvlhswyN6s4EwNSahZfEbqsbIgsNdLBcu_9fJjycQaJ7O61E8GQGCpcnU4KwSfmaiBZ3CaQHM5vt5N3-Gwu6MBQs9fax6HiSeG5FLrqsvyjtuF6OWlwNmqsqlt6BmHi9isg',
      },
      {
        id: 'produccion-audiovisual',
        number: '06.',
        title: 'PRODUCCIÓN AUDIOVISUAL & 3D STUDIO',
        subtitleTags: '[CINE PUBLICITARIO // CGI // DISEÑO SONORO]',
        description:
          'Obsesión radical por el craft visual y auditivo. Contamos con dirección cinematográfica in-house, artistas 3D y laboratorio de sonido para ejecutar con calidad de largometraje sin inflar estructuras.',
        deliverables: [
          'Dirección y realización de comerciales en 35mm y digital',
          'VFX, simulaciones 3D e hiperrealismo visual',
          'Composición musical original y postproducción de audio',
          'Color grading y mastering para todos los formatos',
        ],
        previewImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCZanLH58R4LB3xNI7eCnZjk6cMgPeCQdKBY19ocJmJRVtEuc_smM6j5eztpilk2z1zI9xSJwsdJuVLXkUCZbeX4DyzVew1CMurAq5RZr64YqxLG9hbcfU9lj_79GtAdNA_oq2gDcqGbGcBdRHtVb0km63Zi1JtyWKe6I5yB_YxzJc-OlmyZL_06RcQtVWJSIKs31PeDhdLvhplyg8yy6jMnB-FYBXcPF-bfHHlQ5rpCBIisoCQpAeJ-A',
      },
    ],
  },
  metrics: {
    trayectoriaCategory: 'TRAYECTORIA',
    trayectoriaTag: '01',
    trayectoriaLabel: 'AÑOS DESAFIANDO EL STATUS QUO REGIONAL',
    alcanceCategory: 'ALCANCE',
    alcanceTag: '02',
    alcanceLabel: 'MARCAS TRANSFORMADAS EN LATAM Y USA',
    nodosCategory: 'NODOS',
    nodosTag: '03',
    nodosLabel: 'PAÍSES EN SINCRONÍA CREATIVA SIMULTÁNEA',
    reconocimientoCategory: 'RECONOCIMIENTO',
    reconocimientoTag: '04',
    reconocimientoLabel: 'LEONES, LÁPICES Y CLÍOS INTERNACIONALES',
  },
  offices: {
    headerTitle: 'CENTROS DE OPERACIONES & NODOS DE TALENTO LATAM',
    systemStatus: 'SISTEMA GLOBAL EN LÍNEA (100% OPERATIVO)',
    activeStatus: 'ACTIVO',
    items: [
      {
        id: 'bue',
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
        isHq: false,
      },
      {
        id: 'scl',
        name: 'SANTIAGO',
        locationString: "LAT 33°27'S // -4 UTC",
        status: 'ACTIVO',
        isHq: false,
      },
      {
        id: 'bog',
        name: 'BOGOTÁ',
        locationString: "LAT 04°42'N // -5 UTC",
        status: 'ACTIVO',
        isHq: false,
      },
      {
        id: 'sao',
        name: 'SÃO PAULO',
        locationString: "LAT 23°33'S // -3 UTC",
        status: 'ACTIVO',
        isHq: false,
      },
      {
        id: 'mia',
        name: 'MIAMI US',
        locationString: "LAT 25°46'N // -4 UTC",
        status: 'ACTIVO',
        isHq: false,
      },
    ],
  },
  faqs: {
    tagNumber: '03',
    tagLabel: '// RESOLUCIÓN & SOPORTE',
    title: 'PREGUNTAS FRECUENTES',
    description: 'Claridad operativa antes de firmar cualquier contrato. Respuestas directas a consultas habituales de marcas y directores.',
    askOtherBtn: 'HACER OTRA PREGUNTA',
    collapse: '[COLAPSAR]',
    expand: '[EXPANDIR]',
    keyPointsTitle: 'PUNTOS CLAVE DEL PROTOCOLO:',
    customQueryPrompt: '¿CONSULTA PARTICULAR DE TU MARCA?',
    directConnect: 'CONECTAR DIRECTAMENTE',
    items: [
      {
        id: 'onboarding-proceso',
        number: '01.',
        question: '¿CÓMO ES EL PROCESO DE INICIO Y ASIGNACIÓN DE EQUIPO PARA NUEVOS PROYECTOS?',
        category: 'METODOLOGÍA & SPRINT',
        answer:
          'Iniciamos con una inmersión diagnóstica de 5 días hábiles donde el liderazgo creativo y estratégico analiza la categoría, territorios culturales y métricas históricas. Asignamos un escuadrón modular dedicado (Dirección Creativa, Estrategia Cultural, Redacción y Producción) sin capas burocráticas intermedias.',
        details: [
          'Acceso directo a directores de proyecto sin ejecutivos de cuentas intermedios.',
          'Canal de comunicación sincronizado en tiempo real (Slack/Discord privado).',
          'Entregables estructurados en sprints semanales con aprobaciones ágiles.',
        ],
      },
      {
        id: 'esquemas-contratacion',
        number: '02.',
        question: '¿CUÁLES SON LAS MODALIDADES DE TRABAJO Y RANGOS PRESUPUESTARIOS?',
        category: 'CONTRATACIÓN & VALOR',
        answer:
          'Operamos bajo dos modelos principales: proyectos cerrados por hito (campañas de lanzamiento, rebrandings radicales, producciones cinematográficas o experiencias inmersivas) y retainers trimestrales o anuales para marcas que requieren presencia cultural continua.',
        details: [
          'Proyectos cerrados: cotizados con alcance cerrado, cronograma estricto y sin costos ocultos.',
          'Retainers estratégicos: asignación de horas dedicadas con exclusividad de categoría comercial.',
          'Trabajamos con un cupo limitado de cuentas por trimestre para garantizar excelencia técnica y conceptual.',
        ],
      },
      {
        id: 'propiedad-intelectual-nda',
        number: '03.',
        question: '¿CÓMO GESTIONAN LA CONFIDENCIALIDAD Y LA PROPIEDAD INTELECTUAL?',
        category: 'LEGAL & DERECHOS',
        answer:
          'La seguridad de tu información y la exclusividad estratégica son innegociables. Firmamos acuerdos de confidencialidad recíprocos (NDA) previo a cualquier intercambio de información comercial o briefs sensibles.',
        details: [
          'Cesión del 100% de los derechos de explotación sobre las piezas finales aprobadas.',
          'Resguardo de material en bruto y archivos maestros en servidores encriptados.',
          'Protocolo estricto de no competencia dentro de una misma categoría durante la vigencia del acuerdo.',
        ],
      },
      {
        id: 'alcance-geografico-remoto',
        number: '04.',
        question: '¿TRABAJAN CON MARCAS FUERA DE ARGENTINA O DE FORMA 100% REMOTA?',
        category: 'NODOS & OPERACIONES',
        answer:
          'Sí. Aunque nuestra casa matriz está en Palermo Soho, Buenos Aires, más del 65% de nuestros proyectos se despliegan en Ciudad de México, Bogotá, Santiago, São Paulo y Miami. Operamos con herramientas de colaboración remota asíncrona de alta fidelidad.',
        details: [
          'Equipos en sitio para rodajes cinematográficos, stunts y activaciones experienciales.',
          'Capacidad de facturación local e internacional en divisas principales (USD, EUR, moneda local).',
          'Alineación horaria garantizada con los principales husos horarios de las Américas.',
        ],
      },
      {
        id: 'tiempos-respuesta-feed',
        number: '05.',
        question: '¿CUÁL ES LA VELOCIDAD DE RESPUESTA PARA CONTENIDO TÁCTICO Y VIRAL?',
        category: 'VELOCIDAD & RESPUESTA',
        answer:
          'Para nuestras unidades de Social Architecture y PR Disruptivo operamos laboratorios en tiempo real capaces de conceptualizar, producir y publicar respuestas culturales en menos de 4 horas hábiles cuando la conversación pública lo amerita.',
        details: [
          'Garantía de respuesta general en menos de 24 horas hábiles.',
          'Protocolos de aprobación de emergencia para tendencias fugaces y momentos virales.',
          'Control de calidad riguroso que no sacrifica el craft por la velocidad.',
        ],
      },
      {
        id: 'colaboracion-inhouse',
        number: '06.',
        question: '¿PUEDEN COLABORAR CON NUESTRO EQUIPO INTERNO O AGENCIA DE MEDIOS?',
        category: 'INTEGRACIÓN & COLABORACIÓN',
        answer:
          'Absolutamente. Nos adaptamos a ecosistemas existentes actuando como catalizador creativo de alto calibre. Podemos encargarnos de la gran idea, la dirección de arte o el concepto cinematográfico mientras tu equipo in-house o agencia de medios ejecuta la pauta y distribución.',
        details: [
          'Documentación técnica exhaustiva para que los equipos internos escalen los assets.',
          'Sesiones de co-creación y workshops estratégicos con directivos y líderes de marketing.',
          'Coordinación directa con agencias de compra de medios para especificaciones técnicas.',
        ],
      },
    ],
  },
  cta: {
    watermark: 'RUIDO',
    pill: '[¿LISTO PARA APAGAR EL RUIDO BLANCO?]',
    titleLine1: '¿TENÉS UNA IDEA?',
    titleLine2: 'HAGÁMOSLA RUIDO.',
    description:
      'Trabajamos con un número selecto de clientes por trimestre para garantizar radicalidad, obsesión por el craft y resultados culturales contundentes.',
    buttonText: 'INICIAR CONVERSACIÓN',
    directMailLabel: 'DIRECT MAIL:',
    statusCalendar: 'CALENDARIO Q2-Q3 2025 ABIERTO',
    statusResponse: 'TIEMPO MEDIO DE RESPUESTA: < 24 HORAS HÁBILES',
    statusLocation: 'BUENOS AIRES // CONEXIÓN DIRECTA',
  },
  contactModal: {
    titleHeader: 'INICIAR PROYECTO // SEÑAL® BUENOS AIRES',
    closeAria: 'Cerrar formulario de contacto (Esc)',
    headline: 'HABLEMOS DE TU PRÓXIMO HITO',
    subhead: 'Completá los detalles clave para derivar tu consulta a la dirección creativa y estratégica pertinente.',
    nameLabel: 'NOMBRE & ROL *',
    namePlaceholder: 'Ej. Matías Rossi (Head of Brand)',
    emailLabel: 'CORREO CORPORATIVO *',
    emailPlaceholder: 'm.rossi@marca.com',
    companyLabel: 'MARCA U ORGANIZACIÓN',
    companyPlaceholder: 'Nombre de la marca',
    regionLabel: 'REGIÓN DE IMPACTO',
    regions: {
      argentina: 'Argentina / Cono Sur',
      mexico: 'México & Centroamérica',
      colombia: 'Colombia & Región Andina',
      brasil: 'Brasil',
      usa: 'Estados Unidos & Global',
    },
    serviceLabel: 'DISCIPLINA PRINCIPAL',
    services: {
      estrategia: 'Estrategia Cultural & Branding',
      creatividad: 'Creatividad de Alto Impacto',
      social: 'Social & TikTok Architecture',
      pr: 'PR Disruptivo & Creator Relations',
      experiencias: 'Experiencias Inmersivas',
      audiovisual: 'Producción Audiovisual & 3D',
      integral: 'Transformación 360° Integral',
    },
    budgetLabel: 'PRESUPUESTO ESTIMADO (USD)',
    budgets: {
      b15k: '$15.000 — $25.000',
      b25k: '$25.000 — $50.000',
      b50k: '$50.000 — $100.000',
      b100k: '> $100.000',
    },
    messageLabel: 'EL DESAFÍO O BREVE *',
    messagePlaceholder: 'Contanos qué están buscando resolver, objetivos temporales o qué conversación quieren dominar...',
    ndaNote: 'SEÑAL® TRABAJA CON NDA ESTÁNDAR Y EXCLUSIVIDAD DE CATEGORÍA',
    sending: 'ENVIANDO...',
    submit: 'TRANSMITIR MENSAJE',
    validation: {
      nameRequired: 'Por favor ingresá tu nombre o el de tu equipo.',
      emailRequired: 'Por favor ingresá un correo electrónico corporativo.',
      emailInvalid: 'El formato de correo no es válido.',
      messageRequired: 'Describí brevemente tu desafío o proyecto (mínimo 15 caracteres).',
    },
    successToast: '¡Mensaje recibido con éxito! La dirección creativa de SEÑAL® responderá en menos de 24 horas hábiles.',
  },
  showreelModal: {
    title: 'SEÑAL® SHOWREEL 2025 // [01:42]',
    muteAria: 'Silenciar audio',
    unmuteAria: 'Activar audio',
    closeAria: 'Cerrar reproductor (Esc)',
    videoFallback: 'Tu navegador no soporta la reproducción de video.',
    bottomTechnical: 'BUENOS AIRES // 4K CINEMATIC MASTER // 220V 50HZ',
    bottomHint: 'PRESIONÁ [ESC] PARA CERRAR',
  },
  footer: {
    hqTitle: 'HQ & COORDENADAS',
    hqLocation: 'Palermo Soho, CABA',
    hqAvailability: 'DISPONIBILIDAD: Q2/Q3 2025',
    networkTitle: 'RED & DISPERSIONES',
    channelsTitle: 'CANALES & ÍNDICE',
    socialLinksAria: 'Enlaces sociales y canales',
    newsletterTitle: 'CORREO EDITORIAL',
    newsletterDesc: 'Bitácora de publicaciones, manifiestos culturales y aperturas de proyectos trimestrales.',
    newsletterPlaceholder: 'EMAIL@DIRECCION.COM',
    newsletterInputAria: 'Correo electrónico para bitácora editorial',
    newsletterSubmit: 'ENVIAR',
    directContactTitle: 'CONTACTO DIRECTO',
    copyright: '© 2025 SEÑAL AGENCY BUENOS AIRES',
    allRightsReserved: 'TODOS LOS DERECHOS RESERVADOS',
    subCopyright: 'BA CULTURA CONTEMPORÁNEA',
    legalNotice: 'AVISO LEGAL',
    privacy: 'PRIVACIDAD',
    colophon: 'COLOPHON',
    legalToast: 'Aviso legal: SEÑAL® es una marca registrada bajo régimen de propiedad intelectual.',
    privacyToast: 'Privacidad: Datos encriptados y procesados bajo estricto secreto profesional.',
    colophonToast: 'Colophon: Diseñado con Archivo Narrow, Inter y JetBrains Mono. 220V 50Hz.',
    newsletterInvalidToast: 'Por favor ingresá una dirección de correo válida.',
    newsletterSuccessToast: '¡Suscripción confirmada! Recibirás la bitácora editorial trimestral.',
  },
  toast: {
    closeAria: 'Cerrar notificación',
  },
} as const;

type DeepTranslations<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends boolean
    ? boolean
    : T[K] extends number
    ? number
    : T[K] extends readonly string[]
    ? readonly string[]
    : T[K] extends string[]
    ? readonly string[]
    : T[K] extends readonly (infer U)[]
    ? readonly DeepTranslations<U>[]
    : T[K] extends (infer U)[]
    ? readonly DeepTranslations<U>[]
    : T[K] extends object
    ? DeepTranslations<T[K]>
    : string;
};

export type Translations = DeepTranslations<typeof es>;

