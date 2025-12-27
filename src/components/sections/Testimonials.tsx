import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

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

  /* autoplay */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: 520, md: 680 },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/bg-testimonials.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Overlay blanco */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255,255,255,0.48)',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={600}>
          Testimonios
        </Typography>

        {/* Slider */}
        <Box
          sx={{
            mt: 6,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${active * (100 / testimonials.length)}%)`,
              transition: 'transform 0.6s ease',
            }}
          >
            {testimonials.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: `${100 / testimonials.length}%`,
                  px: { xs: 2, md: 4 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    px: { xs: 3, md: 6 },
                    py: { xs: 4, md: 5 },
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    minHeight: 180,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      mb: 3,
                    }}
                  >
                    “{item.text}”
                  </Typography>

                  <Typography variant="subtitle2" fontWeight={600}>
                    {item.author}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1.5 }}>
          {testimonials.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActive(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                cursor: 'pointer',
                backgroundColor: index === active ? '#e46b61' : '#ccc',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
