const router = require('express').Router();
const {check} = require('express-validator');
const {fieldsValidator} = require('../middlewares/fields-validator');
const {jwtValidator} = require('../middlewares/jwt-validator');
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const {isDate} = require('../helper/isDate');

/*
    Rutas de Eventos (events routes)
    host + api/events
*/ 

//Todas las rutas deben pasar por la Validacion del Token
router.use(jwtValidator);


//Obtener eventos
router.get('/', getEvents);


//Crear un nuevo evento
router.post(
    '/',
    [
        check('title').exists().withMessage('El Titulo es Obligatorio'),
        check('start').custom(isDate).withMessage('El inicio es Obligatorio'),
        check('end').custom(isDate).withMessage('El final es Obligatorio'),

        fieldsValidator
    ],
    createEvent
);


//Actualizar informacion de un evento
router.put('/:id', updateEvent);


//Eliminar un evento
router.delete('/:id', deleteEvent);

module.exports = router;

