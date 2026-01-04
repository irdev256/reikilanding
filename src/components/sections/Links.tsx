import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

type LinkCardProps = {
  title: string;
  subtitle?: string;
  image: string;
  onClick?: () => void;
};

function LinkCard({ title, subtitle, image, onClick }: LinkCardProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        height: { xs: 240, md: 480 },
        cursor: 'pointer',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',

        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          transition: 'background-color 0.3s ease',
        },

        '&:hover::after': {
          backgroundColor: 'rgba(0,0,0,0.6)',
        },

        '&:hover .content': {
          transform: 'scale(1.04)',
        },
      }}
    >
      <Box
        className="content"
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          transition: 'transform 0.3s ease',
          px: 3,
        }}
      >
        <Typography variant="h4" fontWeight={600} sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/* Separador */}
        <Box
          sx={{
            width: 48,
            height: 2,
            backgroundColor: 'rgba(255,255,255,0.6)',
            mb: 2,
          }}
        />

        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              color: '#fff', // 🔑 fuerza blanco puro
              maxWidth: 280,
              lineHeight: 1.6,
              px: 2,
              py: 1,
              borderRadius: 1,
              backgroundColor: 'rgba(0,0,0,0.45)', // un poco más oscuro
              backdropFilter: 'blur(2px)',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default function Links() {
  // const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', mt: 1 }}>
      {/* overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: `
            linear-gradient(
              180deg,
              rgba(254,252,250,0.85) 0%,
              rgba(234,223,204,0.45) 25%,
              rgba(242,198,204,0.18) 45%,
              rgba(242,198,204,0.00) 70%
            )
          `,
        }}
      />

      <Grid container spacing={1} sx={{ position: 'relative', zIndex: 0 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard
            title="Sanación y Liberación"
            subtitle="Suelta bloqueos emocionales y energéticos del pasado."
            image="/person-conducting-reiki-therapy.jpg"
            // onClick={() => navigate('/sanacion')}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard
            title="Buscas tu propósito espiritual"
            subtitle="Deseas encontrar el sentido profundo de tu existencia."
            image="/link1.jpg"
            // onClick={() => navigate('/proposito')}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard
            title="Claves para tu Camino"
            subtitle="Herramientas para manifestar la vida que deseas."
            image="/link3.jpg"
            // onClick={() => navigate('/camino')}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
