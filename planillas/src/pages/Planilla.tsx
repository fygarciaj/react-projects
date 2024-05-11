import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import { Title } from './../components/Title/Title';


export function Planilla() {


    return (
        <>
        <Container maxWidth='lg' sx={{ color: 'pink' }}>
            <Title>Planilla de Caja</Title>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Title>Turnos</Title>
                </Grid>
                <Grid item xs={8}>
                    <Paper>
                        <Title>Turno: FULANITO DE TAL</Title>
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        </>
    );

}