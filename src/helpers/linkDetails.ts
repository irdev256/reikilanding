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
      'Este encuentro está creado para quienes sienten el llamado a comprender, limpiar y elevar su energía desde un lugar consciente, amoroso y guiado.\n' +
      'A través de la mediumnidad, vas a aprender a conectar con tus guías espirituales y a reconocer de qué manera ellos acompañan, protegen y asisten en los procesos de limpieza energética. No se trata de “hacer” desde el control, sino de permitir que la luz actúe a través de vos.\n' +
      'Durante el curso, vas a comprender en profundidad qué son las energías densas o estancadas, cómo se generan y de qué forma pueden influir en tu campo energético. Vas a aprender a percibir aquello que drena tu energía, que bloquea tu avance o que genera confusión emocional y mental.\n' +
      'También se abordan, desde un enfoque sutil y sin miedo, las distintas formas en las que la energía puede verse afectada: cargas externas, pensamientos sostenidos, vínculos, e incluso trabajos energéticos mal direccionados. Todo es visto desde la conciencia, la responsabilidad y la conexión con la Fuente.\n' +
      'Se te enseñará cómo limpiar tu propio campo energético y el de otras personas, siempre desde el respeto, la luz y la guía espiritual. Vas a incorporar herramientas para liberar lo que ya no corresponde, disolver interferencias y restaurar el equilibrio energético.\n' +
      'Este no es solo un aprendizaje técnico. Es un proceso de apertura, de confianza y de reconexión con tu propia capacidad de canalizar la luz.\n' +
      'Si sentís que es momento de comprender lo que percibís, de dejar de temerle a lo que no ves y empezar a sostener tu energía desde otro lugar… este espacio es para vos.\n' +
      '✨ Tu energía es tu hogar. Aprendé a limpiarla, sostenerla y expandirla desde la luz.',
    highlights: [],
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
      'Este espacio es una puerta.\n' +
      'Una apertura consciente hacia la información del alma, guiada desde la luz y sostenida por la conexión divina.\n' +
      'Los Registros Akáshicos son el campo donde se guarda la memoria de tu alma: tu recorrido, tus aprendizajes, tus experiencias. En este encuentro, vas a aprender a acceder a esa información desde un lugar claro, amoroso y alineado con Dios, sin forzar, sin intervenir, sino permitiendo que la verdad se revele.\n' +
      'Este proceso se realiza en dos encuentros (uno cada 15 días), de dos horas cada uno. Entre cada clase hay un tiempo de integración, porque no se trata solo de aprender, sino de encarnar lo que se abre.\n' +
      'Trabajamos con Registros Akáshicos desde una frecuencia elevada, acompañados por energías sutiles que asisten el proceso desde el cosmos. Esta información es canalizada para que puedas acceder de manera segura, respetuosa y consciente.\n' +
      'Durante los encuentros vas a aprender:\n' +
      'Qué son los Registros Akáshicos y cómo funcionan.\n' +
      'Cómo abrir y cerrar tus registros de forma correcta.\n' +
      'El uso de oraciones: qué son, cuándo utilizarlas y cuándo no.\n' +
      'Cómo recibir la información sin interferencias del ego o la mente.\n' +
      'La importancia de la limpieza del canal para una conexión real y clara.\n' +
      'Porque antes de acceder a cualquier información, es fundamental limpiar.\n' +
      'Limpiar el canal, ordenar la energía y alinearte con la Fuente.\n' +
      'Este no es solo un aprendizaje técnico. Es un proceso de conexión profunda con Dios, donde lo más importante no es “ver” o “escuchar”, sino aprender a estar disponible para la verdad.\n' +
      'Todos los encuentros que comparto —Orígenes, mentoría, registros— tienen una misma base: la conexión divina y la limpieza del canal. Porque desde ahí es donde todo se vuelve claro, verdadero y amoroso.\n' +
      '✨ Cuando el canal se limpia, la información deja de confundirte… y empieza a guiarte.\n' +
      'Si sentís el llamado, este es tu momento de abrir esa puerta.',
    highlights: [],
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
      'Orígenes no es solo un proceso: es un regreso.\n' +
      'Un viaje profundo hacia lo que sos, más allá de todo lo que te enseñaron a ser.\n' +
      'Durante estos tres meses, te acompaño a descubrir de dónde venís, quién sos en esencia y cuál es la raíz de tu alma. No es un camino superficial ni inmediato. Es un proceso real, a veces desafiante, pero profundamente amoroso cuando te permitís verte sin máscaras.\n' +
      'Porque el origen no se busca afuera.\n' +
      'El origen se recuerda adentro.\n' +
      'Muchas veces sentimos un vacío o una desconexión, y salimos a buscar respuestas en el exterior. Pero en Orígenes, ese movimiento cambia: empezamos a mirar hacia adentro, a reconocernos, a escuchar lo que siempre estuvo ahí esperando ser visto.\n' +
      'En este recorrido vas a integrar lo espiritual y lo terrenal. No se trata de escapar, sino de comprender tu experiencia humana desde una conciencia más elevada, trayendo claridad, orden y sentido a tu vida.\n' +
      'A lo largo de la mentoría, trabajamos en conexión con distintas frecuencias de luz que acompañan el proceso: energías sutiles que sostienen, guían y expanden tu conciencia. Se abre un espacio de conexión con lo cósmico, con la naturaleza y con diferentes planos de existencia que colaboran en tu despertar, siempre desde el respeto, la armonía y la guía de la Fuente.\n' +
      'Orígenes es un proceso de apertura, de memoria y de verdad.\n' +
      'Es animarte a dejar de buscar y empezar a recordar.\n' +
      'No es fácil, pero es profundamente transformador.\n' +
      'Porque cuando encontrás tu origen… ya no volvés a perderte.\n' +
      '✨ Si sentís el llamado, es porque tu alma ya empezó a recordar',
    highlights: [],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Orígenes – Mentoría (3 meses).',
  },
];

export const getLinkDetailPath = (slug: string) => `${PageRoutes.LINK_DETAIL}?curso=${encodeURIComponent(slug)}`;
