import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import NavigationLoader from './NavigationLoader';
import { Link, useLocation } from 'react-router-dom';
import { HomeSection, NavItems } from '../../helpers/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const visibleNavItems = NavItems.filter((item) => {
    // Si no estoy en Home, oculto sections
    if (!isHome && item.type === 'anchor') return false;

    // Si es route y estoy parado en esa misma ruta, ocultarla
    if (item.type === 'route' && location.pathname === item.href) return false;

    return true;
  });

  const hasNavItems = visibleNavItems.length > 0;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(168, 160, 160, 0.5)', // vidrio oscuro
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          color: '#fff',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
          <Box
            component="a"
            href={`/#${HomeSection.HERO}`}
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              textDecoration: 'none',
            }}
          >
            <Box
              component="img"
              src="/sunflower1.png"
              alt="Girasol"
              sx={{
                width: 28,
                height: 28,
                objectFit: 'contain',
              }}
            />

            <Typography
              sx={{
                fontFamily: '"Ms Madi", cursive',
                fontWeight: 400,
                fontSize: { xs: 26, md: 32 },
                lineHeight: 1,
                color: '#fafafa',
                whiteSpace: 'nowrap',
              }}
            >
              Alejandrina González
            </Typography>
          </Box>

          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {visibleNavItems.map((item) =>
              item.type === 'route' ? (
                <Box key={item.label} component={Link} to={item.href} sx={linkStyle}>
                  {item.label}
                </Box>
              ) : (
                <Box key={item.label} component="a" href={`/#${item.href}`} sx={linkStyle}>
                  {item.label}
                </Box>
              )
            )}
          </Stack>

          {/* Mobile menu button */}
          {hasNavItems && (
            <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer para que el contenido no quede debajo */}
      <Toolbar />
      {hasNavItems && (
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: '40%',
              maxWidth: 300,
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            <Stack spacing={3} mt={4}>
              {visibleNavItems.map((item) =>
                item.type === 'route' ? (
                  <Box key={item.label} component={Link} to={item.href} onClick={() => setOpen(false)} sx={drawerLinkStyle}>
                    {item.label}
                  </Box>
                ) : (
                  <Box key={item.label} component="a" href={`/#${item.href}`} onClick={() => setOpen(false)} sx={drawerLinkStyle}>
                    {item.label}
                  </Box>
                )
              )}
            </Stack>
          </Box>
        </Drawer>
      )}

      <NavigationLoader />
    </>
  );
}

// ------------- Styles ----------------

const linkStyle = {
  textDecoration: 'none',
  color: '#fafafa',
  fontSize: 14,
  cursor: 'pointer',
  '&:hover': { opacity: 0.6 },
};

const drawerLinkStyle = {
  fontSize: 18,
  textDecoration: 'none',
  color: 'text.primary',
};
