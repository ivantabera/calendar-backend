/* 
    Rutas de Eventos / Events
    host + /api/events
*/

const { Router } = require("express");
const { getEventos, createEvento, updateEvento, deleteEvento } = require("../controllers/events");
const { validarJWT } = require('../middlewares/validar-jwt');

const { check } = require('express-validator');
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

const router = Router();

/* Validar que todas las rutas validen el JWT si queremos que 
alguna ruta no se valide debera ir arriba de esta linea de codigo
o en su defecto quitar el route.use(validarJWT) y agregar "validarJWT" 
en cada ruta que deseemos validar*/
router.use( validarJWT );

router.get('/', getEventos );

router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de fin es obligatoria').custom( isDate ),
        validarCampos
    ],
    createEvento 
);

router.put('/:id', updateEvento );

router.delete('/:id', deleteEvento );

module.exports = router;