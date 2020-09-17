const router = require('express').Router();
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const {jwtValidator} = require('../middlewares/jwt-validator');

/*
    Rutas de Eventos (events routes)
    host + api/events
*/ 

//Todas las rutas deben pasar por la Validacion del Token
router.use(jwtValidator);


//Obtener eventos
router.get('/', getEvents);


//Crear un nuevo evento
router.post('/', createEvent);


//Actualizar informacion de un evento
router.put('/:id', updateEvent);


//Eliminar un evento
router.delete('/:id', deleteEvent);

module.exports = router;

