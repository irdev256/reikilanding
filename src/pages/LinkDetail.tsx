import { useMemo } from 'react';
import { Box, Button, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import { CLIENT_WHATSAPP_LINK, PageRoutes } from '../helpers/constants';
import { linkDetails } from '../helpers/linkDetails';
import { buildWhatsAppLink } from '../helpers/utils';

export default function LinkDetail() {
  const { slug } = useParams<{ slug: string }>();
  const detail = useMemo(() => (slug ? linkDetails.find((item) => item.slug === slug) : undefined), [slug]);

  if (!detail) {
    return (
      <>
        <Navbar />
        <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            No encontramos ese contenido.
          </Typography>
          <Button component={Link} to={PageRoutes.HOME} variant="contained" sx={{ textTransform: 'none' }}>
            Volver al inicio
          </Button>
        </Container>
      </>
    );
  }

  const whatsappUrl = buildWhatsAppLink({
    baseUrl: CLIENT_WHATSAPP_LINK,
    message: detail.whatsappMessage,
  });

  return (
    <>
      <Helmet>
        <title>{`${detail.title} | Mentoría espiritual consciente`}</title>
      </Helmet>

      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundImage: `url(${detail.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(254,252,250,0.92) 15%, rgba(234,223,204,0.86) 55%, rgba(242,198,204,0.68) 100%)',
          }}
        />

        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            py: { xs: 6, md: 10 },
          }}
        >
          <Button
            component={Link}
            to={PageRoutes.HOME}
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 3, textTransform: 'none', color: '#6E5B3E' }}
          >
            Volver al inicio
          </Button>

          <Box
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              backgroundColor: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(200,164,93,0.25)',
              backdropFilter: 'blur(3px)',
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, color: '#6E5B3E', fontSize: { xs: '2rem', md: '2.6rem' } }}>
              {detail.title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, color: '#7A6F63' }}>
              {detail.subtitle}
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              {detail.description}
            </Typography>

            <List sx={{ mb: 4 }}>
              {detail.highlights.map((item) => (
                <ListItem key={item} disablePadding sx={{ mb: 1 }}>
                  <ListItemText primary={`• ${item}`} primaryTypographyProps={{ color: '#6B6460' }} />
                </ListItem>
              ))}
            </List>

            <Button
              component="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<WhatsAppIcon />}
              sx={{
                textTransform: 'none',
                px: 4,
                py: 1.4,
                borderRadius: 999,
                backgroundColor: '#25D366',
                color: '#fff',
                '&:hover': { backgroundColor: '#20b858' },
              }}
            >
              Consultar por WhatsApp
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
