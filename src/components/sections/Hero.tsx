import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Navbar from '../layout/Navbar';
import { HomeSection } from '../../helpers/constants';

export default function Hero() {
  return (
    <Box
      id={HomeSection.HERO}
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'saturate(105%)',
          background: `
      linear-gradient(
        90deg,
        rgba(254,252,250,0.85) 0%,
        rgba(234,223,204,0.55) 40%,
        rgba(242,198,204,0.22) 65%,
        rgba(242,198,204,0.10) 100%
      )
    `,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Stack
          spacing={3}
          maxWidth={720}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            pb: { xs: 4, md: 10 },
            pr: { md: 16 },
          }}
        >
          {/* Título */}
          <Typography
            variant="h1"
            fontWeight={600}
            sx={{
              color: '#5B5450', // más contraste solo en hero
              fontSize: {
                xs: '2.6rem',
                sm: '3.1rem',
                md: '4rem',
              },
            }}
          >
            Despertar con el Plan de tu Alma
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h5"
            sx={{
              color: '#6B6460',
              maxWidth: 600,
            }}
          >
            Mentoría espiritual para reconectar con tu luz, tu propósito y tu verdad.{' '}
          </Typography>

          {/* CTA */}
          <Button
            component="a"
            href={`/#${HomeSection.CONTENT}`}
            variant="contained"
            size="large"
            sx={{
              textTransform: 'none',
              px: 4,
              py: 1.5,
              width: 'fit-content',
              fontWeight: 500,
              color: '#9A6B1F', // ocre / girasol apagado
              backgroundColor: '#FFF1D6', // arena muy clara
              border: '1px solid #9A6B1F',
              '&:hover': {
                backgroundColor: '#ffe8b9ff', // amarillo girasol suave
              },
            }}
          >
            Quiero más información
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
