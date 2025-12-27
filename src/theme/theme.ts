import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h2: {
      fontSize: '3.2rem',
      lineHeight: 1.15,
      color: '#6B6460', // gris cálido, elegante y suave
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      color: '#6B6460',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    body1: {
      color: '#6B6460',
    },
    body2: {
      color: '#8A817C', // variante más suave para textos secundarios
    },
  },

  palette: {
    mode: 'light',

    background: {
      default: '#FEFCFA', // blanco roto
      paper: '#EADFCC', // arena clara para cards / panels
    },

    primary: {
      main: '#F2C6CC', // rosa cuarzo
      contrastText: '#6B6460',
    },

    secondary: {
      main: '#B08EA2', // malva suave
      contrastText: '#FEFCFA',
    },

    text: {
      primary: '#6B6460', // gris cálido
      secondary: '#8A817C',
    },

    divider: '#E3D7D0', // separadores muy suaves

    action: {
      hover: 'rgba(242, 198, 204, 0.12)', // rosa cuarzo translúcido
      selected: 'rgba(176, 142, 162, 0.16)',
    },
  },

  shape: {
    borderRadius: 12, // más orgánico y femenino
  },
});
