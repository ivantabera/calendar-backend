const { response } = require('express');

const getEventos = ( req, res = response ) =>{

    res.json({
        ok:true,
        msg:'Estos son los eventos'
    });

};

const createEvento = ( req, res = response ) => {
    
    console.log('req', req.body);

    res.json({
        ok:true,
        msg:'Se creo el evento satisfactoriamente'
    });

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
