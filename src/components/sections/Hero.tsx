import { Box, Container, Stack, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
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
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255,255,255,0.32)',
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
            pb: { xs: 0, md: 10 },
            pr: { md: 16 },
          }}
        >
          <Typography variant="h2" fontWeight={600}>
            Nombre Apellido
          </Typography>

          <Typography variant="h5" color="text.secondary">
            Desarrollador web especializado en experiencias simples y efectivas.
          </Typography>

          <Typography variant="body1">Trabajo en proyectos digitales enfocados en claridad, diseño y funcionalidad.</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
