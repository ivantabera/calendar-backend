/* 
    Rutas de Eventos / Events
    host + /api/events
*/

const { Router } = require("express");
const { getEventos, createEvento, updateEvento, deleteEvento } = require("../controllers/events");
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

/* Validar que todas las rutas validen el JWT si queremos que 
alguna ruta no se valide debera ir arriba de esta linea de codigo
o en su defecto quitar el route.use(validarJWT) y agregar "validarJWT" 
en cada ruta que deseemos validar*/
router.use( validarJWT );

router.get('/', getEventos );

router.post('/', createEvento );

router.put('/:id', updateEvento );

router.delete('/:id', deleteEvento );

module.exports = router;