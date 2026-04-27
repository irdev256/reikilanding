import { PageRoutes } from './constants';

export type LinkDetail = {
  slug: string;
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
    slug: 'sanacion-liberacion',
    title: 'Sanación y Liberación',
    subtitle: 'Suelta bloqueos emocionales y energéticos del pasado.',
    image: '/person-conducting-reiki-therapy.jpg',
    ariaLabel: 'Sesión de sanación energética y liberación emocional durante una mentoría espiritual consciente',
    description:
      'Un espacio de acompañamiento para liberar cargas internas, cerrar ciclos y recuperar tu equilibrio energético con una guía amorosa y consciente.',
    highlights: [
      'Identificación de bloqueos emocionales y energéticos',
      'Prácticas guiadas de sanación y reconexión interior',
      'Recomendaciones para sostener tu proceso en el día a día',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Sanación y Liberación.',
  },
  {
    slug: 'proposito-espiritual',
    title: 'Buscas tu propósito espiritual',
    subtitle: 'Deseas encontrar el sentido profundo de tu existencia.',
    image: '/link1.jpg',
    ariaLabel: 'Espacio de meditación y búsqueda del propósito espiritual y sentido de vida',
    description:
      'Una mentoría para descubrir tu propósito desde tu esencia, reconociendo tus dones y alineando tus decisiones con lo que realmente viniste a vivir.',
    highlights: [
      'Claridad sobre tu momento vital actual',
      'Reconocimiento de talentos y señales de tu camino',
      'Plan inicial para vivir con mayor coherencia y propósito',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre la mentoría de propósito espiritual.',
  },
  {
    slug: 'claves-camino',
    title: 'Claves para tu Camino',
    subtitle: 'Herramientas para manifestar la vida que deseas.',
    image: '/link3.jpg',
    ariaLabel: 'Herramientas espirituales para manifestar una vida consciente y alineada con el alma',
    description:
      'Un recorrido práctico para integrar herramientas espirituales que te ayuden a manifestar con intención, confianza y conexión con tu alma.',
    highlights: [
      'Prácticas simples para elevar tu energía',
      'Claves para ordenar mente, emoción y acción',
      'Rituales y hábitos para sostener tu evolución',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Claves para mi Camino.',
  },
];

export const getLinkDetailPath = (slug: string) => PageRoutes.LINK_DETAIL.replace(':slug', slug);
