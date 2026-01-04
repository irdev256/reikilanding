import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Stack, Alert, CircularProgress } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Contacto() {
  const location = useLocation();
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mensaje, setMensaje] = useState(() => location.state?.message ?? '');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);
    setIsSending(true);

    const formData = new FormData(event.currentTarget);

    const templateParams = {
      name: formData.get('nombre'),
      email: formData.get('email'),
      message: mensaje,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setMensaje('');
    } catch (error) {
      console.error(error);
      alert('No se pudo enviar el mensaje.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Mentoría espiritual con Alejandrina González</title>
      </Helmet>

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
            pt: { xs: 5, md: 14 },
            pb: 10,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#6E5B3E' }}>
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
              <TextField
                label="Nombre"
                name="nombre"
                slotProps={{
                  htmlInput: { 'aria-label': 'Nombre completo' },
                }}
                required
                fullWidth
                sx={textFieldSx}
              />

              <TextField
                label="Email"
                name="email"
                slotProps={{
                  htmlInput: {
                    'aria-label': 'Correo electrónico de contacto',
                  },
                }}
                type="email"
                required
                fullWidth
                sx={textFieldSx}
              />

              <TextField
                label="Mensaje"
                name="mensaje"
                slotProps={{
                  htmlInput: {
                    'aria-label': 'Mensaje de contacto',
                  },
                }}
                required
                fullWidth
                multiline
                rows={4}
                sx={textFieldSx}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSending}
                sx={{
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  fontWeight: 500,
                  color: '#9A6B1F',
                  backgroundColor: '#FFF1D6',
                  border: '1px solid #9A6B1F',
                  minHeight: 48,
                  '&:hover': {
                    backgroundColor: '#ffe8b9ff',
                  },
                  '&.Mui-disabled': {
                    backgroundColor: '#FFF1D6',
                    opacity: 0.7,
                  },
                }}
              >
                {isSending ? <CircularProgress size={22} thickness={4} sx={{ color: '#9A6B1F' }} /> : 'Enviar mensaje'}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

// ------------------------------------

const textFieldSx = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#CFC5B8', // borde normal
    },
    '&:hover fieldset': {
      borderColor: '#B8AA96',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#C8A45D', // 🔑 dorado suave (como el CTA)
    },
  },
  '& .MuiInputLabel-root': {
    color: '#7A6F63',
    '&.Mui-focused': {
      color: '#6E5B3E', // label en focus
    },
  },
};
