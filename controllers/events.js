const { response } = require('express');
const Evento = require('../models/Eventos');

const getEventos =  async( req, res = response ) =>{

    const eventos =  await Evento.find().populate('user', 'name email') ;

    res.json({
        ok:true,
        eventos
    });

};

const createEvento = ( req, res = response ) => {
    
    const evento = new Evento( req.body );

    try {

        evento.user = req.uid;
        evento.save();

        res.status(200).json({
            ok:true,
            msg:'Registro exitoso',
            evento
        });

    } catch (error) {

        console.log('error', error)
        res.status(500).json({
            ok:false,
            msg:'Error de registro, hable con el administrador'
        })

    }

};

const updateEvento = async( req, res = response ) => {

    // Varible para extraer los parametros de la url (peticion)
    const eventoId = req.params.id;
    // Variable para extraer de la peticion el uid del usuario 
    const uid = req.uid;

    try {
        
        // Se guarda en la variable el evento buscado por id
        const evento = await Evento.findById( eventoId );

        // Validar si el evento no existe
        if( !evento ) {
            res.status(400).json({
                ok:false,
                msg:'Error, el evento no existe'
            })
        }

        // Extraemos en la variable con el metodo toString  que Devuelve una cadena que representa al objeto
        const eventoValidacion = evento.user.toString();
        // Validar si el usuario tiene privilegios
        if( eventoValidacion !== uid ){
            res.status(401).json({
                ok:false,
                msg:'Error, el usuario no tiene privilegios para realizar esta operacion'
            })
        }

        // Si las validaciones pasan vamos a armar el evento para actualizarlo con el body de la solicitud
        // y enviando el uid del usuario
        const nuevoEvento = {
            ...req.body,
            user:uid
        }

        // Actualizamos el evento con el id del evento, el nuevo evento armado y el ultimo parametro
        // nos sirve para actualizar de forma inmediata la respuesta del postman
        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, {new:true}); 
        
        // Respondemos con el evento ya actualizado
        res.json({
            ok:true,
            eventoActualizado
        });

    } catch (error) {

        // Control del error si la peticion falla
        console.log('error', error)
        res.status(500).json({
            ok:false,
            msg:'Error, contacta al administrador'
        })
        
    }


};

const deleteEvento = ( req, res = response ) => {

    res.json({
        ok:true,
        msg:'Evento eliminado con éxito'
    });

};

module.exports = {
    getEventos,
    createEvento,
    updateEvento,
    deleteEvento
}
