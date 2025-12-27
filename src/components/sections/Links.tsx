import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
          <LinkCard title="Lorem 1" image="/link1.jpg" onClick={() => navigate('/lorem1')} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard title="Lorem 2" image="/link2.jpg" onClick={() => navigate('/lorem2')} />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <LinkCard title="Lorem 3" subtitle="dolor sit amet" image="/link3.jpg" onClick={() => navigate('/lorem3')} />
        </Grid>
      </Grid>
    </Box>
  );
}
