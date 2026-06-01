import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';

import { CLIENT_FACEBOOK_LINK, CLIENT_INSTAGRAM_LINK, CLIENT_TIKTOK_LINK, OUR_WHATSAPP_LINK } from '../../helpers/constants';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        pt: { xs: 6, md: 8 },
        pb: { xs: 2, md: 3 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} textAlign={{ xs: 'center', md: 'left' }} justifyContent="center">
          {' '}
          {/* Marca */}
          {/* Marca */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack
              spacing={1.2}
              alignItems="center" // siempre centrado (nombre + girasol)
            >
              <Typography
                sx={{
                  fontFamily: '"Ms Madi", cursive',
                  fontSize: 32,
                  lineHeight: 1,
                  color: 'text.primary',
                  textAlign: 'center',
                }}
              >
                Alejandrina González
              </Typography>

              <Box
                component="img"
                src="/sunflower1.png"
                alt="Girasol"
                sx={{
                  width: 45,
                  height: 45,
                  objectFit: 'contain',
                  opacity: 0.9,
                }}
              />
            </Stack>
          </Grid>
          {/* Contactame */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={1.2}>
              <Typography variant="h6" fontWeight={500}>
                Contactame
              </Typography>

              <Link href="tel:+541160482048" underline="none" color="text.secondary">
                +54 1160482048
              </Link>

              <Link href="mailto:alejandrinagonzalezguia@gmail.com" underline="none" color="text.secondary">
                alejandrinagonzalezguia@gmail.com
              </Link>
            </Stack>
          </Grid>
          {/* Ubicación */}
          {/* <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={1.2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="h6" fontWeight={500}>
                Ubicación
              </Typography>

              <Link
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                color="text.secondary"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 0.5,
                  textAlign: 'center',
                  '&:hover': {
                    color: 'text.primary',
                  },
                }}
              >
                📍 Av. Córdoba 3621 - Palermo
              </Link>
            </Stack>
          </Grid> */}
          {/* Seguime en */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="h6" fontWeight={500}>
                Seguime en
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 0.5,
                  alignItems: 'center',
                  mt: 0.5,
                }}
              >
                {/* Instagram */}
                <Box
                  component="button"
                  onClick={() => window.open(CLIENT_INSTAGRAM_LINK, '_blank', 'noopener,noreferrer')}
                  aria-label="Instagram de Alejandrina González"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: '7px',
                    borderRadius: '50%',
                    color: 'text.secondary',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </Box>

                {/* TikTok */}
                <Box
                  component="button"
                  onClick={() => window.open(CLIENT_TIKTOK_LINK, '_blank', 'noopener,noreferrer')}
                  aria-label="TikTok de Alejandrina González"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: '7px',
                    borderRadius: '50%',
                    color: 'text.secondary',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.2V349.4A162.6,162.6,0,1,1,185.7,188.9V278.2a74.6,74.6,0,1,0,52.2,71.2V0h87.3a121.2,121.2,0,0,0,1.9,22.2h0A122.2,122.2,0,0,0,381.8,95a121.4,121.4,0,0,0,66.2,19.5Z" />
                  </svg>
                </Box>

                {/* Facebook */}
                <Box
                  component="button"
                  onClick={() => window.open(CLIENT_FACEBOOK_LINK, '_blank', 'noopener,noreferrer')}
                  aria-label="Facebook de Alejandrina González"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: '7px',
                    borderRadius: '50%',
                    color: 'text.secondary',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        {/* Footer inferior */}
        <Box
          sx={{
            mt: { xs: 5, md: 6 },
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Link
            href={OUR_WHATSAPP_LINK}
            target="_blank"
            underline="none"
            color="text.secondary"
            sx={{
              fontSize: 12,
              '&:hover': { color: 'text.primary' },
            }}
          >
            © {new Date().getFullYear()} DOSDOS
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
