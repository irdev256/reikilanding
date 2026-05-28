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
    title: 'Limpiezas Energéticas – Curso',
    subtitle: 'Aprendé a limpiar, sostener y expandir tu energía desde la luz.',
    image: '/person-conducting-reiki-therapy.jpg',
    ariaLabel: 'Curso de limpiezas energéticas guiado desde la conciencia, la mediumnidad y la luz espiritual',
    description:
      'Este encuentro está creado para quienes sienten el llamado a comprender, limpiar y elevar su energía desde un lugar consciente, amoroso y guiado. A través de la mediumnidad, vas a aprender a conectar con tus guías espirituales y a reconocer de qué manera ellos acompañan, protegen y asisten en los procesos de limpieza energética. No se trata de “hacer” desde el control, sino de permitir que la luz actúe a través de vos. Durante el curso, vas a comprender en profundidad qué son las energías densas o estancadas, cómo se generan y de qué forma pueden influir en tu campo energético. Vas a aprender a percibir aquello que drena tu energía, que bloquea tu avance o que genera confusión emocional y mental. También se abordan, desde un enfoque sutil y sin miedo, las distintas formas en las que la energía puede verse afectada: cargas externas, pensamientos sostenidos, vínculos, e incluso trabajos energéticos mal direccionados. Todo es visto desde la conciencia, la responsabilidad y la conexión con la Fuente. Se te enseñará cómo limpiar tu propio campo energético y el de otras personas, siempre desde el respeto, la luz y la guía espiritual. Vas a incorporar herramientas para liberar lo que ya no corresponde, disolver interferencias y restaurar el equilibrio energético. Este no es solo un aprendizaje técnico. Es un proceso de apertura, de confianza y de reconexión con tu propia capacidad de canalizar la luz. Si sentís que es momento de comprender lo que percibís, de dejar de temerle a lo que no ves y empezar a sostener tu energía desde otro lugar… este espacio es para vos. ✨ Tu energía es tu hogar. Aprendé a limpiarla, sostenerla y expandirla desde la luz.',
    highlights: [
      'Conexión con tus guías espirituales a través de la mediumnidad',
      'Comprensión profunda de energías densas, estancadas e interferencias',
      'Herramientas para limpiar tu campo energético y el de otras personas',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Limpiezas Energéticas – Curso.',
  },
  {
    slug: 'proposito-espiritual',
    title: 'Registros Akáshicos – Encuentro',
    subtitle: 'Una puerta de acceso consciente a la memoria y verdad del alma.',
    image: '/link1.jpg',
    ariaLabel: 'Encuentro de Registros Akáshicos guiado desde la luz, la conexión divina y la limpieza del canal',
    description:
      'Este espacio es una puerta de apertura consciente hacia la información del alma, guiada desde la luz y sostenida por la conexión divina. Los Registros Akáshicos son el campo donde se guarda la memoria de tu alma: tu recorrido, tus aprendizajes y tus experiencias. En este encuentro vas a aprender a acceder a esa información desde un lugar claro, amoroso y alineado con Dios, sin forzar ni intervenir, sino permitiendo que la verdad se revele. El proceso se realiza en dos encuentros, con tiempo de integración entre cada clase, porque no se trata solo de aprender, sino de encarnar lo que se abre. Trabajamos desde una frecuencia elevada, acompañados por energías sutiles que asisten el proceso desde el cosmos, para que puedas acceder de manera segura, respetuosa y consciente. Durante los encuentros vas a aprender qué son los Registros Akáshicos y cómo funcionan, cómo abrir y cerrar tus registros de forma correcta, el uso de oraciones, cómo recibir la información sin interferencias del ego o la mente, y la importancia de la limpieza del canal para una conexión real y clara. Porque antes de acceder a cualquier información, es fundamental limpiar, ordenar la energía y alinearte con la Fuente. Este no es solo un aprendizaje técnico: es un proceso de conexión profunda con Dios, donde lo más importante no es “ver” o “escuchar”, sino aprender a estar disponible para la verdad. Todos los encuentros que comparto tienen una misma base: la conexión divina y la limpieza del canal. Desde ahí, todo se vuelve claro, verdadero y amoroso.',
    highlights: [
      'Acceso consciente a la memoria del alma desde la conexión divina',
      'Apertura y cierre correcto de Registros Akáshicos con oraciones',
      'Limpieza del canal para recibir información clara y sin interferencias',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Registros Akáshicos – Encuentro.',
  },
  {
    slug: 'claves-camino',
    title: 'Orígenes – Mentoría (3 meses)',
    subtitle: 'Un regreso profundo a lo que sos, más allá de todo lo que te enseñaron a ser.',
    image: '/link3.jpg',
    ariaLabel: 'Mentoría Orígenes de tres meses para recordar la esencia, integrar lo espiritual y lo terrenal',
    description:
      'Orígenes no es solo un proceso: es un regreso. Durante estos tres meses te acompaño a descubrir de dónde venís, quién sos en esencia y cuál es la raíz de tu alma. No es un camino superficial ni inmediato, sino un proceso real, a veces desafiante, pero profundamente amoroso cuando te permitís verte sin máscaras. Porque el origen no se busca afuera: se recuerda adentro. Muchas veces sentimos un vacío o una desconexión y salimos a buscar respuestas en el exterior, pero en Orígenes ese movimiento cambia y empezamos a mirar hacia adentro, a reconocernos y a escuchar lo que siempre estuvo ahí esperando ser visto. En este recorrido vas a integrar lo espiritual y lo terrenal, trayendo claridad, orden y sentido a tu vida. A lo largo de la mentoría trabajamos en conexión con distintas frecuencias de luz que acompañan el proceso, desde la naturaleza, lo cósmico y otros planos de existencia, siempre desde el respeto, la armonía y la guía de la Fuente. Orígenes es un proceso de apertura, de memoria y de verdad. Es animarte a dejar de buscar y empezar a recordar.',
    highlights: [
      'Regreso profundo a tu esencia durante una mentoría de tres meses',
      'Integración de lo espiritual y lo terrenal para traer claridad y orden',
      'Conexión con frecuencias de luz, naturaleza y planos de existencia',
    ],
    whatsappMessage: 'Hola Alejandrina, quiero más información sobre Orígenes – Mentoría (3 meses).',
  },
];

export const getLinkDetailPath = (slug: string) => PageRoutes.LINK_DETAIL.replace(':slug', slug);
