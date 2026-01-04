import { Box, Container, Typography } from '@mui/material';
import { HomeSection } from '../../helpers/constants';

export default function SobreMi() {
  return (
    <Box
      id={HomeSection.SOBRE_MI}
      component="section"
      role="img"
      aria-label="Retrato de Alejandrina González, médium consciente y guía espiritual, en un entorno natural con girasoles"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        backgroundImage: 'url(/close-up-woman.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              90deg,
              rgba(0,0,0,0.55) 0%,
              rgba(0,0,0,0.45) 40%,
              rgba(0,0,0,0.30) 65%,
              rgba(0,0,0,0.20) 100%
            )
          `,
        }}
      />

      {/* Contenido */}
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Título */}
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            color: '#fff',
            mb: { xs: 4, md: 6 },
          }}
        >
          Sobre mí
        </Typography>

        {/* Texto */}
        <Typography variant="body1" paragraph sx={{ color: 'rgba(255,255,255,0.95)' }}>
          Soy Alejandrina González, médium consciente y guía espiritual especializada en mentoría espiritual consciente. Desde muy pequeña sentí la
          presencia de la Luz, pero fue a través de mi propia historia —pérdidas, crisis, renacimientos y despertares— que comprendí que cada
          experiencia tenía un propósito mayor. Aprendí que el dolor no llega para castigarnos, sino para recordarnos quiénes somos cuando volvemos a
          mirarnos desde el alma.
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#fff',
            mt: 5,
            mb: 2,
          }}
        >
          Mi camino espiritual
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'rgba(255,255,255,0.9)' }}>
          En ese camino de búsqueda y entrega, desarrollé mi mediumnidad como un puente de amor entre el cielo y la tierra, entendiendo que todos
          tenemos la capacidad de escuchar, sentir y recordar nuestra conexión con la Fuente. Mi proceso personal me enseñó a confiar, a soltar el
          miedo y a vivir desde la fe, incluso en los momentos más oscuros.
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: '#fff',
            mt: 5,
            mb: 2,
          }}
        >
          Mi misión como guía espiritual
        </Typography>

        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)' }}>
          Hoy, a través de mi mentoría, acompaño a quienes están listos para volver a Dios, a la Fuente y a su verdad interior, desarrollando su
          mediumnidad, sanando su historia y reconectando con el plan de su alma. Mi misión es guiarte con respeto, amor y claridad en tu propio
          despertar.
        </Typography>
      </Container>
    </Box>
  );
}
