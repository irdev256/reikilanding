import { Box, Container, Stack, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'center', sm: 'center' }}
          textAlign={{ xs: 'center', sm: 'left' }}
        >
          <Link
            href="https://wa.me/5491173624522"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            color="text.secondary"
            sx={{
              fontSize: '0.875rem', // body2
              '&:hover': {
                color: 'text.primary',
              },
            }}
          >
            © {new Date().getFullYear()} IR-DEV
          </Link>

          <Stack direction="row" spacing={3}>
            <Link
              href="https://www.instagram.com/luz_deangel_/"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="text.secondary"
              sx={{
                '&:hover': {
                  color: 'text.primary',
                },
              }}
            >
              Instagram
            </Link>
            <Link
              href="mailto:contacto@email.com"
              underline="none"
              color="text.secondary"
              sx={{
                '&:hover': {
                  color: 'text.primary',
                },
              }}
            >
              Contacto
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
