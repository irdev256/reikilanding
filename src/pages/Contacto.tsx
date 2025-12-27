import { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Stack, Alert } from '@mui/material';

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Typography variant="h3" gutterBottom>
        Contacto
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Si tenés alguna consulta o querés coordinar una charla, completá el formulario y nos contactaremos a la brevedad.
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
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
              color: '#C7547D',
              backgroundColor: '#FFDEE9',
              border: '1px solid #c7547d',
              boxShadow: '0 8px 20px rgba(242, 198, 204, 0.45)',
              transition: 'all 220ms ease',

              '&:hover': {
                backgroundColor: '#E8AEB8',
                color: '#FFFFFF',
              },
            }}
          >
            Enviar mensaje
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
