const {request, response} = require('express');
const jwt = require('jsonwebtoken');


const jwtValidator = (req = request, res = response, next) => {

    //x-token Headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        console.log(payload);
        
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }

}

module.exports = {
    jwtValidator
}