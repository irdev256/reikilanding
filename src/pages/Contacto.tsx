import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Stack, Alert } from '@mui/material';
import Navbar from '../components/layout/Navbar';

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Navbar />

      {/* Overlay principal (IGUAL al FinalCTA) */}
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

      {/* Contenido */}
      <Container
        maxWidth="sm"
        sx={{
          position: 'relative',
          pt: 14, // 👈 compensa AppBar fixed
          pb: 10,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: '#6E5B3E' }}>
          Contacto
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: '#7A6F63' }}>
          Si tenés alguna consulta o querés coordinar una charla, completá el formulario y nos contactaremos a la brevedad.
        </Typography>

        {submitted && (
          <Alert severity="success" sx={{ mb: 3 }}>
            ¡Gracias por tu mensaje! Te responderemos a la brevedad.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={3}>
            <TextField label="Nombre" name="nombre" required fullWidth />

            <TextField label="Email" name="email" type="email" required fullWidth />

            <TextField label="Mensaje" name="mensaje" required fullWidth multiline rows={4} />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                textTransform: 'none',
                px: 4,
                py: 1.5,
                fontWeight: 500,
                color: '#9A6B1F',
                backgroundColor: '#FFF1D6',
                border: '1px solid #9A6B1F',
                '&:hover': {
                  backgroundColor: '#ffe8b9ff',
                },
              }}
            >
              Enviar mensaje
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
