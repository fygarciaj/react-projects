import { createPool } from 'mysql2/promise'

const poolDatosIps = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'kibox_datosips'
})

export { poolDatosIps }

const poolFacturasIps = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'kibox_facturasips'
})

export { poolFacturasIps }
