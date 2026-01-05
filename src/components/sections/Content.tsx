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
          component="p"
          sx={{
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: '0.14em',
            color: '#6E5B3E',
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>

        <Typography variant="h4" component="h2" fontWeight={600} gutterBottom sx={{ color: '#6E5B3E' }}>
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
          title="¿Qué es esta mentoría espiritual?"
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
                Lo que vas a vivir
              </Typography>

              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {[
                  'Acompañamiento espiritual consciente',
                  'Desarrollo seguro de la mediumnidad',
                  'Guía desde Dios, la Luz y la Fuente',
                  'Espacio cuidado, amoroso y respetuoso',
                  'Proceso profundo de transformación interior',
                ].map((item) => (
                  <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          }
        />

        <Box sx={{ height: { xs: 80, md: 100 } }} />

        <ContentBlock
          eyebrow="El proceso"
          title="¿Qué trabajamos en esta mentoría espiritual?"
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
                Resultados del proceso
              </Typography>

              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {[
                  'Conexión con tu guía espiritual',
                  'Limpieza y protección energética',
                  'Sanación del alma y del linaje',
                  'Claridad sobre tu propósito',
                  'Integración espiritual en la vida diaria',
                ].map((item) => (
                  <Typography key={item} component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          }
        />
      </Container>
    </Box>
  );
}
