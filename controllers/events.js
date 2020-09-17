const {request, response} = require('express');

const getEvents = (req = request, res = response ) => {
    
    res.json({
        ok: true,
        msg: 'Obtener eventos'
    });
}


const createEvent = (req = request, res = response ) => {

    res.json({
        ok: true,
        msg: 'Crear evento'
    })
}


const updateEvent = (req = request, res = response ) => {

    res.json({
        // '/123456'
        ok: true,
        msg: 'Actualizar evento'
    });
}


const deleteEvent = (req = request, res = response ) => {

    res.json({
        // '/123456'
        ok: true,
        msg: 'Borrar evento'
    });
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
