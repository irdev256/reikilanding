import { Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CLIENT_WHATSAPP_LINK, WHATSAPP_DEFAULT_MESSAGE } from '../../helpers/constants';
import { buildWhatsAppLink } from '../../helpers/utils';

export default function WhatsAppButton() {
  const whatsappUrl = buildWhatsAppLink({
    baseUrl: CLIENT_WHATSAPP_LINK,
    message: WHATSAPP_DEFAULT_MESSAGE,
  });
  return (
    <Box
      component="a"
      href={whatsappUrl}
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
