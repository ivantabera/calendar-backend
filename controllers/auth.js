const { response } = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario = async( req, res = response ) => {

    // const {name, email, password} = req.body ;

    try {

        const nuevoUsuario = new Usuario( req.body );

        await nuevoUsuario.save();

        // Si todo esta bien respondemos con un status 201
        res.status(201).json({
            ok:true,
            msg:'nuevo usuario'
        });

    } catch (error) {

        res.status(500).json({
            ok:false,
            msg:'Error de registro, hable con el administrador'
        })
        
    }

    
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