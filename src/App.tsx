import { theme } from './theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import MusicButton from './components/common/MusicButton';
import WhatsAppButton from './components/common/WhatsAppButton';

import './global.css';

// --- Pages ----
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import { PageRoutes } from './helpers/constants';
// import SobreMi from './pages/SobreMi';
// import Lorem1 from './pages/Lorem1';
// import Lorem2 from './pages/Lorem2';
// import Lorem3 from './pages/Lorem3';

// --------------------------------------------------------------

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={PageRoutes.HOME} element={<Home />} />
          {/* <Route path="/lorem1" element={<Lorem1 />} /> */}
          {/* <Route path="/lorem2" element={<Lorem2 />} /> */}
          {/* <Route path="/lorem3" element={<Lorem3 />} /> */}
          {/* <Route path="/sobre-mi" element={<SobreMi />} /> */}
          <Route path={PageRoutes.CONTACTO} element={<Contacto />} />
        </Routes>
        <Footer />
        <MusicButton />
        <WhatsAppButton />
        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
