import React from 'react';
import { useState, useEffect } from 'react';
import './TurnsList.css';
import Title from '../Dashboard/Title';
import Table from '@mui/material/Table';
import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';



export function TurnsList() {

  const [datos, setDatos] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try {

        const response = await axios.get('http://miestacion.test/api/cierres');
        console.log(response.data)
        setDatos(response.data.data);
        console.log(datos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Title>Listado de Ultimos Cierres</Title>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </>
  );
}
