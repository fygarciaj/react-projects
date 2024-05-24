'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Grid, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paideia",
  description: "Fabian Yesith Garcia Jurado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
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
              Mi Aplicación
            </Typography>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Opción 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Opción 2</MenuItem>
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
