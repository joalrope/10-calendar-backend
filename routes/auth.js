const router = require('express').Router();
const {check} = require('express-validator')
const {fieldsValidator} = require('../middlewares/fields-validator');
const {jwtValidator} = require('../middlewares/jwt-validator');
const {createUser, userLogin, revalidateToken} = require('../controllers/auth');

/*
    Rutas de Usuarios / Auth
    host + api/auth
*/ 
router.post(
    '/new',
    [   //middleware
        check('name')
            .not().isEmpty()
            .withMessage('El nombre es obligatorio'),
        
        check('email')
            .isEmail().withMessage('El email no es valido')
            .exists().withMessage('El email es Obligatorio'),
            
        check('password')
            // .matches('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$')
            // .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character'),
            .isLength({min: 6}).withMessage('El password debe tener al menos 6 caracteres'),
        
        fieldsValidator
    ],
    createUser
    );
    
router.post(
    '/',
    [   //middleware
        check('email')
            .isEmail().withMessage('El email no es valido')
            .exists().withMessage('El email es Obligatorio'),
            
        check('password')
            // .matches('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$')
            // .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character'),
            .isLength({min: 6}).withMessage('El password debe tener al menos 6 caracteres'),
        
        fieldsValidator
    ],
    userLogin);

router.get('/renew', jwtValidator, revalidateToken);

module.exports = router;

