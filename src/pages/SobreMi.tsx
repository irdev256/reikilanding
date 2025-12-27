import { Container, Typography } from '@mui/material';
import Navbar from '../components/layout/Navbar';

export default function SobreMi() {
  return (
    <Container sx={{ py: 10 }}>
      <Navbar />
      <Typography variant="h3" gutterBottom>
        Sobre mi
      </Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut alias aperiam amet? Maiores laudantium culpa fugiat, corporis quod sint
        soluta est. Asperiores, minima! Iste a magni vero animi incidunt.
      </Typography>
    </Container>
  );
}
