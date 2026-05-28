import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, Container, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import { OUR_WHATSAPP_LINK, PageRoutes } from '../helpers/constants';
import { linkDetails, type LinkDetail } from '../helpers/linkDetails';
import { buildWhatsAppLink } from '../helpers/utils';

const ANIMATION_MS = 420;
const TRANSITION_EASING = 'cubic-bezier(0.22, 0.7, 0.2, 1)';

type Direction = -1 | 0 | 1;
type CardSlot = 'left' | 'center' | 'right';

function getCardMotion(slot: CardSlot, direction: Direction, isAnimating: boolean) {
  if (!isAnimating || direction === 0) {
    if (slot === 'center') return { transform: 'translateX(0%)', opacity: 1, filter: 'blur(0px)', zIndex: 4 };
    if (slot === 'left') return { transform: 'translateX(-22%)', opacity: 0.5, filter: 'blur(3px)', zIndex: 2 };

    return { transform: 'translateX(22%)', opacity: 0.5, filter: 'blur(3px)', zIndex: 2 };
  }

  if (direction === 1) {
    if (slot === 'left') return { transform: 'translateX(-44%)', opacity: 0, filter: 'blur(4px)', zIndex: 1 };
    if (slot === 'center') return { transform: 'translateX(-22%)', opacity: 0.5, filter: 'blur(3px)', zIndex: 2 };
    if (slot === 'right') return { transform: 'translateX(0%)', opacity: 1, filter: 'blur(0px)', zIndex: 4 };

    return { transform: 'translateX(22%)', opacity: 0.5, filter: 'blur(3px)', zIndex: 2 };
  }

  if (slot === 'right') return { transform: 'translateX(44%)', opacity: 0, filter: 'blur(4px)', zIndex: 1 };
  if (slot === 'center') return { transform: 'translateX(22%)', opacity: 0.5, filter: 'blur(3px)', zIndex: 2 };
  if (slot === 'left') return { transform: 'translateX(0%)', opacity: 1, filter: 'blur(0px)', zIndex: 4 };

  return { transform: 'translateX(-22%)', opacity: 0.5, filter: 'blur(3px)', zIndex: 2 };
}

type CourseCardProps = {
  detail: LinkDetail;
  isExpanded: boolean;
  isInteractiveForeground: boolean;
};

function CourseCard({ detail, isExpanded, isInteractiveForeground }: CourseCardProps) {
  const whatsappUrl = buildWhatsAppLink({
    baseUrl: OUR_WHATSAPP_LINK,
    message: detail.whatsappMessage,
  });

  return (
    <Box
      sx={{
        p: { xs: 3, md: 5 },
        height: isExpanded ? 'auto' : { xs: 460, md: 620 },
        borderRadius: 3,
        backgroundColor: isExpanded ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.7)',
        border: '1px solid rgba(200,164,93,0.28)',
        backdropFilter: 'blur(3px)',
        boxShadow: isExpanded ? '0 20px 40px rgba(54,35,17,0.2)' : '0 16px 30px rgba(54,35,17,0.12)',
        overflow: isExpanded ? 'visible' : 'hidden',
        pointerEvents: isInteractiveForeground ? 'auto' : 'none',
        userSelect: isInteractiveForeground ? 'text' : 'none',
        WebkitUserSelect: isInteractiveForeground ? 'text' : 'none',
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'block',
          color: '#8A7A63',
          letterSpacing: '0.12em',
          fontSize: '0.78rem',
          mb: 0.5,
        }}
      >
        {detail.formatLabel}
      </Typography>

      <Typography variant="h3" sx={{ mb: 2, color: '#6E5B3E', fontSize: { xs: '1.9rem', md: '2.5rem' } }}>
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
        disabled={!isInteractiveForeground}
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
  );
}

