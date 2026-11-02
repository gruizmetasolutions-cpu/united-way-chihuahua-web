export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
    color?: string;
  }>;
}

export interface HeroSlide {
  id: string;
  tabLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaType: 'primary' | 'givecloud' | 'outline';
  image: string;
  themeColor: string;
}

export interface ImpactPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  accentBg: string;
  statNumber: string;
  statLabel: string;
  image: string;
  href: string;
  programs: Array<{ name: string; slug: string }>;
}

export interface SiteStats {
  value: string;
  label: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  href: string;
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    label: 'Nosotros',
    href: '#nosotros',
    children: [
      { label: 'Quiénes Somos y Misión', href: '#quienes-somos', description: 'Nuestra trayectoria de impacto comunitario en Chihuahua' },
      { label: 'Visión 2027', href: '#vision-2027', description: 'Metas estratégicas para cerrar brechas de desigualdad' },
      { label: 'Consejo Directivo', href: '#consejo', description: 'Liderazgo cívico y gobernanza institucional' },
      { label: 'Transparencia e Informes Anuales', href: '#transparencia', description: 'Rendición de cuentas, auditorías y reportes anuales' }
    ]
  },
  {
    label: 'Nuestro Impacto',
    href: '#impacto',
    children: [
      { label: 'Oportunidades para Jóvenes', href: '#jovenes', description: 'Educación inicial, robótica STEAM, becas y tutorías', color: '#FFBA00' },
      { label: 'Comunidad Saludable', href: '#salud', description: 'Salud preventiva, nutrición infantil y adopción de parques', color: '#0044B5' },
      { label: 'Resiliencia Comunitaria', href: '#resiliencia', description: 'Respuesta ante emergencias, apoyo a albergues y contingencias', color: '#F47925' },
      { label: 'Voluntariado y Finanzas', href: '#voluntariado', description: 'Colecta Kórima, voluntariado corporativo y desarrollo social', color: '#009464' }
    ]
  },
  {
    label: 'Empresas (RSE)',
    href: '#empresas',
    badge: 'Alianzas B2B',
    children: [
      { label: 'Inversión Social Estratégica', href: '#empresas-inversion', description: 'Fondos con 100% de deducibilidad fiscal y trazabilidad' },
      { label: 'Voluntariado Corporativo', href: '#empresas-voluntariado', description: 'Jornadas comunitarias para colaboradores y familias' },
      { label: 'Campaña en Nómina (Workplace Giving)', href: '#empresas-nomina', description: 'Cultura de donación recurrente con aportación peso por peso' }
    ]
  },
  {
    label: 'Únete',
    href: '#unete',
    children: [
      { label: 'Donar a una Causa', href: '#donar', description: 'Aporta en línea con Givecloud de forma segura' },
      { label: 'Hazte Voluntario', href: '#voluntario', description: 'Suma tus horas y talento al cambio social' },
      { label: 'Torneo de Golf 2026', href: '#golf', description: 'Participa como jugador o patrocinador en el evento insignia' }
    ]
  },
  {
    label: 'Noticias',
    href: '#noticias'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'golf-2026',
    tabLabel: '01. Torneo de Golf 2026',
    eyebrow: 'EVENTO INSIGNIA CON CAUSA',
    title: 'TORNEO DE GOLF UNITED WAY CHIHUAHUA 2026',
    description: 'Suma a tu empresa, juega en equipo y transforma vidas en Chihuahua. Cada patrocinio e inscripción financia programas de educación y salud para miles de niños.',
    ctaText: 'REGISTRO Y PATROCINIOS',
    ctaHref: '#golf',
    ctaType: 'primary',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#FD372C'
  },
  {
    id: 'colombia-emergencia',
    tabLabel: '02. Fondo de Emergencias',
    eyebrow: 'RESPUESTA HUMANITARIA INMEDIATA',
    title: 'COLOMBIA NOS UNE: SOLIDARIDAD ACTIVA',
    description: 'Frente a las contingencias críticas, United Way Chihuahua canaliza recursos directos, transparentes y auditados para auxiliar a familias damnificadas.',
    ctaText: 'DONAR AL FONDO',
    ctaHref: '#donar-fondo',
    ctaType: 'givecloud',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#F47925'
  },
  {
    id: 'vision-2027',
    tabLabel: '03. Visión 2027',
    eyebrow: 'CONECTANDO COMUNIDADES',
    title: 'UNIDOS ES COMO GENERAMOS UN CAMBIO DURADERO',
    description: 'Articulamos a más de 160 organizaciones de la sociedad civil, empresas y voluntarios para construir un estado de Chihuahua más próspero, saludable y resiliente.',
    ctaText: 'CONOCE NUESTRO IMPACTO',
    ctaHref: '#impacto',
    ctaType: 'outline',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#0044B5'
  },
  {
    id: 'empresas-aliadas',
    tabLabel: '04. Alianzas Corporativas',
    eyebrow: 'RESPONSABILIDAD SOCIAL EMPRESARIAL',
    title: 'TRANSFORMA TU EMPRESA EN MOTOR DE CAMBIO SOCIAL',
    description: 'Diseñamos proyectos de inversión social llave en mano y jornadas de voluntariado corporativo de alto impacto para colaboradores en Ciudad de Chihuahua y la entidad.',
    ctaText: 'SUMAR A MI EMPRESA',
    ctaHref: '#empresas',
    ctaType: 'primary',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    themeColor: '#21296B'
  }
];

