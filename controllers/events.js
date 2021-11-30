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
    console.log('res', res)
    
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

const updateEvento = ( req, res = response ) => {

    res.json({
        ok:true,
        msg:'Evento actualizado con éxito'
    });

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
