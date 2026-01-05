import { Box } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PauseIcon from '@mui/icons-material/Pause';
import { useRef, useState } from 'react';

export default function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.25; // Volúmen bajito
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/cancionalejandrina.mpeg" loop />

      <Box
        role="button"
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
        onClick={toggleMusic}
        sx={{
          position: 'fixed',
          bottom: {
            xs: 16 + 56 + 12,
            md: 24 + 56 + 12,
          },
          right: { xs: 16, md: 24 },
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.9)',
          color: '#6E5B3E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          zIndex: 1300,
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
          },
        }}
      >
        {playing ? <PauseIcon sx={{ fontSize: 28 }} /> : <MusicNoteIcon sx={{ fontSize: 28 }} />}
      </Box>
    </>
  );
}