export const IMPACT_PILLARS: ImpactPillar[] = [
  {
    id: 'jovenes',
    title: 'Oportunidades para Jóvenes',
    subtitle: 'Educación STEAM, Robótica y Desarrollo Temprano',
    description: 'Creamos senderos para que niñas, niños y jóvenes de Chihuahua alcancen su máximo potencial, desde la primera infancia hasta su inserción universitaria y laboral.',
    color: '#FFBA00',
    accentBg: '#FFF8E6',
    statNumber: '34,500+',
    statLabel: 'Estudiantes beneficiados anualmente',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    href: '#programa-jovenes',
    programs: [
      { name: 'Becas de Excelencia y Permanencia', slug: 'becas' },
      { name: 'Laboratorios de Robótica STEAM', slug: 'robotica' },
      { name: 'Crianza Positiva en Primera Infancia', slug: 'crianza-positiva' },
      { name: 'Liderazgo Juvenil Comunitario', slug: 'liderazgo-juvenil' }
    ]
  },
  {
    id: 'salud',
    title: 'Comunidad Saludable',
    subtitle: 'Prevención Médica, Nutrición y Entornos Verdes',
    description: 'Fomentamos hábitos de vida activa, acceso a controles médicos preventivos, salud emocional y rehabilitación de parques para las familias de nuestras colonias.',
    color: '#0044B5',
    accentBg: '#EBF2FC',
    statNumber: '28,120+',
    statLabel: 'Consultas y atenciones preventivas',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    href: '#programa-salud',
    programs: [
      { name: 'Adopta un Parque Comunitario', slug: 'adopta-un-parque' },
      { name: 'Jornadas de Salud y Nutrición Integral', slug: 'salud-integral' },
      { name: 'Salud Mental y Apoyo Psicosocial', slug: 'salud-mental' },
      { name: 'Acondicionamiento y Espacios Recreativos', slug: 'espacios-recreativos' }
    ]
  },
  {
    id: 'resiliencia',
    title: 'Resiliencia Comunitaria',
    subtitle: 'Respuesta ante Contingencias y Apoyo a Albergues',
    description: 'Fortalecemos la capacidad de respuesta y recuperación de los sectores vulnerables ante contingencias climáticas, emergencias humanitarias y crisis económicas.',
    color: '#F47925',
    accentBg: '#FEF3EB',
    statNumber: '15,640+',
    statLabel: 'Familias asistidas en contingencias',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    href: '#programa-resiliencia',
    programs: [
      { name: 'Fondo Solidario de Emergencias', slug: 'fondo-emergencias' },
      { name: 'Fortalecimiento de Albergues y Centros', slug: 'albergues' },
      { name: 'Equipamiento de Protección Comunitaria', slug: 'equipamiento' },
      { name: 'Red de Asistencia Alimentaria Inmediata', slug: 'asistencia-alimentaria' }
    ]
  },
  {
    id: 'voluntariado',
    title: 'Voluntariado y Finanzas',
    subtitle: 'Colecta Kórima, Inclusión y Movilidad Social',
    description: 'Movilizamos a miles de voluntarios cívicos y empresariales para multiplicar la solidaridad y promover la estabilidad económica familiar en Chihuahua.',
    color: '#009464',
    accentBg: '#E6F6F0',
    statNumber: '8,708',
    statLabel: 'Horas de voluntariado activo registradas',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
    href: '#programa-voluntariado',
    programs: [
      { name: 'Colecta Anual Kórima', slug: 'colecta-korima' },
      { name: 'Voluntariado Corporativo Llave en Mano', slug: 'voluntariado-corporativo' },
      { name: 'Educación e Inclusión Financiera Familiar', slug: 'inclusion-financiera' },
      { name: 'Día de las Buenas Acciones Chihuahua', slug: 'buenas-acciones' }
    ]
  }
];

