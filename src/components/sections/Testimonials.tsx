import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { HomeSection } from '../../helpers/constants';

type Testimonial = {
  text: string;
  // author: string;
};

const testimonials: Testimonial[] = [
  {
    text: 'Gracias por estar y acompañarme siempre. Gracias por todo 💜 Siento profundamente que esta mentoría, de tu mano, tiene que llegar a todo el mundo.',
  },
  {
    text: 'Gracias, Ale. Lloré todo, pero me sentí aliviada. Es muy lindo no sentirse sola al contar mi historia.',
  },
  {
    text: 'Ale, mostrás la luz más grande de la Tierra. Mentora de almas en evolución, amor y luz.',
  },
  {
    text: 'Gracias, Ale. De verdad siento que, si no hubiera sido por la mentoría, no hubiese podido disfrutar ni mucho menos festejar.',
  },
  {
    text: 'Anoche soñé con vos. Estaba acostada con el cuerpo cubierto de pétalos de rosas y me decías que siga, que lo estaba haciendo bien. No lo sentí como algo malo, sino como el final y un nuevo comienzo. Cada día voy aprendiendo más y entendiendo cada situación.',
  },
  {
    text: 'Hice la meditación y entendí que mi ángel fuiste vos todo este tiempo. Estoy profundamente agradecida. Gracias por tanto, Ale.',
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
      component="section"
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
        <Typography variant="h4" fontWeight={600} sx={{ mb: 6, color: '#6E5B3E' }}>
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
                  component="blockquote"
                  sx={{
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    mb: 4,
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
        {/* Fotos de encuentros reales */}
        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: '#7A6F63',
              fontStyle: 'italic',
            }}
          >
            Encuentros presenciales de mentoría y acompañamiento consciente
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {[
              {
                src: '/memoria-1.jpeg',
                alt: 'Encuentro grupal de mentoría espiritual en un espacio de conexión',
              },
              {
                src: '/memoria-2.jpeg',
                alt: 'Participantes compartiendo un momento de mentoría espiritual consciente',
              },
            ].map((img) => (
              <Box
                key={img.src}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: '0 18px 40px rgba(176, 142, 162, 0.25)',
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt={img.alt}
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: { xs: 240, md: 300 },
                    objectFit: 'cover',
                    filter: 'saturate(95%)',
                  }}
                />

                {/* Overlay sutil */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.35))',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
