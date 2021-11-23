const { response } = require('express');

const crearUsuario = ( req, res = response ) => {

    const {name, email, password} = req.body ;

    if ( name.length < 5 ) {
        return  res.status(400).json({
                    ok:'false',
                    msg:'El nombre debe tener mas de 5 letras'
                })
    }

    res.json({
        ok:true,
        msg:'nuevo usuario',
        name:name,
        email:email,
        password:password
    });
};

const loginUsuario = ( req, res = response ) => {

    const { email, password} = req.body ;

    res.json({
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