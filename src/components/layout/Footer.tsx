import { Box, Container, Stack, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 10,
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
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Nombre Apellido
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              href="https://github.com/"
              target="_blank"
              underline="none"
              color="text.secondary"
              sx={{
                '&:hover': {
                  color: 'text.primary',
                },
              }}
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              underline="none"
              color="text.secondary"
              sx={{
                '&:hover': {
                  color: 'text.primary',
                },
              }}
            >
              LinkedIn
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
