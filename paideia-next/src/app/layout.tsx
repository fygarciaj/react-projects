'use client'
import "./globals.css";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Grid, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <html lang="es">
      <body>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Aplicación
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose} component={Link} href="/">Home</MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link href="/appointment">Appointments</Link>
                </MenuItem>
              <MenuItem onClick={handleMenuClose}>Opción 3</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: '100vh' }}>
                {/* Contenido de la columna de 4 */}
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ height: '100vh' }}>
                {children}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </body>
    </html>
  );
}
