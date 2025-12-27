import { Box, Container, Grid, Typography } from '@mui/material';

export default function MisInicios() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 16 },
        backgroundImage: 'url(/portrait.jpg)',
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
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Título */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: '#fff',
            mb: { xs: 4, md: 6 },
          }}
        >
          Mis inicios
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Columna 1 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" paragraph sx={{ color: 'rgba(255,255,255,0.95)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Typography variant="body1" paragraph sx={{ color: 'rgba(255,255,255,0.9)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </Typography>

            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </Typography>
          </Grid>

          {/* Columna 2 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" paragraph sx={{ color: 'rgba(255,255,255,0.95)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Typography>

            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
