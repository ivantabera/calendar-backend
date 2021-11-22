const { response } = require('express');

const crearUsuario = ( req, res = response ) => {
    res.json({
        ok:true,
        msg:'nuevo usuario'
    });
};

const loginUsuario = ( req, res = response ) => {
    res.json({
        ok:true,
        msg:'login usuario'
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
    registroUsuario,
    loginUsuario,
    revalidarToken
};