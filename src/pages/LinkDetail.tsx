import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, Container, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import Navbar from '../components/layout/Navbar';
import { CLIENT_WHATSAPP_LINK, PageRoutes } from '../helpers/constants';
import { linkDetails, type LinkDetail } from '../helpers/linkDetails';
import { buildWhatsAppLink } from '../helpers/utils';

const BG_FADE_MS = 380;
const TWEEN_FACTOR_BASE = 0.42;
const CARD_HEIGHT = { xs: 'calc(100dvh - 96px)', md: 'calc(100dvh - 120px)' };

const numberWithinRange = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

type CourseCardProps = {
  detail: LinkDetail;
  isFeatured: boolean;
  isInteractiveForeground: boolean;
};

function CourseCard({ detail, isFeatured, isInteractiveForeground }: CourseCardProps) {
  const whatsappUrl = buildWhatsAppLink({
    baseUrl: CLIENT_WHATSAPP_LINK,
    message: detail.whatsappMessage,
  });

  return (
    <Box
      sx={{
        p: { xs: 3, md: 5 },
        height: CARD_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        backgroundColor: 'rgba(255,255,255,0.96)',
        border: isFeatured ? '1px solid rgba(200,164,93,0.34)' : '1px solid rgba(200,164,93,0.24)',
        backdropFilter: 'blur(3px)',
        boxShadow: isFeatured ? '0 10px 22px rgba(54,35,17,0.14)' : '0 6px 14px rgba(54,35,17,0.08)',
        overflow: 'hidden',
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

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: isInteractiveForeground ? 'auto' : 'hidden',
          pr: isInteractiveForeground ? 1 : 0,
          scrollbarGutter: 'stable',
        }}
      >
        <Typography variant="body1" sx={{ mb: 2, whiteSpace: 'pre-line' }}>
          {detail.description}
        </Typography>

        <List sx={{ mb: 0 }}>
          {detail.highlights.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 1 }}>
              <ListItemText primary={`• ${item}`} primaryTypographyProps={{ color: '#6B6460' }} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Button
        component="a"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        startIcon={<WhatsAppIcon />}
        disabled={!isInteractiveForeground}
        sx={{
          mt: 3,
          alignSelf: 'flex-start',
          flexShrink: 0,
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
  const initialIndex = useMemo(() => {
    const selectedSlug = new URLSearchParams(window.location.search).get('curso');
    if (!selectedSlug) return 0;

    const detailIndex = linkDetails.findIndex((item) => item.slug === selectedSlug);
    return detailIndex >= 0 ? detailIndex : 0;
  }, []);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    startIndex: initialIndex,
  });

  const setTweenNodes = useCallback((api: EmblaCarouselType) => {
    tweenNodes.current = api.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__inner') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((api: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((api: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();
    const slidesInView = api.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopPoint) => {
            const target = loopPoint.target();

            if (slideIndex === loopPoint.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const progress = numberWithinRange(tweenValue, 0, 1);
        const scale = numberWithinRange(0.82 + progress * 0.18, 0.82, 1);
        const tweenNode = tweenNodes.current[slideIndex];
        if (!tweenNode) return;

        tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  const syncSelection = useCallback((api: EmblaCarouselType) => {
    const index = api.selectedScrollSnap();
    setActiveIndex(index);

    const nextDetail = linkDetails[index];
    if (!nextDetail) return;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('curso', nextDetail.slug);
    const nextUrl = `${window.location.pathname}?${searchParams.toString()}${window.location.hash}`;
    window.history.replaceState(window.history.state, '', nextUrl);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    syncSelection(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('reInit', syncSelection)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
      .on('select', syncSelection);
  }, [emblaApi, setTweenFactor, setTweenNodes, syncSelection, tweenScale]);

  const detail = linkDetails[activeIndex];

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
          height: '100dvh',
          overflow: 'hidden',
          backgroundColor: '#f3ece1',
        }}
      >
        {linkDetails.map((item, index) => (
          <Box
            key={item.slug}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
              opacity: activeIndex === index ? 1 : 0,
              transition: `opacity ${BG_FADE_MS}ms ease`,
              willChange: 'opacity',
            }}
          />
        ))}

        <Navbar />

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(254,252,250,0.92) 15%, rgba(234,223,204,0.86) 55%, rgba(242,198,204,0.68) 100%)',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: { xs: '56px', md: '64px' },
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <IconButton
            aria-label="Curso anterior"
            onClick={() => emblaApi?.scrollPrev()}
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: 8, sm: 16, md: 32 },
              transform: 'translateY(-50%)',
              zIndex: 60,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              border: '1px solid rgba(140,106,61,0.28)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              boxShadow: '0 4px 16px rgba(54,35,17,0.18)',
              '&:hover': { backgroundColor: '#fff', boxShadow: '0 6px 20px rgba(54,35,17,0.28)' },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <IconButton
            aria-label="Curso siguiente"
            onClick={() => emblaApi?.scrollNext()}
            sx={{
              position: 'absolute',
              top: '50%',
              right: { xs: 8, sm: 16, md: 32 },
              transform: 'translateY(-50%)',
              zIndex: 60,
              width: { xs: 40, md: 48 },
              height: { xs: 40, md: 48 },
              border: '1px solid rgba(140,106,61,0.28)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              boxShadow: '0 4px 16px rgba(54,35,17,0.18)',
              '&:hover': { backgroundColor: '#fff', boxShadow: '0 6px 20px rgba(54,35,17,0.28)' },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

          <Box
            className="embla"
            sx={{
              width: '100%',
              '--slide-size': { xs: '82%', md: '58%' },
              '--slide-spacing': { xs: '0.9rem', md: '1.25rem' },
            }}
          >
            <Box
              ref={emblaRef}
              className="embla__viewport"
              sx={{ overflow: 'visible' }}
            >
              <Box
                className="embla__container"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  touchAction: 'pan-y pinch-zoom',
                  ml: 'calc(var(--slide-spacing) * -1)',
                }}
              >
                {linkDetails.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <Box
                      key={item.slug}
                      className="embla__slide"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        transform: 'translate3d(0, 0, 0)',
                        flex: '0 0 var(--slide-size)',
                        minWidth: 0,
                        pl: 'var(--slide-spacing)',
                      }}
                    >
                      <Box
                        className="embla__slide__inner"
                        sx={{
                          transformOrigin: 'center center',
                          transition: 'transform 140ms linear, filter 300ms ease, opacity 300ms ease',
                          willChange: 'transform, filter, opacity',
                          filter: isActive ? 'none' : 'blur(5px)',
                          opacity: isActive ? 1 : 0.45,
                        }}
                      >
                        <CourseCard detail={item} isFeatured={isActive} isInteractiveForeground={isActive} />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
