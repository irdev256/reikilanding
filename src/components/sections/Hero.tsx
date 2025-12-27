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
          backgroundColor: 'rgba(255,255,255,0.30)',
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
          <Typography variant="h1" fontWeight={600}>
            Lorem ipsum dolor sit amet
          </Typography>

          <Typography variant="h5" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
