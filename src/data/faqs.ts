import { FaqItem } from '../types';

export const FAQS_DATA: readonly FaqItem[] = [
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
] as const;
