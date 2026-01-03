import { Box, Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { HomeSection } from '../../helpers/constants';

type ContentBlockProps = {
  eyebrow: string;
  title: string;
  content: React.ReactNode;
  aside?: React.ReactNode;
  reverse?: boolean;
};

function ContentBlock({ eyebrow, title, content, aside, reverse }: ContentBlockProps) {
  return (
    <Grid container spacing={6} direction={reverse ? 'row-reverse' : 'row'} alignItems="center">
      {/* Texto principal */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: '0.14em',
            color: 'secondary.main',
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>

        <Typography variant="h4" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        {content}
      </Grid>

      {/* Columna visual / apoyo */}
      {aside && (
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: 'rgba(255,255,255,0.75)',
              boxShadow: '0 18px 40px rgba(176, 142, 162, 0.25)',
            }}
          >
            {aside}
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default function Content() {
  return (
    <Box
      id={HomeSection.CONTENT}
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        backgroundImage: 'url(/bg-content-section.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(254,252,250,0.88), rgba(234,223,204,0.92))',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <ContentBlock
          eyebrow="La experiencia"
          title="¿Qué es esta mentoría?"
          content={
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Un proceso profundo de 4 meses de acompañamiento consciente, donde te guío a desarrollar tu mediumnidad desde Dios, la Luz y la
                Fuente, para despertar tu conciencia y alinear tu vida con el plan de tu alma.
              </Typography>

              <Typography variant="body1">
                No se trata solo de aprender técnicas, sino de recordar quién sos, sanar tu historia y vivir desde un lugar de coherencia espiritual.
              </Typography>
            </>
          }
          aside={
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Un espacio sagrado
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Un espacio de transformación interior, sostenido con amor, respeto y guía constante durante todo el proceso.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Cada encuentro está pensado para acompañarte con cuidado y profundidad, respetando tus tiempos, tu sensibilidad y tu propio camino
                espiritual.
              </Typography>
            </Box>
          }
        />

        <Box sx={{ height: { xs: 80, md: 120 } }} />

        <ContentBlock
          eyebrow="El proceso"
          title="¿Qué trabajamos?"
          reverse
          content={
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>Mes 1 · Desarrollo de la Mediumnidad</strong>
                <br />
                Conexión con guías espirituales, limpiezas energéticas, protección espiritual y canalización consciente.
              </Typography>

              <Typography variant="body1">
                <strong>Meses 2 a 4 · Despertar de la Conciencia</strong>
                <br />
                Sanación del alma, desapego, leyes espirituales, propósito, expansiones energéticas y alineación divina.
              </Typography>
            </>
          }
          aside={
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Duración
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                4 meses de acompañamiento profundo y sostenido, con un proceso que se despliega de manera gradual y consciente.
              </Typography>

              <Typography variant="body2" color="text.secondary">
                El trabajo no queda solo en los encuentros: se integra en tu vida diaria, acompañando cambios reales en tu percepción, energía y forma
                de habitar tu camino.
              </Typography>
            </Box>
          }
        />
      </Container>
    </Box>
  );
}
