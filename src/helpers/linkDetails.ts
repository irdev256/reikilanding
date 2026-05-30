import { PageRoutes } from './constants';

export type LinkDetail = {
  slug: string;
  formatLabel: string;
  title: string;
  subtitle: string;
  image: string;
  ariaLabel: string;
  description: string;
  highlights: string[];
  whatsappMessage: string;
};

export const linkDetails: LinkDetail[] = [
  {
    slug: 'limpiezas-energeticas',
    formatLabel: 'Curso',
    title: 'Limpiezas Energéticas',
    subtitle: 'Aprendé a limpiar, sostener y expandir tu energía desde la luz.',
    image: '/person-conducting-reiki-therapy.jpg',
    ariaLabel: 'Curso de limpiezas energéticas guiado desde la conciencia, la mediumnidad y la luz espiritual',
    description:
      'Un espacio creado para quienes sienten el llamado a comprender, limpiar y elevar su energía desde un lugar consciente y amoroso.\n\n' +
      'A través de la mediumnidad, aprenderás a conectar con tus guías espirituales y a permitir que la luz actúe a través de vos. No se trata de controlar, sino de abrirte a la guía espiritual.\n\n' +
      'Si sentís que es momento de dejar de temerle a lo que no ves y empezar a sostener tu energía desde otro lugar… este espacio es para vos.',
    highlights: [
      'Qué son las energías densas y cómo se generan',
      'Cómo percibir lo que drena o bloquea tu energía',
      'Conexión con guías espirituales en el proceso de limpieza',
      'Técnicas de limpieza para tu campo energético y el de otras personas',
      'Cómo disolver interferencias y restaurar el equilibrio energético',
      'Formas en que la energía puede verse afectada: cargas externas, vínculos y más',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Limpiezas Energéticas – Curso.',
  },
  {
    slug: 'registros-akashicos',
    formatLabel: 'Encuentro',
    title: 'Registros Akáshicos',
    subtitle: 'Una puerta de acceso consciente a la memoria y verdad del alma.',
    image: '/link1.jpg',
    ariaLabel: 'Encuentro de Registros Akáshicos guiado desde la luz, la conexión divina y la limpieza del canal',
    description:
      'Los Registros Akáshicos son el campo donde se guarda la memoria de tu alma: tu recorrido, tus aprendizajes, tus experiencias.\n\n' +
      'Este proceso se realiza en dos encuentros (uno cada 15 días, de dos horas cada uno). Aprenderás a acceder a esa información desde un lugar claro y amoroso, sin forzar, permitiendo que la verdad se revele.\n\n' +
      '✨ Cuando el canal se limpia, la información deja de confundirte… y empieza a guiarte.',
    highlights: [
      'Qué son los Registros Akáshicos y cómo funcionan',
      'Cómo abrir y cerrar tus registros de forma correcta',
      'El uso de oraciones: cuándo utilizarlas y cuándo no',
      'Cómo recibir información sin interferencias del ego o la mente',
      'La importancia de la limpieza del canal para una conexión real y clara',
      'Conexión con frecuencias elevadas que asisten el proceso desde el cosmos',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Registros Akáshicos – Encuentro.',
  },
  {
    slug: 'origenes',
    formatLabel: 'Mentoría (3 meses)',
    title: 'Orígenes',
    subtitle: 'Un regreso profundo a lo que sos, más allá de todo lo que te enseñaron a ser.',
    image: '/link3.jpg',
    ariaLabel: 'Mentoría Orígenes de tres meses para recordar la esencia, integrar lo espiritual y lo terrenal',
    description:
      'Orígenes es un regreso. Un viaje profundo hacia lo que sos, más allá de todo lo que te enseñaron a ser.\n\n' +
      'Durante tres meses te acompaño a descubrir de dónde venís, quién sos en esencia y cuál es la raíz de tu alma. Es un proceso real, a veces desafiante, pero profundamente transformador.\n\n' +
      '✨ Cuando encontrás tu origen… ya no volvés a perderte.',
    highlights: [
      'Reconexión con tu esencia y el origen de tu alma',
      'Integración de lo espiritual y lo terrenal',
      'Trabajo con frecuencias de luz y energías sutiles',
      'Conexión con lo cósmico, la naturaleza y distintos planos de existencia',
      'Acompañamiento personalizado durante los tres meses',
      'Apertura hacia una conciencia más elevada de tu experiencia humana',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Orígenes – Mentoría (3 meses).',
  },
];

export const getLinkDetailPath = (slug: string) => `${PageRoutes.LINK_DETAIL}?curso=${encodeURIComponent(slug)}`;
