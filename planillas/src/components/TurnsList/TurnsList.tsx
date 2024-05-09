import { useState, useEffect } from 'react';
import './TurnsList.css';
import Title from '../Dashboard/Title';
import Table from '@mui/material/Table';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import api from '../../utils/api.tsx';



export  function TurnsList() {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Definimos una función asincrónica dentro de useEffect para poder usar await
    async function fetchData() {
      try {
        // Hacemos la solicitud HTTP usando Axios
        const response = await api.get('http://miestacion.test/api/cierres');
        console.log(response.data)
        // Actualizamos el estado con los datos recibidos
        setDatos(response.data);

      } catch (error) {
        // Manejo de errores
        console.error('Error fetching data:', error);
      }
    }

    // Llamamos a la función fetchData() para obtener los datos cuando el componente se monta
    fetchData();
  }, []); // El array vacío indica que este efecto se ejecuta solo una vez, equivalente a componentDidMount en clases


  return (
    <>
      <Title>Listado de Ultimos Cierres</Title>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datos.map((dato) => (
            <TableRow key={dato.Id}>
              <TableCell>{dato.Id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </>
  );
}
