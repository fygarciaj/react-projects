'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Select, MenuItem, FormControl, InputLabel, TextField,
  Box,
  Typography
} from '@mui/material';
import { AppointmentStatus } from './AppointmentStatus';


function AppointmentForToday() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [doctorName, setDoctorName] = useState('')

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
    fetchAppointments(today, selectedDoctor);
    fetchDoctors();
  }, []);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    fetchAppointments(newDate, selectedDoctor);
  };

  const handleDoctorChange = (event) => {
    const newDoctor = event.target.value;
    setSelectedDoctor(newDoctor);
    setDoctorName(newDoctor.NombreMedico);
    fetchAppointments(selectedDate, newDoctor);
  };

  const fetchAppointments = async (date, doctor) => {
    try {
      let url = `/api/kibox/tablacitas?fecha=${date}`;
      if (doctor) {
        url += `&doctor=${doctor}`;
      }
      const response = await axios.get(url);
      setAppointments(response.data.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchDoctors = async () => {
    try {

      let url = '/api/kibox/tablaripsmedico';
      const response = await axios.get(url);
      setDoctors(response.data.data);
      console.log(doctors);
    }
    catch (error) {
      console.log('Error fetching doctors: ', error);
    }
  };

  const formatDate = (dateString) => {
    return dateString.split('T')[0];
  };



  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard" fullWidth>
        <TextField
          id="date"
          label="Fecha de Cita"
          type="date"
          value={selectedDate}
          variant="standard"
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </FormControl>
      <FormControl fullWidth margin="normal" variant="standard">
        <InputLabel id="doctor-select-label">Doctor</InputLabel>
        <Select
          labelId="doctor-select-label"
          name='doctor'
          value={selectedDoctor}
          onChange={handleDoctorChange}
        >
          <MenuItem value="">
            <em>Seleccione un doctor</em>
          </MenuItem>
          {doctors.map((doctor) => (
            <MenuItem key={doctor.Id} value={doctor.NumeroDocumento}>
              {doctor.NombreMedico}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography>
        { doctorName }
      </Typography>
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
    </Box>
  );
}

export default AppointmentForToday;
