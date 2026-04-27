import { Box, Button, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { getLinkDetailPath, linkDetails } from '../../helpers/linkDetails';

type LinkCardProps = {
  title: string;
  subtitle?: string;
  image: string;
  detailPath: string;
  ariaLabel: string;
};

function LinkCard({ title, subtitle, image, detailPath, ariaLabel }: LinkCardProps) {
  return (
    <Box
      component={RouterLink}
      to={detailPath}
      aria-label={ariaLabel}
      sx={{
        display: 'block',
        position: 'relative',
        height: { xs: 240, md: 480 },
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
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
          py: 3,
        }}
      >
        <Typography variant="h4" component="p" fontWeight={600} sx={{ mb: 1 }}>
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

        <Button
          component="span"
          variant="outlined"
          sx={{
            mt: 3,
            color: '#fff',
            borderColor: 'rgba(255,255,255,0.7)',
            textTransform: 'none',
            fontWeight: 500,
            backdropFilter: 'blur(2px)',
            backgroundColor: 'rgba(0,0,0,0.25)',
            '&:hover': {
              borderColor: '#fff',
              backgroundColor: 'rgba(0,0,0,0.4)',
            },
          }}
        >
          Conocer más
        </Button>
      </Box>
    </Box>
  );
}

export default function Links() {
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
        {linkDetails.map((link) => (
          <Grid key={link.slug} size={{ xs: 12, sm: 6, md: 4 }}>
            <LinkCard
              title={link.title}
              subtitle={link.subtitle}
              image={link.image}
              ariaLabel={link.ariaLabel}
              detailPath={getLinkDetailPath(link.slug)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
