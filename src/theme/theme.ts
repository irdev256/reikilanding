import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h2: {
      fontSize: '3.2rem',
      lineHeight: 1.15,
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#111111',
    },
    text: {
      primary: '#111111',
      secondary: '#555555',
    },
  },
});
