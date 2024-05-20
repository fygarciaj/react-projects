import mysql, { PoolOptions } from 'mysql2/promise'

const access: PoolOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kibox_datosips',
    rowsAsArray: false
} 

export const kiboxDatosIpsPool = mysql.createPool(access);