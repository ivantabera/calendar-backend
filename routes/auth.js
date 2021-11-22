/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

/* Endpoints */
//Rutas post
router.post('/new', crearUsuario );

router.post('/', loginUsuario );

// Rutas get
router.get('/renew', revalidarToken );

module.exports = router;