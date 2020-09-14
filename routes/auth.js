/*
    Rutas de Usuarios / Auth
    host + api/auth
*/


const router = require('express').Router();


router.get('/', (req, res) => {

    console.log('Se rquiere el /')
    res.json({
        ok: true
    });
});


module.exports = router;
