import { Container, Typography } from '@mui/material';
import Navbar from '../components/layout/Navbar';

export default function Lorem3() {
  return (
    <Container sx={{ py: 10 }}>
      <Navbar />
      <Typography variant="h3" gutterBottom>
        Lorem 3 Page
      </Typography>

      <Typography variant="body1">Contenido de la página Lorem 3...</Typography>
    </Container>
  );
}
