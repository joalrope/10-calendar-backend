const express = require('express');


// Crear el servidor de Express
const app = express();



// Establecer rutas
app.get('/', (req, res) => {

    console.log('Se rquiere el /')
    res.json({
        ok: true
    });
});




// Escuchar peticiones
app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto: ${4000}`);
});