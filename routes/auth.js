/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

/* Endpoints */
//Rutas post
router.post(
    '/new',
    [//middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es incorrecto').isEmail(),
        check('password','El password debe ser igual o mayor a 5 caracteres').isLength({min:5}),
        validarCampos
    ],
    crearUsuario 
);

router.post(
    '/',
    [//middlewares
        check('email','El email es incorrecto').isEmail(),
        check('password','El password debe ser igual o mayor a 5 caracteres').isLength({min:5}),
        validarCampos
    ],
    loginUsuario
);

// Rutas get
router.get( '/renew', validarJWT, revalidarToken );

module.exports = router;