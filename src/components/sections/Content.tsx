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
            paddingTop: '56.25%', // 16:9
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
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
            letterSpacing: '0.1em',
            color: 'primary.main',
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>

        <Typography variant="h4" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {description}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#e46b61',
            textTransform: 'none',
            px: 4,
            py: 1.5,
            '&:hover': {
              backgroundColor: '#cf5a51',
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
      {/* Overlay blanco */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255,255,255,0.82)',
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
