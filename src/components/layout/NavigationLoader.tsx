import { LinearProgress, Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SHOW_DELAY = 120; // ms antes de mostrar
const MIN_VISIBLE = 400; // ms visible mínimo

export default function NavigationLoader() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const showTimeout = useRef<number | null>(null);
  const hideTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Limpiar timers previos
    if (showTimeout.current) clearTimeout(showTimeout.current);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);

    // Programar aparición
    showTimeout.current = window.setTimeout(() => {
      setVisible(true);

      // Programar ocultamiento SOLO después de mostrarse
      hideTimeout.current = window.setTimeout(() => {
        setVisible(false);
      }, MIN_VISIBLE);
    }, SHOW_DELAY);

    return () => {
      if (showTimeout.current) clearTimeout(showTimeout.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
    >
      <LinearProgress
        sx={{
          height: 2,
          backgroundColor: 'rgba(255,255,255,0.15)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#9A6B1F',
          },
        }}
      />
    </Box>
  );
}
