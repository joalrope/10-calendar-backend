const {response} = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');



const createUser = async(req, res = response) => {

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: `Ya existe un usuario con el correo ${email}`
            });
        } else {  
            user = new User(req.body);

            //Encriptar contraseña
            const salt = bcrypt.genSaltSync();
            
            user.password = bcrypt.hashSync(password, salt);

            await user.save();
            
            res.status(201).json({
                ok: true,
                uid: user.id,
                name: user.name
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
};


const userLogin =async (req, res = response ) => {
    
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});

        // Verificar si existe el usuario 
        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: `El usuario y/o contraseña no son correctos`
            });
        }

        // Confirmar matrch de los password
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: `Contraseña incorrecta`
            });
        }

        //Generar JWT (Json Web Token)

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        });


        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

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
