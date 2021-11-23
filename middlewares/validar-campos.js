const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response , next) => {

    // Ejecutamos la solicitud con el validationResult y la guardamos en una constante
    const errors = validationResult(req);

    // Validamos el resultado y si algo sale mal enviamos retornamos una respuesta 400
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    next();

};

module.exports = {
    validarCampos
}