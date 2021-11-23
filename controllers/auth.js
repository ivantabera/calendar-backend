const { response } = require('express');

const crearUsuario = ( req, res = response ) => {

    const {name, email, password} = req.body ;

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