export default function LinkDetail() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSlug = searchParams.get('curso');
  const initialIndex = useMemo(() => {
    if (!selectedSlug) return 0;

    const detailIndex = linkDetails.findIndex((item) => item.slug === selectedSlug);
    return detailIndex >= 0 ? detailIndex : 0;
  }, [selectedSlug]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<Direction>(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const animationTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isAnimating) {
      setActiveIndex(initialIndex);
    }
  }, [initialIndex, isAnimating]);

  useEffect(() => {
    return () => {
      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current);
      }
    };
  }, []);

  const getWrappedIndex = (index: number) => {
    const total = linkDetails.length;
    return ((index % total) + total) % total;
  };

  const slideTo = (nextDirection: Direction) => {
    if (isAnimating || nextDirection === 0) return;

    const normalizedIndex = getWrappedIndex(activeIndex + nextDirection);
    const nextDetail = linkDetails[normalizedIndex];

    setNextIndex(normalizedIndex);
    setDirection(nextDirection);
    setIsAnimating(true);

    if (animationTimerRef.current) {
      window.clearTimeout(animationTimerRef.current);
    }

    animationTimerRef.current = window.setTimeout(() => {
      setActiveIndex(normalizedIndex);
      setIsAnimating(false);
      setDirection(0);
      setNextIndex(null);
      setSearchParams({ curso: nextDetail.slug }, { replace: true });
      animationTimerRef.current = undefined;
    }, ANIMATION_MS);
  };

  const detail = linkDetails[activeIndex];
  const prevDetail = linkDetails[getWrappedIndex(activeIndex - 1)];
  const nextDetail = linkDetails[getWrappedIndex(activeIndex + 1)];
  const nextBackgroundDetail = nextIndex !== null ? linkDetails[nextIndex] : null;

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

  return (
    <>
      <Helmet>
        <title>{`${detail.title} | Mentoría espiritual consciente`}</title>
      </Helmet>

      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#f3ece1',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${detail.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            transition: `opacity ${ANIMATION_MS}ms ${TRANSITION_EASING}`,
            opacity: 1,
          }}
        />

        {nextBackgroundDetail && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${nextBackgroundDetail.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
              transition: `opacity ${ANIMATION_MS}ms ${TRANSITION_EASING}`,
              opacity: isAnimating ? 1 : 0,
            }}
          />
        )}

        <Navbar />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(254,252,250,0.92) 15%, rgba(234,223,204,0.86) 55%, rgba(242,198,204,0.68) 100%)',
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            py: { xs: 1.5, md: 2 },
          }}
        >
          <Button
            component={Link}
            to={PageRoutes.HOME}
            startIcon={<ArrowBackIcon />}
            sx={{ mb: { xs: 1.5, md: 2 }, textTransform: 'none', color: '#6E5B3E' }}
          >
            Volver al inicio
          </Button>

          <Box
            sx={{
              position: 'relative',
              display: 'grid',
              minHeight: { xs: 560, md: 740 },
              alignItems: 'start',
              isolation: 'isolate',
            }}
          >
            <IconButton
              aria-label="Curso anterior"
              onClick={() => slideTo(-1)}
              sx={{
                position: 'absolute',
                top: '50%',
                left: { xs: -4, sm: -10, md: -26 },
                transform: 'translateY(-50%)',
                zIndex: 6,
                border: '1px solid rgba(140,106,61,0.28)',
                backgroundColor: 'rgba(255,255,255,0.85)',
                '&:hover': { backgroundColor: '#fff' },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>

            <IconButton
              aria-label="Curso siguiente"
              onClick={() => slideTo(1)}
              sx={{
                position: 'absolute',
                top: '50%',
                right: { xs: -4, sm: -10, md: -26 },
                transform: 'translateY(-50%)',
                zIndex: 6,
                border: '1px solid rgba(140,106,61,0.28)',
                backgroundColor: 'rgba(255,255,255,0.85)',
                '&:hover': { backgroundColor: '#fff' },
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            <Box
              sx={{
                gridArea: '1 / 1',
                mx: 'auto',
                width: { xs: '100%', md: 760 },
                ...getCardMotion('left', direction, isAnimating),
                transition: `transform ${ANIMATION_MS}ms ${TRANSITION_EASING}, opacity ${ANIMATION_MS}ms ${TRANSITION_EASING}, filter ${ANIMATION_MS}ms ${TRANSITION_EASING}`,
              }}
            >
              <CourseCard
                detail={prevDetail}
                isExpanded={direction === -1}
                isInteractiveForeground={false}
              />
            </Box>

            <Box
              sx={{
                gridArea: '1 / 1',
                mx: 'auto',
                width: { xs: '100%', md: 760 },
                ...getCardMotion('center', direction, isAnimating),
                transition: `transform ${ANIMATION_MS}ms ${TRANSITION_EASING}, opacity ${ANIMATION_MS}ms ${TRANSITION_EASING}, filter ${ANIMATION_MS}ms ${TRANSITION_EASING}`,
              }}
            >
              <CourseCard detail={detail} isExpanded isInteractiveForeground />
            </Box>

            <Box
              sx={{
                gridArea: '1 / 1',
                mx: 'auto',
                width: { xs: '100%', md: 760 },
                ...getCardMotion('right', direction, isAnimating),
                transition: `transform ${ANIMATION_MS}ms ${TRANSITION_EASING}, opacity ${ANIMATION_MS}ms ${TRANSITION_EASING}, filter ${ANIMATION_MS}ms ${TRANSITION_EASING}`,
              }}
            >
              <CourseCard
                detail={nextDetail}
                isExpanded={direction === 1}
                isInteractiveForeground={false}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
