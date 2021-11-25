const { response } = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario = async( req, res = response ) => {

    const { email, password } = req.body ;

    try {

        let usuario = await Usuario.findOne({ email });
        console.log('usuario', usuario);

        if (usuario) {
            return res.status(400).json({
                ok:false,
                msg:'El correo electronico ya existe'
            })
        }

        usuario = new Usuario( req.body );

        await usuario.save();

        // Si todo esta bien respondemos con un status 201
        res.status(201).json({
            ok:true,
            uid:usuario._id,
            name:usuario.name
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