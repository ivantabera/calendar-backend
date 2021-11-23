const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = ( req, res = response ) => {

    const {name, email, password} = req.body ;

    // Ejecutamos la solicitud con el validationResult y la guardamos en una constante
    const errors = validationResult(req);

    // Validamos el resultado y si algo sale mal enviamos retornamos una respuesta 400
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    // Si todo esta bien respondemos con un status 201
    res.status(201).json({
        ok:true,
        msg:'nuevo usuario',
        name:name,
        email:email,
        password:password
    });
};

const loginUsuario = ( req, res = response ) => {

    const { email, password} = req.body ;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    res.status(201).json({
        ok:true,
        msg:'login usuario',
        email:email,
        password:password
    })
};

const revalidarToken = ( req, res = response ) => {
    res.json({
        ok:true,
        msg:'renovar token'
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};