export const SITE_STATS: SiteStats[] = [
  {
    value: '+92,775',
    label: 'Personas beneficiadas',
    description: 'Vidas impactadas positivamente en educación, salud y bienestar familiar en Chihuahua.'
  },
  {
    value: '162',
    label: 'Organizaciones aliadas',
    description: 'OSCs, escuelas, albergues e instituciones cívicas fortalecidas por United Way.'
  },
  {
    value: '8,708',
    label: 'Horas de voluntariado',
    description: 'Ciudadanos y colaboradores que entregaron su energía en causas comunitarias.'
  },
  {
    value: '69+',
    label: 'Empresas comprometidas',
    description: 'Corporativos e industrias aliadas en responsabilidad social y donación en nómina.'
  }
];

export const NEWS_STORIES: NewsItem[] = [
  {
    id: '1',
    title: 'Arrancan inscripciones para el Torneo de Golf United Way Chihuahua 2026',
    excerpt: 'El tradicional certamen deportivo convocará a más de 120 jugadores y decenas de empresas patrocinadoras para financiar becas infantiles.',
    date: '15 Feb 2026',
    category: 'Eventos con Causa',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
    href: '#noticia-1'
  },
  {
    id: '2',
    title: 'Colecta Kórima entrega kits escolares y apoyo a más de 5,000 familias',
    excerpt: 'Gracias a la generosidad de colaboradores de la industria maquiladora y donantes locales, se superó la meta prevista para este ciclo escolar.',
    date: '02 Feb 2026',
    category: 'Educación',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    href: '#noticia-2'
  },
  {
    id: '3',
    title: 'Inauguran nuevo laboratorio de robótica STEAM en escuela del sur de la ciudad',
    excerpt: 'Con inversión de empresas aliadas y Fondos Unidos, estudiantes de primaria tendrán acceso a formación tecnológica y de programación.',
    date: '20 Ene 2026',
    category: 'Innovación Social',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
    href: '#noticia-3'
  }
];

export const CORPORATE_PARTNERS = [
  { name: 'Foxconn Chihuahua', category: 'Tecnología & Manufactura' },
  { name: 'Ford Motor Company', category: 'Automotriz' },
  { name: 'Safran Aerosystems', category: 'Aeroespacial' },
  { name: 'Grupo Bafar', category: 'Alimentos & Agroindustria' },
  { name: 'Intermex Parques Industriales', category: 'Bienes Raíces Industriales' },
  { name: 'Jabil Circuit', category: 'Electrónica de Precisión' },
  { name: 'Bell Flight', category: 'Aeroespacial' },
  { name: 'Honeywell', category: 'Tecnología e Ingeniería' }
];
