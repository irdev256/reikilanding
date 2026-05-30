import { Box, Container, Grid, Link, Stack, Typography, IconButton } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import { CLIENT_FACEBOOK_LINK, CLIENT_INSTAGRAM_LINK, CLIENT_TIKTOK_LINK, OUR_WHATSAPP_LINK } from '../../helpers/constants';
import TikTokIcon from '../icons/TikTokIcon';

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

              <Stack
                direction="row"
                spacing={0.5}
                alignItems="center"
                sx={{
                  '& svg': {
                    width: 22,
                    height: 22,
                    display: 'block',
                  },
                }}
              >
                <IconButton
                  component="a"
                  href={CLIENT_INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 0.85,
                    color: 'text.secondary',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                  aria-label="Instagram de Alejandrina González"
                >
                  <InstagramIcon />
                </IconButton>

                <IconButton
                  component="a"
                  href={CLIENT_TIKTOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 0.85,
                    color: 'text.secondary',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                  aria-label="TikTok de Alejandrina González"
                >
                  <TikTokIcon sx={{ transform: 'scale(0.92)' }} />
                </IconButton>

                <IconButton
                  component="a"
                  href={CLIENT_FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 0.85,
                    color: 'text.secondary',
                    '&:hover': { color: '#9A6B1F' },
                  }}
                  aria-label="Facebook de Alejandrina González"
                >
                  <FacebookIcon />
                </IconButton>
              </Stack>
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
