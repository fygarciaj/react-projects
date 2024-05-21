import { Box, Container, Grid } from "@mui/material";
import AppointmentForToday from "./components/AppointmentForToday";


export default function Appointment() {


    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: 'primary.main', height: '100vh' }}>
                        {/* Contenido de la columna de 4 */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ bgcolor: 'secondary.main', height: '100vh' }}>
                        <AppointmentForToday />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );

}