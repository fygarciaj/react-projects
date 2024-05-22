import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { AppointmentStatus } from "./AppointmentStatus";

export function AppointmentTableToday({ appointments }) {

  const formatDate = (dateString) => {
    return dateString.split('T')[0];
  };


    return (
      <>
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Hora</TableCell>
                <TableCell>Paciente</TableCell>
                <TableCell>Entidad</TableCell>
                <TableCell>Contacto</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <TableRow key={appointment.Id}>
                    <TableCell>{formatDate(appointment.Fecha)}</TableCell>
                    <TableCell>{appointment.Hora}</TableCell>
                    <TableCell>{appointment.Paciente}</TableCell>
                    <TableCell>{appointment.Entidad}</TableCell>
                    <TableCell>{appointment.Telefono}</TableCell>
                    <AppointmentStatus status={appointment.Estado} />
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7}>No hay citas para esta fecha.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
  