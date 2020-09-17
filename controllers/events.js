const {request, response} = require('express');
const Event = require('../models/Event');

const getEvents = (req = request, res = response ) => {
    
    res.json({
        ok: true,
        msg: 'Obtener eventos'
    });
}


const createEvent = async(req = request, res = response ) => {

    const event = new Event(req.body);

    try {
        event.user = req.uid;
        const savedEvent = await event.save()

        res.json({
            ok: true,
            msg: 'Evento creado',
            evento: savedEvent
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
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
