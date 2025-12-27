import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';

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
        height: { xs: 220, md: 480 },
        cursor: 'pointer',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',

        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.35)',
          transition: 'background-color 0.3s ease',
        },

        '&:hover::after': {
          backgroundColor: 'rgba(0,0,0,0.6)',
        },

        '&:hover .content': {
          transform: 'scale(1.05)',
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
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight={600}>
          {title}
        </Typography>

        {subtitle && (
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.85 }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default function Links() {
  return (
    <Box>
      <Grid container spacing={0}>
        <Grid size={4}>
          <LinkCard title="Campamento Holístico" image="/link.png" />
        </Grid>

        <Grid size={4}>
          <LinkCard title="Formación Holística" image="/link.png" />
        </Grid>

        <Grid size={4}>
          <LinkCard title="Terapeutas Holísticos" subtitle="Escuela de formación" image="/link.png" />
        </Grid>
      </Grid>
    </Box>
  );
}
