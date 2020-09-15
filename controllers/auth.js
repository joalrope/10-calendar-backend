const {response} = require('express');

const createUser = (req, res = response) => {

    const {name, email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'Register',
        name,
        email,
        password
    });
};


const userLogin = (req, res = response ) => {
    
    const {email, password} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'Login',
        email,
        password
    });
};


const revalidateToken = (req, res = response ) => {
    res.json({
        ok: true,
        msg: 'Renew'
    });
};


module.exports = {
    createUser,
    userLogin,
    revalidateToken
}
