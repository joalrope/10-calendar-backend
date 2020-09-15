const router = require('express').Router();
const {check} = require('express-validator')
const { createUser, userLogin, revalidateToken } = require('../controllers/auth');
const {fieldsValidator} = require('../middlewares/fields-validator');

/*
    Rutas de Usuarios / Auth
    host + api/auth
*/
<<<<<<< HEAD
const router = require('express').Router();


router.post('/new', (req, res) => {
    res.json({
        ok: true,
        msg: 'registro'
    });
});

router.post('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'login'
    });
});

router.get('/renew', (req, res) => {
    res.json({
        ok: true,
        msg: 'renew'
    });
});

=======
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

router.get('/renew', revalidateToken);
>>>>>>> 60d339e546eb81d6ce83b89f6d188d4959cf3b79

module.exports = router;

