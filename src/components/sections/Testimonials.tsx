import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { HomeSection } from '../../helpers/constants';

type Testimonial = {
  text: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    text: 'La mentoría me ayudó a aceptar todo lo que pasé y todo lo que sufrí, para poder mostrarle a otros que sí se puede sanar.',
    author: 'Leonela Acosta',
  },
  {
    text: 'Este proceso me permitió reconectar conmigo mismo y entender que el camino de sanación es posible.',
    author: 'Marcos Fernández',
  },
  {
    text: 'Aprendí herramientas reales para acompañar a otros desde un lugar consciente y amoroso.',
    author: 'Sofía Martínez',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id={HomeSection.TESTIMONIALS}
      sx={{
        position: 'relative',
        py: { xs: 12, md: 16 },
        overflow: 'hidden',
      }}
    >
      {/* Fondo luminoso principal */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
        radial-gradient(
          circle at top,
          rgba(255,255,255,0.92) 0%,
          rgba(254,252,250,0.95) 55%,
          rgba(234,223,204,0.96) 100%
        )
      `,
        }}
      />

      {/* Toque dorado espiritual */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
        linear-gradient(
          120deg,
          rgba(200,164,93,0.08),
          transparent 40%,
          rgba(200,164,93,0.06)
        )
      `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={600} sx={{ mb: 6 }}>
          Testimonios
        </Typography>

        {/* Slider */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: 260, md: 220 },
          }}
        >
          {testimonials.map((item, index) => {
            const isActive = index === active;

            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  px: { xs: 4, md: 6 },
                  borderRadius: 3,
                  backgroundColor: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(200,164,93,0.25)',

                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateX(0)' : 'translateX(-12px)',
                  transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <Typography
                  sx={{
                    fontSize: 48,
                    lineHeight: 1,
                    color: '#C8A45D',
                    opacity: 0.5,
                    mb: 1,
                  }}
                >
                  “
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    mb: 4,
                  }}
                >
                  {item.text}
                </Typography>

                <Typography variant="subtitle2" fontWeight={600}>
                  {item.author}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
