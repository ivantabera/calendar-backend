const jwt = require('jsonwebtoken');

const generarJWT = ( uid, name ) => {

    return new Promise( ( resolve, reject ) => {

        // Creamos el payload
        const payload = { uid, name };

        // Creamos el token con jwt y lo firmamos con sign mandandole el token, la clave secreta, expiracion
        // callback para validar si hay algun error y si todo sale bien resolvemos con el token
        jwt.sign( 
            payload, 
            process.env.SECRET_JWT_SEED, 
            { expiresIn:'2h'},
            ( err, token ) => {
                
                if(err){
                    console.log('err', err)
                    reject('No se pudo generar el token')
                }

                resolve(token);

            }
        )
    } )
}

module.exports = {
    generarJWT
}