import { Box, Button, Container, Typography } from '@mui/material';
import { Grid } from '@mui/material';

type VideoBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  videoUrl: string;
  reverse?: boolean;
};

function VideoBlock({ eyebrow, title, description, videoUrl, reverse }: VideoBlockProps) {
  return (
    <Grid container spacing={6} direction={reverse ? 'row-reverse' : 'row'} alignItems="center">
      {/* Video */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            position: 'relative',
            paddingTop: '56.25%',
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: '0 18px 40px rgba(176, 142, 162, 0.25)', // malva suave
          }}
        >
          <Box
            component="iframe"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </Box>
      </Grid>

      {/* Texto */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: '0.14em',
            color: 'secondary.main', // malva
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>

        <Typography variant="h4" fontWeight={600} color="text.primary" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 520 }}>
          {description}
        </Typography>

        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            px: 4,
            py: 1.5,
            fontWeight: 500,
            color: '#9A6B1F', // ocre / girasol apagado
            backgroundColor: '#FFF1D6', // arena muy clara
            border: '1px solid #9A6B1F',
            '&:hover': {
              backgroundColor: '#ffe8b9ff', // amarillo girasol suave
            },
          }}
        >
          Quiero saber más
        </Button>
      </Grid>
    </Grid>
  );
}
export default function Content() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        backgroundImage: 'url(/bg-content-section.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay arena suave */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(254,252,250,0.88), rgba(234,223,204,0.92))',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <VideoBlock
          eyebrow="¿Qué es la formación holística?"
          title="Formación Holística"
          description="Te vamos a acompañar en tu proceso de transformación personal para que salgas de la crisis que estás viviendo y, siguiendo el llamado de tu corazón, puedas encontrar el propósito de tu vida."
          videoUrl="https://www.youtube.com/embed/VIDEO_ID"
        />

        <Box sx={{ height: { xs: 80, md: 120 } }} />

        <VideoBlock
          eyebrow="¿Qué son terapeutas holísticos?"
          title="Primera Escuela para Terapeutas Holísticos"
          description="Formación profesional orientada al desarrollo integral del ser, brindando herramientas prácticas para acompañar procesos de sanación y crecimiento personal."
          videoUrl="https://www.youtube.com/embed/VIDEO_ID"
          reverse
        />
      </Container>
    </Box>
  );
}
