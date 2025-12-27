import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Formación', href: '/formacion' },
  { label: 'Campamento', href: '/campamento' },
  { label: 'Terapeutas', href: '/terapeutas' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%' }}>
          {/* Logo */}
          <Typography
            variant="h6"
            fontWeight={600}
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'text.primary',
            }}
          >
            Nombre Apellido
          </Typography>

          {/* Desktop links */}
          <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                component={Link}
                to="/formacion"
                sx={{
                  textDecoration: 'none',
                  color: 'text.primary',
                  fontSize: 14,
                  '&:hover': {
                    opacity: 0.6,
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Stack>

          {/* Mobile menu button */}
          <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer para que el contenido no quede debajo */}
      <Toolbar />

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: '80%',
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
            {navItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                onClick={() => setOpen(false)}
                sx={{
                  fontSize: 18,
                  textDecoration: 'none',
                  color: 'text.primary',
                }}
              >
                {item.label}
              </Box>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
