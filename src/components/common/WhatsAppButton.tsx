import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
  return (
    <Box
      component="a"
      href="https://wa.me/123" // 👈 CAMBIAR POR EL NÚMERO REAL
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 24 },
        right: { xs: 16, md: 24 },
        width: 56,
        height: 56,
        borderRadius: '50%',
        backgroundColor: '#25D366',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        zIndex: 1300,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
        },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 30 }} />
    </Box>
  );
}
