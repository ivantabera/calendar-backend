/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

/* Endpoints */
//Rutas post
router.post(
    '/new',
    [//middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es incorrecto').isEmail(),
        check('password','El password debe ser igual o mayor a 5 caracteres').isLength({min:5})
    ],
    crearUsuario 
);

router.post(
    '/',
    [//middlewares
        check('email','El email es incorrecto').isEmail(),
        check('password','El password debe ser igual o mayor a 5 caracteres').isLength({min:5})
    ],
    loginUsuario
);

// Rutas get
router.get('/renew', revalidarToken );

module.exports = router;