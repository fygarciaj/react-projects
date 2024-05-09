import axios from 'axios';

const api = axios.create({
  baseURL: 'http://miestacion.test', // Reemplaza con la URL de tu servidor
  headers: {
    'Access-Control-Allow-Origin': '*', // Esto permite solicitudes desde cualquier origen, ajusta según tus necesidades de seguridad
    'Content-Type': 'application/json',
  },
});

axios.defaults.withCredentials = true;

export default api;