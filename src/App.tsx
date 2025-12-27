import { theme } from './theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import WhatsAppButton from './components/common/WhatsAppButton';

// --- Pages ----
import Home from './pages/Home';
import Formacion from './pages/Formacion';

// --------------------------------------------------------------

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formacion" element={<Formacion />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
