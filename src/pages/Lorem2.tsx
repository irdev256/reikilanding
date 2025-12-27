import { Container, Typography } from '@mui/material';
import Navbar from '../components/layout/Navbar';

export default function Lorem2() {
  return (
    <Container sx={{ py: 10 }}>
      <Navbar />
      <Typography variant="h3" gutterBottom>
        Lorem 2 Page
      </Typography>

      <Typography variant="body1">Contenido de la página Lorem 2...</Typography>
    </Container>
  );
}
