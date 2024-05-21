'use client'
import { AppBar, Box, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import AppointmentForToday from "./components/AppointmentForToday";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


export default function Appointment() {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
      setAnchorEl(null);
  };

  return (
    <>
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
              <AppointmentForToday />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );

}