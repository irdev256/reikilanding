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
            }}
          >
            Lorem ipsum dolor sit amet
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h5"
            sx={{
              color: '#6B6460',
              maxWidth: 600,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

          {/* Texto secundario */}
          <Typography
            variant="body1"
            sx={{
              color: '#8A817C',
              maxWidth: 560,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
