const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');



// Crear el servidor de Express
const app = express();


// Base de Datos
dbConnection();



// Middlewares (Funciones que se ejecutaran cada vez que se realicen peticiones)
// Directorio publico (Archivos estaticos)
app.use(express.static('public'));



// Lectura y parseo del body
app.use(express.json());



// Rutas
app.use('/api/auth', require('./routes/auth'));



// Establecer rutas
// TODO: auth // crear, login, renew token
// TODO: CRUD: Eventos



// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});