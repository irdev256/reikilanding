import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FinalCTA() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 12, md: 16 },
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Overlay principal */}
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

      {/* Detalles sutiles de luz */}
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

      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        {/* Línea decorativa */}
        <Box
          sx={{
            width: 60,
            height: 2,
            backgroundColor: '#C8A45D',
            mx: 'auto',
            mb: 3,
            opacity: 0.6,
          }}
        />

        <Typography
          variant="h4"
          fontWeight={500}
          sx={{
            mb: 2,
            color: '#6E5B3E',
          }}
        >
          ¿Estás lista para descubrir el plan de tu alma?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: '#7A6F63',
          }}
        >
          Da el primer paso hacia tu transformación espiritual.
        </Typography>

        <Button
          onClick={() =>
            navigate('/contacto', {
              state: {
                message: 'Hola, quiero recibir más información sobre la mentoría y dar el primer paso en mi camino espiritual.',
              },
            })
          }
          variant="contained"
          sx={{
            textTransform: 'none',
            px: 7,
            py: 2,
            fontSize: 16,
            fontWeight: 500,
            borderRadius: 999,
            backgroundColor: '#C8A45D',
            color: '#fff',
            boxShadow: `
              0 12px 30px rgba(200,164,93,0.35),
              0 0 0 0 rgba(200,164,93,0.4)
            `,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#B89550',
              boxShadow: `
                0 16px 40px rgba(200,164,93,0.45),
                0 0 0 8px rgba(200,164,93,0.08)
              `,
            },
          }}
        >
          Iniciar mi camino
        </Button>
      </Container>
    </Box>
  );
}
